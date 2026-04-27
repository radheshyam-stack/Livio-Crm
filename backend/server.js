require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { getFileStorageDriver } = require('./lib/fileStorage');
const { hasSupabaseConfig } = require('./lib/supabase');
const { getDbPath, getPersistentRoot, getUploadDir } = require('./lib/storagePaths');

const app = express();
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3001;
const UPLOAD_DIR = getUploadDir();
const DB_PATH = getDbPath();
const PERSISTENT_ROOT = getPersistentRoot();
const DB_STORAGE_DRIVER = hasSupabaseConfig() ? 'supabase' : 'local';
const FILE_STORAGE_DRIVER = getFileStorageDriver();
const IS_RAILWAY = !!(process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_PROJECT_ID);
const FRONTEND_DIST = path.resolve(__dirname, '../frontend-react/dist');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const allowedOrigins = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function isTrustedGolivioOrigin(origin) {
  try {
    const hostname = new URL(origin).hostname.toLowerCase();
    return (
      hostname.endsWith('golivio.com') ||
      hostname.endsWith('golivio.ink') ||
      hostname.endsWith('netlify.app')
    );
  } catch {
    return false;
  }
}

const localOrigins = [
  'http://127.0.0.1:4173',
  'http://localhost:4173',
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'http://127.0.0.1:3000',
  'http://localhost:3000'
];

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (!allowedOrigins.length || allowedOrigins.includes('*')) return callback(null, true);
    if (allowedOrigins.includes(origin) || localOrigins.includes(origin) || isTrustedGolivioOrigin(origin)) {
      return callback(null, true);
    }
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/uploads', express.static(UPLOAD_DIR));

app.use('/api/projects', require('./routes/projects'));
app.use('/api/email', require('./routes/email'));
app.use('/api/files', require('./routes/files'));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    server: 'Livio Building Systems API',
    version: '1.0.0',
    storage: FILE_STORAGE_DRIVER,
    dbStorage: DB_STORAGE_DRIVER,
    fileStorage: FILE_STORAGE_DRIVER,
    persistentRoot: PERSISTENT_ROOT || null,
    uploadsPath: FILE_STORAGE_DRIVER === 'local' ? UPLOAD_DIR : null,
    dataPath: DB_PATH,
    time: new Date().toISOString()
  });
});

if (fs.existsSync(FRONTEND_DIST)) {
  app.use(express.static(FRONTEND_DIST));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(path.join(FRONTEND_DIST, 'index.html'));
  });
}

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found: ' + req.path });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, HOST, () => {
  console.log('\nLivio Building Systems API Server');
  console.log(`  URL     : http://${HOST}:${PORT}`);
  console.log(`  Health  : http://${HOST}:${PORT}/api/health`);
  console.log(`  DB      : ${DB_STORAGE_DRIVER}`);
  console.log(`  Files   : ${FILE_STORAGE_DRIVER}`);
  console.log(`  Data    : ${DB_PATH}`);
  if (FILE_STORAGE_DRIVER === 'local') console.log(`  Uploads : ${UPLOAD_DIR}`);
  if (PERSISTENT_ROOT) console.log(`  Volume  : ${PERSISTENT_ROOT}`);
  if (IS_RAILWAY && FILE_STORAGE_DRIVER === 'local' && !PERSISTENT_ROOT) {
    console.warn('  Warning : Railway local container storage is active. Attach a Volume, configure Cloudflare R2, or configure Supabase to avoid ENOSPC.');
  }
  console.log('');
});
