"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { CreditCard, Truck, ShieldCheck, BadgeCheck, ChevronDown } from "lucide-react";
import Footer from "./Footer";
import "./Footer.css";
import "./Advertorial.css";

/* ── Links ── */
const DEVICE_HREF = "/products/delora";
const QUIZ_HREF = "/#consultation";

/* ── Visual Placeholder ── */
function Placeholder({
  id,
  label,
  minH = 280,
  maxW,
  className = "",
}: {
  id: string;
  label: string;
  minH?: number;
  maxW?: number;
  className?: string;
}) {
  const style: React.CSSProperties = {
    ["--ph-h" as string]: `${minH}px`,
    ...(maxW ? { maxWidth: maxW, marginLeft: "auto", marginRight: "auto" } : {}),
  };
  return (
    <div id={id} className={`visual-placeholder ${className}`} style={style}>
      <span className="label">{label}</span>
    </div>
  );
}

/* ── Data ── */
const enemies = [
  {
    id: "salon",
    icon: "💆",
    badgeLabel: "Враг #1",
    title: "Салонен лазер",
    costLabel: "€80–€150 / сесия",
    bullets: [
      "Всеки месец. Завинаги.",
      "Запазване на час + пътуване",
      "Само 4–6 седмици ефект",
      "Лека топлина — търпимо, но скъпо",
    ],
    footer: "За 10 години: €10,000–€18,000",
    variant: "bad" as const,
  },
  {
    id: "wax",
    icon: "🕯️",
    badgeLabel: "Враг #2",
    title: "Восък",
    costLabel: "€50–€100 / сесия",
    bullets: [
      "На всеки 4–6 седмици. Завинаги.",
      "СИЛНА болка при всяка сесия",
      "Враснали косми, раздразнена кожа",
      "Само 1–2 седмици гладкост",
    ],
    footer: "За 10 години: €8,000–€12,000",
    variant: "bad" as const,
  },
  {
    id: "shave",
    icon: "🪒",
    badgeLabel: "Враг #3",
    title: "Бръснене",
    costLabel: "Ежедневна загуба на Zeit",
    bullets: [
      "На 2–3 дни. Буквално всеки ден.",
      "Порезни, раздразнена кожа",
      "Враснали косми, черни точки",
      "Само 1–3 дни гладкост",
    ],
    footer: "За 10 години: €2,500–€4,000 + хиляди часове",
    variant: "bad" as const,
  },
];

const comparisonData = {
  headers: ["", "Салон лазер", "Восък", "Бръснене", "Delora"],
  headerVariants: ["", "budget", "budget", "budget", "delora"],
  rows: [
    {
      label: "Цена / сесия",
      cells: ["€80–€150", "€50–€100", "€5–€10", "€189 веднъж"],
      variants: ["budget", "budget", "budget", "delora"],
    },
    {
      label: "Колко често",
      cells: [
        "Всеки месец. Завинаги.",
        "На 4–6 седмици. Завинаги.",
        "На 2–3 дни. Завинаги.",
        "1–2х/седм. (12 седм.), после месечно",
      ],
      variants: ["budget", "budget", "budget", "delora"],
    },
    {
      label: "Резултат трае",
      cells: ["4–6 седмици", "1–2 седмици", "1–3 дни", "Месеци (само поддръжка)"],
      variants: ["budget", "budget", "budget", "delora"],
    },
    {
      label: "Болка / комфорт",
      cells: ["Лека топлина", "СИЛНА БОЛКА", "Порезни, раздразнение", "БЕЗ болка (15°C охлаждане)"],
      variants: ["budget", "budget", "budget", "delora"],
    },
    {
      label: "Удобство",
      cells: [
        "Час + пътуване",
        "Час + пътуване",
        "Ежедневен ритуал, 5–10 мин",
        "У дома, 10 мин, 1–2х/седм.",
      ],
      variants: ["budget", "budget", "budget", "delora"],
    },
    {
      label: "За 10 години",
      cells: ["€10,000–€18,000", "€8,000–€12,000", "€2,500–€4,000", "€189 (еднократно)"],
      variants: ["budget", "budget", "budget", "delora"],
    },
  ],
};

const faqItems = [
  {
    q: "Ще боли ли?",
    a: "Не. Delora има сапфирено охлаждане до 15°C при всеки импулс. Усещаш лека топлина и звук — не болка. За разлика от восъка (НАИСТИНА боли) или бръснача (порезни).",
  },
  {
    q: "Салонният лазер работи ли по-добре?",
    a: "Технологията е идентична. Salонът ще ти каже, че техният лазер е по-силен — технически верно, но не ти трябва по-силен лазер. 26 J/cm² е достатъчно за 95% намаляване. Разликата: салонът печели, когато се връщаш всеки месец. Delora печели само веднъж.",
  },
  {
    q: "Кога ще видя резултат?",
    a: "Видимо намаляване между 4-та и 8-та седмица. Седмица 1–2: нищо видимо (нормално — фоликулът се уврежда под повърхността). Седмица 3–4: започваш да забелязваш разлика. Седмица 5–8: 50–95% намаляване. Седмица 9–12: поддръжка (веднъж месечно).",
  },
  {
    q: "Всички три метода махат ли косъма завинаги?",
    a: "Само IPL достига до корена и спира растежа. Бръсненето и восъкът само премахват видимата коса — коренът остава непокътнат. Затова трябва да се повтарят вечно. Салонният лазер постига постоянно намаляване — но плащаш на салона за всяка сесия. С Delora го правиш у дома. Веднъж.",
  },
  {
    q: "Какво ако не съм кандидат?",
    a: "IPL работи най-добре на светла кожа + тъмна коса (висок контраст). На по-тъмна кожа работи, но отнема повече сесии. На руса/бяла коса работи слабо — няма достатъчно пигмент в косъма. Не си сигурна?",
    ctaText: "Направи теста — 2 мин",
    ctaHref: QUIZ_HREF,
  },
  {
    q: "А ако нищо не се промени?",
    a: "90 дни гаранция. Не виждаш резултат — пълна възвращане. Без въпроси. 17 от 18 потребители виждат резултати в рамките на 4–8 седмици.",
  },
];

const slides = [
  {
    id: "s1",
    stars: 5,
    quote: `„Спрях да ходя на салон след 6 седмици. Просто нямаше смисъл — кожата е гладка и без него.“`,
    author: "Мария К., 29 г. — София",
  },
  {
    id: "s2",
    stars: 5,
    quote: `„Цял живот се боях от восъка. С Delora буквално не усещам нищо. Само топлина.“`,
    author: "Ивана Т., 34 г. — Пловдив",
  },
  {
    id: "s3",
    stars: 5,
    quote: `„Пресметнах: за 5 години в салона бях платила над €4,000. Delora е €189. Не мога да повярвам, че чаках толкова.“`,
    author: "Надя Г., 31 г. — Варна",
  },
  {
    id: "s4",
    stars: 5,
    quote: `„Врастналите косми от бръснането изчезнаха напълно. Кожата ми е по-гладка, отколкото някога е била.“`,
    author: "Стела М., 27 г. — Бургас",
  },
  {
    id: "s5",
    stars: 5,
    quote: `„Смях се, когато ми казаха 12 седмици. На 8-та реших да не се връщам на салон. На 12-та — изобщо не мисля за депилация.“`,
    author: "Елена Д., 38 г. — Стара Загора",
  },
];

const trustBadges = [
  { Icon: CreditCard, label: "Плащане при доставка" },
  { Icon: Truck, label: "Безплатна доставка" },
  { Icon: ShieldCheck, label: "90 дни гаранция" },
  { Icon: BadgeCheck, label: "CE маркирано" },
];

/* ── Component ── */
export default function AdvertorialTraditional() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  const scrollCarousel = useCallback(
    (dir: 1 | -1) => {
      const el = carouselRef.current;
      if (!el) return;
      const next = Math.max(0, Math.min(slides.length - 1, activeSlide + dir));
      setActiveSlide(next);
      el.scrollTo({ left: next * (el.clientWidth * 0.88), behavior: "smooth" });
    },
    [activeSlide]
  );

  return (
    <div className="adv">
      {/* ── Sticky Header ── */}
      <header className="adv-header">
        <div className="adv-headerInner">
          <Link href="/" className="adv-logo" aria-label="Delora — начало">
            <img src="/logo.png" alt="Delora" className="adv-logoImg" />
          </Link>
          <a href={DEVICE_HREF} className="adv-btnPrimary" style={{ fontSize: "0.82rem", padding: "0.6rem 1.25rem" }}>
            Виж устройството →
          </a>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          SECTION 1 — HERO + PROBLEM FRAME
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--hero">
        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-heroContent">
            <div className="adv-ratingBadge">
              <span className="adv-ratingStars">★★★★★</span>
              <span>4.9/5 · 17 реални отзива</span>
            </div>
            <span className="adv-eyebrow">Спри да робуваш на депилацията</span>
            <h1 className="adv-h1">
              Спри да плащаш на салона.<br />
              Спри да се боиш от восъка.<br />
              Спри да се бръснеш всеки ден.
            </h1>
            <p className="adv-sub">
              Трите най-популярни начина за депилация те държат в цикъл без край. Има изход. Един път.
            </p>
            <div className="adv-ctaRow">
              <a href={DEVICE_HREF} className="adv-btnPrimary">
                Виж устройството →
              </a>
              <a href={QUIZ_HREF} className="adv-btnSecondary">
                Направи теста — 2 мин
              </a>
            </div>
          </div>
        </div>

        {/* VB1 — Hero video/GIF */}
        <div className="adv-wrap adv-wrap--wide" style={{ paddingBottom: 0 }}>
          <div className="adv-heroMedia">
            <Placeholder
              id="visual-hero"
              minH={460}
              label="VISUAL BLOCK 1 — HERO VIDEO/GIF · Пълна ширина, ~460px · Бърз монтаж: салон, болка от восък, бръснене, накрая гладка кожа. UGC стил, автопускане, без звук."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — NAME THE ENEMY
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <span className="adv-sectionPill">Секция 2 · Проблемът</span>
          <h2 className="adv-h2">Трите начина, по които депилацията те робува</h2>
          <div className="adv-divider" />
          <p className="adv-intro">
            Всеки от тях обещава гладкост. Никой не я дава за постоянно. Ето защо.
          </p>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-enemyGrid">
            {enemies.map((e) => (
              <div key={e.id} className={`adv-enemyCard adv-enemyCard--${e.variant}`}>
                <div className="adv-enemyIcon">{e.icon}</div>
                <div className="adv-enemyLabel">{e.badgeLabel}</div>
                <h3 className="adv-h3">{e.title}</h3>
                <p className="adv-enemyCost">{e.costLabel}</p>
                <ul className="adv-enemyBullets">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="adv-enemyFooter">{e.footer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* VB2 — Three device photos side-by-side */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <Placeholder
            id="visual-devices"
            minH={360}
            label="VISUAL BLOCK 2 — ТРИ УСТРОЙСТВА ЕДНО ДО ДРУГО · Ляво: евтин IPL (€89), Център: Delora (€189), Дясно: премиум IPL (€349) · Или: салон, восък, Delora · Конфронтационен стил."
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — THE SWITCH (Delora solves it)
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--cream">
        <div className="adv-wrap adv-text">
          <span className="adv-sectionPill">Секция 3 · Решението</span>
          <h2 className="adv-h2">Delora прекъсва цикъла.</h2>
          <div className="adv-divider" />
        </div>

        <div className="adv-wrap">
          <div className="adv-switchContent">
            <div className="adv-switchText">
              <p className="adv-body adv-body--large">
                IPL технологията не реже косъма на повърхността като бръснача. Не го изскубва като восъка.
                <br /><br />
                Тя достига до корена и <strong>спира растежа.</strong>
              </p>

              <div className="adv-step">
                <div className="adv-stepNum">1</div>
                <p className="adv-stepText"><strong>Светлина</strong> — импулс светлина прониква в кожата</p>
              </div>
              <div className="adv-step">
                <div className="adv-stepNum">2</div>
                <p className="adv-stepText"><strong>Топлина</strong> — пигментът в косъма абсорбира енергията</p>
              </div>
              <div className="adv-step">
                <div className="adv-stepNum">3</div>
                <p className="adv-stepText"><strong>Коренът отслабва</strong> — фоликулът се уврежда</p>
              </div>
              <div className="adv-step">
                <div className="adv-stepNum">4</div>
                <p className="adv-stepText"><strong>Косъмът пада сам</strong> — и спира да расте обратно</p>
              </div>

              <p className="adv-body mt-3" style={{ color: "var(--adv-muted)" }}>
                Повтаряш няколко седмици. После спираш. Защото вече няма какво да махаш.
                Това правят салоните с лазер за €2,000. Delora го прави у дома. За €189.
              </p>
            </div>

            <div className="adv-switchVisual">
              {/* VB3 — IPL Mechanism Animation */}
              <Placeholder
                id="visual-ipl-mechanism"
                minH={360}
                label="VISUAL BLOCK 3 — IPL МЕХАНИЗЪМ АНИМАЦИЯ · Напречно сечение на кожата: светлина → топлина → корен отслабва → косъм пада · Образователен, не медицински стил"
              />
            </div>
          </div>
        </div>

        {/* VB4 — Results Timeline */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <Placeholder
            id="visual-results-timeline"
            minH={200}
            label="VISUAL BLOCK 4 — ВРЕМЕВА ЛИНИЯ НА РЕЗУЛТАТИТЕ · Хоризонтална (десктоп) / вертикална (мобил) · Седм. 1–2: нищо видимо → Седм. 3–4: видимо намаляване → Седм. 5–8: 50–95% → Седм. 12: само поддръжка"
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — SIDE-BY-SIDE COMPARISON
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <span className="adv-sectionPill">Секция 4 · Сравнение</span>
          <h2 className="adv-h2">Delora срещу всичко останало.</h2>
          <div className="adv-divider" />
          <p className="adv-intro">Без маркетингови трикове. Само числата.</p>
        </div>

        {/* VB5 — US vs THEM Split-screen */}
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-split-screen"
            minH={360}
            label="VISUAL BLOCK 5 — SPLIT-SCREEN СРАВНЕНИЕ · Ляво (враговете): салон/восък/бръснене — скъпо, болезнено, повтарящо се, червени/оранжеви тонове · Дясно (Delora): едно устройство, една цена, у дома — лавандулово/кремаво · Контрастът трябва да е очевиден"
          />
        </div>

        {/* VB6 — Comparison Table */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <div className="adv-tableWrap">
            <table className="adv-table">
              <thead>
                <tr>
                  {comparisonData.headers.map((h, i) => (
                    <th
                      key={i}
                      className={
                        comparisonData.headerVariants[i] === "delora"
                          ? "adv-th--delora"
                          : comparisonData.headerVariants[i] === "budget"
                          ? "adv-th--budget"
                          : ""
                      }
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, ri) => (
                  <tr key={ri}>
                    <td>{row.label}</td>
                    {row.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={
                          row.variants[ci] === "delora"
                            ? "adv-td--delora"
                            : row.variants[ci] === "budget"
                            ? "adv-td--budget"
                            : ""
                        }
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

        {/* VB7 — Big Number Math Callout */}
        <div className="adv-wrap mt-4">
          <div className="adv-mathBanner">
            <div className="adv-mathBanner__numbers">
              <span className="adv-mathBanner__num adv-mathBanner__num--enemy">€14,000+</span>
              <span className="adv-mathBanner__sep">vs</span>
              <span className="adv-mathBanner__num">€189</span>
            </div>
            <p className="adv-mathBanner__caption">
              Салон + восък за 10 години&nbsp;&nbsp;·&nbsp;&nbsp;Delora — веднъж, завинаги
            </p>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="adv-wrap adv-text mt-4">
          <a href={DEVICE_HREF} className="adv-btnPrimary">
            Виж устройството →
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — OBJECTIONS (FAQ)
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--cream">
        <div className="adv-wrap adv-text">
          <span className="adv-sectionPill">Секция 5 · Честно</span>
          <h2 className="adv-h2">Честно. Ето какво трябва да знаеш.</h2>
          <div className="adv-divider" />
          <p className="adv-intro">
            Няма да ти продаваме лъжи. Ето кога Delora работи — и кога не.
          </p>
        </div>

        {/* VB8 — Suitability Chart */}
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-suitability"
            minH={340}
            label="VISUAL BLOCK 8 — ДИАГРАМА НА ПОДХОДЯЩИТЕ · Решетка: тонове на кожата × цвят на косата · Индикатори: работи / работи по-бавно / не работи · Честността = доверие (стила на Nood — открито кажи за кого НЕ е)"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="adv-wrap mt-4">
          <div className="adv-faqList">
            {faqItems.map((item, i) => (
              <div key={i} className={`adv-faqItem${openFaq === i ? " adv-faqItem--open" : ""}`}>
                <button
                  className="adv-faqQ"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  onKeyDown={(e) => (e.key === " " || e.key === "Enter") && toggleFaq(i)}
                >
                  <span>{item.q}</span>
                  <span className="adv-faqChevron" aria-hidden="true">
                    <ChevronDown size={14} />
                  </span>
                </button>
                <div className="adv-faqA" aria-hidden={openFaq !== i}>
                  <div className="adv-faqAInner">
                    {item.a}
                    {item.ctaText && (
                      <div className="mt-2">
                        <a href={item.ctaHref} className="adv-btnLink">
                          {item.ctaText} →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VB7 — Cost Calculator */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <p className="adv-body adv-text" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            Цена за година — истинската сметка
          </p>
          <div className="adv-calcGrid">
            <div className="adv-calcCard adv-calcCard--bad">
              <div className="adv-calcLabel">Бюджетна опция</div>
              <div className="adv-calcAmount">€45</div>
              <div className="adv-calcSub">на година<br />(купуваш ново устройство на 2 г.)</div>
            </div>
            <div className="adv-calcCard adv-calcCard--good">
              <div className="adv-calcLabel">✓ Delora</div>
              <div className="adv-calcAmount">€9</div>
              <div className="adv-calcSub">на година<br />(20+ години живот)</div>
            </div>
            <div className="adv-calcCard adv-calcCard--neutral">
              <div className="adv-calcLabel">Премиум IPL</div>
              <div className="adv-calcAmount">€17</div>
              <div className="adv-calcSub">на година<br />(€160 за бранд, не за технология)</div>
            </div>
          </div>
          <p className="adv-intro adv-text mt-2" style={{ fontSize: "0.78rem" }}>
            * Изчислено на база 20-годишен живот на устройството
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 6 — SOCIAL PROOF
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <span className="adv-sectionPill">Секция 6 · Реални жени</span>
          <h2 className="adv-h2">Жени, които спряха да ходят на салон.</h2>
          <div className="adv-divider" />
          <div className="adv-ratingRow">
            <span className="adv-ratingNum">4.9</span>
            <div className="adv-ratingInfo">
              <span className="adv-ratingStars">★★★★★</span>
              <span className="adv-ratingCount">17 реални отзива</span>
            </div>
          </div>
        </div>

        {/* VB9 — Before/After Carousel */}
        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-carouselWrap">
            <div className="adv-carousel" ref={carouselRef}>
              {slides.map((slide, i) => (
                <div key={slide.id} className="adv-slide">
                  {/* Before / After placeholder images */}
                  <div className="adv-slideBARow">
                    <div className="adv-slideImg">
                      <Placeholder
                        id={`visual-before-${i + 1}`}
                        minH={200}
                        label={`ПРЕДИ — Слайд ${i + 1}/5`}
                      />
                      <span className="adv-slideImgLabel">ПРЕДИ</span>
                    </div>
                    <div className="adv-slideImg">
                      <Placeholder
                        id={`visual-after-${i + 1}`}
                        minH={200}
                        label={`СЛЕД — Слайд ${i + 1}/5`}
                      />
                      <span className="adv-slideImgLabel">СЛЕД</span>
                    </div>
                  </div>
                  <div className="adv-slideBody">
                    <div className="adv-slideStars">★★★★★</div>
                    <p className="adv-slideQuote">{slide.quote}</p>
                    <p className="adv-slideAuthor">— {slide.author}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="adv-carouselNav">
              <button
                className="adv-navBtn"
                onClick={() => scrollCarousel(-1)}
                aria-label="Предишен слайд"
                disabled={activeSlide === 0}
              >
                ←
              </button>
              <div className="adv-dots">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`adv-dot${activeSlide === i ? " adv-dot--active" : ""}`}
                    onClick={() => {
                      setActiveSlide(i);
                      carouselRef.current?.scrollTo({
                        left: i * (carouselRef.current.clientWidth * 0.88),
                        behavior: "smooth",
                      });
                    }}
                    role="button"
                    aria-label={`Слайд ${i + 1}`}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && (() => {
                      setActiveSlide(i);
                      carouselRef.current?.scrollTo({ left: i * (carouselRef.current.clientWidth * 0.88), behavior: "smooth" });
                    })()}
                  />
                ))}
              </div>
              <button
                className="adv-navBtn"
                onClick={() => scrollCarousel(1)}
                aria-label="Следващ слайд"
                disabled={activeSlide === slides.length - 1}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 7 — OFFER + CTA
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--offer">
        <div className="adv-wrap adv-text">
          <span className="adv-sectionPill">Секция 7 · Офертата</span>
          <h2 className="adv-h2">Веднъж. €189. Край на цикъла.</h2>
          <div className="adv-divider" />
          <p className="adv-sub" style={{ margin: "0 auto 2rem" }}>
            Салонът ти казва „до скоро." Delora казва „повече няма нужда."
            <br />
            <strong>90 дни гаранция.</strong> Не работи — връщаш го. Но 17 от 18 жени не го връщат.
          </p>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-offerGrid">
            {/* VB10 — Product Hero Shot */}
            <Placeholder
              id="visual-product-hero"
              minH={420}
              label="VISUAL BLOCK 10 — ПРОДУКТОВА СНИМКА · Delora устройство в ръка или на чист фон · Сапфиреният накрайник е акцент · Прозрачен или светъл фон · ~300×400px"
            />

            <div>
              <h3 className="adv-h3" style={{ marginBottom: "0.5rem" }}>
                Delora Elite IPL
              </h3>
              <p className="adv-body" style={{ color: "var(--adv-muted)", marginBottom: "1.5rem" }}>
                Сапфирено охлаждане до 15°C · 1,000,000 импулса · 26 J/cm² · CE маркирано
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--adv-amethyst)",
                }}>€189</span>
                <span style={{ fontSize: "1rem", color: "var(--adv-muted)", textDecoration: "line-through" }}>€399</span>
                <span style={{
                  background: "var(--adv-amethyst)",
                  color: "#fff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.5rem",
                  borderRadius: "20px",
                }}>-53%</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                <a href={DEVICE_HREF} className="adv-btnPrimary" style={{ justifyContent: "center" }}>
                  Виж устройството →
                </a>
                <a href={QUIZ_HREF} className="adv-btnSecondary" style={{ justifyContent: "center" }}>
                  Не съм сигурна — направи теста (2 мин)
                </a>
              </div>

              {/* VB11 — Trust Badges */}
              <div className="adv-trustBadges">
                {trustBadges.map(({ Icon, label }, i) => (
                  <div key={i} className="adv-trustBadge">
                    <Icon size={22} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
