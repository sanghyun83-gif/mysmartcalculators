"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calculator, Info, CheckCircle, AlertTriangle } from "lucide-react";
import {
    SITE,
    UMBRELLA_2026,
    calculateUmbrella,
    formatCurrency,
    formatMillions,
    UmbrellaResult
} from "@/lib/calculators/umbrella-insurance";

export default function UmbrellaCalculatorPage() {
    const [netWorth, setNetWorth] = useState("500,000");
    const [coverage, setCoverage] = useState(1000000);
    const [hasPool, setHasPool] = useState(false);
    const [hasTeenDriver, setHasTeenDriver] = useState(false);
    const [hasRentalProperty, setHasRentalProperty] = useState(false);
    const [result, setResult] = useState<UmbrellaResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateUmbrella(
            parseVal(netWorth),
            coverage,
            hasPool,
            hasTeenDriver,
            hasRentalProperty
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/umbrella-insurance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">Umbrella Calculator</span>
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
                        {SITE.year} Umbrella Insurance Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your excess liability coverage needs
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Net Worth */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Net Worth (Assets)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={netWorth}
                                    onChange={handleChange(setNetWorth)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Include home equity, savings, investments, etc.
                            </p>
                        </div>

                        {/* Quick Net Worth */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[250000, 500000, 1000000, 2000000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setNetWorth(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        {formatMillions(amount)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Coverage Amount */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Coverage Amount
                            </label>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                                {UMBRELLA_2026.coverageOptions.map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setCoverage(amount)}
                                        className={`py-3 rounded-lg border transition ${coverage === amount
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {formatMillions(amount)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Risk Factors */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-slate-300">
                                Risk Factors (Increases Premium)
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasPool}
                                    onChange={(e) => setHasPool(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Swimming pool (+15%)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasTeenDriver}
                                    onChange={(e) => setHasTeenDriver(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Teen driver (+30%)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasRentalProperty}
                                    onChange={(e) => setHasRentalProperty(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Rental property (+25%)</span>
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
                            <p className="text-sm text-blue-100 mb-1">Estimated Annual Premium</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.annualPremium)}</p>
                            <p className="text-sm text-blue-100 mt-2">
                                {formatMillions(result.coverage)} Coverage • {formatCurrency(result.monthlyPremium)}/month
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Policy Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Coverage Amount</span>
                                    <span className="font-medium text-white">{formatMillions(result.coverage)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Your Net Worth</span>
                                    <span className="font-medium text-white">{formatCurrency(result.netWorth)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Risk Level</span>
                                    <span className="font-medium text-blue-400">{result.riskLevel}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Cost per $1M</span>
                                    <span className="font-medium text-white">{formatCurrency(result.pricePerMillion)}/yr</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Annual Cost</span>
                                    <span className="font-bold text-blue-400">{formatCurrency(result.annualPremium)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recommendation */}
                        <div className={`p-4 border-t ${result.recommended ? 'bg-green-900/20 border-green-700/50' : 'bg-yellow-900/20 border-yellow-700/50'}`}>
                            <div className="flex items-start gap-2 text-sm">
                                {result.recommended ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                        <p className="text-green-200">
                                            Good coverage level for your net worth!
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />
                                        <p className="text-yellow-200">
                                            Consider increasing coverage to match your net worth.
                                        </p>
                                    </>
                                )}
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
                        Umbrella Insurance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much umbrella insurance do I need?
                            </h3>
                            <p className="text-slate-400">
                                A good rule is coverage equal to your net worth.
                                If you have $500K in assets, get at least $500K umbrella coverage.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What does umbrella insurance NOT cover?
                            </h3>
                            <p className="text-slate-400">
                                Business activities, intentional damage, your own injuries,
                                and contractual liability are typically excluded.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {UMBRELLA_2026.citation}. This is an estimate only.
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
                                name: "How much umbrella insurance do I need?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A good rule is coverage equal to your net worth. If you have $500K in assets, get at least $500K umbrella coverage.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
