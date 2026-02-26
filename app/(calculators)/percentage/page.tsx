import { getCalculatorMeta } from "@/lib/registry/calculators";
import { CALCULATORS } from "@/lib/calculators/percentage";
import PercentageClient from "./PercentageClient";

const id = "percentage";
const meta = getCalculatorMeta(id);
const percentageCalc = CALCULATORS.find(c => c.id === "percentage/calculator");

export const metadata = {
    title: meta?.title,
    description: meta?.description,
    alternates: {
        canonical: meta?.canonical,
    }
};

export default function PercentagePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": meta?.title,
                "operatingSystem": "All",
                "applicationCategory": "UtilitiesApplication",
                "description": meta?.description,
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Percentages",
                "description": "Step-by-step institutional guide for solving percentage problems.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify the 'Part' value and the 'Total' (Whole) value."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Divide the Part by the Total to get a decimal value."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Multiply the decimal by 100 to convert to a percentage."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Verify the result using our 2026 high-precision math engine."
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
                        "name": "Math",
                        "item": "https://mysmartcalculators.com/math"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Percentage Calculator",
                        "item": meta?.canonical
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": percentageCalc?.faqs.map(faq => ({
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
                suppressHydrationWarning
            />
            <PercentageClient />
        </>
    );
}

