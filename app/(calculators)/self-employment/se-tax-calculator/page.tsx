"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    SE_TAX_2026,
    calculateSETax,
    formatCurrency,
    SETaxResult
} from "@/lib/calculators/self-employment";

export default function SETaxCalculatorPage() {
    const [grossIncome, setGrossIncome] = useState("");
    const [businessExpenses, setBusinessExpenses] = useState("");
    const [filingStatus, setFilingStatus] = useState("single");
    const [result, setResult] = useState<SETaxResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateSETax(
            parseVal(grossIncome),
            parseVal(businessExpenses),
            filingStatus
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/self-employment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">SE Tax Calculator</span>
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
                        {SITE.year} Self-Employment Tax Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate Social Security and Medicare taxes
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Gross Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Gross Self-Employment Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={grossIncome}
                                    onChange={handleChange(setGrossIncome)}
                                    placeholder="75,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Total 1099 income before expenses</p>
                        </div>

                        {/* Business Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Business Expenses (Deductions)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={businessExpenses}
                                    onChange={handleChange(setBusinessExpenses)}
                                    placeholder="15,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Home office, supplies, miles, etc.</p>
                        </div>

                        {/* Quick Buttons */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick income examples:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[25000, 50000, 75000, 100000].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setGrossIncome(amount.toLocaleString("en-US"))}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        ${amount / 1000}K
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filing Status */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Filing Status
                            </label>
                            <select
                                value={filingStatus}
                                onChange={(e) => setFilingStatus(e.target.value)}
                                className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="single">Single</option>
                                <option value="married">Married Filing Jointly</option>
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate SE Tax
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Total Self-Employment Tax</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalSETax)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.effectiveRate}% effective rate  {formatCurrency(result.quarterlyEstimate)}/quarter
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Tax Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Gross Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.grossIncome)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Business Expenses</span>
                                    <span className="font-medium text-white">-{formatCurrency(result.businessExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Net Profit</span>
                                    <span className="font-medium text-white">{formatCurrency(result.netProfit)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Net Earnings (92.35%)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.netEarnings)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Social Security ({SE_TAX_2026.socialSecurityRate}%)</span>
                                    <span className="font-medium text-red-400">{formatCurrency(result.socialSecurityTax)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medicare ({SE_TAX_2026.medicareRate}%)</span>
                                    <span className="font-medium text-red-400">{formatCurrency(result.medicareTax)}</span>
                                </div>
                                {result.additionalMedicareTax > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Additional Medicare (0.9%)</span>
                                        <span className="font-medium text-red-400">{formatCurrency(result.additionalMedicareTax)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">SE Tax Deduction (50%)</span>
                                    <span className="font-bold text-emerald-400">-{formatCurrency(result.seDeduction)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    The SE deduction reduces your AGI. You may also owe income tax on your net profit.
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
                        Self-Employment Tax FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Why 15.3%?
                            </h3>
                            <p className="text-slate-400">
                                Self-employed individuals pay both the employer and employee portions of
                                Social Security (6.2% x 2) and Medicare (1.45% x 2).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What&apos;s the SE deduction?
                            </h3>
                            <p className="text-slate-400">
                                You can deduct 50% of your SE tax from your adjusted gross income,
                                reducing your income tax liability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Consult a tax professional for your actual liability.
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
                                name: "Why is self-employment tax 15.3%?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Self-employed individuals pay both employer and employee portions of Social Security (12.4%) and Medicare (2.9%).",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
