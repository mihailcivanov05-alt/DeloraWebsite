"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./ContentPages.css";

/* ── tiny helper ── */
const Placeholder = ({
  label,
  dims,
}: {
  label: string;
  dims: string;
}) => (
  <div className="cp-placeholder">
    <span className="cp-placeholder__icon">🖼️</span>
    <span className="cp-placeholder__label">{label}</span>
    <span className="cp-placeholder__dims">{dims}</span>
  </div>
);

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />

      <main className="cp-page">
        {/* ────────────────────────────────────────────
            1 · Hero
        ──────────────────────────────────────────── */}
        <section className="cp-hero cp-hero--warm">
          <div className="cp-container">
            <p className="cp-hero__eyebrow">РЪКОВОДСТВО</p>
            <h1 className="cp-hero__title">
              Вашият най-гладък старт с Delora
            </h1>
            <p className="cp-hero__subtitle">
              Всичко, което трябва да знаете, за да постигнете салонни резултати
              у дома — от подготовка до поддръжка.
            </p>
          </div>

          <div className="cp-hero__placeholder">
            <Placeholder label="Hero image" dims="~500 × 400" />
          </div>
        </section>

        {/* ────────────────────────────────────────────
            2 · 3-Step Guide
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <h2
              className="cp-section__title"
              style={{ textAlign: "center" }}
            >
              По-лесно, отколкото си мислите.
            </h2>
            <p className="cp-section__subtitle cp-section__subtitle--centered">
              Три прости стъпки до перфектно гладка кожа — всяка сесия отнема
              под 15 минути.
            </p>

            <div className="cp-steps" style={{ marginTop: "2.5rem" }}>
              {/* Step 1 */}
              <div className="cp-step">
                <div className="cp-step__visual">
                  <Placeholder label="Стъпка 1 image" dims="~400 × 220" />
                </div>
                <div className="cp-step__body">
                  <span className="cp-step__number">01</span>
                  <h3 className="cp-step__title">Подгответе кожата</h3>
                  <p className="cp-step__text">
                    Обръснете зоната и почистете кожата. Без восък или скъсване
                    24 часа преди.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="cp-step">
                <div className="cp-step__visual">
                  <Placeholder label="Стъпка 2 image" dims="~400 × 220" />
                </div>
                <div className="cp-step__body">
                  <span className="cp-step__number">02</span>
                  <h3 className="cp-step__title">Третирайте с Delora</h3>
                  <p className="cp-step__text">
                    Изберете ниво на интензивност, поставете устройството на
                    кожата и натиснете бутона за импулс.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="cp-step">
                <div className="cp-step__visual">
                  <Placeholder label="Стъпка 3 image" dims="~400 × 220" />
                </div>
                <div className="cp-step__body">
                  <span className="cp-step__number">03</span>
                  <h3 className="cp-step__title">Поддържайте резултатите</h3>
                  <p className="cp-step__text">
                    Повтаряйте на всеки 1-2 седмици за 8-12 седмици, след което
                    преминете на ежемесечна поддръжка.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────
            3 · Skin Prep Checklist
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <h2 className="cp-section__title">
              Как да подготвите кожата и да се чувствате сигурно
            </h2>

            <div className="cp-split" style={{ marginTop: "2rem" }}>
              {/* Left — checklist */}
              <div className="cp-checklist">
                {[
                  "Обръснете зоната поне 12 часа преди третирането",
                  "Почистете кожата — без лосиони, масла или грим",
                  "Избягвайте слънце и солариум 48 часа преди",
                  "Не използвайте восък или епилатор 2 седмици преди",
                  "Тествайте на малка зона преди пълно третиране",
                  "Носете UV защита на третираните зони",
                ].map((text, i) => (
                  <div className="cp-checklist__item" key={i}>
                    <span className="cp-checklist__check">✓</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Right — placeholder */}
              <Placeholder label="Skin prep image" dims="~500 × 400" />
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────
            4 · Skin Tone Compatibility
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <div className="cp-skintone">
              {/* Left — placeholder */}
              <div className="cp-skintone__visual">
                <Placeholder
                  label="Skin tone chart"
                  dims="~400 × 300"
                />
              </div>

              {/* Right — info */}
              <div className="cp-skintone__content">
                <h2 className="cp-section__title">
                  Вашият тон кожа идеален ли е за IPL?
                </h2>
                <p className="cp-section__subtitle">
                  IPL технологията работи най-ефективно при контраст между тона
                  на кожата и цвета на косъма. Използваме скалата на Фицпатрик
                  (I–VI), за да ви помогнем да определите дали Delora е подходящ
                  за вас.
                </p>

                <div className="cp-skintone__badges">
                  <span className="cp-skintone__badge cp-skintone__badge--safe">
                    Тон I — Безопасен
                  </span>
                  <span className="cp-skintone__badge cp-skintone__badge--safe">
                    Тон II — Безопасен
                  </span>
                  <span className="cp-skintone__badge cp-skintone__badge--safe">
                    Тон III — Безопасен
                  </span>
                  <span className="cp-skintone__badge cp-skintone__badge--safe">
                    Тон IV — Безопасен
                  </span>
                  <span className="cp-skintone__badge cp-skintone__badge--caution">
                    Тон V — Внимание
                  </span>
                  <span className="cp-skintone__badge cp-skintone__badge--caution">
                    Тон VI — Внимание
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────
            5 · Social Proof Banner
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <div className="cp-stat-banner">
              <p className="cp-stat-banner__number">90%</p>
              <p className="cp-stat-banner__text">
                от потребителите виждат по-гладка кожа след първите 4 седмици на
                редовно третиране с Delora
              </p>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────
            6 · After-Care Products
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <h2
              className="cp-section__title"
              style={{ textAlign: "center" }}
            >
              Грижа за кожата след третиране
            </h2>
            <p className="cp-section__subtitle cp-section__subtitle--centered">
              Допълнете процедурата с нашите специално разработени продукти за
              след-третиране.
            </p>

            <div className="cp-products" style={{ marginTop: "2.5rem" }}>
              {/* Product 1 */}
              <div className="cp-product">
                <div className="cp-product__image">
                  <Placeholder label="Успокояващ тоник" dims="~400 × 240" />
                </div>
                <div className="cp-product__info">
                  <h3 className="cp-product__name">Успокояващ тоник</h3>
                  <p className="cp-product__desc">
                    Хидратира и охлажда кожата след IPL третиране
                  </p>
                  <span className="cp-product__price">€29</span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="cp-product">
                <div className="cp-product__image">
                  <Placeholder
                    label="Регенериращ серум"
                    dims="~400 × 240"
                  />
                </div>
                <div className="cp-product__info">
                  <h3 className="cp-product__name">Регенериращ серум</h3>
                  <p className="cp-product__desc">
                    Стимулира възстановяването и подмладяването на кожата
                  </p>
                  <span className="cp-product__price">€39</span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="cp-product">
                <div className="cp-product__image">
                  <Placeholder
                    label="UV Защитен крем SPF50"
                    dims="~400 × 240"
                  />
                </div>
                <div className="cp-product__info">
                  <h3 className="cp-product__name">UV Защитен крем SPF50</h3>
                  <p className="cp-product__desc">
                    Защитава третираната кожа от UV лъчи
                  </p>
                  <span className="cp-product__price">€24</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────
            7 · Protect Your Skin Tips
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <div className="cp-care">
              {/* Left — tips */}
              <div className="cp-care__content">
                <h2 className="cp-section__title">
                  Защитете кожата, грижете се за сияйността
                </h2>

                <div className="cp-care__tip">
                  <span className="cp-care__tip-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7z"/>
                    </svg>
                  </span>
                  <p className="cp-care__tip-text">
                    Хидратирайте обилно след всяко третиране
                  </p>
                </div>

                <div className="cp-care__tip">
                  <span className="cp-care__tip-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                  </span>
                  <p className="cp-care__tip-text">
                    Нанасяйте SPF50 ежедневно на третираните зони
                  </p>
                </div>

                <div className="cp-care__tip">
                  <span className="cp-care__tip-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="9" y1="3" x2="9" y2="21"/>
                      <line x1="15" y1="3" x2="15" y2="21"/>
                      <line x1="3" y1="9" x2="21" y2="9"/>
                      <line x1="3" y1="15" x2="21" y2="15"/>
                    </svg>
                  </span>
                  <p className="cp-care__tip-text">
                    Използвайте хладен компрес при зачервяване
                  </p>
                </div>

                <div className="cp-care__tip">
                  <span className="cp-care__tip-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h7a4 4 0 0 1 4 4v12"/>
                      <path d="M11 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      <path d="M15 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      <path d="M19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      <path d="M7 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      <path d="M3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                  </span>
                  <p className="cp-care__tip-text">
                    Избягвайте горещи душове 24 часа след третирането
                  </p>
                </div>
              </div>

              {/* Right — placeholder */}
              <Placeholder
                label="Skincare routine image"
                dims="~400 × 350"
              />
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────
            8 · Complete Ritual CTA
        ──────────────────────────────────────────── */}
        <section className="cp-section">
          <div className="cp-container">
            <div className="cp-ritual">
              <h2 className="cp-ritual__title">
                Вашият пълен ритуал за безупречна кожа
              </h2>
              <p className="cp-ritual__text">
                Delora Elite IPL + правилната грижа = салонни резултати, всяка
                седмица, у дома.
              </p>
              <button className="cp-ritual__btn">Поръчайте сега →</button>
            </div>
          </div>
        </section>
      </main>

      {/* ── 9 · Footer ── */}
      <Footer />
    </>
  );
}
