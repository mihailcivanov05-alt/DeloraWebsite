import type { Metadata } from "next";
import GettingStartedPage from "@/components/GettingStartedPage";

export const metadata: Metadata = {
  title: "Как да започнете | Delora",
  description:
    "Научете как да започнете с Delora IPL — от подготовка на кожата до първото третиране и поддръжка на резултатите у дома.",
  robots: { index: true, follow: true },
};

export default function GettingStartedRoute() {
  return <GettingStartedPage />;
}
