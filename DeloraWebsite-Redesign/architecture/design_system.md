# SOP: Design System & Aesthetics

## Goal
To implement a premium, luminous beauty-tech aesthetic for Delora that builds trust and desire.

## Brand Assets
- **Primary Color**: `#5B3A7A` (Amethyst)
- **Secondary Color**: `#DCC9F0` (Lavender)
- **Accent Color**: `#D8C3A5` (Skin/Beige)
- **Neutral/Text**: `#1F1B24` (Dark Charcoal)
- **Fonts**: 
    - `Cormorant Garamond` (Serif) - Use for headings, quotes, and elegant accents.
    - `Nunito Sans` (Sans-serif) - Use for body text, UI elements, and technical specs.

## CSS Variables
Define these in `src/app/globals.css`:
```css
:root {
  --color-amethyst: #5B3A7A;
  --color-lavender: #DCC9F0;
  --color-beige: #D8C3A5;
  --color-charcoal: #1F1B24;
  --color-white: #FFFFFF;
  --color-soft-white: #F8F9FA;
  
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'Nunito Sans', sans-serif;
  
  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.05);
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-blur: blur(10px);
}
```

## Aesthetic Principles
1. **Luminous Radiance**: Use soft gradients and subtle glows to evoke "glowing skin."
2. **Airy Whitespace**: Do not crowd elements. Give the content room to breathe to convey luxury.
3. **Soft Glassmorphism**: Use for overlays and navbars to maintain a high-tech yet soft feel.
4. **Smooth Transitions**: Implement fade-ins and smooth scrolls for a premium feel.

## Implementation Steps
1. Import Google Fonts in `src/app/layout.tsx`.
2. Configure `globals.css` with variables and base styles.
3. Create reusable components (Button, Section, Card) that adhere to these variables.
