import type { Metadata } from "next";
import SciencePage from "@/components/SciencePage";

export const metadata: Metadata = {
  title: "Науката зад IPL технологията | Delora",
  description:
    "Открийте науката зад IPL технологията на Delora — как интензивната пулсираща светлина работи за трайно премахване на косми и подмладяване на кожата.",
  robots: {
    index: true,
  },
};

export default function Science() {
  return <SciencePage />;
}
