"use client";

import React, { useState } from "react";
import { Check, Star, Truck, ShieldCheck, BadgeCheck, CircleCheck, Sparkles, Plug, Glasses, Scissors, Package, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./ProductHero.css";

const productImages = [
  { src: "/Photoshoots/Other/hf_20260524_121655_0eadf972-f9fc-443d-9bc9-029db7b2993c.png", alt: "Delora Elite IPL Device — front view" },
  { src: "/Photoshoots/Arm/hf_20260524_124008_fc1ae104-e9e0-467b-8d6b-d6142ef20ae3.png", alt: "Delora Elite IPL Device — arm treatment view" },
  { src: "/Photoshoots/Leg/hf_20260524_110654_0630dd29-3ad6-454b-b3f1-3051b2aef3f6.png", alt: "Delora Elite IPL Device — leg treatment view" },
  { src: "/Photoshoots/Face/hf_20260524_111557_bfe75d02-6a6a-403b-93b5-5c2056a063f1.png", alt: "Delora Elite IPL Device — facial treatment view" },
  { src: "/Photoshoots/Bikini Area/hf_20260524_123307_6e6a4860-3e73-40e2-b50f-4b00f3385008.png", alt: "Delora Elite IPL Device — bikini area treatment view" },
];

const benefits = [
  "Up to 95% hair reduction in 8 weeks",
  "10°C Sapphire ice-cooling for 100% painless sessions",
  "AI Smart Skin Sensor (scans skin tone 80x/second)",
  "1,000,000 lifetime flashes (30+ years of use)",
  "Fast 0.5s flash interval for 15-min full-body treatment",
  "Dermatologist tested & clinically approved",
];

const trustRows = [
  { icon: Truck, label: "Free Express Shipping" },
  { icon: ShieldCheck, label: "90-Day Money Back Guarantee" },
  { icon: BadgeCheck, label: "FDA Cleared Technology" },
  { icon: CircleCheck, label: "CE Marked" },
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

  return (
    <section id="product-hero" className="productHero">
      <div className="container">
        <div className="productHero-grid">
          {/* ── Image Gallery ── */}
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
                  <span>{language === "en" ? `Product Image ${activeImage + 1}` : `Изображение ${activeImage + 1}`}</span>
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
                  onKeyDown={(e) => e.key === "Enter" && setActiveImage(i)}
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
                {language === "en" ? "1,000+ reviews" : "1,000+ отзива"}
              </a>
            </div>

            {/* Title */}
            <h1 className="productHero-title">
              {language === "en" ? "Delora Elite IPL Device" : "Delora Elite IPL Устройство"}
            </h1>

            {/* Subtitle */}
            <p className="productHero-subtitle">
              {language === "en"
                ? "Luxury IPL photoepilation for salon-smooth skin at home."
                : "Луксозна IPL фотоепилация за гладка кожа като след салон у дома."}
            </p>

            {/* Price */}
            <div className="productHero-priceBlock">
              <span className="productHero-price">€229</span>
              <span className="productHero-originalPrice">€399</span>
              <span className="productHero-saveBadge">
                {language === "en" ? "Save 43%" : "Спести 43%"}
              </span>
            </div>

            {/* Benefits */}
            <ul className="productHero-benefits">
              {(language === "en"
                ? benefits
                : [
                    "До 95% намаление на окосмяването за 8 седмици",
                    "10°C Сапфирено ледено охлаждане за напълно безболезнени сесии",
                    "AI Смарт сензор за кожата (сканира тена 80 пъти/сек)",
                    "1,000,000 импулса за цял живот (30+ години употреба)",
                    "Бърз 0.5сек интервал за 15-минутна процедура на цяло тяло",
                    "Дерматологично тествано и клинично одобрено",
                  ]
              ).map((benefit, i) => (
                <li key={i} className="productHero-benefitItem">
                  <Check size={18} className="productHero-benefitIcon" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="productHero-ctas">
              <Button variant="primary" size="lg" href="https://checkout.delora.com">
                {language === "en" ? "Add to Cart" : "Добави в количката"}
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
                      <span>{language === "en" ? item.titleEn : item.titleBg}</span>
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
                                  {language === "en" ? boxItem.labelEn : boxItem.labelBg}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p dangerouslySetInnerHTML={{ __html: language === "en" ? item.contentEn!.replace(/\*(.*?)\*/g, "<em>$1</em>") : item.contentBg!.replace(/\*(.*?)\*/g, "<em>$1</em>") }} />
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
                  <span>
                    {language === "en"
                      ? item.label
                      : [
                          "Безплатна експресна доставка",
                          "90-дневна гаранция за връщане",
                          "FDA одобрена технология",
                          "CE маркировка",
                        ][i]}
                  </span>
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
