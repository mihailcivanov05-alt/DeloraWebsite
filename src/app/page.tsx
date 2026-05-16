import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PressBar from "@/components/PressBar";
import Scrollytelling from "@/components/Scrollytelling";
import ScienceSection from "@/components/ScienceSection";
import SkinMatchQuiz from "@/components/SkinMatchQuiz";
import SocialProof from "@/components/SocialProof";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import "@/components/Footer.css";

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <PressBar />
      <Scrollytelling />
      <ProductSection />
      <ScienceSection />
      
      <SkinMatchQuiz />

      <SocialProof />
      <Footer />
    </main>
  );
}

