export type CalorieEvidenceRow = {
  authority: string;
  topic: string;
  officialUrl: string;
  lastVerified: string;
  whatChanged: string;
};

export const CALORIE_EVIDENCE_MATRIX: CalorieEvidenceRow[] = [
  {
    authority: "USDA",
    topic: "Dietary Guidelines and intake planning",
    officialUrl: "https://www.dietaryguidelines.gov/",
    lastVerified: "2026-03-25",
    whatChanged: "Guideline cross-check for intake planning language and constraints.",
  },
  {
    authority: "CDC",
    topic: "Healthy weight strategy and behavior signals",
    officialUrl: "https://www.cdc.gov/healthyweight/",
    lastVerified: "2026-03-25",
    whatChanged: "Behavioral interpretation notes refreshed for trend-based decisions.",
  },
  {
    authority: "NIH",
    topic: "Body weight and metabolic context",
    officialUrl: "https://www.nih.gov/",
    lastVerified: "2026-03-25",
    whatChanged: "Reference set aligned with current metabolic context guidance.",
  },
  {
    authority: "WHO",
    topic: "Diet and chronic disease prevention framing",
    officialUrl: "https://www.who.int/health-topics/diet",
    lastVerified: "2026-03-25",
    whatChanged: "Prevention framing added for long-horizon planning context.",
  },
];

export type CalorieScenarioCluster = {
  slug: string;
  title: string;
  description: string;
  age: number;
  gender: "male" | "female";
  heightFeet: number;
  heightInches: number;
  weightLbs: number;
  activityMultiplier: number;
  goalAdjustment: number;
};

export const CALORIE_SCENARIO_CLUSTERS: CalorieScenarioCluster[] = [
  {
    slug: "fat-loss",
    title: "Fat Loss Scenario",
    description: "Moderate deficit planning with adherence-first weekly trend checks.",
    age: 34,
    gender: "female",
    heightFeet: 5,
    heightInches: 6,
    weightLbs: 172,
    activityMultiplier: 1.375,
    goalAdjustment: -500,
  },
  {
    slug: "maintenance-reset",
    title: "Maintenance Reset Scenario",
    description: "Maintenance target to stabilize trend and diagnose intake or activity drift.",
    age: 37,
    gender: "male",
    heightFeet: 5,
    heightInches: 11,
    weightLbs: 186,
    activityMultiplier: 1.55,
    goalAdjustment: 0,
  },
  {
    slug: "lean-gain",
    title: "Lean Gain Scenario",
    description: "Controlled surplus strategy for performance-focused muscle gain cycles.",
    age: 29,
    gender: "male",
    heightFeet: 6,
    heightInches: 1,
    weightLbs: 174,
    activityMultiplier: 1.725,
    goalAdjustment: 250,
  },
];

export function getCalorieScenarioBySlug(slug: string): CalorieScenarioCluster | undefined {
  return CALORIE_SCENARIO_CLUSTERS.find((item) => item.slug === slug);
}
