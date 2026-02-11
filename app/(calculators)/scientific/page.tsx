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
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
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
