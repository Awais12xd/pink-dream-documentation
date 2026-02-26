---
sidebar_position: 1
title: Dashboard
---

# Dashboard Module

The Dashboard is the operational snapshot for admin users immediately after login.

## Purpose

Provide at-a-glance metrics so staff can quickly assess:

- Catalog health
- Product availability
- Category distribution
- Recent product activity

## Main Widgets

- **Total Products**
- **Active Products**
- **Inactive Products**
- **Categories count**
- **Products by category**
- **Recent products list with thumbnails**

## Data Source

Dashboard data is requested from the backend stats endpoint and updates when:

- The dashboard tab is opened.
- Product/category records change.

## Operational Use

- Monitor inactive product count before campaign launches.
- Check recently added products for image/price quality.
- Identify category imbalance for merchandising actions.

## Recommended Team Workflow

1. Review dashboard at shift start.
2. Open Products for low-quality/incorrect entries.
3. Open Orders and Notifications for action-required items.

<div className="doc-screenshot-guide">

  <div className="doc-screenshot-frame">
    <img
      src="/img/dashboard.PNG"
      alt="Admin dashboard cards and widgets"
      loading="lazy"
    />
  </div>
</div>
