"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, RefreshCw, XCircle, Info } from "lucide-react";
import Button from "./Button";
import "./SkinMatchQuiz.css";

const SKIN_COLORS = ["#F9E4D4", "#F3D0B1", "#E1B899", "#AD8A60", "#694a38", "#2c1c11"];
const HAIR_COLORS = ["#2B2B2B", "#8D5524", "#C68642", "#E0E0E0"];

const quiz = {
  title: "Виртуална консултация за кожа",
  subtitle: "Открийте вашия перфектен протокол за лечение за 30 секунди.",
  questions: [
    {
      text: "Изберете вашия тип кожа:",
      options: [
        "Тип I (Светъл)",
        "Тип II (Бял)",
        "Тип III (Среден)",
        "Тип IV (Маслинен)",
        "Тип V (Тъмен)",
        "Тип VI (Много тъмен)",
      ],
    },
    {
      text: "Изберете естествения цвят на косата си:",
      options: ["Черна / Тъмно кафява", "Светло кафява", "Руса / Червена", "Сива / Бяла"],
    },
  ],
  result: {
    calculating: "Калибриране на вашия прецизен протокол...",
    title_success: "Перфектно съвпадение! Вие сте напълно подходяща.",
    desc_success:
      "Въз основа на вашия биологичен профил, Delora Elite е напълно безопасна и високоефективна за вас. Можете да очаквате до 95% намаляване на окосмяването.",
    title_fail: "Не се препоръчва за вашия профил",
    desc_fail:
      "IPL технологията изисква контраст между кожата и цвета на косата. За съжаление, въз основа на вашия избор, IPL не се препоръчва, тъй като може да бъде неефективна или небезопасна за вашия специфичен тип кожа/коса.",
    cta: "Вземи моята оферта за €229",
  },
  back: "Назад",
  restart: "Започни отначало",
  calculatingSubtext: "Съпоставяме биологията ви с технологията Delora Elite...",
  tips: [
    "IPL изисква контраст на меланина. Трябва да проверим вашия тен на кожата.",
    "IPL таргетира меланина в корена на косъма. По-светлата коса може да не абсорбира достатъчно енергия.",
  ],
};

const SkinMatchQuiz = () => {
  const [step, setStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selections, setSelections] = useState<number[]>([]);

  const handleOptionClick = (optionIndex: number) => {
    const newSelections = [...selections];
    newSelections[step] = optionIndex;
    setSelections(newSelections);

    if (step < quiz.questions.length - 1) {
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

  const progress = ((step + 1) / (quiz.questions.length + 1)) * 100;

  const getContextTip = () => quiz.tips[step] || "";

  // Suitability Logic
  // Skin (Step 0): Type I-IV (index 0-3) are suitable. Type V-VI (index 4-5) are not.
  // Hair (Step 1): Black/Brown (index 0-1) are suitable. Blonde/Red/Grey/White (index 2-3) are not.
  const isSuitable = selections[0] <= 3 && selections[1] <= 1;

  return (
    <section id="consultation" className="quizSection">
      <div className="container">
        <div className="quizContainer glass-panel">
          <AnimatePresence mode="wait">
            {step <= quiz.questions.length - 1 ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="quizHeader">
                  <span className="quizBadge">{quiz.subtitle}</span>
                  <h2 className="quizTitle">{quiz.title}</h2>
                </div>

                <div
                  className="progressBar"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className="progressFill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="questionContainer">
                  <div className="questionMeta">
                    <h3 className="questionText">{quiz.questions[step].text}</h3>
                    <div
                      className="whyTooltip"
                      tabIndex={0}
                      role="tooltip"
                      aria-label={`Контекст: ${getContextTip()}`}
                    >
                      <Info size={14} aria-hidden="true" />
                      <span>{getContextTip()}</span>
                    </div>
                  </div>

                  <div className="optionsGrid">
                    {quiz.questions[step].options.map((option: string, i: number) => {
                      return (
                        <motion.div
                          key={i}
                          className="optionCard"
                          onClick={() => handleOptionClick(i)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleOptionClick(i);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label={`Изберете опция: ${option}`}
                          whileHover={{ y: -5, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="optionVisual">
                            {step === 0 && (
                              <div
                                className="skinSwatch"
                                style={{ background: SKIN_COLORS[i] }}
                                aria-hidden="true"
                              />
                            )}
                            {step === 1 && (
                              <div
                                className="skinSwatch hairSwatch"
                                style={{ background: HAIR_COLORS[i] }}
                                aria-hidden="true"
                              />
                            )}
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
                      visibility: step === 0 ? "hidden" : "visible",
                      pointerEvents: step === 0 ? "none" : "auto",
                      border: "none",
                    }}
                  >
                    <ArrowLeft size={18} style={{ marginRight: "8px" }} /> {quiz.back}
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
                <h3>{quiz.result.calculating}</h3>
                <p className="calculatingSubtext">{quiz.calculatingSubtext}</p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                className="resultContainer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div
                  className="resultIcon"
                  style={{
                    background: isSuitable ? "rgba(91, 58, 122, 0.1)" : "rgba(224, 83, 104, 0.1)",
                    color: isSuitable ? "var(--color-amethyst)" : "#E05368",
                  }}
                >
                  {isSuitable ? <Check size={40} /> : <XCircle size={40} />}
                </div>
                <h2 className="resultTitle">
                  {isSuitable ? quiz.result.title_success : quiz.result.title_fail}
                </h2>

                <div className="profileSummary">
                  <div className="summaryTag">
                    <span>Кожа: {quiz.questions[0].options[selections[0]]}</span>
                  </div>
                  <div className="summaryTag">
                    <span>Коса: {quiz.questions[1].options[selections[1]]}</span>
                  </div>
                </div>

                <div className="resultMessage">
                  <p>{isSuitable ? quiz.result.desc_success : quiz.result.desc_fail}</p>
                </div>
                <div className="resultActions">
                  {isSuitable && (
                    <Button size="lg" className="cta-pulse" href="#product-hero">
                      {quiz.result.cta}
                    </Button>
                  )}
                  <Button variant="outline" size="lg" onClick={handleRestart}>
                    <RefreshCw size={18} style={{ marginRight: "8px" }} /> {quiz.restart}
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
