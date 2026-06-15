"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./FAQAccordion.css";

const faqItems = [
  {
    question: {
      en: "How does Delora IPL work?",
      bg: "Как работи Delora IPL?"
    },
    answer: {
      en: "Delora uses Intense Pulsed Light (IPL) technology to target the melanin in hair follicles. The light energy is absorbed and converted to heat, which disables the follicle and prevents future growth.",
      bg: "Delora използва технология с интензивна импулсна светлина (IPL), за да насочи меланина в космените фоликули. Светлинната енергия се абсорбира и се превръща в топлина, която деактивира фоликула и предотвратява бъдещ растеж."
    }
  },
  {
    question: {
      en: "Does it hurt?",
      bg: "Боли ли?"
    },
    answer: {
      en: "Not at all! Unlike other IPL devices, Delora features our patented Sapphire Ice-Cooling technology that maintains a constant 10°C on the skin surface. Completely painless.",
      bg: "В никакъв случай! За разлика от други IPL устройства, Delora разполага с нашата патентована Sapphire Ice-Cooling технология, която поддържа постоянни 10°C на повърхността на кожата. Напълно безболезнено."
    }
  },
  {
    question: {
      en: "When will I see results?",
      bg: "Кога ще видя резултати?"
    },
    answer: {
      en: "Most users notice a visible reduction in hair growth after just 3–4 sessions. For optimal results of up to 95% hair reduction, we recommend completing the full 8-week protocol.",
      bg: "Повечето потребители забелязват видимо намаляване на растежа на косата само след 3-4 сесии. За оптимални резултати от до 95% намаляване на окосмяването, препоръчваме да завършите пълния 8-седмичен протокол."
    }
  },
  {
    question: {
      en: "Which body areas can I use it on?",
      bg: "Върху кои зони на тялото мога да го използвам?"
    },
    answer: {
      en: "Delora is safe and effective on legs, arms, underarms, bikini line, stomach, back, and face (below the cheekbones). Do not use it around the eyes or on tattoos.",
      bg: "Delora е безопасна и ефективна за крака, ръце, подмишници, бикини линия, корем, гръб и лице (под скулите). Не го използвайте около очите или върху татуировки."
    }
  },
  {
    question: {
      en: "Is it safe for my skin tone and hair color?",
      bg: "Безопасно ли е за моя тон на кожата и цвят на косата?"
    },
    answer: {
      en: "Delora works best on light to medium skin tones (Fitzpatrick types I–IV) with dark hair (black, dark brown, or light brown). It is not effective on blonde, red, white, or grey hair.",
      bg: "Delora работи най-добре върху светли до средни тонове на кожата (типове по Фицпатрик I–IV) с тъмна коса (черна, тъмнокафява или светлокафява). Не е ефективен при руса, червена, бяла или сива коса."
    }
  },
  {
    question: {
      en: "How often should I use it?",
      bg: "Колко често трябва да го използвам?"
    },
    answer: {
      en: "During the initial treatment phase, use Delora once per week for 8 weeks. After that, use it once a month for maintenance touch-ups.",
      bg: "По време на началната фаза на лечение използвайте Delora веднъж седмично в продължение на 8 седмици. След това го използвайте веднъж месечно за поддържащи корекции."
    }
  },
  {
    question: {
      en: "What is included in the box?",
      bg: "Какво е включено в кутията?"
    },
    answer: {
      en: "Your Delora Elite package includes: the IPL device, a power adaptor cord, protective eyewear, a precision razor, a premium storage pouch, and a manual.",
      bg: "Вашият пакет Delora Elite включва: IPL устройство, захранващ кабел за адаптер, предпазни очила, прецизна самобръсначка, първокласна чанта за съхранение и ръководство."
    }
  },
  {
    question: {
      en: "What if I am not satisfied?",
      bg: "Какво ще стане, ако не съм доволен?"
    },
    answer: {
      en: "We offer a 90-day money-back guarantee. If you are not completely satisfied, simply contact our support team for a full refund.",
      bg: "Предлагаме 90-дневна гаранция за връщане на парите. Ако не сте напълно доволни, просто се свържете с нашия екип за поддръжка за пълно възстановяване на сумата."
    }
  }
];

const FAQAccordion = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faqAccordion">
      <div className="container">
        <h2 className="faqAccordion-title">
          {language === "en" ? "Frequently Asked Questions" : "Често задавани въпроси"}
        </h2>
        <div className="faqAccordion-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faqAccordion-item ${isOpen ? "faqAccordion-item--open" : ""}`}
              >
                <button 
                  className="faqAccordion-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faqAccordion-questionText">
                    {language === "en" ? item.question.en : item.question.bg}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="faqAccordion-icon" size={24} />
                  ) : (
                    <ChevronDown className="faqAccordion-icon" size={24} />
                  )}
                </button>
                <div 
                  className="faqAccordion-answerWrapper"
                  style={{ maxHeight: isOpen ? "1000px" : "0px" }}
                >
                  <div className="faqAccordion-answer">
                    <p>{language === "en" ? item.answer.en : item.answer.bg}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
