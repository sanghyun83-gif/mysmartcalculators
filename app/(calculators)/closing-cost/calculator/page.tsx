"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Receipt, Calculator, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    CLOSING_COST_2026,
    calculateClosingCosts,
    formatCurrency,
    ClosingCostResult
} from "@/lib/calculators/closing-cost";

export default function ClosingCostCalculatorPage() {
    const [homePrice, setHomePrice] = useState("400,000");
    const [downPercent, setDownPercent] = useState(20);
    const [userType, setUserType] = useState<"buyer" | "seller" | "both">("both");
    const [result, setResult] = useState<ClosingCostResult | null>(null);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setHomePrice(""); return; }
        setHomePrice(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const priceNum = parseVal(homePrice);
        if (priceNum > 0) {
            setResult(calculateClosingCosts(priceNum, downPercent));
        }
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        Calculate Closing Costs
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Get itemized estimates for buyer and seller fees
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Home Price */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Home Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={homePrice}
                                    onChange={handlePriceChange}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                {[250000, 400000, 500000, 750000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setHomePrice(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Down Payment Percentage
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {[5, 10, 15, 20, 25].map((pct) => (
                                    <button
                                        key={pct}
                                        type="button"
                                        onClick={() => setDownPercent(pct)}
                                        className={`py-2 rounded-lg border transition text-sm ${downPercent === pct
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* User Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                I am a...
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: "buyer", label: "Buyer" },
                                    { value: "seller", label: "Seller" },
                                    { value: "both", label: "Both" },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setUserType(opt.value as "buyer" | "seller" | "both")}
                                        className={`py-3 rounded-lg border transition ${userType === opt.value
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {opt.label}
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
                        Calculate Closing Costs
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 space-y-6">
                        {/* Buyer Costs */}
                        {(userType === "buyer" || userType === "both") && (
                            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold">Buyer Closing Costs</h3>
                                        <span className="text-sm opacity-80">{result.buyerPercent}% of price</span>
                                    </div>
                                    <p className="text-3xl font-bold mt-1">{formatCurrency(result.totalBuyerCosts)}</p>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-2 text-sm">
                                        {result.buyerCosts.map((cost) => (
                                            <div key={cost.name} className="flex justify-between py-1 border-b border-slate-700/50 last:border-0">
                                                <span className="text-slate-300">{cost.name}</span>
                                                <span className="text-white font-medium">{formatCurrency(cost.amount)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Seller Costs */}
                        {(userType === "seller" || userType === "both") && (
                            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold">Seller Closing Costs</h3>
                                        <span className="text-sm opacity-80">{result.sellerPercent}% of price</span>
                                    </div>
                                    <p className="text-3xl font-bold mt-1">{formatCurrency(result.totalSellerCosts)}</p>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-2 text-sm">
                                        {result.sellerCosts.map((cost) => (
                                            <div key={cost.name} className="flex justify-between py-1 border-b border-slate-700/50 last:border-0">
                                                <span className="text-slate-300">{cost.name}</span>
                                                <span className="text-white font-medium">{formatCurrency(cost.amount)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
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
                        Closing Cost FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can closing costs be negotiated?
                            </h3>
                            <p className="text-slate-400">
                                Yes! You can ask the seller to pay some buyer closing costs,
                                or negotiate lower fees with your lender.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can I roll closing costs into my mortgage?
                            </h3>
                            <p className="text-slate-400">
                                Some loans allow this, but it increases your loan amount and
                                total interest paid over time.
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
                                name: "Can closing costs be negotiated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes! You can ask the seller to pay some buyer closing costs, or negotiate lower fees with your lender.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
