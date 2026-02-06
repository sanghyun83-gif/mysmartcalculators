"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, Calculator, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    DOWN_PAYMENT_2026,
    calculateDownPayment,
    formatCurrency,
    DownPaymentResult
} from "@/lib/calculators/down-payment";

export default function DownPaymentCalculatorPage() {
    const [homePrice, setHomePrice] = useState("400,000");
    const [downPercent, setDownPercent] = useState(20);
    const [monthlySavings, setMonthlySavings] = useState("1,500");
    const [result, setResult] = useState<DownPaymentResult | null>(null);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setHomePrice(""); return; }
        setHomePrice(parseInt(raw).toLocaleString("en-US"));
    };

    const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setMonthlySavings(""); return; }
        setMonthlySavings(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const priceNum = parseVal(homePrice);
        const savingsNum = parseVal(monthlySavings);
        if (priceNum > 0) {
            setResult(calculateDownPayment(priceNum, downPercent, savingsNum));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/down-payment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Down Payment Calculator</span>
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
                        Calculate Your Down Payment
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Enter home price and select down payment percentage
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
                                {DOWN_PAYMENT_2026.percentages.map((opt) => (
                                    <button
                                        key={opt.percent}
                                        type="button"
                                        onClick={() => setDownPercent(opt.percent)}
                                        className={`py-3 rounded-lg border transition text-sm ${downPercent === opt.percent
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {opt.percent}%
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Monthly Savings */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Monthly Savings (optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={monthlySavings}
                                    onChange={handleSavingsChange}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 text-center">
                            <p className="text-sm text-emerald-100 mb-1">Down Payment Needed</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.downPaymentAmount)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.downPaymentPercent}% of {formatCurrency(result.homePrice)}
                            </p>
                        </div>

                        {/* PMI Status */}
                        <div className={`p-4 border-b border-slate-700 ${result.pmiRequired ? 'bg-yellow-900/30' : 'bg-emerald-900/30'}`}>
                            <div className="flex items-center justify-center gap-2">
                                {result.pmiRequired ? (
                                    <>
                                        <span className="text-yellow-400"></span>
                                        <span className="text-yellow-300">PMI Required: {formatCurrency(result.monthlyPMI)}/mo</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-emerald-400"></span>
                                        <span className="text-emerald-300">No PMI Required!</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Loan Amount</span>
                                    <span className="font-medium text-white">{formatCurrency(result.loanAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Closing Costs (est. 3%)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.closingCostsEstimate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300 font-bold">Total Cash Needed</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.totalCashNeeded)}</span>
                                </div>
                            </div>

                            {/* Savings Timeline */}
                            {result.monthsToSave > 0 && (
                                <div className="mt-4 pt-4 border-t border-slate-700">
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                        Savings Timeline
                                    </h3>
                                    <div className="bg-emerald-900/30 rounded-lg p-4 text-center">
                                        <p className="text-3xl font-bold text-emerald-400">{result.monthsToSave} months</p>
                                        <p className="text-sm text-emerald-300">at {formatCurrency(parseVal(monthlySavings))}/month</p>
                                    </div>
                                </div>
                            )}
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
                        Down Payment FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much down payment do I need?
                            </h3>
                            <p className="text-slate-400">
                                Minimum is 3% for conventional loans. 20% avoids PMI.
                                The average first-time buyer puts down 8%.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is PMI?
                            </h3>
                            <p className="text-slate-400">
                                Private Mortgage Insurance protects lenders when you put down less than 20%.
                                It adds 0.5-1.5% of your loan amount annually.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {DOWN_PAYMENT_2026.citation}
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
                                name: "How much down payment do I need for a house?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Minimum is 3% for conventional loans. 20% avoids PMI. The average first-time buyer puts down 8%.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
