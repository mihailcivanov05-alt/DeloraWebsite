"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import "./Scrollytelling.css";

interface Scene {
  id: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

// ─── Sub-component: animated image for one scene ───────────────────────────
function SceneImage({
  scene,
  index,
  progress,
}: {
  scene: Scene;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.08), start, end, Math.min(1, end + 0.08)],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [Math.max(0, start - 0.08), start, end],
    [1.08, 1, 0.96]
  );

  return (
    <motion.div className="sceneImageContainer" style={{ opacity, scale }}>
      <img src={scene.image} alt={scene.title} className="fullImage" />
    </motion.div>
  );
}

// ─── Sub-component: animated text for one scene ────────────────────────────
function SceneText({
  scene,
  index,
  progress,
  stepLabel,
}: {
  scene: Scene;
  index: number;
  progress: MotionValue<number>;
  stepLabel: string;
}) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [24, 0, 0, -24]
  );

  return (
    <motion.div className="sceneText" style={{ opacity, y }}>
      <span className="sceneNumber">
        {stepLabel} 0{index + 1}
      </span>
      <h2 className="sceneTitle">{scene.title}</h2>
      <p className="sceneDescription">{scene.description}</p>
    </motion.div>
  );
}

// ─── Sub-component: animated ambient glow ──────────────────────────────────
function AmbientGlow({
  scene,
  index,
  progress,
}: {
  scene: Scene;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
    [0, 0.18, 0.18, 0]
  );

  return (
    <motion.div
      className="ambientGlow"
      style={{ background: scene.color, opacity }}
    />
  );
}

// ─── Main component ────────────────────────────────────────────────────────
const Scrollytelling = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const localizedScenes: Scene[] = [
    {
      id: "cooling",
      title: t.scrolly.step1.title,
      description: t.scrolly.step1.description,
      color: "#DCC9F0",
      image: "/delora-photos/pomelli_bdna_image_0514-2.png",
    },
    {
      id: "precision",
      title: t.scrolly.step2.title,
      description: t.scrolly.step2.description,
      color: "#5B3A7A",
      image: "/delora-photos/pomelli_photoshoot_image_9_16_0514.png",
    },
    {
      id: "intelligence",
      title: t.scrolly.step3.title,
      description: t.scrolly.step3.description,
      color: "#D8C3A5",
      image: "/delora-photos/pomelli_bdna_image_0514-7.png",
    },
  ];

  return (
    <section id="how-it-works" ref={containerRef} className="scrollySection">
      <div className="stickyContainer">
        {/* Ambient background glows */}
        <div className="scrollyBg">
          {localizedScenes.map((scene, i) => (
            <AmbientGlow key={scene.id} scene={scene} index={i} progress={smoothProgress} />
          ))}
        </div>

        <div className="scrollyGrid">
          {/* Left: images */}
          <div className="visualPanel">
            <div className="imageWrapper glass-panel">
              {localizedScenes.map((scene, i) => (
                <SceneImage key={scene.id} scene={scene} index={i} progress={smoothProgress} />
              ))}
            </div>
          </div>

          {/* Right: narrative text */}
          <div className="narrativePanel">
            <div className="narrativeCenter">
              {localizedScenes.map((scene, i) => (
                <SceneText
                  key={scene.id}
                  scene={scene}
                  index={i}
                  progress={smoothProgress}
                  stepLabel={t.scrolly.stepLabel}
                />
              ))}
            </div>

            {/* Scroll progress bar */}
            <div className="progressTrack">
              <motion.div
                className="progressFill"
                style={{ scaleY: smoothProgress, originY: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scrollytelling;
