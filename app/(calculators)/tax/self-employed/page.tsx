import type { Metadata } from "next";
import TaxClient from "../TaxClient";

const canonical = "https://mysmartcalculators.com/tax/self-employed";
const title = "Self-Employment Tax Calculator | SE Tax + Deductible Half v3";
const description =
  "Estimate self-employment tax and deductible half while modeling federal income tax, refund outcome, and filing readiness.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TaxSelfEmployedSubpage() {
  return (
    <TaxClient
      focusTitle="Self-Employment Mode (v3)"
      focusSummary="Combine SE tax snapshot with full federal tax modeling and decision support blocks."
      initialValues={{ filingStatus: "single", income: 120000, withholding: 9000, customDeduction: 16100, children: 0, selfEmployedIncome: 70000 }}
    />
  );
}
