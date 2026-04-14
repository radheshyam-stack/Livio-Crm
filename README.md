# Livio PMS

This repository contains the Livio PMS frontend and backend applications.

## Structure

- `frontend-react/` - React + Vite frontend
- `backend/` - Express API backend
- `client-contract.html`, `client-invoice.html`, `daily-tracker.html`, `livio.html`, `momentum.html` - legacy HTML assets kept with the project

## Frontend

```bash
cd frontend-react
npm install
npm run dev
```

Build the frontend with:

```bash
cd frontend-react
npm run build
```

## Backend

```bash
cd backend
npm install
copy .env.example .env
npm start
```

The backend expects environment variables in `backend/.env` and uses `backend/data/db.json` as its default data file.

## Railway

Deploy the frontend and backend as two separate Railway services from this monorepo.

### Backend service

- Root Directory: `/backend`
- Config File Path: `/backend/railway.json`
- Environment variables:
  - `FRONTEND_ORIGIN=https://your-frontend-domain`
  - Attach a Railway Volume and mount it, then set either:
  - `PERSISTENT_ROOT=<your-volume-mount-path>`
  - or `DB_FILE=<your-volume-mount-path>/db.json` and `UPLOAD_DIR=<your-volume-mount-path>/uploads`
  - `SUPABASE_URL=...`
  - `SUPABASE_SERVICE_ROLE_KEY=...`
  - `SUPABASE_DB_TABLE=app_state`
  - `SUPABASE_DB_ROW_ID=main`
  - `SUPABASE_STORAGE_BUCKET=uploads`

### Frontend service

- Root Directory: `/frontend-react`
- Config File Path: `/frontend-react/railway.json`
- Environment variables:
  - `VITE_API_BASE=https://your-backend-domain/api`

## Production notes

- `VITE_API_BASE` must point to your deployed backend API, for example `https://your-backend-domain/api`.
- `FRONTEND_ORIGIN` must exactly match your deployed frontend origin, for example `https://your-frontend-domain`.
- Render: [render.yaml](/C:/Users/hp/OneDrive/Desktop/livio%20app/render.yaml) now mounts a persistent disk at `/var/data/livio` and stores both `db.json` and uploads there.
- Railway: attach a Volume to the backend service and set `PERSISTENT_ROOT` to the mount path, or set `DB_FILE` and `UPLOAD_DIR` directly to that mounted path.
- Without a mounted disk/volume or Supabase, filesystem writes can be lost after restarts/redeploys.
- Supabase is already supported by the backend and is the safer option for shared production data if you do not want to rely on a mounted disk/volume.
