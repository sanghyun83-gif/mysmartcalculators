"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Calculator, Info, Users } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    TIP_2026,
    calculateTip,
    formatCurrency,
    TipResult
} from "@/lib/calculators/tip";

export default function TipCalculatorPage() {
    const [bill, setBill] = useState("50.00");
    const [tipPercent, setTipPercent] = useState(20);
    const [splitCount, setSplitCount] = useState(1);
    const [result, setResult] = useState<TipResult | null>(null);

    const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9.]/g, "");
        setBill(val);
    };

    const handleCalculate = () => {
        const billNum = parseFloat(bill) || 0;
        if (billNum > 0) {
            setResult(calculateTip(billNum, tipPercent, splitCount));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/tip" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Tip Calculator</span>
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
                        Calculate Your Tip
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Enter bill amount and select tip percentage
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Bill Amount */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Bill Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={bill}
                                    onChange={handleBillChange}
                                    className="w-full pl-8 pr-4 py-4 text-2xl bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Quick Bills */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[25, 50, 100, 200].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setBill(amount.toFixed(2))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tip Percent */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Tip Percentage
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {TIP_2026.quickTips.map((percent) => (
                                    <button
                                        key={percent}
                                        type="button"
                                        onClick={() => setTipPercent(percent)}
                                        className={`py-3 rounded-lg border transition ${tipPercent === percent
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {percent}%
                                    </button>
                                ))}
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="30"
                                value={tipPercent}
                                onChange={(e) => setTipPercent(parseInt(e.target.value))}
                                className="w-full mt-3 accent-emerald-500"
                            />
                            <p className="text-center text-emerald-400 font-bold text-lg mt-1">{tipPercent}%</p>
                        </div>

                        {/* Split Count */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Split Between
                            </label>
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => setSplitCount(Math.max(1, splitCount - 1))}
                                    className="w-12 h-12 bg-slate-700 rounded-lg text-white text-xl font-bold hover:bg-slate-600"
                                >
                                                                     </button>
                                <span className="text-2xl font-bold text-white w-16 text-center">{splitCount}</span>
                                <button
                                    type="button"
                                    onClick={() => setSplitCount(splitCount + 1)}
                                    className="w-12 h-12 bg-slate-700 rounded-lg text-white text-xl font-bold hover:bg-slate-600"
                                >
                                    +
                                </button>
                                <span className="text-slate-400 text-sm">
                                    {splitCount === 1 ? "person" : "people"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Tip
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 text-center">
                            <p className="text-sm text-emerald-100 mb-1">Total (Including Tip)</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.totalAmount)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                Bill: {formatCurrency(result.billAmount)} + Tip: {formatCurrency(result.tipAmount)}
                            </p>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Bill Amount</span>
                                    <span className="font-medium text-white">{formatCurrency(result.billAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Tip ({result.tipPercent}%)</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.tipAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300 font-bold">Total</span>
                                    <span className="font-bold text-white">{formatCurrency(result.totalAmount)}</span>
                                </div>
                            </div>

                            {/* Split */}
                            {result.splitCount > 1 && (
                                <div className="mt-4 pt-4 border-t border-slate-700">
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                        Split Between {result.splitCount} People
                                    </h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                                            <p className="text-xs text-slate-400">Bill Each</p>
                                            <p className="text-lg font-bold text-white">{formatCurrency(result.perPersonBill)}</p>
                                        </div>
                                        <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                                            <p className="text-xs text-slate-400">Tip Each</p>
                                            <p className="text-lg font-bold text-emerald-400">{formatCurrency(result.perPersonTip)}</p>
                                        </div>
                                        <div className="text-center p-3 bg-emerald-900/30 rounded-lg">
                                            <p className="text-xs text-emerald-300">Total Each</p>
                                            <p className="text-lg font-bold text-emerald-400">{formatCurrency(result.perPersonTotal)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
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
                        Tipping FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much should I tip at a restaurant?
                            </h3>
                            <p className="text-slate-400">
                                15-20% is standard for good service. 20%+ for exceptional service.
                                10-15% for below average service.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Should I tip on the pre-tax or post-tax amount?
                            </h3>
                            <p className="text-slate-400">
                                Traditionally, tips are calculated on the pre-tax subtotal.
                                However, tipping on the total is increasingly common and acceptable.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {TIP_2026.citation}
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
                                name: "How much should I tip at a restaurant?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "15-20% is standard for good service. 20%+ for exceptional service.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
