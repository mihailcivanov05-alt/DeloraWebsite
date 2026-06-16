"use client";

import React, { useState } from "react";
import { Check, Star, Truck, ShieldCheck, BadgeCheck, CircleCheck, Sparkles, Plug, Glasses, Scissors, Package, BookOpen } from "lucide-react";
import Button from "./Button";
import "./ProductHero.css";

const productImages = [
  { src: "/Photoshoots/Other/hf_20260524_121655_0eadf972-f9fc-443d-9bc9-029db7b2993c.png", alt: "Delora Elite IPL Устройство — изглед отпред" },
  { src: "/Photoshoots/Arm/hf_20260524_124008_fc1ae104-e9e0-467b-8d6b-d6142ef20ae3.png", alt: "Delora Elite IPL Устройство — третиране на ръка" },
  { src: "/Photoshoots/Leg/hf_20260524_110654_0630dd29-3ad6-454b-b3f1-3051b2aef3f6.png", alt: "Delora Elite IPL Устройство — третиране на крак" },
  { src: "/Photoshoots/Face/hf_20260524_111557_bfe75d02-6a6a-403b-93b5-5c2056a063f1.png", alt: "Delora Elite IPL Устройство — третиране на лице" },
  { src: "/Photoshoots/Other/hf_20260525_091820_21b9328b-85fb-4937-be10-4838412f1ec8.png", alt: "Delora Elite IPL Устройство — третиране на бикини зона" },
];

const benefits = [
  "До 95% намаление на окосмяването за 8 седмици",
  "10°C Сапфирено ледено охлаждане за напълно безболезнени сесии",
  "AI Смарт сензор за кожата (сканира тена 80 пъти/сек)",
  "1,000,000 импулса за цял живот (30+ години употреба)",
  "Бърз 0.5сек интервал за 15-минутна процедура на цяло тяло",
  "Дерматологично тествано и клинично одобрено",
];

const trustRows = [
  { icon: Truck, label: "Безплатна експресна доставка" },
  { icon: ShieldCheck, label: "90-дневна гаранция за връщане" },
  { icon: BadgeCheck, label: "FDA одобрена технология" },
  { icon: CircleCheck, label: "CE маркировка" },
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
                  onKeyDown={(e) => e.key === "Enter" && setActiveImage(i)}
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

            {/* Title */}
            <h1 className="productHero-title">Delora Elite IPL Устройство</h1>

            {/* Subtitle */}
            <p className="productHero-subtitle">
              Луксозна IPL фотоепилация за гладка кожа като след салон у дома.
            </p>

            {/* Price */}
            <div className="productHero-priceBlock">
              <span className="productHero-price">€229</span>
              <span className="productHero-originalPrice">€399</span>
              <span className="productHero-saveBadge">Спести 43%</span>
            </div>

            {/* Benefits */}
            <ul className="productHero-benefits">
              {benefits.map((benefit, i) => (
                <li key={i} className="productHero-benefitItem">
                  <Check size={18} className="productHero-benefitIcon" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA (inert placeholder — no backend checkout) */}
            <div className="productHero-ctas">
              <Button variant="primary" size="lg" href="#">
                Добави в количката
              </Button>
            </div>

            {/* Stateful Falling Menus (Accordions) */}
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

            {/* Trust Rows */}
            <div className="productHero-trustRows">
              {trustRows.map((item, i) => (
                <div key={i} className="productHero-trustItem">
                  <item.icon size={16} className="productHero-trustIcon" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
