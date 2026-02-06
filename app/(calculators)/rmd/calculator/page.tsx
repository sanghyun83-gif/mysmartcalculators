"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingDown, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    RMD_2026,
    calculateRMD,
    formatCurrency,
    RMDResult
} from "@/lib/calculators/rmd";

export default function RMDCalculatorPage() {
    const [balance, setBalance] = useState("");
    const [age, setAge] = useState("73");
    const [result, setResult] = useState<RMDResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateRMD(parseVal(balance), parseInt(age)));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/rmd" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">RMD Calculator</span>
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
                        {SITE.year} RMD Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your Required Minimum Distribution
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Account Balance */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total IRA/401(k) Balance (Dec 31 prior year)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={balance}
                                    onChange={handleChange(setBalance)}
                                    placeholder="500,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Use your account balance as of December 31 of last year
                            </p>
                        </div>

                        {/* Quick Balance Examples */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick examples:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[250000, 500000, 750000, 1000000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setBalance(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount >= 1000000 ? `${amount / 1000000}M` : `${amount / 1000}K`}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Age This Year: <span className="text-emerald-400 font-bold">{age}</span>
                            </label>
                            <input
                                type="range"
                                min="72"
                                max="100"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>72</span>
                                <span>85</span>
                                <span>100</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate RMD
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">{SITE.year} Required Minimum Distribution</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.rmdAmount)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {formatCurrency(result.monthlyEquivalent)}/month ??Due: {result.deadline}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Account Balance</span>
                                    <span className="font-medium text-white">{formatCurrency(result.accountBalance)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Your Age</span>
                                    <span className="font-medium text-white">{result.age}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Distribution Factor (IRS Table)</span>
                                    <span className="font-medium text-emerald-400">{result.distributionFactor}</span>
                                </div>
                                <div className="pt-4 text-xs text-slate-400 bg-slate-700/50 rounded-lg p-3">
                                    <strong>Formula:</strong> RMD = ${result.accountBalance.toLocaleString()} ÷ {result.distributionFactor} = {formatCurrency(result.rmdAmount)}
                                </div>
                            </div>
                        </div>

                        {/* Penalty Warning */}
                        <div className="p-4 bg-red-900/20 border-t border-red-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-red-400 mt-0.5" />
                                <p className="text-red-200">
                                    Missed RMD penalty: <strong>{RMD_2026.missedPenalty}%</strong> of shortfall ({RMD_2026.correctedPenalty}% if corrected timely)
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        RMD FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When do RMDs start?
                            </h3>
                            <p className="text-slate-400">
                                Under SECURE 2.0, RMDs start at age 73 for those born 1951-1959,
                                and age 75 for those born 1960 or later.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What&apos;s the deadline?
                            </h3>
                            <p className="text-slate-400">
                                First RMD: April 1 of the year after turning 73.
                                All subsequent RMDs: December 31.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Consult a tax professional for advice.
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
                                name: "When do RMDs start?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Under SECURE 2.0, RMDs start at age 73 for those born 1951-1959, and age 75 for those born 1960 or later.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
