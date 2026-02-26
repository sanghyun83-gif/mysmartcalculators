import { SCIENTIFIC_2026, SCIENTIFIC_META } from "@/lib/calculators/scientific";
import dynamic from "next/dynamic";

export const metadata = {
    title: SCIENTIFIC_META.title,
    description: SCIENTIFIC_META.description,
    alternates: {
        canonical: SCIENTIFIC_META.canonical,
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function CalcScientificPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": SCIENTIFIC_META.title,
                "description": SCIENTIFIC_META.description,
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },},
            {
                "@type": "HowTo",
                "name": "How to Use Our Scientific Calculator",
                "description": "Step-by-step instructions for performing advanced mathematical operations.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Access the S-Class priority calculation interface."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Enter your mathematical expression using our neural-responsive keypad."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Utilize advanced functions (sin, cos, log) for complex auditing."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Extract high-precision results for institutional verification."
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
                        "name": "Scientific Calculator",
                        "item": SCIENTIFIC_META.canonical
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": SCIENTIFIC_2026.faqs.map(faq => ({
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

