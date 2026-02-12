import { getCalculatorMeta } from "@/lib/registry/calculators";
import { PREGNANCY_2026 } from "@/lib/calculators/pregnancy";
import dynamic from "next/dynamic";

const id = "pregnancy";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "2026 Pregnancy Due Date Calculator | S-Class Maternal Audit",
    description: meta?.description || "High-precision pregnancy due date calculator based on 2026 medical standards. Track milestones, calculate EDD via LMP or IVF, and explore expert prenatal guidance.",
    alternates: {
        canonical: meta?.canonical || "/pregnancy",
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function PregnancyHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": meta?.title || "Pregnancy Calculator",
                "description": meta?.description || "Precision pregnancy tracking and EDD calculation engine.",
                "applicationCategory": "HealthApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": PREGNANCY_2026.faqs.map(faq => ({
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
