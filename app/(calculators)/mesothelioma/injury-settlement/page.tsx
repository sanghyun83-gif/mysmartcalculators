"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle, TrendingUp, DollarSign, Stethoscope } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    INJURY_CONSTANTS_2025,
    calculateSettlement,
    formatCurrency,
    parseFormattedNumber,
    getSeverityLabel,
    getSeverityColor,
    SettlementResult
} from "@/lib/calculators/mesothelioma";

export default function InjurySettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("moderate");
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
        const medical = parseFormattedNumber(medicalExpenses) || 10000;
        const wages = parseFormattedNumber(lostWages) || 0;
        setResult(calculateSettlement(medical, wages, severity, hasAttorney));
    };

    const severityOptions = [
        { value: "minor", label: "Stage 1", desc: "Localized tumor, best prognosis", multiplier: "1.5-3x" },
        { value: "moderate", label: "Stage 2", desc: "Spread to nearby tissue", multiplier: "3-5x" },
        { value: "severe", label: "Stage 3", desc: "Spread to lymph nodes", multiplier: "5-10x" },
        { value: "catastrophic", label: "Stage 4", desc: "Metastatic disease", multiplier: "10-25x" },
    ];

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Mesothelioma Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your mesothelioma settlement from asbestos lawsuits, trust funds, and VA benefits
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
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Include all medical bills, therapy, and future treatment costs
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
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Income lost due to injury, including future lost earning capacity
                            </p>
                        </div>

                        {/* Injury Severity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Injury Severity
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {severityOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setSeverity(opt.value as typeof severity)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${severity === opt.value
                                            ? "bg-amber-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs opacity-75">{opt.desc}</div>
                                        <div className="text-xs mt-1 text-emerald-300">{opt.multiplier}</div>
                                    </button>
                                ))}
                            </div>
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
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Settlement Value
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Settlement Value</p>
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
                                    <span className="text-slate-300">Pain & Suffering ({result.painSufferingMultiplier}x)</span>
                                    <span className="font-medium text-amber-400">+{formatCurrency(result.painSufferingAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-white font-medium">Total Before Fees</span>
                                    <span className="font-bold text-white">{formatCurrency(result.totalBeforeFees)}</span>
                                </div>
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
                                    This is an estimate. Actual settlements depend on liability, insurance limits, and case specifics.
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
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average mesothelioma settlement?
                            </h3>
                            <p className="text-slate-400">
                                Mesothelioma lawsuit settlements average $1 million to $2.4 million. Trust fund claims average $50,000-$400,000 per fund. Many patients qualify for multiple trust funds, increasing total compensation.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How many asbestos trust funds can I claim from?
                            </h3>
                            <p className="text-slate-400">
                                There are 60+ active asbestos bankruptcy trusts with over $30 billion available. Most mesothelioma patients qualify for claims from 3-10 different trusts based on their exposure history.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Do veterans get mesothelioma compensation?
                            </h3>
                            <p className="text-slate-400">
                                Yes. Veterans exposed to asbestos during military service can receive VA disability benefits. Mesothelioma qualifies for 100% disability rating, providing $4,100+/month in compensation.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long do mesothelioma settlements take?
                            </h3>
                            <p className="text-slate-400">
                                Trust fund claims typically take 3-6 months. Lawsuits may take 12-18 months but often settle faster due to expedited court programs for mesothelioma patients.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/mesothelioma/injury-types"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View Compensation by Mesothelioma Type →
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} mesothelioma settlement data.
                    Every case is unique. Consult with a mesothelioma attorney for accurate case evaluation.
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
                                name: "What is the average mesothelioma settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Mesothelioma lawsuit settlements average $1 million to $2.4 million. Trust fund claims average $50,000-$400,000 per fund.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many asbestos trust funds can I claim from?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "There are 60+ active asbestos bankruptcy trusts with over $30 billion available. Most patients qualify for 3-10 different trusts.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
