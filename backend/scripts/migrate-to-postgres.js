#!/usr/bin/env node
/**
 * One-time migration: read the existing `db.json` off the Railway volume and
 * upsert its contents into the Postgres `app_state` table (row id = 'main').
 *
 * Safe to re-run.  Idempotent.  Does NOT touch file uploads — those stay on
 * the volume and are served by `app.use('/uploads', express.static(...))`.
 *
 * Usage (Railway CLI):
 *
 *   railway run --service Project-Managment npm run migrate:postgres
 *
 * Or locally, with DATABASE_URL and PERSISTENT_ROOT set in your .env:
 *
 *   npm run migrate:postgres
 *
 * Exit codes:
 *   0  success (or nothing to migrate)
 *   1  DATABASE_URL not set
 *   2  could not read db.json
 *   3  Postgres write failed
 */

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const {
  hasDatabaseConfig,
  ensureSchema,
  readAppStateRow,
  writeAppStateRow,
  closePool
} = require('../lib/db');
const { getDbPath } = require('../lib/storagePaths');

const EMPTY_DB = { projects: [], activeId: null, activeProjectId: null };

function normalize(raw) {
  const obj = raw && typeof raw === 'object' ? raw : {};
  const activeId = obj.activeId ?? obj.activeProjectId ?? null;
  return {
    ...EMPTY_DB,
    ...obj,
    projects: Array.isArray(obj.projects) ? obj.projects : [],
    activeId,
    activeProjectId: activeId
  };
}

async function main() {
  if (!hasDatabaseConfig()) {
    console.error('DATABASE_URL is not set.  Link the Postgres service in Railway');
    console.error('and set DATABASE_URL = ${{ Postgres.DATABASE_URL }} on the');
    console.error('Project-Managment service, then re-run this script.');
    process.exit(1);
  }

  const dbPath = getDbPath();
  console.log(`Source db.json : ${dbPath}`);
  console.log(`Target Postgres: ${process.env.DATABASE_URL.replace(/:[^:@/]+@/, ':***@')}`);

  let sourceData = null;
  if (fs.existsSync(dbPath)) {
    try {
      const raw = fs.readFileSync(dbPath, 'utf8');
      sourceData = normalize(JSON.parse(raw));
      console.log(`Loaded db.json with ${sourceData.projects.length} project(s).`);
    } catch (err) {
      console.error(`Could not read ${dbPath}:`, err.message);
      process.exit(2);
    }
  } else {
    console.log(`No db.json found at ${dbPath}.  Nothing local to migrate.`);
  }

  try {
    await ensureSchema();
  } catch (err) {
    console.error('Could not ensure Postgres schema:', err.message);
    process.exit(3);
  }

  // Inspect what's already in Postgres so we don't clobber a prior run.
  let existing = null;
  try {
    existing = await readAppStateRow('main');
  } catch (err) {
    console.error('Could not read existing app_state row:', err.message);
    process.exit(3);
  }

  const existingProjects = Array.isArray(existing?.projects) ? existing.projects : [];

  if (!sourceData) {
    console.log(`Postgres already has ${existingProjects.length} project(s). Nothing to do.`);
    await closePool();
    return;
  }

  if (existingProjects.length > 0 && sourceData.projects.length === 0) {
    console.log('Postgres already populated; local db.json is empty.  Leaving Postgres as-is.');
    await closePool();
    return;
  }

  if (existingProjects.length > 0) {
    console.log(
      `WARNING: Postgres already contains ${existingProjects.length} project(s).`
    );
    console.log('         Overwriting with local db.json contents.');
    console.log('         (Re-run only if this is intentional.)');
    if (process.env.FORCE !== '1') {
      console.log('         Skipping to be safe.  Re-run with FORCE=1 to overwrite.');
      await closePool();
      return;
    }
  }

  try {
    await writeAppStateRow(sourceData, 'main');
    console.log(`Wrote ${sourceData.projects.length} project(s) to Postgres.`);
  } catch (err) {
    console.error('Postgres write failed:', err.message);
    await closePool();
    process.exit(3);
  }

  // Sanity-check the round-trip.
  try {
    const verify = await readAppStateRow('main');
    const verifyCount = Array.isArray(verify?.projects) ? verify.projects.length : 0;
    console.log(`Verified: Postgres now reports ${verifyCount} project(s).`);
  } catch (err) {
    console.error('Post-write verification failed:', err.message);
    await closePool();
    process.exit(3);
  }

  // Move the old db.json aside so a future boot can't silently fall back to it.
  try {
    if (fs.existsSync(dbPath)) {
      const backup = `${dbPath}.migrated-${Date.now()}.bak`;
      fs.renameSync(dbPath, backup);
      console.log(`Moved ${dbPath} → ${backup}`);
    }
  } catch (err) {
    console.warn(`Could not rename db.json (non-fatal):`, err.message);
  }

  await closePool();
  console.log('Migration complete.');
}

main().catch(async (err) => {
  console.error('Unexpected error:', err);
  try { await closePool(); } catch { /* ignore */ }
  process.exit(3);
});
