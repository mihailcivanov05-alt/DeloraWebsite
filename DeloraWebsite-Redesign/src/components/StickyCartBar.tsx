"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./StickyCartBar.css";

const STICKY_IMAGE = "/delora-photos-clean/delora_studio_product_01.webp";

const StickyCartBar = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the hero buy box
      const heroSection = document.getElementById("product-hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      } else {
        // Fallback: show after scrolling 600px
        setIsVisible(window.scrollY > 600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`stickyCartBar ${isVisible ? "visible" : ""}`}>
      <div className="stickyCartBar-inner">
        <div className="stickyCartBar-thumb">
          {STICKY_IMAGE ? (
            <img
              src={STICKY_IMAGE}
              alt="Delora Elite"
              loading="lazy"
            />
          ) : (
            <div className="stickyCartBar-placeholder" />
          )}
        </div>

        <div className="stickyCartBar-info">
          <div className="stickyCartBar-name">
            {language === "en" ? "Delora Elite IPL Device" : "Delora Elite IPL Устройство"}
          </div>
          <div className="stickyCartBar-priceRow">
            <span className="stickyCartBar-price">€189</span>
            <span className="stickyCartBar-originalPrice">€399</span>
            <span className="stickyCartBar-badge">
              {language === "en" ? "Save 53%" : "-53%"}
            </span>
          </div>
        </div>

        <div className="stickyCartBar-cta">
          <Button variant="primary" size="sm" href="https://checkout.delora.com">
            {language === "en" ? "Add to Cart" : "Купи"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;
