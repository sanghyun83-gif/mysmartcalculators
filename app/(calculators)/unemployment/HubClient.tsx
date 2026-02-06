"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, UI_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/unemployment";
import {
    ArrowRight, Briefcase, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    DollarSign, Clock, Users, MapPin
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "How much will I receive in unemployment benefits?",
        a: "Most states calculate benefits as approximately 50% of your prior weekly wage, up to a state maximum. Maximum weekly benefits vary dramatically by state: from $275 (Florida) to over $1,000 (Massachusetts, Washington). Use our calculator with your state's specific limits."
    },
    {
        q: "How long can I collect unemployment?",
        a: "Standard unemployment insurance lasts up to 26 weeks in most states. Some states offer less (Florida and North Carolina: 12-16 weeks). Extended benefits may be available during periods of high state unemployment, providing an additional 13 weeks. Pandemic-era programs (PEUC, PUA) have expired."
    },
    {
        q: "What are the eligibility requirements for unemployment?",
        a: "Generally you must: 1) Have lost your job through no fault of your own (layoff, reduction in force), 2) Meet your state's minimum earnings/time worked requirements (typically $1,000+ in a 'base period'), 3) Be actively seeking work, 4) Be able and available to work, 5) Accept suitable job offers."
    },
    {
        q: "Can I get unemployment if I quit my job?",
        a: "Generally no, but exceptions exist for 'good cause' quitting: unsafe working conditions, harassment, significant pay cuts, medical reasons, or relocating with a spouse. You'll need to prove good cause to your state's UI agency. Being denied initially doesn't prevent you from appealing."
    },
    {
        q: "Can I get unemployment if I was fired?",
        a: "It depends on why you were fired. Termination for simple job performance issues usually qualifies. Termination for 'misconduct' (violating policies, attendance issues, insubordination) typically disqualifies you. Theft, violence, or drug use at work will disqualify you in all states."
    },
    {
        q: "What is the 'base period' for unemployment?",
        a: "The base period is the timeframe used to calculate your benefits?”typically the first four of the last five completed calendar quarters before you file. Some states offer an 'alternate base period' using more recent wages if you don't qualify under the standard period."
    },
    {
        q: "Are unemployment benefits taxable?",
        a: "Yes, unemployment benefits are fully taxable as ordinary income on your federal return. Some states also tax UI benefits. You can opt to have 10% withheld for federal taxes when you file your claim, or make estimated tax payments to avoid a large tax bill."
    },
    {
        q: "Can I work part-time while receiving unemployment?",
        a: "Yes, but your benefits will be reduced. Most states allow you to earn a certain amount (typically $50-150/week or 25% of your benefit) before reducing your payment. Beyond that, benefits are reduced dollar-for-dollar or on a sliding scale. Report all earnings to avoid overpayment issues."
    },
    {
        q: "What if my unemployment claim is denied?",
        a: "You have the right to appeal. File your appeal within the deadline (usually 10-30 days). You'll have a hearing before an administrative law judge where you can present evidence and witnesses. Many denials are overturned on appeal, especially with proper documentation."
    },
    {
        q: "How do I apply for unemployment benefits?",
        a: "Apply through your state's unemployment website or by phone. You'll need: Social Security number, driver's license, last employer's contact info and dates of employment, pay stubs or W-2s, bank account info for direct deposit. Apply the first week you're unemployed?”there's usually a one-week waiting period."
    },
    {
        q: "What are work search requirements?",
        a: "Most states require you to make a minimum number of job contacts per week (typically 3-5), document your search activities, register with the state job service, and accept suitable work offers. Failure to meet these requirements can result in benefit denial. Keep detailed records."
    },
    {
        q: "What happens if I'm overpaid unemployment benefits?",
        a: "You must repay overpayments, regardless of fault. States can reduce future benefits, garnish tax refunds, or pursue collection. Fraud (intentional misrepresentation) results in penalties, repayment of 15-30% additional, and potential criminal charges. Report income changes immediately to avoid overpayments."
    },
    {
        q: "Can undocumented workers get unemployment?",
        a: "No. You must be legally authorized to work in the U.S. to receive unemployment benefits. States verify work authorization through the Social Security Administration. Using false documents to obtain benefits is a crime with serious consequences."
    },
    {
        q: "Do gig workers and freelancers qualify for unemployment?",
        a: "Traditional UI covers W-2 employees only. Self-employed, gig workers, and 1099 contractors don't qualify for regular UI. The pandemic PUA program that covered these workers has ended. Some states are exploring expanding coverage, but currently, independent contractors remain ineligible in most states."
    },
    {
        q: "What is the maximum unemployment benefit by state?",
        a: "Weekly maximums vary widely: Massachusetts ($1,033), Washington ($999), New Jersey ($854), Colorado ($742), Pennsylvania ($594), Texas ($563), California ($450), Georgia ($365), Arizona ($320), Florida ($275). These amounts are updated periodically and may have additional dependents' allowances in some states."
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
                                <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
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

export default function UnemploymentHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                        <Briefcase className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-amber-300 font-semibold">2026 State Benefits Updated</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Unemployment <span className="text-amber-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Estimate your weekly unemployment benefits based on your state and prior wages.
                        Our free {SITE.year} calculator covers all 50 states with current maximum benefit amounts.
                    </p>

                    <Link
                        href="/unemployment/calculator"
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{formatCurrency(UI_CONSTANTS_2026.statistics.avgWeeklyBenefit)}/wk</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Weekly Benefit</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{UI_CONSTANTS_2026.statistics.avgDuration} Weeks</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Duration Used</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{UI_CONSTANTS_2026.statistics.replacementRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">Wage Replacement</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{(UI_CONSTANTS_2026.statistics.totalRecipients / 1000000).toFixed(1)}M</p>
                            <p className="text-xs text-slate-400 mt-1">Current Recipients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Unemployment Insurance */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Unemployment Insurance (UI)
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">Unemployment Insurance (UI)</strong> is a joint federal-state program that provides temporary financial assistance to workers who lose their jobs through no fault of their own. Funded by employer payroll taxes, UI helps bridge the gap between jobs while you search for new employment.
                    </p>
                    <p>
                        The <strong className="text-white">U.S. Department of Labor (DOL)</strong> oversees the federal-state unemployment system, but each state administers its own program with varying benefit amounts, duration, and eligibility requirements. According to DOL data, approximately 1.5 million Americans receive unemployment benefits at any given time, with an average weekly benefit of ${UI_CONSTANTS_2026.statistics.avgWeeklyBenefit}.
                    </p>
                    <p>
                        Benefits typically replace about 45-50% of your prior wages, up to a state maximum. The wide variation in state maximums?”from $275/week in Florida to over $1,000/week in Massachusetts?”means your location significantly impacts your benefit amount. Most states provide up to 26 weeks of regular benefits, though some offer as few as 12 weeks.
                    </p>
                </div>
            </section>

            {/* State Maximums */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Maximum Weekly Benefits by State
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {Object.entries(UI_CONSTANTS_2026.stateMaximums).map(([state, max]) => (
                            <div
                                key={state}
                                className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50 text-center hover:border-amber-500/30 transition-colors"
                            >
                                <p className="text-xs text-slate-400">{state}</p>
                                <p className="text-lg font-black text-amber-400">{formatCurrency(max)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <p className="text-amber-300 text-sm">
                            <strong>Note:</strong> Many states offer additional amounts for dependents. Check your state's specific rules for the most accurate estimate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Eligibility Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">You May Qualify If:</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>??Lost job through layoff, reduction in force, or company closure</li>
                            <li>??Meet minimum earnings requirements in your state</li>
                            <li>??Able and available to work full-time</li>
                            <li>??Actively searching for new employment</li>
                            <li>??Quit for "good cause" (harassment, safety, medical)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-6">
                        <AlertTriangle className="w-8 h-8 text-red-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">You May NOT Qualify If:</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>??Fired for misconduct (theft, policy violations)</li>
                            <li>??Quit without good cause</li>
                            <li>??Self-employed or independent contractor (1099)</li>
                            <li>??Failed to meet work search requirements</li>
                            <li>??Refused suitable job offers</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Unemployment Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-amber-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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
                    <li>??U.S. Department of Labor. "Unemployment Insurance Weekly Claims Data." DOL ETA, 2026.</li>
                    <li>??U.S. Department of Labor. "Comparison of State Unemployment Insurance Laws." DOL, 2026.</li>
                    <li>??Center on Budget and Policy Priorities. "Policy Basics: How Many Weeks of Unemployment Compensation Are Available?" CBPP, 2024.</li>
                    <li>??National Employment Law Project. "Unemployment Insurance: A State-by-State Analysis." NELP, 2024.</li>
                    <li>??Internal Revenue Service. "Topic No. 418 Unemployment Compensation." IRS.gov, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Estimate Your Benefits Today
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Get a quick estimate of your weekly unemployment benefits based on your state and prior wages.
                </p>
                <Link
                    href="/unemployment/calculator"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-amber-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Benefits
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="unemployment" count={5} />
            </section>
        </div>
    );
}
