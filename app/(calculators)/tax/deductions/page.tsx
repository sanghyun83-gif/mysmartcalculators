import type { Metadata } from "next";
import TaxClient from "../TaxClient";

const canonical = "https://mysmartcalculators.com/tax/deductions";
const title = "Tax Deductions Planner | Standard vs Custom Deduction v3";
const description =
  "Evaluate deduction assumptions with federal bracket modeling, refund impact, and readiness checklist before filing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TaxDeductionsSubpage() {
  return (
    <TaxClient
      focusTitle="Deduction Planning Mode (v3)"
      focusSummary="Compare deduction strategy effects on liability, refund path, and quarterly planning."
      initialValues={{ filingStatus: "single", income: 110000, withholding: 15000, customDeduction: 20000, children: 1 }}
    />
  );
}
