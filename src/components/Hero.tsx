"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tagline">{t.hero.badge}</span>
          <h1 className="hero-title">
            {t.hero.title}
          </h1>
          <p className="hero-description">
            {t.hero.subtitle}
          </p>
          
          <div className="hero-actions">
            <Button variant="primary" size="lg" href="#tech-specs">{t.hero.cta}</Button>
            <Button variant="outline" size="lg" href="#consultation">{t.hero.secondaryCta}</Button>
          </div>

          <div className="hero-trust">
            <span className="trust-item">
              <CheckCircle size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              {t.hero.trustItem1}
            </span>
            <span className="trust-item">
              <CheckCircle size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              {t.hero.trustItem2}
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image-container glass-panel">
            <Image 
              src="/delora-photos/pomelli_bdna_image_0514-4.png" 
              alt="Delora IPL Device" 
              fill 
              style={{ objectFit: 'cover', borderRadius: '40px' }}
              priority
            />
          </div>
          <div className="hero-glow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
