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
  title: "Delora Elite IPL Устройство | Луксозна фотоепилация у дома",
  description:
    "Гладка кожа като след салон у дома с устройството Delora Elite IPL. Сапфирено охлаждане, умен сензор за кожа, до 95% намаляване на окосмяването. Безплатна доставка и 90-дневна гаранция.",
};

export default function ProductPage() {
  return (
    <main style={{ position: "relative" }}>
      {/* Navigation header */}
      <Navbar />

      {/* Product hero buy box */}
      <ProductHero />

      {/* Trust badges strip */}
      <TrustBadges />

      {/* Benefit icon grid */}
      <BenefitGrid />

      {/* Before/After results */}
      <BeforeAfterSection />

      {/* Comparison table */}
      <ComparisonTable />

      {/* How to use (3 steps) */}
      <HowToUse />

      {/* Skin tone/hair suitability quiz */}
      <SkinMatchQuiz />

      {/* FAQ accordion */}
      <FAQAccordion />

      {/* Customer reviews */}
      <ReviewCards />

      {/* Final CTA section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Sticky cart bar (fixed bottom) */}
      <StickyCartBar />
    </main>
  );
}
