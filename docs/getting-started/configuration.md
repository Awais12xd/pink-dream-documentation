---
sidebar_position: 2
title: Configuration
---

# Configuration

This page defines the recommended baseline configuration for a production-grade Pink Dreams deployment.

## Environment File Structure

Prepare these files:

- `backend/.env`
- `frontend/.env.local`

## Backend Environment (`backend/.env`)

Use the template below and replace all example values before deployment.

```bash
# Core
NODE_ENV=development
PORT=4000
FRONTEND_URL=http://localhost:3000
BASE_URL=http://localhost:4000
BACKEND_URL=http://localhost:4000

# Database + Session + Cache
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/pinkdreams
SESSION_SECRET=replace_with_long_random_secret
REDIS_URL=redis://localhost:6379

# Auth + Encryption
JWT_SECRET=replace_with_long_random_secret
SETTINGS_ENCRYPTION_KEY=64_hex_character_key

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe + PayPal
STRIPE_SECRET_KEY=sk_live_or_sk_test_key
STRIPE_PUBLISHABLE_KEY=pk_live_or_pk_test_key
PAYPAL_CLIENT_ID=paypal_client_id
PAYPAL_CLIENT_SECRET=paypal_client_secret
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com

# Email / Notifications
EMAIL_FROM=noreply@yourdomain.com
EMAIL_USER=your_smtp_or_sender_email
EMAIL_APP_PASSWORD=your_email_app_password
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
RESEND_API_KEY=optional_resend_key
SENDGRID_API_KEY=optional_sendgrid_key
ADMIN_EMAIL=alerts@yourdomain.com
EMAIL_ADMIN=alerts@yourdomain.com
```

## Frontend Environment (`frontend/.env.local`)

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxx
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
```

## Payment and Checkout Notes

- Enable/disable payment methods from **Admin > Settings > Payment**.
- If bank transfer is enabled, include clear transfer instructions in settings.
- For Stripe and PayPal, validate credentials using the built-in **Test Connection** action.

## Security Requirements

- Use unique secrets per environment (`dev`, `staging`, `production`).
- Never commit `.env` files.
- Rotate keys after team changes or security incidents.
- Restrict CORS to trusted storefront/admin domains in production.

## Recommended Production Defaults

| Area | Recommendation |
| --- | --- |
| Database | MongoDB Atlas with network allowlist and least-privilege user |
| Cache | Redis for improved session and realtime responsiveness |
| Media | Cloudinary for product/blog images |
| Process | Run backend with PM2 or container orchestration |
| TLS | HTTPS only |

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture the Admin `Settings > Payment`
    tab showing Stripe, PayPal, COD, and Bank Transfer blocks.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/config.PNG"
      alt="Payment settings module with gateway toggles"
      loading="lazy"
    />
  </div>
</div>
