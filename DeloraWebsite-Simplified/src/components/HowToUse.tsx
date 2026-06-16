import React from "react";
import Image from "next/image";
import { Scissors, Zap, Sparkles } from "lucide-react";
import "./HowToUse.css";

const steps = [
  {
    num: "01",
    icon: <Scissors className="howToUse-icon" />,
    title: "Подготовка и бръснене",
    description: "Избръснете зоната и почистете кожата. Без кола маска или отскубване.",
    image: "/Photoshoots/Other/hf_20260525_093128_a4448ae2-b5f0-4341-9dd8-c8355bbcc540.webp",
  },
  {
    num: "02",
    icon: <Zap className="howToUse-icon" />,
    title: "Импулси и плъзгане",
    description:
      "Притиснете Delora към кожата и плъзгайте. Умният сензор настройва интензитета, докато сапфиреното охлаждане предпазва от болка.",
    image: "/Photoshoots/Other/hf_20260525_091805_96728dc3-030e-485f-8102-c83acb933053.webp",
  },
  {
    num: "03",
    icon: <Sparkles className="howToUse-icon" />,
    title: "Насладете се на гладка кожа",
    description:
      "След 4–8 седмични процедури се насладете на до 95% намаляване на окосмяването.",
    image: "/Photoshoots/Other/hf_20260525_001112_ee0f3847-67a1-408d-bf16-c05a2f12f2fd.webp",
  },
];

const HowToUse = () => {
  return (
    <section className="howToUse">
      <div className="container howToUse-container">
        <div className="howToUse-header">
          <h2 className="howToUse-title">Салонни резултати в 3 лесни стъпки</h2>
        </div>

        <div className="howToUse-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="howToUse-card">
              <div className="howToUse-imageWrapper">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="howToUse-image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
