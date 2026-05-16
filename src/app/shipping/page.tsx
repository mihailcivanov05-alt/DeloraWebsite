"use client";
import Navbar from "@/components/Navbar";
import { Package, RefreshCw, Shield, Truck, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./shipping.css";

export default function ShippingPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: "Shipping, Returns & Warranty",
      sub: "We stand behind Delora completely. Your investment is protected from purchase to long-lasting results.",
      g1: "90-Day Guarantee",
      g1d: "Full refund if you complete the course and don't see results.",
      g2: "2-Year Warranty",
      g2d: "Complete hardware coverage against all manufacturing defects.",
      g3: "Free Shipping",
      g3d: "Free standard delivery on all orders over €150.",
      g4: "Tracked Delivery",
      g4d: "Every order fully tracked from dispatch to your door."
    },
    bg: {
      hero: "Доставка, връщане и гаранция",
      sub: "Ние заставаме твърдо зад Delora. Вашата инвестиция е защитена от покупката до дълготрайните резултати.",
      g1: "90-дневна гаранция",
      g1d: "Пълно възстановяване на сумата, ако завършите курса и не видите резултати.",
      g2: "2 години гаранция",
      g2d: "Пълно хардуерно покритие срещу производствени дефекти.",
      g3: "Безплатна доставка",
      g3d: "Безплатна стандартна доставка за всички поръчки над €150.",
      g4: "Проследяване",
      g4d: "Всяка поръчка е напълно проследима от изпращането до вратата ви."
    }
  };

  const c = language === 'bg' ? content.bg : content.en;

  return (
    <main>
      <Navbar />

      <section className="ship-hero">
        <div className="container">
          <span className="ship-badge">{language === 'en' ? 'Your Peace of Mind' : 'Вашето спокойствие'}</span>
          <h1>{c.hero}</h1>
          <p>{c.sub}</p>
        </div>
      </section>

      <section className="ship-trust">
        <div className="container">
          <div className="ship-trust-grid">
            <div className="ship-trust-card glass-panel">
              <RefreshCw size={36} className="ship-trust-icon" />
              <h3>{c.g1}</h3>
              <p>{c.g1d}</p>
            </div>
            <div className="ship-trust-card glass-panel">
              <Shield size={36} className="ship-trust-icon" />
              <h3>{c.g2}</h3>
              <p>{c.g2d}</p>
            </div>
            <div className="ship-trust-card glass-panel">
              <Truck size={36} className="ship-trust-icon" />
              <h3>{c.g3}</h3>
              <p>{c.g3d}</p>
            </div>
            <div className="ship-trust-card glass-panel">
              <Package size={36} className="ship-trust-icon" />
              <h3>{c.g4}</h3>
              <p>{c.g4d}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ship-section ship-light">
        <div className="container">
          <div className="ship-content">
            <Truck size={48} className="ship-section-icon" />
            <h2>{language === 'en' ? 'Delivery Times' : 'Срокове за доставка'}</h2>
            <p className="ship-intro">{language === 'en' ? 'We ship all orders from our fulfilment centre in Sofia, Bulgaria.' : 'Изпращаме всички поръчки от нашия център в София, България.'}</p>
            
            <div className="ship-table">
              <div className="ship-table-header">
                <span>{language === 'en' ? 'Destination' : 'Дестинация'}</span>
                <span>{language === 'en' ? 'Standard' : 'Стандартна'}</span>
                <span>{language === 'en' ? 'Express' : 'Експресна'}</span>
              </div>
              <div className="ship-table-row">
                <span className="ship-dest"><Globe size={16} /> Bulgaria</span>
                <span>1–2 business days</span>
                <span>Next day</span>
              </div>
              <div className="ship-table-row">
                <span className="ship-dest"><Globe size={16} /> EU</span>
                <span>3–5 business days</span>
                <span>1–2 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="sci-footer">
        <div className="container">
          <a href="/" className="sci-footer-logo">DELORA</a>
          <p>© {new Date().getFullYear()} Delora. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

