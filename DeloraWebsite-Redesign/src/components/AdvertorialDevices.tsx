"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Footer from "./Footer";
import { CreditCard, Truck, ShieldCheck, BadgeCheck } from "lucide-react";
import "./Footer.css";
import "./Advertorial.css";

/**
 * Cold-traffic advertorial / pre-sell page (/ipl-vs-devices).
 *
 * Built in the Delora brand DNA (amethyst/lavender, Cormorant headings, soft cards).
 */

const DEVICE_HREF = "/#product-hero";
const QUIZ_HREF = "/#consultation";

function Placeholder({
  id,
  label,
  minH,
  maxW,
  className = "",
  src,
}: {
  id: string;
  label: string;
  minH: number;
  maxW?: number;
  className?: string;
  src?: string;
}) {
  const style: React.CSSProperties = { ["--ph-h" as string]: `${minH}px` } as React.CSSProperties;
  if (maxW) {
    style.maxWidth = maxW;
    style.marginLeft = "auto";
    style.marginRight = "auto";
  }
  return (
    <div id={id} className={`visual-placeholder ${className}`} style={style}>
      {src ? (
        <img
          src={src}
          alt={label}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
        />
      ) : (
        <span className="label">{label}</span>
      )}
    </div>
  );
}

const comparison = {
  columns: ["", "Евтиния IPL (€89)", "Delora (€189)", "Премиумния IPL (€349)"],
  rows: [
    { label: "Цена", cells: ["€89", "€189", "€349"] },
    { label: "Охлаждане", cells: ["25°C (риск)", "15°C (безопасно)", "15°C (безопасно)"] },
    { label: "Енергия (J/cm²)", cells: ["15 (слабо)", "26 (клинично)", "27 (клинично+)"] },
    { label: "Импулси", cells: ["50,000 (умира за 2г)", "1,000,000 (20г+)", "1,000,000 (20г+)"] },
    { label: "Гаранция", cells: ["30 дни", "90 дни", "1–2 години"] },
    { label: "Реален живот", cells: ["Макс 2 години", "20+ години", "20+ години"] },
    { label: "Цена на година", cells: ["€45/година (купи 5x)", "€9/година", "€17/година"] },
    { label: "Премия за дизайн", cells: ["Няма", "Няма", "€160 за 1 J/cm²"] }
  ],
};

const faqItems = [
  {
    q: "Евтиния IPL с 15J/cm² работи ли?",
    a: "Да, технически. Но 'работи' е отговор. Nood използва 18J/cm². Ulike използва 26J/cm². Braun използва 27J/cm². Защо? Защото по-висока енергия = по-доследни резултати, особенно на тъмна кожа или фина коса. Евтиния 15J/cm² работи само на идеална комбинация (светла кожа + тъмна коса). Всичко друго? Разочарование.",
  },
  {
    q: "Но охлаждането... наистина ли е разлика?",
    a: "Да. 25°C vs 15°C е разлика между 'това пързалка' и 'болно.' Евтините устройства пък не охлаждат добре защото охлаждането е скъпо. Резултат: Посетителите спират да го използват защото боли. Или изгаряния. И тогава дават възврат.",
  },
  {
    q: "€89 устройство, което трае 2 години... така ли е?",
    a: "По-скоро 18–24 месеца. Евтина пластмаса + слабо охлаждане = двигател отказва по-бързо. Или сензорът на охлаждането умира. Тогава 'замени, не поправи.'",
  },
  {
    q: "Но 1,000,000 импулса... мне ли е още толкова много?",
    a: "За Delora? 1,000,000 импулса = 40+ години на пълна употреба. За евтин €89? 50,000 импулса = 1–2 години, макар че батерията или охлаждането ще умрат първо.",
  },
  {
    q: "Може ли €349 премиум IPL наистина е по-добро?",
    a: "Почти идентично на Delora. +1J/cm² енергия (невъзможно забелязване). Същото охлаждане. Същата издържане. Но €160 повече. Защо? Дизайн. Бренд. Лукс. Ако харесваш € extra за красивото кутие, купи го. Ако искаш резултатите, Delora ще направи 99% от работата за половин цена.",
  },
  {
    q: "Гаранция? Наистина ли е проблем?",
    a: "€89: 30 дни (ако го разбиеш на ден 31, поздрав). Delora: 90 дни (достатъчно да видиш резултати). €349: 1–2 години (разумно). Ако девайсът умира след гаранцията, с евтиния няма поддръжка. С Delora? Ремонт обикновено възможен.",
  },
];

const trustBadges = [
  { Icon: CreditCard, label: "Плащане при доставка" },
  { Icon: Truck, label: "Безплатна доставка" },
  { Icon: ShieldCheck, label: "90 дни гаранция" },
  { Icon: BadgeCheck, label: "CE маркирано" },
];

const AdvertorialDevices = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div className="adv">
      <header className="adv-header">
        <div className="adv-headerInner">
          <Link href="/" className="adv-logo">
            <img src="/logo.png" alt="Delora" className="adv-logoImg" />
          </Link>
          <Button href={DEVICE_HREF} variant="primary" size="sm">
            Виж устройството
          </Button>
        </div>
      </header>

      {/* ───────────────── SECTION 1 — HERO + PROBLEM FRAME ───────────────── */}
      <section className="adv-section adv-section--hero">
        <div className="adv-wrap adv-text">
          <h1 className="adv-h1">
            IPL устройства: €89 боклук срещу €300+ люкс.<br/>
            Ние сме нещо друго.
          </h1>
          <p className="adv-sub">
            Евтините не работят. Скъпите са пърелюкс. Ако искаш резултати, трябва Goldilocks.
          </p>
          <div className="adv-ctaRow">
            <Button href={DEVICE_HREF} variant="primary" size="lg">
              Виж устройството
            </Button>
          </div>
        </div>
        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-heroMedia">
            <Placeholder
              id="visual-hero"
              minH={460}
              label="HERO VIDEO/GIF — full-width, ~500px · Split-screen: Cheap device (breaks), Premium (luxe unboxing), Delora (just works)."
            />
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 2 — THE PROBLEM (Two enemies) ───────────────── */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Дилемата на IPL: бюджет срещу дизайн, качество срещу цена</h2>
        </div>
        <div className="adv-wrap">
          <p className="adv-body"><strong>Вариант 1: Евтиния IPL (€89–€120)</strong></p>
          <p className="adv-body">
            'За тази цена, защо не?' Точно.<br/>
            • Слабо охлаждане (болка, риск от изгаряния)<br/>
            • Низко J/cm² енергия (не работи добре, особенно на тъмна кожа)<br/>
            • Разбиваемо (пластмаса, не издържа)<br/>
            • Слаба гаранция (30 дни, ако имаш късмет)<br/>
            • За 2 години? Купи втори. Или трети.
          </p>
          <p className="adv-body">За 10 години: €300–€600 в подмени + разочарование.</p>
          <hr />
          
          <p className="adv-body"><strong>Вариант 2: Премиумния IPL (€300–€399)</strong></p>
          <p className="adv-body">
            Лукс. Но зачем?<br/>
            • Красиво дизайнирано (за €300 повече...)<br/>
            • Бренд премия (Ulike, Braun, някои други)<br/>
            • Технически почти идентично на по-евтиния (26–28J/cm²)<br/>
            • Но €200 повече за...дизайн? Логото?<br/>
            • Обработка: същата IPL технология, различен корпус
          </p>
          <p className="adv-body">За 10 години: €300–€399 + непотребна цена.</p>
          <hr />

          <p className="adv-body">
            Общата проблем? Избор е между:<br/>
            — Евтин и ненадежден<br/>
            — Скъп и скъп за нищо
          </p>
          <p className="adv-body"><strong>Няма среда. Докато сега.</strong></p>
        </div>
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-enemies-devices"
            minH={380}
            label="THREE-COLUMN COMPARISON — ~400px · LEFT: Budget IPL (dingy). CENTER: Delora (glow/balanced). RIGHT: Premium IPL (sleek/excessive)."
          />
        </div>
      </section>

      {/* ───────────────── SECTION 3 — THE SWITCH (Delora as the escape) ───────────────── */}
      <section className="adv-section">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Delora е IPL за хората, които мислят логично</h2>
        </div>
        <div className="adv-wrap">
          <p className="adv-body">
            Дешевите девайси не работят, защото изрязват разходи везде:<br/>
            • Слабо охлаждане → БОЛЬ → повече пари на лекар<br/>
            • Ниска енергия → НАМАЛЕНИ РЕЗУЛТАТИ → разочарование<br/>
            • Лошо качество → РАЗБИВАНЕ → купи отново
          </p>
          <p className="adv-body">
            Скъпите девайси работят, но излишно:<br/>
            • €300+ за същата технология като €189 модел<br/>
            • Премия за дизайн, не за работоспособност<br/>
            • Ако работи същото, защо плащаш 2x повече?
          </p>
          <p className="adv-body">
            Delora? €189. Промишлено охлаждане (26J/cm², достатъчно). 
            Солидна гаранция (90 дни). Работи точно както си го заслужава.
          </p>
          <p className="adv-body">
            <strong>Математика:</strong><br/>
            • Евтин: €89 × 3 (разбиване + подмени) = €267 + разочарование<br/>
            • Скъп: €349 + €300 премия за което? Дизайн<br/>
            • Delora: €189. Един път. Работи добре.
          </p>
        </div>
        <div className="adv-wrap">
          <Placeholder
            id="visual-mechanism-devices"
            minH={460}
            maxW={640}
            label="ANIMATED DIAGRAM — ~600×500px · IPL process + Caption: 'IPL teknology е еднаква във всички девайси. Разликата е охлаждането...'"
          />
        </div>
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-tech-specs"
            minH={300}
            label="TECHNICAL SPEC COMPARISON — ~500x300px · Bar chart: Budget vs Delora vs Premium on cooling, energy, flash count, durability."
          />
        </div>
      </section>

      {/* ───────────────── SECTION 4 — SIDE-BY-SIDE COMPARISON (THE MATH) ───────────────── */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">€89 срещу €189 срещу €349. Какво плащаш, наистина?</h2>
          <p className="adv-sub adv-sub--tight">Всички работят с IPL. Но разликата е експоненциална.</p>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-tableWrap">
            <table className="adv-table">
              <thead>
                <tr>
                  {comparison.columns.map((col, i) => (
                    <th
                      key={i}
                      className={
                        i === 2
                          ? "adv-isDelora"
                          : i === 0
                            ? ""
                            : "adv-isEnemy"
                      }
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, r) => (
                  <tr key={r}>
                    <th scope="row">{row.label}</th>
                    {row.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={ci === 1 ? "adv-isDelora" : "adv-isEnemy"}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <div id="visual-math" className="adv-mathCallout">
            <p className="adv-mathDesc">
              €89 устройство се чупи за 2г. Купуваш го 5 пъти = €445 + разочарование.<br/>
              €349 устройство издържа 20г, €160 от които са за дизайн премия.<br/>
              <strong>Delora: €189, издържа 20г, нула дизайн премия.</strong>
            </p>
          </div>
        </div>

        <div className="adv-wrap adv-ctaRow">
          <Button href={DEVICE_HREF} variant="primary" size="lg">
            Виж устройството
          </Button>
        </div>
      </section>

      {/* ───────────────── SECTION 5 — OBJECTIONS (HONEST FAQ) ───────────────── */}
      <section className="adv-section">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">"Евтиния IPL е достатъчен, щом работи." Е, технически...</h2>
          <p className="adv-sub adv-sub--tight">
            Истината е по-сложна. Ето защо евтините по-лошо работят.
          </p>
        </div>

        <div className="adv-wrap">
          <Placeholder
            id="visual-calculator"
            minH={250}
            maxW={400}
            label="INTERACTIVE CALCULATOR — ~400x250px · Cost per year: Budget €45/y, Delora €9/y, Premium €17/y."
          />
        </div>

        <div className="adv-wrap">
          <div className="adv-faqList">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`adv-faqItem ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="adv-faqQuestion"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="adv-faqChevron" aria-hidden="true">
                      ⌄
                    </span>
                  </button>
                  <div className="adv-faqAnswer" style={{ maxHeight: isOpen ? "600px" : "0px" }}>
                    <p>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 6 — REAL PEOPLE (SOCIAL PROOF) ───────────────── */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Жени, които откритичкват евтиния IPL и намерили Delora</h2>
          <p className="adv-rating">
            <span className="adv-ratingStars" aria-hidden="true">
              ★★★★★
            </span>{" "}
            4.9/5 — 17 реални отзива
          </p>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-carousel">
            <button
              type="button"
              className="adv-carouselNav adv-carouselNav--prev"
              onClick={() => scrollCarousel(-1)}
              aria-label="Предишен отзив"
            >
              ‹
            </button>
            <div className="adv-carouselTrack" ref={carouselRef} id="visual-carousel">
              {[
                { n: 1, lbl: "ПРЕДИ | СЛЕД — Жена, която спря евтин IPL", src: "/delora-photos-clean/delora_before_after_02.webp" },
                { n: 2, lbl: "ПРЕДИ | СЛЕД — Сравнение с премиум бранд", src: "/delora-photos-clean/delora_before_after_05.webp" },
                { n: 3, lbl: "ОТЗИВ — За издръжливостта на Delora", src: "/delora-photos-clean/delora_before_after_03.webp" },
                { n: 4, lbl: "ВИДЕО — 15-30 sec authentic testimonial" }
              ].map((slide) => (
                <div className="adv-slide" key={slide.n}>
                  <Placeholder
                    id={`visual-carousel-slide-${slide.n}`}
                    minH={420}
                    label={`Слайд ${slide.n}/4: ${slide.lbl}`}
                    src={slide.src}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="adv-carouselNav adv-carouselNav--next"
              onClick={() => scrollCarousel(1)}
              aria-label="Следващ отзив"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 7 — THE OFFER + CTA ───────────────── */}
      <section className="adv-section adv-section--offer">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Средният избор. За хората, които мислят.</h2>
          <p className="adv-body">
            €89 не работи. €349 е превишена.<br/>
            €189? Това е точката.
          </p>
          <p className="adv-body">
            Охлаждане. Энергия. Гаранция. Издържане.<br/>
            За един път. На правилната цена.
          </p>
        </div>

        <div className="adv-wrap">
          <Placeholder
            id="visual-product"
            minH={400}
            maxW={300}
            label="PRODUCT HERO SHOT — ~300x400px"
            src="/delora-photos-clean/delora_studio_product_01.webp"
          />
        </div>

        <div className="adv-wrap adv-ctaRow adv-ctaRow--stack">
          <Button href={DEVICE_HREF} variant="primary" size="lg">
            Виж Delora →
          </Button>
          <Button href="/tech-specs" variant="outline" size="md">
            Сравни с други модели
          </Button>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <ul id="visual-trust" className="adv-trust">
            {trustBadges.map((b, i) => (
              <li key={i} className="adv-trustBadge">
                <span className="adv-trustIcon" aria-hidden="true">
                  <b.Icon size={16} strokeWidth={2.5} />
                </span>
                <span>{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvertorialDevices;
