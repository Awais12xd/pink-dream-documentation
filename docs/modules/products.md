---
sidebar_position: 2
title: Products
---

# Products Module

The Products module manages catalog lifecycle from creation to bulk operations.

## Core Capabilities

- Full product CRUD
- Product details view
- Status toggle (`published` / inactive)
- Search, sort, and category/price filtering
- Multi-image support
- Bulk delete
- Excel export (current view)
- Excel import (bulk add flow)
- Downloadable import template with validation guidance

## Product CRUD Flow

## Create

Use **E-commerce > Add Product** to define:

- Title, category, description
- Pricing (`new_price`, optional `old_price`)
- Variants and options (color/size where applicable)
- Availability and stock controls
- Product images

## Read

Use **E-commerce > All Products** for table-level read operations:

- Thumbnail and product meta
- Price and discount visibility
- Category and status
- Stock indicators

## Update

Use **Edit Product** to update operational fields including pricing, stock, media, descriptive content, and storefront behavior.

## Delete

- Single delete from row actions.
- Multi-select + bulk delete for batch cleanup.

## Excel Export

The export action downloads only records currently visible in the table state:

- Active search term
- Active category filter
- Active price bounds
- Current sorting
- Current pagination page

This supports operational reports without requiring manual data cleanup.

## Excel Import (Bulk Product Entry)

Use **Import Excel** to upload bulk products.

Recommended process:

1. Download starter template.
2. Fill required columns.
3. Use valid category names that already exist in store.
4. Provide Cloudinary image URLs in image columns.
5. Import and review row-level validation results.

If invalid rows exist, error report download is provided to correct and re-import.

## Important Import Notes

- Image upload is URL-based in Excel mode.
- Images should be uploaded to Cloudinary first, then URLs pasted into template.
- Keep column names unchanged to avoid parser mismatch.

## Production Best Practices

- Use import for large catalog onboarding.
- Use export before high-risk bulk operations as backup.
- Validate a small sample file before large production imports.

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture `View Products` with search/filter
    area, and highlight `Export Excel`, `Template`, and `Import Excel` buttons.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/products.PNG"
      alt="Products page with import export actions"
      loading="lazy"
    />
  </div>
</div>

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture Add/Edit Product form showing
    pricing, stock, options, and image fields in one frame.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/addProduct.PNG"
      alt="Product create edit form with complete fields"
      loading="lazy"
    />
  </div>
</div>
