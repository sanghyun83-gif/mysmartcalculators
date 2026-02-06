"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, DTI_2026, formatCurrency } from "@/lib/calculators/dti";
import {
    ArrowRight, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Percent, TrendingDown, Home, CreditCard, Car
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is DTI (Debt-to-Income Ratio)?",
        a: "DTI is the percentage of your gross monthly income that goes toward paying debts. It's calculated by dividing your total monthly debt payments by your gross monthly income. Lenders use DTI to assess your ability to manage payments and repay borrowed money. There are two types: front-end (housing only) and back-end (all debts)."
    },
    {
        q: "What is a good DTI ratio?",
        a: "For mortgage approval: Under 36% is considered good, with housing costs ideally under 28% (the '28/36 rule'). Under 20% is excellent and gives you the best loan options. 36-43% is acceptable for Qualified Mortgages (QM). Over 43% makes mortgage approval difficult, and over 50% is considered very high risk."
    },
    {
        q: "What is the 43% DTI rule?",
        a: "The 43% rule comes from the Consumer Financial Protection Bureau's (CFPB) Qualified Mortgage (QM) standards. QM loans have certain protections for both lenders and borrowers. To qualify for most QM loans, your DTI cannot exceed 43%. Some government-backed loans (FHA, VA) may allow higher DTIs with compensating factors."
    },
    {
        q: "What debts are included in DTI calculation?",
        a: "DTI includes: mortgage/rent, car loans, student loans, credit card minimum payments, personal loans, child support, alimony, and any other recurring debt obligations. It does NOT include: utilities, insurance (unless escrowed with mortgage), groceries, phone bills, subscriptions, or other living expenses."
    },
    {
        q: "What is front-end vs back-end DTI?",
        a: "Front-end DTI (housing ratio) includes only housing costs: mortgage principal, interest, taxes, insurance, and HOA fees divided by gross income. Ideal: under 28%. Back-end DTI (total DTI) includes housing PLUS all other debts. This is the number lenders focus on most. Ideal: under 36%."
    },
    {
        q: "How do I calculate my DTI?",
        a: "DTI = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100. Example: If you earn $6,000/month gross and have $1,800 in monthly debt payments (mortgage, car, student loans), your DTI is: $1,800 ÷ $6,000 = 30%. Use gross (pre-tax) income, not take-home pay."
    },
    {
        q: "How can I lower my DTI?",
        a: "Strategies to lower DTI: 1) Pay down existing debts, especially high-balance revolving credit, 2) Increase your income (raise, second job, side gig), 3) Avoid taking on new debt, 4) Refinance to lower payments, 5) Pay off small debts to eliminate payments entirely. Even small reductions can help loan approval."
    },
    {
        q: "Does DTI affect my credit score?",
        a: "DTI itself is NOT part of your credit score calculation?�credit bureaus don't know your income. However, factors related to high DTI (high credit utilization, many accounts with balances) do affect your score. Lenders look at both DTI (income-based) and credit score (history-based) separately."
    },
    {
        q: "What DTI do I need for a mortgage?",
        a: "Conventional loans: Typically max 43-45% DTI. FHA loans: May allow up to 50% with strong compensating factors (good credit, savings). VA loans: No official DTI limit, but 41% is the benchmark; higher allowed with residual income. USDA loans: Typically 41% max. Jumbo loans: Usually stricter, often 36-40% max."
    },
    {
        q: "Can I get a mortgage with high DTI?",
        a: "Yes, but it's harder and may require: higher credit score (720+), larger down payment (20%+), significant cash reserves (6+ months), strong employment history, or government-backed loans (FHA/VA). Some lenders offer 'non-QM' loans above 43% but with higher rates and stricter requirements."
    },
    {
        q: "Should I use gross or net income for DTI?",
        a: "Always use GROSS income (before taxes and deductions). This is the standard for all lenders. Gross income includes: salary, wages, bonuses, commissions, self-employment income, alimony received, Social Security, disability, investment income, and rental income. Documentation required."
    },
    {
        q: "How does student loan debt affect DTI?",
        a: "Student loans are counted in DTI at their actual monthly payment. For income-driven repayment (IDR) plans, lenders may use the IDR payment or calculate 0.5-1% of total balance as the payment. Loans in deferment or forbearance may still be counted. High student debt is a major DTI contributor for many borrowers."
    },
    {
        q: "What is the 28/36 rule?",
        a: "The 28/36 rule is a guideline suggesting: your housing costs should not exceed 28% of gross income (front-end DTI), and total debt payments should not exceed 36% of gross income (back-end DTI). While not a hard rule, staying within these limits generally means you're in good financial shape for a mortgage."
    },
    {
        q: "Do authorized user accounts affect DTI?",
        a: "Only if you're legally responsible for payment. Authorized user accounts appear on your credit report but typically aren't included in DTI unless you're a joint account holder. However, if you're making payments on an authorized user account, that payment may be considered. Clarify with your lender."
    },
    {
        q: "How often should I check my DTI?",
        a: "Check your DTI: 1) Before applying for any loan or credit, 2) Annually as part of financial health check, 3) After major income changes (new job, raise, job loss), 4) After paying off or taking on new debt. Knowing your DTI helps you understand loan options and make informed financial decisions."
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
                                <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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

export default function DTIHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                        <Percent className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300 font-semibold">Mortgage Qualification Tool</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        DTI <span className="text-cyan-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate your Debt-to-Income ratio instantly and check if you qualify for a mortgage.
                        Our free {SITE.year} calculator uses CFPB Qualified Mortgage standards.
                    </p>

                    <Link
                        href="/dti/calculator"
                        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate DTI
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">&lt;20%</p>
                            <p className="text-xs text-slate-400 mt-1">Excellent DTI</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-cyan-400">{DTI_2026.statistics.idealDTI}%</p>
                            <p className="text-xs text-slate-400 mt-1">Ideal Target</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-yellow-400">{DTI_2026.qmLimit}%</p>
                            <p className="text-xs text-slate-400 mt-1">QM Limit</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{DTI_2026.statistics.avgDTI}%</p>
                            <p className="text-xs text-slate-400 mt-1">Average American</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is DTI */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    What is Debt-to-Income Ratio?
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        Your <strong className="text-white">Debt-to-Income (DTI) ratio</strong> is one of the most important numbers lenders look at when you apply for a mortgage or loan. It represents the percentage of your gross monthly income that goes toward paying debts.
                    </p>
                    <p>
                        The <strong className="text-white">Consumer Financial Protection Bureau (CFPB)</strong> established the 43% DTI limit for Qualified Mortgages (QM)?�loans that meet certain safety standards. According to CFPB data, borrowers with DTIs above 43% are significantly more likely to struggle with payments. The Federal Reserve reports that the average American has a DTI around 36%.
                    </p>
                    <p>
                        Lenders view DTI as a measure of your financial health and ability to take on additional debt. A lower DTI not only makes loan approval easier but often results in better interest rates, lower fees, and more favorable terms. The <strong className="text-white">28/36 rule</strong>?�keeping housing costs under 28% and total DTI under 36%?�remains the gold standard for financial health.
                    </p>
                </div>
            </section>

            {/* DTI Ranges */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        DTI Ranges & What They Mean
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-green-500/30 text-center">
                            <p className="text-2xl font-black text-green-400">&lt;20%</p>
                            <p className="text-white font-bold mt-2">Excellent</p>
                            <p className="text-xs text-slate-400 mt-1">Best rates, easy approval</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-cyan-500/30 text-center">
                            <p className="text-2xl font-black text-cyan-400">20-36%</p>
                            <p className="text-white font-bold mt-2">Good</p>
                            <p className="text-xs text-slate-400 mt-1">Healthy range, good options</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-yellow-500/30 text-center">
                            <p className="text-2xl font-black text-yellow-400">36-43%</p>
                            <p className="text-white font-bold mt-2">Acceptable</p>
                            <p className="text-xs text-slate-400 mt-1">QM limit, higher scrutiny</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-red-500/30 text-center">
                            <p className="text-2xl font-black text-red-400">&gt;43%</p>
                            <p className="text-white font-bold mt-2">High</p>
                            <p className="text-xs text-slate-400 mt-1">Difficult approval, limited options</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <p className="text-cyan-300 text-sm">
                            <strong>28/36 Rule:</strong> Keep housing costs under 28% of income and total DTI under 36% for optimal financial health.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Lower DTI */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    How to Lower Your DTI
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
                        <TrendingDown className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Reduce Debt</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li> Pay down credit card balances</li>
                            <li> Pay off small loans entirely</li>
                            <li> Avoid new debt before applying</li>
                            <li> Refinance for lower payments</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                        <TrendingDown className="w-8 h-8 text-cyan-400 mb-3 rotate-180" />
                        <h3 className="font-bold text-white text-lg mb-3">Increase Income</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li> Ask for a raise</li>
                            <li> Start a side business</li>
                            <li> Document all income sources</li>
                            <li> Add a co-borrower's income</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free DTI Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-cyan-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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
                    <li> Consumer Financial Protection Bureau. "Qualified Mortgage Definition under the Truth in Lending Act." 12 CFR Part 1026.</li>
                    <li> Consumer Financial Protection Bureau. "Debt-to-Income Ratio Threshold for Qualified Mortgages." CFPB, 2021.</li>
                    <li> Federal Reserve. "Report on the Economic Well-Being of U.S. Households." FRB, 2024.</li>
                    <li> Fannie Mae. "Selling Guide: Debt Ratios." Fannie Mae, 2026.</li>
                    <li> Federal Housing Administration. "FHA Loan Requirements." HUD, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Check Your DTI Now
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Find out if you're in a good position for a mortgage or loan.
                </p>
                <Link
                    href="/dti/calculator"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-cyan-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate DTI
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="dti" count={5} />
            </section>
        </div>
    );
}
