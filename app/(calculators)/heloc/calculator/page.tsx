"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Calculator, Info, TrendingUp } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    HELOC_2026,
    calculateHELOC,
    formatCurrency,
    HELOCResult
} from "@/lib/calculators/heloc";

export default function HELOCCalculatorPage() {
    const [homeValue, setHomeValue] = useState("450,000");
    const [mortgageBalance, setMortgageBalance] = useState("250,000");
    const [desiredAmount, setDesiredAmount] = useState("");
    const [rate, setRate] = useState(HELOC_2026.rates.avgVariable.toString());
    const [result, setResult] = useState<HELOCResult | null>(null);

    const handleValueChange = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const homeNum = parseVal(homeValue);
        const mortgageNum = parseVal(mortgageBalance);
        const desiredNum = parseVal(desiredAmount);
        const rateNum = parseFloat(rate) || HELOC_2026.rates.avgVariable;

        if (homeNum > 0) {
            setResult(calculateHELOC(homeNum, mortgageNum, desiredNum, rateNum, 80));
        }
    };

    return (
        <>
            {/* Header */}
            <main className="max-w-2xl mx-auto px-4 py-8">                    {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        Calculate Your HELOC
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Home Equity Line of Credit based on 80% CLTV
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Home Value */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Home Value
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={homeValue}
                                    onChange={handleValueChange(setHomeValue)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Mortgage Balance */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Mortgage Balance
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={mortgageBalance}
                                    onChange={handleValueChange(setMortgageBalance)}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Desired Amount (optional) */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Desired Credit Line (optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={desiredAmount}
                                    onChange={handleValueChange(setDesiredAmount)}
                                    placeholder="Leave blank for max"
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-500"
                                />
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Interest Rate (%)
                            </label>
                            <input
                                type="text"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Current avg: {HELOC_2026.rates.avgVariable}% (variable)
                            </p>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate HELOC
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Available Credit Line</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.availableCreditLine)}</p>
                            <p className="text-sm opacity-80 mt-2">
                                Based on {result.maxCLTV}% CLTV
                            </p>
                        </div>

                        {/* Equity Info */}
                        <div className="bg-emerald-900/30 p-4 border-b border-slate-700">
                            <div className="flex items-center justify-center gap-2">
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-300">
                                    Home Equity: <strong>{formatCurrency(result.homeEquity)}</strong>
                                </span>
                            </div>
                        </div>

                        {/* Payment Estimates */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Payment Estimates (if fully drawn)
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Draw Period (interest only)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.interestOnlyPayment)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Repayment Period (P+I)</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.fullPayment)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Interest Rate</span>
                                    <span className="font-medium text-white">{result.rate}%</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-slate-300">Max Borrowable</span>
                                    <span className="font-medium text-white">{formatCurrency(result.maxBorrowable)}</span>
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
                        HELOC FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a HELOC?
                            </h3>
                            <p className="text-slate-400">
                                A Home Equity Line of Credit is a revolving credit line secured
                                by your home equity. Borrow as needed during the draw period.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                HELOC vs Home Equity Loan?
                            </h3>
                            <p className="text-slate-400">
                                HELOC is a line of credit (revolving). Home equity loan is a
                                lump sum with fixed payments. HELOC has variable rates.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {HELOC_2026.citation}
                </p>
            </main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is a HELOC?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A Home Equity Line of Credit is a revolving credit line secured by your home equity. Borrow as needed during the draw period.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
