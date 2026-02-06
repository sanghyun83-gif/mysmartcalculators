"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, ROTH_2026, formatCurrency } from "@/lib/calculators/roth-ira";
import {
    ArrowRight, PiggyBank, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    TrendingUp, DollarSign, Clock, Target, Zap
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is a Roth IRA and how does it work?",
        a: "A Roth IRA is a retirement account where you contribute after-tax dollars. Your money grows tax-free, and qualified withdrawals in retirement are completely tax-free. Unlike Traditional IRAs, you pay taxes now (when contributions are made) rather than later (when withdrawn). This makes Roth IRAs especially valuable if you expect to be in a higher tax bracket in retirement."
    },
    {
        q: "What are the 2026 Roth IRA contribution limits?",
        a: "For 2026, you can contribute up to $7,000 if you're under 50. If you're 50 or older, you can contribute an extra $1,000 'catch-up' contribution for a total of $8,000. These limits apply across all your IRAs combined (Traditional + Roth), not per account. Contribution limits are adjusted periodically for inflation."
    },
    {
        q: "What are the income limits for Roth IRA?",
        a: "For 2026: Single filers can make full contributions if MAGI is under $150,000; reduced contributions up to $165,000; no direct contributions above $165,000. Married filing jointly: full contributions under $236,000; phase-out $236,000-$246,000; no direct contributions above $246,000. However, the Backdoor Roth strategy can circumvent these limits."
    },
    {
        q: "What is a Backdoor Roth IRA?",
        a: "A Backdoor Roth is a legal strategy for high earners above the income limits. You contribute to a Traditional IRA (non-deductible), then immediately convert it to a Roth IRA. There are no income limits on conversions. Be aware of the 'pro-rata rule' if you have other Traditional IRA balances?�it can trigger taxes on the conversion."
    },
    {
        q: "What is the 5-year rule for Roth IRA?",
        a: "There are actually two 5-year rules. Rule 1: Earnings can only be withdrawn tax-free if the Roth has been open 5+ years AND you're 59½+. Rule 2: Each Roth conversion has its own 5-year clock for penalty-free withdrawal (before 59½). Contributions can always be withdrawn tax-free and penalty-free at any time."
    },
    {
        q: "When can I withdraw from my Roth IRA?",
        a: "Contributions can be withdrawn anytime, tax-free and penalty-free (you already paid taxes on them). Earnings are tax-free and penalty-free only after age 59½ AND meeting the 5-year rule. Before 59½, earnings withdrawals incur taxes plus a 10% penalty, with some exceptions (first home, education, medical)."
    },
    {
        q: "Should I choose Roth or Traditional IRA?",
        a: "Generally: Choose Roth if you expect higher taxes in retirement than now (you're young, expect income to rise, or tax rates may increase). Choose Traditional if you're in a high tax bracket now but expect lower taxes in retirement. Many advisors recommend Roth for younger workers and Traditional for peak earners near retirement."
    },
    {
        q: "Can I have both a Roth IRA and 401(k)?",
        a: "Yes! They're separate accounts with separate limits. Many people max out their 401(k) ($23,500 for 2026) AND their Roth IRA ($7,000). This provides tax diversification in retirement. If your employer offers a Roth 401(k), you can have Roth contributions in both your 401(k) and IRA."
    },
    {
        q: "What are the benefits of a Roth IRA?",
        a: "Key benefits include: 1) Tax-free growth and withdrawals in retirement, 2) No Required Minimum Distributions (RMDs) during your lifetime, 3) Contributions can be withdrawn anytime, 4) Tax-free inheritance for beneficiaries, 5) Flexibility and hedge against future tax increases, 6) No age limit to contribute (if you have earned income)."
    },
    {
        q: "Does a Roth IRA have Required Minimum Distributions?",
        a: "No! Unlike Traditional IRAs and 401(k)s, Roth IRAs have no RMDs during the original owner's lifetime. You can let the money grow indefinitely. However, inherited Roth IRAs do have distribution requirements (typically emptied within 10 years for most beneficiaries under the SECURE Act rules)."
    },
    {
        q: "What happens to my Roth IRA when I die?",
        a: "Your beneficiaries inherit the Roth tax-free. Spouses can treat it as their own and continue tax-free growth. Non-spouse beneficiaries (children, others) must generally empty the account within 10 years under SECURE Act rules, but withdrawals are tax-free. This makes Roth IRAs excellent wealth transfer tools."
    },
    {
        q: "Can I convert my Traditional IRA to Roth?",
        a: "Yes, through a 'Roth conversion.' You'll pay income taxes on the converted amount (since Traditional IRA contributions were tax-deferred). Conversions make sense when: you're in a lower tax bracket temporarily, you have deductions to offset the income, or you expect much higher taxes later. There's no limit on conversion amounts."
    },
    {
        q: "What can I invest in with a Roth IRA?",
        a: "Almost anything: stocks, bonds, mutual funds, ETFs, REITs, CDs, and more. Prohibited investments include collectibles (art, antiques, most coins), life insurance, and S-Corp stock. Your investment choices depend on your brokerage. Most experts recommend low-cost index funds for long-term growth in retirement accounts."
    },
    {
        q: "What is a Spousal Roth IRA?",
        a: "A Spousal IRA allows a working spouse to contribute to an IRA for a non-working or low-earning spouse. Each spouse can contribute up to the annual limit ($7,000 for 2026), even if one has no earned income. This effectively doubles the household's IRA contribution capacity. Income limits apply to combined household MAGI."
    },
    {
        q: "How much will my Roth IRA be worth at retirement?",
        a: "It depends on contributions, time, and returns. Example: Contributing $7,000/year from age 25 to 65 (40 years) at 7% average return = approximately $1.5 million. Starting at 35 = about $700,000. At 45 = about $300,000. Time is the most powerful factor due to compound growth. Use our calculator for your personalized projection."
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
                                <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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

export default function RothIRAHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300 font-semibold">Tax-Free Growth</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Roth IRA <span className="text-emerald-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Project your tax-free retirement savings with our {SITE.year} Roth IRA calculator.
                        See how much your contributions could grow and estimate your tax savings.
                    </p>

                    <Link
                        href="/roth-ira/roth-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Growth
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-emerald-400">{formatCurrency(ROTH_2026.contributionLimit)}</p>
                            <p className="text-xs text-slate-400 mt-1">2026 Limit</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{formatCurrency(ROTH_2026.catchUpContribution)}</p>
                            <p className="text-xs text-slate-400 mt-1">Catch-Up (50+)</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{ROTH_2026.statistics.avgAnnualReturn}%</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Annual Return</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{formatCurrency(ROTH_2026.statistics.avgBalance)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Balance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Roth IRA */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Why Choose a Roth IRA?
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        A <strong className="text-white">Roth IRA</strong> is one of the most powerful retirement savings vehicles available to Americans. Unlike Traditional IRAs or 401(k)s where you defer taxes until retirement, Roth IRAs are funded with after-tax dollars?�meaning your money grows completely tax-free and qualified withdrawals are also tax-free.
                    </p>
                    <p>
                        According to the <strong className="text-white">Investment Company Institute (ICI)</strong>, over 26 million U.S. households own Roth IRAs, with combined assets exceeding $1.2 trillion. The <strong className="text-white">IRS</strong> sets annual contribution limits that are adjusted for inflation, with the 2026 limit at $7,000 ($8,000 for those 50+).
                    </p>
                    <p>
                        The power of tax-free compounding cannot be overstated. A 25-year-old contributing $7,000 annually until age 65 at a 7% average return would accumulate approximately <strong className="text-white">$1.5 million</strong>?�all withdrawable tax-free in retirement. This tax-free status also makes Roth IRAs excellent for estate planning, as beneficiaries inherit the funds without income tax liability.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Roth IRA Benefits
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ROTH_2026.benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <p className="text-white font-semibold">{benefit}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <p className="text-emerald-300 text-sm">
                            <strong>Pro Tip:</strong> Start early! Time is your greatest ally with compound growth. Even small contributions in your 20s can outperform large contributions in your 40s.
                        </p>
                    </div>
                </div>
            </section>

            {/* Income Limits */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    2026 Income Limits
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="font-bold text-white text-lg mb-4">Single Filers</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Full Contribution</span>
                                <span className="text-emerald-400 font-bold">&lt; {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutStart)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Reduced Contribution</span>
                                <span className="text-amber-400 font-bold">${(ROTH_2026.incomeLimits.singlePhaseOutStart / 1000).toFixed(0)}K - ${(ROTH_2026.incomeLimits.singlePhaseOutEnd / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Not Eligible (Direct)</span>
                                <span className="text-red-400 font-bold">&gt; {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutEnd)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="font-bold text-white text-lg mb-4">Married Filing Jointly</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Full Contribution</span>
                                <span className="text-emerald-400 font-bold">&lt; {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutStart)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Reduced Contribution</span>
                                <span className="text-amber-400 font-bold">${(ROTH_2026.incomeLimits.marriedPhaseOutStart / 1000).toFixed(0)}K - ${(ROTH_2026.incomeLimits.marriedPhaseOutEnd / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Not Eligible (Direct)</span>
                                <span className="text-red-400 font-bold">&gt; {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutEnd)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-slate-400 text-sm mt-4 text-center">
                    <strong className="text-white">Backdoor Roth:</strong> High earners can contribute to a Traditional IRA (non-deductible) and convert to Roth?�no income limits on conversions.
                </p>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Roth IRA Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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

            {/* Growth Example */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-emerald-400 mb-2">Power of Compound Growth</h3>
                            <p className="text-sm text-slate-300">
                                <strong className="text-white">$7,000/year × 40 years @ 7% = ~$1.5 Million</strong><br />
                                Starting at age 25 and contributing the max until 65, you'd contribute $280,000 total?�but end up with over $1.5M, all tax-free. Starting 10 years later (at 35) would yield only ~$700,000. Time in the market beats timing the market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Citations */}
            <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-700/50">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Data Sources & Citations
                </h3>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li>??Internal Revenue Service. "Retirement Topics - IRA Contribution Limits." IRS.gov, 2026.</li>
                    <li>??Internal Revenue Service. "Amount of Roth IRA Contributions That You Can Make for 2026." IRS Publication 590-A.</li>
                    <li>??Investment Company Institute. "IRA Ownership in 2026." ICI Research, 2026.</li>
                    <li>??Congressional Research Service. "Individual Retirement Account (IRA) Ownership: Data and Policy Issues." CRS Report, 2024.</li>
                    <li>??Securities and Exchange Commission. "Saving and Investing for Retirement." Investor.gov, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Start Planning Your Tax-Free Retirement
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    See how your Roth IRA contributions could grow over time and estimate your future tax savings.
                </p>
                <Link
                    href="/roth-ira/roth-calculator"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Growth
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="roth-ira" count={5} />
            </section>
        </div>
    );
}
