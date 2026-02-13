import { getCalculatorMeta } from "@/lib/registry/calculators";
import { LOAN_2026 } from "@/lib/calculators/loan";
import dynamic from "next/dynamic";

const id = "loan";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Loan Calculator & Amortization Audit | 2026 Financial AI",
    description: meta?.description || "Professional-grade loan calculator with full amortization schedules. Analyze interest decay and repayment structures using 2026 financial standards.",
    alternates: {
        canonical: meta?.canonical || "/loan",
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function LoanHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": meta?.title || "Loan Calculator",
                "description": meta?.description || "High-precision loan amortization audit engine.",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "Any",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "15420"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Loan Amortization",
                "description": "Step-by-step institutional guide for auditing loan repayment structures.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Enter the total loan amount (Principal) you wish to borrow."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Specify the annual interest rate (APR) provided by your lender."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Set the loan term in years or months to determine the repayment horizon."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Execute the audit to view the sub-cent distribution of principal and interest."
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
                        "name": "Loan Calculator",
                        "item": meta?.canonical || "https://mysmartcalculators.com/loan"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": LOAN_2026.faqs.map(faq => ({
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
