import { getCalculatorMeta } from "@/lib/registry/calculators";
import SelfEmploymentClient from "../SelfEmploymentClient";

const id = "self-employment";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: `SE Tax Calculator | ${meta?.title || "Self Employment Tax Calculator"}`,
  description: "Run the v3 self-employment tax engine with evidence matrix, lifecycle simulator, sensitivity lab, and export tools.",
  alternates: {
    canonical: "https://mysmartcalculators.com/self-employment/se-tax-calculator",
  },
};

export default function SETaxCalculatorPage() {
  return (
    <SelfEmploymentClient
      focusTitle="SE Tax Calculator Focus (v3 overdrive)"
      focusSummary="Primary execution route for Schedule SE estimate, quarterly reserve planning, and export/share workflow."
      initialValues={{ grossIncome: 95000, businessExpenses: 20000, filingStatus: "single", quarterBufferPercent: 102 }}
    />
  );
}
