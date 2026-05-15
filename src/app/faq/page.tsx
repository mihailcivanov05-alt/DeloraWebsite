"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { ChevronDown, ChevronUp, ShieldCheck, Sparkles, Zap, Microscope, Package } from "lucide-react";
import "./faq.css";

const FAQ_CATEGORIES = [
  {
    category: "Safety & Skin Compatibility",
    icon: <ShieldCheck size={20} />,
    questions: [
      {
        q: "Is Delora safe for all skin tones?",
        a: "Delora is clinically tested and safe for Fitzpatrick skin types I through V (fair to medium-dark olive). It is not recommended for very deep skin tones (Type VI) as the high melanin concentration in the skin can absorb too much energy, increasing the risk of irritation. Our SmartSkin sensor will alert you if your skin tone is outside the safe operating range."
      },
      {
        q: "Can I use it over tattoos or permanent makeup?",
        a: "No. Never apply Delora over tattooed skin, permanent makeup, or dark pigmented lesions. The high melanin concentration in tattoo ink absorbs the light intensely and can cause burns, blistering, or scarring. Treat around these areas, leaving at least a 2cm margin."
      },
      {
        q: "Is it safe to use during pregnancy?",
        a: "We recommend consulting your doctor before using Delora during pregnancy. While there is no evidence of harm, no clinical studies have been conducted on pregnant women and IPL devices, so we advise caution as a precaution."
      },
      {
        q: "Can I use it on my face?",
        a: "Yes — for areas below the cheekbones (upper lip, chin, cheeks). Do not use above the cheekbones or near the eyes. Always use the smallest flash window attachment for facial treatments and ensure the SmartSkin sensor approves the skin tone before flashing."
      },
      {
        q: "What about moles, birthmarks, or skin conditions?",
        a: "Avoid treating directly over moles, raised lesions, or active skin conditions (eczema, psoriasis). IPL is absorbed intensely by dark pigmented spots and can cause burns. If you have a history of skin cancer, consult a dermatologist before use."
      },
    ]
  },
  {
    category: "Effectiveness & Results",
    icon: <Sparkles size={20} />,
    questions: [
      {
        q: "How quickly will I see results?",
        a: "Most users report 30–50% reduction in hair density after the first 3 treatments (weeks 2–4). By the 8-week mark with consistent treatment (every 2 weeks), the majority of our users report 80–95% permanent reduction. Facial hair may take slightly longer due to the hormonal growth cycle."
      },
      {
        q: "Does hair color affect the results?",
        a: "Yes — IPL works by targeting melanin (pigment) in the hair follicle. It is most effective on dark brown to black hair. Light brown hair typically yields good results with more sessions. Blonde, red, and grey/white hair contain little to no melanin and respond poorly to IPL. Our Skin Consultation quiz will inform you of expected efficacy based on your hair color during your assessment."
      },
      {
        q: "How many sessions do I need?",
        a: "The recommended initial course is 8 sessions (once every 2 weeks for 16 weeks). After this, maintenance sessions once every 1–2 months are typically sufficient to maintain results. The exact number varies by individual based on hair density, hormone levels, and skin type."
      },
      {
        q: "Will hair stop growing permanently?",
        a: "IPL significantly disrupts the hair growth cycle, and for most users the results are long-lasting. However, 'permanent' in clinical terminology means 'stable for 12+ months after a complete treatment course.' Hormonal changes (pregnancy, menopause) may stimulate some regrowth, which maintenance sessions address effectively."
      }
    ]
  },
  {
    category: "Using Your Device",
    icon: <Zap size={20} />,
    questions: [
      {
        q: "How do I prepare for a treatment session?",
        a: "Shave the treatment area the day before. Do not wax, epilate, or use depilatory creams, as these remove the hair root that IPL targets. Ensure skin is clean, dry, and free of lotions, perfumes, or makeup. Avoid sun exposure for 24 hours before and after treatment."
      },
      {
        q: "Does it hurt?",
        a: "Most users describe the sensation as a warm flick or a mild snap — significantly less discomfort than waxing. The Sapphire Ice-Cooling Core actively cools the skin to 10°C during use, virtually eliminating the heat sensation that older IPL devices were known for. Users with very sensitive skin or fair skin types may experience slightly more sensation on higher intensity levels."
      },
      {
        q: "How long does a session take?",
        a: "Thanks to Delora's 0.5-second flash interval, a full leg treatment takes approximately 4 minutes. Both underarms take about 1 minute. Full face (below cheekbones) takes approximately 3 minutes. A full body treatment can be completed in under 15 minutes."
      },
      {
        q: "Can I use it in the summer / while tanning?",
        a: "Avoid using Delora on recently tanned skin (within 2 weeks of sun exposure) or on skin with active sunburn. Tanned skin has elevated melanin levels and absorbs more energy, increasing the risk of hyperpigmentation. If you tan easily, always use SPF 50+ on treated areas and use Delora at lower intensities."
      }
    ]
  },
  {
    category: "Device & Technical",
    icon: <Microscope size={20} />,
    questions: [
      {
        q: "How many flashes does Delora have?",
        a: "Delora is rated for 500,000+ lifetime flashes. At the recommended treatment schedule (full body, every 2 weeks for initial course then monthly maintenance), this equates to approximately 10+ years of use for a single user — effectively a lifetime device."
      },
      {
        q: "Does it need to be plugged in?",
        a: "Yes, Delora operates from a mains power supply for consistent, clinic-grade energy delivery. Battery-powered IPL devices sacrifice pulse energy to protect battery life — Delora delivers maximum intensity on every single flash."
      },
      {
        q: "What's in the box?",
        a: "Delora Elite device, 3m power cable, precision facial attachment head, body attachment head, protective tinted glasses, quick-start guide, and access to the Delora Digital Treatment Planner (email-based personalised schedule)."
      }
    ]
  },
  {
    category: "Orders, Shipping & Returns",
    icon: <Package size={20} />,
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery: 3–5 business days. Express delivery (next working day): available at checkout. International orders: 7–14 business days depending on destination. All orders are tracked from dispatch."
      },
      {
        q: "What is your returns policy?",
        a: "We offer a 90-day satisfaction guarantee. If you complete the recommended 8-session course and do not see a significant reduction in hair growth, simply contact us with your treatment log and we will issue a full refund — no questions asked. For change-of-mind returns, unused devices in original packaging can be returned within 30 days."
      },
      {
        q: "What warranty comes with Delora?",
        a: "Every Delora device comes with a 2-year manufacturer's warranty covering all hardware defects. Our warranty does not cover physical damage caused by misuse. Extended 5-year warranty coverage is available as an optional add-on at checkout."
      }
    ]
  }
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <main>
      <Navbar />

      <section className="faq-hero">
        <div className="container">
          <span className="faq-badge">Support Centre</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before, during, and after your Delora journey.</p>
        </div>
      </section>

      <section className="faq-body">
        <div className="container">
          <div className="faq-layout">
            {/* Category sidebar */}
            <div className="faq-sidebar">
              {FAQ_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.category}
                  className={`faq-cat-btn ${activeCategory === i ? "active" : ""}`}
                  onClick={() => setActiveCategory(i)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className="faq-questions">
              <h2 className="faq-cat-title">
                {FAQ_CATEGORIES[activeCategory].icon} {FAQ_CATEGORIES[activeCategory].category}
              </h2>
              {FAQ_CATEGORIES[activeCategory].questions.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="faq-cta">
        <div className="container faq-cta-inner">
          <h2>Still have a question?</h2>
          <p>Our skincare specialists are available Monday–Friday, 9am–6pm.</p>
          <a href="mailto:hello@delora.com" className="faq-email-btn">
            hello@delora.com
          </a>
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
