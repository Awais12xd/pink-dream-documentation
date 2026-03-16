---
sidebar_position: 1
slug: /
title: Introduction
---

import docsData from '@site/docsData';

# Pink Dreams Documentation

Welcome to the official product documentation for the Pink Dreams eCommerce platform.  
This guide is written for store owners, operations teams, and technical teams that manage deployment and day-to-day administration.

## Platform Summary

Pink Dreams includes:

- A customer storefront built with `Next.js` and `React`.
- A role-based admin panel for business operations.
- A Node.js + Express backend API.
- Product media handling with Cloudinary.
- Multi-method checkout flows including Stripe, PayPal, COD, and bank transfer.
- Operational modules for orders, analytics, notifications, blogs, staff, and settings.

## Admin Panel Module Map

The admin sidebar is the operational center of the system. Documentation in the **Modules** section mirrors this exact structure:

| Admin Sidebar Item | Documentation Page |
| --- | --- |
| Dashboard | Dashboard |
| E-commerce > Products | Products |
| E-commerce > Categories | Categories |
| Orders | Orders |
| Promo Codes | Promo Codes |
| Analytics | Analytics |
| Notifications | Notifications |
| Staff > Roles | Roles & Permissions |
| Staff > Team | Team |
| Blog > Blogs | Blogs |
| Blog > Categories | Blog Categories |
| Settings | Settings |

## Recommended First Read Path

For first-time setup and deployment, follow this sequence:

1. `Configuration`  
2. `Run on Local Server`  
3. `Run on Live Server`  
4. Module pages for team onboarding

## What This Documentation Covers

- Installation and environment configuration.
- Production deployment workflow.
- End-to-end module usage from dashboard to settings.
- CRUD and advanced operations (example: product Excel import/export, notification bulk actions, order exports, and bank transfer verification).

## Support and Reference Links

- Main website: <a href={docsData.links.mainWebsiteUrl} target="_blank" rel="noreferrer">{docsData.links.mainWebsiteUrl}</a>
- Support: <a href={`mailto:${docsData.links.supportEmail}`}>{docsData.links.supportEmail}</a>

<!-- ## Documentation Screenshot Placeholders

Each major page includes a ready placeholder block.  
To use it:

1. Set the image `src`.
2. Remove the `is-hidden` class. -->

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Add an image of the admin sidebar expanded,
    with key module groups highlighted (E-commerce, Staff, Blog).
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/intro.PNG"
      alt="Pink Dreams admin sidebar with module groups"
      loading="lazy"
    />
  </div>
</div>
