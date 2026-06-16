"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./BeforeAfterSection.css";

const results = [
  {
    before: "/Photoshoots/Before & After/hf_20260524_132911_1a22dc83-68e9-4b5d-a8ff-b2f64e312ed5.png",
    after: "/Photoshoots/Before & After/hf_20260524_134252_d9bbaf12-a12b-4ffb-9d8e-f28ae978aafc.png",
    title: "Подмишници — 6 седмици",
    desc: "Видимо намаляване на гъстотата и дебелината на косъма след завършване на препоръчителния 6-седмичен курс.",
  },
  {
    before: "/Photoshoots/Before & After/hf_20260524_132222_8f8715c8-6c0d-4b75-8d96-4a34ba142605.png",
    after: "/Photoshoots/Before & After/hf_20260524_140502_69b5000a-e610-4a50-b8aa-a607c2706cb2.png",
    title: "Крака — 8 седмици",
    desc: "Значително намаляване на окосмяването и по-гладка текстура на кожата при редовни седмични процедури.",
  },
];

const BeforeAfterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextResult = () => setActiveIndex((prev) => (prev + 1) % results.length);
  const prevResult = () => setActiveIndex((prev) => (prev - 1 + results.length) % results.length);

  const current = results[activeIndex];

  return (
    <section className="beforeAfterSection">
      <div className="container">
        <div className="beforeAfter-header">
          <h2 className="beforeAfter-title">Реални резултати, реални хора</h2>
          <p className="beforeAfter-subtitle">
            Вижте трансформацията, която нашите клиенти изпитват при редовна употреба.
          </p>
        </div>

        <div className="beforeAfter-card">
          <div className="beforeAfter-images">
            <div className="beforeAfter-imageContainer">
              <img src={current.before} alt="Преди процедурата" loading="lazy" />
              <span className="beforeAfter-label">ПРЕДИ</span>
            </div>
            <div className="beforeAfter-imageContainer">
              <img src={current.after} alt="След процедурата" loading="lazy" />
              <span className="beforeAfter-label">СЛЕД</span>
            </div>
          </div>

          <div className="beforeAfter-content">
            <h3>{current.title}</h3>
            <p>{current.desc}</p>

            <div className="beforeAfter-nav">
              <button className="beforeAfter-navBtn" onClick={prevResult} aria-label="Предишен">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>

              <div className="beforeAfter-dots">
                {results.map((_, idx) => (
                  <span
                    key={idx}
                    className={`beforeAfter-dot ${idx === activeIndex ? "active" : ""}`}
                  />
                ))}
              </div>

              <button className="beforeAfter-navBtn" onClick={nextResult} aria-label="Следващ">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
