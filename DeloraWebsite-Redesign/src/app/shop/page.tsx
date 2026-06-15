import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ShopGrid from "@/components/ShopGrid";
import Footer from "@/components/Footer";
import "@/components/Footer.css";

export const metadata: Metadata = {
  title: "Shop | Delora",
  description:
    "Shop the Delora Elite IPL device and see what's coming next — Delora XL, Delora Face, and the Post-IPL Serum.",
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
