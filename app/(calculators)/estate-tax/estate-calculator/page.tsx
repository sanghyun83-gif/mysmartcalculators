"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    ESTATE_TAX_2026,
    calculateEstateTax,
    formatCurrency,
    formatFullCurrency,
    EstateTaxResult
} from "@/lib/calculators/estate-tax";

export default function EstateCalculatorPage() {
    const [grossEstate, setGrossEstate] = useState("");
    const [deductions, setDeductions] = useState("");
    const [isMarried, setIsMarried] = useState(false);
    const [stateWithTax, setStateWithTax] = useState("");
    const [result, setResult] = useState<EstateTaxResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateEstateTax(
            parseVal(grossEstate),
            parseVal(deductions),
            isMarried,
            stateWithTax
        ));
    };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Estate Tax Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate federal estate tax liability
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Gross Estate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Gross Estate Value
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={grossEstate}
                                    onChange={handleChange(setGrossEstate)}
                                    placeholder="15,000,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Total value of all assets at death</p>
                        </div>

                        {/* Deductions */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Deductions (Debts, Expenses, Charitable)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={deductions}
                                    onChange={handleChange(setDeductions)}
                                    placeholder="500,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Marital Status */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Marital Status (Portability)
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsMarried(false)}
                                    className={`py-3 rounded-lg border transition ${!isMarried
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Single
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsMarried(true)}
                                    className={`py-3 rounded-lg border transition ${isMarried
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Married (w/ Portability)
                                </button>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Exemption: {formatCurrency(isMarried ? ESTATE_TAX_2026.marriedExemption : ESTATE_TAX_2026.federalExemption)}
                            </p>
                        </div>

                        {/* State Tax */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                State Estate Tax (if applicable)
                            </label>
                            <select
                                value={stateWithTax}
                                onChange={(e) => setStateWithTax(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="">No State Estate Tax</option>
                                {ESTATE_TAX_2026.statesWithEstateTax.map((s) => (
                                    <option key={s.state} value={s.state}>
                                        {s.state} ({formatCurrency(s.exemption)} exemption)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Estate Tax
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`text-white p-6 ${result.totalTax > 0
                            ? "bg-gradient-to-r from-red-600 to-rose-600"
                            : "bg-gradient-to-r from-emerald-600 to-green-600"}`}>
                            <p className="text-sm opacity-80 mb-1">Estimated Total Estate Tax</p>
                            <p className="text-4xl font-bold">{formatFullCurrency(result.totalTax)}</p>
                            <p className="text-sm opacity-80 mt-2">
                                {result.totalTax > 0
                                    ? `${result.effectiveRate}% effective rate`
                                    : "No estate tax owed"}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Gross Estate</span>
                                    <span className="font-medium text-white">{formatFullCurrency(result.grossEstate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Less: Deductions</span>
                                    <span className="font-medium text-white">-{formatFullCurrency(result.deductions)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Taxable Estate</span>
                                    <span className="font-medium text-white">{formatFullCurrency(result.taxableEstate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Exemption ({result.isMarried ? "Married" : "Single"})</span>
                                    <span className="font-medium text-emerald-400">-{formatFullCurrency(result.exemptionUsed)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Amount Over Exemption</span>
                                    <span className="font-medium text-white">{formatFullCurrency(result.taxableAfterExemption)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Federal Estate Tax</span>
                                    <span className="font-medium text-red-400">{formatFullCurrency(result.federalTax)}</span>
                                </div>
                                {result.stateTax > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">State Estate Tax</span>
                                        <span className="font-medium text-red-400">{formatFullCurrency(result.stateTax)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Estate Tax</span>
                                    <span className={`font-bold ${result.totalTax > 0 ? "text-red-400" : "text-emerald-400"}`}>
                                        {formatFullCurrency(result.totalTax)}
                                    </span>
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
                        Estate Tax FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the estate tax exemption?
                            </h3>
                            <p className="text-slate-400">
                                In {SITE.year}, estates under {formatCurrency(ESTATE_TAX_2026.federalExemption)}
                                per person owe no federal estate tax. Married couples can combine
                                exemptions through portability.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is estate tax portability?
                            </h3>
                            <p className="text-slate-400">
                                When a spouse dies, their unused exemption can transfer to the surviving
                                spouse, effectively doubling the exemption for married couples.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Consult an estate planning attorney and CPA for actual liability.
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
                                name: "What is the federal estate tax exemption?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: `In ${SITE.year}, estates under $13.99 million per person owe no federal estate tax.`,
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
