"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./PressBar.css";

const PressBar = () => {
  const { t } = useLanguage();

  return (
    <section className="pressBar">
      <div className="container">
        <p className="pressTagline">{t.press.asSeenIn}</p>
        <div className="pressLogos">
          <span className="pressLogo">VOGUE</span>
          <span className="pressLogo">Forbes</span>
          <span className="pressLogo">ELLE</span>
          <span className="pressLogo">BAZAAR</span>
          <span className="pressLogo">COSMOPOLITAN</span>
        </div>
      </div>
    </section>
  );
};

export default PressBar;
