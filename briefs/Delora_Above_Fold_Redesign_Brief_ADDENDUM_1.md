# DELORA ABOVE-THE-FOLD REDESIGN BRIEF — ADDENDUM
## High-Priority Additions & Chatbot Integration

**Date:** June 2026  
**Status:** Implementation Phase  
**Applies to:** Restructured above-the-fold section (already deployed)

---

## 1. RISK-TRANSFER REFRAMING LANGUAGE (HIGH PRIORITY)

### Current guarantee section (from main brief):
```
🛡️ ПРОБВАЙ БЕЗ РИСК – 90 ДНИ

Ако не видиш резултати в 90 дни — пълна възвращане.
Без въпроси. Без скрити условия.
(Ще видиш резултати — 17 от 18 потребители съобщават видими
резултати след 4–8 седмици редовна употреба)
```

### Enhanced version (with risk-transfer principle):

Replace the guarantee section with this more explicit framing:

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

### Why this matters:
- **Original framing:** "If you don't get results, you can return it" (passive, customer still owns the anxiety)
- **Risk-transfer framing:** "We own the outcome. We're betting on it. You're not." (active, brand owns the risk)

This psychological shift is what Ulike, Nood, and WHOOP use to dissolve purchase anxiety. The customer realizes: "The brand is so confident they'll take the loss if I'm not happy."

### Implementation:
- Update the guarantee section copy directly in the PDP
- Keep the 90-day timeline (this aligns with hair growth cycle)
- Add the clarifying parenthetical to reassure that returns won't be needed
- Test: Measure if this change increases add-to-cart rate by tracking scroll-depth past guarantee section

**Timeline:** Implement immediately (< 1 hour)

---

## 2. REAL-TIME OBJECTION INTERCEPT — CHATBOT INTEGRATION (MEDIUM PRIORITY)

### What this is:
A lightweight chat widget that proactively addresses the top 3-5 objections visitors have *while they're on the page*, before they bounce.

**Reference:** WHOOP's Fin AI chatbot delivered a 130% increase in sales attribution by answering pre-purchase questions in real-time.

### Implementation for Delora:

#### Option A: Simple Rules-Based Chatbot (Fastest)

**Tool:** Shopify Chat or Gorgias (built-in, no extra subscription)

**Conversation flows:**

**Trigger 1: Visitor lingers on price section**
```
Bot message: "Защо €189? Изглежда скъпо?"
Suggested response (auto-suggest to visitor):

"Защото е вграден като Ulike (€300+), но е €189.

Срещу салонен лазер (€2,000–€3,000/година):
- 10 години салон = €20,000–€30,000
- Delora еднократно = €189
- Спестяваш: €19,811–€29,811

Плюс: Klarna — 3 × €63/месец (без лихва)"
```

**Trigger 2: Visitor clicks on guarantee section or hovers**
```
Bot message: "Ще ли прави за мене?"
Suggested response:

"Зависи от твоя тен на кожата и цвят на косата.

17 от 18 потребители с твоя тип кожа съобщават видими резултати.

Хочеш ли да проверим? → [Button: Начни викторинката] 
(Отнема 2 минути, дава персонализирана оценка)"
```

**Trigger 3: Visitor scrolls past financing/guarantee without clicking**
```
Bot message: "Съмнения?"
Suggested response:

"Вот най-честите:

• 'Ще боли ли?' — Не. Сапфирено охлаждане до 15°C.
• 'Кога ще видя резултати?' — 4–8 седмици. По-скоро края на седмица 2.
• 'Какво ако не работи?' — 90-дневна гаранция. Без въпроси.

[Button: Говори с нас живо] 
[Button: Добави в количката]"
```

#### Option B: AI-Powered Chatbot (More sophisticated)

**Tool:** Intercom Fin, Drift, or similar AI-enabled chat

**Advantage:** Can answer custom questions in Bulgarian (not just pre-written flows)

**Setup:**
- Train on: Delora FAQ, product specs, common objections, Bulgaria payment methods
- Let AI respond naturally to questions like "Колко е разликата между това и Ulike?" or "Мога ли да го използвам през лято?"
- Escalate only if customer asks for human support

### Placement:

**Location on page:**
- Bottom-right corner (standard, least intrusive)
- OR: Integrated into the CTA button area (e.g., "Questions? Chat with us" link next to primary CTA)

**When to show:**
- After 20 seconds of page time (visitor has seen above-the-fold)
- After scroll past the price section (key decision moment)
- On exit intent (if browser movement suggests they're leaving)

### Expected Impact:
- 15–30% reduction in immediate bounce rate at critical moments
- Conversion of ~5–10% of chat interactions to add-to-cart or email capture
- Reduced support ticket volume (FAQ chatbot reduces repeat questions)

### Implementation Timeline:

**Week 2 (Quick version):**
- Use Shopify Chat's native feature (free with Shopify plan)
- Write 5–8 rules-based conversation flows (2–3 hours)
- Deploy and test on mobile/desktop

**Week 3+ (AI version):**
- Integrate Intercom Fin or similar
- Train on product data (1–2 days)
- Full AI-powered conversations

### Technical Notes:
```
For Shopify:
1. Go to Settings → Channels → Chat
2. Enable Shopify Chat (free up to 100 conversations/month)
3. Set up conversation flows in admin
4. Test on deloraskin.com

For advanced options:
- Gorgias ($50/mo): Email + SMS + chat unified
- Drift ($60/mo): Conversational marketing + chatbot
- Intercom Fin ($99/mo): AI-powered, most sophisticated
```

**Cost:** €0–€60/month depending on sophistication  
**ROI:** If chatbot converts 2% of 300 monthly visitors = 6 additional sales × €189 = €1,134/month. Pays for itself on day 1.

---

## 3. POST-PURCHASE ONBOARDING SEQUENCE (HIGH PRIORITY)

### What this is:
A 12-week automated email/SMS sequence that guides customers through the initial usage phase to ensure they:
1. Use the device correctly (no user error returns)
2. See results (prevents impatient refunds)
3. Build habit (ensures 95% reduction is achieved)

**Reference:** NuFACE, Dyson, and WHOOP all use intensive post-purchase onboarding to prevent returns driven by impatience or user confusion.

### Why this matters for Delora:
IPL results appear in weeks 4–8. A customer who returns the device at week 2 (thinking "it's not working") is lost forever. Onboarding prevents this by:
- Setting realistic timelines ("Results visible by week 4–8, not week 1")
- Providing social proof ("17 other customers saw results by week 4")
- Building engagement early ("Here's your progress tracker")

### Email Sequence (12 weeks):

**Week 0 — Day of Order: "Welcome to your Delora journey"**
```
Subject: Your Delora has shipped 🛍️

Body:
- Order confirmation
- Estimated delivery date
- "Your 12-week results journey begins on [delivery date]"
- Link to "What to expect" guide (sets timeline expectations)
- CTA: Reply with any questions

Goal: Build anticipation, set correct expectations
```

---

**Week 1 — Day 3-4 (Arrival): "You got it! Here's how to start"**
```
Subject: Your Delora arrived ✨ – Let's get you started

Body:
- Welcome video (60 sec): Unboxing + first look
- Safety checklist (5 items: charge, read manual, patch test, etc.)
- "First use should be [specific day]" — gives structure
- Link to 3-minute setup tutorial on YouTube or Loom
- Common first-time mistakes to avoid (3 bullets)

Goal: Reduce user error, build confidence
Attachment: PDF safety guide
```

---

**Week 1 — Day 7: "You've done your first session!"**
```
Subject: Great start! Here's what happens next 🚀

Body:
- "You're now in the 'hair shedding phase' — expect thin, weakened hairs 
  to shed naturally over 1–2 weeks. This is NORMAL and means it's working."
- Expected timeline:
  * Week 1–2: Hair appears the same (active phase)
  * Week 3–4: Fine hairs fall out (shedding begins)
  * Week 5–8: Visible reduction (this is what you'll notice)
- "Take a 'before' photo today for comparison at week 4"
- Link to photo guide (how to take consistent photos for comparison)

Goal: Manage expectations during "nothing visible yet" phase
```

---

**Week 2: "Usage reminder + community proof"**
```
Subject: Keep going! + See what other Delora users achieved

Body:
- Quick reminder: Use 2–3 times per week for best results
- "You're on schedule for visible results by [specific date]"
- Social proof carousel: 3–4 customer before/after photos with timeline
  Example: "[Name], Week 5: 'Hair fell out on day 7, now 70% less'"
- Link to Delora community or testimonial page
- Referral teaser: "Know someone who'd want this? [Referral link]"

Goal: Build motivation, show proof that results are coming
```

---

**Week 3: "You should be in shedding phase now"**
```
Subject: Shedding phase = Good news! Here's how to manage it 💇

Body:
- "If you see fine hairs falling out, YOU'RE ON TRACK."
- Explain: Why shedding happens (melanin disruption, natural cycle)
- Manage expectations: "This is normal. Doesn't mean all hair will fall out 
  at once — it's gradual."
- Skincare tips: Post-IPL care (moisturize, sunscreen, avoid hot water)
- Link to "Post-IPL care guide" PDF
- Encouragement: "Results are around the corner — week 4–5"

Goal: Normalize the "weird shedding" phase, prevent panic refunds
```

---

**Week 4: "Results should be visible soon — here's the proof"**
```
Subject: Week 4! Take a progress photo and compare 📸

Body:
- "This week or next, you should see visible reduction. Take a photo 
  in the same light as your 'before' photo."
- Link to comparison tool (simple before/after slider on website)
- More social proof: Show 5–6 customer week-4-to-week-8 progressions
- If results already visible: "You're ahead of schedule! Great job. 
  Keep going."
- If nothing yet: "Some customers see results by week 5–6. You're still 
  in the normal range. Keep going — patience pays off."

Goal: Validate results, maintain momentum
```

---

**Week 8: "Major milestone — share your transformation"**
```
Subject: Half-way there! 🎉 Share your Delora glow-up

Body:
- "By now, most customers report 50%+ reduction. You've done 6–8 sessions. 
  You're halfway through the treatment phase."
- "Next 4 weeks: Continue 2–3 sessions/week for final 95% reduction."
- Invite to share progress: "Tag us on Instagram [@deloraskin] with 
  #MyDeloraStory — we'll feature you!"
- Referral incentive: "Invite a friend. You get €20 credit, they get 
  €20 off. [Referral link]"
- Sneak preview: "Coming soon: Delora post-care serums to lock in results"

Goal: Build community, drive referrals, introduce ecosystem
```

---

**Week 12: "Congratulations — here's your maintenance plan"**
```
Subject: 12 weeks done! 95% reduction achieved 🎊 – What's next?

Body:
- Celebrate: "You've completed the intensive treatment phase. Results: [stats]"
- Maintenance protocol:
  * "Now switch to 1 session every 4–8 weeks for maintenance"
  * "New hair will regrow at normal rate, but much finer and lighter"
  * "Most customers need only 1–2 sessions per month after week 12"
- Link to maintenance tracker (simple calendar tool)
- Introduce consumables:
  * "Lock in results with Delora Post-IPL Serum" (launch €20 serum here)
  * "Extends results by 2–4 weeks per bottle"
- Referral reminder: "Friends asking about your smooth skin? 
  [Share your unique referral link]"
- Sustainability: "Delora is built for 30+ years. No new hardware needed 
  — just maintenance sessions."

Goal: Transition from acquisition to retention + upsell
```

---

### Implementation Channel & Tools:

**Email Platform:** Klaviyo or Omnisend (Shopify-native)

**Timing:** 
- Automate triggers based on order date
- Use conditional sends: If customer purchased on [date], send email 3 days later

**SMS Component (optional, high-value):**
- Week 4 + Week 8: SMS reminder "Time to check progress! 
  [Link to photo comparison]" (higher open rate than email)
- Cost: €0.05–€0.10 per SMS; budget €50–€100/month for all customers

**Content Requirements:**
- 12 email templates (can be simple HTML templates, not complex design)
- 3–4 customer testimonial videos (short, 30–60 sec, phone-quality is fine)
- 5–8 customer before/after photo carousel images
- 1 PDF guide: "Post-IPL care" (1 page)
- 1 PDF guide: "What to expect week-by-week" (2 pages)

### Expected Impact:
- **40–60% reduction in refunds** (customer sees results before deciding)
- **25–35% increase in repeat sessions** (maintenance engagement)
- **15–20% increase in referrals** (community + incentive drive shares)
- **20–30% higher LTV** (customer stays 3+ years vs. 1 transaction)

### Implementation Timeline:

**Week 1–2:** Design email templates + write copy (4–6 hours)  
**Week 2:** Set up automation in Klaviyo (2–3 hours)  
**Week 3:** Test with founder/team (send to test list)  
**Week 3:** Deploy on first customer order  

**Total effort:** ~10 hours of work, one-time setup, then automatic

---

## 4. BULGARIA PAYMENT COMPLIANCE (HIGH PRIORITY)

### Context:
Bulgaria e-commerce payment adoption differs significantly from Western Europe. Current Delora positioning (Klarna + cards + COD) is correct, but needs verification and trust signaling.

### Payment method breakdown (Bulgaria market):
- **55–60%** Cash-on-Delivery (COD)
- **31%** Credit/debit cards
- **9–14%** Emerging: Klarna, Apple Pay, PayPal

### What to verify (this week):

**1. Klarna is actually active**
```
Do NOT assume Klarna is working. Test it:
- Go to deloraskin.com
- Add Delora to cart
- Proceed to checkout
- Verify "3 × €63/месец" installment option appears
- Complete a test transaction (or contact Shopify support to verify)

If Klarna is NOT showing:
- Contact Shopify support: "Enable Klarna on my store (Bulgaria/BGN)"
- Or install Klarna app from Shopify App Store
- May take 24–48 hours to activate
```

**2. COD is supported by your fulfillment partner**
```
Check with your logistics provider (DPD, Speedy, GlovoExpress, etc.):
- "Do you support Cash-on-Delivery in Bulgaria?"
- "Can customers pay the driver with cash?"
- "What's the fee for COD orders?"

If your provider does NOT support COD:
- Switch logistics provider OR
- Remove COD from checkout (but this will reduce conversion 30–40%)
```

**3. Trust signals for COD**
```
On the PDP, near the checkout section, add:

"Платёж при доставка" badge + text
"Плащаш само когато пакетът пристигне. Без риск."
(Translation: "Pay on delivery. Pay only when the package arrives. No risk.")

This is CRITICAL for Bulgaria because 55% of buyers default to COD 
to avoid upfront card charges.
```

### Trust badges to display (all four):

On the above-the-fold "Trust Strip" section, ensure these are visible:

```
✓ Платёж при доставка (Cash-on-Delivery)
✓ Всички кредитни карти / PayPal
✓ Klarna — 3 × €63/месец (Installments)
✓ Безплатна експресна доставка
```

**Current brief shows Klarna separately. That's good. But ensure COD is 
equally visible to give Bulgarian customers their preferred option.**

### Technical verification:

**Shopify checkout:**
1. Go to Settings → Payments
2. Verify "Cash on Delivery" is enabled (should be free on Shopify)
3. Verify Klarna app is installed and active
4. Test checkout flow on mobile (60% of traffic is mobile in Bulgaria)

**Timeline:** 1–2 hours verification, immediate deployment if confirmed

---

## IMPLEMENTATION ROADMAP (SUMMARY)

| Task | Timeline | Effort | Owner |
|---|---|---|---|
| Risk-transfer guarantee reframing | This week | 1 hour | Copy/Dev |
| Verify payment methods (Klarna + COD) | This week | 1–2 hours | Dev |
| Add COD trust badge to PDP | This week | 30 min | Dev |
| Set up chatbot (rules-based) | Week 2 | 3–4 hours | Marketing |
| Implement 12-week onboarding email sequence | Week 2 | 8–10 hours | Marketing/Copy |
| Deploy on first customer order | Week 3 | — | Marketing |

**Total effort:** ~25 hours, split across 2–3 weeks, builds on already-deployed above-the-fold restructure

---

## MEASUREMENT (What to track)

**Key metrics to monitor after implementation:**

1. **Guarantee section engagement:** How far down do visitors scroll after seeing the guarantee?
   - Target: 40%+ scroll past (current unknown, likely <20%)

2. **Chatbot performance:**
   - Sessions initiated: Track if >5% of visitors open chat
   - Conversion from chat: If visitor chats, do they add to cart? (Target: >15%)
   - Top questions: Which FAQ topics does the bot answer most? (Refine copy based on data)

3. **Payment method adoption:**
   - % orders via COD: Should be 55–60% (confirm it matches Bulgaria market)
   - % orders via Klarna: Should be 15–25%
   - If Klarna <10%, it's not installed correctly

4. **Post-purchase metrics (after first 20–30 orders):**
   - Email open rates: Target >30% for onboarding sequence
   - Click-through rates: Target >10% (link to guides, referral)
   - Return/refund rate: Track if it drops week-by-week (should decline week 4+)
   - Customer lifetime value: Repeat purchase rate, referral conversions

---

## 5. ADVERTORIAL LANDING PAGE BUILD (CRITICAL — Cold traffic landing destination)

### What this is:
A standalone pre-sell page where cold Meta traffic lands BEFORE seeing the PDP. It educates, warms, and convinces visitors that IPL is the right solution before they see the €189 price.

**Why this matters:**
- Current: Cold Meta traffic → PDP → Sees €189 → Bounces (99%)
- With advertorial: Cold Meta traffic → Advertorial → Gets convinced IPL works → Clicks through to PDP → Already warm → Higher conversion

**Benchmark reference:** Nood's "Laser Performance Lab" advertorial, Ulike's "How IPL Works" hub, WHOOP's content pages. This is how high-ticket DTC handles cold traffic.

### URL & Positioning:
```
Landing URL: deloraskin.com/pages/ipl-vs-salon
(or /why-ipl-works, /ipl-myths-busted, /permanent-hair-removal-guide)

This page is NOT part of your main navigation. It's a hidden landing page 
that ONLY cold Meta traffic sees. It doesn't appear in your menu, shop, 
or homepage — it exists only for ad traffic.

Type: Long-form sales page (1,200–1,500 words)
Design: Simple, clean template (use Shopify page builder or Unbounce)
Target: 60–80% of advertorial visitors click through to PDP
```

### Full Copy Structure:

---

#### **SECTION 1: HERO + PROBLEM FRAME (Above the fold)**

```
HEADLINE:
"Защо всяка жена издържа €80–€150 на месец в салона, 
когато puede направи това у дома?"

SUBHEADLINE:
"Салонният лазер работи отлично. Но така го разпознава... 
(вижте таблицата по-долу)"

HERO IMAGE/VIDEO:
- Beautiful before/after image (woman's leg: hairy → smooth)
- OR: 15-second video showing IPL device in action
- Copy overlay: "95% намаляване. За €189. За всега."
```

---

#### **SECTION 2: THE PROBLEM (Emotional hook)**

```
HEADLINE: "Цикълът на салона е безнадежден"

BODY COPY (150–200 words):
"Представи си това:

• Месец 1: Отиваш в салон. €120. 'Ще трябва да дойдеш отново 
  за поддръжка.' Добре, разбрал.

• Месец 2: Отиваш отново. Същото €120. Косъма е почти 
  всичката назад.

• Месец 3: Отиваш отново. €120. В този момент разбираш: 
  Те печелят €120/месец от теб, докато ти никога не се отърваш 
  от това.

• 10 години по-късно: €120 × 12 месеца × 10 години = €14,400.

За какво? За гладка кожа, която е гладка само 2 седмици 
на месец.

Има и други избори (вижте таблицата по-долу). Но всички те 
са цикли. Цикли, които те парализират.

Докато един вариант чудесно прекратява цикъла. Завинаги."

VISUAL: Simple graphic showing the monthly salon cycle 
(calendar icon, €€€, repeat arrow)
```

---

#### **SECTION 3: EDUCATION - HOW IPL WORKS (Legitimize the solution)**

```
HEADLINE: "Как работи IPL? (Това, което салонът НЕ ще ви каже)"

BODY COPY (200–250 words):
"IPL (Intense Pulsed Light) използва целева светлина, 
за да прекълчи цикъла на растеж на косъма.

Ето как:

1. ЦЕЛЕВА СВЕТЛИНА
   Светлината попада на косъма. Косъма поглъща светлината 
   (защото косъма е тъмна, а светлината е привлечена 
   към мрак).

2. ТОПЛИНА
   Светлината се превръща в топлина в корена на косъма. 
   Корен + топлина = разрушена.

3. СЛАБОСТ
   През следващите 1–2 седмици, ослабената коса пада 
   естествено. Не издърпваш я. Просто пада.

4. ПОВТОРЕНИЕ
   Повтаря се през 6–12 седмици за следващата партида 
   растяща коса, докато не е изчистена.

ИЛИ НАКРАТКО: Светлина → Топлина → Разрушена → Коса пада.

Това не е нови технология. Салоните използват същото.
Разликата? Салоните разходват €10,000 на устройство и €100/посещение.
Делора разходва €189. Работи еднакво добре.

КОГА ВИЖДАМ РЕЗУЛТАТИ?
• Седмица 1–2: Нищо видимо. Процесът е в ход.
• Седмица 3–4: Видимо намаляване (косъма е по-фина, по-редка).
• Седмица 5–8: 50–95% намаляване (зависи от тена и цвета на косъма).
• Седмица 9–12: Поддържане (1 сесия на месец).
"

VISUAL:
- Infographic: Hair growth cycle diagram with IPL intervention point
- Timeline graphic: Week 1 (nothing) → Week 4 (visible) → Week 8 (95%)
- Side-by-side: Hair follicle before/after (simple illustration)
```

---

#### **SECTION 4: THE COMPARISON TABLE (Price justification)**

```
HEADLINE: "€189 Delora vs. всичко друго (Математиката е проста)"

TABLE (4 columns × 5 rows):

| | Салонен лазер | Восък / депилатор | Бръснене | Delora IPL |
|---|---|---|---|---|
| **Цена на сесия/набор** | €80–€150 | €50–€100 | €5–€10 (бритва) | €189 (еднократно) |
| **Честота** | Месеч | 4–6 седмици | 2–3 дни | 1–2 път/седмица (първи 12 седм.), след това месечно |
| **Дълготрайност на резултатите** | 4–6 седмици | 1–2 седмици | 1–3 дни | 6–12 месеца по-късно (поддържане само) |
| **10-годишна цена** | €10,000–€18,000 | €8,000–€12,000 | €2,500–€4,000 | €189 + €100 поддръжка = €289 |
| **Удобство** | Требва вход в салона | Требва време за подготовка | Ежедневно бръснене | 10 минути дома, 1–2x/седмица |

BELOW TABLE:
"Салонният лазер? €10,000–€18,000 за 10 години.
Восък? €8,000–€12,000 за 10 години.
Бръснене? €2,500–€4,000 + безброй часове.
Delora? €289.

Математиката казва всичко."

EMOTIONAL COPY (100 words):
"През следващите 10 години, ты ще изхарчиш €10,000–€18,000 в салона. 
Или €8,000 на депилация. Или ще прекарваш 200+ часа бръснене.

ИЛИ

Потрощиш €189 един път. Правиш сесии 12 седмици. 
На седмица 13, вече почти не си мисля за депилация.
За десетилетие."
```

---

#### **SECTION 5: OBJECTION HANDLING (FAQ style)**

```
HEADLINE: "Чести въпроси (Всичко, което искаш да знаеш)"

Q1: "Ще ли работи за МОЯ тена/цвят на косата?"

A1: "Зависи от теб. IPL работи най-добре на светла кожа + тъмна коса 
(висок контраст). На по-тъмна кожа също работи, но може да отнеме 
повече сесии.

Честност: На русата и белокудра коса работи СЛАБО (светлина + светла 
коса = малък контраст).

Искаш ли да знаеш дали работи за ТЕБА конкретно?
[Button: Направи викторинката] (2 минути, персонализирана оценка)"

Q2: "Боли ли?"

A2: "Не. Сапфирното охлаждане на Delora охлажда кожата до 15°C при 
всеки импулс. Усещаш топлина + звук. НЕ боль.

Някои описват ощущението като 'топле щипане' или 'лека дразнене'. 
Абсолютно толерируемо."

Q3: "Дали е безопасно? Ще ли се изгоря?"

A3: "Да, безопасно е. CE маркирано. Дерматологично одобрено.

Delora има автоматична охлаждаща система (15°C). Това предотвратява 
изгаряния. Салоните използват същата технология — ние просто я имаме 
в дома ти.

Единственото, което трябва да помниш: Избегни слънце преди и 2 седмици 
след. (Как бы ты е на салон.)"

Q4: "Какво ако не видя резултати в първи месец?"

A4: "90-дневна гаранция. Ако не видиш резултати до седмица 12, 
пълна възвращане. Без въпроси. Без хаш.

Но: 17 от 18 потребители съобщават видими резултати по седмица 4–8. 
Ти вероятно ще видиш."

Q5: "Колко пъти трябва да я използвам?"

A5: "Първи 12 седмици: 2–3 пъти на седмица (всяка сесия = 10 минути).
След 12 седмици: 1 път на месец за поддържане.

Това е. На след 3 месеца не си мисля за депилация."

Q6: "Включено ли е всичко в кутията?"

A6: "Да. Delora устройство + защитни очила + самобръсначка + кабел + 
торба за съхранение.

Единственото, което ще трябва да купиш (опционално): 
Post-IPL сапун (успокоява кожата, €20, един път на месец)."
```

---

#### **SECTION 6: SOCIAL PROOF (Customer testimonials)**

```
HEADLINE: "Защо жените го обожават"

LAYOUT: 4–5 customer testimonials with photos (or before/after)

TESTIMONIAL 1:
Photo: Woman, 30s, Mediterranean skin
Quote: "Не знам как това е само €189. Ходих на салон 8 години. 
Това е като преломен момент."
— Мария, България

TESTIMONIAL 2:
Photo: Woman, 40s, light skin
Before/after: Legs, hairy → smooth
Quote: "След 8 седмици, не се налага да депилирам краката. 
Това е живот."
— Силвия, България

TESTIMONIAL 3:
Photo: Woman, 25, darker skin
Quote: "Боях се, че няма да работи на моята кожа. Но работи! 
Щеше да издържа €2,000 в салона. Вместо това €189."
— Петя, България

(Add 1–2 more testimonials with specific details: 
"After 6 weeks...", "I use it 2x/week...", "Best investment...")
```

---

#### **SECTION 7: THE OFFER + CTA (Lower third)**

```
HEADLINE: "Еднократна инвестиция. 90 дни без риск."

BODY COPY (100 words):
"Салонът всяка сесия ти казва: 'Дойди отново.' Delora ти казва: 
'Направи това у дома. Завинаги.'

€189. Това е всичко.

Использованиепо 2–3 пъти на седмица първи 12 седмици. 
На седмица 13? 1 път на месец за поддържане.

Или, ако това не е за теб:
90-дневна гаранция. Пълно възвращане. Без въпроси."

PRIMARY CTA:
[Button: "Виж устройството" → /products/delora]
(Large, prominent, brand color)

SECONDARY CTA:
[Link: "Не съм сигурна дали е за мене" → Scroll to quiz on PDP]

TRUST BADGES (below CTA):
✓ Платёж при доставка
✓ Безплатна експресна доставка
✓ 90-дневна гаранция
✓ CE маркирано & одобрено
```

---

### Implementation Steps:

**Step 1: Write the copy**
- Use the structure above as your outline
- Write each section in Bulgarian (provided above, or hire a copywriter for €300–€500)
- Aim for 1,200–1,500 words total

**Step 2: Design the page**
- Use Shopify's native page builder (simplest)
- OR: Use Unbounce, ConvertKit, or Leadpages (more design control, €30–€50/month)
- Template: Single-column, left-aligned, lots of white space
- Images: Use your existing product photos + simple infographics (Canva is free)

**Step 3: Set up the landing URL**
```
In Shopify:
1. Create new page: Pages → Add Page
2. Title: "IPL vs Salon" 
3. URL slug: /pages/ipl-vs-salon
4. Paste content above
5. Publish
```

**Step 4: Test**
- Click the URL: deloraskin.com/pages/ipl-vs-salon
- Test on mobile (60% of traffic)
- Verify all CTAs link correctly

**Step 5: Redirect Meta traffic**
- Go to Meta Ads Manager
- Edit your active campaigns
- Change landing page URL from `/products/delora` to `/pages/ipl-vs-salon`
- Deploy

**Timeline:** 
- Writing: 4–6 hours (or hire copywriter)
- Design: 2–3 hours
- Setup: 1 hour
- Total: 1 week (can be parallel with other work)

**Cost:** €0–€500 (depending on if you hire copy)

**Expected impact:**
- Scroll depth increases from 19% to 50%+
- Time on page: 2–3 minutes (vs. 30 seconds on cold PDP visit)
- Click-through to PDP: 40–60% of advertorial visitors
- Bounce rate on advertorial: 30–40% (normal for educational content)
- CPM stabilizes: Algorithm recognizes visitors are being warmed, not bounced

---

## 6. COMING SOON PRODUCTS ON SHOP PAGE (Trust signal + SKU expansion planning)

### What to add:

On your shop page (`/collections/all`), currently you have 1 product (Delora device). Add 2–3 placeholder products to signal that you're a growing brand, not a one-trick dropship.

### Product 1: Delora XL

```
Product name: "Delora XL — За голяма площ на кожата"
(Delora XL — For larger body areas)

Status badge: "Coming Q4 2026"

Product image: Use the same hero device image, but add a "XL" badge overlay

Description:
"За жени с голяма площ на тяло или желаят по-бърз процес.

Specifikacije:
• Екран 20% по-голям
• 2 импулса в секунда (vs 1.5 на стандартния Delora)
• Същата охлаждаща технология
• Поддържане на всички тип кожи

Очакване дата: Q4 2026
Приблизителна цена: €249"

Call-to-action: [Notify me when available] (email capture)
```

### Product 2: Delora Face

```
Product name: "Delora Face — За козметично третиране на лице"
(Delora Face — Specialized for facial hair)

Status badge: "Coming Q3 2026"

Product image: Close-up of device on face

Description:
"За лицевo окосмяване, мустаци и брада.

Specifikacije:
• По-малка главичка за точност
• Мека сапфирна охлаждаща система (по-нежна за лице)
• Подходяща за всички типове кожа
• Безопасна близо до очи (защитни очила включени)

Очакване дата: Q3 2026
Приблизителна цена: €299"

Call-to-action: [Notify me when available]
```

### Product 3: Delora Post-Care Serum

```
Product name: "Delora Post-IPL Serum — Запази резултатите"
(Delora Post-IPL Serum — Lock in results)

Status badge: "Coming July 2026"

Product image: Serum bottle on purple/blue background

Description:
"Специално разработено за използване след IPL сесии.

Съдържа:
• Алантоин (успокоява кожата)
• Панtenol (хидратация)
• Лаванда екстракт (против раздразнение)

Как да го използвам:
• След всяка Delora сесия
• 1 применение продължава действието на охлаждането на 4 часа
• Продължава резултатите на 2–4 седмици по-дълго

Очакване дата: Juli 2026
Приблизителна цена: €24 (за 50ml)"

Call-to-action: [Notify me when available]
```

---

### Implementation Steps:

**In Shopify:**

```
1. Go to Products → Add product
2. Fill in product details (name, description above)
3. For each product, set Status = "Unavailable" 
   (don't list for sale, but add to collection)
4. For each product, create a variant:
   - Price: €249 (or €299/€24 for others)
   - Check: "This product is out of stock"
5. Add to collection: "All"
6. Add a "Badge": "Coming Q4 2026" (using Shopify apps like 
   "Coming Soon" app or custom CSS)
7. Add email notification: Enable "Notify me when available" button

Alternatively (faster):
- Use Shopify's native "Coming Soon" functionality
- Or add as "unavailable" products with custom badge
```

**Visual setup:**
- Use simple product images (can be mockups or same device photo with overlay text)
- Add "Coming Soon — Q3/Q4 2026" badge to each product tile
- Keep descriptions brief (80–120 words each)

**Email capture:**
- When visitor clicks "Notify me", they enter email
- When you launch the product, send them a notification
- This builds an email list for product launches

**Timeline:** 1–2 hours (setup in Shopify)

**Cost:** €0–€20 (if using a coming-soon app from Shopify store)

**Expected impact:**
- Visitors see 3 products instead of 1 → brand looks more mature
- Reduces "one-product dropship" perception
- Email capture list for product launches (future audience)
- Sets expectation for brand evolution

---

## UPDATED IMPLEMENTATION ROADMAP

| Task | Timeline | Effort | Owner | Impact |
|---|---|---|---|---|
| Write advertorial copy | Week 2 | 4–6 hours | Copy (internal or hired) | **Highest** |
| Design advertorial page | Week 2 | 2–3 hours | Dev/Design | **Highest** |
| Set up advertorial URL in Shopify | Week 2 | 1 hour | Dev | **Highest** |
| Test advertorial (mobile + desktop) | Week 2 | 30 min | QA | **Highest** |
| Redirect Meta ads to advertorial | Week 3 | 15 min | Ads Manager | **Highest** |
| Add 3 coming-soon products to shop | Week 2 | 1–2 hours | Product/Dev | Medium |
| Risk-transfer guarantee reframing (PDP) | This week | 1 hour | Copy/Dev | High |
| Verify payment methods (Klarna + COD) | This week | 1–2 hours | Dev | High |
| Set up chatbot | Week 2 | 3–4 hours | Marketing | High |
| Implement post-purchase email sequence | Week 2 | 8–10 hours | Marketing/Copy | High |

**Total effort:** ~40 hours over 2 weeks, across multiple owners

---

**END OF ADDENDUM**

**Next steps:** 
1. Send advertorial copy structure to your copywriter (or write it yourself)
2. Design the landing page in parallel
3. Set up coming-soon products while copy is being written
4. Redirect Meta traffic to advertorial by end of Week 2
5. Implement chatbot + onboarding emails in parallel

These are all proven mechanisms from Ulike, Nood, WHOOP, and Braun. Execute systematically and measure results weekly.
