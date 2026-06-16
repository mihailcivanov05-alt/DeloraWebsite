import type { Metadata } from "next";
import AdvertorialDevices from "@/components/AdvertorialDevices";

export const metadata: Metadata = {
  title: "IPL устройства: €89 боклук срещу €300+ люкс | Delora",
  description:
    "Евтините IPL не работят. Скъпите са пърелюкс. Разбери защо Delora е златната среда за трайно премахване на окосмяването.",
  robots: { index: false, follow: false },
};

export default function IplVsDevicesPage() {
  return <AdvertorialDevices />;
}
