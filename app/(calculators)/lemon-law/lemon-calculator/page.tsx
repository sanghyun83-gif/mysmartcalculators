"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Car, Calculator, Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import {
    SITE,
    STATE_LEMON,
    LEMON_CONSTANTS_2026,
    calculateLemonClaim,
    formatCurrency,
    parseFormattedNumber,
    LemonResult
} from "@/lib/calculators/lemon-law";

export default function LemonCalculatorPage() {
    const [purchasePrice, setPurchasePrice] = useState("");
    const [milesAtRepair, setMilesAtRepair] = useState("");
    const [repairAttempts, setRepairAttempts] = useState(2);
    const [daysInShop, setDaysInShop] = useState(15);
    const [isSafetyIssue, setIsSafetyIssue] = useState(false);
    const [state, setState] = useState<keyof typeof STATE_LEMON>("california");
    const [result, setResult] = useState<LemonResult | null>(null);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setPurchasePrice("");
            return;
        }
        setPurchasePrice(parseInt(raw).toLocaleString("en-US"));
    };

    const handleMilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setMilesAtRepair("");
            return;
        }
        setMilesAtRepair(parseInt(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const price = parseFormattedNumber(purchasePrice) || 35000;
        const miles = parseFormattedNumber(milesAtRepair) || 5000;
        setResult(calculateLemonClaim(price, miles, repairAttempts, daysInShop, state, isSafetyIssue));
    };

    const stateOptions = Object.entries(STATE_LEMON).map(([key, s]) => ({
        value: key,
        label: `${s.name} (${s.abbr})`,
    }));

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Lemon Law Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Check if you qualify and estimate your refund
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value as keyof typeof STATE_LEMON)}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                            >
                                {stateOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                {STATE_LEMON[state].strength} protection | {STATE_LEMON[state].repairAttempts} repairs or {STATE_LEMON[state].daysOutOfService}+ days
                            </p>
                        </div>

                        {/* Purchase Price */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Vehicle Purchase Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={purchasePrice}
                                    onChange={handlePriceChange}
                                    placeholder="35,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                        </div>

                        {/* Miles at First Repair */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Miles at First Repair Attempt
                            </label>
                            <input
                                type="text"
                                value={milesAtRepair}
                                onChange={handleMilesChange}
                                placeholder="5,000"
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Used to calculate mileage offset (deducted from refund)
                            </p>
                        </div>

                        {/* Repair Attempts */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Number of Repair Attempts: {repairAttempts}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={repairAttempts}
                                onChange={(e) => setRepairAttempts(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>1</span>
                                <span>5</span>
                                <span>10</span>
                            </div>
                        </div>

                        {/* Days in Shop */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Days Out of Service: {daysInShop} days
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="60"
                                value={daysInShop}
                                onChange={(e) => setDaysInShop(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>0 days</span>
                                <span>30 days</span>
                                <span>60 days</span>
                            </div>
                        </div>

                        {/* Safety Issue Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Safety-Related Defect?</p>
                                <p className="text-xs text-slate-400">Only 2 repair attempts needed if yes</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsSafetyIssue(!isSafetyIssue)}
                                className={`w-14 h-8 rounded-full transition-colors ${isSafetyIssue ? "bg-amber-600" : "bg-slate-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${isSafetyIssue ? "translate-x-6" : "translate-x-0"
                                    }`} />
                            </button>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Check Eligibility
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`p-6 ${result.qualifies
                            ? "bg-gradient-to-r from-green-600 to-emerald-600"
                            : "bg-gradient-to-r from-amber-600 to-orange-600"
                            } text-white`}>
                            <div className="flex items-center gap-2 mb-2">
                                {result.qualifies
                                    ? <CheckCircle className="w-6 h-6" />
                                    : <AlertTriangle className="w-6 h-6" />
                                }
                                <p className="text-lg font-semibold">
                                    {result.qualifies ? "You May Qualify!" : "Not Yet Eligible"}
                                </p>
                            </div>
                            <p className="text-4xl font-bold">{formatCurrency(result.estimatedRefund)}</p>
                            <p className="text-sm opacity-90 mt-2">Estimated buyback refund</p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Claim Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Purchase Price</span>
                                    <span className="font-medium text-white">{formatCurrency(result.purchasePrice)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Miles at First Repair</span>
                                    <span className="font-medium text-white">{result.milesAtFirstRepair.toLocaleString()} mi</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Mileage Offset (deduction)</span>
                                    <span className="font-medium text-red-400">-{formatCurrency(result.mileageOffset)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Repair Attempts</span>
                                    <span className="font-medium text-white">{result.repairAttempts}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Days in Shop</span>
                                    <span className="font-medium text-white">{result.daysInShop} days</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">State</span>
                                    <span className="font-medium text-white">{result.state}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Estimated Refund</span>
                                    <span className="font-bold text-green-400">{formatCurrency(result.estimatedRefund)}</span>
                                </div>
                            </div>

                            {/* Qualification Status */}
                            <div className={`mt-6 p-4 rounded-lg ${result.qualifies
                                ? "bg-green-900/30 border border-green-700/50"
                                : "bg-amber-900/30 border border-amber-700/50"
                                }`}>
                                <p className={`text-sm ${result.qualifies ? "text-green-200" : "text-amber-200"}`}>
                                    {result.qualifyReason}
                                </p>
                            </div>
                        </div>

                        {/* Attorney Fees Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    <strong>Good News:</strong> If your lemon law claim is successful, the manufacturer pays your attorney fees. Most lemon law attorneys offer free consultations.
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
                        <Info className="w-5 h-5 text-amber-500" />
                        Lemon Law FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the mileage offset?
                            </h3>
                            <p className="text-slate-400">
                                The mileage offset is a deduction for the miles you drove before the first repair.
                                Formula: (miles at first repair ÷ 120,000) × purchase price.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Do I need a lawyer for a lemon law claim?
                            </h3>
                            <p className="text-slate-400">
                                While not required, a lemon law attorney is strongly recommended.
                                If you win, the manufacturer pays the attorney fees? not you.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What are my remedy options?
                            </h3>
                            <p className="text-slate-400">
                                Typically: buyback (refund minus mileage offset), replacement vehicle of equal value, or cash settlement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} state laws.
                    Consult a lemon law attorney for your specific case.
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
                                name: "What is the lemon law mileage offset?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The mileage offset is a deduction for miles driven before the first repair. Formula: (miles at first repair ÷ 120,000) × purchase price.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do I need a lawyer for a lemon law claim?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "While not required, a lemon law attorney is recommended. If you win, the manufacturer pays attorney fees.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
