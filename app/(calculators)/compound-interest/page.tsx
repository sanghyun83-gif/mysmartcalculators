import { getCalculatorMeta } from "@/lib/registry/calculators";
import { COMPOUND_2026 } from "@/lib/calculators/compound-interest";
import dynamic from "next/dynamic";

const id = "compound-interest";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "2026 Compound Interest Calculator | Wealth Growth Auditor",
    description: meta?.description || "Calculate exponential wealth growth with 2026 precision. Audit annual returns, inflation impact, and reinvestment cycles for long-term financial sovereignty.",
    alternates: {
        canonical: meta?.canonical || "/compound-interest",
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function CompoundInterestPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Compound Interest Auditor",
                "description": metadata.description,
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Compound Interest Growth",
                "description": "Step-by-step institutional guide for auditing investment growth and wealth accretion cycles.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your initial principal investment and expected annual contribution amount."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Select the compounding frequency (daily, monthly, or annually) and expected interest rate benchmark."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input the investment duration to visualize the exponential growth curve and wealth inflection point."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review the final audit result, accounting for inflation deltas and real yield projections."
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
                        "name": "Finance",
                        "item": "https://mysmartcalculators.com/finance"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Compound Interest Calculator",
                        "item": "https://mysmartcalculators.com/compound-interest"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": COMPOUND_2026.faqs.map((faq: { question: string; answer: string }) => ({
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

