import type { Metadata } from "next";
import TaxClient from "../TaxClient";

const canonical = "https://mysmartcalculators.com/tax/refund";
const title = "Tax Refund Estimator | Refund vs Amount Owed v3";
const description =
  "Compare withholding against modeled federal liability to estimate refund versus amount owed with sensitivity ranges and lifecycle actions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TaxRefundSubpage() {
  return (
    <TaxClient
      focusTitle="Refund Outcome Mode (v3)"
      focusSummary="Stress-test withholding and filing assumptions before your final return submission."
      initialValues={{ filingStatus: "single", income: 90000, withholding: 14000, customDeduction: 16100, children: 1 }}
    />
  );
}
