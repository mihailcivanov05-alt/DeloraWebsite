"use client";
import React from "react";
import { Check, X, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./SuitabilityGuide.css";

const SuitabilityGuide = () => {
  const { language } = useLanguage();
  const isBg = language === 'bg';

  const skinTones = [
    { type: 'I', name: isBg ? 'Много светла' : 'Very Fair', color: '#FAD8C7' },
    { type: 'II', name: isBg ? 'Светла' : 'Fair', color: '#EFC1A6' },
    { type: 'III', name: isBg ? 'Средна' : 'Medium', color: '#D99F7B' },
    { type: 'IV', name: isBg ? 'Маслинова' : 'Olive', color: '#AF7654' },
    { type: 'V', name: isBg ? 'Тъмна' : 'Brown', color: '#7E4C33' },
    { type: 'VI', name: isBg ? 'Много тъмна' : 'Dark', color: '#442314' }
  ];

  const hairColors = [
    { id: 'black', name: isBg ? 'Черна' : 'Black', color: '#090909' },
    { id: 'darkBrown', name: isBg ? 'Тъмно кафява' : 'Dark Brown', color: '#3B2313' },
    { id: 'lightBrown', name: isBg ? 'Светло кафява' : 'Light Brown', color: '#8B5A2B' },
    { id: 'blonde', name: isBg ? 'Руса' : 'Blonde', color: '#E6C687' },
    { id: 'red', name: isBg ? 'Червена' : 'Red', color: '#9B2D1C' },
    { id: 'grey', name: isBg ? 'Бяла/Сива' : 'White/Grey', color: '#E0E0E0' }
  ];

  const getCompatibility = (skinIndex: number, hairId: string) => {
    if (['red', 'grey'].includes(hairId)) return 'no';
    if (skinIndex >= 4) return 'no';
    
    if (hairId === 'blonde') {
      return skinIndex <= 2 ? 'maybe' : 'no';
    }
    
    return 'yes';
  };

  const renderIcon = (status: string) => {
    if (status === 'yes') return <Check className="suitability-icon yes" />;
    if (status === 'maybe') return <AlertTriangle className="suitability-icon maybe" />;
    return <X className="suitability-icon no" />;
  };

  return (
    <section className="suitability">
      <div className="container suitability-container">
        <div className="suitability-header">
          <h2 className="suitability-title">
            {isBg ? 'Подходяща ли е Delora за вас?' : 'Is Delora Right for You?'}
          </h2>
          <p className="suitability-subtitle">
            {isBg 
              ? 'IPL технологията работи най-добре при контраст между цвета на кожата и окосмяването. Проверете своята съвместимост по-долу.' 
              : 'IPL works best on the contrast between skin tone and hair color. Check your compatibility below.'}
          </p>
        </div>

        <div className="suitability-wrapper">
          <table className="suitability-table">
            <thead>
              <tr>
                <th className="suitability-th empty-th">
                  <div className="suitability-axes">
                    <span className="axis-hair">{isBg ? 'Цвят на косата ➔' : 'Hair Color ➔'}</span>
                    <span className="axis-skin">{isBg ? 'Цвят на кожата ↓' : 'Skin Tone ↓'}</span>
                  </div>
                </th>
                {hairColors.map(hair => (
                  <th key={hair.id} className="suitability-th">
                    <div className="suitability-hairSwatch" style={{ backgroundColor: hair.color }} />
                    <span className="suitability-thLabel">{hair.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {skinTones.map((skin, skinIndex) => (
                <tr key={skin.type} className="suitability-tr">
                  <td className="suitability-td suitability-tdLabel">
                    <div className="suitability-skinInfo">
                      <div className="suitability-skinSwatch" style={{ backgroundColor: skin.color }} />
                      <div className="suitability-skinText">
                        <span className="skin-type">Type {skin.type}</span>
                        <span className="skin-name">{skin.name}</span>
                      </div>
                    </div>
                  </td>
                  {hairColors.map(hair => {
                    const status = getCompatibility(skinIndex, hair.id);
                    return (
                      <td key={hair.id} className="suitability-td">
                        <div className="suitability-cellIcon">
                          {renderIcon(status)}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="suitability-legend">
          <div className="legend-item">
            <Check className="suitability-icon yes" />
            <span>{isBg ? 'Работи отлично' : 'Works well'}</span>
          </div>
          <div className="legend-item">
            <AlertTriangle className="suitability-icon maybe" />
            <span>{isBg ? 'Ограничени резултати' : 'Limited results'}</span>
          </div>
          <div className="legend-item">
            <X className="suitability-icon no" />
            <span>{isBg ? 'Не се препоръчва' : 'Not recommended'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuitabilityGuide;
