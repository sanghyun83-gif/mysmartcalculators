"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, SSDI_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/ssdi";
import {
    ArrowRight, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Clock, DollarSign, Shield, Users
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is SSDI back pay?",
        a: "SSDI back pay is the retroactive disability benefits you're owed from the time you became disabled (or 5 months after) until your claim is approved. Because SSDI claims take months or years to process, approved claimants receive a lump sum covering missed monthly payments. The average back pay is around $27,700."
    },
    {
        q: "How is SSDI back pay calculated?",
        a: "Back pay = Monthly benefit × Months owed (from end of 5-month waiting period to approval). Example: $1,500/month benefit × 18 months waiting = $27,000 back pay. Subtract 25% (max $7,200) for attorney fees if applicable. Retroactive pay (up to 12 months before application) may add more."
    },
    {
        q: "What is the 5-month waiting period?",
        a: "Federal law requires a 5-month waiting period before SSDI benefits begin. Your first benefit payment is for the 6th full month after your established onset date. Example: If your onset date is January 1, your first payable month is July 1. This waiting period cannot be waived, even for severe disabilities."
    },
    {
        q: "What's the difference between retroactive pay and back pay?",
        a: "Retroactive benefits cover up to 12 months BEFORE your application date (if onset was 17+ months prior). Back pay covers the period FROM your application to approval. Together they can represent 2+ years of benefits. Both are paid as a lump sum upon approval."
    },
    {
        q: "How long does it take to get SSDI approved?",
        a: "Average timeline: Initial decision: 6 months (22% approval). Reconsideration: 4 months (13% approval). ALJ Hearing: 12 months wait + decision (54% approval). Total average: 18-24 months from application to final decision. Many claims require multiple appeals before approval."
    },
    {
        q: "What percentage does an SSDI attorney take?",
        a: "SSDI attorney fees are regulated by SSA: 25% of back pay OR $7,200 maximum (whichever is less). Example: $40,000 back pay = $7,200 fee (not $10,000). Attorney fees come from your back pay—you pay nothing upfront. SSA pays the attorney directly from your lump sum."
    },
    {
        q: "Do I need an attorney for SSDI?",
        a: "Statistics show representation helps: Claimants with attorneys are 3x more likely to win at hearings. Attorneys understand medical evidence requirements, help obtain records, and prepare for ALJ hearings. Since fees only apply if you win, there's little financial risk. Most successful claimants have representation."
    },
    {
        q: "What is the maximum SSDI benefit in 2026?",
        a: "The maximum SSDI benefit for 2026 is approximately $3,822/month. However, your actual benefit depends on your lifetime earnings and work history. The average SSDI payment is about $1,537/month. Use your SSA statement (my Social Security) for your personalized estimate."
    },
    {
        q: "What is an 'onset date' for SSDI?",
        a: "Your onset date is when SSA determines your disability began—the date you became unable to work due to your medical condition. This date affects your back pay calculation. It can be: alleged onset (what you claim), amended onset (modified during process), or established onset (final SSA determination)."
    },
    {
        q: "Can I work while receiving SSDI?",
        a: "Limited work is possible: Trial Work Period (9 months): Earn any amount while keeping full benefits. Extended eligibility (36 months): Benefits continue if under SGA ($1,550/month in 2026). Expedited reinstatement: If benefits stop due to work but you can't continue, quick restart available. Report all work to SSA."
    },
    {
        q: "What medical conditions qualify for SSDI?",
        a: "Any condition that prevents 'substantial gainful activity' (SGA) for 12+ months may qualify. SSA maintains a 'Blue Book' of qualifying conditions. Common approvals: musculoskeletal disorders, mental health conditions, cardiovascular issues, cancer, neurological disorders. Severity and functional limitations matter more than diagnosis."
    },
    {
        q: "What is the difference between SSDI and SSI?",
        a: "SSDI (Social Security Disability Insurance): Based on work history/tax contributions. No income/asset limits. Medicare after 24 months. SSI (Supplemental Security Income): Need-based, no work history required. Strict income/asset limits ($2,000 individual). Medicaid immediately. You may qualify for both."
    },
    {
        q: "Will I get Medicare with SSDI?",
        a: "Yes, but there's a 24-month waiting period from your first SSDI benefit. Once eligible, you get Medicare Parts A and B. Some states offer Medicaid during the waiting period. If you have a qualifying condition (ALS, ESRD), Medicare may begin sooner. Medicare premiums may be deducted from your SSDI."
    },
    {
        q: "How is back pay paid out?",
        a: "Usually as a lump sum within 60 days of approval. Large amounts (over 3× monthly benefit) may be paid in installments over 6-month periods to protect SSI recipients. Attorney fees and any overpayments are deducted first. Direct deposit is fastest; paper checks take longer."
    },
    {
        q: "What if my SSDI claim is denied?",
        a: "You have 60 days to appeal each denial. Appeal levels: Reconsideration (new reviewer), ALJ Hearing (best chance for reversal), Appeals Council, Federal Court. Approval rates increase at hearing level (54%). Most successful claims involve at least one appeal. Don't give up—get legal help if denied."
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
                                <ChevronUp className="w-5 h-5 text-violet-400 flex-shrink-0" />
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

export default function SSDIHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-violet-400" />
                        <span className="text-sm text-violet-300 font-semibold">2026 SSA Rates</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        SSDI Back Pay <span className="text-violet-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate your Social Security Disability back pay, retroactive benefits, and attorney fees.
                        Estimate your lump sum payment for {SITE.year}.
                    </p>

                    <Link
                        href="/ssdi/calculator"
                        className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-violet-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Back Pay
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-violet-400">{formatCurrency(SSDI_CONSTANTS_2026.statistics.avgBackPayAmount)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Back Pay</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{formatCurrency(SSDI_CONSTANTS_2026.avgMonthlyBenefit)}/mo</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Monthly</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{SSDI_CONSTANTS_2026.processingTimes.totalAverage} mo</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Wait Time</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{SSDI_CONSTANTS_2026.statistics.approvalRateHearing}%</p>
                            <p className="text-xs text-slate-400 mt-1">Hearing Approval</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding SSDI Back Pay */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding SSDI Back Pay
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">SSDI back pay</strong> is the lump sum payment of disability benefits you're owed for the period between when you became disabled and when your claim was approved. Because the SSDI application process often takes 1-3 years, approved claimants may receive substantial back payments.
                    </p>
                    <p>
                        According to the <strong className="text-white">Social Security Administration (SSA)</strong>, over 1.1 million disability claims are pending at any time, with average processing times of 6-22 months depending on appeal level. The SSA reports an average back pay of approximately ${SSDI_CONSTANTS_2026.statistics.avgBackPayAmount.toLocaleString()}.
                    </p>
                    <p>
                        Back pay begins <strong className="text-white">5 months after your onset date</strong> (the federally mandated waiting period) and continues until approval. Additionally, you may receive <strong className="text-white">retroactive benefits</strong> for up to 12 months before your application date if your onset was 17+ months prior to approval.
                    </p>
                </div>
            </section>

            {/* Approval Rates */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        SSDI Approval Rates by Stage
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-red-500/30 text-center">
                            <p className="text-2xl font-black text-red-400">{SSDI_CONSTANTS_2026.statistics.approvalRateInitial}%</p>
                            <p className="text-white font-bold mt-2">Initial</p>
                            <p className="text-xs text-slate-400 mt-1">~6 months</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-yellow-500/30 text-center">
                            <p className="text-2xl font-black text-yellow-400">13%</p>
                            <p className="text-white font-bold mt-2">Reconsideration</p>
                            <p className="text-xs text-slate-400 mt-1">+4 months</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-green-500/30 text-center">
                            <p className="text-2xl font-black text-green-400">{SSDI_CONSTANTS_2026.statistics.approvalRateHearing}%</p>
                            <p className="text-white font-bold mt-2">ALJ Hearing</p>
                            <p className="text-xs text-slate-400 mt-1">+12 months</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 text-center">
                            <p className="text-2xl font-black text-slate-400">~65%</p>
                            <p className="text-white font-bold mt-2">Overall</p>
                            <p className="text-xs text-slate-400 mt-1">With appeals</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        <p className="text-violet-300 text-sm">
                            <strong>Key Insight:</strong> Most successful claims require at least one appeal. The ALJ hearing stage has the highest approval rate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Attorney Fees */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Attorney Fees for SSDI
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-violet-500/30 rounded-xl p-6">
                        <DollarSign className="w-8 h-8 text-violet-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Fee Structure (SSA Regulated)</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>• 25% of back pay (standard rate)</li>
                            <li>• Maximum cap: ${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()}</li>
                            <li>• Paid only if you WIN</li>
                            <li>• SSA pays attorney directly from your back pay</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">Example Calculation</h3>
                        <div className="text-sm text-slate-300 space-y-2">
                            <p><strong className="text-white">Back pay:</strong> $40,000</p>
                            <p><strong className="text-white">25% fee:</strong> $10,000</p>
                            <p><strong className="text-white">Cap applies:</strong> $7,200 max</p>
                            <p className="text-green-400 font-bold">You receive: $32,800</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free SSDI Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-violet-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-violet-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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
                    <li>• Social Security Administration. "Disability Benefits." SSA Publication 05-10029, 2026.</li>
                    <li>• Social Security Administration. "Understanding Supplemental Security Income SSI Benefits." SSA.gov.</li>
                    <li>• Social Security Administration. "Monthly Statistical Snapshot." SSA OASDI, 2026.</li>
                    <li>• Social Security Administration. "Attorney Fees for Representing Social Security Claimants." 20 CFR 404.1720.</li>
                    <li>• Government Accountability Office. "SSA Disability Programs: Comprehensive Evaluation Needed." GAO Report, 2024.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Estimate Your SSDI Back Pay
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    See how much you could receive in disability back payments.
                </p>
                <Link
                    href="/ssdi/calculator"
                    className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-violet-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Back Pay
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="ssdi" count={5} />
            </section>
        </div>
    );
}
