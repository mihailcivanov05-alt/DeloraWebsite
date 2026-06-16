"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import "./ComparisonTable.css";

type TabKey = "shaving" | "waxing" | "laser";

interface CardContent {
  bold: string;
  text: string;
  imageSrc: string;
}

interface TabData {
  label: string;
  delora: CardContent;
  competitor: CardContent;
}

const tabData: Record<TabKey, TabData> = {
  shaving: {
    label: "Бръснене",
    delora: {
      bold: "Дълготрайни резултати",
      text: "Трайно намаляване на окосмяването за едва 4-8 седмици.",
      imageSrc: "/Photoshoots/Other/hf_20260524_224750_7f24dd8d-5dd5-4b3a-8a2f-8b4b6a28d452.png",
    },
    competitor: {
      bold: "Постоянно бръснене за временен контрол",
      text: "Само отрязва косъма на повърхността. Чести порязвания, обриви и враснали косми.",
      imageSrc: "/Photoshoots/Other/hf_20260524_230406_0df9a313-b30e-43f5-9b02-38b2570c286a.png",
    },
  },
  waxing: {
    label: "Кола маска",
    delora: {
      bold: "Напълно безболезнено",
      text: "Насочва се към корена на косъма, за да спре растежа му без болка.",
      imageSrc: "/Photoshoots/Other/hf_20260524_224750_7f24dd8d-5dd5-4b3a-8a2f-8b4b6a28d452.png",
    },
    competitor: {
      bold: "Горещият восък буквално откъсва космите от тялото. Ох!",
      text: "Изключително болезнено, скъпо с времето и причинява сериозни зачервявания.",
      imageSrc: "/Photoshoots/Other/hf_20260524_225521_79e3b4c5-272e-470c-8ec5-ecdde7fc1608.png",
    },
  },
  laser: {
    label: "Клиничен лазер",
    delora: {
      bold: "Дискретност и удобство",
      text: "Погрижете се за окосмяването си у дома по ваш собствен график. Безопасно и дискретно.",
      imageSrc: "/Photoshoots/Other/hf_20260524_224750_7f24dd8d-5dd5-4b3a-8a2f-8b4b6a28d452.png",
    },
    competitor: {
      bold: "Трябва да посещавате специализирана клиника",
      text: "Изисква планиране, пътуване, големи разходи и неудобни клинични процедури.",
      imageSrc: "/Photoshoots/Other/hf_20260524_231522_abe7b644-c383-45da-9830-3bb6c07feed3.png",
    },
  },
};

const ComparisonTable = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("shaving");
  const current = tabData[activeTab];

  return (
    <section className="comparisonTable">
      <div className="container comparisonTable-container">
        {/* Header Block with Title Left, Tab Buttons Right */}
        <div className="comparisonTable-headerRow">
          <h2 className="comparisonTable-title">Delora в сравнение с...</h2>

          <div className="comparisonTable-tabsWrapper">
            <div className="comparisonTable-tabs">
              {(Object.keys(tabData) as TabKey[]).map((key) => (
                <button
                  key={key}
                  className={`comparisonTable-tabBtn ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {tabData[key].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Side-by-Side Cards Comparison */}
        <div className="comparisonTable-cardsPair">
          {/* Card 1: Delora Elite (Always Left) */}
          <div className="comparisonTable-cardItem featured">
            <div className="comparisonTable-cardImageWrapper">
              <Image
                src={current.delora.imageSrc}
                alt="Delora Elite в употреба"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="comparisonTable-cardIconWrapper check">
              <div className="comparisonTable-circleIcon">
                <Check size={24} strokeWidth={3} />
              </div>
            </div>

            <div className="comparisonTable-cardInfo">
              <p className="comparisonTable-cardText">{current.delora.text}</p>
              <h4 className="comparisonTable-cardBold">{current.delora.bold}</h4>
            </div>
          </div>

          {/* Card 2: Selected Competitor (Always Right) */}
          <div className="comparisonTable-cardItem competitor">
            <div className="comparisonTable-cardImageWrapper">
              <Image
                src={current.competitor.imageSrc}
                alt="Сравнение"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="comparisonTable-cardIconWrapper cross">
              <div className="comparisonTable-circleIcon">
                <X size={24} strokeWidth={3} />
              </div>
            </div>

            <div className="comparisonTable-cardInfo">
              <p className="comparisonTable-cardText">{current.competitor.text}</p>
              <h4 className="comparisonTable-cardBold">{current.competitor.bold}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
