"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingDown, Calculator, Info } from "lucide-react";
import {
    SITE,
    LOAN_2026,
    calculatePayoff,
    formatCurrency,
    PayoffResult
} from "@/lib/calculators/loan-payoff";

export default function LoanCalculatorPage() {
    const [balance, setBalance] = useState("25,000");
    const [rate, setRate] = useState("7.0");
    const [payment, setPayment] = useState("500");
    const [extraPayment, setExtraPayment] = useState("100");
    const [result, setResult] = useState<PayoffResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9.]/g, "");
        setter(raw);
    };

    const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setBalance(""); return; }
        setBalance(parseInt(raw).toLocaleString("en-US"));
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setPayment(""); return; }
        setPayment(parseInt(raw).toLocaleString("en-US"));
    };

    const handleExtraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setExtraPayment(""); return; }
        setExtraPayment(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        const balanceNum = parseVal(balance);
        const rateNum = parseFloat(rate) || 0;
        const paymentNum = parseVal(payment);
        const extraNum = parseVal(extraPayment);

        if (balanceNum > 0 && rateNum > 0 && paymentNum > 0) {
            setResult(calculatePayoff(balanceNum, rateNum, paymentNum, extraNum));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/loan-payoff" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Loan Payoff Calculator</span>
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
                        Calculate Your Loan Payoff
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        See how extra payments accelerate your debt-free date
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Loan Balance */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Loan Balance
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={balance}
                                    onChange={handleBalanceChange}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Quick Balances */}
                        <div>
                            <div className="grid grid-cols-4 gap-2">
                                {[10000, 25000, 50000, 100000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setBalance(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Interest Rate (APR)
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={rate}
                                    onChange={handleChange(setRate)}
                                    className="w-full pr-8 pl-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
                            </div>
                        </div>

                        {/* Monthly Payment */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Current Monthly Payment
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={payment}
                                    onChange={handlePaymentChange}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Extra Payment */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Extra Monthly Payment (optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={extraPayment}
                                    onChange={handleExtraChange}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                {[50, 100, 200, 500].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setExtraPayment(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        +${amount}
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
                        Calculate Payoff
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 text-center">
                            <p className="text-sm text-emerald-100 mb-1">Debt Free By</p>
                            <p className="text-4xl font-bold">{result.payoffDate}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.newMonths} months ??{formatCurrency(result.totalPayment)}/mo
                            </p>
                        </div>

                        {/* Savings */}
                        {result.monthsSaved > 0 && (
                            <div className="bg-emerald-900/30 border-b border-emerald-700/50 p-4">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <p className="text-sm text-emerald-300">Months Saved</p>
                                        <p className="text-2xl font-bold text-emerald-400">{result.monthsSaved}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-emerald-300">Interest Saved</p>
                                        <p className="text-2xl font-bold text-emerald-400">{formatCurrency(result.interestSaved)}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Details */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Comparison
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Original Timeline</span>
                                    <span className="font-medium text-slate-400">{result.originalMonths} months</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">New Timeline</span>
                                    <span className="font-medium text-emerald-400">{result.newMonths} months</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Original Interest</span>
                                    <span className="font-medium text-slate-400">{formatCurrency(result.originalInterest)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">New Interest</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.newInterest)}</span>
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
                        Loan Payoff FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Should I make extra payments?
                            </h3>
                            <p className="text-slate-400">
                                Extra payments go directly to principal, reducing interest over
                                the life of the loan. Even small amounts add up significantly.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Is there a prepayment penalty?
                            </h3>
                            <p className="text-slate-400">
                                Check your loan agreement. Most personal and auto loans don&apos;t
                                have prepayment penalties, but some mortgages might.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {LOAN_2026.citation}
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
                                name: "Should I make extra payments on my loan?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Extra payments go directly to principal, reducing interest over the life of the loan.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
