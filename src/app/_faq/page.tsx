"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, ShieldCheck, Sparkles, Zap, Microscope, Package } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./faq.css";

const FAQ_DATA = {
  en: [
    {
      category: "Safety & Skin Compatibility",
      icon: <ShieldCheck size={20} />,
      questions: [
        { q: "Is Delora safe for all skin tones?", a: "Delora is clinically tested and safe for Fitzpatrick skin types I through V. It is not recommended for very deep skin tones (Type VI)." },
        { q: "Can I use it over tattoos?", a: "No. Never apply Delora over tattooed skin or permanent makeup." },
        { q: "Can I use it on my face?", a: "Yes — for areas below the cheekbones (upper lip, chin, cheeks)." }
      ]
    },
    {
      category: "Effectiveness & Results",
      icon: <Sparkles size={20} />,
      questions: [
        { q: "How quickly will I see results?", a: "Most users report visible reduction after 3-4 treatments. 80-95% reduction after a full 8-session course." },
        { q: "Does hair color affect results?", a: "Yes — most effective on dark hair. Not suitable for red, light blonde, or grey hair." }
      ]
    }
  ],
  bg: [
    {
      category: "Безопасност и съвместимост",
      icon: <ShieldCheck size={20} />,
      questions: [
        { q: "Безопасна ли е Delora за всички типове кожа?", a: "Delora е клинично тествана и безопасна за типове кожа от I до V по скалата на Фицпатрик. Не се препоръчва за много тъмна кожа (Тип VI)." },
        { q: "Мога ли да я използвам върху татуировки?", a: "Не. Никога не използвайте Delora върху татуирана кожа или перманентен грим." },
        { q: "Мога ли да я използвам на лицето си?", a: "Да — за зони под скулите (горна устна, брадичка, бузи)." }
      ]
    },
    {
      category: "Ефективност и резултати",
      icon: <Sparkles size={20} />,
      questions: [
        { q: "Колко бързо ще видя резултати?", a: "Повечето потребители съобщават за видимо намаление след 3-4 процедури. 80-95% намаление след пълен курс от 8 сесии." },
        { q: "Цветът на косата влияе ли на резултатите?", a: "Да — най-ефективно е върху тъмна коса. Не е подходящо за червена, светло руса или сива коса." }
      ]
    }
  ]
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function FaqPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = language === 'bg' ? FAQ_DATA.bg : FAQ_DATA.en;

  return (
    <main>
      <Navbar />

      <section className="faq-hero">
        <div className="container">
          <span className="faq-badge">{language === 'en' ? 'Support Centre' : 'Център за поддръжка'}</span>
          <h1>{language === 'en' ? 'Frequently Asked Questions' : 'Често задавани въпроси'}</h1>
          <p>{language === 'en' ? 'Everything you need to know before, during, and after your Delora journey.' : 'Всичко, което трябва да знаете преди, по време и след вашето пътешествие с Delora.'}</p>
        </div>
      </section>

      <section className="faq-body">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-sidebar">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`faq-cat-btn ${activeCategory === i ? "active" : ""}`}
                  onClick={() => setActiveCategory(i)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.category}</span>
                </button>
              ))}
            </div>

            <div className="faq-questions">
              <h2 className="faq-cat-title">
                {categories[activeCategory].icon} {categories[activeCategory].category}
              </h2>
              {categories[activeCategory].questions.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

