"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { Zap, Thermometer, Eye, Shield, Activity, Waves } from "lucide-react";
import "./science.css";

export default function SciencePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="sci-hero">
        <div className="container">
          <span className="sci-badge">Clinical Technology</span>
          <h1 className="sci-hero-title">The Physics of Perfection</h1>
          <p className="sci-hero-sub">
            Every photon of light Delora emits is calibrated to a precise
            wavelength — engineered to disable hair follicles permanently,
            without compromising the skin around them.
          </p>
        </div>
      </section>

      {/* Core Technology */}
      <section className="sci-section sci-light">
        <div className="container">
          <div className="sci-split">
            <div className="sci-split-text">
              <span className="sci-label">How IPL Works</span>
              <h2>Selective Photothermolysis</h2>
              <p>
                Delora delivers bursts of broad-spectrum light (550nm–1200nm)
                absorbed exclusively by melanin — the pigment inside your hair
                follicle. This selective absorption converts light to heat,
                raising the follicle temperature above 70°C to permanently
                disable regrowth — while leaving surrounding tissue untouched.
              </p>
              <p>
                This is the same principle used in professional laser clinics,
                now miniaturised into Delora&apos;s precision window.
              </p>
            </div>
            <div className="sci-split-visual">
              <div className="sci-spectrum-bar">
                <div className="sci-spectrum-fill" />
                <div className="sci-spectrum-labels">
                  <span>550nm</span>
                  <span className="sci-spectrum-active">Delora Range</span>
                  <span>1200nm</span>
                </div>
              </div>
              <div className="sci-stat-pair">
                <div className="sci-stat-box">
                  <span className="sci-stat-val">70°C+</span>
                  <span className="sci-stat-lbl">Follicle Target Temp</span>
                </div>
                <div className="sci-stat-box">
                  <span className="sci-stat-val">10°C</span>
                  <span className="sci-stat-lbl">Skin Surface (Cooled)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sapphire Cooling */}
      <section className="sci-section">
        <div className="container">
          <div className="sci-split sci-split-reverse">
            <div className="sci-split-text">
              <span className="sci-label">Sapphire Ice-Cooling Core</span>
              <h2>Cold Precision. Zero Discomfort.</h2>
              <p>
                The Delora contact surface is a synthetic sapphire crystal —
                one of the hardest, most thermally conductive materials on
                earth. It continuously draws heat away from the skin before,
                during, and after each flash, maintaining the surface at a
                constant 10°C.
              </p>
              <p>
                The result: zero burning sensation, no redness, and no
                downtime. You can treat your legs on your lunch break.
              </p>
            </div>
            <div className="sci-cooling-visual">
              <Thermometer size={80} className="sci-icon-glow" />
              <div className="sci-cooling-stats">
                <div className="sci-cooling-row">
                  <span>Standard IPL</span>
                  <div className="sci-bar sci-bar-hot" />
                  <span>45°C</span>
                </div>
                <div className="sci-cooling-row">
                  <span>Delora</span>
                  <div className="sci-bar sci-bar-cool" />
                  <span>10°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SmartSkin Sensor */}
      <section className="sci-section sci-light">
        <div className="container sci-center">
          <span className="sci-label">AI Safety System</span>
          <h2>SmartSkin™ Intelligence</h2>
          <p className="sci-section-sub">
            Delora&apos;s built-in sensor reads your skin tone 80 times per second
            and automatically selects the optimal intensity for your Fitzpatrick
            type — ensuring you never receive too much or too little energy.
          </p>
          <div className="sci-sensors-grid">
            {[
              { icon: Eye, title: "Skin Tone Detection", desc: "Reads melanin concentration to set safe energy levels before every flash." },
              { icon: Activity, title: "80Hz Sampling", desc: "Continuously adapts across body areas with different skin depths and tones." },
              { icon: Shield, title: "Safety Interlock", desc: "Won&apos;t fire if the window isn&apos;t fully in contact with your skin, preventing accidental flashes." },
              { icon: Waves, title: "Flash Calibration", desc: "Modulates pulse duration and energy density for each zone — face vs. body vs. bikini." },
              { icon: Zap, title: "0.5s Flash Rate", desc: "Industry-fastest pulse interval. Full legs done in under 4 minutes." },
              { icon: Thermometer, title: "Thermal Guard", desc: "Auto-pauses if the sapphire window exceeds safe operating temperature." },
            ].map((item) => (
              <div key={item.title} className="sci-sensor-card glass-panel">
                <item.icon size={32} className="sci-sensor-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Proof */}
      <section className="sci-section sci-dark">
        <div className="container sci-center">
          <span className="sci-label sci-label-light">Clinical Validation</span>
          <h2 className="sci-light-text">Numbers Don&apos;t Lie</h2>
          <div className="sci-proof-grid">
            {[
              { val: "95%", lbl: "Hair reduction after 4 weeks" },
              { val: "500,000+", lbl: "Lifetime flashes guaranteed" },
              { val: "FDA", lbl: "Cleared for safe home use" },
              { val: "Fitz I–V", lbl: "Safe for most skin types" },
              { val: "4 min", lbl: "Full leg treatment time" },
              { val: "3x", lbl: "More efficient than standard IPL" },
            ].map((item) => (
              <div key={item.lbl} className="sci-proof-card">
                <span className="sci-proof-val">{item.val}</span>
                <span className="sci-proof-lbl">{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sci-section sci-cta">
        <div className="container sci-center">
          <h2>Ready to Experience the Science?</h2>
          <p>Take our 30-second skin consultation and get your personalised protocol.</p>
          <Button variant="primary" size="lg" href="/#consultation">
            Start My Skin Consultation
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
