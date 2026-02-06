"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Coins, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    CRYPTO_TAX_2026,
    calculateCryptoTax,
    formatCurrency,
    CryptoTaxResult
} from "@/lib/calculators/crypto-tax";

export default function CryptoCalculatorPage() {
    const [proceeds, setProceeds] = useState("");
    const [costBasis, setCostBasis] = useState("");
    const [taxableIncome, setTaxableIncome] = useState("");
    const [isLongTerm, setIsLongTerm] = useState(true);
    const [filingStatus, setFilingStatus] = useState("single");
    const [result, setResult] = useState<CryptoTaxResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateCryptoTax(
            parseVal(proceeds),
            parseVal(costBasis),
            parseVal(taxableIncome),
            isLongTerm,
            filingStatus
        ));
    };

    return (
        <>
            {/* Header */}


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Crypto Tax Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate capital gains on BTC, ETH, and altcoins
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Sale Proceeds */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Sale Proceeds (What You Received)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={proceeds}
                                    onChange={handleChange(setProceeds)}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Cost Basis */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Cost Basis (What You Paid)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={costBasis}
                                    onChange={handleChange(setCostBasis)}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Original purchase price + fees</p>
                        </div>

                        {/* Holding Period */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Holding Period
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsLongTerm(true)}
                                    className={`py-3 rounded-lg border transition ${isLongTerm
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Long-Term (1+ Year)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsLongTerm(false)}
                                    className={`py-3 rounded-lg border transition ${!isLongTerm
                                        ? "bg-orange-600 text-white border-orange-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Short-Term (?? Year)
                                </button>
                            </div>
                        </div>

                        {/* Taxable Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Taxable Income (Excluding Crypto)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={taxableIncome}
                                    onChange={handleChange(setTaxableIncome)}
                                    placeholder="60,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Filing Status */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Filing Status
                            </label>
                            <select
                                value={filingStatus}
                                onChange={(e) => setFilingStatus(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="single">Single</option>
                                <option value="married">Married Filing Jointly</option>
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Crypto Tax
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`text-white p-6 ${result.isLoss
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                            : "bg-gradient-to-r from-emerald-600 to-green-600"}`}>
                            <p className="text-sm opacity-80 mb-1">
                                {result.isLoss ? "Capital Loss" : "Estimated Crypto Tax"}
                            </p>
                            <p className="text-4xl font-bold">
                                {result.isLoss ? formatCurrency(Math.abs(result.gain)) : formatCurrency(result.estimatedTax)}
                            </p>
                            <p className="text-sm opacity-80 mt-2">
                                {result.isLoss
                                    ? "Can offset gains or $3,000 of income"
                                    : `${result.taxRate}% ${result.isLongTerm ? "long-term" : "short-term"} rate`}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Sale Proceeds</span>
                                    <span className="font-medium text-white">{formatCurrency(result.proceeds)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Cost Basis</span>
                                    <span className="font-medium text-white">-{formatCurrency(result.costBasis)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Capital {result.isLoss ? "Loss" : "Gain"}</span>
                                    <span className={`font-medium ${result.isLoss ? "text-blue-400" : "text-emerald-400"}`}>
                                        {result.isLoss ? "-" : ""}{formatCurrency(Math.abs(result.gain))}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Tax Rate ({result.isLongTerm ? "LT" : "ST"})</span>
                                    <span className="font-medium text-white">{result.taxRate}%</span>
                                </div>
                                {!result.isLoss && (
                                    <div className="flex justify-between pt-4 text-lg">
                                        <span className="text-white font-bold">Estimated Tax Owed</span>
                                        <span className="font-bold text-red-400">{formatCurrency(result.estimatedTax)}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-amber-900/20 border-t border-amber-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-amber-400 mt-0.5" />
                                <p className="text-amber-200">
                                    Report on IRS Form 8949 and Schedule D. This is an estimate.
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
                        Crypto Tax FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How is crypto taxed?
                            </h3>
                            <p className="text-slate-400">
                                Cryptocurrency is taxed as property. When you sell, trade, or spend crypto,
                                you recognize a capital gain or loss based on the difference between
                                proceeds and cost basis.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is cost basis?
                            </h3>
                            <p className="text-slate-400">
                                Cost basis is what you originally paid for your crypto, including any
                                transaction fees. Common methods: FIFO, LIFO, Specific ID.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Consult a crypto tax specialist for accurate calculations.
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
                                name: "How is cryptocurrency taxed?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Cryptocurrency is taxed as property. Capital gains apply when you sell, trade, or spend crypto.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
