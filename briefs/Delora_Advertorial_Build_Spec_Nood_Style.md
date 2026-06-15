# DELORA ADVERTORIAL — BUILD SPEC (NOOD-STYLE)
## Copy + Empty Visual Placeholder Blocks

**For:** Coding agent / developer building the page  
**URL:** deloraskin.com/pages/ipl-vs-salon  
**Style reference:** Nood's "Laser Performance Lab" — combative, authentic, "us vs. them," TikTok-energy  
**Important:** Visual assets do NOT exist yet. Build EMPTY PLACEHOLDER BLOCKS (styled containers with labels) where images/videos/GIFs will be dropped in later. Do not source or generate assets.

---

## HOW TO READ THIS SPEC

Each section has:
1. **COPY** — the actual Bulgarian text to place
2. **[VISUAL BLOCK]** — an empty, styled placeholder container with a label describing what will eventually go there

Build the placeholder blocks as visible, styled `<div>` containers (dashed border, light gray background, centered label text describing the intended asset + intended dimensions). This way the page is fully laid out and the client can drop assets into each block later without restructuring.

**Placeholder block standard styling:**
```css
.visual-placeholder {
  border: 2px dashed #F9A8D4;       /* secondary light pink dashed */
  background: #FDF2F8;               /* soft pink background */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #8B5CF6;                    /* lavender/purple label text */
  font-size: 14px;
  font-weight: 500;
  padding: 24px;
  min-height: [varies per block];
}
.visual-placeholder .label { max-width: 80%; }
```

Each placeholder should display its label text inside, e.g.:  
`[ HERO VIDEO — before/after loop, 4 sec, full-width, ~500px tall ]`

---

## TONE & STYLE NOTES (NOOD-STYLE)

- **Combative framing:** Position salon/waxing as the "enemy" extracting money from women month after month. Delora is the escape.
- **Direct, casual voice:** Short sentences. Punchy. Talks TO the reader, not at her.
- **"Us vs. them" visuals:** Comparisons are confrontational — expensive/painful/inconvenient on one side, Delora on the other.
- **Authentic over polished:** Placeholder labels should call for raw/real/UGC-style content, not studio glamour.
- **Bold claims, backed by proof:** Make the math undeniable, then prove it with real customers.

---

## SECTION 1: HERO + PROBLEM HOOK

### COPY
```
HEADLINE:
"Спри да плащаш на салона всеки месец."

SUBHEADLINE:
"Бръснене, восък, лазер в салон — всичко това е цикъл, който 
никога не свършва. Има друг начин."
```

### [VISUAL BLOCK 1 — HERO]
```
[ HERO VIDEO/GIF — full-width, ~500px tall (desktop) / ~360px (mobile)
  Intended content: raw before/after loop — hairy skin → device pulse → 
  smooth skin. UGC/authentic style, NOT studio. 4-sec loop, autoplay, muted. ]
```

### COPY (overlay text — build as a text layer that will sit over the video block)
```
OVERLAY:
"95% по-малко окосмяване. €189. Веднъж."
```

---

## SECTION 2: THE PROBLEM (Name the enemy)

### COPY
```
HEADLINE:
"Салонът не иска ти да спреш да идваш."

BODY:
"Помисли логично.

Салонът печели, когато се връщаш. Восъкът работи 2 седмици — 
после пак. Бръсненето е завинаги — буквално всеки 2–3 дни.

Те не продават резултат. Продават зависимост.

Месец 1: €120. Месец 2: €120. Месец 3: €120.
За 10 години? Над €14,000.

За какво? За кожа, която е гладка само половината месец."
```

### [VISUAL BLOCK 2 — SALON CYCLE]
```
[ MOTION GRAPHIC / INFOGRAPHIC — ~500x400px (desktop), full-width (mobile)
  Intended content: the endless salon money-cycle. Repeating loop of 
  Month → €120 → Month → €120, building to €14,000+ over 10 years. 
  Confrontational tone — make the "trap" feel visceral. ]
```

---

## SECTION 3: THE SWITCH (Introduce Delora as the escape)

### COPY
```
HEADLINE:
"Delora прекъсва цикъла."

BODY:
"IPL технологията не реже косъма на повърхността като бръснача. 
Не го изскубва като восъка.

Тя достига до корена и спира растежа.

Светлина → топлина → коренът отслабва → косъмът пада сам.
Повтаряш няколко седмици. После спираш. Защото вече няма какво 
да махаш.

Това правят салоните с лазер за €2,000. Delora го прави у дома. 
За €189."
```

### [VISUAL BLOCK 3 — HOW IT WORKS]
```
[ ANIMATED DIAGRAM — ~600x500px (desktop), full-width (mobile)
  Intended content: simple cross-section of skin showing IPL hitting the 
  follicle root. Light → heat → root destroyed → hair falls. Educational 
  but accessible, not overly medical. ]
```

### [VISUAL BLOCK 4 — RESULTS TIMELINE]
```
[ TIMELINE GRAPHIC — full-width horizontal (desktop) / vertical (mobile)
  Intended content: week-by-week results.
  Week 1–2 (nothing visible) → Week 3–4 (visible reduction) → 
  Week 5–8 (50–95%) → Week 12 (maintenance only). ]
```

---

## SECTION 4: US VS. THEM (The confrontational comparison)

### COPY
```
HEADLINE:
"Delora срещу всичко останало."

INTRO LINE:
"Без маркетингови трикове. Само числата."
```

### [VISUAL BLOCK 5 — US VS THEM COMPARISON]
```
[ SPLIT-SCREEN / SIDE-BY-SIDE COMPARISON — full-width, ~500px tall
  Intended content: Nood-style confrontational split.
  LEFT (the "enemy"): salon laser / waxing / razor — expensive, painful, 
  repeating, inconvenient. Visually heavier, red/orange tones.
  RIGHT (Delora): one device, one price, done at home. Clean, pink/lavender, 
  lighter. The contrast should feel obvious and one-sided in Delora's favor. ]
```

### COPY (comparison table — build as actual HTML table below the visual block)
```
| | Салон лазер | Восък | Бръснене | Delora |
|---|---|---|---|---|
| Цена | €80–150/път | €50–100/път | €5–10/бритва | €189 веднъж |
| Колко често | Всеки месец | На 4–6 седмици | На 2–3 дни | 1–2x/седм. (12 седм.), после месечно |
| Резултат трае | 4–6 седмици | 1–2 седмици | 1–3 дни | Месеци (само поддръжка) |
| За 10 години | €10,000–18,000 | €8,000–12,000 | €2,500–4,000 | €189 + ~€100 = €289 |
```

### [VISUAL BLOCK 6 — THE MATH CALLOUT]
```
[ BIG NUMBER CALLOUT — full-width banner, ~180px tall
  Intended content: "€14,000+ за салон. €189 за Delora." 
  Large, bold, impossible to miss. Pink/lavender gradient background, 
  white text. ]
```

---

## SECTION 5: OBJECTIONS (Honest answers, builds trust)

### COPY
```
HEADLINE:
"Честно. Ето какво трябва да знаеш."

INTRO LINE:
"Няма да ти продаваме лъжи. Ето кога Delora работи — и кога не."
```

### [VISUAL BLOCK 7 — SKIN/HAIR SUITABILITY CHART]
```
[ SUITABILITY CHART — ~600x400px (desktop), full-width (mobile)
  Intended content: grid of skin tones x hair colors with works / works-
  slower / doesn't-work indicators. Honesty = trust (Nood's exclusion 
  tactic — openly say who it WON'T work for). ]
```

### COPY (FAQ — build as accordion, each item collapsible)
```
Q1: "Ще проработи ли за моята кожа и коса?"
A1: "Честно? Работи най-добре на светла кожа + тъмна коса. 
На по-тъмна кожа работи, но отнема повече сесии. 
На руса/бяла коса работи слабо — няма достатъчно контраст. 
Искаш да си сигурна? [Направи теста — 2 мин]"

Q2: "Боли ли?"
A2: "Не. Сапфирено охлаждане до 15°C при всеки импулс. 
Усещаш топло щракване, не болка."

Q3: "Безопасно ли е?"
A3: "Да. CE маркирано. Автоматично охлаждане предпазва кожата. 
Същата технология като в салоните — само у дома ти."

Q4: "Кога ще видя резултат?"
A4: "Видимо намаляване между 4-та и 8-та седмица. 
Повечето усещат разлика още след 2-3 употреба."

Q5: "А ако не проработи за мен?"
A5: "90 дни гаранция. Не виждаш резултат — връщаш парите. 
Без въпроси."
```

### [VISUAL BLOCK 8 — SUITABILITY QUIZ CTA]
```
[ QUIZ CTA BLOCK — ~400x120px, prominent button-style
  Intended content: "Виж дали Delora е за теб — 2 мин тест"
  Links to the skin-tone quiz on the PDP. ]
```

---

## SECTION 6: REAL PEOPLE (Social proof, UGC-style)

### COPY
```
HEADLINE:
"Жени, които спряха да ходят на салон."

RATING LINE:
"4.9/5 ★ — 17 реални отзива"
```

### [VISUAL BLOCK 9 — BEFORE/AFTER CAROUSEL]
```
[ CAROUSEL — full-width, ~500px tall, swipeable, 4–5 slides
  Intended content: real customer before/after pairs (UGC/phone-quality, 
  NOT studio). Each slide: ПРЕДИ | СЛЕД label + short quote + 5 stars. 
  Authentic over polished. Leave 5 empty slide containers. ]
```

### [VISUAL BLOCK 10 — TESTIMONIAL VIDEO (optional)]
```
[ VIDEO EMBED BLOCK — ~360x640px (vertical, TikTok-style)
  Intended content: 15–30 sec raw customer testimonial. Talking to camera, 
  showing results. Phone-quality is the point. Optional — leave one empty 
  container. ]
```

---

## SECTION 7: THE OFFER + CTA

### COPY
```
HEADLINE:
"Веднъж. €189. Край на цикъла."

BODY:
"Салонът ти казва 'до скоро.' Delora казва 'повече няма нужда.'

90 дни гаранция. Не работи — връщаш го. 
Но 17 от 18 жени не го връщат."
```

### [VISUAL BLOCK 11 — PRODUCT HERO]
```
[ PRODUCT IMAGE BLOCK — ~300x400px
  Intended content: Delora device, clean shot, cooling tip highlighted. 
  Transparent or light background. ]
```

### COPY (CTAs — build as actual buttons)
```
PRIMARY BUTTON:
"Виж устройството →"  (links to /products/delora)

SECONDARY LINK:
"Не съм сигурна — пусни теста (2 мин)"  (links to quiz)
```

### [VISUAL BLOCK 12 — TRUST BADGE STRIP]
```
[ TRUST BADGES ROW — full-width, ~100px tall, 4 inline badges
  Intended content (icons + text):
  ✓ Плащане при доставка   ✓ Безплатна доставка
  ✓ 90 дни гаранция        ✓ CE маркирано
  Leave icon slots empty, keep text labels. ]
```

---

## PAGE-LEVEL BUILD NOTES

### Layout
- Single-column, centered, max-width ~720px for text blocks; visual blocks can go full-width where noted.
- Generous vertical spacing between sections (64–96px desktop, 40–56px mobile).
- Alternating rhythm: copy block → visual block → copy block, so the page never feels like a wall of text.

### Color palette
```
Primary pink:     #EC4899   (Delora primary)
Secondary pink:   #F9A8D4   (Delora secondary)
Accent/CTA:       #8B5CF6   (Delora lavender/purple accent)
Background pink:  #FDF2F8   (Delora soft background)
Text berry/dark:  #831843   (Delora brand dark text)
Accent green:     #22C55E   (positive / Delora side)
Warning tones:    #EF4444 / #F97316  (the "enemy" side in comparisons only)
```

### Typography
```
Headlines: bold, 32–44px desktop / 24–30px mobile
Subheads:  semibold, 18–22px
Body:      regular, 16–18px, line-height 1.6
```

### Responsive
- All visual placeholder blocks must be 100% width on mobile and scale their min-height down ~30%.
- Comparison table: stack to scrollable / single-column on mobile.
- Carousel: full-width swipe on mobile.

### CTAs / links
- Primary CTA appears at least twice: once mid-page (after Section 4 math callout) and once in Section 7. Add a second primary CTA block after VISUAL BLOCK 6.
- All "quiz" links point to the suitability quiz on the PDP.
- All "Виж устройството" links point to `/products/delora`.

### Placeholder behavior
- Every `[VISUAL BLOCK]` renders as the styled dashed container described at the top, with its label text visible inside.
- Each block should have a clear `id` (e.g. `id="visual-hero"`, `id="visual-cycle"`) so assets can be swapped in later without hunting through markup.

---

## BUILD CHECKLIST FOR THE AGENT

- [ ] All 7 sections laid out in order, single-column, responsive
- [ ] All 12 visual placeholder blocks built as styled dashed containers with labels + IDs
- [ ] All Bulgarian copy placed exactly as written
- [ ] Comparison table built as real HTML (not a placeholder)
- [ ] FAQ built as collapsible accordion
- [ ] Primary CTA appears twice (mid-page + Section 7), links to /products/delora
- [ ] Secondary/quiz links wired to the quiz
- [ ] Mobile responsive verified (single column, blocks scale)
- [ ] Page set up at URL /pages/ipl-vs-salon
- [ ] No real image/video files required — placeholders only

---

**END OF SPEC**

The page should be fully built and laid out with copy in place and clearly-labeled empty visual blocks. The client drops in images/GIFs/videos later by targeting each block's ID — no restructuring needed.
