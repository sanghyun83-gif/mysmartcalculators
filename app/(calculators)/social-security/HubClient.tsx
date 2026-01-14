"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, SS_2026, formatCurrency } from "@/lib/calculators/social-security";
import {
    ArrowRight, Landmark, Users, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    TrendingUp, Calendar, DollarSign, Clock
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is Full Retirement Age (FRA) for Social Security?",
        a: "Full Retirement Age is when you qualify for 100% of your calculated Social Security benefit. For those born in 1960 or later, FRA is 67. For those born between 1955-1959, it ranges from 66 years and 2 months to 66 years and 10 months. You can claim as early as 62 or as late as 70."
    },
    {
        q: "How much will my Social Security benefit be reduced if I claim early?",
        a: "Claiming at 62 (5 years before FRA of 67) reduces benefits by approximately 30%. The reduction is 5/9 of 1% per month for the first 36 months early, plus 5/12 of 1% for each additional month. For example, claiming at 64 results in about an 20% reduction."
    },
    {
        q: "How much extra will I get if I delay claiming past my FRA?",
        a: "For each year you delay past FRA (up to age 70), you earn 8% in delayed retirement credits. Delaying from 67 to 70 increases your benefit by 24%. After age 70, there's no additional increase, so there's no benefit to waiting beyond 70."
    },
    {
        q: "What is PIA (Primary Insurance Amount)?",
        a: "PIA is your calculated Social Security benefit at Full Retirement Age. It's based on your 35 highest-earning years (adjusted for inflation) and calculated using a formula with 'bend points.' The SSA uses your Average Indexed Monthly Earnings (AIME) to determine PIA."
    },
    {
        q: "How is Social Security calculated?",
        a: "Social Security uses your highest 35 years of earnings (adjusted for wage inflation), calculates your Average Indexed Monthly Earnings (AIME), then applies a formula: 90% of the first $1,226 of AIME + 32% of AIME between $1,226 and $7,391 + 15% of AIME above $7,391 (2026 bend points)."
    },
    {
        q: "What is the maximum Social Security benefit in 2026?",
        a: "The maximum Social Security benefit in 2026 depends on claiming age: approximately $2,710/month at age 62, $3,822/month at FRA (67), and $4,873/month at age 70. To receive the maximum, you need 35 years of earnings at or above the maximum taxable earnings limit."
    },
    {
        q: "What is COLA and how does it affect my benefits?",
        a: "COLA (Cost-of-Living Adjustment) is an annual increase to Social Security benefits to keep pace with inflation, based on the Consumer Price Index. The 2026 COLA is projected at 2.5%. COLA applies to all beneficiaries regardless of when they claimed."
    },
    {
        q: "Can I work while receiving Social Security?",
        a: "Yes, but if you're under FRA, there's an earnings test. In 2026, if you earn over $23,400 annually, $1 is withheld for every $2 earned above the limit. In the year you reach FRA, the limit is $62,160 with $1 withheld per $3 above. After reaching FRA, there's no limit."
    },
    {
        q: "What are spousal benefits and who qualifies?",
        a: "Spousal benefits allow a spouse to claim up to 50% of their partner's PIA at FRA, even with no work history. You must be married at least 1 year and your spouse must be receiving benefits (or eligible). Ex-spouses may qualify if married 10+ years and divorced for 2+ years."
    },
    {
        q: "What happens to Social Security benefits when a spouse dies?",
        a: "The surviving spouse can receive up to 100% of the deceased spouse's benefit (survivor benefits). The amount depends on the survivor's age when claiming. At FRA, you receive 100%; at 60, about 71.5%. You cannot collect both your own benefit and survivor benefits simultaneously—you get the higher of the two."
    },
    {
        q: "Is Social Security taxable?",
        a: "Up to 85% of Social Security benefits may be taxable depending on your 'combined income' (AGI + non-taxable interest + 50% of SS benefits). For individuals: income over $25,000 (50% taxed) or $34,000 (85% taxed). For couples: over $32,000 (50%) or $44,000 (85%)."
    },
    {
        q: "What is the Social Security trust fund and is it running out?",
        a: "The Social Security Trust Fund holds reserves to pay benefits. According to the 2024 Trustees Report, the fund is projected to be depleted by 2034. After depletion, ongoing payroll taxes would cover about 77% of scheduled benefits. Congress may act to address this before then."
    },
    {
        q: "Should I claim Social Security early or wait?",
        a: "It depends on your health, finances, and life expectancy. Claim early if: you need the income, have health concerns, or have shorter life expectancy. Wait if: you're healthy, can afford to wait, expect to live past 80, or want to maximize survivor benefits for your spouse. Break-even age is typically around 80."
    },
    {
        q: "How do I apply for Social Security benefits?",
        a: "Apply online at ssa.gov (easiest), by phone at 1-800-772-1213, or in person at a local SSA office. Apply 3-4 months before you want benefits to begin. You'll need your Social Security number, birth certificate, W-2s or tax returns, and bank information for direct deposit."
    },
    {
        q: "Can I change my mind after claiming Social Security?",
        a: "Yes, but there are rules. Within 12 months of first receiving benefits, you can withdraw your application, repay all benefits received, and reapply later at a higher rate. After 12 months, you can voluntarily suspend benefits at FRA (until 70) to earn delayed credits, but you cannot withdraw."
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
                                <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
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

export default function SocialSecurityHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                        <Landmark className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-semibold">SSA 2026 Guidelines</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Social Security <span className="text-blue-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Estimate your Social Security retirement benefits with our free {SITE.year} calculator.
                        Compare claiming at 62, Full Retirement Age, or 70 to maximize your lifetime benefits.
                    </p>

                    <Link
                        href="/social-security/ss-calculator"
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate My Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{SS_2026.statistics.beneficiaries.toLocaleString()}</p>
                            <p className="text-xs text-slate-400 mt-1">Total Beneficiaries</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{formatCurrency(SS_2026.statistics.avgMonthly)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Monthly</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{formatCurrency(SS_2026.statistics.maxAt70)}</p>
                            <p className="text-xs text-slate-400 mt-1">Max at Age 70</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-red-400">{SS_2026.statistics.trustFundYear}</p>
                            <p className="text-xs text-slate-400 mt-1">Trust Fund Year</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Social Security */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Social Security Retirement Benefits
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">Social Security</strong> is a federal program that provides retirement, disability, and survivor benefits to eligible Americans. Established in 1935 under the Social Security Act, it remains the largest source of retirement income for most Americans. According to the <strong className="text-white">Social Security Administration (SSA)</strong>, over 67 million people receive monthly benefits.
                    </p>
                    <p>
                        Retirement benefits are funded through payroll taxes (FICA). In {SITE.year}, employees and employers each pay 6.2% of wages up to the taxable maximum ($168,600 projected for 2026). Your benefit amount is calculated based on your 35 highest-earning years, making consistent work history crucial for maximizing benefits.
                    </p>
                    <p>
                        The timing of when you claim benefits significantly affects your monthly payment. While you can claim as early as age 62, each month before Full Retirement Age results in a permanent reduction. Conversely, delaying past FRA until age 70 earns you 8% more per year in delayed retirement credits—a guaranteed return unmatched by most investments.
                    </p>
                </div>
            </section>

            {/* Claiming Ages */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Benefit Amounts by Claiming Age
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-full mb-4">
                                <Clock className="w-6 h-6 text-red-400" />
                            </div>
                            <p className="font-bold text-white text-lg">Age 62 (Early)</p>
                            <p className="text-3xl font-black text-red-400 mt-2">-30%</p>
                            <p className="text-xs text-slate-400 mt-2">Permanent reduction from FRA benefit</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-blue-500/30 text-center ring-2 ring-blue-500/30">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                                <CheckCircle className="w-6 h-6 text-blue-400" />
                            </div>
                            <p className="font-bold text-white text-lg">Age 67 (FRA)</p>
                            <p className="text-3xl font-black text-blue-400 mt-2">100%</p>
                            <p className="text-xs text-slate-400 mt-2">Full calculated benefit (PIA)</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                            </div>
                            <p className="font-bold text-white text-lg">Age 70 (Delayed)</p>
                            <p className="text-3xl font-black text-green-400 mt-2">+24%</p>
                            <p className="text-xs text-slate-400 mt-2">Maximum possible benefit</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <p className="text-blue-300 text-sm">
                            <strong>Break-Even:</strong> If you live past age 80, delaying benefits typically results in higher lifetime income.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Social Security Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-blue-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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

            {/* Trust Fund Warning */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-400 mb-2">Trust Fund Outlook</h3>
                            <p className="text-sm text-slate-300">
                                The 2024 Social Security Trustees Report projects the combined trust funds will be depleted by 2034. After that point, continuing payroll tax revenue would cover approximately 77% of scheduled benefits. Congress may enact reforms—such as raising the retirement age, increasing payroll taxes, or adjusting benefit formulas—before this occurs.
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
                    <li>• Social Security Administration. "Benefit Calculators." SSA.gov, 2026.</li>
                    <li>• Social Security Administration. "2024 Annual Report of the Board of Trustees." SSA OASDI Trustees Report, 2024.</li>
                    <li>• Social Security Administration. "Cost-of-Living Adjustments (COLA)." SSA.gov, 2026.</li>
                    <li>• Congressional Research Service. "Social Security: What Would Happen If the Trust Funds Ran Out?" CRS Report RL33514, 2024.</li>
                    <li>• AARP. "Social Security Resource Center." AARP.org, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Plan Your Retirement Today
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Estimate your Social Security benefits and make informed decisions about when to claim.
                </p>
                <Link
                    href="/social-security/ss-calculator"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Benefits
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="social-security" count={5} />
            </section>
        </div>
    );
}
