import type { Metadata } from "next";
import TaxClient from "../TaxClient";

const canonical = "https://mysmartcalculators.com/tax/filing-status";
const title = "Filing Status Tax Comparison | Single vs MFJ vs HOH v3";
const description =
  "Compare filing status effects on federal liability, effective rate, and refund/owed outcomes using the v3 tax scenario engine.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TaxFilingStatusSubpage() {
  return (
    <TaxClient
      focusTitle="Filing Status Comparison Mode (v3)"
      focusSummary="Switch filing status assumptions and evaluate liability and refund deltas under one consistent engine."
      initialValues={{ filingStatus: "marriedFilingJointly", income: 150000, withholding: 21000, customDeduction: 32200, children: 2 }}
    />
  );
}
