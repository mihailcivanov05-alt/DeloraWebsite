"use client";

import React, { useState } from "react";
import {
  Check,
  Star,
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headset,
  Snowflake,
  Sparkles,
  Plug,
  Glasses,
  Scissors,
  Package,
  BookOpen,
  Search,
  Wallet,
  Target,
  CreditCard,
  ShoppingCart,
  ClipboardList,
  Banknote,
} from "lucide-react";
import Button from "./Button";
import "./ProductHero.css";

const productImages = [
  { src: "/Photoshoots/Other/hf_20260524_124514_a03f97aa-f0d5-43b8-b0f5-0df9a7f7dd6f.png", alt: "Delora Elite IPL Устройство — изглед отпред" },
  { src: "/Photoshoots/Arm/hf_20260524_124008_fc1ae104-e9e0-467b-8d6b-d6142ef20ae3.webp", alt: "Delora Elite IPL Устройство — третиране на ръка" },
  { src: "/Photoshoots/Leg/hf_20260524_110654_0630dd29-3ad6-454b-b3f1-3051b2aef3f6.webp", alt: "Delora Elite IPL Устройство — третиране на крак" },
  { src: "/Photoshoots/Face/hf_20260524_111557_bfe75d02-6a6a-403b-93b5-5c2056a063f1.webp", alt: "Delora Elite IPL Устройство — третиране на лице" },
  { src: "/Photoshoots/Other/hf_20260525_091820_21b9328b-85fb-4937-be10-4838412f1ec8.webp", alt: "Delora Elite IPL Устройство — третиране на бикини зона" },
];

/* ── Outcome first, then comfort → ease → durability ── */
const primaryBenefit = {
  main: "До 95% намаляване на окосмяването за 12 седмици",
  sub: "(При редовна употреба — реални резултати от нашите потребители)",
};

const secondaryBenefits = [
  "Без болка — сапфирено охлаждане до 15°C при всеки импулс",
  "Цяло тяло за 25 минути (лесно и удобно)",
  "1,000,000 импулса — неограничена употреба за 30+ години",
];

/* ── Cost comparison table ── */
const costTable = {
  heading: "Защо Delora, а не €89 IPL или салонен лазер?",
  columns: ["", "Салонен лазер", "Евтини IPL уреди (€80–€90)", "Delora"],
  rows: [
    { label: "Цена", cells: ["€2,000–€3,000/година", "€80–€90", "€189 (еднократно)"] },
    { label: "10 години", cells: ["€20,000–€30,000", "€800–€900", "€189"] },
    { label: "Охлаждане", cells: ["Да", "Обикновено не", "Да — сапфирено"] },
    { label: "Гарантирани резултати", cells: ["Да", "Непредсказуеми", "Да или възвращане"] },
  ],
  savings: "Спестяваш €19,811 – €29,811 за едно десетилетие",
};

/* ── Pricing & financing ── */
const pricing = {
  heading: "Цена и начин на плащане",
  financingLabel: "Или в месечни вноски:",
  options: ["3 × €63/месец (Klarna)", "Всички кредитни карти / PayPal", "Наложен платеж (COD)"],
  save: "Спести 53%",
};

/* ── Risk reversal / guarantee ── */
const guarantee = {
  heading: "Пробвай без риск — 90 дни",
  main: "Ние поемаме 100% от риска. Ако Delora не достави 95% намаляване на окосмяването, което виждаш от други потребители, ти НЕ плащаш. Точка. Пълно възстановяване в рамките на 90 дни. Без въпроси. Без скрити условия.",
  emphasis: "Залагаме на устройството — не на теб.",
  sub: "(Ще видиш резултати — 17 от 18 потребители съобщават видими резултати след 4–8 седмици редовна употреба. Ние знаем, че работи.)",
};

/* ── Expanded trust strip (5 signals) ── */
const trustRows = [
  { icon: Truck, label: "Безплатна експресна доставка" },
  { icon: ShieldCheck, label: "90-дневна гаранция за връщане" },
  { icon: BadgeCheck, label: "CE маркирано & дерматологично одобрено" },
  { icon: Headset, label: "24/7 клиентска поддръжка (България)" },
  { icon: Snowflake, label: "Сапфирено охлаждане верифицирано" },
];

const accordionData = [
  {
    title: "Как работи IPL технологията на Delora?",
    content:
      "Delora използва усъвършенствана интензивна импулсна светлина (IPL), за да изпрати нежни, концентрирани светлинни импулси директно до корена на косъма. Меланинът в косъма абсорбира тази светлина и я превръща в прецизна топлинна енергия, която по естествен начин поставя фоликула в състояние на покой. Чрез безопасно прекъсване на цикъла на растеж, Delora предотвратява бъдещото появяване на косми директно от източника, осигурявайки дълготрайна копринена гладкост без никакво раздразнение.",
  },
  {
    title: "Безопасни зони за третиране",
    content:
      "Delora е създадена за увереност по цялото тяло и е напълно безопасна както за по-големи, така и за силно чувствителни зони. Насладете се на гладки резултати върху краката, ръцете, подмишниците, гърба, корема и бикини линията. Благодарение на вградения 10°C сапфирен прозорец за охлаждане, можете напълно комфортно да третирате и деликатните зони на лицето под скулите (като горна устна, брадичка и челюст). *Избягвайте употреба около очите, върху татуировки или много тъмни бенки.*",
  },
  {
    title: "График за резултати и гладка кожа",
    content:
      "Истинската гладкост се случва поетапно. През седмици 1–3 растежът на космите се забавя значително, а самите те стават много по-тънки. До седмици 4–6 ще забележите цели зони без окосмяване. Към 8-мата седмица от редовните седмични процедури, до 95% от активните космени фоликули са деактивирани. За да поддържате безупречните си резултати постоянно, е достатъчно да правите бърза 5-минутна процедура веднъж на всеки 4 до 8 седмици.",
  },
  {
    title: "Какво има в кутията?",
    isBox: true,
  },
];

const boxItems = [
  { icon: Sparkles, label: "Delora Elite IPL Уред" },
  { icon: Plug, label: "Захранващ кабел" },
  { icon: Glasses, label: "Защитни очила" },
  { icon: Scissors, label: "Прецизна самобръсначка" },
  { icon: Package, label: "Премиум калъф" },
  { icon: BookOpen, label: "Ръководство" },
];

const ProductHero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <section id="product-hero" className="productHero">
      <div className="container">
        <div className="productHero-grid">
          {/* ── Image Gallery ── */}
          <div className="productHero-gallery">
            <div className="productHero-mainImage">
              <img
                src={productImages[activeImage].src}
                alt={productImages[activeImage].alt}
                loading="eager"
              />
            </div>
            <div className="productHero-thumbStrip">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className={`productHero-thumb ${i === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Виж ${img.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveImage(i);
                    }
                  }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Buy Box ── */}
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
                1,000+ отзива
              </a>
            </div>

            {/* Headline */}
            <h1 className="productHero-title">
              Премиум IPL епилация у дома — без цената на големите марки
            </h1>

            {/* Subheadline */}
            <p className="productHero-subtitle">
              За хора, които искат по-високо качество от евтините IPL уреди, но не искат да плащат надценката на Philips или Braun.
            </p>

            {/* Benefits */}
            <ul className="productHero-benefits">
              <li className="productHero-benefitItem productHero-primaryBenefit">
                <Check size={18} className="productHero-benefitIcon" />
                <span>
                  {primaryBenefit.main}
                  <span className="productHero-benefitSub">{primaryBenefit.sub}</span>
                </span>
              </li>
              {secondaryBenefits.map((benefit, i) => (
                <li key={i} className="productHero-benefitItem">
                  <Check size={18} className="productHero-benefitIcon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Cost Comparison Table */}
            <section className="productHero-costComparison">
              <h3 className="productHero-sectionHeading">
                <Search size={18} aria-hidden="true" /> {costTable.heading}
              </h3>
              <div className="productHero-tableWrap">
                <table className="productHero-costTable">
                  <thead>
                    <tr>
                      {costTable.columns.map((col, i) => (
                        <th key={i} className={i === costTable.columns.length - 1 ? "is-delora" : ""}>
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {costTable.rows.map((row, r) => (
                      <tr key={r}>
                        <th scope="row">{row.label}</th>
                        {row.cells.map((cell, c) => (
                          <td key={c} className={c === row.cells.length - 1 ? "is-delora" : ""}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="productHero-savings">
                <Wallet size={18} aria-hidden="true" /> {costTable.savings}
              </p>
            </section>

            {/* Pricing & Financing */}
            <section className="productHero-pricing">
              <h3 className="productHero-sectionHeading">
                <Target size={18} aria-hidden="true" /> {pricing.heading}
              </h3>
              <div className="productHero-priceBlock">
                <span className="productHero-price">€189,00</span>
                <span className="productHero-originalPrice">€399,00</span>
                <span className="productHero-saveBadge">{pricing.save}</span>
              </div>
              <p className="productHero-financingLabel">{pricing.financingLabel}</p>
              <ul className="productHero-financing">
                {pricing.options.map((opt, i) => (
                  <li key={i}>
                    <CreditCard size={16} aria-hidden="true" /> {opt}
                  </li>
                ))}
              </ul>
            </section>

            {/* Risk Reversal / Guarantee */}
            <section className="productHero-guarantee">
              <h3 className="productHero-guaranteeHeading">
                <ShieldCheck size={18} aria-hidden="true" /> {guarantee.heading}
              </h3>
              <p className="productHero-guaranteeMain">{guarantee.main}</p>
              <p className="productHero-guaranteeEmphasis">{guarantee.emphasis}</p>
              <p className="productHero-guaranteeSub">{guarantee.sub}</p>
            </section>

            {/* Cash-on-Delivery reassurance */}
            <div className="productHero-cod">
              <Banknote size={20} className="productHero-codIcon" aria-hidden="true" />
              <div>
                <span className="productHero-codTitle">Плащане при доставка</span>
                <span className="productHero-codText">
                  Плащаш само когато пакетът пристигне. Без риск.
                </span>
              </div>
            </div>

            {/* Trust Strip (5 signals) */}
            <div className="productHero-trustRows">
              {trustRows.map((item, i) => (
                <div key={i} className="productHero-trustItem">
                  <item.icon size={16} className="productHero-trustIcon" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="productHero-ctas">
              <Button variant="primary" size="lg" href="#">
                <ShoppingCart
                  size={18}
                  aria-hidden="true"
                  style={{ marginRight: "8px", verticalAlign: "text-bottom" }}
                />
                Добави в количката — получи 90-дневна пробна версия
              </Button>
              <Button variant="outline" size="lg" href="#consultation">
                <ClipboardList
                  size={18}
                  aria-hidden="true"
                  style={{ marginRight: "8px", verticalAlign: "text-bottom" }}
                />
                Не съм сигурна — начни с викторинката (2 мин)
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
                      <span>{item.title}</span>
                      <span className={`productHero-accordionIcon ${isOpen ? "open" : ""}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div className={`productHero-accordionContent ${isOpen ? "open" : ""}`}>
                      <div className="productHero-accordionInner">
                        {item.isBox ? (
                          <div className="productHero-boxGrid">
                            {boxItems.map((boxItem, bIdx) => (
                              <div key={bIdx} className="productHero-boxItem">
                                <div className="productHero-boxIconWrapper">
                                  <boxItem.icon size={15} className="productHero-boxIcon" />
                                </div>
                                <span className="productHero-boxLabel">{boxItem.label}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.content!.replace(/\*(.*?)\*/g, "<em>$1</em>"),
                            }}
                          />
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
