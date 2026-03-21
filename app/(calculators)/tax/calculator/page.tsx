import type { Metadata } from "next";
import TaxClient from "../TaxClient";

const canonical = "https://mysmartcalculators.com/tax/calculator";
const title = "Income Tax Calculator | Federal Tax Engine v3";
const description =
  "Run the full tax v3 engine with bracket breakdown, refund outcome, lifecycle timeline, sensitivity profiles, and exports.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TaxCalculatorSubpage() {
  return (
    <TaxClient
      focusTitle="Income Tax Engine (v3)"
      focusSummary="Full federal tax estimate with bracket decomposition and filing decision workflow."
      initialValues={{ filingStatus: "single", income: 95000, withholding: 12000, customDeduction: 16100, children: 1 }}
    />
  );
}
