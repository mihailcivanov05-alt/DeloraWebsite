"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Footer from "./Footer";
import { CreditCard, Truck, ShieldCheck, BadgeCheck } from "lucide-react";
import "./Footer.css";
import "./Advertorial.css";

/**
 * Cold-traffic advertorial / pre-sell page (/ipl-vs-traditional).
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
}: {
  id: string;
  label: string;
  minH: number;
  maxW?: number;
  className?: string;
}) {
  const style: React.CSSProperties = { ["--ph-h" as string]: `${minH}px` } as React.CSSProperties;
  if (maxW) {
    style.maxWidth = maxW;
    style.marginLeft = "auto";
    style.marginRight = "auto";
  }
  return (
    <div id={id} className={`visual-placeholder ${className}`} style={style}>
      <span className="label">{label}</span>
    </div>
  );
}

const comparison = {
  columns: ["", "Салон лазер", "Восък", "Бръснене", "Delora"],
  rows: [
    { label: "Цена/сесия", cells: ["€80–€150", "€50–€100", "€5–€10", "€189 веднъж"] },
    {
      label: "Колко често",
      cells: ["Всеки месец. Завинаги.", "На 4–6 седмици. Завинаги.", "На 2–3 дни. Завинаги.", "1–2x/седм. (12 седм.), после месечно"],
    },
    {
      label: "Резултат трае",
      cells: ["4–6 седмици", "1–2 седмици", "1–3 дни", "Месеци (след 12-седмичен протокол)"],
    },
    {
      label: "За 10 години",
      cells: ["€10,000–€18,000", "€8,000–€12,000", "€2,500–€4,000", "€289 (€189 + поддръжка)"],
    },
    {
      label: "Болка/комфорт",
      cells: ["Лека топлина, търпимо", "СИЛНА БОЛКА", "Порязвания, враснали косми", "БЕЗ БОЛКА (15°C охлаждане)"],
    },
    {
      label: "Удобство",
      cells: ["Запазване на час, пътуване", "Запазване на час, пътуване", "Ежедневен ритуал, 5–10 мин", "У дома, 10 мин, 1–2x седм."],
    }
  ],
};

const faqItems = [
  {
    q: "Ще ли боли?",
    a: "Не. Нашия Delora има сапфирно охлаждане до 15°C. Усещаш топлина и звук, не болка. За разлика от салонния лазер (който още боли малко) или восъка (който НАИСТИНА боли).",
  },
  {
    q: "Салонният лазер работи ли по-добре?",
    a: "Технологията е идентична. Салонът ще ви каже че техния лазер е по-силен. Технически верно — но не ви трябва по-силен лазер. 26J/cm² (нашия IPL) е достатъчен за 95% намаляване. Салонът ви продава на 60J/cm² защото той печели всеки месец от повторните посещения.",
  },
  {
    q: "Всички три метода изхвърлят косъм по същия начин?",
    a: "Почти. Салонът ви казва че техния лазер е 'перманентен.' Верно е, че IPL достига до корена (както нашия). Разликата е, че вие го контролирате, не салонът. И вие го плащате веднъж, не месечно.",
  },
  {
    q: "Кога ще видя резултати?",
    a: "За разлика от салона (2–4 седмици) или восъка (почти веднага, но обратимо), IPL отнема време: Седмица 1–2: Нищо видимо. Седмица 3–4: Видимо намаляване. Седмица 5–8: 50–95% намаляване. Седмица 9–12: Поддържане (1x месечно).",
  },
  {
    q: "Какво ако не съм кандидат?",
    a: "IPL работи най-добре на светла кожа + тъмна коса (висок контраст). На по-тъмна кожа работи, но отнема повече сесии. На руса/бяла коса работи слабо. Искаш да проверим?",
    cta: { text: "Направи теста — 2 мин", href: QUIZ_HREF },
  },
  {
    q: "А ако нищо не се промени?",
    a: "90 дни гаранция. Не видиш резултати — пълна възвращане. Без въпроси. Но 17 от 18 потребители виждат резултати.",
  },
];

const trustBadges = [
  { Icon: CreditCard, label: "Плащане при доставка" },
  { Icon: Truck, label: "Безплатна доставка" },
  { Icon: ShieldCheck, label: "90 дни гаранция" },
  { Icon: BadgeCheck, label: "CE маркирано" },
];

const AdvertorialTraditional = () => {
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
            Спри да плащаш €80–€150 на месец на салона.<br/>
            И спри да се боиш от восъка.<br/>
            И спри да се бръснеш всеки 2–3 дни.
          </h1>
          <p className="adv-sub">
            Трите най-популярни начина за депилация? Всички имат голям проблем. Ние имаме решението.
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
              label="HERO VIDEO/GIF — full-width, ~500px · rapid montage: salon, waxing pain, shaving irritation, smooth skin. UGC style."
            />
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 2 — THE PROBLEM (Three enemies) ───────────────── */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Трите начина, на които депилацията те робува</h2>
        </div>
        <div className="adv-wrap">
          <p className="adv-body"><strong>Вариант 1: Салонният лазер</strong></p>
          <p className="adv-body">
            Салонът ти казва 'добре е за тебе.' Интересно. Защото:<br/>
            • €80–€150 за посещение (само 1)<br/>
            • Всеки месец. Завинаги.<br/>
            • Едва ли 4–6 седмици резултат<br/>
            • Чакане на час + пътуване
          </p>
          <p className="adv-body">За 10 години: €10,000–€18,000. За депилация.</p>
          <hr />
          
          <p className="adv-body"><strong>Вариант 2: Восъкът</strong></p>
          <p className="adv-body">
            'Само 3–4 седмици между сесии.' Хубаво. Но:<br/>
            • Боли. Сериозно боли.<br/>
            • Врастнала коса (почти гарантирано)<br/>
            • Раздразнена кожа след всяка сесия<br/>
            • Скъп, повторяващ се процес
          </p>
          <p className="adv-body">За 10 години: €8,000–€12,000. Плюс болка + раздразнение.</p>
          <hr />

          <p className="adv-body"><strong>Вариант 3: Бръсненето</strong></p>
          <p className="adv-body">
            Най-евтиния начин. Също най-тъпия.<br/>
            • Всеки 2–3 дни. ДА, ВСЕКИ ДЕН.<br/>
            • Порезни<br/>
            • Раздразнена кожа<br/>
            • Врастнала коса (бръсненето го причинява)<br/>
            • Черни точки от остатъци на коса
          </p>
          <p className="adv-body">За 10 години: Хиляди часове бръснене. За нищо.</p>
          <hr />

          <p className="adv-body">
            Общата тема? Всички три са цикли.<br/>
            Салонът ви плаща всеки месец. Восъкът те мъчи всеки месец. Бръсненето те мъчи всеки ден.
          </p>
          <p className="adv-body"><strong>Няма изход. До сега.</strong></p>
        </div>
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-enemies"
            minH={380}
            label="SPLIT-SCREEN / COMPARISON — ~400px · Three columns: Salon (calendar), Wax (pain), Shave (razor). Dark/negative tinted."
          />
        </div>
      </section>

      {/* ───────────────── SECTION 3 — THE SWITCH (IPL as the escape) ───────────────── */}
      <section className="adv-section">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Delora прекъсва всички три цикъла. Наведнъж.</h2>
        </div>
        <div className="adv-wrap">
          <p className="adv-body">IPL (Intense Pulsed Light) е различно.</p>
          <p className="adv-body">
            Това не е бръснача (не реже, както лазерът на салона).<br/>
            Това не е восък (не боли, както депилацията).<br/>
            Това не е дневна рутина (като бръсненето).
          </p>
          <p className="adv-body">
            <strong>Ето как работи:</strong><br/>
            1. СВЕТЛИНА попада на косъмката (повече е привлечена от мрак)<br/>
            2. ТОПЛИНА се генерира в корена (метаболизъм на косата = отказ)<br/>
            3. КОРЕН отслабва (естествено)<br/>
            4. КОСА ПАДА (в следващите 1–2 седмици)<br/>
            5. ПОВТАРЯ СЕ през 6–12 седмици за следващата вълна коса
          </p>
          <p className="adv-body">
            Резултат: След 12 седмици, ~95% по-малко коса. Задкулисно.<br/>
            За 10 години: €189 + поддържане. Край.
          </p>
        </div>
        <div className="adv-wrap">
          <Placeholder
            id="visual-mechanism"
            minH={460}
            maxW={640}
            label="ANIMATED DIAGRAM — ~600×500px · step-by-step IPL process (light -> heat -> root -> fallout)."
          />
        </div>
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-timeline-graph"
            minH={300}
            label="TIMELINE GRAPHIC — full-width, ~300px · Week-by-week comparison: cyclic UP/DOWN for salon/wax/shave, DOWN once for Delora."
          />
        </div>
      </section>

      {/* ───────────────── SECTION 4 — SIDE-BY-SIDE COMPARISON (THE MATH) ───────────────── */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Салон срещу восък срещу бръснене срещу Delora</h2>
          <p className="adv-sub adv-sub--tight">Без маркетингови трикове. Само числата.</p>
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
                        i === comparison.columns.length - 1
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
                        className={ci === row.cells.length - 1 ? "adv-isDelora" : "adv-isEnemy"}
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
            <span className="adv-mathLine adv-mathLine--enemy">€18,000+ за салон</span>
            <span className="adv-mathDivider" aria-hidden="true" />
            <span className="adv-mathLine adv-mathLine--delora">€289 за Delora</span>
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
          <h2 className="adv-h2">Честни отговори. Без лъжи.</h2>
          <p className="adv-sub adv-sub--tight">
            Ако нещо не звучи добре, ето защо:
          </p>
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
                      {item.cta && (
                        <>
                          {" "}
                          <a href={item.cta.href} className="adv-inlineLink">
                            {item.cta.text} →
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="adv-wrap">
          <div id="visual-quiz-cta" className="adv-quizCard">
            <p className="adv-quizCardText">Not sure if IPL is for you? Take the 2-minute test.</p>
            <Button href={QUIZ_HREF} variant="primary" size="md">
              Направи теста
            </Button>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 6 — REAL PEOPLE (SOCIAL PROOF) ───────────────── */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Жени, които спряха цикъла</h2>
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
                { n: 1, lbl: "ПРЕДИ | СЛЕД — Жена, която спря салон" },
                { n: 2, lbl: "ПРЕДИ | СЛЕД — Жена, която спря восък" },
                { n: 3, lbl: "ПРЕДИ | СЛЕД — Жена, която спря бръснене" },
                { n: 4, lbl: "ВИДЕО — 15-30 sec authentic testimonial" },
                { n: 5, lbl: "ПРЕДИ | СЛЕД — Друга част от тялото" },
              ].map((slide) => (
                <div className="adv-slide" key={slide.n}>
                  <Placeholder
                    id={`visual-carousel-slide-${slide.n}`}
                    minH={420}
                    label={`Слайд ${slide.n}/5: ${slide.lbl}`}
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
          <h2 className="adv-h2">Спри цикъла. Веднъж. €189.</h2>
          <p className="adv-body">
            Салонът те мъчи месец по месец.<br/>
            Восъкът те боли всеки месец.<br/>
            Бръсненето те дразни всеки ден.
          </p>
          <p className="adv-body">
            Delora? Един инструмент. Един път. Един месец за лечение.<br/>
            След това? Просто спомен.
          </p>
        </div>

        <div className="adv-wrap">
          <Placeholder
            id="visual-product"
            minH={400}
            maxW={300}
            label="PRODUCT HERO SHOT — ~300x400px"
          />
        </div>

        <div className="adv-wrap adv-ctaRow adv-ctaRow--stack">
          <Button href={DEVICE_HREF} variant="primary" size="lg">
            Виж Delora →
          </Button>
          <Button href={QUIZ_HREF} variant="outline" size="md">
            Не съм сигурна — направи теста (2 мин)
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

export default AdvertorialTraditional;
