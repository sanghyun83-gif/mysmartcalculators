"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, PMI_2026, formatCurrency } from "@/lib/calculators/pmi";
import {
    ArrowRight, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Shield, Home, Percent, TrendingDown
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is PMI (Private Mortgage Insurance)?",
        a: "PMI is insurance that protects the LENDER (not you) if you default on your mortgage. It's required on conventional loans when you put less than 20% down. PMI adds to your monthly payment but allows you to buy a home with a smaller down payment. Once you reach 20% equity, you can remove it."
    },
    {
        q: "How much does PMI cost?",
        a: "PMI typically costs 0.5% to 1.5% of your loan amount annually, or $50-$250 per month on a $200,000 loan. Your rate depends on: down payment size, credit score, loan term, and loan type. Higher credit scores get lower PMI rates. Example: 5% down = ~1.2% PMI rate; 10% down = ~0.8% rate."
    },
    {
        q: "When is PMI required?",
        a: "PMI is required on conventional loans when your down payment is less than 20% (LTV above 80%). It's NOT required if you: put 20% or more down, use a VA loan (no down payment, no PMI), or use an FHA loan (has its own MIP instead). Lender-paid PMI (LPMI) is an alternative where PMI is built into your rate."
    },
    {
        q: "How do I get rid of PMI?",
        a: "Request removal at 80% LTV (20% equity) with: good payment history, current on loan, no second liens. Automatic cancellation happens at 78% LTV per the Homeowners Protection Act. You can also: refinance to a new loan without PMI, or get a new appraisal to prove home appreciation reached 20% equity faster."
    },
    {
        q: "What's the difference between PMI and MIP?",
        a: "PMI = Private Mortgage Insurance (conventional loans). Can be removed at 20% equity. MIP = Mortgage Insurance Premium (FHA loans). For loans with <10% down, MIP lasts the LIFE of the loan and cannot be removed except by refinancing. For 10%+ down FHA loans, MIP drops after 11 years."
    },
    {
        q: "Can I avoid PMI with less than 20% down?",
        a: "Yes, alternatives include: 1) Lender-paid PMI (LPMI): higher interest rate, but no monthly PMI payment. 2) Piggyback loan (80/10/10): 80% first mortgage + 10% second mortgage + 10% down. 3) VA loan: 0% down, no PMI. 4) Some credit unions offer no-PMI programs for good borrowers."
    },
    {
        q: "How is PMI paid?",
        a: "PMI can be paid several ways: Monthly: Added to your mortgage payment (most common). Upfront: Single premium at closing (can be financed). Split: Partial upfront + reduced monthly. Lender-paid: Built into your interest rate. Monthly is most flexible for cancellation; upfront/LPMI may not be refundable."
    },
    {
        q: "What is the Homeowners Protection Act?",
        a: "The HPA (1998) protects borrowers by requiring: automatic PMI termination at 78% LTV (based on original value), right to request cancellation at 80% LTV with good payment history, and final termination at midpoint of loan or when balance reaches 77% (whichever is first). Applies to primary residences."
    },
    {
        q: "Does credit score affect PMI rates?",
        a: "Yes, significantly. High credit scores (760+) may pay 0.5% annually; low scores (620-680) may pay 1.5% or more? THREE times as much. On a $300,000 loan, that's $125/month vs $375/month. Improving your credit score before buying can save thousands in PMI over the loan's life."
    },
    {
        q: "Is PMI tax deductible?",
        a: "PMI tax deductibility has been on-again, off-again. It was deductible through 2021 for many borrowers. Check current IRS rules, as this provision requires annual Congressional renewal. Even when available, the deduction phases out at higher income levels. Consult a tax professional for your situation."
    },
    {
        q: "How long do I pay PMI?",
        a: "On average, 5-10 years until reaching 20% equity. Factors: down payment size, home appreciation rate, how fast you pay principal. With a 10% down payment and 3% annual appreciation, you might reach 80% LTV in 4-5 years. With 3% down and slow appreciation, it could take 8+ years."
    },
    {
        q: "Can I request a new appraisal to remove PMI?",
        a: "Yes! If your home has appreciated significantly, you can pay for a new appraisal to prove you have 20% equity. Requirements vary by lender but typically need: 2+ years since closing, good payment history, and appraisal showing new value. This can remove PMI years earlier than the original amortization schedule."
    },
    {
        q: "What is lender-paid PMI (LPMI)?",
        a: "With LPMI, the lender covers PMI but charges you a higher interest rate for the life of the loan. Pros: No monthly PMI payment, potentially higher tax deduction (interest vs PMI). Cons: Higher rate forever (even after 20% equity), costs more long-term. Best for those who'll sell/refinance within 5-7 years."
    },
    {
        q: "Does making extra payments remove PMI faster?",
        a: "Yes! Extra principal payments increase your equity faster, bringing you to 80% LTV sooner. However, you must REQUEST cancellation once you hit 80%? it won't happen automatically until 78%. Track your loan balance and contact your servicer when you reach 80%. Extra payments are one of the fastest ways to eliminate PMI."
    },
    {
        q: "What if my lender won't remove PMI?",
        a: "If you meet the requirements and your lender won't remove PMI: 1) Send written request (keep copies). 2) Cite the Homeowners Protection Act. 3) File a complaint with CFPB. 4) Consider refinancing with a new lender. Servicers sometimes delay for profit? know your rights and push back."
    },
];

// FAQ Component
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                Frequently Asked Questions
            </h2>
            <div className="space-y-3">
                {FAQ_DATA.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/30 transition-colors"
                        >
                            <span className="font-semibold text-white pr-4">{faq.q}</span>
                            {openIndex === idx ? (
                                <ChevronUp className="w-5 h-5 text-teal-400 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                        </button>
                        {openIndex === idx && (
                            <div className="px-4 pb-4 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function PMIHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-teal-300 font-semibold">Mortgage Insurance Calculator</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        PMI <span className="text-teal-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate your private mortgage insurance cost and see when you can remove it.
                        Our free {SITE.year} calculator shows monthly PMI and removal timeline.
                    </p>

                    <Link
                        href="/pmi/calculator"
                        className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-teal-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate PMI
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-teal-400">{formatCurrency(PMI_2026.statistics.avgPMI)}/mo</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Monthly PMI</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">20%</p>
                            <p className="text-xs text-slate-400 mt-1">Removal Threshold</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{PMI_2026.statistics.avgRemovalTime} yrs</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Time to Remove</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{PMI_2026.statistics.homesWithPMI}%</p>
                            <p className="text-xs text-slate-400 mt-1">Mortgages with PMI</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding PMI */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Private Mortgage Insurance
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">Private Mortgage Insurance (PMI)</strong> is insurance required by lenders when you make a down payment of less than 20% on a conventional loan. While PMI protects the lender? not you? if you default, it enables millions of Americans to become homeowners sooner.
                    </p>
                    <p>
                        According to the <strong className="text-white">Mortgage Bankers Association</strong>, about 22% of all mortgages carry PMI. The <strong className="text-white">Consumer Financial Protection Bureau (CFPB)</strong> notes that PMI costs typically range from 0.5% to 1.5% of the loan amount annually, adding $50-$300 to monthly payments.
                    </p>
                    <p>
                        The good news: The <strong className="text-white">Homeowners Protection Act (HPA)</strong> gives you the right to cancel PMI once you reach 20% equity, and requires automatic termination at 78% LTV. Strategic extra payments or home appreciation can help you reach this threshold years earlier.
                    </p>
                </div>
            </section>

            {/* PMI Rates by LTV */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        PMI Rates by Down Payment
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4">
                        {PMI_2026.rates.map((tier) => (
                            <div key={tier.description} className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 text-center hover:border-teal-500/30 transition-colors">
                                <p className="text-2xl font-black text-teal-400">{tier.rate}%</p>
                                <p className="text-white font-bold mt-2">{tier.description}</p>
                                <p className="text-xs text-slate-400 mt-1">Annual rate</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-teal-400 flex-shrink-0" />
                        <p className="text-teal-300 text-sm">
                            <strong>Credit Score Impact:</strong> Higher credit scores (760+) can reduce these rates by 25-50%. Low scores may pay 2x or more.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Remove PMI */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    How to Remove PMI
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Request at 80% LTV</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li> Contact your servicer in writing</li>
                            <li> Must have good payment history</li>
                            <li> Current on loan payments</li>
                            <li> May require new appraisal</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-teal-500/30 rounded-xl p-6">
                        <TrendingDown className="w-8 h-8 text-teal-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Automatic at 78% LTV</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li> Happens automatically per HPA</li>
                            <li> Based on original amortization</li>
                            <li> Must be current on payments</li>
                            <li> No action needed from you</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free PMI Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-teal-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-teal-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
                                            Start Now <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Citations */}
            <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-700/50">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Data Sources & Citations
                </h3>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li> Consumer Financial Protection Bureau. "What Is Private Mortgage Insurance?" CFPB, 2024.</li>
                    <li> Federal Reserve. "Homeowners Protection Act (12 U.S.C. §4901)." FRB Regulations.</li>
                    <li> Mortgage Bankers Association. "Quarterly Mortgage Market Statistics." MBA, 2026.</li>
                    <li> Urban Institute. "Housing Finance at a Glance: PMI Market Trends." Urban Institute, 2024.</li>
                    <li> Fannie Mae. "Selling Guide: Private Mortgage Insurance Requirements." Fannie Mae, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Calculate Your PMI Cost
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    See your monthly PMI and timeline to removal.
                </p>
                <Link
                    href="/pmi/calculator"
                    className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-teal-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate PMI
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="pmi" count={5} />
            </section>
        </div>
    );
}
