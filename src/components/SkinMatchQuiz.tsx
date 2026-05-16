"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, RefreshCw, Zap, Sparkles, Target, ShieldCheck, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import "./SkinMatchQuiz.css";

const SKIN_COLORS = ["#F9E4D4", "#F3D0B1", "#E1B899", "#AD8A60"];
const HAIR_COLORS = ["#2B2B2B", "#8D5524", "#C68642", "#E0E0E0"];
const CONCERN_ICONS = [Zap, Sparkles, Target, ShieldCheck];
const SENSITIVITY_ICONS = [ShieldCheck, Target, Zap, Info];

const SkinMatchQuiz = () => {
  const [step, setStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selections, setSelections] = useState<number[]>([]);
  const { t } = useLanguage();

  const handleOptionClick = (optionIndex: number) => {
    const newSelections = [...selections];
    newSelections[step] = optionIndex;
    setSelections(newSelections);

    if (step < t.quiz.questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => setIsCalculating(false), 2500);
      setStep(step + 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setIsCalculating(false);
    setSelections([]);
  };

  const progress = ((step + 1) / (t.quiz.questions.length + 1)) * 100;

  // Contextual tips for "Why we ask this"
  const getContextTip = () => {
    switch(step) {
      case 0: return "Helps identify the required energy depth.";
      case 1: return "IPL targets melanin; contrast is key for efficacy.";
      case 2: return "Ensures the Sapphire Cooling Core is calibrated for safety.";
      case 3: return "Directs our AI to recommend the gentlest effective mode.";
      default: return "";
    }
  };

  return (
    <section id="consultation" className="quizSection">
      <div className="container">
        <div className="quizContainer glass-panel">
          <AnimatePresence mode="wait">
            {step <= t.quiz.questions.length - 1 ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="quizHeader">
                  <span className="quizBadge">{t.quiz.subtitle}</span>
                  <h2 className="quizTitle">{t.quiz.title}</h2>
                </div>
                
                <div className="progressBar" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
                  <motion.div 
                    className="progressFill" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="questionContainer">
                  <div className="questionMeta">
                    <h3 className="questionText">{t.quiz.questions[step].text}</h3>
                    <div className="whyTooltip" tabIndex={0} role="tooltip" aria-label={`Context: ${getContextTip()}`}>
                      <Info size={14} aria-hidden="true" />
                      <span>{getContextTip()}</span>
                    </div>
                  </div>
                  
                  <div className="optionsGrid">
                    {t.quiz.questions[step].options.map((option: string, i: number) => {
                      return (
                        <motion.div 
                          key={i} 
                          className="optionCard" 
                          onClick={() => handleOptionClick(i)}
                          onKeyDown={(e) => e.key === 'Enter' && handleOptionClick(i)}
                          tabIndex={0}
                          role="button"
                          aria-label={`Select option: ${option}`}
                          whileHover={{ y: -5, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="optionVisual">
                            {step === 0 && React.createElement(CONCERN_ICONS[i], { size: 28, className: "optionIcon", "aria-hidden": "true" })}
                            {step === 1 && (
                              <div 
                                className="skinSwatch hairSwatch" 
                                style={{ background: HAIR_COLORS[i] }} 
                                aria-hidden="true"
                              />
                            )}
                            {step === 2 && (
                              <div 
                                className="skinSwatch" 
                                style={{ background: SKIN_COLORS[i] }} 
                                aria-hidden="true"
                              />
                            )}
                            {step === 3 && React.createElement(SENSITIVITY_ICONS[i], { size: 28, className: "optionIcon", "aria-hidden": "true" })}
                          </div>
                          <span className="optionLabel">{option}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="quizActions">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(step - 1)} 
                    style={{ 
                      opacity: step === 0 ? 0 : 1, 
                      pointerEvents: step === 0 ? 'none' : 'auto',
                      border: 'none'
                    }}
                  >
                    <ArrowLeft size={18} style={{ marginRight: '8px' }} /> {t.quiz.back}
                  </Button>
                </div>
              </motion.div>
            ) : isCalculating ? (
              <motion.div 
                key="calculating"
                className="calculatingScreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="loaderWrapper">
                  <RefreshCw className="spinIcon" size={48} />
                  <div className="scanningBar" />
                </div>
                <h3>{t.quiz.result.calculating}</h3>
                <p className="calculatingSubtext">{t.quiz_extra?.calculatingSubtext || 'Matching your biology with Delora Elite technology...'}</p>
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                className="resultContainer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="resultIcon">
                  <Check size={40} />
                </div>
                <h2 className="resultTitle">{t.quiz.result.ready}</h2>
                
                <div className="profileSummary">
                  <div className="summaryTag">
                    <span>Skin: {t.quiz.questions[2].options[selections[2]]}</span>
                  </div>
                  <div className="summaryTag">
                    <span>Hair: {t.quiz.questions[1].options[selections[1]]}</span>
                  </div>
                </div>

                <div className="resultMessage">
                  <p>{t.quiz.result.desc}</p>
                </div>
                <div className="resultActions">
                  <Button size="lg" className="cta-pulse" href="#tech-specs">{t.quiz.result.cta}</Button>
                  <Button variant="outline" size="lg" onClick={handleRestart}>
                    <RefreshCw size={18} style={{ marginRight: '8px' }} /> {t.quiz.restart}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkinMatchQuiz;
