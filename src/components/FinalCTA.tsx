"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./FinalCTA.css";

const FINAL_CTA_IMAGE = "";

const FinalCTA = () => {
  const { language } = useLanguage();

  return (
    <section className="finalCta">
      <div className="container">
        <div className="finalCta-content">
          <div className="finalCta-imageWrapper">
            {FINAL_CTA_IMAGE ? (
              <img 
                src={FINAL_CTA_IMAGE} 
                alt="Delora IPL Device"
                className="finalCta-image"
              />
            ) : (
              <div className="finalCta-placeholder" />
            )}
          </div>
          
          <h2 className="finalCta-title">
            {language === "en" ? "Ready for Salon-Smooth Skin?" : "Готови ли сте за гладка кожа като след салон?"}
          </h2>
          
          <p className="finalCta-subtitle">
            {language === "en" 
              ? "Join 1,000+ women who made the switch from razors and salons to Delora."
              : "Присъединете се към 1,000+ жени, които преминаха от бръсначи и салони към Delora."
            }
          </p>
          
          <div className="finalCta-priceContainer">
            <span className="finalCta-priceOriginal">€399</span>
            <span className="finalCta-priceCurrent">€229</span>
            <span className="finalCta-priceBadge">
              {language === "en" ? "Save 43%" : "Спестете 43%"}
            </span>
          </div>
          
          <div className="finalCta-action">
            <a href="#product-hero" className="finalCta-button">
              {language === "en" ? "Get Delora Today" : "Вземете Delora днес"}
            </a>
          </div>
          
          <p className="finalCta-trust">
            {language === "en" 
              ? "Free Express Shipping • 90-Day Money-Back Guarantee • FDA Cleared"
              : "Безплатна експресна доставка • 90-дневна гаранция за връщане на парите • FDA одобрено"
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
