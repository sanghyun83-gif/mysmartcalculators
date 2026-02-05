"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, DollarSign, Calendar, AlertCircle } from "lucide-react";
import {
    SITE,
    SSA_CONSTANTS_2026,
    calculateSSDI,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    SSDIResult
} from "@/lib/calculators/disability";

export default function SSDICalculatorPage() {
    const [state, setState] = useState("CA");
    const [averageIncome, setAverageIncome] = useState("");
    const [currentAge, setCurrentAge] = useState(45);
    const [disabilityYear, setDisabilityYear] = useState(2024);
    const [disabilityMonth, setDisabilityMonth] = useState(6);
    const [result, setResult] = useState<SSDIResult | null>(null);

    const states = getStatesList();
    const constants = SSA_CONSTANTS_2026;

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const income = parseFormattedNumber(averageIncome) || 50000;
        const disabilityDate = new Date(disabilityYear, disabilityMonth - 1, 1);
        setResult(calculateSSDI(state, income, currentAge, disabilityDate));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {constants.colaDisplay} COLA Applied
                        </span>
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        {SITE.year} SSDI Benefits Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Estimate your monthly SSDI benefits and potential Back Pay
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Average Annual Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Average Annual Income (Last 5 Years)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={averageIncome}
                                    onChange={handleInputChange(setAverageIncome)}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Your average gross income before disability</p>
                        </div>

                        {/* Current Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Current Age: {currentAge} years
                            </label>
                            <input
                                type="range"
                                min="18"
                                max="67"
                                value={currentAge}
                                onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>18</span>
                                <span>40</span>
                                <span>55</span>
                                <span>67</span>
                            </div>
                        </div>

                        {/* Disability Start Date */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                When Did Your Disability Begin?
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <select
                                    value={disabilityMonth}
                                    onChange={(e) => setDisabilityMonth(parseInt(e.target.value))}
                                    className="px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                                >
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {new Date(2000, i, 1).toLocaleString('en-US', { month: 'long' })}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={disabilityYear}
                                    onChange={(e) => setDisabilityYear(parseInt(e.target.value))}
                                    className="px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                                >
                                    {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Used to calculate potential Back Pay</p>
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                            >
                                {states.map((s) => (
                                    <option key={s.code} value={s.code}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate SSDI Benefits
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Main Result */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                            <p className="text-sm text-blue-100 mb-1">Estimated Monthly SSDI</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyWithCOLA)}</p>
                            <p className="text-sm text-blue-200 mt-2">
                                Includes {constants.colaDisplay} COLA (+{formatCurrency(result.colaIncrease)}/mo)
                            </p>
                        </div>

                        {/* Back Pay - KILLER FEATURE */}
                        <div className="bg-amber-50 border-b border-amber-200 p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="w-5 h-5 text-amber-600" />
                                <span className="font-semibold text-amber-800">Potential Back Pay (Lump Sum)</span>
                            </div>
                            <p className="text-3xl font-bold text-amber-600">{formatCurrency(result.backPayAmount)}</p>
                            <p className="text-sm text-amber-700 mt-2">
                                Based on {result.backPayMonths} months since disability
                                (minus {result.waitingPeriodMonths}-month waiting period)
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                Calculation Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">State</span>
                                    <span className="font-medium text-slate-800">{result.stateName}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Average Annual Income</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.averageIncome)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Current Age</span>
                                    <span className="font-medium text-slate-800">{result.currentAge} years</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Base Monthly SSDI</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.monthlyBenefit)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">{SITE.year} COLA Adjustment</span>
                                    <span className="font-medium text-green-600">+{formatCurrency(result.colaIncrease)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg border-t border-slate-200">
                                    <span className="text-slate-800 font-bold">Monthly with COLA</span>
                                    <span className="font-bold text-blue-600">{formatCurrency(result.monthlyWithCOLA)}</span>
                                </div>
                                <div className="flex justify-between py-2 text-lg">
                                    <span className="text-slate-800 font-bold">Annual Benefits</span>
                                    <span className="font-bold text-blue-600">{formatCurrency(result.monthlyWithCOLA * 12)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* FAQ Section */}
                <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        SSDI FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                How is SSDI calculated?
                            </h3>
                            <p className="text-slate-600">
                                SSDI is based on your Average Indexed Monthly Earnings (AIME) and uses
                                bend points to calculate your Primary Insurance Amount (PIA). The formula
                                replaces 90% of the first ${constants.bendPoints.first}, 32% up to ${constants.bendPoints.second}, and 15% above.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                What is Back Pay?
                            </h3>
                            <p className="text-slate-600">
                                Back Pay is a lump sum for benefits you should have received since becoming
                                disabled. There&apos;s a mandatory 5-month waiting period, but you may receive
                                months of back payments in one check when approved.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                What is the {SITE.year} COLA increase?
                            </h3>
                            <p className="text-slate-600">
                                The {SITE.year} Cost-of-Living Adjustment (COLA) is {constants.colaDisplay}.
                                This increase is applied to all Social Security and SSDI benefits starting
                                January {SITE.year}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/disability/ssi-calculator"
                        className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate SSI Benefits →
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                        <p className="text-xs text-amber-800">
                            <strong>Disclaimer:</strong> This is an estimate only based on {SITE.year} SSA guidelines.
                            Not an official SSA tool. Actual benefits may vary. Contact the Social Security Administration
                            or a qualified attorney for official benefit calculations.
                        </p>
                    </div>
                </div>
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
                                name: "How is SSDI calculated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "SSDI is based on your Average Indexed Monthly Earnings (AIME) and uses bend points to calculate your Primary Insurance Amount (PIA).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is Back Pay for SSDI?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Back Pay is a lump sum for benefits you should have received since becoming disabled, minus a 5-month waiting period.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: `What is the ${SITE.year} COLA increase?`,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: `The ${SITE.year} Cost-of-Living Adjustment (COLA) is ${constants.colaDisplay}, applied to all SSDI benefits starting January ${SITE.year}.`,
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
