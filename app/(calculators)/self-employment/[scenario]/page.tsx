import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SelfEmploymentClient from "../SelfEmploymentClient";
import {
  SELF_EMPLOYMENT_SCENARIO_CLUSTERS,
  getSelfEmploymentScenarioBySlug,
} from "@/lib/self-employment/evidence";

type PageProps = {
  params: Promise<{ scenario: string }>;
};

export async function generateStaticParams() {
  return SELF_EMPLOYMENT_SCENARIO_CLUSTERS.map((cluster) => ({ scenario: cluster.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scenario } = await params;
  const selected = getSelfEmploymentScenarioBySlug(scenario);
  if (!selected) return { title: "Self-Employment Scenario" };

  const canonical = `https://mysmartcalculators.com/self-employment/${selected.slug}`;
  const title = `${selected.title} Self-Employment Tax Scenario | 2026 Planner`;
  const description = `${selected.description} Model SE tax, deductible half, quarterly estimates, and scenario-driven tax planning for 1099 income.`;

  return {
    title,
    description,
    keywords: [
      "self-employment tax calculator",
      "1099 tax scenario",
      "schedule se calculator",
      "quarterly estimated tax",
      "freelancer tax planning",
      selected.slug.replaceAll("-", " "),
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/og-main.png", width: 1200, height: 630, alt: `${selected.title} Self-Employment Tax Scenario` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-main.png"] },
  };
}

export default async function SelfEmploymentScenarioPage({ params }: PageProps) {
  const { scenario } = await params;
  const selected = getSelfEmploymentScenarioBySlug(scenario);
  if (!selected) notFound();

  return (
    <SelfEmploymentClient
      focusTitle={`${selected.title} (v3 Scenario)`}
      focusSummary={selected.description}
      initialValues={selected.initialValues}
    />
  );
}
