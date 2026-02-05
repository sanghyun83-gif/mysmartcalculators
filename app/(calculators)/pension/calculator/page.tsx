"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    calculatePension,
    formatCurrency,
    PensionResult
} from "@/lib/calculators/pension";

export default function PensionCalculatorPage() {
    const [salary, setSalary] = useState("");
    const [years, setYears] = useState("25");
    const [multiplier, setMultiplier] = useState("1.5");
    const [currentAge, setCurrentAge] = useState("65");
    const [result, setResult] = useState<PensionResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculatePension(
            parseVal(salary),
            parseInt(years),
            parseFloat(multiplier),
            parseInt(currentAge),
            65
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pension" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Pension Calculator</span>
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
                        {SITE.year} Pension Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your defined benefit pension
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Final Average Salary */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Final Average Salary (Annual)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={salary}
                                    onChange={handleChange(setSalary)}
                                    placeholder="80,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Usually average of last 3-5 years
                            </p>
                        </div>

                        {/* Quick Salary Examples */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick examples:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[60000, 80000, 100000, 120000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setSalary(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Years of Service */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Years of Service: <span className="text-emerald-400 font-bold">{years}</span>
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="40"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>5 yrs</span>
                                <span>20 yrs</span>
                                <span>40 yrs</span>
                            </div>
                        </div>

                        {/* Multiplier */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Benefit Multiplier
                            </label>
                            <select
                                value={multiplier}
                                onChange={(e) => setMultiplier(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="1.0">1.0% (Low)</option>
                                <option value="1.5">1.5% (Average)</option>
                                <option value="2.0">2.0% (Generous)</option>
                                <option value="2.5">2.5% (Public Sector)</option>
                            </select>
                        </div>

                        {/* Current Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Retirement Age
                            </label>
                            <input
                                type="number"
                                value={currentAge}
                                onChange={(e) => setCurrentAge(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Early retirement (before 65) may reduce benefits
                            </p>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Pension
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Estimated Monthly Pension</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyBenefit)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {formatCurrency(result.annualBenefit)}/year
                                {result.earlyReduction > 0 && ` (${result.earlyReduction}% early reduction)`}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Final Average Salary</span>
                                    <span className="font-medium text-white">{formatCurrency(result.finalAverageSalary)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Years of Service</span>
                                    <span className="font-medium text-white">{result.yearsOfService}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Multiplier</span>
                                    <span className="font-medium text-white">{result.multiplier}%</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Est. Lump Sum Value</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.estimatedLumpSum)}</span>
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
                        Pension FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is Final Average Salary?
                            </h3>
                            <p className="text-slate-400">
                                Most plans use the average of your highest 3-5 years of salary,
                                not just your final year.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Should I take lump sum or annuity?
                            </h3>
                            <p className="text-slate-400">
                                Depends on your health, investment ability, and need for guaranteed income.
                                Consult a financial advisor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Contact your HR department for actual benefit amounts.
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
                                name: "What is Final Average Salary for pension?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most pension plans use the average of your highest 3-5 years of salary to calculate benefits.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
