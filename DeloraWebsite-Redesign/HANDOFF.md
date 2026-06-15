# Delora Website Redesign — Handoff Doc

> For the next agent. This captures what this project is, where it lives, what was
> changed in the last session, what's still open, and how to work on it safely.

_Last updated: 2026-06-14_

> **📋 Reference docs:** all the source briefs that used to live in `~/Downloads` have been
> consolidated into **`../Delora_Master_Brief.md`** (one folder up, at the `Delora /` root).
> Read that for full intent + BG copy + a build-status table. The four original briefs are
> archived verbatim in **`../briefs/`** (Above-Fold Brief, ADDENDUM, ADDENDUM_1, and the
> Nood-Style Advertorial Spec). ADDENDUM is superseded by ADDENDUM_1; the ADDENDUM_1 §5
> advertorial draft is superseded by the Nood spec.

---

## 0. Latest session (2026-06-14) — Advertorial rebuild + doc consolidation

- **Rebuilt the `/ipl-vs-salon` advertorial in the NOOD-style spec** (`Delora_Advertorial_Build_
  Spec_Nood_Style.md`), then **re-skinned it into the Delora brand DNA** (amethyst/lavender,
  Cormorant headings, soft cards, lavender-gradient placeholders) after the first pass came out
  in a clashing raw-pink palette. BG-only; combative "stop paying the salon" angle. 7 sections,
  all 12 labelled empty visual placeholder blocks with stable `id`s, real comparison table, FAQ
  accordion, swipeable 5-slide carousel. CTAs: device → `/#product-hero`, quiz → `/#consultation`.
  `tsc --noEmit` exit 0; `/ipl-vs-salon` returns 200. (`Advertorial.tsx` + `.css`.)
- **Consolidated the four loose Downloads briefs** into `../Delora_Master_Brief.md` and archived
  the originals in `../briefs/` (see the Reference-docs note above).

---

## 0a. Prior session (2026-06-14) — Above-the-Fold Addendum execution

Executed the frontend-buildable parts of `Delora_Above_Fold_Redesign_Brief_ADDENDUM_1.md`.
All verified: `tsc --noEmit` exit 0; routes `/`, `/ipl-vs-salon`, `/shop` all return 200
on localhost:3001. Default site language is **BG**.

**Built in code:**
- **§1 Risk-transfer guarantee** — rewrote the guarantee copy in `ProductHero.tsx`
  (EN + BG), added a bold `emphasis` line ("We're betting on the device — not on you.").
- **§4 COD trust signal (frontend only)** — added a "Pay on delivery / Плащане при
  доставка — pay only when it arrives, no risk" badge above the buy-box CTAs
  (`ProductHero.tsx` + `.css`). COD is also already listed in the financing options.
- **§2 Objection-intercept chat widget** — NEW `ObjectionChat.tsx` + `.css`, rendered on
  the home page. Rules-based (Option A), bilingual, bottom-right. Proactive triggers:
  20s on page, scroll past the buy box, and exit-intent. 3 flows (price / suitability /
  doubts) with quick-reply chips; action buttons scroll to `#product-hero` / `#consultation`
  or open a `mailto:`. **No backend / not the paid AI (Intercom) option.**
- **§5 Advertorial** — hidden route `/ipl-vs-salon` (`app/ipl-vs-salon/page.tsx`
  → `Advertorial.tsx` + `.css`), `robots: noindex`. **NOTE: rebuilt in the next session** —
  it is now the **NOOD-style** combative "stop paying the salon" pre-sell page (BG-only),
  styled in the Delora brand DNA, with 12 labelled empty visual placeholder blocks (stable
  `id`s for later asset drop-in), a real comparison table, FAQ accordion, and a 5-slide
  carousel. See §0 and `../Delora_Master_Brief.md` Part F. (The original build here was a
  bilingual 7-section education page — that version is gone.)
- **§6 Coming-soon shop** — NEW route `/shop` (`app/shop/page.tsx` → `ShopGrid.tsx` +
  `.css`). Live device card (€189) + 3 coming-soon cards (Delora XL, Delora Face,
  Post-IPL Serum) with status badges. "Notify me" is **UI-only** (success state in the
  browser, **no network call**) per product decision.

**Deliberately NOT done (external platforms / ops — cannot run from this repo):**
- **§3 12-week onboarding email sequence** — dropped entirely per request (Klaviyo work).
- **§4 payment backend** — Shopify Payments / Klarna app / logistics COD verification.
- **§2 AI chatbot (Option B)** — Intercom Fin subscription + training.
- **§5/§6 platform config** — creating the real Shopify pages/products, wiring "Notify me"
  to a list, and redirecting Meta ads to `/ipl-vs-salon`.
- **Discoverability:** Navbar (desktop + mobile) and footer now link to `/shop`,
  `/#consultation`, `/#reviews`, `/#faq` (added `id="faq"` to `FAQAccordion`). The navbar
  "Shop Now" CTA still scrolls to `#product-hero` (buy box). `/ipl-vs-salon` is left
  UNLINKED on purpose — it's an ad-traffic-only landing page (`robots: noindex`).

---

## 1. What this is

The **isolated / alternate redesign** of the Delora website — a separate copy from the
main production site, used to iterate on the above-the-fold and full landing page without
touching the live one.

- **Product:** single-product landing page for the **Delora Elite IPL device**
  (at-home hair removal / photoepilation).
- **Stack:** Next.js (App Router) + Turbopack dev server, React, TypeScript, plain
  per-component CSS files (no Tailwind here). Animations via `framer-motion`, icons via
  `lucide-react`.
- **i18n:** bilingual EN/BG via a `LanguageContext` + `src/translations/index.ts`.
- **Cart:** `CartContext` + `CartDrawer` (navbar cart icon). Note: the product CTAs do
  NOT currently use this (see Open Items).

### Brand / design language (as implemented)
- Palette: amethyst `#5B3A7A`, lavender `#DCC9F0`, beige `#D8C3A5`, charcoal `#1F1B24`.
- Fonts: Cormorant Garamond (headings) + Nunito Sans (body), loaded via `next/font`.
- **📋 Canonical design reference:** [`../../DeloraWebsite/design-system/DESIGN_SYSTEM.md`](../../DeloraWebsite/design-system/DESIGN_SYSTEM.md) — the new, authoritative system (amethyst/Cormorant). Replaces the deprecated `MASTER.md`.

---

## 2. Where it lives + how to run

- **Project root:** `/Users/mihailivanov/Documents/Delora /DeloraWebsite-Redesign`
  (⚠️ note the **trailing space** in the `Delora ` folder name — quote paths in shell.)
- **Dev URL:** http://localhost:3001  (already running during last session)
- **Run it:** from the project root, the usual `npm run dev` (Turbopack). It hot-reloads.
- **Typecheck:** `npx tsc --noEmit` (was passing, exit 0, after last session's changes).

### ⚠️ Important project rule (from `AGENTS.md`)
> This is NOT the Next.js you know — APIs/conventions may differ from training data.
> **Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code.**
Last session's edits were content/CSS/JSX only and did not touch Next.js APIs, so this
didn't come into play — but it will if you change routing, data fetching, config, etc.

---

## 3. Page structure (composition)

`src/app/page.tsx` renders, in order:
`Navbar → ProductHero → TrustBadges → BenefitGrid → BeforeAfterSection →
ComparisonTable → HowToUse → SkinMatchQuiz → FAQAccordion → ReviewCards →
FinalCTA → Footer → StickyCartBar`

**`ProductHero` is the conversion centerpiece** (image gallery + buy box + cost
comparison + pricing + guarantee + trust strip + dual CTAs + accordions).

Section anchor IDs in use: `#product-hero`, `#consultation` (= the SkinMatchQuiz),
`#reviews` (= ReviewCards). Other components (`Hero`, `ProductSection`, `ScienceSection`,
`Scrollytelling`, `SocialProof`, `SuitabilityGuide`, `PressBar`) exist in
`src/components/` but are **NOT rendered** on the current page — don't waste time on them
unless re-introducing.

---

## 4. What was done last session

A UI/UX audit was run using the **`ui-ux-pro-max` skill** (located at
`Documents/Skills ToolBox/ui-ux-pro-max`, also vendored at `skills/ui-ux-pro-max` in this
repo). The skill's design-system + UX guidelines were generated and the code audited
against the skill rules + its Pre-Delivery Checklist.

### Changes implemented (all verified: tsc passes, dev server 200)

| Area | Change | File |
|------|--------|------|
| Pricing trust | Sticky bar price €229→**€189**, "Save 43%"→**"Save 53%"** to match buy box | `src/components/StickyCartBar.tsx` |
| Broken anchor | Added `id="reviews"` so the "1,000+ reviews" link works | `src/components/ReviewCards.tsx` |
| IA mismatch | "Shop" nav CTAs now → `#product-hero` (buy box) instead of `#consultation` (quiz) | `src/components/Navbar.tsx` |
| Skill anti-pattern | Replaced all 18 **emojis** (🔍💰🎯💳🛡️🛒📋) with Lucide SVG icons; stripped emojis from EN/BG strings; added CSS to align inline icons | `src/components/ProductHero.tsx`, `src/components/ProductHero.css` |
| Global bug | Fixed `--transition-smooth`: was applying 0.3s easing to `opacity` only, leaving color/bg/border/shadow/transform **instant** on every `<a>`/`<button>`. Now all properties animate | `src/app/globals.css` |
| A11y | Custom `role="button"` elements (quiz options, gallery thumbnails) now activate on **Space** as well as Enter | `src/components/SkinMatchQuiz.tsx`, `src/components/ProductHero.tsx` |
| A11y | Quiz "Back" button now `visibility:hidden` at step 0 so it leaves the tab order when hidden | `src/components/SkinMatchQuiz.tsx` |
| Polish | FAQ answer `maxHeight` 300px→1000px so long (esp. BG) answers don't clip | `src/components/FAQAccordion.tsx` |

---

## 5. Open items / known issues (NOT done — deliberately deferred)

These were intentionally skipped last session at the user's request. Pick up here:

1. **"Add to cart" buttons don't add to cart.** Both ProductHero CTAs
   (`src/components/ProductHero.tsx`) and the sticky bar (`src/components/StickyCartBar.tsx`)
   are `<a href="https://checkout.delora.com">` — they leave the site (domain may not
   resolve) and bypass the existing `CartContext`/`CartDrawer`. Decision needed: wire to
   the cart, or relabel to "Buy now" and fix the URL.
2. **Newsletter form is non-functional.** Footer "Join" button has no `onClick`, fields
   aren't in a `<form>`, and the existing `src/app/api/subscribe/route.ts` is never called.
   No loading/success/error states. (`src/components/Footer.tsx`)

### Lower-priority / polish still open
- **Empty navbar:** desktop nav `<ul>` and both lang-switcher containers are empty; the
  mobile hamburger opens a menu containing only the Shop CTA. Either populate
  (nav links + working language switch) or remove the hamburger. (`src/components/Navbar.tsx`)
- **Sticky bar thumbnail** never renders — `STICKY_IMAGE = ""` so it's always a placeholder.
- **Dead link:** footer "Support" link is `href="#"`. (`src/components/Footer.tsx`)
- **Newsletter input** has `aria-label` but no visible `<label>` (skill prefers a real label).
- **Logo `<img>`** has no width/height (minor CLS); consider `next/image` for product photos too.
- ✅ **MASTER.md replaced** — [`design-system/DESIGN_SYSTEM.md`](../../DeloraWebsite/design-system/DESIGN_SYSTEM.md) is now the canonical reference.

### Not yet verified visually
The audit was static (code-level). A rendered visual pass at **375 / 768 / 1024 / 1440px**
was NOT done (catches contrast, layout, overflow issues code review can't). Recommended
before sign-off.

---

## 6. How to use the UI/UX skill (for future audits/design work)

The `ui-ux-pro-max` skill is a searchable design database (styles, palettes, fonts, UX
rules, per-stack guidelines) with a Python CLI.

```bash
cd "/Users/mihailivanov/Documents/Delora /DeloraWebsite-Redesign"

# Generate a full design system for a context:
python3 skills/ui-ux-pro-max/scripts/search.py "<product> <industry> <keywords>" --design-system -f markdown

# Domain searches (domains: product, style, typography, color, landing, chart, ux, react, web, prompt):
python3 skills/ui-ux-pro-max/scripts/search.py "accessibility animation focus" --domain ux

# Stack guidance (this project = nextjs):
python3 skills/ui-ux-pro-max/scripts/search.py "ssr images routing" --stack nextjs
```
The skill's `SKILL.md` (in `skills/ui-ux-pro-max/`) has the full workflow and the
Pre-Delivery Checklist used for the audit.

---

## 7. Quick orientation checklist for the next agent

- [ ] `cd "/Users/mihailivanov/Documents/Delora /DeloraWebsite-Redesign"` (mind the space)
- [ ] `npm run dev` → confirm http://localhost:3001 loads
- [ ] Read `AGENTS.md` before any Next.js API/config change
- [ ] Reference [`design-system/DESIGN_SYSTEM.md`](../../DeloraWebsite/design-system/DESIGN_SYSTEM.md) for brand colors, typography, spacing, and components
- [ ] `npx tsc --noEmit` after changes
- [ ] Requirements/copy live in **`../Delora_Master_Brief.md`** (consolidated source of truth);
      raw originals archived in **`../briefs/`**. No Delora briefs remain in `~/Downloads`.
