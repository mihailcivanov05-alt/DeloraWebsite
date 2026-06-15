"use client";

import React, { useState } from "react";
import { Check, Star, Truck, ShieldCheck, BadgeCheck, Headset, Snowflake, Sparkles, Plug, Glasses, Scissors, Package, BookOpen, Search, Wallet, Target, CreditCard, ShoppingCart, ClipboardList, Banknote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./ProductHero.css";

const productImages = [
  { src: "/Photoshoots/Other/hf_20260524_121655_0eadf972-f9fc-443d-9bc9-029db7b2993c.webp", alt: "Delora Elite IPL Device — front view" },
  { src: "/Photoshoots/Arm/hf_20260524_124008_fc1ae104-e9e0-467b-8d6b-d6142ef20ae3.webp", alt: "Delora Elite IPL Device — arm treatment view" },
  { src: "/Photoshoots/Leg/hf_20260524_110654_0630dd29-3ad6-454b-b3f1-3051b2aef3f6.webp", alt: "Delora Elite IPL Device — leg treatment view" },
  { src: "/Photoshoots/Face/hf_20260524_111557_bfe75d02-6a6a-403b-93b5-5c2056a063f1.webp", alt: "Delora Elite IPL Device — facial treatment view" },
  { src: "/Photoshoots/Other/hf_20260525_091820_21b9328b-85fb-4937-be10-4838412f1ec8.webp", alt: "Delora Elite IPL Device — bikini area treatment view" },
];

/* ── Reordered benefits: outcome first, then comfort → ease → durability ── */
const primaryBenefit = {
  en: { main: "Up to 95% hair reduction in 12 weeks", sub: "(With regular use — real results from our customers)" },
  bg: { main: "До 95% намаляване на окосмяването за 12 седмици", sub: "(При редовна употреба — реални резултати от нашите потребители)" },
};

const secondaryBenefits = {
  en: [
    "Painless — sapphire cooling down to 15°C with every pulse",
    "Full body in 25 minutes (easy and convenient)",
    "1,000,000 pulses — unlimited use for 30+ years",
  ],
  bg: [
    "Без болка — сапфирено охлаждане до 15°C при всеки импулс",
    "Цяло тяло за 25 минути (лесно и удобно)",
    "1,000,000 импулса — неограничена употреба за 30+ години",
  ],
};

/* ── Cost comparison table ── */
const costTable = {
  en: {
    heading: "Why Delora, not a €89 IPL or salon laser?",
    columns: ["", "Salon laser", "Cheap IPL devices (€80–€90)", "Delora"],
    rows: [
      { label: "Price", cells: ["€2,000–€3,000/year", "€80–€90", "€189 (one-time)"] },
      { label: "10 years", cells: ["€20,000–€30,000", "€800–€900", "€189"] },
      { label: "Cooling", cells: ["Yes", "Usually not", "Yes — sapphire"] },
      { label: "Guaranteed results", cells: ["Yes", "Unpredictable", "Yes or refund"] },
    ],
    savings: "You save €19,811 – €29,811 over a decade",
  },
  bg: {
    heading: "Защо Delora, а не €89 IPL или салонен лазер?",
    columns: ["", "Салонен лазер", "Евтини IPL уреди (€80–€90)", "Delora"],
    rows: [
      { label: "Цена", cells: ["€2,000–€3,000/година", "€80–€90", "€189 (еднократно)"] },
      { label: "10 години", cells: ["€20,000–€30,000", "€800–€900", "€189"] },
      { label: "Охлаждане", cells: ["Да", "Обикновено не", "Да — сапфирено"] },
      { label: "Гарантирани резултати", cells: ["Да", "Непредсказуеми", "Да или възвращане"] },
    ],
    savings: "Спестяваш €19,811 – €29,811 за едно десетилетие",
  },
};

/* ── Pricing & financing ── */
const pricing = {
  en: {
    heading: "Price & payment options",
    financingLabel: "Or in monthly installments:",
    options: ["3 × €63/month (Klarna)", "All credit cards / PayPal", "Cash on delivery (COD)"],
    save: "Save 53%",
  },
  bg: {
    heading: "Цена и начин на плащане",
    financingLabel: "Или в месечни вноски:",
    options: ["3 × €63/месец (Klarna)", "Всички кредитни карти / PayPal", "Наложен платеж (COD)"],
    save: "Спести 53%",
  },
};

/* ── Risk reversal / guarantee ── */
const guarantee = {
  en: {
    heading: "Try it risk-free — 90 days",
    main: "We take on 100% of the risk. If Delora doesn't deliver the 95% hair reduction you see from other users, you don't pay. Period. Full refund within 90 days. No questions. No hidden conditions.",
    emphasis: "We're betting on the device — not on you.",
    sub: "(You'll see results — 17 of 18 users report visible results after 4–8 weeks of regular use. We know it works.)",
  },
  bg: {
    heading: "Пробвай без риск — 90 дни",
    main: "Ние поемаме 100% от риска. Ако Delora не достави 95% намаляване на окосмяването, което виждаш от други потребители, ти НЕ плащаш. Точка. Пълно възстановяване в рамките на 90 дни. Без въпроси. Без скрити условия.",
    emphasis: "Залагаме на устройството — не на теб.",
    sub: "(Ще видиш резултати — 17 от 18 потребители съобщават видими резултати след 4–8 седмици редовна употреба. Ние знаем, че работи.)",
  },
};

/* ── Expanded trust strip (5 signals) ── */
const trustRows = [
  { icon: Truck, en: "Free express shipping", bg: "Безплатна експресна доставка" },
  { icon: ShieldCheck, en: "90-day money-back guarantee", bg: "90-дневна гаранция за връщане" },
  { icon: BadgeCheck, en: "CE marked & dermatologically approved", bg: "CE маркирано & дерматологично одобрено" },
  { icon: Headset, en: "24/7 customer support (Bulgaria)", bg: "24/7 клиентска поддръжка (България)" },
  { icon: Snowflake, en: "Sapphire cooling verified", bg: "Сапфирено охлаждане верифицирано" },
];

const accordionData = [
  {
    titleEn: "How does the IPL technology work?",
    titleBg: "Как работи IPL технологията на Delora?",
    contentEn: "Delora uses advanced Intense Pulsed Light (IPL) to send gentle, concentrated light pulses down to the hair root. The melanin in your hair absorbs this light, converting it into targeted thermal energy that naturally puts the follicle into a dormant, sleep state. By breaking the active growth cycle safely, Delora prevents future hair production right at the source, giving you lasting, touchable smoothness without any skin irritation.",
    contentBg: "Delora използва усъвършенствана интензивна импулсна светлина (IPL), за да изпрати нежни, концентрирани светлинни импулси директно до корена на косъма. Меланинът в косъма абсорбира тази светлина и я превръща в прецизна топлинна енергия, която по естествен начин поставя фоликула в състояние на покой. Чрез безопасно прекъсване на цикъла на растеж, Delora предотвратява бъдещото появяване на косми директно от източника, осигурявайки дълготрайна копринена гладкост без никакво раздразнение.",
  },
  {
    titleEn: "Safe treatment areas & skin comfort",
    titleBg: "Безопасни зони за третиране",
    contentEn: "Delora is designed for full-body confidence and is perfectly safe for both sensitive and larger areas. Enjoy smooth results on your legs, arms, underarms, chest, back, and the bikini line. With our built-in 10°C Sapphire Ice-Cooling window protecting your skin, you can also comfortably treat delicate facial zones below the cheekbones (like the upper lip, chin, and jawline). *Avoid using directly around the eyes, on tattoos, or extremely dark moles.*",
    contentBg: "Delora е създадена за увереност по цялото тяло и е напълно безопасна както за по-големи, така и за силно чувствителни зони. Насладете се на гладки резултати върху краката, ръцете, подмишниците, гърба, корема и бикини линията. Благодарение на вградения 10°C сапфирен прозорец за охлаждане, можете напълно комфортно да третирате и деликатните зони на лицето под скулите (като горна устна, брадичка и челюст). *Избягвайте употреба около очите, върху татуировки или много тъмни бенки.*",
  },
  {
    titleEn: "Expected results & treatment timeline",
    titleBg: "График за резултати и гладка кожа",
    contentEn: "Real smoothness happens in phases. In weeks 1–3, hair will begin to grow back much slower and thinner. By weeks 4–6, you will notice patchy areas with significant hair reduction. By week 8 of consistent weekly sessions, up to 95% of active hair follicles will be completely disabled. To maintain your flawless salon-grade results permanently, simply perform a quick 5-minute touch-up once every 4 to 8 weeks as needed.",
    contentBg: "Истинската гладкост се случва поетапно. През седмици 1–3 растежът на космите се забавя значително, а самите те стават много по-тънки. До седмици 4–6 ще забележите цели зони без окосмяване. Към 8-мата седмица от редовните седмични процедури, до 95% от активните космени фоликули са деактивирани. За да поддържате безупречните си резултати постоянно, е достатъчно да правите бърза 5-минутна процедура веднъж на всеки 4 до 8 седмици.",
  },
  {
    titleEn: "What's included in the box?",
    titleBg: "Какво има в кутията?",
    isBox: true,
  },
];

const ProductHero = () => {
  const { language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const isEn = language === "en";
  const pb = isEn ? primaryBenefit.en : primaryBenefit.bg;
  const sb = isEn ? secondaryBenefits.en : secondaryBenefits.bg;
  const ct = isEn ? costTable.en : costTable.bg;
  const pr = isEn ? pricing.en : pricing.bg;
  const gr = isEn ? guarantee.en : guarantee.bg;

  return (
    <section id="product-hero" className="productHero">
      <div className="container">
        <div className="productHero-grid">
          {/* ── Image Gallery (KEEP) ── */}
          <div className="productHero-gallery">
            <div className="productHero-mainImage">
              {productImages[activeImage].src ? (
                <img
                  src={productImages[activeImage].src}
                  alt={productImages[activeImage].alt}
                  loading="eager"
                />
              ) : (
                <div className="image-placeholder">
                  <span>{isEn ? `Product Image ${activeImage + 1}` : `Изображение ${activeImage + 1}`}</span>
                </div>
              )}
            </div>
            <div className="productHero-thumbStrip">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className={`productHero-thumb ${i === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveImage(i);
                    }
                  }}
                >
                  {img.src ? (
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  ) : (
                    <div className="image-placeholder-thumb">
                      <span>{i + 1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Buy Box (VALUE-FORWARD REORDER) ── */}
          <div className="productHero-buyBox">
            {/* Rating */}
            <div className="productHero-rating">
              <div className="productHero-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4A017" strokeWidth={0} />
                ))}
              </div>
              <span className="productHero-ratingText">4.9/5</span>
              <a href="#reviews" className="productHero-ratingLink">
                {isEn ? "1,000+ reviews" : "1,000+ отзива"}
              </a>
            </div>

            {/* Headline (NEW — value-led) */}
            <h1 className="productHero-title">
              {isEn
                ? "Premium at-home IPL — without the big-brand price"
                : "Премиум IPL епилация у дома — без цената на големите марки"}
            </h1>

            {/* Subheadline (NEW — pre-qualifies audience) */}
            <p className="productHero-subtitle">
              {isEn
                ? "For people who want higher quality than cheap IPL devices, but don't want to pay the Philips or Braun markup."
                : "За хора, които искат по-високо качество от евтините IPL уреди, но не искат да плащат надценката на Philips или Braun."}
            </p>

            {/* Benefits (REORDERED — outcome first) */}
            <ul className="productHero-benefits">
              <li className="productHero-benefitItem productHero-primaryBenefit">
                <Check size={18} className="productHero-benefitIcon" />
                <span>
                  {pb.main}
                  <span className="productHero-benefitSub">{pb.sub}</span>
                </span>
              </li>
              {sb.map((benefit, i) => (
                <li key={i} className="productHero-benefitItem">
                  <Check size={18} className="productHero-benefitIcon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Cost Comparison Table (NEW) */}
            <section className="productHero-costComparison">
              <h3 className="productHero-sectionHeading"><Search size={18} aria-hidden="true" /> {ct.heading}</h3>
              <div className="productHero-tableWrap">
                <table className="productHero-costTable">
                  <thead>
                    <tr>
                      {ct.columns.map((col, i) => (
                        <th key={i} className={i === ct.columns.length - 1 ? "is-delora" : ""}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ct.rows.map((row, r) => (
                      <tr key={r}>
                        <th scope="row">{row.label}</th>
                        {row.cells.map((cell, c) => (
                          <td key={c} className={c === row.cells.length - 1 ? "is-delora" : ""}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="productHero-savings"><Wallet size={18} aria-hidden="true" /> {ct.savings}</p>
            </section>

            {/* Pricing & Financing (NEW) */}
            <section className="productHero-pricing">
              <h3 className="productHero-sectionHeading"><Target size={18} aria-hidden="true" /> {pr.heading}</h3>
              <div className="productHero-priceBlock">
                <span className="productHero-price">€189,00</span>
                <span className="productHero-originalPrice">€399,00</span>
                <span className="productHero-saveBadge">{pr.save}</span>
              </div>
              <p className="productHero-financingLabel">{pr.financingLabel}</p>
              <ul className="productHero-financing">
                {pr.options.map((opt, i) => (
                  <li key={i}><CreditCard size={16} aria-hidden="true" /> {opt}</li>
                ))}
              </ul>
            </section>

            {/* Risk Reversal / Guarantee (NEW) */}
            <section className="productHero-guarantee">
              <h3 className="productHero-guaranteeHeading"><ShieldCheck size={18} aria-hidden="true" /> {gr.heading}</h3>
              <p className="productHero-guaranteeMain">{gr.main}</p>
              <p className="productHero-guaranteeEmphasis">{gr.emphasis}</p>
              <p className="productHero-guaranteeSub">{gr.sub}</p>
            </section>

            {/* Cash-on-Delivery reassurance (Bulgaria: ~55% of buyers prefer COD) */}
            <div className="productHero-cod">
              <Banknote size={20} className="productHero-codIcon" aria-hidden="true" />
              <div>
                <span className="productHero-codTitle">
                  {isEn ? "Pay on delivery" : "Плащане при доставка"}
                </span>
                <span className="productHero-codText">
                  {isEn
                    ? "Pay only when the package arrives. No risk."
                    : "Плащаш само когато пакетът пристигне. Без риск."}
                </span>
              </div>
            </div>

            {/* Trust Strip (EXPANDED — 5 signals) */}
            <div className="productHero-trustRows">
              {trustRows.map((item, i) => (
                <div key={i} className="productHero-trustItem">
                  <item.icon size={16} className="productHero-trustIcon" />
                  <span>{isEn ? item.en : item.bg}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA (NEW) */}
            <div className="productHero-ctas">
              <Button variant="primary" size="lg" href="https://checkout.delora.com">
                <ShoppingCart size={18} aria-hidden="true" style={{ marginRight: '8px', verticalAlign: 'text-bottom' }} />
                {isEn
                  ? "Add to cart — get your 90-day trial"
                  : "Добави в количката — получи 90-дневна пробна версия"}
              </Button>
              <Button variant="outline" size="lg" href="#consultation">
                <ClipboardList size={18} aria-hidden="true" style={{ marginRight: '8px', verticalAlign: 'text-bottom' }} />
                {isEn
                  ? "Not sure — start with the quiz (2 min)"
                  : "Не съм сигурна — начни с викторинката (2 мин)"}
              </Button>
            </div>

            {/* Stateful Falling Menus (Accordions — kept below fold) */}
            <div className="productHero-accordions">
              {accordionData.map((item, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <div key={idx} className="productHero-accordionItem">
                    <button
                      className="productHero-accordionHeader"
                      onClick={() => setOpenAccordion(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{isEn ? item.titleEn : item.titleBg}</span>
                      <span className={`productHero-accordionIcon ${isOpen ? "open" : ""}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div className={`productHero-accordionContent ${isOpen ? "open" : ""}`}>
                      <div className="productHero-accordionInner">
                        {item.isBox ? (
                          <div className="productHero-boxGrid">
                            {[
                              { icon: Sparkles, labelEn: "Delora Elite IPL Device", labelBg: "Delora Elite IPL Уред" },
                              { icon: Plug, labelEn: "Power Adaptor Cord", labelBg: "Захранващ кабел" },
                              { icon: Glasses, labelEn: "Protective Eyewear", labelBg: "Защитни очила" },
                              { icon: Scissors, labelEn: "Precision Razor", labelBg: "Прецизна самобръсначка" },
                              { icon: Package, labelEn: "Premium Storage Pouch", labelBg: "Премиум калъф" },
                              { icon: BookOpen, labelEn: "Instruction Manual", labelBg: "Ръководство" },
                            ].map((boxItem, bIdx) => (
                              <div key={bIdx} className="productHero-boxItem">
                                <div className="productHero-boxIconWrapper">
                                  <boxItem.icon size={15} className="productHero-boxIcon" />
                                </div>
                                <span className="productHero-boxLabel">
                                  {isEn ? boxItem.labelEn : boxItem.labelBg}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p dangerouslySetInnerHTML={{ __html: isEn ? item.contentEn!.replace(/\*(.*?)\*/g, "<em>$1</em>") : item.contentBg!.replace(/\*(.*?)\*/g, "<em>$1</em>") }} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
