import Navbar from "@/components/Navbar";
import ProductHero from "@/components/ProductHero";
import TrustBadges from "@/components/TrustBadges";
import BenefitGrid from "@/components/BenefitGrid";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ComparisonTable from "@/components/ComparisonTable";
import HowToUse from "@/components/HowToUse";
import SkinMatchQuiz from "@/components/SkinMatchQuiz";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewCards from "@/components/ReviewCards";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCartBar from "@/components/StickyCartBar";
import "@/components/Footer.css";

export const metadata = {
  title: "Delora Elite IPL Device | Luxury At-Home Photoepilation",
  description:
    "Get salon-smooth skin at home with the Delora Elite IPL device. Sapphire ice-cooling, smart skin sensor, 95% hair reduction in 8 weeks. Free shipping & 90-day guarantee.",
};

export default function ProductPage() {
  return (
    <main style={{ position: "relative" }}>
      {/* B. Navigation header */}
      <Navbar />

      {/* C. Product hero buy box */}
      <ProductHero />

      {/* D. Trust badges strip */}
      <TrustBadges />

      {/* F. Benefit icon grid */}
      <BenefitGrid />

      {/* G. Before/After results */}
      <BeforeAfterSection />

      {/* J. Comparison table */}
      <ComparisonTable />

      {/* L. How to use (3 steps) */}
      <HowToUse />

      {/* M. Skin tone/hair suitability quiz */}
      <SkinMatchQuiz />

      {/* N. FAQ accordion */}
      <FAQAccordion />

      {/* O. Customer reviews */}
      <ReviewCards />

      {/* P. Final CTA section */}
      <FinalCTA />

      {/* Q. Footer */}
      <Footer />

      {/* Sticky cart bar (fixed bottom) */}
      <StickyCartBar />
    </main>
  );
}
