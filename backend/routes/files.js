const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const {
  getFileStorageDriver,
  getR2Client,
  getR2Config,
  getSupabaseAdmin,
  getSupabaseConfig
} = require('../lib/fileStorage');
const { getUploadDir } = require('../lib/storagePaths');
const MAX_UPLOAD_MB = Math.max(1, Number(process.env.MAX_UPLOAD_MB || 500));
const MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024;

// Create the upload dir at boot if it does not already exist.  Wrapped in
// try/catch so a full or unmounted Railway volume can't take down the server.
const UPLOAD_DIR = getUploadDir();
const FILE_STORAGE_DRIVER = getFileStorageDriver();
try {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
} catch (err) {
  console.error(`Could not ensure upload dir ${UPLOAD_DIR}:`, err.message);
}

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
      try {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
      } catch (err) {
        cb(err);
      }
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

function buildStoredFile(projectId, file, filename) {
  return {
    id: uuidv4(),
    name: file.originalname,
    filename,
    path: `/api/files/${projectId}/${filename}`,
    size: file.size,
    mimetype: file.mimetype,
    uploadedAt: new Date().toISOString()
  };
}

router.post('/upload', (req, res, next) => {
  const middleware = FILE_STORAGE_DRIVER === 'local' ? diskUpload : memoryUpload;
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

    if (FILE_STORAGE_DRIVER === 'local') {
      const uploaded = req.files.map((file) => ({
        ...buildStoredFile(projectId, file, file.filename)
      }));
      return res.json({ ok: true, files: uploaded });
    }

    const uploaded = [];

    if (FILE_STORAGE_DRIVER === 'supabase') {
      const supabase = getSupabaseAdmin();
      const { bucket } = getSupabaseConfig();

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
        uploaded.push(buildStoredFile(projectId, file, filename));
      }
    } else if (FILE_STORAGE_DRIVER === 'r2') {
      const { PutObjectCommand } = require('@aws-sdk/client-s3');
      const r2 = getR2Client();
      const { bucket } = getR2Config();

      for (const file of req.files) {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_\-]/g, '_');
        const filename = `${uuidv4()}_${name}${ext}`;
        const objectPath = `${projectId}/${filename}`;

        await r2.send(new PutObjectCommand({
          Bucket: bucket,
          Key: objectPath,
          Body: file.buffer,
          ContentType: file.mimetype
        }));

        uploaded.push(buildStoredFile(projectId, file, filename));
      }
    }

    res.json({ ok: true, files: uploaded });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message || 'Upload failed' });
  }
});

router.get('/:projectId/:filename', async (req, res) => {
  if (FILE_STORAGE_DRIVER === 'local') {
    const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
    return res.download(filePath);
  }

  try {
    const objectPath = `${req.params.projectId}/${req.params.filename}`;

    if (FILE_STORAGE_DRIVER === 'supabase') {
      const supabase = getSupabaseAdmin();
      const { bucket } = getSupabaseConfig();
      const { data, error } = await supabase.storage.from(bucket).download(objectPath);

      if (error || !data) return res.status(404).json({ error: 'File not found' });

      res.setHeader('Content-Disposition', `attachment; filename="${req.params.filename}"`);
      res.setHeader('Content-Type', data.type || 'application/octet-stream');
      res.send(Buffer.from(await data.arrayBuffer()));
      return;
    }

    if (FILE_STORAGE_DRIVER === 'r2') {
      const { GetObjectCommand } = require('@aws-sdk/client-s3');
      const r2 = getR2Client();
      const { bucket } = getR2Config();
      const data = await r2.send(new GetObjectCommand({
        Bucket: bucket,
        Key: objectPath
      }));

      if (!data || !data.Body) return res.status(404).json({ error: 'File not found' });

      res.setHeader('Content-Disposition', `attachment; filename="${req.params.filename}"`);
      res.setHeader('Content-Type', data.ContentType || 'application/octet-stream');
      if (data.ContentLength) res.setHeader('Content-Length', String(data.ContentLength));

      if (typeof data.Body.pipe === 'function') {
        data.Body.pipe(res);
        return;
      }

      if (typeof data.Body.transformToByteArray === 'function') {
        const body = await data.Body.transformToByteArray();
        res.send(Buffer.from(body));
        return;
      }
    }

    return res.status(404).json({ error: 'File not found' });
  } catch (err) {
    res.status(500).json({ error: err.message || 'File download failed' });
  }
});

router.delete('/:projectId/:filename', async (req, res) => {
  if (FILE_STORAGE_DRIVER === 'local') {
    const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
    fs.unlinkSync(filePath);
    return res.json({ ok: true, message: 'File deleted' });
  }

  try {
    const objectPath = `${req.params.projectId}/${req.params.filename}`;

    if (FILE_STORAGE_DRIVER === 'supabase') {
      const supabase = getSupabaseAdmin();
      const { bucket } = getSupabaseConfig();
      const { error } = await supabase.storage.from(bucket).remove([objectPath]);

      if (error) return res.status(404).json({ error: 'File not found' });
      res.json({ ok: true, message: 'File deleted' });
      return;
    }

    if (FILE_STORAGE_DRIVER === 'r2') {
      const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
      const r2 = getR2Client();
      const { bucket } = getR2Config();
      await r2.send(new DeleteObjectCommand({
        Bucket: bucket,
        Key: objectPath
      }));
      res.json({ ok: true, message: 'File deleted' });
      return;
    }

    return res.status(404).json({ error: 'File not found' });
  } catch (err) {
    console.error('File delete error:', err);
    return res.status(500).json({ error: err.message || 'File delete failed' });
  }
});

module.exports = router;
