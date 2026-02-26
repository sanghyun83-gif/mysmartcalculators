import React from "react";
import HubClient from "./HubClient";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import { DATE_2026 } from "@/lib/calculators/date";

const id = "date";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "2026 Date Calculator | Temporal Integrity Auditor",
    description: meta?.description || "Calculate clinical date intervals with 2026 precision. Audit business day deltas, ISO 8601 synchronization, and project lifecycle latency.",
    alternates: {
        canonical: meta?.canonical || "/date",
    }
};

export default function DatePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Temporal Auditor",
                "description": metadata.description,
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Precise Date Intervals",
                "description": "Step-by-step institutional guide for auditing temporal deltas and business day offsets.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your start and end dates using ISO 8601 standard notation."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Select the audit mode: absolute calendar days or project-based business days."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Apply regional holiday buffers if calculating net working days for contractual SLAs."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review the clinical breakdown of years, months, weeks, and days for temporal parity."
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
                        "name": "Date Calculator",
                        "item": "https://mysmartcalculators.com/date"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": DATE_2026.faqs.map((faq: { question: string; answer: string }) => ({
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

