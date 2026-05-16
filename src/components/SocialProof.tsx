"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, RotateCcw, Truck, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./SocialProof.css";

const ugcCards = [
  { img: "/delora-photos/pomelli_photoshoot-1.png", handle: "@delora_skin", caption: "Results after 4 sessions are insane..." },
  { img: "/delora-photos/pomelli_photoshoot-2.png", handle: "@beauty_daily", caption: "The cooling tech is a game changer..." },
  { img: "/delora-photos/pomelli_photoshoot-4.png", handle: "@sofia_re", caption: "Better than salon treatments..." },
  { img: "/delora-photos/pomelli_bdna_image_0514.png", handle: "@nora_1", caption: "Smooth skin ready for summer!" },
  { img: "/delora-photos/pomelli_bdna_image_0514-3.png", handle: "@desi_love", caption: "Best investment this year..." },
  { img: "/delora-photos/pomelli_bdna_image_0514-5.png", handle: "@maria_v", caption: "Finally painless hair removal!" },
  { img: "/delora-photos/pomelli_bdna_image_0514-6.png", handle: "@delora_skin", caption: "Results after 4 sessions are insane..." },
  { img: "/delora-photos/pomelli_bdna_image_0514-7.png", handle: "@beauty_daily", caption: "The cooling tech is a game changer..." },
  { img: "/delora-photos/pomelli_photoshoot-3.png", handle: "@sofia_re", caption: "Better than salon treatments..." },
];

const beforeAfterResults = [
  {
    before: "/delora-photos/pomelli_photoshoot-1.png",
    after: "/delora-photos/pomelli_photoshoot-2.png",
    titleEn: "Underarms — 6 Weeks",
    titleBg: "Подмишници — 6 седмици",
    descEn: "Visible reduction in hair density and thickness after completing the recommended course.",
    descBg: "Видимо намаляване на гъстотата и дебелината на косъма след завършване на препоръчителния курс.",
  },
  {
    before: "/delora-photos/pomelli_photoshoot-4.png",
    after: "/delora-photos/pomelli_bdna_image_0514-3.png",
    titleEn: "Legs — 8 Weeks",
    titleBg: "Крака — 8 седмици",
    descEn: "Significant hair reduction and smoother skin texture with consistent use.",
    descBg: "Значително намаляване на окосмяването и по-гладка текстура на кожата при редовна употреба.",
  },
];

const SocialProof = () => {
  const { language, t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextResult = () => setActiveIndex((prev) => (prev + 1) % beforeAfterResults.length);
  const prevResult = () => setActiveIndex((prev) => (prev - 1 + beforeAfterResults.length) % beforeAfterResults.length);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    let animationId: number;
    let pos = 0;
    const speed = 0.5;
    
    const animate = () => {
      pos -= speed;
      const totalWidth = track.scrollWidth / 2;
      if (Math.abs(pos) >= totalWidth) {
        pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const current = beforeAfterResults[activeIndex];

  return (
    <section id="social-proof" className="socialProofSection">
      <div className="container">
        <div className="ugcHeader">
          <span className="socialBadge">{t.social.badge}</span>
          <h2>{t.social.title}</h2>
        </div>

        {/* Before & After Gallery */}
        <div className="baSection">
          <h3 className="baSectionTitle">
            {language === 'en' ? 'Real Results Over Time' : 'Реални резултати с времето'}
          </h3>
          <div className="baCard">
            <div className="baImages">
              <div className="baImageContainer">
                <Image src={current.before} alt="Before" fill style={{ objectFit: 'cover' }} sizes="400px" />
                <span className="baLabel">{language === 'en' ? 'BEFORE' : 'ПРЕДИ'}</span>
              </div>
              <div className="baImageContainer">
                <Image src={current.after} alt="After" fill style={{ objectFit: 'cover' }} sizes="400px" />
                <span className="baLabel">{language === 'en' ? 'AFTER' : 'СЛЕД'}</span>
              </div>
            </div>
            <div className="baContent">
              <h3>{language === 'en' ? current.titleEn : current.titleBg}</h3>
              <p>{language === 'en' ? current.descEn : current.descBg}</p>
              <div className="baNav">
                <button 
                  onClick={prevResult} 
                  className="baNavBtn"
                  aria-label="Previous result"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <div className="baDots" role="group" aria-label="Result indicator">
                  {beforeAfterResults.map((_, i) => (
                    <span 
                      key={i} 
                      className={`baDot ${i === activeIndex ? 'active' : ''}`} 
                      aria-current={i === activeIndex ? 'true' : 'false'}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextResult} 
                  className="baNavBtn"
                  aria-label="Next result"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotating Marquee */}
      <div className="ugcMarqueeWrapper">
        <div className="ugcMarqueeTrack" ref={trackRef}>
          {[...ugcCards, ...ugcCards].map((card, index) => (
            <div 
              key={index} 
              className="ugcCard"
              style={{ '--rotation': `${(index % 5 - 2) * 2.5}deg` } as React.CSSProperties}
            >
              <div className="ugcCardImage">
                <Image 
                  src={card.img} 
                  alt={`User result shared by ${card.handle}`} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  sizes="280px"
                />
              </div>
              <div className="ugcCardOverlay">
                <span className="ugcHandle">{card.handle}</span>
                <p className="ugcCaption">{card.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="container">
        <div className="trustBar">
          <div className="trustBadge">
            <span className="badgeIcon"><ShieldCheck size={28} aria-hidden="true" /></span>
            <span className="badgeText">{language === 'en' ? 'FDA CLEARED' : 'FDA ОДОБРЕН'}</span>
          </div>
          <div className="trustBadge">
            <span className="badgeIcon"><RotateCcw size={28} aria-hidden="true" /></span>
            <span className="badgeText">{language === 'en' ? '90-DAY GUARANTEE' : '90-ДНЕВНА ГАРАНЦИЯ'}</span>
          </div>
          <div className="trustBadge">
            <span className="badgeIcon"><Truck size={28} aria-hidden="true" /></span>
            <span className="badgeText">{language === 'en' ? 'FREE EXPRESS SHIPPING' : 'БЕЗПЛАТНА ДОСТАВКА'}</span>
          </div>
          <div className="trustBadge">
            <span className="badgeIcon"><Star size={28} aria-hidden="true" /></span>
            <span className="badgeText">{language === 'en' ? '4.9/5 RATING' : '4.9/5 ОЦЕНКА'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
