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
3. Verify backend health and auth endpoints.
4. Deploy frontend with production API URL.
5. Configure OAuth redirect URIs and payment webhooks.
6. Run post-deployment QA pass.

## Backend Deployment (Example)

```bash
cd backend
npm install --omit=dev
npm start
```

Recommended production setup:

- Use process manager (`pm2`) or container orchestration.
- Enforce HTTPS and trusted proxy config.
- Restrict CORS to known domains.
- Add logging and uptime monitoring from your hosting provider dashboard.

## Frontend Deployment (Vercel)

- Set root directory to `frontend`.
- Set environment variables:
  - `NEXT_PUBLIC_API_URL`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
- Trigger deployment from your main branch.

## OAuth and Payment Production Checks

- Add exact production callback URLs in Google/Facebook developer consoles.
- Register Stripe webhook endpoint on production backend URL.
- Update PayPal app credentials to live environment when going live.

## Post-Deployment QA Checklist

- [ ] User sign-up and login (including Google auth)
- [ ] Staff login and permission-based navigation
- [ ] Product listing and media rendering
- [ ] Add to cart and checkout for each enabled payment method
- [ ] Order creation and order status updates
- [ ] Notification bell realtime and notifications tab operations
- [ ] Export/import operations for products and orders

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
