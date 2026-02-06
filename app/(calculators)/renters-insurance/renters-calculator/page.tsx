"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, Calculator, Info, CheckCircle } from "lucide-react";
import {
    SITE,
    RENTERS_2026,
    calculateRenters,
    formatCurrency,
    RentersResult
} from "@/lib/calculators/renters-insurance";

export default function RentersCalculatorPage() {
    const [propertyValue, setPropertyValue] = useState("25,000");
    const [liability, setLiability] = useState(100000);
    const [deductible, setDeductible] = useState(500);
    const [goodCredit, setGoodCredit] = useState(true);
    const [bundle, setBundle] = useState(false);
    const [result, setResult] = useState<RentersResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateRenters(
            parseVal(propertyValue),
            liability,
            deductible,
            goodCredit,
            bundle
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/renters-insurance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">Renters Calculator</span>
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
                        {SITE.year} Renters Insurance Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your coverage needs and premium
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Personal Property Value */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Value of Your Belongings
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={propertyValue}
                                    onChange={handleChange(setPropertyValue)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Include furniture, electronics, clothing, etc.
                            </p>
                        </div>

                        {/* Quick Property Values */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[15000, 25000, 50000, 75000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setPropertyValue(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Liability Coverage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Liability Coverage
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[100000, 200000, 300000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setLiability(amount)}
                                        className={`py-3 rounded-lg border transition ${liability === amount
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {formatCurrency(amount)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Deductible */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Deductible
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {RENTERS_2026.deductibleOptions.map((d) => (
                                    <button
                                        key={d}
                                        type="button"
                                        onClick={() => setDeductible(d)}
                                        className={`py-2 rounded-lg border text-sm transition ${deductible === d
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        ${d}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Discounts */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-slate-300">
                                Available Discounts
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={goodCredit}
                                    onChange={(e) => setGoodCredit(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Good credit score (15% off)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={bundle}
                                    onChange={(e) => setBundle(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Bundle with auto insurance (15% off)</span>
                            </label>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Premium
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                            <p className="text-sm text-blue-100 mb-1">Estimated Monthly Premium</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyPremium)}</p>
                            <p className="text-sm text-blue-100 mt-2">
                                {result.coverageLevel} Coverage  {formatCurrency(result.annualPremium)}/year
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Coverage Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Personal Property</span>
                                    <span className="font-medium text-white">{formatCurrency(result.personalProperty)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Liability</span>
                                    <span className="font-medium text-white">{formatCurrency(result.liability)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Deductible</span>
                                    <span className="font-medium text-white">{formatCurrency(result.deductible)}</span>
                                </div>
                                {result.estimatedSavings > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Bundle Savings</span>
                                        <span className="font-medium text-green-400">-{formatCurrency(result.estimatedSavings)}/yr</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Monthly Cost</span>
                                    <span className="font-bold text-blue-400">{formatCurrency(result.monthlyPremium)}</span>
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
                        <Info className="w-5 h-5 text-blue-500" />
                        Renters Insurance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much renters insurance do I need?
                            </h3>
                            <p className="text-slate-400">
                                Create an inventory of your belongings. Most renters need
                                ${formatCurrency(RENTERS_2026.coverage.personalPropertyAvg)} in personal property coverage.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Does my landlord&apos;s insurance cover me?
                            </h3>
                            <p className="text-slate-400">
                                No. Landlord insurance only covers the building structure,
                                not your personal belongings.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {RENTERS_2026.citation}. This is an estimate only.
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
                                name: "How much renters insurance do I need?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most renters need $30,000 in personal property coverage. Create an inventory to determine your needs.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
