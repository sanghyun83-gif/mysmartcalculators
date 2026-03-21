export type TaxEvidenceRow = {
  authority: string;
  topic: string;
  officialUrl: string;
  lastVerified: string;
  whatChanged: string;
};

export const TAX_EVIDENCE_MATRIX: TaxEvidenceRow[] = [
  {
    authority: "IRS",
    topic: "Federal income tax rates and inflation adjustments",
    officialUrl: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026",
    lastVerified: "2026-03-21",
    whatChanged: "2026 bracket thresholds and standard deduction levels synced to model constants.",
  },
  {
    authority: "IRS",
    topic: "Publication 17 filing and taxable income rules",
    officialUrl: "https://www.irs.gov/forms-pubs/about-publication-17",
    lastVerified: "2026-03-21",
    whatChanged: "Filing-status interpretation and taxable-income flow aligned with Pub. 17 baseline.",
  },
  {
    authority: "IRS",
    topic: "Child Tax Credit guidance",
    officialUrl: "https://www.irs.gov/credits-deductions/individuals/child-tax-credit",
    lastVerified: "2026-03-21",
    whatChanged: "Credit cap assumptions checked and refundable/non-refundable handling notes updated.",
  },
  {
    authority: "IRS",
    topic: "Self-employment tax (Schedule SE)",
    officialUrl: "https://www.irs.gov/forms-pubs/about-schedule-se-form-1040",
    lastVerified: "2026-03-21",
    whatChanged: "Self-employment tax module retained at 15.3% baseline with wage-cap checks.",
  },
  {
    authority: "IRS",
    topic: "Estimated tax guidance (Form 1040-ES)",
    officialUrl: "https://www.irs.gov/forms-pubs/about-form-1040-es",
    lastVerified: "2026-03-21",
    whatChanged: "Quarterly planning references and readiness checklist language refreshed.",
  },
];

export type TaxScenarioCluster = {
  slug: string;
  title: string;
  filingStatus: "single" | "marriedFilingJointly" | "headOfHousehold";
  description: string;
};

export const TAX_SCENARIO_CLUSTERS: TaxScenarioCluster[] = [
  {
    slug: "single",
    title: "Single Filer Tax Scenario",
    filingStatus: "single",
    description: "Single filer baseline with standard deduction and bracket breakdown.",
  },
  {
    slug: "married-filing-jointly",
    title: "Married Filing Jointly Scenario",
    filingStatus: "marriedFilingJointly",
    description: "Joint return scenario with MFJ thresholds and comparative effective rate.",
  },
  {
    slug: "head-of-household",
    title: "Head of Household Scenario",
    filingStatus: "headOfHousehold",
    description: "HOH filing profile with dependent-oriented bracket treatment.",
  },
];

export function getTaxScenarioBySlug(slug: string): TaxScenarioCluster | undefined {
  return TAX_SCENARIO_CLUSTERS.find((item) => item.slug === slug);
}
