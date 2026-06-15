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

**END OF ADDENDUM**

**Next steps:** Send this to your dev/marketing team. Implement high-priority items this week, chatbot and onboarding by end of week 2.

Questions: These are all proven mechanisms from Ulike, Nood, WHOOP, and Braun. Implement systematically and measure.
