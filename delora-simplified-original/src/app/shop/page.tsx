import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ShopGrid from "@/components/ShopGrid";
import Footer from "@/components/Footer";
import "@/components/Footer.css";

export const metadata: Metadata = {
  title: "Магазин | Delora",
  description:
    "Разгледайте устройството Delora Elite IPL и какво предстои — Delora XL, Delora Face и Post-IPL Серум.",
};

export default function ShopPage() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <ShopGrid />
      <Footer />
    </main>
  );
}
