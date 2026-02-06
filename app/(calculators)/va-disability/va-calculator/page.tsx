"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Award, Calculator, Info, Plus, Trash2 } from "lucide-react";
import {
    SITE,
    VA_RATES_2026,
    calculateVABenefits,
    formatCurrency,
    VAResult
} from "@/lib/calculators/va-disability";

export default function VACalculatorPage() {
    const [ratings, setRatings] = useState<number[]>([50]);
    const [hasSpouse, setHasSpouse] = useState(false);
    const [numChildren, setNumChildren] = useState(0);
    const [numParents, setNumParents] = useState(0);
    const [result, setResult] = useState<VAResult | null>(null);

    const addRating = () => {
        if (ratings.length < 10) {
            setRatings([...ratings, 10]);
        }
    };

    const removeRating = (index: number) => {
        if (ratings.length > 1) {
            setRatings(ratings.filter((_, i) => i !== index));
        }
    };

    const updateRating = (index: number, value: number) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };

    const handleCalculate = () => {
        setResult(calculateVABenefits(ratings, hasSpouse, numChildren, numParents));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/va-disability" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-white">VA Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year} Rates
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} VA Disability Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your combined rating and monthly payment
                    </p>

                    {/* Disability Ratings */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Your Disability Ratings
                        </label>
                        <div className="space-y-3">
                            {ratings.map((rating, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <select
                                        value={rating}
                                        onChange={(e) => updateRating(index, parseInt(e.target.value))}
                                        className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                    >
                                        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((r) => (
                                            <option key={r} value={r}>{r}%</option>
                                        ))}
                                    </select>
                                    {ratings.length > 1 && (
                                        <button
                                            onClick={() => removeRating(index)}
                                            className="p-3 text-red-400 hover:bg-red-900/30 rounded-lg transition"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        {ratings.length < 10 && (
                            <button
                                onClick={addRating}
                                className="mt-3 flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm"
                            >
                                <Plus className="w-4 h-4" /> Add Another Rating
                            </button>
                        )}
                    </div>

                    {/* Dependents */}
                    <div className="mb-6 space-y-4">
                        <label className="block text-sm font-medium text-slate-300">
                            Dependents (for 30%+ ratings)
                        </label>

                        <div className="flex items-center justify-between">
                            <span className="text-slate-400">Spouse</span>
                            <button
                                onClick={() => setHasSpouse(!hasSpouse)}
                                className={`w-12 h-6 rounded-full transition ${hasSpouse ? 'bg-purple-600' : 'bg-slate-600'}`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${hasSpouse ? 'translate-x-6' : 'translate-x-0.5'}`} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-slate-400">Children</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
                                    className="w-8 h-8 bg-slate-700 rounded-lg text-white"
                                >-</button>
                                <span className="w-8 text-center text-white">{numChildren}</span>
                                <button
                                    onClick={() => setNumChildren(Math.min(10, numChildren + 1))}
                                    className="w-8 h-8 bg-slate-700 rounded-lg text-white"
                                >+</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-slate-400">Dependent Parents</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setNumParents(Math.max(0, numParents - 1))}
                                    className="w-8 h-8 bg-slate-700 rounded-lg text-white"
                                >-</button>
                                <span className="w-8 text-center text-white">{numParents}</span>
                                <button
                                    onClick={() => setNumParents(Math.min(2, numParents + 1))}
                                    className="w-8 h-8 bg-slate-700 rounded-lg text-white"
                                >+</button>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate VA Benefits
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6">
                            <p className="text-sm text-purple-100 mb-1">Combined Rating</p>
                            <p className="text-5xl font-bold">{result.combinedRating}%</p>
                            <p className="text-lg text-purple-100 mt-2">
                                {formatCurrency(result.totalMonthly)}/month
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Payment Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Base Payment (Veteran Only)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.monthlyPayment)}</span>
                                </div>
                                {result.dependentAdditions > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Dependent Additions</span>
                                        <span className="font-medium text-purple-400">+{formatCurrency(result.dependentAdditions)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Monthly Total</span>
                                    <span className="font-bold text-purple-400">{formatCurrency(result.totalMonthly)}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-slate-300">Annual Total</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalAnnual)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tax Note */}
                        <div className="p-4 bg-green-900/30 border-t border-green-700/50">
                            <p className="text-sm text-green-200">
                                 VA disability compensation is <strong>tax-free</strong> at the federal level
                            </p>
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
                        <Info className="w-5 h-5 text-purple-500" />
                        VA Disability FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How are multiple ratings combined?
                            </h3>
                            <p className="text-slate-400">
                                VA uses &quot;combined ratings&quot; math, not simple addition. Each rating is
                                applied to the remaining healthy percentage. Example: 50% + 30% = 65%, not 80%.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When do dependent benefits start?
                            </h3>
                            <p className="text-slate-400">
                                You can add dependents starting at a combined rating of 30% or higher.
                                Below 30%, no additional dependent compensation is available.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Are VA disability payments taxable?
                            </h3>
                            <p className="text-slate-400">
                                No, VA disability compensation is completely tax-free at the federal
                                level and in most states.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Not affiliated with the VA. This calculator provides estimates based on {SITE.year} rates.
                    Actual payments may vary. Consult VA.gov for official information.
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
                                name: "How are multiple VA disability ratings combined?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "VA uses combined ratings math, not simple addition. Each rating is applied to the remaining healthy percentage.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are VA disability payments taxable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, VA disability compensation is completely tax-free at the federal level and in most states.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
