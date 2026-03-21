export type SelfEmploymentEvidenceRow = {
  authority: string;
  topic: string;
  officialUrl: string;
  lastVerified: string;
  whatChanged: string;
};

export const SELF_EMPLOYMENT_EVIDENCE_MATRIX: SelfEmploymentEvidenceRow[] = [
  {
    authority: "IRS",
    topic: "Schedule SE (Form 1040)",
    officialUrl: "https://www.irs.gov/forms-pubs/about-schedule-se-form-1040",
    lastVerified: "2026-03-22",
    whatChanged: "SE tax workflow references aligned to Schedule SE filing flow.",
  },
  {
    authority: "IRS",
    topic: "Self-employed individuals tax center",
    officialUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center",
    lastVerified: "2026-03-22",
    whatChanged: "Quarterly planning and business-expense guidance language synced.",
  },
  {
    authority: "IRS",
    topic: "Estimated taxes (Form 1040-ES)",
    officialUrl: "https://www.irs.gov/forms-pubs/about-form-1040-es",
    lastVerified: "2026-03-22",
    whatChanged: "Quarter target checkpoints and readiness checklist refreshed.",
  },
  {
    authority: "SSA",
    topic: "Social Security wage base and contribution limits",
    officialUrl: "https://www.ssa.gov/oact/cola/cbb.html",
    lastVerified: "2026-03-22",
    whatChanged: "Social Security wage-cap reference cross-checked against calculator constant.",
  },
  {
    authority: "IRS",
    topic: "Publication 334 (Tax Guide for Small Business)",
    officialUrl: "https://www.irs.gov/forms-pubs/about-publication-334",
    lastVerified: "2026-03-22",
    whatChanged: "Deduction examples and records checklist wording updated.",
  },
];

export type SelfEmploymentScenarioCluster = {
  slug: string;
  title: string;
  description: string;
  initialValues: {
    grossIncome: number;
    businessExpenses: number;
    filingStatus: "single" | "married";
    quarterBufferPercent: number;
  };
};

export const SELF_EMPLOYMENT_SCENARIO_CLUSTERS: SelfEmploymentScenarioCluster[] = [
  {
    slug: "freelancer-baseline",
    title: "Freelancer Baseline Scenario",
    description: "Single-filer 1099 baseline with moderate expenses and standard quarterly reserve.",
    initialValues: {
      grossIncome: 85000,
      businessExpenses: 18000,
      filingStatus: "single",
      quarterBufferPercent: 100,
    },
  },
  {
    slug: "w2-plus-1099",
    title: "W-2 Plus 1099 Scenario",
    description: "Dual-income setup with side-contract earnings and tighter quarterly buffer discipline.",
    initialValues: {
      grossIncome: 65000,
      businessExpenses: 9000,
      filingStatus: "single",
      quarterBufferPercent: 108,
    },
  },
  {
    slug: "high-income-contractor",
    title: "High-Income Contractor Scenario",
    description: "Higher earnings profile focused on Social Security cap effects and Medicare exposure.",
    initialValues: {
      grossIncome: 240000,
      businessExpenses: 30000,
      filingStatus: "married",
      quarterBufferPercent: 115,
    },
  },
];

export function getSelfEmploymentScenarioBySlug(slug: string): SelfEmploymentScenarioCluster | undefined {
  return SELF_EMPLOYMENT_SCENARIO_CLUSTERS.find((item) => item.slug === slug);
}
