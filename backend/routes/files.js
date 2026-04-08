// ── File Upload / Download API Routes ────────────────────────
// Base: /api/files

const express  = require('express');
const router   = express.Router();
const multer   = require('multer');
const path     = require('path');
const fs       = require('fs');
const { v4: uuidv4 } = require('uuid');

const UPLOAD_DIR = path.resolve(process.env.UPLOAD_DIR || path.join(__dirname, '../uploads'));
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// ── Multer storage ────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  destination: (req, file, cb) => {
    // Organise by project ID if provided
    const projectId = req.body.projectId || req.query.projectId || 'general';
    const dir = path.join(UPLOAD_DIR, projectId);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext  = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_\-]/g, '_');
    cb(null, `${uuidv4()}_${name}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
  fileFilter: (req, file, cb) => {
    // Allow common document / image / spreadsheet types
    const ALLOWED = /\.(pdf|doc|docx|xls|xlsx|png|jpg|jpeg|gif|webp|svg|txt|csv|zip|dwg|dxf)$/i;
    if (ALLOWED.test(path.extname(file.originalname))) {
      cb(null, true);
    } else {
      cb(new Error('File type not allowed: ' + path.extname(file.originalname)));
    }
  }
});

// ── POST /api/files/upload — upload one or more files ─────────
router.post('/upload', upload.array('files', 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }
  const uploaded = req.files.map(f => ({
    id:       uuidv4(),
    name:     f.originalname,
    filename: f.filename,
    path:     `/uploads/${req.body.projectId || 'general'}/${f.filename}`,
    size:     f.size,
    mimetype: f.mimetype,
    uploadedAt: new Date().toISOString()
  }));
  res.json({ ok: true, files: uploaded });
});

// ── GET /api/files/:projectId/:filename — download a file ─────
router.get('/:projectId/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  res.download(filePath);
});

// ── DELETE /api/files/:projectId/:filename ─────────────────────
router.delete('/:projectId/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.projectId, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  fs.unlinkSync(filePath);
  res.json({ ok: true, message: 'File deleted' });
});

module.exports = router;
