"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./ComparisonTable.css";

type TabKey = "shaving" | "waxing" | "laser";

interface CardContent {
  boldEn: string;
  boldBg: string;
  textEn: string;
  textBg: string;
  imagePlaceholderBg: string;
  imageSrc?: string;
}

interface TabData {
  labelEn: string;
  labelBg: string;
  delora: CardContent;
  competitor: CardContent;
}

const ComparisonTable = () => {
  const { language } = useLanguage();
  const isBg = language === 'bg';
  const [activeTab, setActiveTab] = useState<TabKey>("shaving");

  const tabData: Record<TabKey, TabData> = {
    shaving: {
      labelEn: "Shaving",
      labelBg: "Бръснене",
      delora: {
        boldEn: "Long-lasting results",
        boldBg: "Дълготрайни резултати",
        textEn: "Permanent hair reduction in as little as 4-8 weeks.",
        textBg: "Трайно намаляване на окосмяването за едва 4-8 седмици.",
        imagePlaceholderEn: "Delora Elite in use — smooth skin",
        imagePlaceholderBg: "Delora Elite в употреба — гладка кожа",
        imageSrc: "/Photoshoots/Other/hf_20260524_224750_7f24dd8d-5dd5-4b3a-8a2f-8b4b6a28d452.png"
      },
      competitor: {
        boldEn: "Shave constantly to keep body hair in check",
        boldBg: "Постоянно бръснене за временен контрол",
        textEn: "Only cuts hair at the surface. Razor burn, cuts, and ingrowns are common.",
        textBg: "Само отрязва косъма на повърхността. Чести порязвания, обриви и враснали косми.",
        imagePlaceholderEn: "Traditional Razor — constant upkeep",
        imagePlaceholderBg: "Обикновена самобръсначка — постоянно поддържане"
      }
    },
    waxing: {
      labelEn: "Waxing",
      labelBg: "Кола маска",
      delora: {
        boldEn: "Completely pain-free",
        boldBg: "Напълно безболезнено",
        textEn: "Targets unwanted hairs at the root to stop them from growing.",
        textBg: "Насочва се към корена на косъма, за да спре растежа му без болка.",
        imagePlaceholderEn: "Delora Elite — gentle cooling treatment",
        imagePlaceholderBg: "Delora Elite — нежна охлаждаща процедура",
        imageSrc: "/Photoshoots/Other/hf_20260524_224750_7f24dd8d-5dd5-4b3a-8a2f-8b4b6a28d452.png"
      },
      competitor: {
        boldEn: "Hot wax literally rips your hair off your body. Ouch!",
        boldBg: "Горещият восък буквално откъсва космите от тялото. Ох!",
        textEn: "Extremely painful, expensive over time, and causes severe redness.",
        textBg: "Изключително болезнено, скъпо с времето и причинява сериозни зачервявания.",
        imagePlaceholderEn: "Hot Wax Treatment — painful pull",
        imagePlaceholderBg: "Горещ восък — болезнено откъсване",
        imageSrc: "/Photoshoots/Other/hf_20260524_225521_79e3b4c5-272e-470c-8ec5-ecdde7fc1608.png"
      }
    },
    laser: {
      labelEn: "Clinical laser",
      labelBg: "Клиничен лазер",
      delora: {
        boldEn: "Privacy & convenience",
        boldBg: "Дискретност и удобство",
        textEn: "Take care of your hair at home on your own schedule. Safe and private.",
        textBg: "Погрижете се за окосмяването си у дома по ваш собствен график. Безопасно и дискретно.",
        imagePlaceholderEn: "Delora Elite — premium at-home treatment",
        imagePlaceholderBg: "Delora Elite — луксозна процедура у дома",
        imageSrc: "/Photoshoots/Other/hf_20260524_224750_7f24dd8d-5dd5-4b3a-8a2f-8b4b6a28d452.png"
      },
      competitor: {
        boldEn: "Bring your hairy self all the way to a clinic",
        boldBg: "Трябва да посещавате специализирана клиника",
        textEn: "Requires scheduling, traveling, high costs, and clinical sessions.",
        textBg: "Изисква планиране, пътуване, големи разходи и неудобни клинични процедури.",
        imagePlaceholderEn: "Clinical Laser Machine — expensive & public",
        imagePlaceholderBg: "Професионален лазер — скъпо и неудобно"
      }
    }
  };

  const current = tabData[activeTab];

  return (
    <section className="comparisonTable">
      <div className="container comparisonTable-container">
        {/* Header Block with Title Left, Tab Buttons Right */}
        <div className="comparisonTable-headerRow">
          <h2 className="comparisonTable-title">
            {isBg ? "Delora в сравнение с..." : "Delora compared to..."}
          </h2>
          
          <div className="comparisonTable-tabs">
            {(Object.keys(tabData) as TabKey[]).map((key) => (
              <button
                key={key}
                className={`comparisonTable-tabBtn ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {isBg ? tabData[key].labelBg : tabData[key].labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Side-by-Side Cards Comparison */}
        <div className="comparisonTable-cardsPair">
          {/* Card 1: Delora Elite (Always Left) */}
          <div className="comparisonTable-cardItem featured">
            <div className="comparisonTable-cardImageWrapper">
              {current.delora.imageSrc ? (
                <img 
                  src={current.delora.imageSrc} 
                  alt="Delora Elite Usage" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="comparisonTable-cardImagePlaceholder">
                  <span>{isBg ? current.delora.imagePlaceholderBg : current.delora.imagePlaceholderEn}</span>
                </div>
              )}
            </div>
            
            <div className="comparisonTable-cardIconWrapper check">
              <div className="comparisonTable-circleIcon">
                <Check size={24} strokeWidth={3} />
              </div>
            </div>

            <div className="comparisonTable-cardInfo">
              <p className="comparisonTable-cardText">
                {isBg ? current.delora.textBg : current.delora.textEn}
              </p>
              <h4 className="comparisonTable-cardBold">
                {isBg ? current.delora.boldBg : current.delora.boldEn}
              </h4>
            </div>
          </div>

          {/* Card 2: Selected Competitor (Always Right) */}
          <div className="comparisonTable-cardItem competitor">
            <div className="comparisonTable-cardImageWrapper">
              {current.competitor.imageSrc ? (
                <img 
                  src={current.competitor.imageSrc} 
                  alt="Comparison" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="comparisonTable-cardImagePlaceholder">
                  <span>{isBg ? current.competitor.imagePlaceholderBg : current.competitor.imagePlaceholderEn}</span>
                </div>
              )}
            </div>

            <div className="comparisonTable-cardIconWrapper cross">
              <div className="comparisonTable-circleIcon">
                <X size={24} strokeWidth={3} />
              </div>
            </div>

            <div className="comparisonTable-cardInfo">
              <p className="comparisonTable-cardText">
                {isBg ? current.competitor.textBg : current.competitor.textEn}
              </p>
              <h4 className="comparisonTable-cardBold">
                {isBg ? current.competitor.boldBg : current.competitor.boldEn}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
