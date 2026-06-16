import React from "react";
import { ShieldCheck, RotateCcw, Truck, Star } from "lucide-react";
import "./TrustBadges.css";

const badges = [
  { icon: ShieldCheck, label: "FDA Одобрено" },
  { icon: RotateCcw, label: "90-дневна гаранция" },
  { icon: Truck, label: "Безплатна доставка" },
  { icon: Star, label: "4.9/5 Оценка" },
];

const TrustBadges = () => {
  return (
    <section className="trustBadges">
      <div className="container">
        <div className="trustBadges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="trustBadges-item">
              <div className="trustBadges-iconWrapper">
                <badge.icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="trustBadges-label">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
