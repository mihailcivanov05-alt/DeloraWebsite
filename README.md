# Delora — Master Project & Design Reference

This is the single, consolidated source of truth for the **Delora Elite IPL** website project. It combines strategic briefs, canonical design system guidelines, repository architecture, and developer handoffs. 

---

## 1. Project Overview
* **Product:** Delora Elite IPL device (at-home sapphire-cooling hair removal / photoepilation).
* **Target Market:** Bulgaria (€189 / ~370 BGN).
* **Key Positioning:** High-end premium product at an accessible price point, competing against €400+ big brands (Philips/Braun) while distancing itself from cheap €80 commodity devices.

---

## 2. Directory & Workspace Structure

The project is split into separate directories representing different lifecycle stages:

* **`DeloraWebsite/`** — The original production/staging Next.js site.
* **`DeloraWebsite-Redesign/`** — An isolated testing branch containing experimental features (COD badge, Objection Chat, Shop Grid, and original advertorial `/ipl-vs-salon`).
* **`DeloraWebsite-Simplified/`** — The lightweight, clean workspace optimized for conversion to raw HTML/CSS/Liquid for Shopify. **This is where active advertorial work (e.g. `/ipl-vs-traditional` and `/ipl-vs-devices`) lives.**
* **`Delora Photos/` & `Photoshoots/`** — Brand assets and image libraries.

### Quick Start / Dev Command
To run any of the workspaces locally, navigate into the directory and run:
```bash
npm run dev
```

---

## 3. Canonical Design System (Amethyst & Lavender)

This replaces all deprecated/stale references to the old pink palette. All code and new components must strictly use the following specifications:

### Colors
* **Primary Amethyst Purple (`#5B3A7A`):** Used for primary CTAs, active states, focus rings, and headings.
* **Secondary Lavender (`#DCC9F0`):** Used for accent cards, soft section backgrounds, dividers, and pastel image overlays.
* **Warm Beige (`#D8C3A5`):** Used sparingly for quiz backgrounds and warm highlights.
* **Charcoal Text (`#1F1B24`):** Default body text color. Extremely high contrast, soft on the eyes.
* **Off-White Background (`#FFFBF7`):** Warm, premium background tone (never use pure `#FFFFFF`).

### Deprecated / Forbidden Palette
* **❌ NO PINK (`#EC4899`, `#F9A8D4`, `#FDF2F8`):** Stale palette from early spec briefs. Do not use in styles or components.
* **❌ NO Playfair Display:** Deprecated font.
* **❌ NO Emojis for Icons:** Always use clean, light `lucide-react` SVG icons.
* **❌ NO Generic Gradient Text / Glows:** Keep backgrounds solid or soft pastel, and typography clean.

### Typography
* **Headings:** `Cormorant Garamond` (Elegant serif).
* **Body / UI:** `Nunito Sans` (Clean, legible sans-serif).
* **Line Wrapping:** Always apply `text-wrap: balance` for headings and `text-wrap: pretty` for body copy.

---

## 4. Strategic PDP Copy & Features

### Above-the-Fold Value PDP Restructure
1. **Headline:** „Премиум IPL епилация у дома — без цената на големите марки“
2. **Subheadline:** „За хора, които искат по-високо качество от евтините IPL уреди, но не искат да плащат надценката на Philips или Braun.“
3. **Primary Benefit:** „✓ До 95% намаляване на окосмяването за 12 седмици“
4. **Secondary Benefits:**
   * „✓ Без болка — сапфирено охлаждане до 15°C при всеки импулс“
   * „✓ Цяло тяло за 25 минути (лесно и удобно)“
   * „✓ 1,000,000 импулса — неограничена употреба за 30+ години“

### Risk-Transfer Guarantee
* **Copy:** "Ние залагаме на уреда — а не на Вас." ("We're betting on the device — not on you.")
* **Concept:** Removes fear of failure; promises 90-day money-back results guarantee.

### COD (Cash on Delivery) Trust Signals
* **Badge:** „Плащане при доставка (COD) — плащате само при получаване на пратката, без риск.“
* **Relevance:** Bulgaria is a heavy COD-market; this must remain highly visible near the buy box.

### Objection-Intercept Chat Widget (`ObjectionChat.tsx`)
* **Behavior:** Proactively pops up after 20 seconds, scroll past the buy-box, or on exit-intent.
* **Flows:** Interactive paths addressing Price, Suitability/Safety, and Efficacy. Links lead to scrolling back to PDP hero or quiz.

---

## 5. Active Advertorial Specs
The two newly redesigned advertorial pages live in `DeloraWebsite-Simplified/`:
1. **`/ipl-vs-traditional`** (IPL vs. Traditional hair removal methods like shaving, waxing, epilators).
2. **`/ipl-vs-devices`** (Delora Elite IPL vs. Cheap €80 IPLs vs. Big Brand €400+ IPLs).

### Design Rules
* Split columns / grid layout for easy readability.
* Focus on comparison tables and interactive cost calculators.
* Smooth, snappy animations (`cubic-bezier(0.23, 1, 0.32, 1)`).
* Tactile active states on buttons (`scale: 0.98`, darker background).

---

## 6. Changelog & Development History
Use this section to record major updates and changes to the codebase. Keep entries chronological (newest at the top).

* **2026-06-16:** Consolidate design systems, strategic briefs, and handoff guides into `README.md`. Clean up all stale/deprecated markdown files. Verified branding colors set to Amethyst and Lavender.
* **2026-06-14:** Built the `/ipl-vs-traditional` and `/ipl-vs-devices` advertorials matching the brand DNA. Completed full UI/UX audit applying premium layout, easing, and active states.
* **2026-06-14:** Configured initial redesign branch: risk-transfer guarantee copy, COD badge, rules-based chatbot, and coming-soon shop grid.

