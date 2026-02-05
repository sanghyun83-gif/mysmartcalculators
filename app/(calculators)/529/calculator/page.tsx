"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    PLAN_529_2026,
    calculate529,
    formatCurrency,
    Plan529Result
} from "@/lib/calculators/529";

export default function CalculatorPage() {
    const [childAge, setChildAge] = useState("5");
    const [monthlyContribution, setMonthlyContribution] = useState("300");
    const [currentBalance, setCurrentBalance] = useState("");
    const [returnRate, setReturnRate] = useState("6");
    const [isPrivate, setIsPrivate] = useState(false);
    const [result, setResult] = useState<Plan529Result | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculate529(
            parseInt(childAge),
            18,
            parseVal(monthlyContribution),
            parseVal(currentBalance),
            parseFloat(returnRate),
            4,
            isPrivate
        ));
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} 529 Plan Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Project your college savings growth
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Child Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Child&apos;s Current Age: <span className="text-emerald-400 font-bold">{childAge}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="17"
                                value={childAge}
                                onChange={(e) => setChildAge(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>Newborn</span>
                                <span>10</span>
                                <span>17</span>
                            </div>
                        </div>

                        {/* Monthly Contribution */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Monthly Contribution
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={monthlyContribution}
                                    onChange={handleChange(setMonthlyContribution)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Quick Monthly */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[100, 250, 500, 1000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setMonthlyContribution(amount.toString())}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Current Balance */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current 529 Balance (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={currentBalance}
                                    onChange={handleChange(setCurrentBalance)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* School Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                College Type
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPrivate(false)}
                                    className={`py-3 rounded-lg border transition ${!isPrivate
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Public
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsPrivate(true)}
                                    className={`py-3 rounded-lg border transition ${isPrivate
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Private
                                </button>
                            </div>
                        </div>

                        {/* Expected Return */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Expected Annual Return: <span className="text-emerald-400 font-bold">{returnRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="3"
                                max="10"
                                value={returnRate}
                                onChange={(e) => setReturnRate(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Growth
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">529 Value at Age 18</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.futureValue)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                Covers <strong>{result.coveragePercent}%</strong> of estimated 4-year {isPrivate ? 'private' : 'public'} college
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Projection Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Contributions</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalContributions)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Tax-Free Growth</span>
                                    <span className="font-medium text-emerald-400">+{formatCurrency(result.totalGrowth)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Est. 4-Year College Cost</span>
                                    <span className="font-medium text-white">{formatCurrency(result.estimatedCollegeCost)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Savings at 18</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.futureValue)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Coverage Bar */}
                        <div className="px-6 pb-6">
                            <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-500 rounded-full transition-all"
                                    style={{ width: `${Math.min(100, result.coveragePercent)}%` }}
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-2 text-center">
                                {result.coveragePercent >= 100
                                    ? "✓ Fully covered!"
                                    : `Gap: ${formatCurrency(result.estimatedCollegeCost - result.futureValue)}`
                                }
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        529 Plan FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a 529 plan?
                            </h3>
                            <p className="text-slate-400">
                                A tax-advantaged savings plan for education expenses. Growth is federal tax-free
                                when used for qualified education costs.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What if my child doesn&apos;t go to college?
                            </h3>
                            <p className="text-slate-400">
                                You can change beneficiaries to another family member, use for K-12 tuition,
                                apprenticeships, or roll up to $35K to a Roth IRA (2024+).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Consult a financial advisor for personalized advice.
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
                                name: "What is a 529 plan?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A 529 plan is a tax-advantaged savings plan for education expenses with federal tax-free growth.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
