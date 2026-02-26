---
sidebar_position: 5
title: Promo Codes
---

# Promo Codes Module

Promo Codes supports discount campaigns with controllable business rules.

## Core Operations

- Create promo code
- Read/list promo codes
- Update code values and validity
- Delete promo code

## Configuration Fields

Typical campaign fields include:

- Code name
- Discount type (percentage or fixed)
- Discount value
- Start/end dates
- Usage limits and constraints
- Activation status

## Operational Use Cases

- Time-limited sales campaigns
- User acquisition discounts
- Seasonal offers
- Recovery offers for low-conversion periods

## Governance Recommendations

- Keep one owner per active campaign for accountability.
- Set expiration dates for all temporary campaigns.
- Remove expired/obsolete codes to reduce admin clutter.

<div className="doc-screenshot-guide">
  <!-- <p>
    <strong>Screenshot guide:</strong> Capture promo code table and the create/edit
    form modal with discount and validity fields.
  </p> -->
  <div className="doc-screenshot-frame ">
    <img
      src="/img/promocodes.PNG"
      alt="Promo code management with create and list actions"
      loading="lazy"
    />
  </div>
</div>
