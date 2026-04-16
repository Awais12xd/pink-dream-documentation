---
sidebar_position: 3
title: Run on Local Server
---

# Run on Local Server

Use this flow to run Pink Dreams locally for development and QA.

## Prerequisites

- `Node.js 20+`
- `npm 10+`
- Running MongoDB instance (local or cloud)
- Running Redis instance (optional, but recommended for cache paths)

## 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

## 2. Configure Environment Variables

- Create `backend/.env` from `backend/.env.example` and fill required values.
- Add frontend env in `frontend/.env` (or `frontend/.env.local`).
- Ensure `NEXT_PUBLIC_API_URL` points to backend local URL.

## 3. Run Preflight Check (Recommended)

```bash
cd backend
npm run doctor
```

This validates required env values and license env requirements (when license enforcement is enabled).

## 4. Start Services

```bash
# Terminal 1 - backend
cd backend
npm run dev

# Terminal 2 - frontend
cd frontend
npm run dev
```

### What happens on first backend startup

On startup, backend bootstrap runs automatically (default behavior):

- Runs pending migrations.
- Runs required seeds (roles, settings baseline, super admin seed prerequisites).
- Runs sample seed pack.
- Uses bootstrap lock to prevent concurrent multi-instance conflicts.

Default flags:

- `AUTO_DB_MIGRATE=true`
- `AUTO_DB_SEED_REQUIRED=true`
- `AUTO_DB_SEED_SAMPLE=true`
- `AUTO_DB_BOOTSTRAP_LOCK=true`

All bootstrap flows are idempotent and safe to rerun.

### Manual bootstrap commands (optional)

Use these if you want explicit control:

```bash
cd backend
npm run db:migrate
npm run db:seed:required
npm run db:seed:sample

# one-shot setup (migrations + required seeds via setup script)
npm run db:setup
```

Expected local URLs:

- Storefront: `http://localhost:3000`
- Admin panel: `http://localhost:3000/admin`
- API base: `http://localhost:4000`

## 5. First Validation Checklist

- Admin login works.
- Product list loads.
- Notifications panel opens.
- Order flow (`cart > checkout > order success`) completes.
- Settings page loads and saves.
- Database bootstrap finishes without migration/seed errors in backend logs.

## 6. License Activation (First Install)

License enforcement is always enabled in buyer runtime. Activate installation license after first startup:

1. Open **Admin > Settings > License**.
2. Enter license key.
3. Click **Activate**.
4. Click **Validate Now** and confirm status is `active`.

You can review recent validation events in **Recent License Audit** on the same tab.

## Common Setup Issues

| Issue | Cause | Action |
| --- | --- | --- |
| `redirect_uri_mismatch` in Google auth | OAuth callback mismatch | Update authorized redirect URI in Google Cloud Console |
| Storefront can't reach API | Wrong `NEXT_PUBLIC_API_URL` | Point frontend env to active backend URL |
| Redis connection refused | Missing local Redis or wrong `REDIS_URL` | Run Redis locally or set managed Redis URL |
| Payment test fails | Gateway credentials missing | Fill and test in `Settings > Payment` |
| Bootstrap lock timeout | Multiple app instances trying first boot together | Start one backend instance first, then scale out |
| License activation fails | Missing or incorrect license env vars | Run `npm run doctor`, then verify `LICENSE_*` and `APP_*` values |

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Add one screenshot of backend and frontend
    terminals running, with `/admin` opened in browser.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/local_server.PNG"
      alt="Local environment with backend and frontend running"
      loading="lazy"
    />
  </div>
</div>
