"use client";

import React from "react";
import { ShieldCheck, RotateCcw, Truck, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./TrustBadges.css";

const TrustBadges = () => {
  const { language } = useLanguage();

  const badges = [
    { icon: ShieldCheck, labelEn: "FDA Cleared", labelBg: "FDA Одобрено" },
    { icon: RotateCcw, labelEn: "90-Day Guarantee", labelBg: "90-дневна гаранция" },
    { icon: Truck, labelEn: "Free Express Shipping", labelBg: "Безплатна доставка" },
    { icon: Star, labelEn: "4.9/5 Rating", labelBg: "4.9/5 Оценка" },
  ];

  return (
    <section className="trustBadges">
      <div className="container">
        <div className="trustBadges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="trustBadges-item">
              <div className="trustBadges-iconWrapper">
                <badge.icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="trustBadges-label">
                {language === "en" ? badge.labelEn : badge.labelBg}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
