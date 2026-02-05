"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Wallet, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    ANNUITY_2026,
    calculateAnnuity,
    formatCurrency,
    AnnuityResult
} from "@/lib/calculators/annuity";

export default function AnnuityCalculatorPage() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("5.5");
    const [years, setYears] = useState("10");
    const [age, setAge] = useState("65");
    const [gender, setGender] = useState("male");
    const [payoutType, setPayoutType] = useState("lifeOnly");
    const [result, setResult] = useState<AnnuityResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateAnnuity(
            parseVal(principal),
            parseFloat(rate),
            parseInt(years),
            payoutType,
            parseInt(age),
            gender
        ));
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Annuity Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate retirement income from annuities
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Principal */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Initial Investment (Premium)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={principal}
                                    onChange={handleChange(setPrincipal)}
                                    placeholder="100,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Quick Amounts */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick amounts:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[50000, 100000, 250000, 500000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setPrincipal(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount >= 1000000 ? `${amount / 1000000}M` : `${amount / 1000}K`}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Rate & Years */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Annual Rate (%)
                                </label>
                                <select
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                    className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="5.2">5.2% (3-Year)</option>
                                    <option value="5.5">5.5% (5-Year)</option>
                                    <option value="5.7">5.7% (7-Year)</option>
                                    <option value="5.9">5.9% (10-Year)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Growth Years
                                </label>
                                <select
                                    value={years}
                                    onChange={(e) => setYears(e.target.value)}
                                    className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="5">5 Years</option>
                                    <option value="10">10 Years</option>
                                    <option value="15">15 Years</option>
                                    <option value="20">20 Years</option>
                                </select>
                            </div>
                        </div>

                        {/* Age & Gender */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Age at Payout
                                </label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Gender
                                </label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        {/* Payout Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Payout Option
                            </label>
                            <select
                                value={payoutType}
                                onChange={(e) => setPayoutType(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="lifeOnly">Life Only (Highest Payout)</option>
                                <option value="life10Year">Life + 10-Year Certain</option>
                                <option value="life20Year">Life + 20-Year Certain</option>
                                <option value="joint100">Joint & 100% Survivor</option>
                                <option value="joint50">Joint & 50% Survivor</option>
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Annuity Payout
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Estimated Monthly Income</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyPayout)}/mo</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {formatCurrency(result.annualPayout)}/year • Break-even: {result.breakEvenYears} years
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Annuity Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Initial Premium</span>
                                    <span className="font-medium text-white">{formatCurrency(result.principal)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Growth Rate</span>
                                    <span className="font-medium text-white">{result.annualRate}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Growth Period</span>
                                    <span className="font-medium text-white">{result.years} years</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Value at Payout</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.futureValue)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Annual Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.annualPayout)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Est. Total Payouts (20 yrs)</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.totalPayouts)}</span>
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
                        Annuity FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is an annuity?
                            </h3>
                            <p className="text-slate-400">
                                An annuity is a financial product that provides regular payments
                                in exchange for an initial lump sum, typically used for retirement income.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What affects annuity payouts?
                            </h3>
                            <p className="text-slate-400">
                                Key factors include your age, gender, interest rates, premium amount,
                                and the payout option you choose (life-only vs period certain).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Actual payments vary. Consult a financial advisor.
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
                                name: "What is an annuity?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "An annuity is a financial product that provides regular payments in exchange for an initial lump sum.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
