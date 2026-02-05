"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Calculator, Info, TrendingUp } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    SEVERANCE_CONSTANTS_2026,
    calculateSeverance,
    formatCurrency,
    parseFormattedNumber,
    SeveranceResult
} from "@/lib/calculators/severance";

export default function SeveranceCalculatorPage() {
    const [salary, setSalary] = useState("");
    const [years, setYears] = useState("");
    const [weeksPerYear, setWeeksPerYear] = useState(1);
    const [ptoDays, setPtoDays] = useState("");
    const [cobraMonths, setCobraMonths] = useState(0);
    const [result, setResult] = useState<SeveranceResult | null>(null);

    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setSalary("");
            return;
        }
        setSalary(parseInt(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const annualSalary = parseFormattedNumber(salary) || 80000;
        const yearsOfService = parseFloat(years) || 3;
        const pto = parseFloat(ptoDays) || 0;
        setResult(calculateSeverance(annualSalary, yearsOfService, weeksPerYear, pto, cobraMonths));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/severance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Severance Calculator</span>
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
                        {SITE.year} Severance Pay Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your layoff package
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Annual Salary */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Annual Salary
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={salary}
                                    onChange={handleSalaryChange}
                                    placeholder="80,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Years of Service */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Years of Service
                            </label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                placeholder="3"
                                step="0.5"
                                min="0"
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Formula Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Severance Formula
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: 1, label: "Standard", desc: "1 week/year" },
                                    { value: 2, label: "Generous", desc: "2 weeks/year" },
                                    { value: 4, label: "Executive", desc: "4 weeks/year" },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setWeeksPerYear(opt.value)}
                                        className={`py-3 rounded-lg border text-center transition ${weeksPerYear === opt.value
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs mt-1 opacity-75">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Unused PTO */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Unused PTO Days (optional)
                            </label>
                            <input
                                type="number"
                                value={ptoDays}
                                onChange={(e) => setPtoDays(e.target.value)}
                                placeholder="10"
                                min="0"
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* COBRA Months */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                COBRA Coverage (months company pays)
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="12"
                                value={cobraMonths}
                                onChange={(e) => setCobraMonths(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>0 months</span>
                                <span className="text-emerald-400">{cobraMonths} months</span>
                                <span>12 months</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Severance
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Estimated Total Package</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalPackage)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.weeksOfPay} weeks of pay ({result.formula})
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Package Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Base Severance</span>
                                    <span className="font-medium text-white">{formatCurrency(result.baseSeverance)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Weeks of Pay</span>
                                    <span className="font-medium text-white">{result.weeksOfPay} weeks</span>
                                </div>
                                {result.ptoValue > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">PTO Payout</span>
                                        <span className="font-medium text-white">{formatCurrency(result.ptoValue)}</span>
                                    </div>
                                )}
                                {result.cobraEstimate > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">COBRA Coverage Value</span>
                                        <span className="font-medium text-white">{formatCurrency(result.cobraEstimate)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Package</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.totalPackage)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Negotiation Tip */}
                        <div className="p-4 bg-amber-900/30 border-t border-amber-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-amber-400 mt-0.5" />
                                <p className="text-amber-200">
                                    <strong>Tip:</strong> {SEVERANCE_CONSTANTS_2026.statistics.pctWhoNegotiate}% of employees who negotiate
                                    get an average of {SEVERANCE_CONSTANTS_2026.statistics.avgWithNegotiation - SEVERANCE_CONSTANTS_2026.statistics.avgSeveranceWeeks} more weeks!
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
                        Severance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Is severance required by law?
                            </h3>
                            <p className="text-slate-400">
                                No. Federal law doesn&apos;t require severance pay. However, the WARN Act requires
                                60-day notice for mass layoffs, which may result in pay in lieu of notice.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can I negotiate my severance?
                            </h3>
                            <p className="text-slate-400">
                                Yes! Almost everything in a severance package is negotiable. Ask for more weeks,
                                extended healthcare, outplacement services, or favorable reference language.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What about the release agreement?
                            </h3>
                            <p className="text-slate-400">
                                Companies typically ask you to sign a release waiving legal claims. You can
                                negotiate the terms and should consider having an attorney review it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates. Actual severance depends on company policy and negotiation.
                    Consult an employment attorney for specific advice.
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
                                name: "Is severance pay required by law?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Federal law doesn't require severance pay. However, the WARN Act requires 60-day notice for mass layoffs.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I negotiate my severance package?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, almost everything in a severance package is negotiable including weeks of pay, healthcare, and reference language.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
