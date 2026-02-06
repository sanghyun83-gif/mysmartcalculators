"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    SS_2026,
    calculateSS,
    formatCurrency,
    SSResult
} from "@/lib/calculators/social-security";

export default function SSCalculatorPage() {
    const [monthlyPIA, setMonthlyPIA] = useState("");
    const [claimAge, setClaimAge] = useState(67);
    const [result, setResult] = useState<SSResult | null>(null);
    const [comparison, setComparison] = useState<{ age62: SSResult, age67: SSResult, age70: SSResult } | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        const pia = parseVal(monthlyPIA);
        setResult(calculateSS(pia, claimAge));
        setComparison({
            age62: calculateSS(pia, 62),
            age67: calculateSS(pia, 67),
            age70: calculateSS(pia, 70),
        });
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-security" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">SS Calculator</span>
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
                        {SITE.year} Social Security Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your retirement benefits at different ages
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Monthly PIA */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Primary Insurance Amount (PIA)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={monthlyPIA}
                                    onChange={handleChange(setMonthlyPIA)}
                                    placeholder="2,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Find your PIA on your Social Security statement or SSA.gov
                            </p>
                        </div>

                        {/* Quick PIA Examples */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick examples:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[1500, 2000, 2500, 3000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setMonthlyPIA(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount.toLocaleString()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Claim Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Claiming Age: <span className="text-emerald-400 font-bold">{claimAge}</span>
                            </label>
                            <input
                                type="range"
                                min="62"
                                max="70"
                                value={claimAge}
                                onChange={(e) => setClaimAge(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>62 (Early)</span>
                                <span>67 (FRA)</span>
                                <span>70 (Max)</span>
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
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Monthly Benefit at Age {result.claimAge}</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyBenefit)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {formatCurrency(result.annualBenefit)}/year ??                                {result.reductionPercent > 0 && ` ${result.reductionPercent}% reduction`}
                                {result.increasePercent > 0 && ` +${result.increasePercent}% increase`}
                            </p>
                        </div>

                        {/* Age Comparison */}
                        {comparison && (
                            <div className="p-6">
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    Compare Claiming Ages
                                </h3>

                                <div className="space-y-3">
                                    <div className={`flex justify-between py-3 px-4 rounded-lg ${claimAge === 62 ? 'bg-emerald-900/30 border border-emerald-500' : 'bg-slate-700/50'}`}>
                                        <div>
                                            <span className="text-white font-medium">Age 62</span>
                                            <span className="text-red-400 text-xs ml-2">-{comparison.age62.reductionPercent}%</span>
                                        </div>
                                        <span className="font-bold text-white">{formatCurrency(comparison.age62.monthlyBenefit)}/mo</span>
                                    </div>
                                    <div className={`flex justify-between py-3 px-4 rounded-lg ${claimAge === 67 ? 'bg-emerald-900/30 border border-emerald-500' : 'bg-slate-700/50'}`}>
                                        <div>
                                            <span className="text-white font-medium">Age 67 (FRA)</span>
                                            <span className="text-emerald-400 text-xs ml-2">100%</span>
                                        </div>
                                        <span className="font-bold text-white">{formatCurrency(comparison.age67.monthlyBenefit)}/mo</span>
                                    </div>
                                    <div className={`flex justify-between py-3 px-4 rounded-lg ${claimAge === 70 ? 'bg-emerald-900/30 border border-emerald-500' : 'bg-slate-700/50'}`}>
                                        <div>
                                            <span className="text-white font-medium">Age 70</span>
                                            <span className="text-blue-400 text-xs ml-2">+{comparison.age70.increasePercent}%</span>
                                        </div>
                                        <span className="font-bold text-white">{formatCurrency(comparison.age70.monthlyBenefit)}/mo</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Lifetime Estimate */}
                        <div className="p-4 bg-blue-900/20 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Estimated lifetime benefits (to age 85): <strong>{formatCurrency(result.lifetimeBenefits85)}</strong>
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
                        Social Security FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is PIA?
                            </h3>
                            <p className="text-slate-400">
                                Your Primary Insurance Amount (PIA) is your benefit at Full Retirement Age,
                                calculated from your highest 35 years of earnings.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Should I claim early or wait?
                            </h3>
                            <p className="text-slate-400">
                                It depends on your health, financial needs, and longevity expectations.
                                Waiting until 70 gives the highest monthly benefit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Visit SSA.gov for your official benefit statement.
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
                                name: "What is Social Security PIA?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Your Primary Insurance Amount (PIA) is your Social Security benefit at Full Retirement Age, based on your highest 35 years of earnings.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
