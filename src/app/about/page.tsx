"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import "./about.css";

export default function AboutPage() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      hero: "Beauty shouldn't require a clinic appointment.",
      sub: "Delora was born from a simple idea: the same technology that removes hair in clinics should be accessible to everyone, at home.",
      title1: "A Problem Worth Solving",
      p1: "The average person spends thousands and countless hours managing unwanted hair. Delora set out to change that.",
      valuesTitle: "Three Principles. No Exceptions.",
      v1: "Clinical Efficacy",
      v1d: "Every specification is backed by clinical testing. We deliver long-lasting smoothness that you can trust.",
      v2: "Safety First",
      v2d: "Our SmartSkin sensor and cooling system are built into every device to ensure the highest safety standards.",
      v3: "Accessible Luxury",
      v3d: "Premium design and results shouldn't mean extreme pricing. We offer salon-grade quality at home."
    },
    bg: {
      hero: "Красотата не трябва да изисква посещение в клиника.",
      sub: "Delora се роди от проста идея: същата технология, която премахва окосмяването в клиниките, трябва да бъде достъпна за всеки у дома.",
      title1: "Проблем, който си струва да бъде решен",
      p1: "Средностатистическият човек харчи хиляди и безброй часове в управление на нежеланото окосмяване. Delora реши да промени това.",
      valuesTitle: "Три принципа. Без изключения.",
      v1: "Клинична ефективност",
      v1d: "Всяка спецификация е подкрепена от клинични тестове. Ние осигуряваме дълготрайна гладкост, на която можете да се доверите.",
      v2: "Безопасността на първо място",
      v2d: "Нашият SmartSkin сензор и охладителна система са вградени във всяко устройство за най-високи стандарти за безопасност.",
      v3: "Достъпен лукс",
      v3d: "Премиум дизайнът и резултатите не трябва да означават екстремни цени. Предлагаме качество от салон у дома."
    }
  };

  const c = language === 'bg' ? content.bg : content.en;

  return (
    <main>
      <Navbar />

      <section className="about-hero">
        <div className="container">
          <span className="about-badge">{language === 'en' ? 'Our Mission' : 'Нашата мисия'}</span>
          <h1>{c.hero}</h1>
          <p>{c.sub}</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <div className="about-text">
              <span className="about-label">{language === 'en' ? 'The Beginning' : 'Началото'}</span>
              <h2>{c.title1}</h2>
              <p>{c.p1}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-light">
        <div className="container about-center">
          <span className="about-label">{language === 'en' ? 'What We Stand For' : 'За какво се борим'}</span>
          <h2>{c.valuesTitle}</h2>
          <div className="about-values">
            <div className="about-value-card glass-panel">
              <span className="about-value-n">01</span>
              <h3>{c.v1}</h3>
              <p>{c.v1d}</p>
            </div>
            <div className="about-value-card glass-panel">
              <span className="about-value-n">02</span>
              <h3>{c.v2}</h3>
              <p>{c.v2d}</p>
            </div>
            <div className="about-value-card glass-panel">
              <span className="about-value-n">03</span>
              <h3>{c.v3}</h3>
              <p>{c.v3d}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-center">
          <h2>{language === 'en' ? 'Ready to experience the difference?' : 'Готови ли сте да усетите разликата?'}</h2>
          <Button variant="primary" size="lg" href="/#consultation">
            {t.quiz.cta}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

