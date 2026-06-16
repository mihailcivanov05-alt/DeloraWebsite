import React from "react";
import { Snowflake, Sparkles, TrendingDown, Check, Home, ScanFace } from "lucide-react";
import "./BenefitGrid.css";

const DEVICE_IMAGE = "/Photoshoots/Other/hf_20260524_130838_d5b63023-01bb-415d-9978-96faa7a9a89e.png";

const leftBenefits = [
  { icon: Snowflake, text: "Безболезнени, нежни и безопасни сесии" },
  { icon: Sparkles, text: "Трайно гладка кожа без усилие" },
  { icon: TrendingDown, text: "До 95% намаляване на окосмяването" },
];

const rightBenefits = [
  { icon: Check, text: "Край на досадните враснали косми" },
  { icon: Home, text: "Спестете време и посещения в салон" },
  { icon: ScanFace, text: "Интелигентен смарт сензор за кожа" },
];

const BenefitGrid = () => {
  return (
    <section className="benefitGrid">
      <div className="container benefitGrid-container">
        <div className="benefitGrid-header">
          <h2 className="benefitGrid-title">Защо жените обожават Delora</h2>
        </div>

        <div className="benefitGrid-layout">
          {/* Left Column Benefits */}
          <div className="benefitGrid-col left">
            {leftBenefits.map((benefit, i) => (
              <div key={i} className="benefitGrid-item left-align">
                <div className="benefitGrid-text">
                  <span>{benefit.text}</span>
                </div>
                <div className="benefitGrid-iconWrapper">
                  <benefit.icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Device Image */}
          <div className="benefitGrid-center">
            <div className="benefitGrid-imageWrapper">
              <img src={DEVICE_IMAGE} alt="Delora Elite Устройство" className="benefitGrid-image" />
            </div>
          </div>

          {/* Right Column Benefits */}
          <div className="benefitGrid-col right">
            {rightBenefits.map((benefit, i) => (
              <div key={i} className="benefitGrid-item right-align">
                <div className="benefitGrid-iconWrapper">
                  <benefit.icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>
                <div className="benefitGrid-text">
                  <span>{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitGrid;
