"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Anchor, Calculator, Info, CheckCircle } from "lucide-react";
import {
    SITE,
    BOAT_2026,
    calculateBoat,
    formatCurrency,
    BoatResult
} from "@/lib/calculators/boat-insurance";

export default function BoatCalculatorPage() {
    const [boatValue, setBoatValue] = useState("35,000");
    const [boatType, setBoatType] = useState("powerboat");
    const [liability, setLiability] = useState(300000);
    const [newBoat, setNewBoat] = useState(false);
    const [safetyCourse, setSafetyCourse] = useState(false);
    const [multiPolicy, setMultiPolicy] = useState(false);
    const [result, setResult] = useState<BoatResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateBoat(
            parseVal(boatValue),
            boatType,
            liability,
            newBoat,
            safetyCourse,
            multiPolicy
        ));
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Boat Insurance Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your watercraft insurance premium
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Boat Value */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Boat Value
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={boatValue}
                                    onChange={handleChange(setBoatValue)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Quick Values */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[15000, 35000, 75000, 150000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setBoatValue(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Boat Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Boat Type
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: "pwc", label: "PWC/Jet Ski" },
                                    { value: "powerboat", label: "Powerboat" },
                                    { value: "sailboat", label: "Sailboat" },
                                ].map((type) => (
                                    <button
                                        key={type.value}
                                        type="button"
                                        onClick={() => setBoatType(type.value)}
                                        className={`py-3 rounded-lg border transition text-sm ${boatType === type.value
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Liability */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Liability Coverage
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[100000, 300000, 500000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setLiability(amount)}
                                        className={`py-3 rounded-lg border transition ${liability === amount
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {formatCurrency(amount)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Discounts */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-slate-300">
                                Available Discounts
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={newBoat}
                                    onChange={(e) => setNewBoat(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">New boat (10% off)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={safetyCourse}
                                    onChange={(e) => setSafetyCourse(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Boating safety course (15% off)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={multiPolicy}
                                    onChange={(e) => setMultiPolicy(e.target.checked)}
                                    className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-slate-300">Bundle with auto/home (10% off)</span>
                            </label>
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
                            <p className="text-sm text-blue-100 mb-1">Estimated Annual Premium</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.annualPremium)}</p>
                            <p className="text-sm text-blue-100 mt-2">
                                {result.coverageType} Coverage • {formatCurrency(result.monthlyPremium)}/month
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Policy Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Boat Value</span>
                                    <span className="font-medium text-white">{formatCurrency(result.boatValue)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Liability</span>
                                    <span className="font-medium text-white">{formatCurrency(result.liabilityAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Coverage Type</span>
                                    <span className="font-medium text-blue-400">{result.coverageType}</span>
                                </div>
                                {result.discountsApplied > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Discounts Saved</span>
                                        <span className="font-medium text-green-400">-{formatCurrency(result.discountsApplied)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Annual Cost</span>
                                    <span className="font-bold text-blue-400">{formatCurrency(result.annualPremium)}</span>
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
                        <Info className="w-5 h-5 text-blue-500" />
                        Boat Insurance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What&apos;s the difference between agreed and actual value?
                            </h3>
                            <p className="text-slate-400">
                                Agreed value pays the full insured amount in a total loss.
                                Actual cash value pays depreciated value minus wear and tear.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Do I need boat insurance?
                            </h3>
                            <p className="text-slate-400">
                                While not legally required in most states, lenders and marinas
                                typically require it. It protects your investment and liability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
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
                                name: "What is the difference between agreed and actual value?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Agreed value pays the full insured amount in a total loss. Actual cash value pays depreciated value.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
