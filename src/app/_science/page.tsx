"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { Zap, Thermometer, Eye, Shield, Activity, Waves } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./science.css";

export default function SciencePage() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "Clinical Technology",
      heroTitle: "The Physics of Perfection",
      heroSub: "Every photon of light Delora emits is calibrated to a precise wavelength — engineered to effectively disable hair follicles, without compromising the skin around them.",
      label1: "How IPL Works",
      title1: "Selective Photothermolysis",
      desc1a: "Delora delivers bursts of broad-spectrum light (550nm–1200nm) absorbed exclusively by melanin — the pigment inside your hair follicle. This selective absorption converts light to heat, raising the follicle temperature above 70°C to effectively disable regrowth — while leaving surrounding tissue untouched.",
      desc1b: "This is the same principle used in professional laser clinics, now miniaturised into Delora\u2019s precision window.",
      spectrumLabel: "Delora Range",
      follicleTemp: "Follicle Target Temp",
      skinSurface: "Skin Surface (Cooled)",
      coolingLabel: "Sapphire Ice-Cooling Core",
      coolingTitle: "Cold Precision. Zero Discomfort.",
      coolingDesc1: "The Delora contact surface is a synthetic sapphire crystal — one of the hardest, most thermally conductive materials on earth. It continuously draws heat away from the skin before, during, and after each flash, maintaining the surface at a constant 10°C.",
      coolingDesc2: "The result: zero burning sensation, no redness, and no downtime. You can treat your legs on your lunch break.",
      standardIPL: "Standard IPL",
      aiLabel: "AI Safety System",
      aiTitle: "SmartSkin\u2122 Intelligence",
      aiSub: "Delora\u2019s built-in sensor reads your skin tone 80 times per second and automatically selects the optimal intensity for your Fitzpatrick type — ensuring you never receive too much or too little energy.",
      sensors: [
        { title: "Skin Tone Detection", desc: "Reads melanin concentration to set safe energy levels before every flash." },
        { title: "80Hz Sampling", desc: "Continuously adapts across body areas with different skin depths and tones." },
        { title: "Safety Interlock", desc: "Won\u2019t fire if the window isn\u2019t fully in contact with your skin, preventing accidental flashes." },
        { title: "Flash Calibration", desc: "Modulates pulse duration and energy density for each zone — face vs. body vs. bikini." },
        { title: "0.5s Flash Rate", desc: "Industry-fastest pulse interval. Full legs done in under 4 minutes." },
        { title: "Thermal Guard", desc: "Auto-pauses if the sapphire window exceeds safe operating temperature." },
      ],
      clinicalLabel: "Clinical Validation",
      clinicalTitle: "Numbers Don\u2019t Lie",
      proof: [
        { val: "95%", lbl: "Hair reduction after 8 weeks" },
        { val: "1,000,000", lbl: "Lifetime flashes guaranteed" },
        { val: "FDA", lbl: "Cleared for safe home use" },
        { val: "Fitz I\u2013V", lbl: "Safe for most skin types" },
        { val: "4 min", lbl: "Full leg treatment time" },
        { val: "3x", lbl: "More efficient than standard IPL" },
      ],
      ctaTitle: "Ready to Experience the Science?",
      ctaSub: "Take our 30-second skin consultation and get your personalised protocol.",
      ctaBtn: "Start My Skin Consultation",
    },
    bg: {
      badge: "Клинична технология",
      heroTitle: "Физиката на съвършенството",
      heroSub: "Всеки фотон светлина, който Delora излъчва, е калибриран до прецизна дължина на вълната — проектиран за трайно премахване на окосмяването, без да компрометира кожата около тях.",
      label1: "Как работи IPL",
      title1: "Селективна фототермолиза",
      desc1a: "Delora излъчва импулси от широкоспектърна светлина (550nm–1200nm), абсорбирана изключително от меланина — пигментът във вашия фоликул. Тази селективна абсорбция превръща светлината в топлина, повишавайки температурата на фоликула над 70°C за трайно прекъсване на растежа — като оставя околната тъкан непокътната.",
      desc1b: "Това е същият принцип, използван в професионалните лазерни клиники, миниатюризиран в прецизния прозорец на Delora.",
      spectrumLabel: "Обхват на Delora",
      follicleTemp: "Целева темп. на фоликул",
      skinSurface: "Кожна повърхност (охладена)",
      coolingLabel: "Sapphire Ice-Cooling ядро",
      coolingTitle: "Студена прецизност. Нулев дискомфорт.",
      coolingDesc1: "Контактната повърхност на Delora е синтетичен сапфирен кристал — един от най-твърдите и термично проводими материали на земята. Той непрекъснато отвежда топлината от кожата преди, по време и след всеки импулс, поддържайки повърхността при постоянни 10°C.",
      coolingDesc2: "Резултатът: нулево усещане за парене, без зачервяване и без престой. Можете да третирате краката си по време на обедна почивка.",
      standardIPL: "Стандартен IPL",
      aiLabel: "AI система за безопасност",
      aiTitle: "SmartSkin\u2122 Интелект",
      aiSub: "Вграденият сензор на Delora чете тена на кожата ви 80 пъти в секунда и автоматично избира оптималния интензитет за вашия тип по Фицпатрик — гарантирайки, че никога не получавате твърде много или твърде малко енергия.",
      sensors: [
        { title: "Детекция на тена", desc: "Чете концентрацията на меланин, за да зададе безопасни нива на енергия преди всеки импулс." },
        { title: "80Hz семплиране", desc: "Непрекъснато се адаптира към области на тялото с различна дълбочина и тон на кожата." },
        { title: "Блокировка за безопасност", desc: "Няма да се задейства, ако прозорецът не е в пълен контакт с кожата ви, предотвратявайки случайни импулси." },
        { title: "Калибриране на импулса", desc: "Модулира продължителността и енергийната плътност за всяка зона — лице, тяло или бикини." },
        { title: "0.5s скорост", desc: "Най-бърз интервал в индустрията. Пълни крака за под 4 минути." },
        { title: "Термична защита", desc: "Автоматично спира, ако сапфиреният прозорец надвиши безопасната температура." },
      ],
      clinicalLabel: "Клинична валидация",
      clinicalTitle: "Числата не лъжат",
      proof: [
        { val: "95%", lbl: "Намаляване на окосмяването за 8 седмици" },
        { val: "1,000,000", lbl: "Гарантирани импулси за цял живот" },
        { val: "FDA", lbl: "Одобрен за безопасна домашна употреба" },
        { val: "Fitz I\u2013V", lbl: "Безопасен за повечето типове кожа" },
        { val: "4 мин", lbl: "Време за третиране на цели крака" },
        { val: "3x", lbl: "По-ефективен от стандартен IPL" },
      ],
      ctaTitle: "Готови ли сте да изпитате науката?",
      ctaSub: "Направете нашата 30-секундна консултация и получете персонализиран протокол.",
      ctaBtn: "Започни консултация",
    }
  };

  const sensorIcons = [Eye, Activity, Shield, Waves, Zap, Thermometer];
  const c = language === 'bg' ? content.bg : content.en;

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="sci-hero">
        <div className="container">
          <span className="sci-badge">{c.badge}</span>
          <h1 className="sci-hero-title">{c.heroTitle}</h1>
          <p className="sci-hero-sub">{c.heroSub}</p>
        </div>
      </section>

      {/* Core Technology */}
      <section className="sci-section sci-light">
        <div className="container">
          <div className="sci-split">
            <div className="sci-split-text">
              <span className="sci-label">{c.label1}</span>
              <h2>{c.title1}</h2>
              <p>{c.desc1a}</p>
              <p>{c.desc1b}</p>
            </div>
            <div className="sci-split-visual" role="img" aria-label="IPL Wavelength Spectrum showing Delora range between 550nm and 1200nm">
              <div className="sci-spectrum-bar" aria-hidden="true">
                <div className="sci-spectrum-fill" />
                <div className="sci-spectrum-labels">
                  <span>550nm</span>
                  <span className="sci-spectrum-active">{c.spectrumLabel}</span>
                  <span>1200nm</span>
                </div>
              </div>
              <div className="sci-stat-pair">
                <div className="sci-stat-box">
                  <span className="sci-stat-val">70°C+</span>
                  <span className="sci-stat-lbl">{c.follicleTemp}</span>
                </div>
                <div className="sci-stat-box">
                  <span className="sci-stat-val">10°C</span>
                  <span className="sci-stat-lbl">{c.skinSurface}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sapphire Cooling */}
      <section className="sci-section">
        <div className="container">
          <div className="sci-split sci-split-reverse">
            <div className="sci-split-text">
              <span className="sci-label">{c.coolingLabel}</span>
              <h2>{c.coolingTitle}</h2>
              <p>{c.coolingDesc1}</p>
              <p>{c.coolingDesc2}</p>
            </div>
            <div className="sci-cooling-visual" role="img" aria-label={`Temperature comparison: Standard IPL reaches 45°C while Delora maintains a cool 10°C.`}>
              <Thermometer size={80} className="sci-icon-glow" aria-hidden="true" />
              <div className="sci-cooling-stats" aria-hidden="true">
                <div className="sci-cooling-row">
                  <span>{c.standardIPL}</span>
                  <div className="sci-bar sci-bar-hot" />
                  <span>45°C</span>
                </div>
                <div className="sci-cooling-row">
                  <span>Delora</span>
                  <div className="sci-bar sci-bar-cool" />
                  <span>10°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SmartSkin Sensor */}
      <section className="sci-section sci-light">
        <div className="container sci-center">
          <span className="sci-label">{c.aiLabel}</span>
          <h2>{c.aiTitle}</h2>
          <p className="sci-section-sub">{c.aiSub}</p>
          <div className="sci-sensors-grid">
            {c.sensors.map((item, index) => {
              const IconComp = sensorIcons[index];
              return (
                <div key={item.title} className="sci-sensor-card glass-panel">
                  <IconComp size={32} className="sci-sensor-icon" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinical Proof */}
      <section className="sci-section sci-dark">
        <div className="container sci-center">
          <span className="sci-label sci-label-light">{c.clinicalLabel}</span>
          <h2 className="sci-light-text">{c.clinicalTitle}</h2>
          <div className="sci-proof-grid">
            {c.proof.map((item) => (
              <div key={item.lbl} className="sci-proof-card">
                <span className="sci-proof-val">{item.val}</span>
                <span className="sci-proof-lbl">{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sci-section sci-cta">
        <div className="container sci-center">
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaSub}</p>
          <Button variant="primary" size="lg" href="/#consultation">
            {c.ctaBtn}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
