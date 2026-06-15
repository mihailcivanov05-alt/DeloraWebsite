"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./ReviewCards.css";

const reviews = [
  {
    name: "Elena M.",
    stars: 5,
    text: "Absolutely love this device! The cooling feature is a game-changer. After 6 weeks, I barely have any hair on my legs.",
  },
  {
    name: "Anna P.",
    stars: 5,
    text: "Replaced my monthly salon visits. The quality feels truly premium.",
  },
  {
    name: "Desi K.",
    stars: 5,
    text: "I was hesitant about at-home IPL but Delora exceeded all expectations.",
  },
  {
    name: "Nora T.",
    stars: 4,
    text: "Great device, works as advertised. The results are undeniable.",
  },
  {
    name: "Viktoria L.",
    stars: 5,
    text: "Best purchase I have made this year. My underarms are completely smooth after just 5 sessions!",
  },
  {
    name: "Gabi R.",
    stars: 5,
    text: "The build quality is exceptional. Feels like a professional-grade device.",
  },
];

const ReviewCards = () => {
  const { language } = useLanguage();

  return (
    <section className="reviewCards">
      <div className="container">
        <div className="reviewCards-header">
          <div className="reviewCards-aggregate">
            <h2 className="reviewCards-score">
              {language === "en" ? "4.9 out of 5" : "4.9 от 5"}
            </h2>
            <div className="reviewCards-starsLarge">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p className="reviewCards-subtitle">
              {language === "en" ? "1,000+ Reviews" : "1,000+ Ревюта"}
            </p>
          </div>
        </div>

        <div className="reviewCards-grid">
          {reviews.map((review, index) => (
            <div key={index} className="reviewCards-card">
              <div className="reviewCards-cardStars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.stars ? "#F59E0B" : "none"} 
                    color={i < review.stars ? "#F59E0B" : "#D1D5DB"} 
                  />
                ))}
              </div>
              <p className="reviewCards-text">"{review.text}"</p>
              <div className="reviewCards-authorInfo">
                <span className="reviewCards-name">{review.name}</span>
                <span className="reviewCards-verified">
                  <CheckCircle size={14} className="reviewCards-verifiedIcon" />
                  {language === "en" ? "Verified Purchase" : "Верифицирана покупка"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
