import type { Metadata } from "next";
import ResultsPage from "@/components/ResultsPage";

export const metadata: Metadata = {
  title: "Клинично доказани резултати | Delora",
  description:
    "Открийте клинично доказаните резултати от IPL фотоепилация с Delora. Видими резултати от първите сесии, потвърдени от 30+ научни изследвания.",
};

export default function ResultsRoute() {
  return <ResultsPage />;
}
