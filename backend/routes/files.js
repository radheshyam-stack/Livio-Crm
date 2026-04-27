const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { getUploadDir } = require('../lib/storagePaths');

const MAX_UPLOAD_MB = Math.max(1, Number(process.env.MAX_UPLOAD_MB || 500));
const MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024;

// Create the upload dir at boot if it does not already exist.  Wrapped in
// try/catch so a full or unmounted Railway volume can't take down the server.
const UPLOAD_DIR = getUploadDir();
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

const upload = multer({
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

router.post('/upload', (req, res, next) => {
  upload.array('files', 20)(req, res, (err) => {
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

    const uploaded = req.files.map((file) => ({
      id: uuidv4(),
      name: file.originalname,
      filename: file.filename,
      path: `/uploads/${projectId}/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype,
      uploadedAt: new Date().toISOString()
    }));

    res.json({ ok: true, files: uploaded });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message || 'Upload failed' });
  }
});

// GET /api/files/:projectId/:filename — force a download rather than an inline view.
router.get('/:projectId/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  return res.download(filePath);
});

router.delete('/:projectId/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  try {
    fs.unlinkSync(filePath);
    return res.json({ ok: true, message: 'File deleted' });
  } catch (err) {
    console.error('File delete error:', err);
    return res.status(500).json({ error: err.message || 'File delete failed' });
  }
});

module.exports = router;
