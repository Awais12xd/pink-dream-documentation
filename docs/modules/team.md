---
sidebar_position: 9
title: Team
---

# Team Module

The Team module manages staff user accounts and role assignment for admin access.

## Team CRUD

- Create staff user
- Read/search staff list
- Update account details and role assignment
- Delete/deactivate staff users

## Typical Fields

- Name
- Email
- Role
- Account status

## Operational Workflow

1. Create role in **Roles & Permissions**.
2. Create team member account.
3. Assign role and verify module visibility.
4. Confirm permissions with a test login.

## Security Best Practices

- Remove stale team accounts immediately.
- Avoid shared admin credentials.
- Keep sensitive module permissions restricted to trusted roles.

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture Team table with role column and
    add member modal/form in the same sequence.
  </p> -->
  <div className="doc-screenshot-frame">
    <img
      src="/img/team.PNG"
      alt="Team management list and add member form"
      loading="lazy"
    />
  </div>
</div>
