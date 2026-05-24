"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./BeforeAfterSection.css";

const results = [
  {
    before: "",
    after: "",
    titleEn: "Underarms — 6 Weeks",
    titleBg: "Подмишници — 6 седмици",
    descEn: "Visible reduction in hair density and thickness after completing the recommended 6-week course.",
    descBg: "Видимо намаляване на гъстотата и дебелината на косъма след завършване на препоръчителния 6-седмичен курс."
  },
  {
    before: "",
    after: "",
    titleEn: "Legs — 8 Weeks",
    titleBg: "Крака — 8 седмици",
    descEn: "Significant hair reduction and smoother skin texture with consistent weekly treatments.",
    descBg: "Значително намаляване на окосмяването и по-гладка текстура на кожата при редовни седмични процедури."
  }
];

const BeforeAfterSection = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextResult = () => setActiveIndex((prev) => (prev + 1) % results.length);
  const prevResult = () => setActiveIndex((prev) => (prev - 1 + results.length) % results.length);

  const current = results[activeIndex];

  return (
    <section className="beforeAfterSection">
      <div className="container">
        <div className="beforeAfter-header">
          <h2 className="beforeAfter-title">
            {language === "en" ? "Real Results, Real People" : "Реални резултати, реални хора"}
          </h2>
          <p className="beforeAfter-subtitle">
            {language === "en" 
              ? "See the transformation our customers experience with consistent use." 
              : "Вижте трансформацията, която нашите клиенти изпитват при редовна употреба."}
          </p>
        </div>

        <div className="beforeAfter-card">
          <div className="beforeAfter-images">
            <div className="beforeAfter-imageContainer">
              {current.before ? (
                <img src={current.before} alt="Before treatment" loading="lazy" />
              ) : (
                <div className="beforeAfter-placeholder">
                  <span>{language === "en" ? "Before" : "Преди"}</span>
                </div>
              )}
              <span className="beforeAfter-label">{language === "en" ? "BEFORE" : "ПРЕДИ"}</span>
            </div>
            <div className="beforeAfter-imageContainer">
              {current.after ? (
                <img src={current.after} alt="After treatment" loading="lazy" />
              ) : (
                <div className="beforeAfter-placeholder">
                  <span>{language === "en" ? "After" : "След"}</span>
                </div>
              )}
              <span className="beforeAfter-label">{language === "en" ? "AFTER" : "СЛЕД"}</span>
            </div>
          </div>
          
          <div className="beforeAfter-content">
            <h3>{language === "en" ? current.titleEn : current.titleBg}</h3>
            <p>{language === "en" ? current.descEn : current.descBg}</p>
            
            <div className="beforeAfter-nav">
              <button className="beforeAfter-navBtn" onClick={prevResult} aria-label="Previous">
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
              
              <button className="beforeAfter-navBtn" onClick={nextResult} aria-label="Next">
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
