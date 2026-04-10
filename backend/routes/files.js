const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { getSupabaseAdmin, getSupabaseConfig, hasSupabaseConfig } = require('../lib/supabase');
const { getUploadDir } = require('../lib/storagePaths');

const UPLOAD_DIR = getUploadDir();
const MAX_UPLOAD_MB = Math.max(1, Number(process.env.MAX_UPLOAD_MB || 500));
const MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024;
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

function allowFile(req, file, cb) {
  const allowed = /\.(pdf|doc|docx|xls|xlsx|png|jpg|jpeg|gif|webp|svg|txt|csv|zip|dwg|dxf)$/i;
  if (allowed.test(path.extname(file.originalname))) {
    cb(null, true);
  } else {
    cb(new Error('File type not allowed: ' + path.extname(file.originalname)));
  }
}

const diskUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const projectId = req.body.projectId || req.query.projectId || 'general';
      const dir = path.join(UPLOAD_DIR, projectId);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_\-]/g, '_');
      cb(null, `${uuidv4()}_${name}${ext}`);
    }
  }),
  limits: { fileSize: MAX_UPLOAD_BYTES },
  fileFilter: allowFile
});

const memoryUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_UPLOAD_BYTES },
  fileFilter: allowFile
});

router.post('/upload', (req, res, next) => {
  const middleware = hasSupabaseConfig() ? memoryUpload : diskUpload;
  middleware.array('files', 20)(req, res, (err) => {
    if (!err) return next();
    if (err instanceof multer.MulterError) {
      const msg = err.code === 'LIMIT_FILE_SIZE'
        ? `File too large. Max ${MAX_UPLOAD_MB}MB per file.`
        : err.message;
      return res.status(413).json({ error: msg });
    }
    return res.status(400).json({ error: err.message || 'Upload failed' });
  });
}, async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const projectId = req.body.projectId || req.query.projectId || 'general';

    if (!hasSupabaseConfig()) {
      const uploaded = req.files.map((file) => ({
        id: uuidv4(),
        name: file.originalname,
        filename: file.filename,
        path: `/uploads/${projectId}/${file.filename}`,
        size: file.size,
        mimetype: file.mimetype,
        uploadedAt: new Date().toISOString()
      }));
      return res.json({ ok: true, files: uploaded });
    }

    const supabase = getSupabaseAdmin();
    const { bucket } = getSupabaseConfig();
    const uploaded = [];

    for (const file of req.files) {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_\-]/g, '_');
      const filename = `${uuidv4()}_${name}${ext}`;
      const objectPath = `${projectId}/${filename}`;

      const { error } = await supabase.storage.from(bucket).upload(objectPath, file.buffer, {
        cacheControl: '3600',
        contentType: file.mimetype,
        upsert: false
      });

      if (error) throw error;

      uploaded.push({
        id: uuidv4(),
        name: file.originalname,
        filename,
        path: `/uploads/${projectId}/${filename}`,
        size: file.size,
        mimetype: file.mimetype,
        uploadedAt: new Date().toISOString()
      });
    }

    res.json({ ok: true, files: uploaded });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Upload failed' });
  }
});

router.get('/:projectId/:filename', async (req, res) => {
  if (!hasSupabaseConfig()) {
    const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
    return res.download(filePath);
  }

  try {
    const supabase = getSupabaseAdmin();
    const { bucket } = getSupabaseConfig();
    const objectPath = `${req.params.projectId}/${req.params.filename}`;
    const { data, error } = await supabase.storage.from(bucket).download(objectPath);

    if (error || !data) return res.status(404).json({ error: 'File not found' });

    res.setHeader('Content-Disposition', `attachment; filename="${req.params.filename}"`);
    res.setHeader('Content-Type', data.type || 'application/octet-stream');
    res.send(Buffer.from(await data.arrayBuffer()));
  } catch (err) {
    res.status(500).json({ error: err.message || 'File download failed' });
  }
});

router.delete('/:projectId/:filename', async (req, res) => {
  if (!hasSupabaseConfig()) {
    const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
    fs.unlinkSync(filePath);
    return res.json({ ok: true, message: 'File deleted' });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { bucket } = getSupabaseConfig();
    const objectPath = `${req.params.projectId}/${req.params.filename}`;
    const { error } = await supabase.storage.from(bucket).remove([objectPath]);

    if (error) return res.status(404).json({ error: 'File not found' });
    res.json({ ok: true, message: 'File deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message || 'File delete failed' });
  }
});

module.exports = router;
