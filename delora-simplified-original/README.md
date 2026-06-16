# Delora — Simplified (Original design, Bulgarian-only static site)

Lightweight, frontend-only version of the **original** Delora landing page
(`DeloraWebsite/`). Bulgarian only. No backend, APIs, database, auth, cart/Shopify,
or language switching. Builds to a fully static site (HTML + CSS + minimal JS + images).

This is the counterpart to `DeloraWebsite-Simplified/` (which simplifies the newer
*redesign*). The two differ in the main-page design:

| | delora-simplified-original | DeloraWebsite-Simplified |
|---|---|---|
| Source | original `DeloraWebsite/` | `DeloraWebsite-Redesign/` |
| ProductHero | simpler (price, benefits, 1 CTA) | richer (cost table, financing, guarantee) |
| Price | €229 (Спести 43%) | €189 (Спести 53%) |
| Images | original `.png` | optimized `.webp` |
| Chat widget | none | ObjectionChat widget |

Both share the **same navbar** (logo · Магазин · cart icon) and the **same /shop page**.

## Build → static output

```bash
npm install
npm run build      # output: ./out  (deployable static site)
npm run dev        # local preview at http://localhost:3000
```

`next.config.ts` uses `output: "export"` + `trailingSlash: true`, so `npm run build`
emits a self-contained static site into `out/` where both `/` and `/shop/` resolve on
any static host. Fonts (Cormorant Garamond + Nunito Sans) are self-hosted into the build.

## Structure

```
src/
  app/
    layout.tsx        # <html lang="bg">, fonts, metadata (no providers)
    page.tsx          # main page — composes the sections below
    shop/page.tsx     # /shop route (Navbar + ShopGrid + Footer)
    globals.css       # design tokens + base styles (original, unchanged)
  components/          # one component + its .css per section
    Navbar            # logo + "Магазин" (→ /shop) + cart icon (inert)
    ProductHero       # gallery, price, benefits, accordions  (#product-hero)
    TrustBadges  BenefitGrid  BeforeAfterSection  ComparisonTable
    HowToUse     SkinMatchQuiz (#consultation)   FAQAccordion   ReviewCards
    FinalCTA     Footer        StickyCartBar
    ShopGrid          # device + 3 coming-soon products ("Извести ме" = UI only)
    Button            # shared button/link
public/               # only the images referenced on the pages (original .png)
  logo.png
  Photoshoots/{Other,Arm,Leg,Face,Before & After}/
```

## Notes

- Buy CTAs ("Добави в количката" / "Купи") are inert placeholders (`href="#"`),
  ready to wire to a real checkout later. The cart icon is also inert (no backend cart).
- The shop "Извести ме" forms and the footer newsletter are UI-only (no backend).
- Images are the original `.png` files (heavier). They can be converted to `.webp`
  for a lighter build if desired (as was done for `DeloraWebsite-Simplified`).
