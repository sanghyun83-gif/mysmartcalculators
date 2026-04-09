import type { Metadata } from "next";
import ClosingCostsClient from "./ClosingCostsClient";

export const metadata: Metadata = {
  title: "Closing Costs Guide 2026 | Home Buying Cost Breakdown",
  description: "Estimate buyer closing costs and understand lender fees, prepaid items, and escrow requirements.",
  alternates: {
    canonical: "https://mysmartcalculators.com/home-afford/closing-costs",
  },
};

export default function Page() {
  return <ClosingCostsClient />;
}
