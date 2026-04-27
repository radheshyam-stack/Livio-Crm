const path = require('path');

function getPersistentRoot() {
  const explicitRoot = process.env.PERSISTENT_ROOT?.trim();
  if (explicitRoot) return explicitRoot;

  const railwayMount = process.env.RAILWAY_VOLUME_MOUNT_PATH?.trim();
  if (railwayMount) return railwayMount;

  return null;
}

function normalizeRelativeStorageValue(value) {
  return value
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/^\/+/, '')
    .replace(/\/+/g, '/');
}

function isDefaultRelativeStoragePath(explicitValue, fallbackSegments) {
  if (!explicitValue || !explicitValue.trim()) return false;

  return normalizeRelativeStorageValue(explicitValue) === fallbackSegments.join('/');
}

function resolveStoragePath(explicitValue, fallbackSegments) {
  const persistentRoot = getPersistentRoot();

  if (explicitValue && explicitValue.trim()) {
    const explicitPath = explicitValue.trim();

    // Keep local-dev defaults convenient, but let an attached Railway volume win
    // over those starter relative paths.
    if (!persistentRoot || !isDefaultRelativeStoragePath(explicitPath, fallbackSegments)) {
      return path.resolve(explicitPath);
    }
  }

  if (persistentRoot) {
    return path.resolve(persistentRoot, ...fallbackSegments);
  }

  return path.resolve(__dirname, '..', ...fallbackSegments);
}

function getDbPath() {
  return resolveStoragePath(process.env.DB_FILE, ['data', 'db.json']);
}

function getUploadDir() {
  return resolveStoragePath(process.env.UPLOAD_DIR, ['uploads']);
}

module.exports = {
  getDbPath,
  getPersistentRoot,
  getUploadDir
};
