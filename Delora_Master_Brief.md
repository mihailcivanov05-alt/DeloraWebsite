# DELORA — MASTER REDESIGN BRIEF (Consolidated)

**Consolidated:** 2026-06-14
**Product:** Delora Elite IPL device (at-home hair removal / photoepilation), Bulgaria market, €189.
**Purpose of this file:** single source of truth. It merges every Delora brief that
previously lived loose in `~/Downloads`, keeping only the **most recent / authoritative**
version of each topic and noting what has actually been **built** in the isolated redesign.

---

## 0. How this document was assembled

| Source file (now archived in `briefs/`) | Date | Role in this merge |
|---|---|---|
| `Delora_Above_Fold_Redesign_Brief.md` | Jun 14 00:02 | Canonical for **Part A** (above-the-fold PDP restructure). |
| `Delora_Above_Fold_Redesign_Brief_ADDENDUM.md` | Jun 14 02:16 | **Superseded** — it is a strict subset of ADDENDUM_1 (identical §1–4). Kept only for history. |
| `Delora_Above_Fold_Redesign_Brief_ADDENDUM_1.md` | Jun 14 03:08 | Canonical for **Parts B–E, G** (risk-transfer, chatbot, onboarding, payments, coming-soon). Its §5 advertorial draft is **superseded** by the Nood spec. |
| `Delora_Advertorial_Build_Spec_Nood_Style.md` | Jun 14 13:10 | **Newest.** Canonical for **Part F** (advertorial landing page). Polished copy + 12 placeholder blocks. |

> The four originals are kept verbatim in `Delora /briefs/`. This file is the one to read/edit going forward.

### 0.1 Build status at a glance (isolated redesign — `DeloraWebsite-Redesign/`)

Legend: ✅ built in code · ⚠️ partial · ❌ not in this repo (external platform / ops).

| Part | Topic | Status | Where |
|---|---|---|---|
| A | Above-the-fold PDP restructure (headline, benefits, cost table, pricing/financing, trust strip, dual CTA) | ✅ | `ProductHero.tsx` (conversion centerpiece) |
| B | Risk-transfer guarantee copy | ✅ | `ProductHero.tsx` (EN+BG, bold emphasis line) |
| C | Objection-intercept chat widget (rules-based, Option A) | ✅ | `ObjectionChat.tsx` (no backend / not the paid AI option) |
| D | 12-week post-purchase onboarding emails/SMS | ❌ | Klaviyo/Omnisend — external |
| E | Bulgaria payment compliance — **frontend COD trust badge** | ✅ | `ProductHero.tsx` |
| E | Bulgaria payment compliance — **backend** (Klarna/COD gateway, logistics) | ❌ | Shopify Payments / logistics — external |
| F | Advertorial `/ipl-vs-salon` (NOOD-style, brand DNA) | ✅ | `Advertorial.tsx` + `.css`, `app/ipl-vs-salon/page.tsx` (robots: noindex) |
| G | Coming-soon products on shop | ✅ | `ShopGrid.tsx` route `/shop` (device + Delora XL / Face / Serum). "Notify me" is UI-only. |
| — | Discoverability (navbar + footer links to `/shop`, `/#consultation`, `/#reviews`, `/#faq`) | ✅ | `Navbar.tsx`, `Footer.tsx`, `FAQAccordion.tsx` (`id="faq"`) |
| C | AI chatbot (Option B — Intercom Fin) | ❌ | subscription + training — external |
| F/G | Shopify platform config + redirect Meta ads to advertorial + wire "Notify me" to a list | ❌ | Shopify/Meta — external |

> **The code is the source of truth** for what is actually live. This brief captures intent + copy.

---

# PART A — ABOVE-THE-FOLD PDP RESTRUCTURE

**Objective:** move from a commodity (price-forward) PDP to a high-consideration (value-forward)
sales page to reduce the ~99% exit-at-price bounce on cold Meta traffic.
**Scope:** above-the-fold only (hero → first CTA).

**Problem being solved:** price (€189) is shown before any proof, cost comparison, or permission to
spend. Visitor sees a number with no context and exits.

### Target order (reordered above-the-fold)
1. Hero image (keep existing)
2. Headline (new)
3. Subheadline (new)
4. Primary benefit, then secondary benefits (reordered)
5. Cost comparison table (new)
6. Pricing & financing (restructured)
7. Risk-reversal / guarantee (new framing → see **Part B** for the final copy)
8. Comprehensive trust strip (expanded)
9. Dual CTA (new)

### A1. Headline
- **Old:** „Delora: Гладка кожа за минути"
- **New:** „Премиум IPL епилация у дома — без цената на големите марки"
- Rationale: value-led; answers the subconscious "why is this expensive?" and gives permission to spend.

### A2. Subheadline (new)
> „За хора, които искат по-високо качество от евтините IPL уреди, но не искат да плащат надценката на Philips или Braun."

Pre-qualifies for mid-premium buyers; sheds the €80–€90 price-shoppers.

### A3. Benefit bullets (reordered — outcome first)
```
ПЪРВИЧНА ПОЛЗА:
✓ До 95% намаляване на окосмяването за 12 седмици
   (При редовна употреба — реални резултати от нашите потребители)

ВТОРИЧНИ ПОЛЗИ (комфорт → лекота → дълготрайност):
✓ Без болка — сапфирено охлаждане до 15°C при всеки импулс
✓ Цяло тяло за 25 минути (лесно и удобно)
✓ 1,000,000 импулса — неограничена употреба за 30+ години
```
Changes: lead with the 95% outcome; "8 седмици" → **"12 седмици"** (more realistic); move
"дерматологично тествано" down into the trust strip.

### A4. Cost comparison table (new)
**Heading:** „ЗАЩО DELORA, А НЕ €89 IPL ИЛИ САЛОНЕН ЛАЗЕР?"

| | Салонен лазер | Евтини IPL уреди (€80–€90) | Delora |
|---|---|---|---|
| Цена | €2,000–€3,000/година | €80–€90 | €189 (еднократно) |
| 10 години | €20,000–€30,000 | €800–€900 | €189 |
| Охлаждане | Да | Обикновено не | Да — сапфирено |
| Гарантирани резултати | Да | Непредсказуеми | Да или възвращане |

**Callout:** „💰 Спестяваш €19,811 – €29,811 за едно десетилетие"
Responsive: 4-col desktop → stack / horizontal-scroll on mobile.

### A5. Pricing & financing (restructured)
**Heading:** „ЦЕНА И НАЧИН НА ПЛАЩАНЕ"
```
€189,00  ~~€399,00~~  (Спести 53%)

Или в месечни вноски:
• 3 × €63/месец (Klarna)
• Всички кредитни карти / PayPal
• Наложен платеж (COD)
```
Rationale: monthly framing dissolves sticker shock (€63/mo < €189). Three options match BG
preferences (≈60% COD, 31% cards, growing Klarna).
**Prereqs / legal:** verify Klarna is actually installed; verify COD gateway; confirm the **€399
anchor is a genuine prior price** (EU Omnibus Directive — must be lowest price in prior 30 days).

### A6. Guarantee → see **Part B** (risk-transfer is the final, authoritative copy).

### A7. Comprehensive trust strip (expanded from 2 → 5)
```
✓ Безплатна експресна доставка
✓ 90-дневна гаранция за връщане
✓ CE маркирано & дерматологично одобрено
✓ 24/7 клиентска поддръжка (България)
✓ Сапфирено охлаждане верифицирано
```
Moves safety/regulatory signals forward (critical for a light-emitting device from an unknown brand).

### A8. Dual CTA
- **Primary:** „🛒 Добави в количката — получи 90-дневна пробна версия"
- **Secondary:** „📋 Не съм сигурна — начни с викторинката (2 мин)" → scrolls to the quiz (`#consultation` in this build).
- Desktop: side-by-side (primary ~60–70%); mobile: stacked, full-width, primary on top.

### A9. Testing & measurement (from the original brief)
- Rollout: prefer **A/B test** (50/50 vs current for 2–4 weeks); fallbacks: full or phased rollout.
- Targets: add-to-cart 2.5–3%+, scroll-to-first-CTA 40%+, time-on-page 45–60s, PDP bounce <70%,
  purchase conversion 0.8–1.2%+.

---

# PART B — RISK-TRANSFER GUARANTEE (HIGH PRIORITY) ✅ built

Replace passive guarantee copy with explicit risk-transfer framing — **the brand owns the outcome**.

**Final copy (BG):**
```
🛡️ ПРОБВАЙ БЕЗ РИСК – 90 ДНИ

Ние поемаме 100% от риска. Ако Delora не доставя 95% намаляване
на окосмяването, което видиш от други потребители, ти НЕ плащаш.

Точка. Пълна възвращане в рамките на 90 дни. Без въпроси.
Без скрити условия.

Залагаме на устройството, не на теб.

(Ще видиш резултати — 17 от 18 потребители съобщават видими
резултати след 4–8 седмици редовна употреба. Ние знаем, че работи.)
```
- **Old framing:** "if you don't get results, you can return it" (customer owns the anxiety).
- **New framing:** "we own the outcome, we're betting on it, you're not" (brand owns the risk).
- Keep 90-day window (matches hair-growth cycle). Implemented in `ProductHero.tsx` (EN + BG, with a
  bold emphasis line "We're betting on the device — not on you.").

---

# PART C — REAL-TIME OBJECTION INTERCEPT (CHAT) ✅ built (Option A)

A lightweight widget that pre-empts the top 3–5 objections **while the visitor is on the page**.
Reference: WHOOP's Fin AI chat (+130% sales attribution).

**Built:** `ObjectionChat.tsx` — rules-based (Option A), bilingual, bottom-right.
Proactive triggers: **20s on page**, **scroll past the buy box**, **exit-intent**.
3 flows (price / suitability / doubts) with quick-reply chips; action buttons scroll to
`#product-hero` / `#consultation` or open a `mailto:`. **No backend; not the paid AI option.**

**Canonical flow copy (BG):**
```
Trigger 1 — lingers on price:  "Защо €189? Изглежда скъпо?"
→ "Вграден като Ulike (€300+), но е €189. Срещу салон (€2,000–€3,000/год):
   10 г. = €20,000–€30,000 · Delora еднократно = €189 · спестяваш €19,811–€29,811.
   Плюс Klarna — 3 × €63/месец."

Trigger 2 — guarantee hover:   "Ще работи ли за мен?"
→ "Зависи от тена и цвета на косата. 17 от 18 с твоя тип кожа виждат резултати.
   Да проверим? → [Начни викторинката] (2 мин)."

Trigger 3 — scrolls past w/o action:  "Съмнения?"
→ "• Ще боли ли? Не — сапфир до 15°C.  • Кога? 4–8 седмици.
   • Ако не работи? 90-дневна гаранция."
```

**Option B (NOT built — external):** AI chat (Intercom Fin €99/mo, Drift, Gorgias) trained on FAQ
+ specs + BG payment methods; answers freeform BG questions; escalates to human on request.

---

# PART D — 12-WEEK POST-PURCHASE ONBOARDING (HIGH PRIORITY) ❌ external (Klaviyo)

Automated email/SMS sequence so customers (1) use the device correctly, (2) stay through the
"nothing-visible" weeks, (3) build the habit that delivers 95%. IPL results appear weeks 4–8 — a
week-2 "it's not working" refund is the enemy. **Not buildable from this repo** (Klaviyo/Omnisend).

**Sequence (subjects + goal):**
- **Wk 0 (order):** "Your Delora has shipped" — set the 12-week expectation, link "what to expect".
- **Wk 1 / day 3–4 (arrival):** unboxing video, 5-item safety checklist, first-use day, common mistakes. PDF safety guide.
- **Wk 1 / day 7 (first session):** explain the shedding phase; timeline (wk1–2 same → wk3–4 shed → wk5–8 visible); take a "before" photo.
- **Wk 2:** usage reminder (2–3×/week), before/after social proof, referral teaser.
- **Wk 3:** normalize shedding, post-IPL care tips (moisturize, sunscreen, no hot water).
- **Wk 4:** "results should show" — comparison tool, 5–6 customer wk4→wk8 progressions.
- **Wk 8:** milestone (50%+), #MyDeloraStory UGC ask, referral incentive (€20/€20), serum teaser.
- **Wk 12:** congrats + maintenance plan (1 session / 4–8 weeks), launch €20 post-IPL serum, referral, "built for 30+ years."

**Tools/effort:** Klaviyo or Omnisend; order-date triggers; optional SMS at wk4 + wk8 (€50–100/mo).
Assets: 12 templates, 3–4 testimonial videos, 5–8 before/after images, 2 PDFs (~10 hrs one-time).
**Expected:** −40–60% refunds, +25–35% repeat sessions, +15–20% referrals, +20–30% LTV.

---

# PART E — BULGARIA PAYMENT COMPLIANCE (HIGH PRIORITY) ⚠️ frontend built / backend external

**BG payment mix:** ~55–60% Cash-on-Delivery (COD), 31% cards, 9–14% Klarna/Apple Pay/PayPal.

**Frontend (✅ built in `ProductHero.tsx`):** COD trust badge near checkout —
„Плащане при доставка — плащаш само когато пакетът пристигне. Без риск." COD also listed among the
financing options.

**Trust strip (all four payment signals visible):**
```
✓ Плащане при доставка (Cash-on-Delivery)
✓ Всички кредитни карти / PayPal
✓ Klarna — 3 × €63/месец
✓ Безплатна експресна доставка
```

**Backend verification (❌ external — Shopify/logistics):**
- Klarna actually active (don't assume — test a checkout; install Klarna app if missing; 24–48h to activate).
- COD supported by the logistics partner (DPD/Speedy/etc.); confirm driver-cash + COD fee. (Dropping COD costs ~30–40% conversion.)
- Shopify: Settings → Payments → enable Cash on Delivery; verify Klarna; test mobile checkout (60% of BG traffic).

---

# PART F — ADVERTORIAL LANDING PAGE `/ipl-vs-salon` (NOOD-STYLE) ✅ built

> **Canonical = the Nood-Style Build Spec** (newest). It supersedes the earlier advertorial draft in
> ADDENDUM_1 §5. A standalone, hidden (robots: noindex) pre-sell page that warms cold Meta/TikTok
> traffic **before** the PDP. Tone: combative "us vs. them" — the salon is the enemy extracting money
> month after month; Delora is the escape.

**Built:** `Advertorial.tsx` + `Advertorial.css`, route `app/ipl-vs-salon/page.tsx`.
Rebuilt in the **Delora brand DNA** (amethyst/lavender, Cormorant headings, soft cards,
lavender-gradient placeholders) — *not* the raw pink palette the spec literally proposed, so it
matches the rest of the site. BG-only. Isolated-build link targets: device → `/#product-hero`,
quiz → `/#consultation` (the spec's `/products/delora` and Shopify `/pages/...` don't exist here).

**Layout rules:** single-column, ~720px text column, full-width visual blocks where noted,
alternating copy → visual rhythm, generous spacing. Primary CTA appears ≥ twice (mid-page after the
math callout + Section 7). All 12 `[VISUAL BLOCK]`s render as labelled empty placeholders with stable
`id`s so assets drop in later with no restructuring.

### Section copy (BG — as built)

**§1 Hero + hook**
- H1: „Спри да плащаш на салона всеки месец."
- Sub: „Бръснене, восък, лазер в салон — всичко това е цикъл, който никога не свършва. Има друг начин."
- Overlay over hero block: „95% по-малко окосмяване · €189 · Веднъж" — `id="visual-hero"`

**§2 The problem (name the enemy)** — `id="visual-cycle"`
- H2: „Салонът не иска ти да спреш да идваш."
- Body: Помисли логично. / Салонът печели, когато се връщаш… / Те не продават резултат. Продават
  зависимост. / Месец 1: €120 … За 10 години? Над €14,000. / За какво? За кожа, която е гладка само
  половината месец.

**§3 The switch** — `id="visual-how"`, `id="visual-timeline"`
- H2: „Delora прекъсва цикъла."
- Body: IPL не реже на повърхността и не изскубва — достига корена и спира растежа.
  Светлина → топлина → коренът отслабва → косъмът пада сам. „Това правят салоните с лазер за €2,000.
  Delora го прави у дома. За €189."

**§4 Us vs. them** — `id="visual-vs"`, `id="visual-math"`
- H2: „Delora срещу всичко останало."  · Intro: „Без маркетингови трикове. Само числата."
- Comparison table (real HTML, not a placeholder):

| | Салон лазер | Восък | Бръснене | Delora |
|---|---|---|---|---|
| Цена | €80–150/път | €50–100/път | €5–10/бритва | €189 веднъж |
| Колко често | Всеки месец | На 4–6 седмици | На 2–3 дни | 1–2x/седм. (12 седм.), после месечно |
| Резултат трае | 4–6 седмици | 1–2 седмици | 1–3 дни | Месеци (само поддръжка) |
| За 10 години | €10,000–18,000 | €8,000–12,000 | €2,500–4,000 | €189 + ~€100 = €289 |

- Math callout banner: „€14,000+ за салон" (struck) → „€189 за Delora". Then mid-page primary CTA.

**§5 Objections** — `id="visual-suitability"`, FAQ accordion, `id="visual-quiz-cta"`
- H2: „Честно. Ето какво трябва да знаеш."  · Intro: „Няма да ти продаваме лъжи. Ето кога Delora работи — и кога не."
- FAQ (5, collapsible):
  1. „Ще проработи ли за моята кожа и коса?" → светла кожа + тъмна коса най-добре; тъмна кожа — повече сесии; руса/бяла — слабо. + inline link „Направи теста — 2 мин".
  2. „Боли ли?" → Не. Сапфирено охлаждане до 15°C. Топло щракване, не болка.
  3. „Безопасно ли е?" → CE маркирано; авто-охлаждане; същата технология като салоните.
  4. „Кога ще видя резултат?" → видимо между 4-та и 8-та седмица; мнозина усещат разлика след 2–3 употреба.
  5. „А ако не проработи за мен?" → 90 дни гаранция, връщаш парите, без въпроси.
- Quiz CTA card: „Виж дали Delora е за теб — 2-минутен тест." → quiz.

**§6 Real people** — `id="visual-carousel"` (5 empty slides) + `id="visual-video"`
- H2: „Жени, които спряха да ходят на салон."  · Rating: „★★★★★ 4.9/5 — 17 реални отзива".

**§7 The offer + CTA** — `id="visual-product"`, `id="visual-trust"`
- H2: „Веднъж. €189. Край на цикъла."
- Body: „Салонът ти казва „до скоро." Delora казва „повече няма нужда."… Но 17 от 18 жени не го връщат."
- Primary CTA „Виж устройството" → device · Secondary „Не съм сигурна — пусни теста (2 мин)" → quiz.
- Trust strip (text labels, empty icon slots): Плащане при доставка · Безплатна доставка · 90 дни гаранция · CE маркирано.

### Visual placeholder blocks (all 12, with `id`s for later asset drop-in)
`visual-hero` · `visual-cycle` · `visual-how` · `visual-timeline` · `visual-vs` · `visual-math`
(real banner) · `visual-suitability` · `visual-quiz-cta` (real CTA) · `visual-carousel` (+5 slides) ·
`visual-video` · `visual-product` · `visual-trust` (real badge row).

**Still external (❌):** create the real Shopify page, point Meta campaigns from `/products/delora`
to this advertorial, and drop in the real assets (UGC before/after video, infographics, testimonials).
Targets: scroll depth 19% → 50%+, time-on-page 2–3 min, CTR to PDP 40–60%.

---

# PART G — COMING-SOON PRODUCTS (Trust + SKU expansion) ✅ built (UI)

Signal a growing brand, not a one-product dropship. **Built:** `/shop` (`ShopGrid.tsx`) shows the live
device (€189) + 3 coming-soon cards with status badges. **"Notify me" is UI-only** (browser success
state, **no network call**) per product decision.

| Product | Status | Est. price | Notes |
|---|---|---|---|
| Delora XL — за голяма площ | Coming Q4 2026 | €249 | 20% larger window, 2 pulses/sec, same cooling. |
| Delora Face — лице/мустаци/брада | Coming Q3 2026 | €299 | Smaller precision head, gentler sapphire cooling, safe near eyes. |
| Delora Post-IPL Serum — запази резултатите | Coming July 2026 | €24 (50ml) | Allantoin + panthenol + lavender; extends results 2–4 weeks. |

**Still external (❌):** create the real Shopify products (status "unavailable" + coming-soon badge)
and wire "Notify me" to an email list for launch.

---

# PART H — CONSOLIDATED ROADMAP & MEASUREMENT

### Roadmap (from ADDENDUM_1, with current status)
| Task | Priority | Status |
|---|---|---|
| Risk-transfer guarantee (PDP) | High | ✅ built |
| COD trust badge (PDP) | High | ✅ built |
| Objection chat (rules-based) | High | ✅ built |
| Advertorial page + copy | Highest | ✅ built (assets + Shopify/Meta pending) |
| Coming-soon products (UI) | Medium | ✅ built (Shopify wiring pending) |
| Verify Klarna + COD backend | High | ❌ external |
| 12-week onboarding emails | High | ❌ external (Klaviyo) |
| AI chatbot (Option B) | Medium | ❌ external |
| Redirect Meta ads → advertorial | Highest | ❌ external |

### Measurement targets
- PDP: add-to-cart 2.5–3%+, scroll-to-CTA 40%+, time-on-page 45–60s, bounce <70%, purchase 0.8–1.2%+.
- Guarantee: 40%+ scroll past.
- Chat: >5% open, >15% chat→cart.
- Payments: COD 55–60%, Klarna 15–25% (if Klarna <10% it's misconfigured).
- Post-purchase (after 20–30 orders): email open >30%, CTR >10%, refund rate declining from wk4.
- Advertorial: scroll depth 50%+, time 2–3 min, CTR→PDP 40–60%.

---

## APPENDIX — Benchmark patterns (high-conversion DTC device brands)

| Element | Ulike | Nood | Braun | Delora (target) |
|---|---|---|---|---|
| Headline | feature + value | brand voice | heritage | value-led (mid-premium) |
| Cost comparison | $64k laser table | $2.5k laser vs $179 | "$8.1k salon" | €20k salon vs €189 |
| Guarantee | 100-day + 2-yr | 90-day + lifetime | warranty | 90-day risk-transfer |
| Financing | Affirm/Klarna visible | Affirm visible | hidden | Klarna/COD visible |
| Trust signals | 5–6 | 4–5 | 3–4 | 5 (shipping, guarantee, certs, support, cooling) |

These mechanisms (risk-transfer, advertorial pre-sell, onboarding, financing visibility, chat) are
proven across Ulike, Nood, WHOOP, and Braun. Execute systematically and measure weekly.

**— END OF MASTER BRIEF —**
