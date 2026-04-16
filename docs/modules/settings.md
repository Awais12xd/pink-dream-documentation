---
sidebar_position: 12
title: Settings
---

# Settings Module

Settings is the global configuration center for storefront behavior and operational integrations.

## Tab Structure

- **General**
- **Payment**
- **SEO**
- **Contact**
- **License**

## General Tab

- Branding assets:
  - Site logo
  - Admin logo
  - Favicon
- Guest checkout control

Use this tab to align visual identity and checkout policy.

## Payment Tab

Supports operational setup for:

- Stripe
- PayPal
- Cash on Delivery
- Bank Transfer

Capabilities:

- Enable/disable per method
- Configure credentials
- Validate with test connection (Stripe/PayPal)
- Define bank transfer instructions for customer checkout flow

## SEO Tab

- Site title
- Site description

Use clear, brand-aligned metadata for search engine snippets and social previews.

## Contact Tab

Manages public business contact data:

- Emails
- Phone numbers
- Address entries
- Social links
- Business hours by day

## License Tab

License tab is used to bind this installation with your issued commercial license.

Capabilities:

- View current license state (`active`, `inactive`, etc.).
- View domain, environment, and last validation timestamp.
- Activate license key.
- Validate now (manual heartbeat / force re-check).
- Deactivate license before migration to another host.
- Review recent license audit events.

Operational notes:

- If environment compatibility warning appears, activate again after correcting server env.
- Keep `LICENSE_STRICT_SECURITY=true` in production.
- If activation fails, verify backend `LICENSE_*` plus `APP_PRIMARY_DOMAIN` and `APP_INSTANCE_ID`.

## Change Management Advice

- Apply settings changes in low-traffic windows when possible.
- Keep a screenshot/history record for payment configuration updates.
- Re-test checkout after payment setting changes.
- Re-run manual license validation after infrastructure/domain changes.

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture Settings left tab navigation
    (General, Payment, SEO, Contact) and one opened tab with populated fields.
  </p> -->
  <div className="doc-screenshot-frame">
    <img
      src="/img/settings.PNG"
      alt="Settings module tabs and editable fields"
      loading="lazy"
    />
  </div>
</div>
