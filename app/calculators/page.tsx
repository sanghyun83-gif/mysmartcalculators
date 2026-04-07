import type { Metadata } from "next";
import CalculatorDirectoryPage from "@/components/directory/CalculatorDirectoryPage";

const BASE_URL = "https://mysmartcalculators.com";

export const metadata: Metadata = {
  title: "Core Calculator Directory | MySmartCalculators",
  description: "Browse our core calculators with search and category filters.",
  alternates: { canonical: `${BASE_URL}/calculators` },
};

export default function CalculatorsPage({
  searchParams,
}: {
  searchParams?: { q?: string; category?: string; sort?: string };
}) {
  return <CalculatorDirectoryPage searchParams={searchParams} />;
}