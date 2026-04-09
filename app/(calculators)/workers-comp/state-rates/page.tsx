import type { Metadata } from "next";
import Script from "next/script";
import { STATE_WC_DATA } from "@/lib/calculators/workers-comp";
import StateRatesClient from "./StateRatesClient";

const canonical = "https://mysmartcalculators.com/workers-comp/state-rates";

export const metadata: Metadata = {
  title: "2026 Workers Comp State Rates | Max Weekly TTD Benefits (50 States + DC)",
  description:
    "Compare 2026 workers compensation maximum and minimum weekly TTD benefit rates by state. Includes waiting period and replacement-rate notes across all jurisdictions.",
  keywords: [
    "workers comp state rates",
    "workers comp max weekly benefit",
    "ttd rates by state",
    "workers compensation by state",
    "2026 workers comp rates",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    title: "2026 Workers Comp State Rates (50 States + DC)",
    description: "Maximum and minimum weekly workers comp benefits by state, with TTD rate and waiting period.",
    url: canonical,
    type: "website",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "Workers Comp State Rates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Workers Comp State Rates",
    description: "Compare max weekly workers comp benefits across all states.",
    images: ["/og-main.png"],
  },
};

export default function WorkersCompStateRatesPage() {
  const topStates = Object.entries(STATE_WC_DATA)
    .map(([code, row]) => ({ code, name: row.name, maxWeeklyBenefit: row.maxWeeklyBenefit }))
    .sort((a, b) => b.maxWeeklyBenefit - a.maxWeeklyBenefit)
    .slice(0, 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "2026 Workers Comp State Rates",
        description: "Maximum weekly workers compensation TTD benefits by state for 2026.",
        url: canonical,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mysmartcalculators.com/" },
          { "@type": "ListItem", position: 2, name: "Workers Comp", item: "https://mysmartcalculators.com/workers-comp" },
          { "@type": "ListItem", position: 3, name: "State Rates", item: canonical },
        ],
      },
      {
        "@type": "ItemList",
        name: "Top Workers Comp Maximum Weekly Benefits",
        itemListElement: topStates.map((row, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${row.name} (${row.code}) - $${row.maxWeeklyBenefit}`,
          url: `https://mysmartcalculators.com/workers-comp/${row.code.toLowerCase()}`,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="workers-comp-state-rates-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StateRatesClient />
    </>
  );
}
