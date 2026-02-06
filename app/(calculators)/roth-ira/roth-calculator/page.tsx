"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    ROTH_2026,
    calculateRoth,
    formatCurrency,
    RothResult
} from "@/lib/calculators/roth-ira";

export default function RothCalculatorPage() {
    const [currentAge, setCurrentAge] = useState("30");
    const [retirementAge, setRetirementAge] = useState("65");
    const [contribution, setContribution] = useState("7,000");
    const [currentBalance, setCurrentBalance] = useState("");
    const [returnRate, setReturnRate] = useState("7");
    const [result, setResult] = useState<RothResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateRoth(
            parseInt(currentAge),
            parseInt(retirementAge),
            parseVal(contribution),
            parseVal(currentBalance),
            parseFloat(returnRate)
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/roth-ira" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Roth IRA Calculator</span>
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
                        {SITE.year} Roth IRA Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Project your tax-free retirement growth
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Ages */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Current Age
                                </label>
                                <input
                                    type="number"
                                    value={currentAge}
                                    onChange={(e) => setCurrentAge(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Retirement Age
                                </label>
                                <input
                                    type="number"
                                    value={retirementAge}
                                    onChange={(e) => setRetirementAge(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Annual Contribution */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Annual Contribution
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={contribution}
                                    onChange={handleChange(setContribution)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                {SITE.year} max: {formatCurrency(ROTH_2026.contributionLimit)} (+{formatCurrency(ROTH_2026.catchUpContribution)} if 50+)
                            </p>
                        </div>

                        {/* Quick Contribution */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[3000, 5000, 7000, 8000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setContribution(amount.toLocaleString("en-US"))}
                                        className={`py-2 rounded-lg text-sm transition ${amount === 7000 ? 'bg-emerald-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'}`}
                                    >
                                        ${amount.toLocaleString()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Current Balance */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Roth IRA Balance (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={currentBalance}
                                    onChange={handleChange(setCurrentBalance)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Expected Return */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Expected Annual Return: <span className="text-emerald-400 font-bold">{returnRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="4"
                                max="12"
                                value={returnRate}
                                onChange={(e) => setReturnRate(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>4% (Conservative)</span>
                                <span>12% (Aggressive)</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Growth
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Projected Value at {result.retirementAge}</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.futureValue)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                Tax-free ??{result.retirementAge - result.currentAge} years of growth
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Growth Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Contributions</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalContributions)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Investment Growth</span>
                                    <span className="font-medium text-emerald-400">+{formatCurrency(result.totalGrowth)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Est. Tax Savings (vs taxable)</span>
                                    <span className="font-medium text-green-400">{formatCurrency(result.taxSavings)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Final Value</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.futureValue)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tax-Free Note */}
                        <div className="p-4 bg-emerald-900/20 border-t border-emerald-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-emerald-400 mt-0.5" />
                                <p className="text-emerald-200">
                                    All {formatCurrency(result.futureValue)} is <strong>tax-free</strong> if withdrawn after 59½ and 5-year rule is met.
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
                        Roth IRA FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What makes Roth IRA special?
                            </h3>
                            <p className="text-slate-400">
                                Contributions are after-tax, but all growth and withdrawals are tax-free in retirement.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When can I withdraw?
                            </h3>
                            <p className="text-slate-400">
                                After age 59½ and 5 years since first contribution. Contributions (not growth) can be
                                withdrawn anytime penalty-free.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate based on assumed returns. Consult a financial advisor.
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
                                name: "What makes Roth IRA special?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Roth IRA contributions are after-tax, but all growth and withdrawals are tax-free in retirement.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
