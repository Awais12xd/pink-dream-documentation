---
sidebar_position: 7
title: Notifications
---

# Notifications Module

Notifications combines realtime alerts (bell dropdown) with full operational management in the Notifications tab.

## Two Notification Interfaces

## 1) Header Notification Bell

- Shows latest 4 notifications.
- Read/unread visual distinction.
- Per-item mark as read.
- Staff-level realtime pause/resume toggle.
- Quick link to full notification manager.

## 2) Notifications Manager Tab

- Full list with pagination
- Search
- Filters: severity, type, read-state
- Mark filtered notifications as read
- Single delete
- Multi-select + bulk delete

## Selection Behavior

Selection includes Gmail-like controls:

- Select all on page via checkbox
- Scope-based selection (`All`, `Unread`, `Read`)
- Per-notification selection
- Clear selection action

## Severity and Type Tracking

Each notification can include:

- Type (order, product, blog, staff, settings, and more)
- Severity (`info`, `high`, `critical`)
- Actor and target context (in detail view)

## Operational Recommendations

- Use `Unread` filter at shift start.
- Clear resolved notifications in batches.
- Keep realtime enabled for operational staff.
- Use pause mode for focused maintenance windows.

<div className="doc-screenshot-guide">
  <p>
    <strong>Screenshot guide:</strong> Capture notification bell dropdown showing
    read/unread styling differences and realtime toggle.
  </p>
  <div className="doc-screenshot-frame is-hidden">
    <img
      src="/img/notificationbell.PNG"
      alt="Notification bell panel with read and unread items"
      loading="lazy"
    />
  </div>
</div>

<div className="doc-screenshot-guide">
 
  <div className="doc-screenshot-frame ">
    <img
      src="/img/notifications.PNG"
      alt="Notifications manager with filters and bulk actions"
      loading="lazy"
    />
  </div>
</div>
