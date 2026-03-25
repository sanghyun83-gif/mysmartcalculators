import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CalorieClient from "../CalorieClient";
import {
  CALORIE_SCENARIO_CLUSTERS,
  getCalorieScenarioBySlug,
} from "@/lib/calorie/evidence";

type PageProps = {
  params: Promise<{ scenario: string }>;
};

export async function generateStaticParams() {
  return CALORIE_SCENARIO_CLUSTERS.map((cluster) => ({ scenario: cluster.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scenario } = await params;
  const selected = getCalorieScenarioBySlug(scenario);
  if (!selected) return { title: "Calorie Scenario" };

  const canonical = `https://mysmartcalculators.com/calorie/${selected.slug}`;
  const title = `${selected.title} | 2026 Calorie Calculator Scenario`;
  const description = `${selected.description} Audit BMR, TDEE, and target calories with evidence-backed planning and sensitivity checks.`;

  return {
    title,
    description,
    keywords: [
      "calorie calculator",
      "tdee calculator",
      "bmr calculator",
      "calorie scenario",
      selected.slug.replace("-", " "),
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/og-main.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-main.png"] },
  };
}

export default async function CalorieScenarioPage({ params }: PageProps) {
  const { scenario } = await params;
  const selected = getCalorieScenarioBySlug(scenario);
  if (!selected) notFound();

  return (
    <CalorieClient
      focusTitle={`${selected.title} (v3 Scenario)`}
      focusSummary={selected.description}
      initialValues={{
        age: selected.age,
        gender: selected.gender,
        heightFeet: selected.heightFeet,
        heightInches: selected.heightInches,
        weightLbs: selected.weightLbs,
        activityMultiplier: selected.activityMultiplier,
        goalAdjustment: selected.goalAdjustment,
      }}
    />
  );
}
