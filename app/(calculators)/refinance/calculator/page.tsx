"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Calculator, Info, Clock, TrendingDown } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    REFINANCE_2026,
    calculateRefinance,
    formatCurrency,
    RefinanceResult
} from "@/lib/calculators/refinance";

export default function RefinanceCalculatorPage() {
    const [balance, setBalance] = useState("300,000");
    const [currentRate, setCurrentRate] = useState("7.5");
    const [termRemaining, setTermRemaining] = useState("300"); // months
    const [newRate, setNewRate] = useState("6.5");
    const [newTerm, setNewTerm] = useState(360);
    const [result, setResult] = useState<RefinanceResult | null>(null);

    const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setBalance(""); return; }
        setBalance(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const parseFloat2 = (val: string) => parseFloat(val) || 0;

    const handleCalculate = () => {
        const balanceNum = parseVal(balance);
        const currentRateNum = parseFloat2(currentRate);
        const termRemainingNum = parseInt(termRemaining) || 300;
        const newRateNum = parseFloat2(newRate);

        if (balanceNum > 0 && currentRateNum > 0 && newRateNum > 0) {
            setResult(calculateRefinance(balanceNum, currentRateNum, termRemainingNum, newRateNum, newTerm));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/refinance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Refinance Calculator</span>
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
                        Calculate Refinance Savings
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Compare your current mortgage to a new refinanced loan
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Current Loan Balance */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Loan Balance
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={balance}
                                    onChange={handleBalanceChange}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Current Rate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Interest Rate (%)
                            </label>
                            <input
                                type="text"
                                value={currentRate}
                                onChange={(e) => setCurrentRate(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                        </div>

                        {/* Term Remaining */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Months Remaining on Current Loan
                            </label>
                            <input
                                type="text"
                                value={termRemaining}
                                onChange={(e) => setTermRemaining(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                        </div>

                        {/* New Rate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                New Interest Rate (%)
                            </label>
                            <input
                                type="text"
                                value={newRate}
                                onChange={(e) => setNewRate(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Current avg: {REFINANCE_2026.rates.avg30Year}% (30-yr)
                            </p>
                        </div>

                        {/* New Loan Term */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                New Loan Term
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { months: 180, label: "15 Years" },
                                    { months: 240, label: "20 Years" },
                                    { months: 360, label: "30 Years" },
                                ].map((term) => (
                                    <button
                                        key={term.months}
                                        type="button"
                                        onClick={() => setNewTerm(term.months)}
                                        className={`py-3 rounded-lg border transition ${newTerm === term.months
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {term.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Savings
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`bg-gradient-to-r ${result.monthlySavings > 0 ? 'from-emerald-600 to-teal-600' : 'from-orange-600 to-red-600'} text-white p-6 text-center`}>
                            <p className="text-sm opacity-80 mb-1">Monthly Savings</p>
                            <p className="text-5xl font-bold">
                                {result.monthlySavings > 0 ? formatCurrency(result.monthlySavings) : '$0'}
                            </p>
                            {result.monthlySavings <= 0 && (
                                <p className="text-sm opacity-80 mt-2">Refinancing may not save you money</p>
                            )}
                        </div>

                        {/* Break-Even */}
                        {result.monthlySavings > 0 && (
                            <div className="bg-emerald-900/30 p-4 border-b border-slate-700">
                                <div className="flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4 text-emerald-400" />
                                    <span className="text-emerald-300">
                                        Break-Even: <strong>{Math.floor(result.breakEvenMonths / 12)} years {result.breakEvenMonths % 12} months</strong>
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Current Payment</span>
                                    <span className="font-medium text-white">{formatCurrency(result.currentPayment)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">New Payment</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.newPayment)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Closing Costs (3%)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.closingCosts)}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-slate-300 font-bold">Lifetime Interest Saved</span>
                                    <span className="font-bold text-emerald-400">
                                        {result.lifetimeInterestSaved > 0 ? formatCurrency(result.lifetimeInterestSaved) : 'N/A'}
                                    </span>
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        Refinance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When should I refinance?
                            </h3>
                            <p className="text-slate-400">
                                Consider refinancing if you can lower your rate by 0.5-1% or more,
                                plan to stay long enough to break even, or need to change your loan term.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is break-even point?
                            </h3>
                            <p className="text-slate-400">
                                The time it takes for your monthly savings to cover closing costs.
                                Stay past break-even to truly save money.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {REFINANCE_2026.citationNote}
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
                                name: "When should I refinance my mortgage?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Consider refinancing if you can lower your rate by 0.5-1% or more, plan to stay long enough to break even, or need to change your loan term.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
