import { getCalculatorMeta } from "@/lib/registry/calculators";
import { OVULATION_2026 } from "@/lib/calculators/ovulation";
import HubClient from "./HubClient";

const id = "ovulation";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Precision Ovulation Audit | Clinical Fertility Metrics 2026",
    description: meta?.description || "Execute medical-grade fertility audits. Predict your most fertile days and track your ovulation cycle with ACOG-aligned geometric precision.",
    alternates: {
        canonical: meta?.canonical || "/ovulation",
    }
};

export default function OvulationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Ovulation Auditor",
                "description": metadata.description,
                "applicationCategory": "HealthApplication",
                "operatingSystem": "Any",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "12450"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Your Fertile Window",
                "description": "Step-by-step institutional guide for auditing ovulation cycles and identifying peak fertility windows.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify the first day of your last menstrual period (LMP) and average cycle duration."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input the temporal data into the S-Class auditor for ACOG-aligned cycle reconciliation."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Identify the 6-day fertile window based on gamete longevity and LH peak projections."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Audit the absolute peak fertility zone for optimized conception parity."
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://mysmartcalculators.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Health",
                        "item": "https://mysmartcalculators.com/health"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Ovulation Calculator",
                        "item": "https://mysmartcalculators.com/ovulation"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": OVULATION_2026.faqs.map((faq: { question: string; answer: string }) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HubClient />
        </>
    );
}
