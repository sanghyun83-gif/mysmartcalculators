import type { Metadata } from "next";
import DtiClient from "./DtiClient";

export const metadata: Metadata = {
  title: "DTI Calculator 2026 | Debt-to-Income Ratio for Mortgage Approval",
  description: "Calculate front-end and back-end DTI ratios and compare against common mortgage underwriting limits.",
  alternates: {
    canonical: "https://mysmartcalculators.com/home-afford/dti",
  },
};

export default function Page() {
  return <DtiClient />;
}
