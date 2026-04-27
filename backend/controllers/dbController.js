const fs = require('fs');
const path = require('path');
const {
  hasDatabaseConfig,
  readAppStateRow,
  writeAppStateRow
} = require('../lib/db');
const { getDbPath } = require('../lib/storagePaths');

const DB_PATH = getDbPath();
const EMPTY_DB = {
  projects: [],
  activeId: null,
  activeProjectId: null,
  vendorDirectory: [],
  users: [],
  roles: [],
  perms: {},
  passwordResets: {}
};

function cloneEmptyDB() {
  return JSON.parse(JSON.stringify(EMPTY_DB));
}

function normalizeDB(data) {
  const raw = data && typeof data === 'object' ? data : {};
  const activeId = raw.activeId ?? raw.activeProjectId ?? null;

  return {
    ...cloneEmptyDB(),
    ...raw,
    projects: Array.isArray(raw.projects) ? raw.projects : [],
    vendorDirectory: Array.isArray(raw.vendorDirectory) ? raw.vendorDirectory : [],
    users: Array.isArray(raw.users) ? raw.users : [],
    roles: Array.isArray(raw.roles) ? raw.roles : [],
    perms: raw.perms && typeof raw.perms === 'object' && !Array.isArray(raw.perms) ? raw.perms : {},
    passwordResets: raw.passwordResets && typeof raw.passwordResets === 'object' && !Array.isArray(raw.passwordResets)
      ? raw.passwordResets
      : {},
    activeId,
    activeProjectId: activeId
  };
}

// ── Local-disk driver (dev fallback when DATABASE_URL is not set) ────────────
function ensureLocalDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(cloneEmptyDB(), null, 2));
  }
}

function readLocalDB() {
  ensureLocalDB();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return normalizeDB(JSON.parse(raw));
  } catch (e) {
    console.error('Local DB read error:', e.message);
    return cloneEmptyDB();
  }
}

function writeLocalDB(data) {
  ensureLocalDB();
  fs.writeFileSync(DB_PATH, JSON.stringify(normalizeDB(data), null, 2));
}

// ── Postgres driver (production) ─────────────────────────────────────────────
async function readPgDB() {
  const raw = await readAppStateRow('main');
  // First-boot case: ensureSchema() seeded an empty row, but in case the row
  // is absent for any reason, fall back to an empty DB.
  return normalizeDB(raw || cloneEmptyDB());
}

async function writePgDB(data) {
  const normalized = normalizeDB(data);
  await writeAppStateRow(normalized, 'main');
  return normalized;
}

// ── Unified read/write ───────────────────────────────────────────────────────
async function readDB() {
  if (hasDatabaseConfig()) {
    try {
      return await readPgDB();
    } catch (e) {
      console.error('Postgres DB read error:', e.message);
      console.error('Falling back to local JSON data.');
    }
  }

  return readLocalDB();
}

async function writeDB(data) {
  if (hasDatabaseConfig()) {
    try {
      return await writePgDB(data);
    } catch (e) {
      console.error('Postgres DB write error:', e.message);
      console.error('Falling back to local JSON file for this write.');
    }
  }

  writeLocalDB(data);
  return normalizeDB(data);
}

async function getAll() {
  return await readDB();
}

async function getProjects() {
  return (await readDB()).projects || [];
}

async function getProject(id) {
  const db = await readDB();
  return (db.projects || []).find((project) => project.id === id) || null;
}

async function saveAll(data) {
  await writeDB(data);
  return true;
}

async function saveProject(project) {
  const db = await readDB();
  const nextProject = project && typeof project === 'object' ? project : {};

  if (!db.projects) db.projects = [];
  const idx = db.projects.findIndex((item) => item.id === nextProject.id);

  if (idx > -1) {
    db.projects[idx] = nextProject;
  } else {
    db.projects.push(nextProject);
  }

  await writeDB(db);
  return nextProject;
}

async function deleteProject(id) {
  const db = await readDB();
  db.projects = (db.projects || []).filter((project) => project.id !== id);
  if (db.activeId === id || db.activeProjectId === id) {
    const fallbackId = db.projects[0]?.id || null;
    db.activeId = fallbackId;
    db.activeProjectId = fallbackId;
  }
  await writeDB(db);
  return true;
}

async function setActiveProject(id) {
  const db = await readDB();
  db.activeId = id;
  db.activeProjectId = id;
  await writeDB(db);
  return true;
}

module.exports = {
  getAll,
  getProjects,
  getProject,
  saveAll,
  saveProject,
  deleteProject,
  setActiveProject
};
