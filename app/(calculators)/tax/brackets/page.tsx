import type { Metadata } from "next";
import TaxClient from "../TaxClient";

const canonical = "https://mysmartcalculators.com/tax/brackets";
const title = "Tax Brackets Calculator | Marginal vs Effective Rate v3";
const description =
  "Inspect bracket-level taxation and compare marginal versus effective rates with overdrive evidence, lifecycle, and sensitivity views.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TaxBracketsSubpage() {
  return (
    <TaxClient
      focusTitle="Bracket Audit Mode (v3)"
      focusSummary="Analyze federal bracket slices and effective burden with scenario-based guardrails."
      initialValues={{ filingStatus: "single", income: 135000, withholding: 17000, customDeduction: 16100, children: 0 }}
    />
  );
}
