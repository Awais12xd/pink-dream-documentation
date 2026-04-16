---
sidebar_position: 2
title: Configuration
---

# Configuration

This page defines the recommended baseline configuration for a production-grade Pink Dreams deployment.

## Environment File Structure

Prepare these files:

- `backend/.env`
- `frontend/.env` (or `frontend/.env.local`)

Use `backend/.env.example` as your baseline and then fill deployment-specific values.

## Backend Environment (`backend/.env`)

Important formatting rules:

- Use `KEY=value` format (no spaces around `=`).
- Do not end values with semicolons.
- Keep multiline PEM keys as escaped `\n` inside one line.

### Core Runtime (required)

```bash
NODE_ENV=development
PORT=4000

# Database / auth
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/pinkdreams
JWT_SECRET=replace_with_long_random_secret
SESSION_SECRET=replace_with_long_random_secret

# App URLs
FRONTEND_URL=http://localhost:3000
BASE_URL=http://localhost:4000
BACKEND_URL=http://localhost:4000

# Staff bootstrap admin
SUPERADMIN_EMAIL=admin@example.com
SUPERADMIN_PW=change_me_please
```

### Database Bootstrap and Migration Controls

These controls drive first-install behavior. If omitted, the backend defaults run migrations and both seed sets automatically.

```bash
AUTO_DB_MIGRATE=true
AUTO_DB_SEED_REQUIRED=true
AUTO_DB_SEED_SAMPLE=true
AUTO_DB_BOOTSTRAP_LOCK=true
BOOTSTRAP_LOCK_WAIT_MS=60000
BOOTSTRAP_LOCK_POLL_MS=1500
BOOTSTRAP_LOCK_TTL_MS=120000
```

### Payments

```bash
STRIPE_SECRET_KEY=sk_live_or_sk_test_key
STRIPE_PUBLISHABLE_KEY=pk_live_or_pk_test_key
PAYPAL_CLIENT_ID=paypal_client_id
PAYPAL_CLIENT_SECRET=paypal_client_secret
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com
PAYPAL_MODE=sandbox
```

### OAuth

```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
FACEBOOK_CALLBACK_URL=http://localhost:4000/auth/facebook/callback
```

### Media, Cache, and Encryption

```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
REDIS_URL=redis://localhost:6379
SETTINGS_ENCRYPTION_KEY=64_hex_character_key
```

### Email

```bash
EMAIL_FROM=noreply@yourdomain.com
EMAIL_USER=your_sender_email
EMAIL_APP_PASSWORD=your_email_app_password
EMAIL_SERVICE=gmail
ADMIN_EMAIL=alerts@yourdomain.com
RESEND_API_KEY=optional_resend_key

# Optional SMTP / provider overrides used by settings tests
EMAIL_ADMIN=alerts@yourdomain.com
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SENDGRID_API_KEY=optional_sendgrid_key
```

### Staff Cookie and Host Validation

```bash
STAFF_AUTH_COOKIE_NAME=staff_access_token_creator
STAFF_AUTH_COOKIE_SCOPE=creator
STAFF_AUTH_COOKIE_SECURE=true
STAFF_AUTH_COOKIE_SAMESITE=lax

ALLOWED_BACKEND_HOSTS=localhost,127.0.0.1
```

### Licensing (always enforced in buyer runtime)

```bash
LICENSE_SERVER_URL=http://localhost:4010
APP_INSTANCE_ID=buyer-local-1
LICENSE_CLIENT_AUTH_TOKEN=shared_secret_between_client_and_license_server
LICENSE_LOG_RETENTION_DAYS=180
```

### Optional Runtime Tuning

```bash
CHECKOUT_CURRENCY=usd
SLOW_SHOP_QUERY_MS=300
REDIS_ENABLED=true
REDIS_DISABLE_LOCAL=false
REDIS_RECONNECT_MAX_DELAY_MS=5000
REDIS_CONNECT_TIMEOUT_MS=10000
REDIS_ERROR_THROTTLE_MS=15000
USER_AUTH_COOKIE_NAME=user_access_token
LOG_LEVEL=info
NO_COLOR=0
```

## Frontend Environment (`frontend/.env` or `frontend/.env.local`)

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxx
NODE_ENV=development
```

Notes:

- `NEXT_PUBLIC_API_URL` is required.
- `NEXT_PUBLIC_SITE_URL` is recommended for metadata canonical base URL.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is optional fallback; admin public settings can also provide Stripe key.
- PayPal client ID is loaded from public settings, not required in frontend env by default.

## Payment and Checkout Notes

- Enable/disable payment methods from **Admin > Settings > Payment**.
- If bank transfer is enabled, include clear transfer instructions in settings.
- For Stripe and PayPal, validate credentials using the built-in **Test Connection** action.

## Security Requirements

- Use unique secrets per environment (`dev`, `staging`, `production`).
- Never commit `.env` files.
- Rotate keys after team changes or security incidents.
- Restrict CORS to trusted storefront/admin domains in production.
- Trusted host validation is enforced by runtime policy.
- Keep `ALLOWED_BACKEND_HOSTS` accurate for your backend domain(s).

## Quick First-Install Recommendation

For first deployment, keep these enabled:

- `AUTO_DB_MIGRATE=true`
- `AUTO_DB_SEED_REQUIRED=true`
- `AUTO_DB_SEED_SAMPLE=true`
- `AUTO_DB_BOOTSTRAP_LOCK=true`

This allows migrations + required seeds + sample data to load automatically at first startup in a lock-safe way.

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
