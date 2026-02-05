"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Calculator, Info, DollarSign, CheckCircle } from "lucide-react";
import {
    SITE,
    HEALTH_2026,
    calculateHealth,
    formatCurrency,
    HealthResult
} from "@/lib/calculators/health-insurance";

export default function HealthCalculatorPage() {
    const [age, setAge] = useState("35");
    const [income, setIncome] = useState("50,000");
    const [familySize, setFamilySize] = useState("1");
    const [tier, setTier] = useState("silver");
    const [result, setResult] = useState<HealthResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateHealth(
            parseInt(age),
            parseVal(income),
            parseInt(familySize),
            tier
        ));
    };

    return (
        <>
            {/* Header */}
            <main className="max-w-2xl mx-auto px-4 py-8">                    {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Health Insurance Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your monthly premium and subsidy
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Age: <span className="text-blue-400 font-bold">{age}</span>
                            </label>
                            <input
                                type="range"
                                min="18"
                                max="64"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>18</span>
                                <span>40</span>
                                <span>64</span>
                            </div>
                        </div>

                        {/* Annual Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Annual Household Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={income}
                                    onChange={handleChange(setIncome)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Quick Income */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[30000, 50000, 75000, 100000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setIncome(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Family Size */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Family Size
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setFamilySize(size.toString())}
                                        className={`py-3 rounded-lg border transition ${parseInt(familySize) === size
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Plan Tier */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Plan Type
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {["bronze", "silver", "gold", "platinum"].map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTier(t)}
                                        className={`py-2 rounded-lg border text-sm transition capitalize ${tier === t
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
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
                                {result.tier} Plan • {formatCurrency(result.annualPremium)}/year
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Premium Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Base Premium</span>
                                    <span className="font-medium text-white">{formatCurrency(result.basePremium)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">ACA Subsidy</span>
                                    <span className="font-medium text-green-400">-{formatCurrency(result.subsidyAmount)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Annual Deductible</span>
                                    <span className="font-medium text-white">{formatCurrency(result.deductible)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Your Cost</span>
                                    <span className="font-bold text-blue-400">{formatCurrency(result.monthlyPremium)}/mo</span>
                                </div>
                            </div>
                        </div>

                        {/* Subsidy Status */}
                        <div className={`p-4 border-t ${result.subsidyEligible ? 'bg-green-900/20 border-green-700/50' : 'bg-slate-700/50 border-slate-700'}`}>
                            <div className="flex items-start gap-2 text-sm">
                                {result.subsidyEligible ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                        <p className="text-green-200">
                                            You may qualify for <strong>{formatCurrency(result.subsidyAmount)}/month</strong> in ACA subsidies!
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <DollarSign className="w-4 h-4 text-slate-400 mt-0.5" />
                                        <p className="text-slate-300">
                                            Income exceeds 400% FPL. Consider employer coverage or private plans.
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
                        Health Insurance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is an ACA subsidy?
                            </h3>
                            <p className="text-slate-400">
                                A tax credit that lowers your monthly premium on marketplace plans.
                                Available if income is 100-400% of Federal Poverty Level.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Which plan tier is best?
                            </h3>
                            <p className="text-slate-400">
                                Silver is often best for subsidy recipients (Cost Sharing Reductions).
                                Bronze for healthy, low healthcare users.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Actual costs vary by state and plan. Consult healthcare.gov.
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
                                name: "What is an ACA subsidy?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A tax credit that lowers your monthly premium on marketplace plans, available if income is 100-400% of Federal Poverty Level.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
