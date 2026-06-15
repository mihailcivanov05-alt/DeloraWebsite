# DELORA DESIGN SYSTEM
## Canonical Brand + Visual Language Reference

**Version:** 1.0 (revised 2026-06-14)  
**Status:** CANONICAL — This replaces all previous design docs (MASTER.md is deprecated)  
**Source of truth:** The production Delora website (`DeloraWebsite/`)

---

## QUICK START

**Brand essence:** Premium, calm, feminine, sophisticated. Amethyst + lavender palette, elegant serif headings, clean rounded UI. Not loud. Not clinical. Elevated but approachable.

**Copy:** Cormorant Garamond (headings, editorial voice). Nunito Sans (body, UI, accessibility).

**Color:** Amethyst `#5B3A7A` primary, lavender `#DCC9F0` secondary, charcoal `#1F1B24` text, off-white `#FFFBF7` background.

**Space:** Generous. Breathing room. Rounded corners (`12px–16px`). Soft shadows, not harsh.

---

## COLOR PALETTE

### Primary Colors

#### Amethyst Purple
```
Color: #5B3A7A
Usage: 
  - Primary brand color
  - CTA buttons (e.g., "Добави в количката")
  - Active states, focus rings
  - Heading accents
  - Link colors (on white/light backgrounds)
RGB: rgb(91, 58, 122)
HSL: hsl(274, 35%, 29%)
Contrast ratio (on white): 7.2:1 ✓ WCAG AAA
```

#### Lavender
```
Color: #DCC9F0
Usage:
  - Secondary accent color
  - Section backgrounds (soft tint)
  - Card/panel backgrounds
  - Image overlay tints (the pastel purple wash over before/after photos)
  - Light button states, disabled states
  - Accent borders, dividers
RGB: rgb(220, 201, 240)
HSL: hsl(274, 61%, 86%)
Note: Always use white or dark charcoal text on lavender for contrast.
```

#### Beige/Warm Neutral
```
Color: #D8C3A5
Usage:
  - Quiz section backgrounds
  - Subtle warm highlights (secondary section breaks)
  - Accent borders (secondary importance)
  - Not primary — use sparingly
RGB: rgb(216, 195, 165)
HSL: hsl(32, 45%, 75%)
```

#### Charcoal (Dark)
```
Color: #1F1B24
Usage:
  - Body text (all paragraph copy)
  - Footer background
  - Dark section backgrounds
  - Strong contrast text on light backgrounds
RGB: rgb(31, 27, 36)
HSL: hsl(270, 14%, 12%)
Contrast ratio (on white): 16:1 ✓ WCAG AAA
Contrast ratio (on lavender): 10.2:1 ✓ WCAG AAA
```

#### Off-White / Background
```
Color: #FFFBF7
Usage:
  - Default page background
  - Card/panel backgrounds (when not using lavender)
  - Light section breaks
RGB: rgb(255, 251, 247)
HSL: hsl(24, 100%, 99%)
Note: Not pure white (#FFFFFF) — warmer, softer tone
```

### Do NOT Use (deprecated from stale MASTER.md)
- ❌ Pink (old brand palette)
- ❌ Playfair Display (old typography)
- ❌ Bright primary colors (not Delora's voice)

---

## TYPOGRAPHY

### Headings: Cormorant Garamond

**Font:** Cormorant Garamond (serif)  
**Weight:** 600–700 (semibold to bold)  
**Source:** Google Fonts (`next/font` in Next.js)

```javascript
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  weight: ['600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});
```

**Sizing & Usage:**

| Level | Size (desktop) | Size (mobile) | Weight | Usage | Line-height |
|---|---|---|---|---|---|
| **H1** | 48–56px | 32–40px | 700 | Page headlines, hero sections | 1.2 |
| **H2** | 36–44px | 28–32px | 700 | Section headings ("Дълготрайни резултати в 3 лесни стъпки") | 1.3 |
| **H3** | 24–32px | 20–24px | 600 | Subsection headings, card titles | 1.4 |
| **H4** | 18–20px | 16–18px | 600 | Small headings, labels | 1.4 |

**Character:** Elegant, editorial, premium. Use for headlines only — never body copy.

---

### Body: Nunito Sans

**Font:** Nunito Sans (sans-serif)  
**Weight:** 400 (regular), 600 (semibold)  
**Source:** Google Fonts (`next/font` in Next.js)

```javascript
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  weight: ['400', '600'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});
```

**Sizing & Usage:**

| Level | Size (desktop) | Size (mobile) | Weight | Usage | Line-height |
|---|---|---|---|---|---|
| **Body (default)** | 16px | 16px | 400 | Paragraph copy, FAQ, testimonials | 1.6 |
| **Body (large)** | 18px | 16px | 400 | Intro paragraphs, prominent copy | 1.6 |
| **Caption** | 14px | 14px | 400 | Image captions, footnotes, fine print | 1.5 |
| **UI (button/label)** | 16px | 14px | 600 | Button text, form labels, navigation | 1.4 |
| **Small UI** | 12–13px | 12px | 600 | Badges, tags, small labels | 1.4 |

**Character:** Clean, readable, friendly. Rounded letterforms soften the premium feel. Use 600-weight for emphasis (not italics).

---

## SPACING & LAYOUT

### Spacing Scale (use these consistently)
```
xs:  4px   (internal padding, tight spacing)
sm:  8px   (gaps, spacing inside components)
md:  16px  (section padding, card padding)
lg:  24px  (major spacing, between sections)
xl:  32px  (large section breaks)
2xl: 48px  (hero spacing, large gaps)
3xl: 64px  (page-level section breaks, desktop only)
4xl: 96px  (generous gaps between major sections)
```

### Grid & Containers
- **Max-width (content):** 1200px (desktop), 100% (tablet/mobile)
- **Column gutters:** 24px (desktop), 16px (mobile)
- **Sidebar width (if applicable):** 340px
- **Page padding:** 24px (desktop), 16px (mobile)

### Section Spacing
- **Between major sections:** 64–96px vertical (desktop), 40–56px (mobile)
- **Between minor sections:** 32–48px vertical
- **Inside sections (padding):** 32–48px (desktop), 24–32px (mobile)

---

## COMPONENTS & DETAILS

### Rounded Corners (Border Radius)
```
sm:  4px   (minimal rounding, form inputs)
md:  8px   (standard, most cards)
lg:  12px  (generous, large cards, image cards)
xl:  16px  (very generous, hero cards, feature cards)
pill: 9999px (full rounded, button shapes, toggles)
```

**Standard:** Use `12px` for cards, buttons, images by default.

### Shadows
```
light:   0 2px 8px rgba(91, 58, 122, 0.08)  /* subtle, barely-there */
default: 0 4px 16px rgba(91, 58, 122, 0.12) /* standard card shadow */
hover:   0 8px 24px rgba(91, 58, 122, 0.16) /* on hover */
```

**Use:** Subtle. Not harsh. Just enough to lift cards off the background.

### Button Styling

#### Primary Button
```
Background: #5B3A7A (amethyst)
Text: white, 16px Nunito Sans 600
Padding: 14px 32px (height ~48px)
Border-radius: 12px
Hover: #4a3055 (15% darker)
Active: #3d2645 (25% darker)
Focus ring: 2px solid #5B3A7A, offset 2px
State (disabled): opacity 0.5
Transition: 200ms ease
```

#### Secondary Button
```
Background: #DCC9F0 (lavender)
Text: #5B3A7A (amethyst), 16px Nunito Sans 600
Padding: 14px 32px
Border-radius: 12px
Border: 1px solid #5B3A7A
Hover: background #C9B0E0 (darker lavender)
```

#### Text Link
```
Color: #5B3A7A (amethyst)
Text-decoration: none
Border-bottom: 1px solid transparent
Hover: border-bottom 1px solid #5B3A7A
```

### Form Inputs
```
Border: 1px solid #DCC9F0 (lavender)
Border-radius: 8px
Padding: 10px 12px
Font: 16px Nunito Sans, #1F1B24 (charcoal text)
Focus: border-color #5B3A7A, box-shadow 0 0 0 3px rgba(91, 58, 122, 0.1)
Placeholder: #999 (light gray)
Background: #FFFBF7 (off-white)
```

### Cards
```
Background: #FFFBF7 or #DCC9F0 (off-white or lavender)
Padding: 24px (md)
Border-radius: 12px
Box-shadow: 0 4px 16px rgba(91, 58, 122, 0.12)
Border: none (or 1px solid #E9E0F0 for subtle definition)
```

---

## IMAGERY & VISUAL TREATMENTS

### Photo Style
- **Aesthetic:** Lifestyle, relatable, diverse skin tones (Bulgaria market)
- **Lighting:** Bright, natural, well-lit (not moody)
- **Backgrounds:** Simple (white, light purple, pastel colors)
- **Before/after:** Same angle, lighting, framing for credibility

### Image Card Treatment
- **Aspect ratio:** 4:5 or 3:4 (portrait-ish, mobile-friendly)
- **Border-radius:** 16px (generous rounding)
- **Overlay tint (optional):** Lavender (`#DCC9F0` at 20–30% opacity) wash over the photo for cohesion with brand
- **Shadow:** 0 4px 16px rgba(91, 58, 122, 0.12) (subtle)

### Icons
- **Style:** Line-based, minimal, friendly (not filled/heavy)
- **Color:** #5B3A7A (amethyst) by default
- **Size:** 24–32px in UI, 48–64px in hero areas
- **Stroke weight:** 2px

---

## RESPONSIVE DESIGN

### Breakpoints
```
mobile:  375px–767px    (default: single-column, stacked)
tablet:  768px–1023px   (2-column where applicable)
desktop: 1024px+        (full layout, sidebars, 3+ columns)
```

### Typography Scaling
- Headings scale down ~25–30% on mobile
- Body text stays 16px on mobile for readability
- Line-height increases slightly on mobile (1.7–1.8 instead of 1.6) for scannability

### Spacing Scaling
- Vertical spacing: ~60% of desktop on mobile
- Horizontal padding: 16px (mobile), 24–32px (desktop)
- Section breaks: 40–56px (mobile), 64–96px (desktop)

---

## BILINGUAL CONSIDERATIONS (EN + BG)

- Font stack must support **Cyrillic** characters (Google Fonts loads both Latin + Cyrillic)
- Cormorant Garamond: excellent for both
- Nunito Sans: excellent for both
- **Testing:** Verify letter-spacing and line-breaks in Bulgarian (longer words than English)
- **Text length:** Bulgarian copy is typically 10–15% longer than English — plan layouts accordingly

---

## ACCESSIBILITY

### Color Contrast (minimum WCAG AAA)
- Amethyst `#5B3A7A` on white: **7.2:1** ✓
- Charcoal `#1F1B24` on white: **16:1** ✓
- Charcoal `#1F1B24` on lavender: **10.2:1** ✓
- ❌ Avoid: Lavender text on white (only 2.8:1, fails WCAG)

### Focus States
- All interactive elements (buttons, links, form inputs) must have visible focus rings
- Use 2–3px solid amethyst ring with 2px offset
- **Never remove focus outlines** (accessibility violation)

### Text
- Minimum 16px for body text on mobile
- Line-height ≥ 1.5 for readability
- Max line-length ~80 characters for body copy (readability)

### Images
- All images must have descriptive `alt` text (especially before/after pairs)
- Images of people: include visible text labels if describing results (e.g., "Week 8")

---

## COMPONENT LIBRARY (if applicable)

If building a reusable component library, create these as atomic/composable units:

**Atoms:**
- Button (primary, secondary, text)
- Input field
- Label
- Icon
- Badge

**Molecules:**
- Card (image + copy)
- Form group (label + input)
- Hero section
- CTA section
- Comparison row

**Organisms:**
- Product hero
- Testimonial carousel
- FAQ accordion
- Product grid
- Footer

All components should use the spacing scale, typography scale, and color values defined above.

---

## IMPLEMENTATION CHECKLIST

- [x] Replace stale `MASTER.md` with this document
- [ ] Update `/design-system/index.html` or equivalent to reflect these values
- [ ] Audit existing components for off-brand colors (pink, Playfair) and update
- [ ] Set `globals.css` to define CSS variables for colors, fonts, spacing:
  ```css
  :root {
    --color-primary: #5B3A7A;
    --color-secondary: #DCC9F0;
    --color-dark: #1F1B24;
    --color-bg: #FFFBF7;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    /* etc. */
  }
  ```
- [ ] Document in Figma / design tool with these exact values
- [ ] Brief designers/developers: "This is the canonical system. Use these values."

---

## CHANGELOG

| Date | Change | Reason |
|---|---|---|
| 2026-06-14 | Created v1.0 from production site audit | Replace deprecated MASTER.md (pink/Playfair) with actual amethyst/Cormorant system |

---

**End of Design System**

This is the canonical reference. For any design or code decisions, refer here first. If something is unclear or missing, update this doc rather than allowing stale docs to accumulate.
