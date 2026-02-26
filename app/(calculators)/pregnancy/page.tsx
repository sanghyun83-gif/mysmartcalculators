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
                "name": "S-Class Pregnancy Auditor",
                "description": meta?.description || "High-precision pregnancy tracking and EDD calculation engine based on 2026 medical standards.",
                "applicationCategory": "HealthApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Your Pregnancy Due Date",
                "description": "Step-by-step institutional guide for auditing your Estimated Due Date (EDD) and gestational milestones.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify the first day of your Last Menstrual Period (LMP) or your conception date."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input the date into the S-Class auditor to execute Naegele's rule with localized cycle adjustment."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review your EDD and analyze the three-trimester biological roadmap."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Sync your results with professional prenatal protocols for optimal maternal health mapping."
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
                        "name": "Pregnancy Calculator",
                        "item": meta?.canonical || "https://mysmartcalculators.com/pregnancy"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": PREGNANCY_2026.faqs.map((faq: { question: string; answer: string }) => ({
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

