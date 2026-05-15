import Navbar from "@/components/Navbar";
import { Package, RefreshCw, Shield, Truck, Globe } from "lucide-react";
import "./shipping.css";

export const metadata = {
  title: "Shipping, Returns & Warranty | Delora",
  description: "Delora's shipping times, 90-day satisfaction guarantee, 2-year warranty, and easy returns process.",
};

export default function ShippingPage() {
  return (
    <main>
      <Navbar />

      <section className="ship-hero">
        <div className="container">
          <span className="ship-badge">Your Peace of Mind</span>
          <h1>Shipping, Returns & Warranty</h1>
          <p>We stand behind Delora completely. Your investment is protected from purchase to permanent results.</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="ship-trust">
        <div className="container">
          <div className="ship-trust-grid">
            {[
              { icon: RefreshCw, title: "90-Day Guarantee", desc: "Full refund if you complete the course and don&apos;t see results." },
              { icon: Shield, title: "2-Year Warranty", desc: "Complete hardware coverage against all manufacturing defects." },
              { icon: Truck, title: "Free Shipping", desc: "Free standard delivery on all orders over €150." },
              { icon: Package, title: "Tracked Delivery", desc: "Every order fully tracked from dispatch to your door." },
            ].map((item) => (
              <div key={item.title} className="ship-trust-card glass-panel">
                <item.icon size={36} className="ship-trust-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Details */}
      <section className="ship-section ship-light">
        <div className="container">
          <div className="ship-content">
            <Truck size={48} className="ship-section-icon" />
            <h2>Delivery Times</h2>
            <p className="ship-intro">We ship all orders from our fulfilment centre in Sofia, Bulgaria.</p>

            <div className="ship-table">
              <div className="ship-table-header">
                <span>Destination</span>
                <span>Standard (Free €150+)</span>
                <span>Express</span>
              </div>
              {[
                { dest: "Bulgaria", std: "1–2 business days", exp: "Next working day" },
                { dest: "EU (Western)", std: "3–5 business days", exp: "2–3 business days" },
                { dest: "EU (Eastern)", std: "2–4 business days", exp: "1–2 business days" },
                { dest: "UK", std: "4–6 business days", exp: "2–3 business days" },
                { dest: "USA & Canada", std: "7–10 business days", exp: "4–5 business days" },
                { dest: "Rest of World", std: "10–14 business days", exp: "5–7 business days" },
              ].map((row) => (
                <div key={row.dest} className="ship-table-row">
                  <span className="ship-dest">
                    <Globe size={16} /> {row.dest}
                  </span>
                  <span>{row.std}</span>
                  <span>{row.exp}</span>
                </div>
              ))}
            </div>
            <p className="ship-note">Tracking information is sent via email within 24 hours of dispatch. Customs and import duties may apply for non-EU destinations and are the buyer&apos;s responsibility.</p>
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="ship-section">
        <div className="container">
          <div className="ship-content">
            <RefreshCw size={48} className="ship-section-icon" />
            <h2>Returns & Our 90-Day Guarantee</h2>
            <p className="ship-intro">We are so confident in Delora&apos;s results that we offer an industry-leading 90-day satisfaction guarantee.</p>

            <div className="ship-cards">
              <div className="ship-policy-card">
                <h3>Satisfaction Guarantee</h3>
                <p>Complete the full 8-session course (16 weeks) as directed. If you don&apos;t see a meaningful reduction in hair growth, contact us with your treatment log and we&apos;ll process a full refund — no questions, no hassle.</p>
              </div>
              <div className="ship-policy-card">
                <h3>Change of Mind Returns</h3>
                <p>Changed your mind? Return your unused, unopened Delora in original packaging within 30 days of delivery for a full refund. Return shipping costs are the buyer&apos;s responsibility for change-of-mind returns.</p>
              </div>
              <div className="ship-policy-card">
                <h3>Faulty / Damaged Items</h3>
                <p>If your Delora arrives damaged or develops a fault, we&apos;ll send a replacement immediately at no cost. Simply email hello@delora.com with a photo and your order number — we aim to resolve all cases within 24 hours.</p>
              </div>
            </div>

            <div className="ship-process">
              <h3>How to Start a Return</h3>
              <div className="ship-steps">
                {[
                  { n: "01", text: "Email hello@delora.com with your order number and reason for return." },
                  { n: "02", text: "Our team responds within 24 hours with a pre-paid returns label (for eligible returns)." },
                  { n: "03", text: "Package your device securely and drop it at any local courier point." },
                  { n: "04", text: "Refund processed within 3–5 business days of receiving the return." },
                ].map((s) => (
                  <div key={s.n} className="ship-step">
                    <span className="ship-step-n">{s.n}</span>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="ship-section ship-dark">
        <div className="container">
          <div className="ship-content ship-content-center">
            <Shield size={60} className="ship-warranty-icon" />
            <h2 className="ship-light-text">2-Year Warranty</h2>
            <p className="ship-warranty-sub">Every Delora device is backed by our full 2-year manufacturer&apos;s warranty — one of the best in the category.</p>

            <div className="ship-warranty-grid">
              <div className="ship-warranty-card">
                <h3>✅ Covered</h3>
                <ul>
                  <li>Manufacturing defects in materials and workmanship</li>
                  <li>Flash lamp deterioration beyond normal wear</li>
                  <li>Electronic component failures</li>
                  <li>Sapphire cooling crystal defects</li>
                  <li>Power supply unit faults</li>
                </ul>
              </div>
              <div className="ship-warranty-card">
                <h3>❌ Not Covered</h3>
                <ul>
                  <li>Physical damage from drops or misuse</li>
                  <li>Water damage beyond IPX4 rating</li>
                  <li>Cosmetic scratches and wear from normal use</li>
                  <li>Damage from use with incompatible accessories</li>
                  <li>Devices purchased from unauthorised resellers</li>
                </ul>
              </div>
            </div>

            <p className="ship-warranty-upgrade">
              Extended 5-Year Protection available at checkout — recommended for intensive daily use.
            </p>
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
