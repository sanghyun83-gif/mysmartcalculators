import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import WorkersCompClient from "./WorkersCompClient";

const id = "workers-comp";
const meta = getCalculatorMeta(id);

const FAQ_SCHEMA = [
  {
    question: "How is workers comp benefit calculated in this model?",
    answer:
      "Weekly benefit starts from average weekly wage times state replacement rate, then applies state max and min caps.",
  },
  {
    question: "What does waiting period mean?",
    answer:
      "Waiting period is the initial unpaid duration before benefits start, unless retroactive state conditions are met.",
  },
  {
    question: "What is claim lifecycle simulation?",
    answer:
      "Claim lifecycle simulation maps injury date, waiting period, retroactive trigger, MMI estimate, and filing timeline.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. This is an educational estimate and not legal advice or a guaranteed claim outcome.",
  },
] as const;

export const metadata: Metadata = {
  title: meta?.title || "Workers Comp Calculator",
  description:
    meta?.description ||
    "Calculate weekly workers comp benefits and settlement ranges with state cap scenarios.",
  keywords: [
    "workers comp calculator",
    "workers compensation calculator",
    "ttd calculator",
    "workers comp settlement estimate",
    "workers comp by state",
    "workers comp timeline calculator",
    "workers comp claim filing checklist",
  ],
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/workers-comp",
  },
  openGraph: {
    title: meta?.title,
    description: meta?.description,
    url: meta?.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Workers comp calculator state cap and settlement estimate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta?.title,
    description: meta?.description,
    images: ["/og-main.png"],
  },
};

export default function WorkersCompPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: meta?.title,
        description: meta?.description,
        url: meta?.canonical,
        inLanguage: "en-US",
        dateModified: "2026-03-21",
      },
      {
        "@type": "SoftwareApplication",
        name: "Workers Comp Calculator",
        description: meta?.description,
        applicationCategory: "LegalService",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to estimate workers compensation benefit",
        step: [
          { "@type": "HowToStep", text: "Select state, weekly wage, and injury body part." },
          { "@type": "HowToStep", text: "Set disability assumptions and duration inputs." },
          { "@type": "HowToStep", text: "Review weekly benefit, scenario table, and net settlement range." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mysmartcalculators.com/" },
          { "@type": "ListItem", position: 2, name: "Legal", item: "https://mysmartcalculators.com/legal" },
          { "@type": "ListItem", position: 3, name: "Workers Comp Calculator", item: meta?.canonical || "https://mysmartcalculators.com/workers-comp" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_SCHEMA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <WorkersCompClient />
    </>
  );
}
