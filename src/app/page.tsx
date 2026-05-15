import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PressBar from "@/components/PressBar";
import Scrollytelling from "@/components/Scrollytelling";
import ScienceSection from "@/components/ScienceSection";
import SkinMatchQuiz from "@/components/SkinMatchQuiz";
import SocialProof from "@/components/SocialProof";
import Button from "@/components/Button";

import { FlaskConical, Snowflake, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <PressBar />
      <Scrollytelling />
      <ScienceSection />
      
      {/* Consultation Section */}
      <section id="consultation" style={{ padding: '120px 0', background: 'var(--color-white)' }}>
        <div className="container">
          <SkinMatchQuiz />
        </div>
      </section>

      <SocialProof />
      
      {/* Technical Specs Section */}
      <section id="tech-specs" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--color-amethyst)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Engineering</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Technical Specifications</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="tech-card" style={{ textAlign: 'center', transition: 'all 0.3s ease' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-lavender)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-amethyst)' }}>
                <FlaskConical size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Clinical IPL Tech</h3>
              <p style={{ color: 'var(--color-muted)' }}>Safe, intense pulsed light targets the melanin in hair follicles, putting them into a resting phase.</p>
            </div>
            <div className="tech-card" style={{ textAlign: 'center', transition: 'all 0.3s ease' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-beige)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-charcoal)' }}>
                <Snowflake size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Sapphire Cooling</h3>
              <p style={{ color: 'var(--color-muted)' }}>Advanced cooling technology keeps the skin surface at a comfortable temperature for a painless experience.</p>
            </div>
            <div className="tech-card" style={{ textAlign: 'center', transition: 'all 0.3s ease' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-lavender)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-amethyst)' }}>
                <Sparkles size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Visible Results</h3>
              <p style={{ color: 'var(--color-muted)' }}>Noticeable hair reduction after just 3-4 treatments. Silky smooth skin that lasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Email Capture */}
      <footer style={{ padding: '100px 0 50px', background: 'var(--color-charcoal)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ color: 'var(--color-lavender)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Delora</h3>
              <p style={{ opacity: 0.7, maxWidth: '300px' }}>Elevating beauty through technology. Experience luxury hair removal at home.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Join the Inner Circle</h4>
              <p style={{ opacity: 0.7, marginBottom: '1.5rem' }}>Subscribe for exclusive offers and beauty tips.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{ 
                    padding: '0.8rem 1.2rem', 
                    borderRadius: '50px', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    flex: 1
                  }} 
                />
                <Button variant="primary" size="md">Join</Button>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Delora. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
