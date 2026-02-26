---
sidebar_position: 8
title: Roles & Permissions
---

# Roles & Permissions Module

Roles & Permissions provides role-based access control (RBAC) for secure admin operations.

## What It Controls

- Module visibility in admin sidebar
- Allowed actions per module (`create`, `read`, `update`, `delete`)
- High-risk operations (bulk delete, status changes, configuration updates)

## Role Management Operations

- Create role definitions
- Edit role permissions
- Delete roles
- Assign roles to team members through Team module

## Permission Design Strategy

Recommended baseline roles:

- **Super Admin**: full access
- **Catalog Manager**: products/categories/blogs
- **Order Manager**: orders + notifications
- **Marketing Manager**: promo codes + blogs + analytics
- **Support Agent**: orders read/update + notifications read

## Production Access Principles

- Grant minimum required permissions.
- Separate configuration authority (Settings) from daily operations.
- Review roles periodically and after staffing changes.

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture Roles page with permissions matrix
    visible and one role selected for edit.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/roles.PNG"
      alt="Roles and permissions management interface"
      loading="lazy"
    />
  </div>
</div>
