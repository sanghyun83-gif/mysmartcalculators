"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, VA_RATES_2026, formatCurrency } from "@/lib/calculators/va-disability";
import {
    ArrowRight, Shield, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Award, Users, Clock, Star
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "How is VA disability compensation calculated?",
        a: "VA disability compensation is based on your combined disability rating (0-100%) and dependent status. Monthly payments range from $175.51 (10%) to $3,825.12 (100%) for a single veteran without dependents. Veterans rated 30%+ receive additional amounts for spouses, children, and dependent parents."
    },
    {
        q: "What is 'VA Math' for combined ratings?",
        a: "The VA doesn't simply add ratings. Instead, each rating is applied to your 'remaining health.' Example: 50% + 30% = 50% of 100 (leaving 50%), then 30% of 50 (15%), totaling 65%, rounded to 70%. The VA always rounds to the nearest 10%. This 'bilateral factor' and combined rating math surprises many veterans."
    },
    {
        q: "What conditions qualify for VA disability?",
        a: "Any illness, injury, or condition connected to your military service may qualify?”including physical injuries, PTSD, hearing loss, tinnitus, sleep apnea, Gulf War Syndrome, Agent Orange exposure conditions, and presumptive conditions. You need evidence of: 1) current diagnosis, 2) in-service event, and 3) a nexus (medical connection)."
    },
    {
        q: "How do I file a VA disability claim?",
        a: "File online at VA.gov, by mail (VA Form 21-526EZ), or in person at a VA Regional Office. Gather service records, medical evidence, and buddy statements. Consider working with a VA-accredited attorney, claims agent, or Veterans Service Organization (VSO) for free assistance. Intent to File gives you one year to complete your claim."
    },
    {
        q: "How long does a VA disability claim take?",
        a: "Average processing time is approximately 125-150 days, but complex cases can take longer. The Fully Developed Claim (FDC) program may expedite processing if you submit all evidence upfront. You can check claim status online at VA.gov. Appeals through the new AMA system typically take 12-18 months."
    },
    {
        q: "What is TDIU (Total Disability Individual Unemployability)?",
        a: "TDIU allows veterans who can't work due to service-connected disabilities to receive 100% compensation without a 100% rating. Eligibility: one disability rated 60%+ OR combined rating 70%+ with at least one disability 40%+, plus inability to maintain substantially gainful employment. This can significantly increase your compensation."
    },
    {
        q: "Are VA disability benefits taxable?",
        a: "No. VA disability compensation is completely tax-free at both federal and state levels. This makes the effective value higher than equivalent taxable income. A veteran receiving $3,825/month at 100% would need to earn approximately $4,500-5,000/month in taxable income for the same take-home pay."
    },
    {
        q: "Can I receive VA disability and Social Security?",
        a: "Yes! VA disability and SSDI/SSI are separate programs and can be received simultaneously. VA compensation is not counted as income for SSDI eligibility. However, VA benefits may affect SSI (Supplemental Security Income), which is needs-based. Many veterans receive both VA and Social Security benefits."
    },
    {
        q: "What is a C&P exam?",
        a: "A Compensation & Pension (C&P) exam is a medical examination the VA uses to evaluate your disability claim. Be honest about your worst days, not just how you feel that day. Arrive on time, bring documentation, and describe how conditions affect your daily life and work. The examiner's report heavily influences your rating."
    },
    {
        q: "Can my VA rating increase over time?",
        a: "Yes. If your condition worsens, you can file a claim for an increased rating. Many conditions are rated higher as they progress. However, the VA can also propose rating reductions if evidence shows improvement. Ratings held for 20+ years become 'protected' and are harder to reduce."
    },
    {
        q: "What is the difference between VA disability and VA pension?",
        a: "Disability compensation is for service-connected conditions regardless of income/assets. VA pension is for wartime veterans with limited income who are 65+ or permanently disabled (not necessarily service-connected). You cannot receive both?”the VA pays the higher benefit. Disability is usually more valuable."
    },
    {
        q: "What are presumptive conditions?",
        a: "Presumptive conditions are automatically assumed to be service-connected based on your service era, location, or job. Examples: Agent Orange conditions for Vietnam/specific bases, Gulf War presumptives, burn pit exposure (PACT Act), and conditions from Camp Lejeune water contamination. You don't need to prove nexus for these."
    },
    {
        q: "What did the PACT Act change?",
        a: "The 2022 PACT Act is the largest expansion of VA benefits in decades. It adds 23 presumptive conditions for toxic exposure (burn pits, Agent Orange in Thailand/Guam/etc.), extends Agent Orange presumptions to more locations, and provides healthcare for combat veterans. Many previously denied claims may now qualify."
    },
    {
        q: "What is Special Monthly Compensation (SMC)?",
        a: "SMC provides additional compensation for specific severe disabilities beyond the standard 100% rate. Categories include: SMC-K (loss of use of extremity/organ), SMC-S (housebound), SMC-L through SMC-R (increasing levels of need for aid and attendance). SMC can significantly increase total compensation for severely disabled veterans."
    },
    {
        q: "Can I work while receiving VA disability?",
        a: "Yes, for most ratings. VA disability compensation has no income limit (unlike TDIU or VA pension). You can work full-time, have a high income, and still receive full compensation. The exception is TDIU, which requires that you cannot maintain 'substantially gainful employment' (generally defined as earning above poverty level from work)."
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

export default function VADisabilityHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-semibold">2026 VA Rates Updated</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        VA Disability <span className="text-blue-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate your VA disability compensation based on your rating and dependents.
                        Our free {SITE.year} calculator uses official VA rates updated December 1.
                    </p>

                    <Link
                        href="/va-disability/va-calculator"
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{(VA_RATES_2026.statistics.totalVeteransWithDisability / 1000000).toFixed(1)}M</p>
                            <p className="text-xs text-slate-400 mt-1">Veterans Receiving</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{formatCurrency(VA_RATES_2026.statistics.avgMonthlyPayment)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Monthly Payment</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{VA_RATES_2026.statistics.avgRating}%</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Combined Rating</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{VA_RATES_2026.statistics.claimsProcessingDays}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Days to Process</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is VA Disability */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding VA Disability Compensation
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">VA disability compensation</strong> is a tax-free monthly payment to veterans with service-connected injuries or illnesses. The <strong className="text-white">Department of Veterans Affairs (VA)</strong> assigns disability ratings from 0% to 100% based on how much your conditions impact your ability to work and function.
                    </p>
                    <p>
                        Over 5 million veterans currently receive VA disability compensation, with payments ranging from $175.51/month at 10% to $3,825.12/month at 100% for a single veteran. The 2022 <strong className="text-white">PACT Act</strong> significantly expanded eligibility for toxic exposure conditions, adding 23 new presumptive conditions and extending benefits to millions of additional veterans.
                    </p>
                    <p>
                        Unlike many government benefits, VA disability has no income limits?”you can work full-time and earn any amount while receiving compensation. Combined with the tax-free status, VA disability is one of the most valuable benefits available to veterans. The average veteran receives approximately $1,850/month.
                    </p>
                </div>
            </section>

            {/* Rates Table */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        2026 VA Disability Rates (Veteran Alone)
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {Object.entries(VA_RATES_2026.veteranOnly).map(([rating, amount]) => (
                            <div
                                key={rating}
                                className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 text-center hover:border-blue-500/30 transition-colors"
                            >
                                <p className="text-2xl font-black text-blue-400">{rating}%</p>
                                <p className="text-lg font-bold text-white mt-1">{formatCurrency(amount)}</p>
                                <p className="text-xs text-slate-400 mt-1">/month</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <p className="text-blue-300 text-sm">
                            <strong>Dependents:</strong> Veterans rated 30%+ receive additional compensation for spouses (up to $207/mo), children ($103/mo), and dependent parents ($158/mo at 100%).
                        </p>
                    </div>
                </div>
            </section>

            {/* VA Math Explainer */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    How "VA Math" Works
                </h2>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <p className="text-slate-300 mb-4">
                        The VA doesn't add ratings directly. Instead, each rating is applied to your <strong className="text-white">"remaining health."</strong>
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                        <p className="text-slate-400">Example: 50% + 30% + 20%</p>
                        <p className="text-blue-400 mt-2">Step 1: 50% of 100% = 50% disabled, 50% "healthy" remaining</p>
                        <p className="text-green-400">Step 2: 30% of 50% = 15% ??Total: 65%, 35% remaining</p>
                        <p className="text-amber-400">Step 3: 20% of 35% = 7% ??Total: 72%</p>
                        <p className="text-white mt-2 font-bold">Final: Rounded to nearest 10% = <span className="text-blue-400">70%</span></p>
                    </div>
                    <p className="text-slate-400 text-sm mt-4">
                        This is why two 30% ratings don't equal 60%?”they combine to approximately 51%, rounded to 50%.
                    </p>
                </div>
            </section>

            {/* Filing Tips */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Tips for Maximizing Your Claim
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Do This:</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>??File an Intent to File first (preserves effective date)</li>
                            <li>??Get a Nexus letter from a private doctor</li>
                            <li>??Use a VSO for free assistance</li>
                            <li>??Describe your worst days at C&P exams</li>
                            <li>??Claim secondary conditions (caused by primary)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-6">
                        <AlertTriangle className="w-8 h-8 text-red-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Avoid This:</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>??Missing C&P exams (claim will be denied)</li>
                            <li>??Downplaying symptoms to seem "tough"</li>
                            <li>??Filing without evidence</li>
                            <li>??Missing appeal deadlines</li>
                            <li>??Ignoring mental health conditions</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free VA Disability Tools
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

            {/* PACT Act Alert */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <Award className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-green-400 mb-2">PACT Act (2022) - Major Expansion</h3>
                            <p className="text-sm text-slate-300">
                                The PACT Act adds <strong className="text-white">23 presumptive conditions</strong> for toxic exposure, extends Agent Orange presumptions, and provides VA healthcare for combat veterans. If you were previously denied, your claim may now qualify under the PACT Act. File a supplemental claim referencing the new law.
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
                    <li>??U.S. Department of Veterans Affairs. "VA Disability Compensation Rates." VA.gov, December 2026.</li>
                    <li>??U.S. Department of Veterans Affairs. "Combined Ratings (38 CFR 4.25)." VA.gov.</li>
                    <li>??Congressional Research Service. "Veterans' Disability Compensation: Trends and Policy Options." CRS, 2024.</li>
                    <li>??Public Law 117-168. "Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics Act (PACT Act)." 117th Congress, 2022.</li>
                    <li>??Government Accountability Office. "VA Disability Benefits: Additional Planning Would Enhance Efforts to Address Claims Backlog." GAO-24-106328, 2024.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Estimate Your VA Compensation
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Use our calculator to see your potential monthly compensation based on your rating and dependents.
                </p>
                <Link
                    href="/va-disability/va-calculator"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Benefits
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="va-disability" count={5} />
            </section>
        </div>
    );
}
