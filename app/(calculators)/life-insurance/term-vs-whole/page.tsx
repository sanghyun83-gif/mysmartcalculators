"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, CheckCircle, XCircle, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    comparePolicies,
    formatCurrency,
    parseFormattedNumber,
    PolicyComparisonResult
} from "@/lib/calculators/life-insurance";

export default function TermVsWholePage() {
    const [coverage, setCoverage] = useState("500,000");
    const [age, setAge] = useState("35");
    const [result, setResult] = useState<PolicyComparisonResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCompare = () => {
        const coverageAmt = parseFormattedNumber(coverage) || 500000;
        const ageNum = parseInt(age) || 35;
        setResult(comparePolicies(coverageAmt, ageNum, "preferred"));
    };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-6">Compare Policy Types</h1>

                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Coverage Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={coverage} onChange={handleInputChange(setCoverage)}
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Age</label>
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="18" max="70"
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <button onClick={handleCompare}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                        <Scale className="w-5 h-5" />
                        Compare Policies
                    </button>
                </div>

                {result && (
                    <>
                        {/* Comparison Cards */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className={`rounded-xl p-5 border-2 ${result.recommendation === 'term' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'}`}>
                                <h3 className="font-bold text-slate-800 mb-3">Term Life (20 yr)</h3>
                                <p className="text-sm text-slate-500">Monthly Premium</p>
                                <p className="text-2xl font-bold text-blue-600">{formatCurrency(result.termMonthly)}</p>
                                <p className="text-sm text-slate-500 mt-2">20-Year Cost</p>
                                <p className="text-lg font-semibold text-slate-700">{formatCurrency(result.termTotal)}</p>
                                {result.recommendation === 'term' && (
                                    <span className="inline-block mt-3 text-xs bg-blue-600 text-white px-2 py-1 rounded-full font-bold">RECOMMENDED</span>
                                )}
                            </div>
                            <div className={`rounded-xl p-5 border-2 ${result.recommendation === 'whole' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'}`}>
                                <h3 className="font-bold text-slate-800 mb-3">Whole Life</h3>
                                <p className="text-sm text-slate-500">Monthly Premium</p>
                                <p className="text-2xl font-bold text-amber-600">{formatCurrency(result.wholeMonthly)}</p>
                                <p className="text-sm text-slate-500 mt-2">20-Year Cost</p>
                                <p className="text-lg font-semibold text-slate-700">{formatCurrency(result.wholeTotal20Years)}</p>
                                <p className="text-sm text-slate-500 mt-1">Est. Cash Value: {formatCurrency(result.cashValueEstimate)}</p>
                            </div>
                        </div>

                        {/* Savings */}
                        <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                            <p className="text-sm text-green-700">Term Life Saves You</p>
                            <p className="text-3xl font-bold text-green-600">{formatCurrency(result.termSavings)}</p>
                            <p className="text-sm text-green-600">over 20 years</p>
                        </div>

                        {/* Recommendation */}
                        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                                <p className="text-sm text-blue-800">{result.reasoning}</p>
                            </div>
                        </div>
                    </>
                )}

                {/* Feature Comparison */}
                <div className="mt-8 bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="p-4 bg-slate-100 border-b">
                        <h3 className="font-bold text-slate-800">Feature Comparison</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                        <div className="flex items-center px-4 py-3">
                            <span className="flex-1 text-sm text-slate-600">Lower Premiums</span>
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <XCircle className="w-5 h-5 text-red-400 ml-8" />
                        </div>
                        <div className="flex items-center px-4 py-3">
                            <span className="flex-1 text-sm text-slate-600">Lifetime Coverage</span>
                            <XCircle className="w-5 h-5 text-red-400" />
                            <CheckCircle className="w-5 h-5 text-green-500 ml-8" />
                        </div>
                        <div className="flex items-center px-4 py-3">
                            <span className="flex-1 text-sm text-slate-600">Builds Cash Value</span>
                            <XCircle className="w-5 h-5 text-red-400" />
                            <CheckCircle className="w-5 h-5 text-green-500 ml-8" />
                        </div>
                        <div className="flex items-center px-4 py-3">
                            <span className="flex-1 text-sm text-slate-600">Simple to Understand</span>
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <XCircle className="w-5 h-5 text-red-400 ml-8" />
                        </div>
                    </div>
                    <div className="flex px-4 py-2 bg-slate-50 text-sm text-slate-500">
                        <span className="flex-1"></span>
                        <span className="font-semibold">Term</span>
                        <span className="font-semibold ml-6">Whole</span>
                    </div>
                </div>

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>
                <LegalDisclaimer category="insurance" />
            </main>
        </>
    );
}
