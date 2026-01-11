"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, DollarSign, Info, AlertCircle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    SETTLEMENT_CONSTANTS,
    calculatePainSuffering,
    formatCurrency,
    parseFormattedNumber,
    getInjuryTypes,
    PainSufferingResult
} from "@/lib/calculators/truck-accident";

export default function PainSufferingPage() {
    const [medicalBills, setMedicalBills] = useState("");
    const [injuryType, setInjuryType] = useState("whiplash");
    const [result, setResult] = useState<PainSufferingResult | null>(null);

    const injuryTypes = getInjuryTypes();

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
        const medical = parseFormattedNumber(medicalBills) || 5000;
        setResult(calculatePainSuffering(medical, injuryType as keyof typeof SETTLEMENT_CONSTANTS.injuryTypes));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/truck-accident" className="text-slate-400 hover:text-red-600 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Scale className="w-5 h-5 text-red-600" />
                        <span className="text-lg font-bold text-slate-800">Pain & Suffering Calculator</span>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Truck Accident Pain & Suffering Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Calculate non-economic damages for 18-wheeler and commercial truck injuries
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Medical Bills */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Total Medical Bills
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={medicalBills}
                                    onChange={handleInputChange(setMedicalBills)}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        {/* Injury Type */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Type of Injury
                            </label>
                            <select
                                value={injuryType}
                                onChange={(e) => setInjuryType(e.target.value)}
                                className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500"
                            >
                                {injuryTypes.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.label} ({type.multiplier}x multiplier)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                    >
                        <Scale className="w-5 h-5" />
                        Calculate Pain & Suffering
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                            <p className="text-sm text-green-100 mb-1">Estimated Pain & Suffering</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.painSufferingAmount)}</p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                Breakdown
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Medical Bills</span>
                                    <span className="font-medium">{formatCurrency(result.medicalBills)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Injury Type</span>
                                    <span className="font-medium">{result.injuryType}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Multiplier</span>
                                    <span className="font-medium">{result.multiplier}x</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Recovery Period</span>
                                    <span className="font-medium">{result.recoveryWeeks} weeks</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Daily Rate</span>
                                    <span className="font-medium">{formatCurrency(result.dailyRate)}/day</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg border-t-2 border-slate-200">
                                    <span className="font-bold">Pain & Suffering</span>
                                    <span className="font-bold text-green-600">{formatCurrency(result.painSufferingAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* Info */}
                <section className="bg-white rounded-xl border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">
                        The Multiplier Method
                    </h2>
                    <p className="text-sm text-slate-600 mb-4">
                        Insurance companies often use the &quot;multiplier method&quot; to calculate pain and suffering:
                    </p>
                    <div className="bg-slate-100 rounded-lg p-4 text-center">
                        <p className="text-lg font-mono font-bold text-slate-800">
                            Pain & Suffering = Medical Bills × Multiplier
                        </p>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">
                        Multipliers typically range from 1.5x for minor injuries to 5x+ for severe injuries.
                    </p>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/truck-accident/settlement-calculator"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Calculate Full Settlement →
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <p className="text-xs text-red-800">
                            <strong>Disclaimer:</strong> This is an estimate only. Not legal advice.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
