"use client";

import React from "react";
import { Zap, Microscope, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./ScienceSection.css";

const ScienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="science" className="scienceSection">
      <div className="container">
        <div className="scienceHeader">
          <span className="scienceTag">{t.science.badge}</span>
          <h2>{t.science.title}</h2>
          <p>{t.science.subtitle}</p>
        </div>

        <div className="scienceGrid">
          <div className="scienceCard glass-panel">
            <div className="scienceIcon"><Zap size={40} /></div>
            <h3>{t.science.card1.title}</h3>
            <p>{t.science.card1.desc}</p>
          </div>
          <div className="scienceCard glass-panel">
            <div className="scienceIcon"><Microscope size={40} /></div>
            <h3>{t.science.card2.title}</h3>
            <p>{t.science.card2.desc}</p>
          </div>
          <div className="scienceCard glass-panel">
            <div className="scienceIcon"><Award size={40} /></div>
            <h3>{t.science.card3.title}</h3>
            <p>{t.science.card3.desc}</p>
          </div>
        </div>

        <div className="scienceProof">
          <div className="proofItem">
            <span className="proofValue">{t.science.proof1.value}</span>
            <span className="proofLabel">{t.science.proof1.label}</span>
          </div>
          <div className="proofItem">
            <span className="proofValue">{t.science.proof2.value}</span>
            <span className="proofLabel">{t.science.proof2.label}</span>
          </div>
          <div className="proofItem">
            <span className="proofValue">{t.science.proof3.value}</span>
            <span className="proofLabel">{t.science.proof3.label}</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Button variant="secondary" size="lg" href="/science">
            {language === 'en' ? 'Explore Full Clinical Deep-dive' : 'Разгледайте пълния клиничен анализ'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
