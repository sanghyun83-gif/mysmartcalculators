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
  const title = `${selected.title} | 2026 Self-Employment Tax Planning`;
  const description = `${selected.description} Includes v3 evidence matrix, lifecycle simulator, sensitivity lab, readiness pack, and distribution links.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
    twitter: { card: "summary_large_image", title, description },
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
