"use client";

import Button from "./Button";

const EXPLORE_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "The Science", href: "/science" },
  { label: "Skin Consultation", href: "/#consultation" },
  { label: "Our Story", href: "/about" },
];

const SUPPORT_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const LEGAL_LINKS = ["privacy", "terms"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">DELORA</a>
            <p className="footer-tagline">
              Elevating beauty through clinical technology. Professional IPL results — in your home, on your schedule.
            </p>
            <p className="footer-copy">© {new Date().getFullYear()} Delora. All rights reserved.</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email capture */}
          <div>
            <h4 className="footer-col-title">Inner Circle</h4>
            <p className="footer-email-desc">
              Exclusive launches, treatment tips, and early access. No spam.
            </p>
            <div className="footer-email-form">
              <input
                type="email"
                placeholder="Your email address"
                className="footer-email-input"
                aria-label="Your email address for newsletter"
              />
              <Button variant="primary" size="md">Join the Circle</Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-legal-text">
            Delora Ltd. · Sofia, Bulgaria · FDA Cleared · CE Marked
          </span>
          <div className="footer-legal-links">
            {LEGAL_LINKS.map((l) => (
              <a key={l} href={`/${l}`} className="footer-legal-link">
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
