import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Home Affordability Calculator 2026 | Budget, DTI & Max Home Price",
  description: "Calculate your maximum home price using income, debts, down payment, and current mortgage assumptions.",
  alternates: {
    canonical: "https://mysmartcalculators.com/home-afford/calculator",
  },
};

export default function Page() {
  return <CalculatorClient />;
}
