# DELORA PROJECT — MASTER HANDOFF

**Last updated:** 2026-06-14  
**Project:** Delora Elite IPL device (at-home hair removal) — Bulgaria market, €189.  
**Status:** Two versions in active development (production site + isolated redesign branch).

---

## TL;DR — Read This First

This is **one project with two parallel versions:**

- **`DeloraWebsite/`** — The main production/staging site. UI/UX-only, static HTML+CSS, deployed on Shopify. Current state: above-the-fold section, all core components (hero, benefits, comparison, quiz, FAQ, reviews, CTA).
- **`DeloraWebsite-Redesign/`** — An isolated test branch. Same tech stack, but **with the latest redesign briefs executed**. Above-the-fold restructured (risk-transfer, dual CTA, etc.), objection chat widget added, advertorial landing page (`/ipl-vs-salon`), shop page with coming-soon products. This is the **most up-to-date implementation** and where recent work lives.

**Your next move depends on your role:**

| You are… | Start here | Then read |
|---|---|---|
| **Designer / PM** | [`Delora_Master_Brief.md`](#reading-order) | [`DeloraWebsite-Redesign/HANDOFF.md`](#reading-order) |
| **Developer** | [`DeloraWebsite-Redesign/HANDOFF.md`](#reading-order) | [`Delora_Master_Brief.md`](#reading-order) |
| **QA / Tester** | [`DeloraWebsite-Redesign/HANDOFF.md`](#reading-order) → Open items section | Test checklist TBD |
| **New to project** | This file (you're reading it!) then the table below | Everything below |

---

## Folder Structure

```
Delora/
├── PROJECT_HANDOFF.md                    ← YOU ARE HERE
├── Delora_Master_Brief.md                ← Strategic direction (consolidated briefs)
│
├── DeloraWebsite/                        ← Production site
│   ├── NEXT_STEPS.md                     ← What it is + scope
│   ├── HANDOFF.md                        ← (TBD — doesn't exist yet)
│   ├── architecture/                     ← Architecture docs
│   ├── design-system/                    ← Design system (Cormorant + Nunito)
│   ├── src/app/                          ← Next.js App Router
│   └── ...
│
├── DeloraWebsite-Redesign/               ← Isolated redesign (CURRENT WORK)
│   ├── HANDOFF.md                        ← Detailed handoff for this branch
│   ├── src/components/                   ← React components (ProductHero, Advertorial, etc.)
│   ├── src/app/                          ← Routes (/, /shop, /ipl-vs-salon)
│   └── ...
│
├── Delora Project/                       ← Assets (photos, landing HTML exports)
│
└── briefs/                               ← Archive of original briefs (for history)
    ├── Delora_Above_Fold_Redesign_Brief.md
    ├── Delora_Above_Fold_Redesign_Brief_ADDENDUM.md
    ├── Delora_Above_Fold_Redesign_Brief_ADDENDUM_1.md
    └── Delora_Advertorial_Build_Spec_Nood_Style.md
```

---

## Reading Order (by role)

### 👨‍💼 Product / Strategic Overview
1. **This file** (PROJECT_HANDOFF.md) — orientation
2. [`Delora_Master_Brief.md`](Delora_Master_Brief.md) — **read carefully** — every part A–G with build status + what's external
3. [`DeloraWebsite-Redesign/HANDOFF.md`](DeloraWebsite-Redesign/HANDOFF.md) § 4 "What was done last session" — what's actually built

### 👨‍💻 Developer (picking up the code)
1. This file
2. [`DeloraWebsite-Redesign/HANDOFF.md`](DeloraWebsite-Redesign/HANDOFF.md) — complete handoff for the isolated version
3. [`Delora_Master_Brief.md`](Delora_Master_Brief.md) § H (Consolidated Roadmap) — what's still external (Klaviyo, Shopify, Meta ads)
4. **Run locally:** `cd DeloraWebsite-Redesign && npm run dev` (Turbopack on :3001)

### 🎨 Designer (mockups, polish, visual direction)
1. This file
2. [`Delora_Master_Brief.md`](Delora_Master_Brief.md) — understand the copy + intent
3. [`DeloraWebsite-Redesign/HANDOFF.md`](DeloraWebsite-Redesign/HANDOFF.md) § 1 "What this is" — brand DNA (amethyst/lavender, Cormorant headings, component CSS)
4. [`DeloraWebsite/design-system/`](DeloraWebsite/design-system/) — existing design tokens (if applicable to prod site)

### ✅ QA / Tester
1. This file
2. [`DeloraWebsite-Redesign/HANDOFF.md`](DeloraWebsite-Redesign/HANDOFF.md) § 2 "What was done last session" — feature list
3. Same doc § 5 "Open items" — known gaps (newsletter form, add-to-cart wiring, sticky bar thumbnail)
4. Test checklist: (no formal doc yet — use HANDOFF.md as reference)

---

## What's Actually Built? (Isolated Redesign — DeloraWebsite-Redesign/)

| Component | Status | Where | Notes |
|---|---|---|---|
| **Above-the-fold PDP** | ✅ | `ProductHero.tsx` | New headline, benefits, cost table, dual CTA, risk-transfer guarantee (EN+BG) |
| **COD trust badge** | ✅ | `ProductHero.tsx` | "Pay on delivery" + "Плащане при доставка" bilingual |
| **Objection chat widget** | ✅ | `ObjectionChat.tsx` | Rules-based (no AI). 20s trigger, scroll-past trigger, exit-intent. BG+EN. |
| **Advertorial page** | ✅ | `Advertorial.tsx` + route `/ipl-vs-salon` | NOOD-style combative copy (BG), 7 sections, 12 visual placeholders, `robots: noindex` |
| **Shop page** | ✅ | `ShopGrid.tsx` + route `/shop` | Live device card (€189) + 3 coming-soon (Delora XL / Face / Serum). UI-only "Notify me" forms. |
| **Navigation** | ✅ | `Navbar.tsx`, `Footer.tsx` | Links to /shop, /#consultation, /#reviews, /#faq |
| **FAQ accordion** | ✅ | `FAQAccordion.tsx` + `id="faq"` | Anchor-linkable, responsive |
| **TypeScript** | ✅ | Full codebase | `tsc --noEmit` exit 0 |
| **Dev server** | ✅ | localhost:3001 | All routes return 200. Turbopack. |

**Not built (external platforms):**
- ❌ 12-week onboarding emails (Klaviyo / Omnisend)
- ❌ AI chatbot (Intercom Fin — Option B)
- ❌ Shopify product setup (platforms, logistics, COD gateway, Klarna verification)
- ❌ Meta ads redirect to advertorial
- ❌ Newsletter signup backend (`/api/subscribe` exists but not wired)
- ❌ Add-to-cart backend (links leave site to checkout.delora.com)

See [`Delora_Master_Brief.md`](Delora_Master_Brief.md) Part H (Roadmap) for full details.

---

## Quick Navigation

### Strategic / Copy
- **Full redesign brief:** [`Delora_Master_Brief.md`](Delora_Master_Brief.md) — 7 parts (A–G), build status, measurement targets
- **Original briefs (archived for reference):** [`briefs/`](briefs/)
  - `Delora_Above_Fold_Redesign_Brief.md` — the original PDP restructure
  - `Delora_Above_Fold_Redesign_Brief_ADDENDUM.md` — risk-transfer + chatbot + onboarding (superseded by ADDENDUM_1)
  - `Delora_Above_Fold_Redesign_Brief_ADDENDUM_1.md` — complete (includes advertorial draft + coming-soon)
  - `Delora_Advertorial_Build_Spec_Nood_Style.md` — newest advertorial spec (canonical for the built version)

### Codebase (Isolated Redesign)
- **Handoff / context:** [`DeloraWebsite-Redesign/HANDOFF.md`](DeloraWebsite-Redesign/HANDOFF.md)
- **Key files edited last session:**
  - `src/components/ProductHero.tsx` (guarantee, COD badge)
  - `src/components/ObjectionChat.tsx` (new)
  - `src/components/Advertorial.tsx` (new, rebuilt)
  - `src/components/ShopGrid.tsx` (new)
  - `src/app/ipl-vs-salon/page.tsx` (new route)
  - `src/app/shop/page.tsx` (new route)
  - `src/components/Navbar.tsx` (nav links)
  - `src/components/Footer.tsx` (explore links)
  - `.claude/settings.json` (project-scoped permissions)
- **Design system:** [`DeloraWebsite-Redesign/src/app/globals.css`](DeloraWebsite-Redesign/src/app/globals.css) — amethyst `#5B3A7A`, lavender `#DCC9F0`, Cormorant + Nunito

### Production Site (DeloraWebsite/)
- **Quick context:** [`DeloraWebsite/NEXT_STEPS.md`](DeloraWebsite/NEXT_STEPS.md) — UI/UX focus, static HTML+CSS for Shopify
- **Architecture:** [`DeloraWebsite/architecture/`](DeloraWebsite/architecture/) (folder structure — check for docs)
- **Design system:** [`DeloraWebsite/design-system/DESIGN_SYSTEM.md`](DeloraWebsite/design-system/DESIGN_SYSTEM.md) ← **CANONICAL** — amethyst/lavender, Cormorant + Nunito. (Old `MASTER.md` is deprecated.)
- **Status:** No recent handoff. [TODO: Create one if needed.]

---

## How the Two Versions Relate

```
PRODUCTION (DeloraWebsite/)              ISOLATED REDESIGN (DeloraWebsite-Redesign/)
├─ Main live/staging site                ├─ Test branch for redesign experiments
├─ Core components built                  ├─ Same tech stack (Next.js, React, TS)
├─ No recent briefs applied              ├─ Latest briefs executed (ADDENDUM_1 + NOOD spec)
└─ Starting point for further work        └─ Reference implementation for production merge

SYNC STRATEGY (TBD):
- Once redesign is validated (A/B testing, conversion metrics),
  port the changes (ProductHero, Advertorial, Shop, ObjectionChat)
  back into the main DeloraWebsite/.
- Keep design system in sync (amethyst/lavender palette, fonts).
- Merge routes (/ipl-vs-salon, /shop) into main nav structure.
```

---

## Key Decisions & Constraints

**Design System:**
- Brand colors: amethyst `#5B3A7A`, lavender `#DCC9F0`, beige `#D8C3A5`, charcoal `#1F1B24`
- Fonts: Cormorant Garamond (headings), Nunito Sans (body) — loaded via `next/font`
- **Important:** `MASTER.md` in design-system/ is **stale** (pink/Playfair) — **the code is the source of truth**

**Bilingual:**
- EN + BG supported via `LanguageContext`
- **Default language for redesign:** BG (per user preference)
- Advertorial: BG-only (cold-traffic landing page)

**Scope of Isolated Redesign:**
- UI/UX only — no backend integrations, no new Shopify setup
- Routes return 200; forms are UI-only (no submission)
- Links target the isolated PDP (e.g., CTAs → `/#product-hero`, quiz → `/#consultation`)
- Still at localhost:3001 (not deployed)

**Payment & Shipping:**
- Klarna: 3 × €63/month (to be verified active in Shopify checkout)
- COD: Trust badge built; logistics gateway TBD
- Free express shipping (copy in place; logistics TBD)

---

## Next Steps (From the Briefs)

**Immediate (high priority):**
- Verify Klarna is active in Shopify checkout (Bulgaria, BGN)
- Verify COD is supported by logistics partner (DPD/Speedy/etc.)
- Create real Shopify page for advertorial (`/pages/ipl-vs-salon`)
- Redirect Meta ads to the advertorial (not directly to `/products/delora`)

**Short term (1–2 weeks):**
- Set up 12-week onboarding emails (Klaviyo or Omnisend) — high ROI for preventing refunds
- Set up rules-based chatbot (Shopify Chat, free tier, 3–4 hours to write flows)
- Add coming-soon products to Shopify (create the placeholder SKUs, "Notify me" → email list)
- A/B test advertorial vs. direct PDP on Meta (measure scroll depth, CTA click rate, conversion)

**Medium term (3–4 weeks):**
- If advertorial + redesign convert better, port changes to main production site
- Deploy AI chatbot (Intercom Fin or Drift) if budget allows
- Launch Delora XL / Face / Serum when ready (queue them in Shopify as "coming soon")
- Measure: refund rate, repeat purchase, LTV

**Long term:**
- Polish copy + visuals based on early user feedback
- Expand to other markets (EU, UK) with localizations
- Build product ecosystem (serums, accessories, etc.)

See [`Delora_Master_Brief.md`](Delora_Master_Brief.md) Part H for the full roadmap with effort estimates.

---

## How to Work on This Project

### Developer: Set up local environment
```bash
cd DeloraWebsite-Redesign
npm install
npm run dev
# Opens http://localhost:3001
npx tsc --noEmit  # Verify types after changes
```

### Designer: Review design & copy
1. Read [`Delora_Master_Brief.md`](Delora_Master_Brief.md) for copy direction + intent
2. Visit localhost:3001 to see the build
3. Compare against the NOOD spec in [`briefs/Delora_Advertorial_Build_Spec_Nood_Style.md`](briefs/Delora_Advertorial_Build_Spec_Nood_Style.md) for advertorial
4. Check brand tokens in [`DeloraWebsite-Redesign/src/app/globals.css`](DeloraWebsite-Redesign/src/app/globals.css)

### Product: Review metrics & roadmap
1. Read [`Delora_Master_Brief.md`](Delora_Master_Brief.md) § H (Roadmap + Measurement)
2. Check [`DeloraWebsite-Redesign/HANDOFF.md`](DeloraWebsite-Redesign/HANDOFF.md) § 5 for known open items
3. Current measurements: TBD (no analytics set up yet for the isolated redesign)

### Permissioning: `.claude/settings.json`
The isolated redesign repo has project-scoped permissions (`"defaultMode": "dontAsk"`) to skip Claude Code permission prompts. If working with an AI agent, review that file.

---

## Contacts & Questions

**For strategic/copy questions:** See the master brief + original briefs in `briefs/`  
**For code questions:** Check `DeloraWebsite-Redesign/HANDOFF.md` § 6–7 (known issues, design notes)  
**For production site questions:** Check `DeloraWebsite/NEXT_STEPS.md` (brief) + architecture/ folder  

---

## Version History

| Date | Change | Ref |
|---|---|---|
| 2026-06-14 | Consolidated 4 loose briefs into `Delora_Master_Brief.md`; rebuilt advertorial in brand DNA; created this file | PROJECT_HANDOFF.md (new) |
| 2026-06-14 | Rebuilt `/ipl-vs-salon` advertorial (NOOD-style spec → Delora brand re-skin) | Advertorial.tsx / .css |
| 2026-06-14 | Executed ADDENDUM_1 briefs: risk-transfer guarantee, objection chat, shop page, nav links | See HANDOFF.md § 0 |
| 2026-06-13 | Executed main brief: above-the-fold PDP restructure | Original brief in briefs/ |

---

**End of PROJECT_HANDOFF.md**

For detailed implementation notes, strategic context, and specific component decisions, refer to the documents linked above. This file is the map; the other docs are the territory.
