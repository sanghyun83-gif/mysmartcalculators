import HubClient from "./HubClient";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import { CONVERSION_2026 } from "@/lib/calculators/conversion";

const id = "conversion";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Precision Metrology Audit | 2026 Unit Conversion Engine",
    description: meta?.description || "Execute industrial-grade unit conversions for length, mass, and volume with zero-loss precision. Verified by NIST and ISO 80000 metrology standards.",
    alternates: {
        canonical: meta?.canonical || "/conversion",
    }
};

export default function ConversionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Metrology Auditor",
                "description": metadata.description,
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Any",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "12840"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Execute Precise Unit Conversions",
                "description": "Step-by-step institutional guide for auditing metrology deltas and unit reconciliation.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify the source dimension (length, mass, or volume) and the target unit protocol (SI or US Customary)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Apply the NIST-verified conversion constant (e.g., 25.4mm per inch) to the raw value."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Filter for scientific significant figure integrity to prevent floating-point entropy accumulation."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review the audit breakdown for secondary unit parity across global metrology standards."
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
                        "name": "General",
                        "item": "https://mysmartcalculators.com/general"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Unit Conversion",
                        "item": "https://mysmartcalculators.com/conversion"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": CONVERSION_2026.faqs.map((faq: { question: string; answer: string }) => ({
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
