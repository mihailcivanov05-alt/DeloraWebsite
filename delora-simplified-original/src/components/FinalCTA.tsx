import React from "react";
import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="finalCta">
      <div className="container">
        <div className="finalCta-content">
          <div className="finalCta-imageWrapper">
            <div className="finalCta-placeholder" />
          </div>

          <h2 className="finalCta-title">
            Готови ли сте за гладка кожа като след салон?
          </h2>

          <p className="finalCta-subtitle">
            Присъединете се към 1,000+ жени, които преминаха от бръсначи и салони към Delora.
          </p>

          <div className="finalCta-priceContainer">
            <span className="finalCta-priceOriginal">€399</span>
            <span className="finalCta-priceCurrent">€229</span>
            <span className="finalCta-priceBadge">Спестете 43%</span>
          </div>

          <div className="finalCta-action">
            <a href="#product-hero" className="finalCta-button">
              Вземете Delora днес
            </a>
          </div>

          <p className="finalCta-trust">
            Безплатна експресна доставка • 90-дневна гаранция за връщане на парите • FDA одобрено
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
