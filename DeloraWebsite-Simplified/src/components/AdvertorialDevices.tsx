"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { CreditCard, Truck, ShieldCheck, BadgeCheck, ChevronDown, AlertTriangle } from "lucide-react";
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

/* ── Enemy data (budget vs premium IPL) ── */
const enemies = [
  {
    id: "budget",
    icon: <AlertTriangle size={24} strokeWidth={1.5} />,
    badgeLabel: "Капан #1",
    title: "Евтиният IPL (€89)",
    costLabel: "€89 сега · €45/год реално",
    bullets: [
      "15 J/cm² — недостатъчна енергия",
      "Охлаждане 25°C — риск от изгаряния",
      "50,000 импулса → умира за 1–2 год.",
      "Работи само на идеална кожа+коса",
      "30-дневна гаранция (разкрива всичко)",
    ],
    footer: "Ще купиш 5+ бройки за 10 години: >€445",
    variant: "bad" as const,
  },
  {
    id: "premium",
    icon: <BadgeCheck size={24} strokeWidth={1.5} />,
    badgeLabel: "Капан #2",
    title: "Премиумният IPL (€349+)",
    costLabel: "€349 за 1 J/cm² повече",
    bullets: [
      "27 J/cm² — клинично, но минимална разлика",
      "15°C охлаждане — добро (като Delora)",
      "1,000,000 импулса — добро (като Delora)",
      "€160 за бранда — не за технологията",
      "Плащаш за лого, не за резултат",
    ],
    footer: "€17/год — добро устройство. Лош deal.",
    variant: "bad" as const,
  },
  {
    id: "delora",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    badgeLabel: "Златната среда",
    title: "Delora (€189)",
    costLabel: "€9/год · 20+ год. живот",
    bullets: [
      "26 J/cm² — клинично ефективна енергия",
      "Сапфирено охлаждане до 15°C (безопасно)",
      "1,000,000 импулса — 40+ год. реална употреба",
      "90-дневна гаранция (ние вярваме в него)",
      "CE маркирано, дерматологично тествано",
    ],
    footer: "€189 веднъж. €9 на година. Готово.",
    variant: "good" as const,
  },
];

const comparisonData = {
  headers: ["Характеристика", "Евтиният (€89)", "Delora (€189)", "Премиумният (€349)"],
  headerVariants: ["", "budget", "delora", "premium"],
  rows: [
    {
      label: "Цена",
      cells: ["€89", "€189", "€349"],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Енергия (J/cm²)",
      cells: ["15 (слабо)", "26 (клинично ✓)", "27 (клинично ✓)"],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Охлаждане",
      cells: ["25°C (риск)", "15°C (безопасно ✓)", "15°C (безопасно ✓)"],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Импулси",
      cells: ["50,000 (1–2 год.)", "1,000,000 (20+ год. ✓)", "1,000,000 (20+ год. ✓)"],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Гаранция",
      cells: ["30 дни", "90 дни ✓", "1–2 години"],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Реален живот",
      cells: ["Макс 2 год.", "20+ год. ✓", "20+ год. ✓"],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Цена/год.",
      cells: ["€45/год.", "€9/год. ✓", "€17/год."],
      variants: ["budget", "delora", "premium"],
    },
    {
      label: "Премия за бранд",
      cells: ["Няма", "Няма ✓", "€160 (само за лого)"],
      variants: ["budget", "delora", "premium"],
    },
  ],
};

const faqItems = [
  {
    q: "Евтиният IPL с 15 J/cm² работи ли изобщо?",
    a: "Технически — да. На практика — разочарование. Nood използва 18 J/cm². Ulike — 26 J/cm². Braun — 27 J/cm². Защо? Защото по-висока енергия = по-стабилни резултати, особено на по-тъмна кожа или фина коса. Евтиният 15 J/cm² работи само на идеална комбинация: много светла кожа + много тъмна коса. Всичко друго? Бавно разочарование.",
  },
  {
    q: "Охлаждането наистина ли прави разлика?",
    a: `Да. 25°C срещу 15°C е разликата между "топло и неприятно" и "безопасно и комфортно.“ Евтините устройства не инвестират в добро охлаждане — то е скъпо. Резултатът: потребителите спират да го използват (боли или изгаря). После искат възврат. Затова евтините имат 30-дневна гаранция — знаят, че повечето ще предадат преди да изтекат.`,
  },
  {
    q: "€89 устройство, което трае само 2 години — реално ли е?",
    a: "Да. Евтина пластмаса + слаб мотор за охлаждане = двигателят отказва за 18–24 месеца. Или сензорът за контакт с кожата умира. Или батерията деградира. При 50,000 импулса: ако използваш 2 пъти седмично, 15 мин. — изчерпваш ги за около 2 години. После купуваш ново. За 10 години: 5 устройства × €89 = €445.",
  },
  {
    q: "Но 1,000,000 импулса — не е ли твърде много?",
    a: "За Delora 1,000,000 импулса = 40+ години пълна употреба. Реалното ограничение е охлаждащата система — тя ще издържи 20–25 години при нормална употреба. За евтиния €89? 50,000 импулса = 1–2 години, въпреки че батерията или охлаждането ще умрат първо.",
  },
  {
    q: "Защо премиумът (€349) не е по-добър от Delora?",
    a: "Защото технологията е почти идентична. 27 J/cm² срещу 26 J/cm² — разлика, която не ще усетиш. 15°C охлаждане — едно и също. 1,000,000 импулса — едно и също. Разликата е €160. Тя отива за бранда, дизайна, кутията и маркетинга — не за клинична ефективност. Ако трябва да избираш между €189 и €349 — €160 разлика без реална разлика в резултата не е добра сделка.",
  },
  {
    q: "А ако Delora не работи за мен?",
    a: "90 дни гаранция. Не виждаш резултат — пълна възвращане. Без въпроси. Специално избрахме 90 дни (не 30), защото първите видими резултати идват между 4-та и 8-та седмица. Искаме да имаш достатъчно време за честна оценка.",
  },
];

const slides = [
  {
    id: "s1",
    stars: 5,
    quote: `„Преди имах евтин IPL от €65. Не виждах почти никакъв резултат след 3 месеца. С Delora — след 6 седмици разликата беше очевидна.“`,
    author: "Симона К., 26 г. — София",
    image: "/Photoshoots/Before & After/leg_ba.png",
  },
  {
    id: "s2",
    stars: 5,
    quote: `„Проучих Braun и Philips — наистина са добри. Но €350 за 1 J/cm² повече? Не. Delora е точно толкова ефективен.“`,
    author: "Радина М., 33 г. — Пловдив",
    image: "/Photoshoots/Before & After/underarm_ba.png",
  },
  {
    id: "s3",
    stars: 5,
    quote: `„Евтиният IPL изгори. Буквално. Delora е различно ниво — охлаждането е реално и резултатите са реални.“`,
    author: "Теодора В., 29 г. — Варна",
    image: "/Photoshoots/Before & After/belly_ba.png",
  },
  {
    id: "s4",
    stars: 5,
    quote: `„€189 за нещо, което ще ми служи 20 години срещу €89 за нещо, което ще изхвърля след 2? Математиката е проста.“`,
    author: "Камелия Н., 37 г. — Бургас",
    image: "/Photoshoots/Before & After/bikini_ba.png",
  },
  {
    id: "s5",
    stars: 5,
    quote: `„Накрая спрях да се двоумя. 90-дневната гаранция ми даде сисурност. Не съжалявам нито за секунда.“`,
    author: "Гергана Л., 31 г. — Стара Загора",
    image: "/Photoshoots/Before & After/back_ba.png",
  },
];

const trustBadges = [
  { Icon: CreditCard, label: "Плащане при доставка" },
  { Icon: Truck, label: "Безплатна доставка" },
  { Icon: ShieldCheck, label: "90 дни гаранция" },
  { Icon: BadgeCheck, label: "CE маркирано" },
];

/* ── Component ── */
export default function AdvertorialDevices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [timelineStep, setTimelineStep] = useState(0);
  const timelineSteps = [
    {
      title: "Седмица 1–4",
      desc: "С 3 процедури седмично, косата ще расте по-тънка, по-мека и по-бавно.",
      image: "/Photoshoots/timeline_3.jpeg",
    },
    {
      title: "Седмица 5–12",
      desc: "За да гарантираме, че всеки косъм е третиран по време на фазата му на растеж, препоръчваме корекции на всеки две седмици или веднъж месечно.",
      image: "/Photoshoots/timeline_2.png",
    },
    {
      title: "Резултати",
      desc: "След пълния цикъл, третираната зона трябва да е без окосмяване. Ефективността на IPL може да варира в зависимост от индивида; спазването на препоръчителния цикъл е ключово за постигане на желаните резултати.",
      image: "/Photoshoots/timeline_1.png",
    }
  ];

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
            <span className="adv-eyebrow">IPL устройства: кой е струва парите</span>
            <h1 className="adv-h1">
              €89 боклук.<br />
              €349 излишество.<br />
              €189 е точно по средата.
            </h1>
            <p className="adv-sub">
              Евтините IPL не работят достатъчно добре. Скъпите са платени за бранда, не за технологията.
              Delora е клиничната ефективност — без да плащаш за лого.
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
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — NAME THE ENEMY (Two IPL extremes)
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Двата IPL капана — и изходът от тях.</h2>
          <div className="adv-divider" />
          <p className="adv-intro">
            Пазарът на IPL устройства е пълен с крайности. Ето защо нито едната не е правилният избор.
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

        {/* VB2 — Three device photos */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <Placeholder
            id="visual-devices-comparison"
            minH={360}
            label="VISUAL BLOCK 2 — ТРИ УСТРОЙСТВА ЕДНО ДО ДРУГО · Ляво: евтин IPL €89 (червени тонове, X маркери) · Център: Delora €189 (лавандулово, ✓ маркери) · Дясно: Премиум €349 (оранжево, въпросителни) · Конфронтационен, едностранен в полза на Delora"
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — THE SWITCH
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--cream">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Технологията, която прави разликата.</h2>
          <div className="adv-divider" />
        </div>

        <div className="adv-wrap">
          <div className="adv-switchContent">
            <div className="adv-switchText">
              <p className="adv-body adv-body--large">
                Не всички IPL са едни и същи. Разликата между €89 и €189 не е в бранда — тя е в енергията и охлаждането.
              </p>

              <div className="adv-step">
                <div className="adv-stepNum">1</div>
                <p className="adv-stepText">
                  <strong>26 J/cm²</strong> — клинично доказана енергия. Евтиният е 15 J/cm². Разликата е между „работи понякога" и „работи стабилно."
                </p>
              </div>
              <div className="adv-step">
                <div className="adv-stepNum">2</div>
                <p className="adv-stepText">
                  <strong>15°C сапфирено охлаждане</strong> — защитава кожата, прави процедурата безболезнена. Евтиният охлажда до 25°C — недостатъчно.
                </p>
              </div>
              <div className="adv-step">
                <div className="adv-stepNum">3</div>
                <p className="adv-stepText">
                  <strong>1,000,000 импулса</strong> = 40+ години употреба. Евтиният има 50,000 = 1–2 години.
                </p>
              </div>
              <div className="adv-step">
                <div className="adv-stepNum">4</div>
                <p className="adv-stepText">
                  <strong>90-дневна гаранция</strong> — защото сме сигурни в резултата. Евтиният дава 30 дни (защото знае, че повечето ще предадат преди 60-тия ден).
                </p>
              </div>

              <p className="adv-body mt-3" style={{ color: "var(--adv-muted)" }}>
                Премиумът (€349) е добро устройство. Но 27 срещу 26 J/cm² — разлика, която не ще усетиш. €160 отиват за лого, кутия и маркетинг. Не за резултат.
              </p>
            </div>

            <div className="adv-switchVisual">
              {/* VB3 — IPL Mechanism Animation */}
              <Placeholder
                id="visual-ipl-mechanism"
                minH={360}
                label="VISUAL BLOCK 3 — IPL МЕХАНИЗЪМ АНИМАЦИЯ · Как светлината достига корена · Сравнение: 15 J/cm² (евтин) → слаб ефект vs 26 J/cm² (Delora) → пълен ефект · Образователен стил"
              />
            </div>
          </div>
        </div>

        {/* VB4 — Results Timeline */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <div className="timeline-block">
            {/* Pill Tab Bar */}
            <div className="timeline-tabs-row">
              {timelineSteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setTimelineStep(idx)}
                  className={`timeline-tab-btn${timelineStep === idx ? " timeline-tab-btn--active" : ""}`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Cropped Graphic Container */}
            <div className="timeline-crop-container">
              <img 
                src={timelineSteps[timelineStep].image} 
                alt="Времева линия на резултатите" 
                className="timeline-img"
              />

              {/* Navigation Chevrons */}
              <button
                className="timeline-nav-btn timeline-nav-btn--prev"
                onClick={() => setTimelineStep(prev => (prev === 0 ? 2 : prev - 1))}
                aria-label="Предишна стъпка"
                style={{ fontSize: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ‹
              </button>
              <button
                className="timeline-nav-btn timeline-nav-btn--next"
                onClick={() => setTimelineStep(prev => (prev === 2 ? 0 : prev + 1))}
                aria-label="Следваща стъпка"
                style={{ fontSize: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ›
              </button>
            </div>

            {/* Real scalable HTML text overlay box at the bottom */}
            <div className="timeline-info-box">
              <h3 className="timeline-info-title">{timelineSteps[timelineStep].title}</h3>
              <p className="timeline-info-desc">{timelineSteps[timelineStep].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — SIDE-BY-SIDE COMPARISON
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Трите устройства. Само числата.</h2>
          <div className="adv-divider" />
          <p className="adv-intro">Без маркетингови твърдения. Само техническите спецификации.</p>
        </div>

        {/* VB5 — Split-screen */}
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-split-screen"
            minH={340}
            label="VISUAL BLOCK 5 — SPLIT-SCREEN · Ляво: €89 (червено) — с X на слабите спецификации · Център: €189 Delora (лавандулово) — ✓ на всичко · Дясно: €349 (оранжево) — ✓ на техн., ? на цената · Акцентът е, че Delora = премиум спецификации на разумна цена"
          />
        </div>

        {/* VB6 — Comparison Table */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <div className="comp-wrapper">
            <div className="comp-table">
              {/* Features Column */}
              <div className="comp-col comp-col--features">
                <div className="comp-header">
                  <span className="comp-title" style={{ textAlign: "left", margin: 0 }}>Спецификация</span>
                </div>
                <div className="comp-cell">Енергия (J/cm²)</div>
                <div className="comp-cell">Охлаждане</div>
                <div className="comp-cell">Импулси</div>
                <div className="comp-cell">Гаранция</div>
                <div className="comp-cell">Реален живот</div>
                <div className="comp-cell">Цена на година</div>
                <div className="comp-cell">Надценка за марка</div>
                <div className="comp-cell" style={{ height: "80px" }}>Цена / Цена за 10 г.</div>
              </div>

              {/* Highlighted Delora Column */}
              <div className="comp-col comp-col--highlight">
                <div className="comp-header">
                  <div className="comp-avatar-wrap">
                    <img
                      src="/Photoshoots/Studio/hf_20260526_185002_1591b783-28eb-4907-92c8-a7b34c29d495.png"
                      alt="Delora"
                      className="comp-avatar-img"
                    />
                  </div>
                  <span className="comp-title">Delora Elite</span>
                </div>
                <div className="comp-cell">26 J/cm² (Клинично ✓)</div>
                <div className="comp-cell">15°C (Сапфирено ✓)</div>
                <div className="comp-cell">1,000,000 (20+ г. ✓)</div>
                <div className="comp-cell">
                  <span className="comp-icon-check">✓</span>
                </div>
                <div className="comp-cell">20+ години</div>
                <div className="comp-cell">18 лв / година</div>
                <div className="comp-cell">Няма</div>
                <div className="comp-cell comp-cell--price">
                  <span className="price-only">Само</span>
                  <span className="price-val">370 лв</span>
                </div>
              </div>

              {/* VS Badge */}
              <div className="comp-vs">VS</div>

              {/* Group of Competitors */}
              <div className="comp-group">
                {/* Cheap IPL */}
                <div className="comp-col">
                  <div className="comp-header">
                    <div className="comp-avatar-wrap">
                      <img 
                        src="/Photoshoots/cheap_device.png" 
                        alt="Евтин IPL" 
                        className="comp-avatar-img" 
                      />
                    </div>
                    <span className="comp-title">Евтин IPL</span>
                  </div>
                  <div className="comp-cell">15 J/cm² (Слабо)</div>
                  <div className="comp-cell">25°C (Няма охлаждане)</div>
                  <div className="comp-cell">50,000 (1–2 год.)</div>
                  <div className="comp-cell">30 дни</div>
                  <div className="comp-cell">Макс 2 години</div>
                  <div className="comp-cell">90 лв / година</div>
                  <div className="comp-cell">Няма</div>
                  <div className="comp-cell comp-cell--price">
                    <span className="price-val" style={{ color: "#E03131" }}>175 лв</span>
                  </div>
                </div>

                {/* Premium Brand IPL */}
                <div className="comp-col">
                  <div className="comp-header">
                    <div className="comp-avatar-wrap">
                      <img 
                        src="/Photoshoots/premium_device.png" 
                        alt="Премиум Марка" 
                        className="comp-avatar-img" 
                      />
                    </div>
                    <span className="comp-title">Премиум Марка</span>
                  </div>
                  <div className="comp-cell">27 J/cm² (Клинично ✓)</div>
                  <div className="comp-cell">15°C (Сапфирено ✓)</div>
                  <div className="comp-cell">1,000,000 (20+ г. ✓)</div>
                  <div className="comp-cell">
                    <span className="comp-icon-check">✓</span>
                  </div>
                  <div className="comp-cell">20+ години</div>
                  <div className="comp-cell">34 лв / година</div>
                  <div className="comp-cell">310 лв надценка</div>
                  <div className="comp-cell comp-cell--price">
                    <span className="price-val" style={{ color: "#1971C2" }}>680+ лв</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VB7 — Big Number Math Callout */}
        <div className="adv-wrap mt-4">
          <div className="adv-mathBanner">
            <div className="adv-mathBanner__numbers">
              <span className="adv-mathBanner__num adv-mathBanner__num--enemy">€89</span>
              <span className="adv-mathBanner__sep">·</span>
              <span className="adv-mathBanner__num">€189</span>
              <span className="adv-mathBanner__sep">·</span>
              <span className="adv-mathBanner__num adv-mathBanner__num--enemy">€349</span>
            </div>
            <p className="adv-mathBanner__caption">
              Евтин капан&nbsp;&nbsp;·&nbsp;&nbsp;Delora — клинична ефективност&nbsp;&nbsp;·&nbsp;&nbsp;Надплатен бранд
            </p>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="adv-wrap adv-text mt-4">
          <a href={DEVICE_HREF} className="adv-btnPrimary">
            Виж Delora →
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — OBJECTIONS (FAQ)
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--cream">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Честни отговори на честни въпроси.</h2>
          <div className="adv-divider" />
          <p className="adv-intro">Няма да ти продаваме лъжи. Ето каква е реалността.</p>
        </div>

        {/* VB8 — Suitability Chart */}
        <div className="adv-wrap adv-wrap--wide">
          <Placeholder
            id="visual-suitability"
            minH={320}
            label="VISUAL BLOCK 8 — ДИАГРАМА НА ПОДХОДЯЩИТЕ · Решетка: тонове на кожата × цвят на косата · Работи / Работи по-бавно / Не работи · За кого е Delora — и за кого не е (честността изгражда доверие)"
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
                  <div className="adv-faqAInner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Per Year Calculator */}
        <div className="adv-wrap adv-wrap--wide mt-4">
          <p className="adv-body adv-text" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            Цена за година — истинската математика
          </p>
          <div className="adv-calcGrid">
            <div className="adv-calcCard adv-calcCard--bad">
              <div className="adv-calcLabel">Евтиният (€89)</div>
              <div className="adv-calcAmount">€45</div>
              <div className="adv-calcSub">на година<br />(купуваш 5+ пъти за 10 год.)</div>
            </div>
            <div className="adv-calcCard adv-calcCard--good">
              <div className="adv-calcLabel">✓ Delora (€189)</div>
              <div className="adv-calcAmount">€9</div>
              <div className="adv-calcSub">на година<br />(20+ години живот)</div>
            </div>
            <div className="adv-calcCard adv-calcCard--neutral">
              <div className="adv-calcLabel">Премиумният (€349)</div>
              <div className="adv-calcAmount">€17</div>
              <div className="adv-calcSub">на година<br />(добро устр., лош deal)</div>
            </div>
          </div>
          <p className="adv-intro adv-text mt-2" style={{ fontSize: "0.78rem" }}>
            * Изчислено на база 20-годишен живот на устройствата
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 6 — SOCIAL PROOF
      ════════════════════════════════════════════ */}
      <section className="adv-section adv-section--tint">
        <div className="adv-wrap adv-text">
          <h2 className="adv-h2">Жени, които намериха правилния избор.</h2>
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
              {slides.map((slide) => (
                <div key={slide.id} className="adv-slide">
                  <div className="adv-slideImg" style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                    <img 
                      src={slide.image} 
                      alt="Преди и След" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                    <span className="adv-slideImgLabel" style={{ left: "25%", transform: "translateX(-50%)" }}>ПРЕДИ</span>
                    <span className="adv-slideImgLabel" style={{ left: "75%", transform: "translateX(-50%)" }}>СЛЕД</span>
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
          <h2 className="adv-h2">Клинична ефективност. €189. Без компромиси.</h2>
          <div className="adv-divider" />
          <p className="adv-sub" style={{ margin: "0 auto 2rem" }}>
            Не по-евтиното. Не по-скъпото. Правилното.
            <br />
            <strong>90 дни гаранция.</strong> Не виждаш резултат — пълна възвращане. 17 от 18 не го връщат.
          </p>
        </div>

        <div className="adv-wrap adv-wrap--wide">
          <div className="adv-offerGrid">
            {/* VB10 — Product Hero Shot */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src="/Photoshoots/Other/product_hero_offer.png"
                alt="Delora Elite IPL Уред"
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  height: "auto",
                  borderRadius: "16px",
                  objectFit: "cover",
                  boxShadow: "0 8px 30px rgba(91, 58, 122, 0.06)",
                }}
              />
            </div>

            <div>
              <h3 className="adv-h3" style={{ marginBottom: "0.5rem" }}>
                Delora Elite IPL
              </h3>
              <p className="adv-body" style={{ color: "var(--adv-muted)", marginBottom: "1.5rem" }}>
                26 J/cm² · Сапфирено охлаждане 15°C · 1,000,000 импулса · CE маркирано
              </p>

              {/* Price comparison mini-table */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.5rem",
                marginBottom: "1.5rem",
                padding: "1rem",
                background: "var(--adv-lavender-soft)",
                borderRadius: "12px",
                border: "1px solid var(--adv-lavender)",
                textAlign: "center",
                fontSize: "0.78rem",
              }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#DC2626" }}>€89</div>
                  <div style={{ color: "var(--adv-muted)" }}>€45/год.</div>
                  <div style={{ color: "var(--adv-muted)", fontSize: "0.68rem" }}>Евтин</div>
                </div>
                <div style={{ borderLeft: "1px solid var(--adv-lavender)", borderRight: "1px solid var(--adv-lavender)" }}>
                  <div style={{ fontWeight: 700, color: "var(--adv-amethyst)", fontSize: "1.1rem" }}>€189</div>
                  <div style={{ color: "var(--adv-amethyst)", fontWeight: 600 }}>€9/год. ✓</div>
                  <div style={{ color: "var(--adv-amethyst)", fontSize: "0.68rem", fontWeight: 700 }}>Delora</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#D97706" }}>€349</div>
                  <div style={{ color: "var(--adv-muted)" }}>€17/год.</div>
                  <div style={{ color: "var(--adv-muted)", fontSize: "0.68rem" }}>Надплатен</div>
                </div>
              </div>

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
