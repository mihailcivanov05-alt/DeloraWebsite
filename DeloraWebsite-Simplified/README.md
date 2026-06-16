# Delora — Simplified (Bulgarian-only static site)

Lightweight, frontend-only version of the Delora landing page. Bulgarian only.
No backend, no APIs, no database, no auth, no cart/Shopify, no language switching.
Builds to a fully static site (HTML + CSS + minimal JS + images).

## Build → static output

```bash
npm install
npm run build      # output: ./out  (deployable static site)
npm run dev        # local preview at http://localhost:3000
```

`next.config.ts` uses `output: "export"`, so `npm run build` emits a self-contained
static site into `out/` (this is what you deploy / hand off). Fonts (Cormorant
Garamond + Nunito Sans) are self-hosted into the build — no external font calls.

## Structure

```
src/
  app/
    layout.tsx        # <html lang="bg">, fonts, metadata (no providers)
    page.tsx          # the single page — composes the 14 sections below
    globals.css       # design tokens + base styles (unchanged)
  components/          # one component + its .css per section
    Navbar            # logo + single "Магазин" CTA → #product-hero
    ProductHero       # gallery, price, table, guarantee, accordions  (#product-hero)
    TrustBadges
    BenefitGrid
    BeforeAfterSection
    ComparisonTable   # tabs: bръснене / кола маска / лазер
    HowToUse
    SkinMatchQuiz     # interactive quiz                              (#consultation)
    FAQAccordion      #                                               (#faq)
    ReviewCards       #                                               (#reviews)
    FinalCTA
    Footer
    StickyCartBar     # fixed bottom bar (appears on scroll)
    ObjectionChat     # front-end chat widget (rules-based, mailto only)
    Button            # shared button/link
public/               # only the images referenced on the page (~0.9 MB)
  logo.png
  Photoshoots/{Other,Arm,Leg,Face}/
  delora-photos-clean/
```

## Interactivity kept (visible behaviour only)

- Navbar scroll-shadow, smooth-scroll to sections
- ProductHero image gallery + accordions
- Comparison tabs, before/after carousel, FAQ accordion
- Skin-match quiz, objection chat widget, sticky buy bar (appears on scroll)

## Notes

- Buy CTAs ("Купи" / "Добави в количката") are inert placeholders (`href="#"`),
  ready to be wired to a real checkout later. The cart icon was removed with the
  backend cart.
- Support links use `mailto:support@delora.com` (no backend).
