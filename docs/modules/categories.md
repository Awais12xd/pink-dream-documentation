---
sidebar_position: 3
title: Categories
---

# Categories Module

Categories organize product discovery in storefront and improve filtering in admin workflows.

## Available Operations

- Create category
- View category list
- Update category details
- Delete category

## Functional Scope

- Assign products to merchandising groups.
- Enable consistent navigation labels for storefront users.
- Support product import validation (category name matching).

## CRUD Guidance

### Create

Define category name and presentation metadata used across product forms and storefront grouping.

### Read

Category list enables quick review of coverage and naming consistency.

### Update

Use rename updates carefully in live stores to avoid temporary mismatch with import templates and reporting filters.

### Delete

Before deletion, reassign dependent products to a valid fallback category.

## Operational Best Practices

- Keep naming normalized (example: avoid `Top`, `Tops`, `top` duplicates).
- Review category map before seasonal catalog imports.
- Maintain a short internal naming guide for large teams.

<div className="doc-screenshot-guide">
 
  <div className="doc-screenshot-frame ">
    <img
      src="/img/category.PNG"
      alt="Category management table with CRUD actions"
      loading="lazy"
    />
  </div>
</div>
