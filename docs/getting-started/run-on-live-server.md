---
sidebar_position: 4
title: Run on Live Server
---

# Run on Live Server

This section covers production deployment standards for Pink Dreams.

## Recommended Hosting Split

- **Frontend**: Vercel (recommended for Next.js)
- **Backend API**: DigitalOcean App Platform / Render / Railway / VPS
- **Database**: MongoDB Atlas
- **Cache**: Redis managed service
- **Media**: Cloudinary

## Deployment Sequence

1. Deploy backend API.
2. Configure backend environment secrets.
3. Run preflight and first-install bootstrap.
4. Verify backend health and auth endpoints.
5. Activate and validate license from admin settings.
6. Deploy frontend with production API URL.
7. Configure OAuth redirect URIs and payment webhooks.
8. Run post-deployment QA pass.

## Backend Deployment (Example)

```bash
cd backend
npm install --omit=dev
npm run doctor

# Optional explicit one-time bootstrap
npm run db:setup

npm start
```

Recommended production setup:

- Use process manager (`pm2`) or container orchestration.
- Enforce HTTPS and trusted proxy config.
- Restrict CORS to known domains.
- Add logging and uptime monitoring from your hosting provider dashboard.

## First Production Boot: Migration and Seed Strategy

Pink Dreams supports automatic bootstrap on startup:

- `AUTO_DB_MIGRATE=true`
- `AUTO_DB_SEED_REQUIRED=true`
- `AUTO_DB_SEED_SAMPLE=true`
- `AUTO_DB_BOOTSTRAP_LOCK=true`

Recommended production pattern:

1. Keep a single backend instance for first boot.
2. Let startup complete migrations and seeds.
3. Verify logs and health checks.
4. Scale replicas after bootstrap completion.

If your platform runs many instances immediately, keep lock enabled and consider pre-running `npm run db:setup` as a release step.

## Frontend Deployment (Vercel)

- Set root directory to `frontend`.
- Set environment variables:
  - `NEXT_PUBLIC_API_URL`
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Trigger deployment from your main branch.

PayPal public credentials are loaded from backend public settings in this project.

## OAuth and Payment Production Checks

- Add exact production callback URLs in Google/Facebook developer consoles.
- Register Stripe webhook endpoint on production backend URL.
- Update PayPal app credentials to live environment when going live.

## License Activation in Production

After backend is live, complete licensing from admin panel:

1. Open **Admin > Settings > License**.
2. Enter license key and activate.
3. Run **Validate Now** (force heartbeat).
4. Confirm status is active and audit events are recorded.

Core production license env variables to verify:

- `LICENSE_SERVER_URL`
- `LICENSE_CLIENT_AUTH_TOKEN`
- `APP_INSTANCE_ID`
- `ALLOWED_BACKEND_HOSTS`

Buyer runtime enforces strict license policy in code. Do not reintroduce deprecated env toggles for enforcement mode, exempt paths, issuer/audience, or host validation enable flags.

## Post-Deployment QA Checklist

- [ ] User sign-up and login (including Google auth)
- [ ] Staff login and permission-based navigation
- [ ] Product listing and media rendering
- [ ] Add to cart and checkout for each enabled payment method
- [ ] Order creation and order status updates
- [ ] Notification bell realtime and notifications tab operations
- [ ] Export/import operations for products and orders
- [ ] License status shows `active` and manual validation succeeds
- [ ] First-install bootstrap completed with no pending migration errors

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Add one deployment architecture diagram
    (Frontend, Backend, MongoDB, Redis, Cloudinary, Payment Providers).
  </p> -->
  <div className="doc-screenshot-frame">
    <img
      src="/img/live_server.png"
      alt="Pink Dreams production deployment architecture"
      loading="lazy"
    />
  </div>
</div>
