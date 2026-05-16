"use client";

import React from "react";
import { Check, ShieldCheck, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./ProductSection.css";

const ProductSection = () => {
  const { t } = useLanguage();

  return (
    <section id="product" className="productSection">
      <div className="container">
        <div className="productGrid">
          <div className="productVisual">
            <div className="mainProductImage glass-panel">
              <img src="/delora-photos/pomelli_bdna_image_0514-6.png" alt="Delora Elite IPL Device" loading="eager" />
              <div className="productBadge">{t.hero.badge}</div>
            </div>
            <div className="thumbnailStrip">
              <div className="thumb glass-panel"><img src="/delora-photos/pomelli_bdna_image_0514-2.png" alt="Delora device detail view 1" loading="lazy" /></div>
              <div className="thumb glass-panel"><img src="/delora-photos/pomelli_bdna_image_0514-7.png" alt="Delora device detail view 2" loading="lazy" /></div>
              <div className="thumb glass-panel"><img src="/delora-photos/pomelli_photoshoot-4.png" alt="Delora device in use" loading="lazy" /></div>
            </div>
          </div>

          <div className="productInfo">
            <div className="infoHead">
              <span className="infoBadge">{t.specs.badge}</span>
              <h1>{t.specs.offerTitle}</h1>
              <p className="priceTag">€229 <span className="oldPrice">€399</span></p>
            </div>

            <p className="infoSubtitle">{t.specs.offerSubtitle}</p>

            <ul className="specList">
              {t.specs.items.map((item: string, i: number) => (
                <li key={i}><Check size={18} className="checkIcon" aria-hidden="true" /> {item}</li>
              ))}
            </ul>

            <div className="offerIncludes glass-panel">
              <p>{t.specs.includes}</p>
              <p className="suitability">{t.specs.suitability}</p>
            </div>

            <div className="ctaGroup">
              <Button variant="primary" size="lg" href="https://checkout.delora.com">
                {t.navbar.shop} — €229
              </Button>
              <div className="shippingTrust">
                <ShieldCheck size={16} aria-hidden="true" /> {t.product?.shippingTrust || 'Free Express Shipping & 90-Day Guarantee'}
              </div>
            </div>

            <div className="featureRow">
              <div className="miniFeature">
                <Zap size={20} aria-hidden="true" />
                <span>{t.product?.fastSessions || 'Fast Sessions'}</span>
              </div>
              <div className="miniFeature">
                <Heart size={20} aria-hidden="true" />
                <span>{t.product?.painlessTech || 'Painless Tech'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
