import HubClient from "./HubClient";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SQUARE_FOOTAGE_2026 } from "@/lib/calculators/square-footage";

const id = "square-footage";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Precision Square Footage Audit | Habitable Space Metrics 2026",
    description: meta?.description || "Execute industrial-grade area audits for real estate and construction. ANSI/BOMA Z65 compliant geometric precision for residential and commercial assets.",
    alternates: {
        canonical: meta?.canonical || "/square-footage",
    }
};

export default function SquareFootagePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Dimensional Auditor",
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
                "name": "How to Conduct a Professional Area Audit",
                "description": "Step-by-step institutional guide for auditing square footage and dimensional integrity.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify the primary shape of the space (rectangle, circle, triangle, or L-shape)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Measure dimensions using ANSI/BOMA Z65 standards (exterior for GLA, interior for NIA)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Execute the geometric decomposition algorithm to handle irregular polygons or alcoves."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Reconcile the final sum against structural plans for zero-loss dimensional parity."
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
                        "name": "Square Footage Calculator",
                        "item": "https://mysmartcalculators.com/square-footage"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": SQUARE_FOOTAGE_2026.faqs.map((faq: { question: string; answer: string }) => ({
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

