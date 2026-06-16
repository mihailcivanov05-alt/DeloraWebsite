import React from "react";
import { Star, CheckCircle } from "lucide-react";
import "./ReviewCards.css";

const reviews = [
  {
    name: "Елена М.",
    stars: 5,
    text: "Абсолютно обожавам това устройство! Охлаждането е невероятно. След 6 седмици почти нямам косми по краката.",
  },
  {
    name: "Анна П.",
    stars: 5,
    text: "Замени месечните ми посещения в салон. Качеството е наистина премиум.",
  },
  {
    name: "Деси К.",
    stars: 5,
    text: "Колебаех се за IPL у дома, но Delora надмина всичките ми очаквания.",
  },
  {
    name: "Нора Т.",
    stars: 4,
    text: "Страхотно устройство, работи както е обещано. Резултатите са безспорни.",
  },
  {
    name: "Виктория Л.",
    stars: 5,
    text: "Най-добрата ми покупка тази година. Подмишниците ми са напълно гладки само след 5 сесии!",
  },
  {
    name: "Габи Р.",
    stars: 5,
    text: "Изработката е изключителна. Усеща се като устройство от професионален клас.",
  },
];

const ReviewCards = () => {
  return (
    <section className="reviewCards">
      <div className="container">
        <div className="reviewCards-header">
          <div className="reviewCards-aggregate">
            <h2 className="reviewCards-score">4.9 от 5</h2>
            <div className="reviewCards-starsLarge">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p className="reviewCards-subtitle">1,000+ Ревюта</p>
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
              <p className="reviewCards-text">&quot;{review.text}&quot;</p>
              <div className="reviewCards-authorInfo">
                <span className="reviewCards-name">{review.name}</span>
                <span className="reviewCards-verified">
                  <CheckCircle size={14} className="reviewCards-verifiedIcon" />
                  Верифицирана покупка
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
