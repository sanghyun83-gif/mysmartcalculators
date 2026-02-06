"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, LOAN_2026, formatCurrency } from "@/lib/calculators/loan-payoff";
import {
    ArrowRight, Banknote, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    TrendingDown, DollarSign, Clock, Target, Zap
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "How do extra payments reduce my loan payoff time?",
        a: "Extra payments go directly toward your principal balance, reducing the amount that accrues interest. Even $50-100 extra per month can save thousands in interest and shave years off your loan. The earlier you make extra payments, the more impact they have due to compound interest."
    },
    {
        q: "What is the avalanche method vs snowball method?",
        a: "Avalanche: Pay minimums on all debts, put extra money toward the highest-interest debt first. Mathematically optimal?�saves the most money. Snowball: Pay off smallest balances first for psychological wins. Slightly more expensive but can boost motivation. Choose based on your personality."
    },
    {
        q: "Should I pay off debt or invest?",
        a: "General rule: If debt interest rate exceeds expected investment returns, pay off debt first. Credit cards (20%+) should almost always be prioritized. For low-rate debt (under 5%), investing may be better. Always contribute enough to get employer 401k match first?�that's a guaranteed 50-100% return."
    },
    {
        q: "What is the bi-weekly payment strategy?",
        a: "Instead of 12 monthly payments, you make half-payments every 2 weeks (26 half-payments = 13 full payments annually). This extra payment per year can shave 4-6 years off a 30-year mortgage. Ensure your lender applies payments correctly and doesn't charge fees for this arrangement."
    },
    {
        q: "How do I pay off credit card debt faster?",
        a: "Stop using cards (use cash/debit). Pay more than minimums. Consider balance transfer to 0% APR card (watch fees). Use avalanche (highest APR first) or snowball (lowest balance first) method. Negotiate lower rates with issuers. Consider debt consolidation if you have good credit."
    },
    {
        q: "What is a loan amortization schedule?",
        a: "An amortization schedule shows each monthly payment split between principal and interest over the loan term. Early payments are mostly interest; later payments are mostly principal. Understanding your schedule helps you see how extra payments reduce principal and total interest paid."
    },
    {
        q: "Should I refinance to pay off my loan faster?",
        a: "Refinancing makes sense if: you can get a significantly lower rate (1%+ reduction), you'll stay in the loan long enough to recoup closing costs, and you won't extend your term. A shorter-term refinance (30??5 years) builds equity faster but has higher monthly payments."
    },
    {
        q: "What is the 'debt-to-income ratio' and why does it matter?",
        a: "DTI is your monthly debt payments divided by gross monthly income. Lenders prefer DTI under 36% (sometimes 43% max for mortgages). Lower DTI = easier loan approval and better rates. Paying off debt improves your DTI and overall financial health."
    },
    {
        q: "Are there penalties for paying off loans early?",
        a: "Some loans have prepayment penalties (common in older mortgages, some auto loans). Federal student loans have no prepayment penalties. Check your loan agreement. Even with penalties, early payoff often saves more in interest than the penalty costs."
    },
    {
        q: "How much can I save by paying off my mortgage early?",
        a: "On a $300,000 mortgage at 7% for 30 years: paying $200/month extra saves ~$100,000 in interest and pays off the loan 8 years early. Making one extra payment per year (bi-weekly strategy) saves ~$60,000 and cuts 4+ years off the term."
    },
    {
        q: "What is 'good debt' vs 'bad debt'?",
        a: "Good debt: Low interest, potentially tax-deductible, builds value (mortgages, student loans for lucrative careers, business loans). Bad debt: High interest, depreciating purchases, no tax benefits (credit cards, payday loans, most car loans). Prioritize eliminating 'bad debt' first."
    },
    {
        q: "Should I drain savings to pay off debt?",
        a: "Generally no?�maintain an emergency fund of 3-6 months expenses first. Without savings, unexpected expenses go back on credit cards, restarting the cycle. Exception: If credit card interest is 20%+, consider paying down debt while slowly rebuilding a smaller emergency fund."
    },
    {
        q: "How do I calculate my loan payoff amount?",
        a: "Contact your lender for an exact payoff quote (different from balance due to accrued interest). Online calculators estimate, but actual payoff includes per-diem interest up to the payment date, any fees, and adjustments. Quotes are typically valid for 10-30 days."
    },
    {
        q: "What happens to my credit score when I pay off a loan?",
        a: "Counterintuitively, scores may drop slightly when you pay off installment loans (credit mix changes). However, reduced debt and lower utilization (for revolving credit) generally improve scores over time. Lower DTI also helps future loan approvals despite the temporary dip."
    },
    {
        q: "What is debt consolidation and does it work?",
        a: "Debt consolidation combines multiple debts into one loan, ideally at a lower rate. Works best when: you get a significantly lower rate, you don't accumulate new debt, and the term doesn't extend so long that you pay more total interest. Avoid consolidation loans with fees exceeding interest savings."
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
                                <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
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

export default function LoanPayoffHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                        <TrendingDown className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-300 font-semibold">Debt-Free Faster</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Loan Payoff <span className="text-green-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        See how extra payments accelerate your debt-free date and save you thousands in interest.
                        Our free {SITE.year} calculator works for mortgages, auto loans, student loans, and credit cards.
                    </p>

                    <Link
                        href="/loan-payoff/loan-calculator"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Payoff
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-red-400">{formatCurrency(LOAN_2026.statistics.avgHouseholdDebt)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Household Debt</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{formatCurrency(LOAN_2026.statistics.avgAutoLoan)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Auto Loan</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{formatCurrency(LOAN_2026.statistics.avgStudentLoan)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Student Loan</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{formatCurrency(LOAN_2026.statistics.avgCreditCard)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Credit Card</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power of Extra Payments */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    The Power of Extra Payments
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        Every dollar you pay above your minimum payment goes directly toward your <strong className="text-white">principal balance</strong>?�the amount that accrues interest. This creates a compounding effect in your favor: as your balance drops faster, less interest accrues each month, leaving more of each payment for principal reduction.
                    </p>
                    <p>
                        According to the <strong className="text-white">Federal Reserve</strong>, the average American household carries over $103,000 in debt. The <strong className="text-white">Consumer Financial Protection Bureau (CFPB)</strong> reports that most borrowers dramatically underestimate how much they'll pay in interest over a loan's lifetime?�often 50% or more of the original principal on long-term loans.
                    </p>
                    <p>
                        Even small extra payments make a significant difference. Adding just $50/month to a $25,000 auto loan at 7% saves over $400 in interest and pays off the loan 5 months early. On a $300,000 mortgage, $200/month extra saves approximately $100,000 in interest and cuts 8 years off the loan.
                    </p>
                </div>
            </section>

            {/* Payoff Strategies */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Debt Payoff Strategies
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                                <Target className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">Avalanche Method</h3>
                            <p className="text-sm text-slate-400">Pay highest-interest debt first. Mathematically optimal?�saves the most money over time.</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
                                <Zap className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">Snowball Method</h3>
                            <p className="text-sm text-slate-400">Pay smallest balance first. Quick wins build momentum and motivation to continue.</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-full mb-4">
                                <Clock className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">Bi-Weekly Payments</h3>
                            <p className="text-sm text-slate-400">Pay half every 2 weeks = 13 full payments/year. Cuts years off mortgages.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <p className="text-green-300 text-sm">
                            <strong>Pro Tip:</strong> The best strategy is the one you'll stick with. If quick wins motivate you, use snowball; if math matters most, use avalanche.
                        </p>
                    </div>
                </div>
            </section>

            {/* Loan Types */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Average Loan Rates by Type
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {LOAN_2026.loanTypes.map((loan) => (
                        <div key={loan.name} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                            <p className="font-bold text-white">{loan.name}</p>
                            <p className="text-2xl font-black text-green-400 mt-1">{loan.avgRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">
                                {loan.avgTerm > 0 ? `${loan.avgTerm / 12}-year avg term` : 'Revolving'}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Loan Payoff Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-green-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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
                    <li>??Federal Reserve. "Consumer Credit - G.19 Report." Board of Governors, 2026.</li>
                    <li>??Consumer Financial Protection Bureau. "Consumer Credit Trends." CFPB, 2024.</li>
                    <li>??Experian. "State of Credit 2026." Experian Consumer Insights, 2026.</li>
                    <li>??Federal Reserve Bank of New York. "Quarterly Report on Household Debt and Credit." FRBNY, Q4 2026.</li>
                    <li>??Bankrate. "Survey: Current Interest Rates for Personal Loans, Auto Loans, and Credit Cards." Bankrate, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Start Your Debt-Free Journey
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    See exactly how much you can save by making extra payments. Calculate your new payoff date.
                </p>
                <Link
                    href="/loan-payoff/loan-calculator"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-green-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Payoff
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="loan-payoff" count={5} />
            </section>
        </div>
    );
}
