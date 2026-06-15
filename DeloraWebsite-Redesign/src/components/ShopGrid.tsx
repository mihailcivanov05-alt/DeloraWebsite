"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Bell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./ShopGrid.css";

/**
 * Shop / collection page (Addendum §6).
 * The live device plus 3 "coming soon" products to signal a maturing brand.
 * "Notify me" is UI-only (no backend) per product decision.
 */

const copy = {
  en: {
    title: "Shop Delora",
    subtitle: "One device today. A whole routine on the way.",
    inStock: "In stock",
    shopNow: "Shop now",
    notifyPlaceholder: "Your email",
    notify: "Notify me",
    notifySuccess: "Thanks! We'll email you at launch.",
    device: {
      name: "Delora Elite IPL Device",
      desc: "Up to 95% hair reduction at home. Sapphire ice-cooling, smart skin sensor, 1,000,000 pulses.",
      badge: "Best seller",
    },
    soon: [
      {
        name: "Delora XL",
        status: "Coming Q4 2026",
        price: "€249",
        desc: "For larger body areas or a faster routine: 20% bigger window, 2 pulses/sec, same sapphire cooling, all skin tones.",
      },
      {
        name: "Delora Face",
        status: "Coming Q3 2026",
        price: "€299",
        desc: "Specialised for facial hair — upper lip, chin, jawline. Smaller precision head, gentler cooling, safe near the eyes.",
      },
      {
        name: "Delora Post-IPL Serum",
        status: "Coming July 2026",
        price: "€24",
        desc: "Soothes skin after every session. Allantoin, panthenol & lavender. Extends results by 2–4 weeks per 50ml bottle.",
      },
    ],
  },
  bg: {
    title: "Магазин Delora",
    subtitle: "Едно устройство днес. Цяла рутина предстои.",
    inStock: "В наличност",
    shopNow: "Купи сега",
    notifyPlaceholder: "Твоят имейл",
    notify: "Извести ме",
    notifySuccess: "Благодарим! Ще ти пишем при старта.",
    device: {
      name: "Delora Elite IPL Устройство",
      desc: "До 95% намаляване на окосмяването у дома. Сапфирено охлаждане, смарт сензор, 1,000,000 импулса.",
      badge: "Бестселър",
    },
    soon: [
      {
        name: "Delora XL",
        status: "Очаквай Q4 2026",
        price: "€249",
        desc: "За по-големи зони или по-бърза рутина: 20% по-голям прозорец, 2 импулса/сек, същото охлаждане, всички типове кожа.",
      },
      {
        name: "Delora Face",
        status: "Очаквай Q3 2026",
        price: "€299",
        desc: "За лицево окосмяване — горна устна, брадичка, челюст. По-малка прецизна глава, по-нежно охлаждане, безопасна близо до очите.",
      },
      {
        name: "Delora Post-IPL Серум",
        status: "Очаквай юли 2026",
        price: "€24",
        desc: "Успокоява кожата след всяка сесия. Алантоин, пантенол и лавандула. Удължава резултатите с 2–4 седмици на флакон 50ml.",
      },
    ],
  },
};

const DEVICE_IMG = "/Photoshoots/Other/hf_20260524_121655_0eadf972-f9fc-443d-9bc9-029db7b2993c.png";
const SOON_IMAGES = [
  "/Photoshoots/Arm/hf_20260524_124008_fc1ae104-e9e0-467b-8d6b-d6142ef20ae3.png",
  "/Photoshoots/Face/hf_20260524_111557_bfe75d02-6a6a-403b-93b5-5c2056a063f1.png",
  "", // serum has no photo — render a gradient placeholder
];

const NotifyForm = ({ id, placeholder, cta, success }: { id: string; placeholder: string; cta: string; success: string }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // UI-only: no network call, just confirm to the visitor.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="shop-notifySuccess">
        <Check size={16} aria-hidden="true" /> {success}
      </p>
    );
  }

  return (
    <form className="shop-notifyForm" onSubmit={onSubmit}>
      <label className="shop-srOnly" htmlFor={id}>{placeholder}</label>
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="shop-notifyInput"
      />
      <button type="submit" className="shop-notifyBtn">
        <Bell size={16} aria-hidden="true" /> {cta}
      </button>
    </form>
  );
};

const ShopGrid = () => {
  const { language } = useLanguage();
  const c = language === "en" ? copy.en : copy.bg;

  return (
    <section className="shop">
      <div className="container">
        <header className="shop-header">
          <h1 className="shop-title">{c.title}</h1>
          <p className="shop-subtitle">{c.subtitle}</p>
        </header>

        <div className="shop-grid">
          {/* Live product */}
          <article className="shop-card">
            <div className="shop-media">
              <img src={DEVICE_IMG} alt={c.device.name} />
              <span className="shop-badge shop-badge--live">{c.device.badge}</span>
            </div>
            <div className="shop-cardBody">
              <span className="shop-status shop-status--live">{c.inStock}</span>
              <h2 className="shop-name">{c.device.name}</h2>
              <p className="shop-desc">{c.device.desc}</p>
              <div className="shop-priceRow">
                <span className="shop-price">€189</span>
                <span className="shop-originalPrice">€399</span>
              </div>
              <Button variant="primary" size="md" href="/#product-hero" style={{ width: "100%" }}>
                {c.shopNow}
              </Button>
            </div>
          </article>

          {/* Coming-soon products */}
          {c.soon.map((p, i) => {
            const img = SOON_IMAGES[i];
            return (
              <article key={i} className="shop-card shop-card--soon">
                <div className="shop-media">
                  {img ? (
                    <img src={img} alt={p.name} className="shop-mediaDimmed" />
                  ) : (
                    <div className="shop-mediaPlaceholder" aria-hidden="true" />
                  )}
                  <span className="shop-badge shop-badge--soon">{p.status}</span>
                </div>
                <div className="shop-cardBody">
                  <span className="shop-status shop-status--soon">{p.status}</span>
                  <h2 className="shop-name">{p.name}</h2>
                  <p className="shop-desc">{p.desc}</p>
                  <div className="shop-priceRow">
                    <span className="shop-price shop-price--soon">{p.price}</span>
                  </div>
                  <NotifyForm id={`notify-${i}`} placeholder={c.notifyPlaceholder} cta={c.notify} success={c.notifySuccess} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="shop-backLink">
          <Link href="/">← Delora</Link>
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
