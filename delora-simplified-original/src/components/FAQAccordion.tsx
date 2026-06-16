"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./FAQAccordion.css";

const faqItems = [
  {
    question: "Как работи Delora IPL?",
    answer:
      "Delora използва технология с интензивна импулсна светлина (IPL), за да насочи меланина в космените фоликули. Светлинната енергия се абсорбира и се превръща в топлина, която деактивира фоликула и предотвратява бъдещ растеж.",
  },
  {
    question: "Боли ли?",
    answer:
      "В никакъв случай! За разлика от други IPL устройства, Delora разполага с нашата патентована Sapphire Ice-Cooling технология, която поддържа постоянни 10°C на повърхността на кожата. Напълно безболезнено.",
  },
  {
    question: "Кога ще видя резултати?",
    answer:
      "Повечето потребители забелязват видимо намаляване на растежа на косата само след 3-4 сесии. За оптимални резултати от до 95% намаляване на окосмяването, препоръчваме да завършите пълния 8-седмичен протокол.",
  },
  {
    question: "Върху кои зони на тялото мога да го използвам?",
    answer:
      "Delora е безопасна и ефективна за крака, ръце, подмишници, бикини линия, корем, гръб и лице (под скулите). Не го използвайте около очите или върху татуировки.",
  },
  {
    question: "Безопасно ли е за моя тон на кожата и цвят на косата?",
    answer:
      "Delora работи най-добре върху светли до средни тонове на кожата (типове по Фицпатрик I–IV) с тъмна коса (черна, тъмнокафява или светлокафява). Не е ефективен при руса, червена, бяла или сива коса.",
  },
  {
    question: "Колко често трябва да го използвам?",
    answer:
      "По време на началната фаза на лечение използвайте Delora веднъж седмично в продължение на 8 седмици. След това го използвайте веднъж месечно за поддържащи корекции.",
  },
  {
    question: "Какво е включено в кутията?",
    answer:
      "Вашият пакет Delora Elite включва: IPL устройство, захранващ кабел за адаптер, предпазни очила, прецизна самобръсначка, първокласна чанта за съхранение и ръководство.",
  },
  {
    question: "Какво ще стане, ако не съм доволен?",
    answer:
      "Предлагаме 90-дневна гаранция за връщане на парите. Ако не сте напълно доволни, просто се свържете с нашия екип за поддръжка за пълно възстановяване на сумата.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faqAccordion">
      <div className="container">
        <h2 className="faqAccordion-title">Често задавани въпроси</h2>
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
                  <span className="faqAccordion-questionText">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="faqAccordion-icon" size={24} />
                  ) : (
                    <ChevronDown className="faqAccordion-icon" size={24} />
                  )}
                </button>
                <div
                  className="faqAccordion-answerWrapper"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <div className="faqAccordion-answer">
                    <p>{item.answer}</p>
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
