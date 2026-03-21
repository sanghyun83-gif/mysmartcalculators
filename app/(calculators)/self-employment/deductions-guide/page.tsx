import SelfEmploymentClient from "../SelfEmploymentClient";

export const metadata = {
  title: "Self-Employment Deductions Guide | 2026 Tax Planning",
  description: "Deductions-oriented self-employment planning view built on the v3 overdrive engine.",
  alternates: {
    canonical: "https://mysmartcalculators.com/self-employment/deductions-guide",
  },
};

export default function DeductionsGuidePage() {
  return (
    <SelfEmploymentClient
      focusTitle="Deductions Planning Focus (v3 overdrive)"
      focusSummary="Use a higher-expense scenario to compare deduction leverage, reserve impact, and filing readiness."
      initialValues={{ grossIncome: 110000, businessExpenses: 36000, filingStatus: "single", quarterBufferPercent: 100 }}
    />
  );
}
