"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    CAPITAL_GAINS_2026,
    calculateCapitalGains,
    formatCurrency,
    CapitalGainsResult
} from "@/lib/calculators/capital-gains";

export default function GainsCalculatorPage() {
    const [salePrice, setSalePrice] = useState("");
    const [costBasis, setCostBasis] = useState("");
    const [taxableIncome, setTaxableIncome] = useState("");
    const [isLongTerm, setIsLongTerm] = useState(true);
    const [filingStatus, setFilingStatus] = useState("single");
    const [state, setState] = useState("");
    const [result, setResult] = useState<CapitalGainsResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateCapitalGains(
            parseVal(salePrice),
            parseVal(costBasis),
            parseVal(taxableIncome),
            isLongTerm,
            filingStatus,
            state
        ));
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Capital Gains Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate tax on stocks, crypto, real estate
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Sale Price */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Sale Price (Proceeds)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={salePrice}
                                    onChange={handleChange(setSalePrice)}
                                    placeholder="100,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Cost Basis */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Cost Basis (Original Purchase Price)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={costBasis}
                                    onChange={handleChange(setCostBasis)}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
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
                                        ? "bg-red-600 text-white border-red-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Short-Term (≤1 Year)
                                </button>
                            </div>
                        </div>

                        {/* Taxable Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Taxable Income (Excluding This Gain)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={taxableIncome}
                                    onChange={handleChange(setTaxableIncome)}
                                    placeholder="75,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Used to determine your capital gains rate</p>
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
                                <option value="marriedFilingJointly">Married Filing Jointly</option>
                                <option value="marriedFilingSeparately">Married Filing Separately</option>
                                <option value="headOfHousehold">Head of Household</option>
                            </select>
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                State (for state tax)
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="">No State Tax / Not Listed</option>
                                {CAPITAL_GAINS_2026.stateRates.map((s) => (
                                    <option key={s.state} value={s.state}>
                                        {s.state} ({s.rate}%)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Capital Gains Tax
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Total Capital Gains Tax</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalTax)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.effectiveRate}% effective rate on {formatCurrency(result.gain)} gain
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Tax Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Sale Price</span>
                                    <span className="font-medium text-white">{formatCurrency(result.salePrice)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Cost Basis</span>
                                    <span className="font-medium text-white">-{formatCurrency(result.costBasis)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Capital Gain</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.gain)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Federal Rate ({result.isLongTerm ? "Long-Term" : "Short-Term"})</span>
                                    <span className="font-medium text-white">{result.federalRate}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Federal Tax</span>
                                    <span className="font-medium text-red-400">{formatCurrency(result.federalTax)}</span>
                                </div>
                                {result.niitApplies && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">NIIT (3.8%)</span>
                                        <span className="font-medium text-red-400">{formatCurrency(result.niitTax)}</span>
                                    </div>
                                )}
                                {result.stateTax > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">State Tax ({result.stateRate}%)</span>
                                        <span className="font-medium text-red-400">{formatCurrency(result.stateTax)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Net Proceeds (After Tax)</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.netProceeds)}</span>
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
                        Capital Gains FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long is &quot;long-term&quot;?
                            </h3>
                            <p className="text-slate-400">
                                Assets held for more than one year qualify for long-term capital gains rates
                                (0%, 15%, or 20%), which are lower than ordinary income rates.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is NIIT?
                            </h3>
                            <p className="text-slate-400">
                                The Net Investment Income Tax is an additional 3.8% tax on investment income
                                for individuals with income over $200,000 ($250,000 married).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
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
                                name: "What is the long-term capital gains tax rate?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Long-term capital gains (assets held over 1 year) are taxed at 0%, 15%, or 20% depending on your taxable income.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
