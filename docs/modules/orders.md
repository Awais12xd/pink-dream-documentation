---
sidebar_position: 4
title: Orders
---

# Orders Module

The Orders module handles post-checkout operations, fulfillment tracking, and payment verification tasks.

## Core Features

- Order list with pagination
- Search and multi-filter support
- Status updates from table and detail modal
- Payment method and payment status visibility
- Bulk delete for selected orders
- Export visible orders to Excel
- Order detail drawer/modal with full payload review
- Bank transfer receipt verification workflow

## Supported Filters

- Search by order ID, customer, item, payment text
- Order status filter
- Date filter
- Payment method filter

## Excel Export Behavior

The export action includes only rows currently visible after:

- Search
- Filtering
- Sorting
- Pagination state

This matches operational reporting use cases and avoids unrelated data in exports.

## Order Detail Operations

From order details, staff can review:

- Customer and shipping details
- Itemized product data
- Selected options (size/color/quantity where captured)
- Payment method and payment status
- Receipt proof for bank transfer payments

## Bank Transfer Receipt Verification

If payment method is bank transfer:

1. Open order details.
2. Review uploaded receipt image.
3. Add optional internal note.
4. Approve payment to update payment status to succeeded.

This creates an auditable verification trail in order payment metadata.

## Status Model (Typical)

- `pending`
- `processing`
- `shipped`
- `delivered`
- `cancelled`

Use statuses consistently for clean analytics and customer communication.

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture Orders table showing filters,
    payment method column, status badges, and `Export Excel` button.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/orders.PNG"
      alt="Orders table with filters and export action"
      loading="lazy"
    />
  </div>
</div>

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture order detail modal payment section
    with receipt preview and verify action.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/ordermodel.PNG"
      alt="Order details payment section with receipt verification"
      loading="lazy"
    />
  </div>
</div>
