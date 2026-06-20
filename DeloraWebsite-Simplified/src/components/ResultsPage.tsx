"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./ContentPages.css";

/* ── placeholder helper ── */
const Placeholder = ({
  label,
  dims,
  icon = "🖼️",
  className = "",
  style = {},
}: {
  label: string;
  dims: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={`cp-placeholder ${className}`} style={style}>
    <span className="cp-placeholder__icon">{icon}</span>
    <span className="cp-placeholder__label">{label}</span>
    <span className="cp-placeholder__dims">{dims}</span>
  </div>
);

/* ── tab data ── */
const TABS = [
  {
    id: "hair-removal",
    label: "Трайна фотоепилация",
    title: "Намалява възобновяването на космите за перманентно гладка кожа",
    desc: "До 95% редукция на видимия растеж на космите след 12 седмици последователно IPL третиране.",
    quote:
      "„Светлината е насочена към меланина в косъмчето. Тази топлина увредена способността на фоликула да произвежда нов косъм — водещ до перманентна редукция без химикали.“",
    expert: "Д-р Елена Хейнеман, дерматолог",
  },
  {
    id: "ingrown",
    label: "Врастнали косъмчета",
    title: "Елиминира врастналите косъмчета завинаги",
    desc: "IPL спира растежа от корена, което означава нулев шанс за врастване, раздразнение или червени точки.",
    quote:
      "„Когато фоликулът спре да произвежда косъм, врастналите косъмчета стават физически невъзможни.“",
    expert: "Д-р Мария Иванова, к.м.н.",
  },
  {
    id: "pigmentation",
    label: "Петна и пигментация",
    title: "Изравнява тена и намалява хиперпигментацията",
    desc: "IPL светлината разгражда натрупания меланин и стимулира обновяването на кожата за равномерен тен.",
    quote:
      "„Широкоспектърната IPL светлина е доказано ефективна срещу слънчеви петна и неравномерна пигментация.“",
    expert: "Проф. Николай Петров, фотомедицина",
  },
  {
    id: "lines",
    label: "Фини линии и бръчки",
    title: "Намалява фините линии чрез колагенова стимулация",
    desc: "IPL енергията прониква в дълбоките слоеве на кожата и активира производството на колаген и еластин.",
    quote:
      "„Фотоподмладяването с IPL е една от най-ефективните нехирургични процедури за борба със стареенето.“",
    expert: "Д-р Елена Стоянова, дерматолог",
  },
  {
    id: "skin-tone",
    label: "Подобрен тен на кожата",
    title: "Сияен, равномерен тен без филтри",
    desc: "Редовното IPL третиране подобрява текстурата, намалява порите и придава естествен блясък на кожата.",
    quote:
      "„Пациентите ми забелязват видимо подобрение в текстурата и сияйността на кожата след 4-6 сесии.“",
    expert: "Д-р Мария Иванова, к.м.н.",
  },
  {
    id: "collagen",
    label: "Стегната кожа / Колаген",
    title: "Стимулира колагена за стегната, еластична кожа",
    desc: "IPL светлината активира фибробластите — клетките, отговорни за производството на колаген и еластин.",
    quote:
      "„Комбинацията от фотоепилация и колагенова стимулация прави IPL уникално двойно решение за кожата.“",
    expert: "Проф. Николай Петров, фотомедицина",
  },
];

/* ── protocol rows ── */
const PROTOCOL = [
  {
    week: "1",
    happening: "Фотобелизация",
    notice: "Начално изсветляване",
  },
  {
    week: "2",
    happening: "Фоликулът се поврежда",
    notice: "Бавен растеж & по-малко косми",
  },
  {
    week: "4",
    happening: "Растежният цикъл отслабва",
    notice: "Значителна & трайна редукция",
  },
  {
    week: "8–10",
    happening: "Перманентна редукция",
    notice: "Над 90% по-малко косми",
  },
  {
    week: "12+ (поддържане)",
    happening: "Минимален повторен растеж",
    notice: "Дълготрайна гладкост",
  },
];

/* ── references ── */
const REFERENCES = [
  "Gan, S.D. & Graber, E.M. (2013). «Laser hair removal: A review.» Dermatologic Surgery, 39(6), 823–838.",
  "Town, G. et al. (2012). «A Meta-analysis of the Reduction in Hair Count with Flashlamp-based Intense Pulsed Light Technology.» Lasers Med Sci, 27(5), 1109–1117.",
  "Haedersdal, M. & Gøtzsche, P.C. (2006). «Laser and photoepilation for unwanted hair growth.» Cochrane Database of Systematic Reviews, CD004684.",
  "Goldberg, D.J. (2007). «Current trends in intense pulsed light.» Journal of Clinical Dermatology, 25(3), 211–213.",
];

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="cp-page">
      <Navbar />

      {/* ─── 1. Hero ─── */}
      <section className="cp-hero cp-hero--dark">
        <div className="cp-container" style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <div style={{ flex: 1 }}>
            <p className="cp-hero__eyebrow">РЕЗУЛТАТИ</p>
            <h1 className="cp-hero__title">
              Клинично доказани резултати.
              <br />
              Обичани от хиляди жени.
            </h1>
            <p className="cp-hero__subtitle">
              Научно потвърдена ефективност. Видими резултати от първите сесии.
            </p>
          </div>
          <div style={{ flex: "0 0 45%" }}>
            <Placeholder
              label="Hero изображение — жена с гладка кожа"
              dims="~600 × 400 px"
              icon="📸"
              style={{ minHeight: 320 }}
            />
          </div>
        </div>
      </section>

      {/* ─── 2. Tabbed Benefits ─── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-tabs">
            {/* Sidebar */}
            <div className="cp-tabs__sidebar">
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  className={`cp-tabs__tab ${i === activeTab ? "cp-tabs__tab--active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="cp-tabs__content">
              {TABS.map((t, i) => (
                <div
                  key={t.id}
                  className={`cp-tabs__panel ${i === activeTab ? "cp-tabs__panel--active" : ""}`}
                >
                  <h2 className="cp-section__title" style={{ marginBottom: "0.5rem" }}>
                    {t.title}
                  </h2>
                  <p className="cp-section__subtitle" style={{ marginBottom: "1.5rem" }}>
                    {t.desc}
                  </p>

                  <div className="cp-tabs__grid">
                    <Placeholder
                      label="Преди — снимка"
                      dims="~300 × 200 px"
                      icon="📷"
                      style={{ minHeight: 180 }}
                    />
                    <Placeholder
                      label="След — снимка"
                      dims="~300 × 200 px"
                      icon="📷"
                      style={{ minHeight: 180 }}
                    />
                  </div>

                  <div className="cp-tabs__quote-card">
                    <p className="cp-tabs__quote-text">{t.quote}</p>
                    <div className="cp-tabs__quote-author">
                      <Placeholder
                        label=""
                        dims=""
                        icon="👤"
                        className="cp-tabs__quote-avatar"
                        style={{ minHeight: 44, width: 44, padding: "0.5rem", borderRadius: "50%" }}
                      />
                      <div>
                        <span className="cp-tabs__quote-name">{t.expert}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Treatment Protocol ─── */}
      <section className="cp-section" style={{ background: "#FFFBF7" }}>
        <div className="cp-container">
          <div className="cp-table-wrap">
            <h2 className="cp-table-heading">Протокол на третиране</h2>
            <p className="cp-table-sub">
              Използвайте Delora на 8–12 седмици, след това поддържайте на всеки 1–2 месеца за оптимални резултати.
            </p>

            <table className="cp-table">
              <thead>
                <tr>
                  <th>Седмица</th>
                  <th>Какво се случва</th>
                  <th>Какво ще забележите</th>
                </tr>
              </thead>
              <tbody>
                {PROTOCOL.map((r, i) => (
                  <tr key={i}>
                    <td>{r.week}</td>
                    <td>{r.happening}</td>
                    <td>{r.notice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 4. Testimonials ─── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-testimonials">
            <div className="cp-testimonial">
              <div className="cp-testimonial__stars">★★★★★</div>
              <p className="cp-testimonial__text">
                „Спрях да се бръсна след 6-та седмица — краката ми са напълно гладки."
              </p>
              <span className="cp-testimonial__author">Лорена М.</span>
            </div>
            <div className="cp-testimonial">
              <div className="cp-testimonial__stars">★★★★★</div>
              <p className="cp-testimonial__text">
                „Тенът ми се подобри, порите намаляха и текстурата е невероятна."
              </p>
              <span className="cp-testimonial__author">Михаела П.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Clinical Proof Banner ─── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-banner">
            <div className="cp-banner__left">
              <span className="cp-banner__left-eyebrow">КЛИНИЧНИТЕ ДОКАЗАТЕЛСТВА</span>
              <h2 className="cp-banner__left-title">
                клинично доказана
                <br />
                ефективност в повече от 30+
                <br />
                независими проучвания
              </h2>
            </div>
            <div className="cp-banner__right">
              <span className="cp-banner__right-stat">30+</span>
              <p className="cp-banner__right-desc">
                клинични изследвания, потвърждаващи трайни резултати за фотоепилация и подмладяване на кожата.
              </p>
              <div className="cp-banner__dots">
                <span className="cp-banner__dot cp-banner__dot--active" />
                <span className="cp-banner__dot" />
                <span className="cp-banner__dot" />
                <span className="cp-banner__dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Clinical References ─── */}
      <section className="cp-section cp-references">
        <div className="cp-container">
          <h3 className="cp-references__title">КЛИНИЧНИ ИЗТОЧНИЦИ</h3>
          <div className="cp-references__list">
            {REFERENCES.map((ref, i) => (
              <p key={i} className="cp-references__item">
                [{i + 1}] {ref}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Newsletter ─── */}
      <section className="cp-section">
        <div className="cp-container">
          <div className="cp-newsletter">
            <h3 className="cp-newsletter__title">Бюлетин на Delora</h3>
            <p className="cp-newsletter__desc">
              Получавайте ексклузивни съвети, промоции и новини директно във вашата поща. Без спам, обещаваме.
            </p>
            <div className="cp-newsletter__form">
              <input
                type="email"
                placeholder="Вашият имейл *"
                className="cp-newsletter__input"
                aria-label="Имейл за бюлетин"
              />
              <button className="cp-newsletter__btn">АБОНИРАЙ СЕ</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. Footer ─── */}
      <Footer />
    </main>
  );
}
