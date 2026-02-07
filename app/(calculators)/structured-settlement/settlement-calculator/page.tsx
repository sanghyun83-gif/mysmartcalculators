"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Calculator, Info, AlertTriangle, TrendingDown } from "lucide-react";
import {
    SITE,
    DISCOUNT_BY_TERM,
    calculateSettlementValue,
    formatCurrency,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/structured-settlement";

export default function SettlementCalculatorPage() {
    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [yearsRemaining, setYearsRemaining] = useState(10);
    const [termType, setTermType] = useState<keyof typeof DISCOUNT_BY_TERM>("mediumTerm");
    const [result, setResult] = useState<SettlementResult | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setMonthlyPayment("");
            return;
        }
        setMonthlyPayment(parseInt(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const payment = parseFormattedNumber(monthlyPayment) || 2000;
        setResult(calculateSettlementValue(payment, yearsRemaining, termType));
    };

    const termOptions = Object.entries(DISCOUNT_BY_TERM).map(([key, term]) => ({
        value: key,
        label: term.name,
        discountRate: term.discountRate,
    }));

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/structured-settlement" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Settlement Calculator</span>
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
                        {SITE.year} Structured Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate how much cash you can get for your settlement
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Monthly Payment */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Monthly Payment Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={monthlyPayment}
                                    onChange={handleInputChange}
                                    placeholder="2,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Your current monthly payment from the structured settlement
                            </p>
                        </div>

                        {/* Years Remaining */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Years of Payments Remaining: {yearsRemaining} years
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={yearsRemaining}
                                onChange={(e) => {
                                    const years = parseInt(e.target.value);
                                    setYearsRemaining(years);
                                    // Auto-update term type
                                    if (years <= 5) setTermType("shortTerm");
                                    else if (years <= 10) setTermType("mediumTerm");
                                    else if (years <= 20) setTermType("longTerm");
                                    else setTermType("veryLongTerm");
                                }}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>1 year</span>
                                <span>15 years</span>
                                <span>30 years</span>
                            </div>
                        </div>

                        {/* Term Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Payment Term Category
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {termOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setTermType(opt.value as keyof typeof DISCOUNT_BY_TERM)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${termType === opt.value
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold truncate">{opt.label}</div>
                                        <div className="text-xs mt-1 opacity-75">
                                            {(opt.discountRate * 100)}% discount
                                        </div>
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
                        Calculate Cash Value
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Estimated Cash Value</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netCashNow)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                vs {formatCurrency(result.totalFutureValue)} if you keep payments
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Monthly Payment</span>
                                    <span className="font-medium text-white">{formatCurrency(result.monthlyPayment)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Years Remaining</span>
                                    <span className="font-medium text-white">{result.yearsRemaining} years ({result.totalPayments} payments)</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Future Value</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalFutureValue)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Term Type</span>
                                    <span className="font-medium text-white">{result.termType}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Discount Rate</span>
                                    <span className="font-medium text-emerald-400">{(result.discountRate * 100)}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Present Value</span>
                                    <span className="font-medium text-white">{formatCurrency(result.presentValue)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Estimated Fees</span>
                                    <span className="font-medium text-red-400">-{formatCurrency(result.estimatedFees)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Net Cash Now</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.netCashNow)}</span>
                                </div>
                            </div>

                            {/* Loss Summary */}
                            <div className="mt-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TrendingDown className="w-5 h-5 text-red-400" />
                                        <span className="text-red-200 font-medium">Money Lost by Selling</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-red-400">{formatCurrency(result.moneyLost)}</p>
                                        <p className="text-xs text-red-300">{result.percentageLost}% of total value</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Warning */}
                        <div className="p-4 bg-amber-900/30 border-t border-amber-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                                <p className="text-amber-200">
                                    <strong>Get Multiple Quotes:</strong> Discount rates vary significantly between companies.
                                    Always get at least 3 quotes before selling your settlement.
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
                        Structured Settlement FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much can I get for my structured settlement?
                            </h3>
                            <p className="text-slate-400">
                                Typically 50-85% of the total future value, depending on how many years of payments remain.
                                Shorter payouts get better rates (less discount).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a discount rate?
                            </h3>
                            <p className="text-slate-400">
                                The discount rate is the interest rate used to calculate the present value of future payments.
                                Higher discount rates mean you receive less cash.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Do I need court approval to sell?
                            </h3>
                            <p className="text-slate-400">
                                Yes. Federal law requires court approval for all structured settlement sales.
                                A judge must determine the sale is in your best interest.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long does the process take?
                            </h3>
                            <p className="text-slate-400">
                                Typically 8-12 weeks from initial application to receiving your cash, due to the required court approval process.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates. Actual offers will vary.
                    Get quotes from multiple companies before making a decision.
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
                                name: "How much can I get for my structured settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Typically 50-85% of the total future value, depending on how many years of payments remain.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do I need court approval to sell my structured settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, federal law requires court approval for all structured settlement sales.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
