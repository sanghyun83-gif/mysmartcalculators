import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Refinance Calculator 2026 | Refinance Savings & Break-Even Estimator",
  description: "Estimate mortgage refinance savings, break-even months, and payment changes with 2026 rate assumptions.",
  alternates: {
    canonical: "https://mysmartcalculators.com/refinance/calculator",
  },
};

export default function Page() {
  return <CalculatorClient />;
}
