// ════════════════════════════════════════════════════════════
//  Livio Building Systems — Backend API Server
//  Run:  npm install   →   npm run dev   (or npm start)
//  API base: http://localhost:3001/api
// ════════════════════════════════════════════════════════════

require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const path     = require('path');
const fs       = require('fs');

const app  = express();
const PORT = process.env.PORT || 3001;
const UPLOAD_DIR = path.resolve(process.env.UPLOAD_DIR || path.join(__dirname, 'uploads'));
const STORAGE_DRIVER = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY ? 'supabase' : 'local';

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// ── Middleware ────────────────────────────────────────────────
const allowedOrigins=(process.env.FRONTEND_ORIGIN||'')
  .split(',')
  .map(s=>s.trim())
  .filter(Boolean);
const localOrigins=[
  'http://127.0.0.1:4173',
  'http://localhost:4173',
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'http://127.0.0.1:3000',
  'http://localhost:3000'
];
app.use(cors({
  origin(origin, callback){
    if(!origin) return callback(null, true);
    if(!allowedOrigins.length || allowedOrigins.includes('*')) return callback(null, true);
    if(allowedOrigins.includes(origin) || localOrigins.includes(origin)) return callback(null, true);
    return callback(null, false);
  },
  methods: ['GET','POST','PUT','DELETE','PATCH'],
  allowedHeaders: ['Content-Type','Authorization']
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve uploaded files statically
app.use('/uploads', express.static(UPLOAD_DIR));

// ── Routes ────────────────────────────────────────────────────
app.use('/api/projects', require('./routes/projects'));
app.use('/api/email',    require('./routes/email'));
app.use('/api/files',    require('./routes/files'));

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    server: 'Livio Building Systems API',
    version: '1.0.0',
    storage: STORAGE_DRIVER,
    time: new Date().toISOString()
  });
});

// ── 404 handler ───────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found: ' + req.path });
});

// ── Error handler ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  Livio Building Systems — API Server   ║');
  console.log('╚════════════════════════════════════════╝');
  console.log(`  URL     : http://localhost:${PORT}`);
  console.log(`  Health  : http://localhost:${PORT}/api/health`);
  console.log(`  Storage : ${STORAGE_DRIVER}`);
  console.log(`  Data    : ${path.resolve(process.env.DB_FILE || './data/db.json')}`);
  console.log('');
});
