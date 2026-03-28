# Design System Document

## 1. Overview & Creative North Star: "The TruckMitr"

This design system is engineered to elevate a logistics platform into a high-stakes investment environment. Moving away from the cluttered, utility-first appearance of traditional trucking software, our Creative North Star is **"The TruckMitr."** 

This approach treats data and connectivity as premium assets. We utilize high-contrast editorial typography to establish authority, paired with a "Flat-Depth" philosophy that replaces aggressive 3D shadows with sophisticated tonal layering. The goal is to create a digital workspace that feels as sturdy as a fleet of trucks but as refined as a private equity boardroom. We break the standard grid through intentional whitespace (breathing room) and asymmetrical layouts that guide the eye toward critical KPIs and B2B insights.

---

## 2. Colors: Tonal Depth & The No-Line Rule

Our palette is anchored in professional stability, using deep navies and sharp emeralds to signify both trust and growth.

### Core Palette
- **Primary (`#274680`):** Our "Command Blue." Use for high-level branding and primary actions.
- **Tertiary (`#005412`):** Our "Growth Green." Used sparingly for success states, financial gains, and "Go" signals for drivers.
- **Surface (`#F8F9FA`):** The canvas. A clean, sophisticated neutral that avoids the starkness of pure white.

### The "No-Line" Rule
Standard UI relies on 1px borders to separate content. In this system, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through:
- **Tonal Shifts:** Placing a `surface_container_low` section directly against a `surface` background.
- **Intentional Negative Space:** Using the Spacing Scale (specifically `8` to `12`) to create mental dividers without visual noise.

### Surface Hierarchy & Glassmorphism
We treat the UI as a series of physical layers. 
- **Nesting:** Place a `surface_container_lowest` (pure white) card on top of a `surface_container` background to create a "soft lift."
- **Glassmorphism:** For floating elements like navigation bars or high-priority tooltips, use `primary_container` with a 70% opacity and a `20px` backdrop-blur. This ensures the UI feels integrated into the environment rather than "pasted" on top.

---

## 3. Typography: The Editorial Edge

We use a high-contrast pairing to balance legacy authority with modern efficiency.

- **The Authority (Headlines):** **Noto Serif** is our signature. It conveys the "Investment-ready" weight of a ₹100+ Cr enterprise. Use `display-lg` for hero statements and `headline-md` for section titles.
- **The Engine (Body):** **Inter** is used for all functional data. Its high x-height ensures readability for drivers in high-glare environments and for partners reviewing dense fleet analytics.
- **The Utility (Labels):** **Work Sans** is used for `label-md` and `label-sm` (KPI labels, captions). Its wider tracking provides clarity at small scales.

---

## 4. Elevation & Depth: The Layering Principle

We reject the "floating card" aesthetic in favor of **Tonal Layering.**

- **Layering Principle:** Instead of `box-shadow`, use the Surface Tiers. 
    - Base: `surface`
    - Section: `surface_container_low`
    - High-Priority Component: `surface_container_lowest` (White)
- **Ambient Shadows:** Shadows are reserved only for "floating" elements (e.g., Modals). Use a hyper-diffused `32px` blur with 6% opacity using a tint of `on_surface` (`#191C1D`). It should feel like a soft glow, not a dark edge.
- **The "Ghost Border":** If a separation is strictly required for accessibility (e.g., input fields), use `outline_variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Integrated & Intentional

### Buttons
- **Primary:** `primary` background, `on_primary` text. No shadow. Use a subtle linear gradient from `primary` to `primary_container` (top to bottom) for a "pressed" high-end feel.
- **Tertiary/Ghost:** No background or border. Use `primary` text with an icon. High-end editorial feel.

### Cards & KPIs
- **The Forbid Rule:** Never use divider lines within cards. 
- **Structure:** Use `spacing.5` (1.25rem) to separate the KPI value (`display-sm`) from its label (`label-md`). 
- **Integration:** Cards should be `surface_container_lowest` with a `xl` (0.75rem) corner radius, sitting on a `surface_container_low` background.

### Input Fields & Hindi Accessibility
- **Targeting:** Inputs must have a minimum height of `48px` to accommodate larger tap targets for drivers.
- **Labels:** Use `title-sm` for labels to ensure they are legible when translated into Hindi script, which often requires more vertical space than Latin characters.
- **State:** Error states use `error` text and a "Ghost Border" of the `error` color at 20% opacity.

### Chips
- **B2B Filters:** Use `secondary_container` with `on_secondary_container` text. Keep corners at `md` (0.375rem) for a more professional, less "bubbly" appearance.

---

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical layouts. For example, a hero image that is slightly offset from the text container to create a "custom" look.
- **Do** prioritize Hindi-first legibility. Ensure line-height for body text is at least `1.6` to prevent Hindi vowel markers (matras) from crowding.
- **Do** use "Signature Textures." A subtle 2% noise texture or a very soft gradient across large background areas adds a "premium paper" quality.

### Don’t
- **Don’t** use pure black `#000000` for text. Use `on_surface` (`#191C1D`) to maintain a high-end, softer contrast.
- **Don’t** use traditional "Drop Shadows" on cards. If it looks like it's "popping out," it's too aggressive. It should look "placed."
- **Don’t** use 1px dividers to separate list items. Use a `surface_container_high` background shift on hover instead.
- **Don't** clutter the dashboard. If a B2B partner is looking at a ₹100 Cr portfolio, give the data room to breathe. Use `spacing.16` (4rem) between major content blocks.

---
*Note: This design system is built to scale from the driver's smartphone on a dusty highway to the OEM executive's 5K monitor. Maintain the integrity of the "Ghost Border" and "Tonal Layering" to ensure a consistent premium experience.*