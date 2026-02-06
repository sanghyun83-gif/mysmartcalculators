"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    UI_CONSTANTS_2026,
    STATES,
    calculateUI,
    formatCurrency,
    UIResult
} from "@/lib/calculators/unemployment";

export default function UnemploymentCalculatorPage() {
    const [weeklyWage, setWeeklyWage] = useState("");
    const [state, setState] = useState("California");
    const [result, setResult] = useState<UIResult | null>(null);

    const handleWageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setWeeklyWage("");
            return;
        }
        setWeeklyWage(parseInt(raw).toLocaleString("en-US"));
    };

    const parseWage = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        const wage = parseWage(weeklyWage) || 800;
        setResult(calculateUI(wage, state));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/unemployment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">UI Calculator</span>
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
                        {SITE.year} Unemployment Benefits Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your weekly UI benefit amount
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Select Your State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                {STATES.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                Max weekly benefit: {formatCurrency(UI_CONSTANTS_2026.stateMaximums[state] || 450)}
                            </p>
                        </div>

                        {/* Weekly Wage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Average Weekly Wage (Before Layoff)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={weeklyWage}
                                    onChange={handleWageChange}
                                    placeholder="800"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Your gross weekly earnings before taxes
                            </p>
                        </div>

                        {/* Quick Wage Buttons */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Or select common weekly wage:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[500, 750, 1000, 1500].map((wage) => (
                                    <button
                                        key={wage}
                                        onClick={() => setWeeklyWage(wage.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${wage}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Benefits
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Estimated Weekly Benefit</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.weeklyBenefit)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.state}  Up to {result.estimatedDuration} weeks
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Benefit Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Your Weekly Wage</span>
                                    <span className="font-medium text-white">{formatCurrency(result.weeklyWage)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Benefit Rate</span>
                                    <span className="font-medium text-white">{result.benefitPercentage}% of wages</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">State Maximum</span>
                                    <span className="font-medium text-white">{formatCurrency(result.maxWeeklyBenefit)}/week</span>
                                </div>
                                {result.capApplied && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-amber-400">State Cap Applied</span>
                                        <span className="font-medium text-amber-400">Yes</span>
                                    </div>
                                )}
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Maximum Duration</span>
                                    <span className="font-medium text-white">{result.estimatedDuration} weeks</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Potential Benefits</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.totalPotential)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    UI benefits are taxable income. Consider withholding to avoid tax surprise.
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
                        Unemployment FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How is my weekly benefit calculated?
                            </h3>
                            <p className="text-slate-400">
                                Most states pay approximately 50% of your average weekly wage,
                                up to the state maximum. Some states use a different formula.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long can I receive benefits?
                            </h3>
                            <p className="text-slate-400">
                                Most states offer up to 26 weeks of regular UI benefits.
                                Some states offer fewer weeks (Florida: 12 weeks).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Are unemployment benefits taxable?
                            </h3>
                            <p className="text-slate-400">
                                Yes, UI benefits are taxable income at the federal level and
                                in most states. You can choose to have 10% withheld.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates. Actual benefits are determined by your state
                    labor department based on your specific work history.
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
                                name: "How is my weekly unemployment benefit calculated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most states pay approximately 50% of your average weekly wage, up to the state maximum.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are unemployment benefits taxable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, UI benefits are taxable income at the federal level and in most states.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
