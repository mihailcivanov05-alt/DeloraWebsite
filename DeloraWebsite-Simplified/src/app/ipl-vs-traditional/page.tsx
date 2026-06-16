import type { Metadata } from "next";
import AdvertorialTraditional from "@/components/AdvertorialTraditional";

export const metadata: Metadata = {
  title: "Спри да робуваш на депилацията | Delora",
  description:
    "Трите най-популярни начина за депилация те робуват. Салон, восък и бръснене са цикли без край. Delora прекъсва всички три цикъла наведнъж.",
  robots: { index: false, follow: false },
};

export default function IplVsTraditionalPage() {
  return <AdvertorialTraditional />;
}
