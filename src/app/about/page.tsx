import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import "./about.css";

export const metadata = {
  title: "Our Story | Delora",
  description: "The mission behind Delora — bringing clinical IPL technology home, without compromise.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="about-badge">Our Mission</span>
          <h1>Beauty shouldn't require a clinic appointment.</h1>
          <p>Delora was born from a simple idea: the same technology that removes hair permanently in dermatology clinics should be accessible to everyone, at home, without compromise on quality or safety.</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <div className="about-text">
              <span className="about-label">The Beginning</span>
              <h2>A Problem Worth Solving</h2>
              <p>
                The average woman spends €18,000 and 72 days of her life managing unwanted hair. Salons charge €80–200 per session, require 8–12 visits, and demand appointments weeks in advance.
              </p>
              <p>
                The existing home IPL market offered devices that were either dangerously underpowered, painful to use, or so confusing that users gave up after 2 sessions.
              </p>
              <p>
                Delora set out to change that — not by lowering the bar, but by raising it to match clinical standards while making the experience genuinely effortless.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-stat-stack">
                {[
                  { val: "€18,000", sub: "Average lifetime spend on hair removal" },
                  { val: "72 days", sub: "Of a woman's life spent managing hair" },
                  { val: "€150–400", sub: "Delora — once. For life." },
                ].map((s) => (
                  <div key={s.val} className="about-stat">
                    <span className="about-stat-val">{s.val}</span>
                    <span className="about-stat-sub">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section about-light">
        <div className="container about-center">
          <span className="about-label">What We Stand For</span>
          <h2>Three Principles. No Exceptions.</h2>
          <div className="about-values">
            {[
              {
                n: "01",
                title: "Clinical Efficacy, Not Marketing Claims",
                body: "Every specification on Delora's website is backed by clinical testing. We do not use the word 'permanent' lightly — our results are validated to the same standard as in-clinic IPL studies."
              },
              {
                n: "02",
                title: "Safety is Non-Negotiable",
                body: "The SmartSkin sensor, Fitzpatrick scale assessment, and sapphire cooling system weren't added as features — they were the minimum viable safety standard we allowed ourselves to ship."
              },
              {
                n: "03",
                title: "Luxury Without Inaccessibility",
                body: "Premium design and premium results shouldn't mean premium pricing. Delora is designed to outlast, outperform, and out-value anything else in its class — at a fraction of clinic costs."
              },
            ].map((v) => (
              <div key={v.n} className="about-value-card glass-panel">
                <span className="about-value-n">{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-section">
        <div className="container about-center">
          <span className="about-label">The Journey</span>
          <h2>How We Got Here</h2>
          <div className="about-timeline">
            {[
              { year: "2021", event: "Concept & Research", detail: "12 months of research into clinical IPL protocols, sapphire cooling physics, and skin sensor technology." },
              { year: "2022", event: "Engineering & Safety Testing", detail: "Partnership with certified dermatological testing labs to validate efficacy across Fitzpatrick Types I–V." },
              { year: "2023", event: "First Beta Units", detail: "300 beta devices distributed to a closed community for real-world testing. 94% reported significant reduction by week 8." },
              { year: "2024", event: "FDA Clearance & Launch", detail: "Achieved FDA clearance and launched to the public. Sold out within 72 hours of launch." },
              { year: "2025", event: "Global Expansion", detail: "Shipping to 40+ countries. Multi-language platform launched. Delora Elite 2nd generation in development." },
            ].map((t, i) => (
              <div key={t.year} className={`about-timeline-item ${i % 2 === 0 ? "" : "about-timeline-right"}`}>
                <div className="about-timeline-content">
                  <span className="about-timeline-year">{t.year}</span>
                  <h3>{t.event}</h3>
                  <p>{t.detail}</p>
                </div>
                <div className="about-timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-center">
          <h2>Ready to experience the difference?</h2>
          <p>Join over 50,000 people who chose Delora over the salon — and never looked back.</p>
          <Button variant="primary" size="lg" href="/#consultation">
            Find My Delora Protocol
          </Button>
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
