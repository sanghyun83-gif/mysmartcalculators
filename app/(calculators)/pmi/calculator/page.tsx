"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calculator, Info, Clock } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    PMI_2026,
    calculatePMI,
    formatCurrency,
    PMIResult
} from "@/lib/calculators/pmi";

export default function PMICalculatorPage() {
    const [homePrice, setHomePrice] = useState("400,000");
    const [downPercent, setDownPercent] = useState(10);
    const [result, setResult] = useState<PMIResult | null>(null);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setHomePrice(""); return; }
        setHomePrice(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const priceNum = parseVal(homePrice);
        if (priceNum > 0) {
            setResult(calculatePMI(priceNum, downPercent));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pmi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">PMI Calculator</span>
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
                        Calculate Your PMI
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Private Mortgage Insurance required for &lt;20% down payment
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

                        {/* Down Payment Percent */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Down Payment Percentage
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {[3, 5, 10, 15, 20].map((pct) => (
                                    <button
                                        key={pct}
                                        type="button"
                                        onClick={() => setDownPercent(pct)}
                                        className={`py-3 rounded-lg border transition ${downPercent === pct
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            } ${pct >= 20 ? 'text-green-400' : ''}`}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                            </div>
                            {downPercent >= 20 && (
                                <p className="mt-2 text-sm text-green-400">
                                     No PMI required with 20%+ down!
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate PMI
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`bg-gradient-to-r ${result.pmiRate > 0 ? 'from-yellow-600 to-orange-600' : 'from-emerald-600 to-teal-600'} text-white p-6 text-center`}>
                            <p className="text-sm opacity-80 mb-1">
                                {result.pmiRate > 0 ? 'Monthly PMI Payment' : 'PMI Status'}
                            </p>
                            <p className="text-5xl font-bold">
                                {result.pmiRate > 0 ? formatCurrency(result.monthlyPMI) : 'No PMI!'}
                            </p>
                            {result.pmiRate > 0 && (
                                <p className="text-sm opacity-80 mt-2">
                                    {result.pmiRate}% annual rate  {formatCurrency(result.annualPMI)}/year
                                </p>
                            )}
                        </div>

                        {/* Removal Timeline */}
                        {result.pmiRate > 0 && (
                            <div className="bg-emerald-900/30 p-4 border-b border-slate-700">
                                <div className="flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4 text-emerald-400" />
                                    <span className="text-emerald-300">
                                        Estimated removal: <strong>{Math.floor(result.monthsToRemove / 12)} years {result.monthsToRemove % 12} months</strong>
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Home Price</span>
                                    <span className="font-medium text-white">{formatCurrency(result.homePrice)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Down Payment</span>
                                    <span className="font-medium text-white">{formatCurrency(result.downPayment)} ({result.downPaymentPercent}%)</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Loan Amount</span>
                                    <span className="font-medium text-white">{formatCurrency(result.loanAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Loan-to-Value (LTV)</span>
                                    <span className="font-medium text-white">{result.ltv}%</span>
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
                        PMI FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When is PMI removed?
                            </h3>
                            <p className="text-slate-400">
                                PMI is automatically removed at 78% LTV. You can request
                                removal at 80% LTV with a good payment history.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can I avoid PMI?
                            </h3>
                            <p className="text-slate-400">
                                Put 20% or more down. Some lenders offer lender-paid PMI
                                in exchange for a higher interest rate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {PMI_2026.citation}
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
                                name: "When is PMI removed?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "PMI is automatically removed at 78% LTV. You can request removal at 80% LTV with a good payment history.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
