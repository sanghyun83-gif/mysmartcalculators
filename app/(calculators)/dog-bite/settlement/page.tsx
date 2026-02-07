"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Dog, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    DOG_BITE_CONSTANTS_2026,
    calculateDogBiteSettlement,
    formatCurrency,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/dog-bite";

export default function DogBiteSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [scarringPercent, setScarringPercent] = useState(0);
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("moderate");
    const [hasAttorney, setHasAttorney] = useState(true);
    const [isChild, setIsChild] = useState(false);
    const [result, setResult] = useState<SettlementResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const medical = parseFormattedNumber(medicalExpenses) || 5000;
        const wages = parseFormattedNumber(lostWages) || 0;
        setResult(calculateDogBiteSettlement(medical, wages, scarringPercent, severity, hasAttorney, isChild));
    };

    const severityOptions = [
        { value: "minor", label: "Minor", desc: "No scarring", range: "$5K-$15K" },
        { value: "moderate", label: "Moderate", desc: "Some scarring", range: "$15K-$50K" },
        { value: "severe", label: "Severe", desc: "Surgery needed", range: "$50K-$200K" },
        { value: "catastrophic", label: "Catastrophic", desc: "Disfigurement", range: "$200K-$1M+" },
    ];

    return (
        <>
            {/* Header */}


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Dog Bite Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your dog bite settlement based on injury severity and scarring
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Medical Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Medical Expenses
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={medicalExpenses}
                                    onChange={handleInputChange(setMedicalExpenses)}
                                    placeholder="5,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                ER, stitches, surgery, rabies shots, plastic surgery, therapy
                            </p>
                        </div>

                        {/* Lost Wages */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lost Wages (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={lostWages}
                                    onChange={handleInputChange(setLostWages)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                        </div>

                        {/* Scarring */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Permanent Scarring: {scarringPercent}% of visible skin
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={scarringPercent}
                                onChange={(e) => setScarringPercent(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>No scarring</span>
                                <span>Significant scarring</span>
                            </div>
                        </div>

                        {/* Bite Severity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Bite Severity
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {severityOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setSeverity(opt.value as typeof severity)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${severity === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs opacity-75">{opt.desc}</div>
                                        <div className="text-xs mt-1 text-amber-300">{opt.range}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Child Victim Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Child Victim (Under 18)?</p>
                                <p className="text-xs text-slate-400">Children receive higher settlements</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsChild(!isChild)}
                                className={`w-14 h-8 rounded-full transition-colors ${isChild ? "bg-amber-600" : "bg-slate-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${isChild ? "translate-x-6" : "translate-x-0"
                                    }`} />
                            </button>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using an Attorney?</p>
                                <p className="text-xs text-slate-400">Attorney fees: 33% of settlement</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasAttorney(!hasAttorney)}
                                className={`w-14 h-8 rounded-full transition-colors ${hasAttorney ? "bg-amber-600" : "bg-slate-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${hasAttorney ? "translate-x-6" : "translate-x-0"
                                    }`} />
                            </button>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Dog Bite Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Dog Bite Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netSettlement)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medical Expenses</span>
                                    <span className="font-medium text-white">{formatCurrency(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Wages</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pain & Suffering ({result.painSufferingMultiplier.toFixed(1)}x)</span>
                                    <span className="font-medium text-amber-400">+{formatCurrency(result.painSufferingAmount)}</span>
                                </div>
                                {result.scarringBonus > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Scarring/Disfigurement</span>
                                        <span className="font-medium text-amber-400">+{formatCurrency(result.scarringBonus)}</span>
                                    </div>
                                )}
                                {result.attorneyFees > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Attorney Fees (33%)</span>
                                        <span className="font-medium text-red-400">-{formatCurrency(result.attorneyFees)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Your Net Settlement</span>
                                    <span className="font-bold text-amber-400">{formatCurrency(result.netSettlement)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Most states have strict liability laws - dog owners are responsible for bites regardless of breed or prior behavior.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* FAQ Section */}
                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-amber-500" />
                        Dog Bite Settlement FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average dog bite settlement?
                            </h3>
                            <p className="text-slate-400">
                                According to the Insurance Information Institute, the average dog bite liability claim payout is ${DOG_BITE_CONSTANTS_2026.statistics.avgClaimPayout.toLocaleString()}. Minor bites settle for $5,000-$15,000, while severe attacks can exceed $500,000.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Does homeowner&apos;s insurance cover dog bites?
                            </h3>
                            <p className="text-slate-400">
                                Yes, most homeowner&apos;s and renter&apos;s insurance policies cover dog bite liability up to the policy limit (typically $100K-$300K). Some breeds may be excluded.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What if the dog has never bitten anyone before?
                            </h3>
                            <p className="text-slate-400">
                                In strict liability states (~36 states), the owner is liable regardless of the dog&apos;s history. In &quot;one-bite rule&quot; states, you may need to prove the owner knew the dog was dangerous.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Why do children get higher settlements?
                            </h3>
                            <p className="text-slate-400">
                                Children are more vulnerable and 77% of child bites are to the face. Facial scarring on a child has lifelong psychological and cosmetic impacts, leading to higher pain & suffering awards.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} industry data.
                    Every case is unique. Consult with a dog bite attorney for accurate case evaluation.
                </p>
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
                                name: "What is the average dog bite settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: `The average dog bite liability claim payout is $${DOG_BITE_CONSTANTS_2026.statistics.avgClaimPayout.toLocaleString()}. Settlements range from $5,000 for minor bites to over $500,000 for severe attacks.`,
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Does homeowner's insurance cover dog bites?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, most homeowner's and renter's insurance policies cover dog bite liability up to the policy limit, typically $100K-$300K.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
