import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TaxClient from "../TaxClient";
import { TAX_SCENARIO_CLUSTERS, getTaxScenarioBySlug } from "@/lib/tax/evidence";

type PageProps = {
  params: Promise<{ scenario: string }>;
};

export async function generateStaticParams() {
  return TAX_SCENARIO_CLUSTERS.map((cluster) => ({ scenario: cluster.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scenario } = await params;
  const selected = getTaxScenarioBySlug(scenario);
  if (!selected) return { title: "Tax Scenario" };
  const canonical = `https://mysmartcalculators.com/tax/${selected.slug}`;
  const title = `${selected.title} | 2026 Federal Tax Planning`;
  const description = `${selected.description} Includes v3 bracket engine, lifecycle workflow, sensitivity testing, readiness checklist, and distribution links.`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TaxScenarioPage({ params }: PageProps) {
  const { scenario } = await params;
  const selected = getTaxScenarioBySlug(scenario);
  if (!selected) notFound();

  return (
    <TaxClient
      focusTitle={`${selected.title} (v3 Scenario)`}
      focusSummary={selected.description}
      initialValues={{ filingStatus: selected.filingStatus, income: 120000, withholding: 16000, customDeduction: 16100, children: 1 }}
    />
  );
}
