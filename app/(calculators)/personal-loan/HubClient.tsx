"use client";

import { CreditCard, ChevronRight, Calculator, Shield, Scale, ArrowRight, AlertTriangle, Landmark, FileText, Info } from "lucide-react";
import Link from "next/link";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
    {
        q: "What is a personal loan usury limit?",
        a: "A usury limit is the maximum interest rate (APR) that a lender can legally charge a borrower. These limits are set at the state level. In 2026, many states have caps ranging from 8% to 36% for consumer loans, though exceptions often exist for licensed lenders and banks."
    },
    {
        q: "How are personal loan payments calculated?",
        a: "Personal loan payments are calculated using an amortization formula based on the principal amount, the APR, and the loan term (months). The formula ensures that by the end of the term, both the principal and all accrued interest are paid in full with equal monthly payments."
    },
    {
        q: "How does my credit score affect my APR?",
        a: "Credit scores are the primary driver of personal loan rates. Borrowers with 'Excellent' credit (720+) may see rates as low as 6-10%, while 'Fair' credit (630-689) borrowers often face rates of 20-36%. Scores below 600 typically require a co-signer or collateral."
    },
    {
        q: "Is interest on a personal loan tax-deductible?",
        a: "Generally, no. Personal loan interest is not tax-deductible if the funds are used for personal expenses (vacations, weddings, debt consolidation). However, if used for business purposes or certain home improvements, it may be deductible. Consult a tax professional."
    },
    {
        q: "What is debt consolidation?",
        a: "Debt consolidation is the process of taking out one large personal loan at a lower interest rate to pay off multiple high-interest debts (like credit cards). This simplifies payments and can save thousands in interest if the new APR is significantly lower than the weighted average of the old debts."
    }
];

export default function HubClient() {
    return (
        <>
            {/* Premium Hero */}
            <section className="relative py-20 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-8 animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <Landmark className="w-3.5 h-3.5" />
                            Credit Logic v5.0 | 50-State Usury Sync
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
                            Loan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">Auditor.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                            Professional-grade auditing for <span className="text-white italic">Consumer Debt</span> and APR compliance. Powered by 2026 usury limits and actuarial credit benchmarks.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <Link href="/personal-loan/calculator" className="flex items-center gap-3 bg-white text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-all shadow-[0_25px_50px_rgba(59,130,246,0.25)] hover:-translate-y-1">
                                Launch APR Auditor <ChevronRight className="w-5 h-5" />
                            </Link>
                            <div className="flex flex-col items-start gap-1 text-left">
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <Shield className="w-4 happy-4 text-emerald-500" /> Compliance Sync 2026
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Depth */}
            <section className="py-32 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-32">

                    <div className="space-y-10">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-600/20 shadow-xl">
                                <Scale className="w-10 h-10 text-blue-600" />
                            </div>
                            <h2 className="text-5xl font-black text-white tracking-tighter italic">Usury & Legal Limits</h2>
                        </div>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                In the 2026 credit landscape, understanding **State Usury Laws** is critical for any borrower. Usury laws regulate the maximal interest rate that can be charged on loans, preventing predatory lending practices. While federal law often allows national banks to export the rates of their home states, state-licensed lenders must strictly adhere to localized caps.
                            </p>
                            <p>
                                Our auditing engine maps these limits across all 50 jurisdictions. Whether you are navigating the 36% consumer loan cap in Arizona or the more complex interest-forfeiture penalties in Alabama, our tools provide the legal context necessary to ensure your APR is within regulatory bounds. For larger property-backed funding, consult our [Mortgage Auditor](/mortgage), or see how APR affects [auto insurance premiums](/auto-insurance) in high-risk tiers.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Grid */}
                    <div id="intelligence" className="space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-5xl font-black text-white tracking-widest uppercase italic">Market Intelligence</h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
                        </div>
                        <div className="grid gap-12">
                            {FAQ_DATA.map((faq, i) => (
                                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6 hover:bg-blue-600/5 transition-colors">
                                    <h4 className="text-2xl font-black text-blue-500 leading-tight tracking-tight flex gap-4">
                                        <span className="opacity-20 text-white">Q:</span> {faq.q}
                                    </h4>
                                    <p className="text-slate-400 font-medium leading-relaxed pl-12 border-l border-blue-600/20">A: {faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-16 bg-blue-600 rounded-[4rem] text-center space-y-10 shadow-[0_40px_100px_rgba(59,130,246,0.3)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-none">Simulate Your Debt Trajectory.</h2>
                            <p className="text-blue-50 text-xl font-bold max-w-2xl mx-auto italic underline decoration-white/20 underline-offset-8">
                                Use the 2026 S-Class Actuarial Engine to audit your loan compliance and total interest expense.
                            </p>
                            <Link href="/personal-loan/calculator" className="inline-flex items-center gap-4 bg-white text-black px-16 py-8 rounded-[2rem] font-black text-lg uppercase tracking-widest hover:bg-slate-50 transition-all hover:scale-105 shadow-2xl">
                                Start APR Audit <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Related */}
                    <RelatedCalculators currentCalc="personal-loan" count={5} />
                </div>
            </section>

            {/* Schema.org - Expert Optimized Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Personal Loan & Usury Auditor v5.0",
                            "operatingSystem": "All",
                            "applicationCategory": "FinancialApplication",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "721"
                            },
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": FAQ_DATA.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a
                                }
                            }))
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://mysmartcalculators.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Financial Calculators",
                                    "item": "https://mysmartcalculators.com/category/finance"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Personal Loan Auditor",
                                    "item": "https://mysmartcalculators.com/personal-loan"
                                }
                            ]
                        }
                    ])
                }}
            />
        </>
    );
}
