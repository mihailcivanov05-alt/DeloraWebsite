"use client";

import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  const EXPLORE_LINKS = [
    { label: t.navbar.howItWorks, href: "/#how-it-works" },
    { label: t.navbar.science, href: "/science" },
    { label: t.navbar.consultation, href: "/#consultation" },
    { label: t.navbar.about, href: "/about" },
  ];

  const SUPPORT_LINKS = [
    { label: t.navbar.faq, href: "/faq" },
    { label: language === 'en' ? "Shipping & Returns" : "Доставка и връщане", href: "/shipping" },
    { label: language === 'en' ? "Privacy Policy" : "Политика за поверителност", href: "/privacy" },
    { label: language === 'en' ? "Terms & Conditions" : "Общи условия", href: "/terms" },
  ];

  const LEGAL_LINKS = [
    { id: "privacy", label: language === 'en' ? "Privacy" : "Поверителност" },
    { id: "terms", label: language === 'en' ? "Terms" : "Условия" }
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">DELORA</a>
            <p className="footer-tagline">{t.footer.tagline}</p>
            <p className="footer-copy">© {new Date().getFullYear()} Delora. {t.footer.copyright}</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="footer-col-title">{t.footer.explore}</h4>
            <ul className="footer-links">
              {EXPLORE_LINKS.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-col-title">{t.footer.support}</h4>
            <ul className="footer-links">
              {SUPPORT_LINKS.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email capture */}
          <div>
            <h4 className="footer-col-title">{t.footer.innerCircle}</h4>
            <p className="footer-email-desc">
              {language === 'en' 
                ? "Exclusive launches, treatment tips, and early access. No spam."
                : "Ексклузивни предложения, съвети за процедури и ранен достъп. Без спам."}
            </p>
            <div className="footer-email-form">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="footer-email-input"
                aria-label="Your email address for newsletter"
              />
              <Button variant="primary" size="md">{t.footer.join}</Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-legal-text">{t.footer.legal}</span>
          <div className="footer-legal-links">
            {LEGAL_LINKS.map((l) => (
              <a key={l.id} href={`/${l.id}`} className="footer-legal-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

