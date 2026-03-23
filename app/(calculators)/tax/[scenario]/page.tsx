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
  const title = `${selected.title} Tax Scenario | 2026 Federal Income Tax Planner`;
  const description = `${selected.description} Compare bracket outcomes, effective rate, refund/owed impact, and filing workflow using 2026 federal assumptions.`;
  return {
    title,
    description,
    keywords: [
      "tax calculator 2026",
      "federal tax scenario",
      "tax planning calculator",
      "effective tax rate",
      "tax bracket planning",
      selected.filingStatus.toLowerCase(),
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/og-main.png", width: 1200, height: 630, alt: `${selected.title} Tax Scenario` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-main.png"] },
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
