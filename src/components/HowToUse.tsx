"use client";
import React from "react";
import { Scissors, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./HowToUse.css";

const HowToUse = () => {
  const { language } = useLanguage();
  const isBg = language === 'bg';

  const steps = [
    {
      num: '01',
      icon: <Scissors className="howToUse-icon" />,
      title: isBg ? 'Подготовка и бръснене' : 'Shave & Prep',
      description: isBg 
        ? 'Избръснете зоната и почистете кожата. Без кола маска или отскубване.' 
        : 'Shave the treatment area and clean your skin. No waxing or plucking.',
      image: ''
    },
    {
      num: '02',
      icon: <Zap className="howToUse-icon" />,
      title: isBg ? 'Импулси и плъзгане' : 'Flash & Glide',
      description: isBg 
        ? 'Притиснете Delora към кожата и плъзгайте. Умният сензор настройва интензитета, докато сапфиреното охлаждане предпазва от болка.' 
        : 'Press Delora against your skin and glide. The smart sensor auto-adjusts intensity while sapphire cooling keeps you comfortable.',
      image: ''
    },
    {
      num: '03',
      icon: <Sparkles className="howToUse-icon" />,
      title: isBg ? 'Насладете се на гладка кожа' : 'Enjoy Smooth Skin',
      description: isBg 
        ? 'След 4–8 седмични процедури се насладете на до 95% намаляване на окосмяването.' 
        : 'After 4–8 weekly sessions, enjoy up to 95% hair reduction.',
      image: '/Photoshoots/Other/hf_20260525_001112_ee0f3847-67a1-408d-bf16-c05a2f12f2fd.png'
    }
  ];

  return (
    <section className="howToUse">
      <div className="container howToUse-container">
        <div className="howToUse-header">
          <h2 className="howToUse-title">
            {isBg ? 'Салонни резултати в 3 лесни стъпки' : 'Salon Results in 3 Simple Steps'}
          </h2>
        </div>
        
        <div className="howToUse-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="howToUse-card">
              <div className="howToUse-imageWrapper">
                {step.image ? (
                  <img src={step.image} alt={step.title} className="howToUse-image" />
                ) : (
                  <div className="howToUse-placeholder" />
                )}
                <div className="howToUse-stepNum">{step.num}</div>
              </div>
              <div className="howToUse-content">
                <div className="howToUse-titleRow">
                  {step.icon}
                  <h3 className="howToUse-cardTitle">{step.title}</h3>
                </div>
                <p className="howToUse-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
