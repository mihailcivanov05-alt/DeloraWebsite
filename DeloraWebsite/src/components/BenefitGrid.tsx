"use client";

import React from "react";
import { Snowflake, Sparkles, TrendingDown, Check, Home, ScanFace } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./BenefitGrid.css";

const BenefitGrid = () => {
  const { language } = useLanguage();
  const isBg = language === 'bg';

  const DEVICE_IMAGE = "/Photoshoots/Other/hf_20260524_130838_d5b63023-01bb-415d-9978-96faa7a9a89e.png"; // Image box placeholder

  const leftBenefits = [
    {
      icon: Snowflake,
      text: isBg ? "Безболезнени, нежни и безопасни сесии" : "Pain-free, safe, and gentle sessions"
    },
    {
      icon: Sparkles,
      text: isBg ? "Трайно гладка кожа без усилие" : "Get smooth and stay smooth"
    },
    {
      icon: TrendingDown,
      text: isBg ? "До 95% намаляване на окосмяването" : "Up to 95% hair reduction in 8 weeks"
    }
  ];

  const rightBenefits = [
    {
      icon: Check,
      text: isBg ? "Край на досадните враснали косми" : "Eliminate annoying ingrown hairs"
    },
    {
      icon: Home,
      text: isBg ? "Спестете време и посещения в салон" : "Skip the expensive salon visits"
    },
    {
      icon: ScanFace,
      text: isBg ? "Интелигентен смарт сензор за кожа" : "Smart skin sensor for maximum safety"
    }
  ];

  return (
    <section className="benefitGrid">
      <div className="container benefitGrid-container">
        <div className="benefitGrid-header">
          <h2 className="benefitGrid-title">
            {isBg ? "Защо жените обожават Delora" : "The Delora Difference"}
          </h2>
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

          {/* Center Column: Beautiful Device Placeholder Box */}
          <div className="benefitGrid-center">
            <div className="benefitGrid-imageWrapper">
              {DEVICE_IMAGE ? (
                <img src={DEVICE_IMAGE} alt="Delora Elite Device" className="benefitGrid-image" />
              ) : (
                <div className="benefitGrid-placeholder">
                  <span>{isBg ? "Delora Elite Устройство" : "Delora Elite Device"}</span>
                </div>
              )}
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
