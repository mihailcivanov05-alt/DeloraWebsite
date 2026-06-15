import type { Metadata } from "next";
import AdvertorialTraditional from "@/components/AdvertorialTraditional";

// Hidden cold-traffic landing page (NOOD-style advertorial): not indexed, not in nav.
export const metadata: Metadata = {
  title: "Спри да робуваш на депилацията | Delora",
  description:
    "Трите най-популярни начина за депилация те робуват. Салон, восък и бръснене са цикли без край. Delora прекъсва всички три цикъла наведнъж.",
  robots: { index: false, follow: false },
};

export default function IplVsTraditionalPage() {
  return <AdvertorialTraditional />;
}
