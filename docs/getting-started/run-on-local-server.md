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

- Add `backend/.env` (see `Configuration` page).
- Add `frontend/.env.local`.
- Ensure `NEXT_PUBLIC_API_URL` points to backend local URL.

## 3. Start Services

```bash
# Terminal 1 - backend
cd backend
npm start

# Terminal 2 - frontend
cd frontend
npm run dev
```

Expected local URLs:

- Storefront: `http://localhost:3000`
- Admin panel: `http://localhost:3000/admin`
- API base: `http://localhost:4000`

## 4. First Validation Checklist

- Admin login works.
- Product list loads.
- Notifications panel opens.
- Order flow (`cart > checkout > order success`) completes.
- Settings page loads and saves.

## Common Setup Issues

| Issue | Cause | Action |
| --- | --- | --- |
| `redirect_uri_mismatch` in Google auth | OAuth callback mismatch | Update authorized redirect URI in Google Cloud Console |
| Storefront can't reach API | Wrong `NEXT_PUBLIC_API_URL` | Point frontend env to active backend URL |
| Redis connection refused | Missing local Redis or wrong `REDIS_URL` | Run Redis locally or set managed Redis URL |
| Payment test fails | Gateway credentials missing | Fill and test in `Settings > Payment` |

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
