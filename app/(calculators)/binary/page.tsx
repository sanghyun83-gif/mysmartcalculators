import { Metadata } from "next";
import HubClient from "./HubClient";
import { BINARY_2026 } from "@/lib/calculators/binary";

export const metadata: Metadata = {
    title: BINARY_2026.metadata.title,
    description: BINARY_2026.metadata.description,
    keywords: BINARY_2026.metadata.keywords,
    alternates: {
        canonical: "https://mysmartcalculators.com/binary"
    }
};

export default function BinaryHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Binary Auditor",
                "description": BINARY_2026.metadata.description,
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
                "name": "How to Convert and Audit Binary Data",
                "description": "Step-by-step institutional guide for performing radix conversions and bitwise operations.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your source value and its current radix (Base 2, 8, 10, or 16)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Select the target conversion base or the bitwise operation (AND, OR, XOR, NOT) to be performed."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Set the bit-depth (e.g., 8-bit, 32-bit, or 64-bit) for precise overflow and wrap-around auditing."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Analyze the resulting bitmask or converted value for machine-level integration parity."
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
                        "name": "Binary Calculator",
                        "item": "https://mysmartcalculators.com/binary"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": BINARY_2026.faqs.map((faq: { question: string; answer: string }) => ({
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

