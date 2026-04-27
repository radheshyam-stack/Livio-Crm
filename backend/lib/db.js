/**
 * Railway Postgres driver.
 *
 * Reads connection info from DATABASE_URL (the env var Railway exposes on
 * services linked to a Postgres plugin). Uses the pg library's Pool so
 * connections are reused across requests.
 *
 * Schema is a single blob table:
 *
 *   create table if not exists app_state (
 *     id   text primary key,
 *     data jsonb not null default '{}'::jsonb
 *   );
 *
 * One row (id = 'main') holds the entire app state — same shape as the
 * existing db.json.  This keeps the code change minimal.  If per-project
 * SQL queries become necessary later, migrate to a normalized `projects`
 * table at that point.
 */

const { Pool } = require('pg');

let pool = null;
let schemaEnsured = false;

function hasDatabaseConfig() {
  return !!process.env.DATABASE_URL;
}

function shouldUseSsl() {
  // Railway's internal Postgres connections don't need SSL, but its public
  // proxy connections do.  Default: SSL on if the URL is not an internal host.
  const url = process.env.DATABASE_URL || '';
  if (/\.railway\.internal/.test(url)) return false;
  if (process.env.DATABASE_SSL === 'false') return false;
  return true;
}

function getPool() {
  if (!hasDatabaseConfig()) return null;

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: shouldUseSsl() ? { rejectUnauthorized: false } : false,
      // Modest pool size; Railway free-tier Postgres has limited connection slots.
      max: Number(process.env.DATABASE_POOL_MAX || 5),
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000
    });

    pool.on('error', (err) => {
      console.error('Postgres pool error:', err.message);
    });
  }

  return pool;
}

async function ensureSchema() {
  if (schemaEnsured) return;

  const p = getPool();
  if (!p) return;

  await p.query(`
    create table if not exists app_state (
      id   text primary key,
      data jsonb not null default '{}'::jsonb
    );
  `);
  await p.query(
    `insert into app_state (id, data)
     values ($1, $2::jsonb)
     on conflict (id) do nothing`,
    ['main', JSON.stringify({ projects: [], activeId: null, activeProjectId: null })]
  );

  schemaEnsured = true;
}

async function readAppStateRow(rowId = 'main') {
  const p = getPool();
  await ensureSchema();
  const res = await p.query('select data from app_state where id = $1', [rowId]);
  return res.rows[0]?.data ?? null;
}

async function writeAppStateRow(data, rowId = 'main') {
  const p = getPool();
  await ensureSchema();
  await p.query(
    `insert into app_state (id, data)
     values ($1, $2::jsonb)
     on conflict (id) do update set data = excluded.data`,
    [rowId, JSON.stringify(data)]
  );
}

async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
    schemaEnsured = false;
  }
}

module.exports = {
  hasDatabaseConfig,
  getPool,
  ensureSchema,
  readAppStateRow,
  writeAppStateRow,
  closePool
};
