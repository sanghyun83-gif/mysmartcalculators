import type { Metadata } from "next";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "Refinance Guide 2026 | When to Refinance and Cost Rules",
  description: "Learn when refinancing makes sense, how break-even works, and what closing costs to expect in 2026.",
  alternates: {
    canonical: "https://mysmartcalculators.com/refinance/guide",
  },
};

export default function Page() {
  return <GuideClient />;
}
