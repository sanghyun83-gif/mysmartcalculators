"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, DollarSign, Info } from "lucide-react";
import {
    SITE,
    MORTGAGE_CONSTANTS,
    calculateAffordability,
    formatCurrency,
    parseFormattedNumber,
    AffordabilityResult
} from "@/lib/calculators/mortgage";

export default function AffordabilityPage() {
    const { defaults, dtiLimits } = MORTGAGE_CONSTANTS;
    const [annualIncome, setAnnualIncome] = useState("100,000");
    const [monthlyDebts, setMonthlyDebts] = useState("500");
    const [downPayment, setDownPayment] = useState("80,000");
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [result, setResult] = useState<AffordabilityResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const income = parseFormattedNumber(annualIncome) || 100000;
        const debts = parseFormattedNumber(monthlyDebts) || 0;
        const dp = parseFormattedNumber(downPayment) || 0;
        const rate = parseFloat(interestRate) || defaults.interestRate;
        setResult(calculateAffordability(income, debts, dp, rate));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/mortgage" className="text-slate-400 hover:text-blue-600">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-bold text-slate-800">Home Affordability</span>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        How Much Home Can You Afford?
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Based on the {dtiLimits.housing}% DTI rule for housing
                    </p>

                    <div className="space-y-5 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Income (before taxes)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input type="text" value={annualIncome} onChange={handleInputChange(setAnnualIncome)} placeholder="100,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Debts (car, student loans, etc.)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input type="text" value={monthlyDebts} onChange={handleInputChange(setMonthlyDebts)} placeholder="500"
                                    className="w-full pl-8 pr-4 py-4 text-lg border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Available Down Payment</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input type="text" value={downPayment} onChange={handleInputChange(setDownPayment)} placeholder="80,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                            <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <button onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2">
                        <Home className="w-5 h-5" />
                        Calculate Affordability
                    </button>
                </div>

                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 text-center">
                            <p className="text-sm text-green-100 mb-1">You Can Afford Up To</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.maxHomePrice)}</p>
                        </div>

                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Monthly Income</span>
                                    <span className="font-medium">{formatCurrency(result.monthlyIncome)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Max Housing Payment (28%)</span>
                                    <span className="font-medium">{formatCurrency(result.maxMonthlyPayment)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Down Payment</span>
                                    <span className="font-medium">{formatCurrency(result.downPayment)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Estimated Loan Amount</span>
                                    <span className="font-medium">{formatCurrency(result.estimatedLoanAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-slate-600">DTI Ratio</span>
                                    <span className="font-medium">{result.dtiRatio}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/mortgage/calculator" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Calculate Monthly Payment →
                    </Link>
                </div>
            </main>
        </div>
    );
}
