"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    STATE_SR22,
    SR22_CONSTANTS_2026,
    calculateSR22Cost,
    formatCurrency,
    parseFormattedNumber,
    SR22Result
} from "@/lib/calculators/sr22";

export default function SR22CalculatorPage() {
    const [currentPremium, setCurrentPremium] = useState("");
    const [reason, setReason] = useState<keyof typeof SR22_CONSTANTS_2026.rateIncreases>("dui");
    const [state, setState] = useState<keyof typeof STATE_SR22>("california");
    const [result, setResult] = useState<SR22Result | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setCurrentPremium("");
            return;
        }
        setCurrentPremium(parseInt(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const premium = parseFormattedNumber(currentPremium) || 1500;
        setResult(calculateSR22Cost(premium, reason, state));
    };

    const reasonOptions = [
        { value: "dui", label: "DUI / DWI", increase: "80%" },
        { value: "reckless", label: "Reckless Driving", increase: "50%" },
        { value: "noInsurance", label: "No Insurance", increase: "30%" },
        { value: "atFault", label: "At-Fault Accident", increase: "40%" },
        { value: "license", label: "License Suspension", increase: "25%" },
    ];

    const stateOptions = Object.entries(STATE_SR22).map(([key, s]) => ({
        value: key,
        label: `${s.name} (${s.abbr})`,
    }));

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/sr22" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">SR-22 Calculator</span>
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
                        {SITE.year} SR-22 Insurance Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your SR-22 insurance cost increase
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Reason Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Reason for SR-22
                            </label>
                            <div className="grid grid-cols-1 gap-2">
                                {reasonOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setReason(opt.value as keyof typeof SR22_CONSTANTS_2026.rateIncreases)}
                                        className={`py-3 px-4 rounded-lg border font-medium transition flex justify-between items-center ${reason === opt.value
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-blue-500"
                                            }`}
                                    >
                                        <span>{opt.label}</span>
                                        <span className={`text-sm ${reason === opt.value ? "text-blue-200" : "text-red-400"}`}>
                                            +{opt.increase}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value as keyof typeof STATE_SR22)}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                            >
                                {stateOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                Filing Period: {STATE_SR22[state].filingPeriod} years | Min Liability: {STATE_SR22[state].minimumLiability}
                            </p>
                        </div>

                        {/* Current Premium */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Annual Premium (Before SR-22)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={currentPremium}
                                    onChange={handleInputChange}
                                    placeholder="1,500"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                If unsure, the national average is ~$1,500/year
                            </p>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate SR-22 Cost
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                            <p className="text-sm text-blue-100 mb-1">Your Estimated SR-22 Insurance Cost</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.newAnnualPremium)}/yr</p>
                            <p className="text-sm text-blue-100 mt-2">
                                {formatCurrency(result.monthlyPayment)}/month for {result.filingPeriodYears} years
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Cost Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Current Annual Premium</span>
                                    <span className="font-medium text-white">{formatCurrency(result.currentAnnualPremium)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">SR-22 Rate Increase ({result.reason})</span>
                                    <span className="font-medium text-red-400">+{formatCurrency(result.estimatedIncrease)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">New Annual Premium</span>
                                    <span className="font-medium text-white">{formatCurrency(result.newAnnualPremium)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">SR-22 Filing Fee (one-time)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.filingFee)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Filing Period ({result.state})</span>
                                    <span className="font-medium text-white">{result.filingPeriodYears} years</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Additional Cost</span>
                                    <span className="font-bold text-red-400">{formatCurrency(result.totalAdditionalCost)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Warning */}
                        <div className="p-4 bg-amber-900/30 border-t border-amber-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                                <p className="text-amber-200">
                                    <strong>Important:</strong> Any lapse in coverage during your SR-22 period will be reported to the DMV and can result in license suspension and restarting the filing period.
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
                        <Info className="w-5 h-5 text-blue-500" />
                        SR-22 Insurance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much does SR-22 insurance cost?
                            </h3>
                            <p className="text-slate-400">
                                The SR-22 form itself costs $15-50 to file. However, the real cost is the increased insurance premium, which can be 50-150% higher than normal rates depending on your violation.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long do I need SR-22?
                            </h3>
                            <p className="text-slate-400">
                                Most states require SR-22 for 3 years. Texas requires only 2 years. Any coverage lapse can restart the clock.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Which insurance companies offer SR-22?
                            </h3>
                            <p className="text-slate-400">
                                Major companies like State Farm, GEICO, Progressive, and Allstate offer SR-22. Specialty insurers like The General and Dairyland specialize in high-risk drivers.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can I get SR-22 without a car?
                            </h3>
                            <p className="text-slate-400">
                                Yes. Non-owner SR-22 insurance is available for people who need to file but don&apos;t own a vehicle. It&apos;s often cheaper than owner policies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} average rates.
                    Actual rates vary by insurance company. Get quotes from multiple insurers.
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
                                name: "How much does SR-22 insurance cost?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The SR-22 form costs $15-50 to file, but the insurance premium increase is typically 50-150% higher depending on your violation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long do I need SR-22?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most states require SR-22 for 3 years. Texas requires only 2 years. Any coverage lapse can restart the clock.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
