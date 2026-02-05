"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Baby, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    BIRTH_INJURIES,
    calculateBirthInjurySettlement,
    formatCurrency,
    formatCurrencyFull,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/birth-injury";

export default function BirthInjurySettlementPage() {
    const [currentMedical, setCurrentMedical] = useState("");
    const [futureCare, setFutureCare] = useState("");
    const [lostEarning, setLostEarning] = useState("");
    const [injuryType, setInjuryType] = useState<keyof typeof BIRTH_INJURIES>("cerebralPalsy");
    const [hasAttorney, setHasAttorney] = useState(true);
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
        const medical = parseFormattedNumber(currentMedical) || 100000;
        const future = parseFormattedNumber(futureCare) || 500000;
        const earning = parseFormattedNumber(lostEarning) || 300000;
        setResult(calculateBirthInjurySettlement(medical, future, earning, injuryType, hasAttorney));
    };

    const injuryOptions = Object.entries(BIRTH_INJURIES).map(([key, injury]) => ({
        value: key,
        label: injury.name,
        severity: injury.severity,
        range: `${formatCurrency(injury.avgSettlement.min)} - ${formatCurrency(injury.avgSettlement.max)}`,
    }));

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Birth Injury Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your child&apos;s birth injury malpractice settlement
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Injury Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Type of Birth Injury
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {injuryOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setInjuryType(opt.value as keyof typeof BIRTH_INJURIES)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${injuryType === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs mt-1 text-amber-300">{opt.range}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Current Medical Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Medical Expenses
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={currentMedical}
                                    onChange={handleInputChange(setCurrentMedical)}
                                    placeholder="100,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                NICU, surgeries, therapies, equipment to date
                            </p>
                        </div>

                        {/* Future Care Costs */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Estimated Lifetime Care Costs
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={futureCare}
                                    onChange={handleInputChange(setFutureCare)}
                                    placeholder="1,000,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Ongoing therapy, equipment, home modifications, caregiving
                            </p>
                        </div>

                        {/* Lost Earning Capacity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lost Earning Capacity
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={lostEarning}
                                    onChange={handleInputChange(setLostEarning)}
                                    placeholder="500,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Estimated lifetime earnings child will be unable to earn
                            </p>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using a Birth Injury Attorney?</p>
                                <p className="text-xs text-slate-400">33% contingency + ~$50K expert witness costs</p>
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
                        Calculate Birth Injury Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Birth Injury Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrencyFull(result.netSettlement)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                Typical Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Current Medical Expenses</span>
                                    <span className="font-medium text-white">{formatCurrencyFull(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lifetime Care Costs</span>
                                    <span className="font-medium text-white">{formatCurrencyFull(result.futureCareCost)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Earning Capacity</span>
                                    <span className="font-medium text-white">{formatCurrencyFull(result.lostEarningCapacity)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pain & Suffering</span>
                                    <span className="font-medium text-amber-400">+{formatCurrencyFull(result.painSuffering)}</span>
                                </div>
                                {result.attorneyFees > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Attorney Fees (33%)</span>
                                        <span className="font-medium text-red-400">-{formatCurrencyFull(result.attorneyFees)}</span>
                                    </div>
                                )}
                                {result.expertWitnessFees > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Expert Witness Costs</span>
                                        <span className="font-medium text-red-400">-{formatCurrencyFull(result.expertWitnessFees)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Your Net Settlement</span>
                                    <span className="font-bold text-amber-400">{formatCurrencyFull(result.netSettlement)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Birth injury cases often result in structured settlements that provide ongoing payments for lifetime care rather than a single lump sum.
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
                        Birth Injury Settlement FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average birth injury settlement?
                            </h3>
                            <p className="text-slate-400">
                                Birth injury settlements range from $500,000 for minor injuries to $10-15 million for severe cases like cerebral palsy or permanent brain damage. The average is around $1 million.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long do birth injury cases take?
                            </h3>
                            <p className="text-slate-400">
                                Birth injury lawsuits typically take 2-4 years to resolve. Cases often require extensive medical expert testimony and complex causation analysis.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the statute of limitations?
                            </h3>
                            <p className="text-slate-400">
                                Most states have a 2-3 year statute of limitations, but many extend this for minors until they reach age 18-21. Evidence should be preserved immediately.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Will I need expert witnesses?
                            </h3>
                            <p className="text-slate-400">
                                Yes. Birth injury cases require medical expert testimony to prove the standard of care was breached. Expert costs typically range from $25,000-$100,000.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} data.
                    Every case is unique. Consult with a birth injury attorney for accurate evaluation.
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
                                name: "What is the average birth injury settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Birth injury settlements range from $500,000 for minor injuries to $10-15 million for severe cases like cerebral palsy. The average is around $1 million.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long do birth injury cases take?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Birth injury lawsuits typically take 2-4 years to resolve due to complex medical expert testimony requirements.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
