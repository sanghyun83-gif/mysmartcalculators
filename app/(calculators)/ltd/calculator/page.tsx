"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    LTD_CONSTANTS_2026,
    calculateLTD,
    formatCurrency,
    LTDResult
} from "@/lib/calculators/ltd";

export default function LTDCalculatorPage() {
    const [income, setIncome] = useState("");
    const [benefitPct, setBenefitPct] = useState(60);
    const [maxBenefit, setMaxBenefit] = useState(10000);
    const [eliminationDays, setEliminationDays] = useState(90);
    const [benefitYears, setBenefitYears] = useState(10);
    const [result, setResult] = useState<LTDResult | null>(null);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setIncome("");
            return;
        }
        setIncome(parseInt(raw).toLocaleString("en-US"));
    };

    const parseIncome = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        const monthlyIncome = parseIncome(income) || 5000;
        setResult(calculateLTD(monthlyIncome, benefitPct, maxBenefit, eliminationDays, benefitYears));
    };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} LTD Benefits Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your long term disability payout
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Monthly Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Monthly Pre-Disability Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={income}
                                    onChange={handleIncomeChange}
                                    placeholder="5,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Benefit Percentage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Benefit Percentage
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[60, 70, 80].map((pct) => (
                                    <button
                                        key={pct}
                                        type="button"
                                        onClick={() => setBenefitPct(pct)}
                                        className={`py-3 rounded-lg border transition ${benefitPct === pct
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-blue-500"
                                            }`}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Max Monthly Benefit */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Maximum Monthly Benefit Cap
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: 5000, label: "$5K" },
                                    { value: 10000, label: "$10K" },
                                    { value: 25000, label: "$25K" },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setMaxBenefit(opt.value)}
                                        className={`py-3 rounded-lg border transition ${maxBenefit === opt.value
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-blue-500"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Elimination Period */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Elimination Period (Waiting Period)
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {LTD_CONSTANTS_2026.eliminationPeriods.map((ep) => (
                                    <button
                                        key={ep.days}
                                        type="button"
                                        onClick={() => setEliminationDays(ep.days)}
                                        className={`py-3 rounded-lg border text-center transition ${eliminationDays === ep.days
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-blue-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{ep.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Benefit Duration */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Benefit Duration (Years)
                            </label>
                            <input
                                type="range"
                                min="2"
                                max="30"
                                value={benefitYears}
                                onChange={(e) => setBenefitYears(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>2 years</span>
                                <span className="text-blue-400">{benefitYears} years</span>
                                <span>30 years</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate LTD Benefits
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                            <p className="text-sm text-blue-100 mb-1">Estimated Monthly Benefit</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyBenefit)}</p>
                            <p className="text-sm text-blue-100 mt-2">
                                {result.incomeReplacement}% income replacement
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Benefit Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Monthly Benefit</span>
                                    <span className="font-medium text-white">{formatCurrency(result.monthlyBenefit)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Annual Benefit</span>
                                    <span className="font-medium text-white">{formatCurrency(result.annualBenefit)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Benefit Percentage</span>
                                    <span className="font-medium text-white">{result.benefitPercentage}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Waiting Period</span>
                                    <span className="font-medium text-white">{result.eliminationPeriod} days</span>
                                </div>
                                {result.maxBenefitApplied && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-amber-400">Max Cap Applied</span>
                                        <span className="font-medium text-amber-400">Yes</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Potential Benefits</span>
                                    <span className="font-bold text-blue-400">{formatCurrency(result.totalBenefitPotential)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Benefits are taxable if employer pays premiums, tax-free if you pay.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ Section */}
                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6 my-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-500" />
                        LTD FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is long term disability insurance?
                            </h3>
                            <p className="text-slate-400">
                                LTD insurance replaces a portion of your income if you become too
                                disabled to work for an extended period, typically after 90+ days.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much does LTD pay?
                            </h3>
                            <p className="text-slate-400">
                                Most policies pay 60% of your pre-disability income, up to a monthly
                                maximum (often $5,000-$10,000 for group plans).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What&apos;s the elimination period?
                            </h3>
                            <p className="text-slate-400">
                                The waiting period before benefits begin, typically 90-180 days.
                                Short term disability usually covers this gap.
                            </p>
                        </div>
                    </div>
                </section>

                <LegalDisclaimer category="insurance" />
            </main>
            {/* Schema.org FAQPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is long term disability insurance?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "LTD insurance replaces a portion of your income if you become too disabled to work for an extended period, typically after 90+ days.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How much does LTD pay?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most policies pay 60% of your pre-disability income, up to a monthly maximum.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
