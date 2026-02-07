"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    SCI_2026,
    calculateSCISettlement,
    formatCurrency,
    SCIResult
} from "@/lib/calculators/spinal-cord";

export default function SpinalCordCalculatorPage() {
    const [severityIndex, setSeverityIndex] = useState(3); // Default to Complete Paraplegia
    const [age, setAge] = useState("35");
    const [annualIncome, setAnnualIncome] = useState("65,000");
    const [medicalBills, setMedicalBills] = useState("250,000");
    const [isGrossNegligence, setIsGrossNegligence] = useState(false);
    const [result, setResult] = useState<SCIResult | null>(null);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setAnnualIncome(""); return; }
        setAnnualIncome(parseInt(raw).toLocaleString("en-US"));
    };

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setMedicalBills(""); return; }
        setMedicalBills(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const ageNum = parseInt(age) || 35;
        const incomeNum = parseVal(annualIncome);
        const medicalNum = parseVal(medicalBills);

        if (medicalNum > 0) {
            setResult(calculateSCISettlement(severityIndex, ageNum, incomeNum, medicalNum, isGrossNegligence));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/spinal-cord" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">SCI Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        Spinal Cord Injury Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your SCI settlement based on injury severity
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Injury Severity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Injury Severity Level
                            </label>
                            <select
                                value={severityIndex}
                                onChange={(e) => setSeverityIndex(parseInt(e.target.value))}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            >
                                {SCI_2026.severityLevels.map((level, index) => (
                                    <option key={index} value={index}>
                                        {level.level}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                {SCI_2026.severityLevels[severityIndex].description}
                            </p>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Age
                            </label>
                            <input
                                type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                        </div>

                        {/* Annual Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Annual Income (before injury)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={annualIncome}
                                    onChange={handleIncomeChange}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                                />
                            </div>
                        </div>

                        {/* Medical Bills */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Medical Bills to Date
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={medicalBills}
                                    onChange={handleMedicalChange}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                        </div>

                        {/* Gross Negligence */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="grossNegligence"
                                checked={isGrossNegligence}
                                onChange={(e) => setIsGrossNegligence(e.target.checked)}
                                className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-500 focus:ring-amber-500"
                            />
                            <label htmlFor="grossNegligence" className="text-sm text-slate-300">
                                Gross negligence or reckless conduct involved
                            </label>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">
                                {formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}
                            </p>
                            <p className="text-sm opacity-80 mt-2">
                                Mid-range: {formatCurrency(result.totalMid)}
                            </p>
                        </div>

                        {/* Severity Info */}
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700">
                            <div className="flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300">
                                    {result.severityLevel}
                                </span>
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medical Costs (Current + Future)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lifetime Care Costs</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lifetimeCare)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Wages (Future)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-slate-300">Pain & Suffering</span>
                                    <span className="font-medium text-amber-400">{formatCurrency(result.painSuffering)}</span>
                                </div>
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
                        SCI Settlement FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What affects SCI settlement value?
                            </h3>
                            <p className="text-slate-400">
                                Injury severity (level and completeness), lifetime care costs,
                                lost earning capacity, and the defendant&apos;s negligence level.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is lifetime care cost?
                            </h3>
                            <p className="text-slate-400">
                                Total estimated cost for medical care, equipment, home modifications,
                                and assistance needed for the rest of your life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {SCI_2026.citationNote}
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
                                name: "What affects spinal cord injury settlement value?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Injury severity (level and completeness), lifetime care costs, lost earning capacity, and the defendant's negligence level.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
