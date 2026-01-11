"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, TrendingDown } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    MORTGAGE_CONSTANTS,
    calculateRefinance,
    formatCurrency,
    parseFormattedNumber,
    RefinanceResult
} from "@/lib/calculators/mortgage";

export default function RefinancePage() {
    const [currentBalance, setCurrentBalance] = useState("280,000");
    const [currentRate, setCurrentRate] = useState("7.5");
    const [remainingYears, setRemainingYears] = useState("25");
    const [newRate, setNewRate] = useState("6.5");
    const [closingCosts, setClosingCosts] = useState("5,000");
    const [result, setResult] = useState<RefinanceResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const balance = parseFormattedNumber(currentBalance) || 280000;
        const curRate = parseFloat(currentRate) || 7.5;
        const years = parseFloat(remainingYears) || 25;
        const nRate = parseFloat(newRate) || 6.5;
        const costs = parseFormattedNumber(closingCosts) || 5000;
        setResult(calculateRefinance(balance, curRate, years, nRate, costs));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/mortgage" className="text-slate-400 hover:text-blue-600">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-bold text-slate-800">Refinance Calculator</span>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">Should You Refinance?</h1>
                    <p className="text-sm text-slate-500 mb-6">See your potential savings and break-even point</p>

                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Current Loan Balance</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={currentBalance} onChange={handleInputChange(setCurrentBalance)}
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Current Rate (%)</label>
                                <input type="number" step="0.125" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Remaining Years</label>
                                <input type="number" value={remainingYears} onChange={(e) => setRemainingYears(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">New Rate (%)</label>
                                <input type="number" step="0.125" value={newRate} onChange={(e) => setNewRate(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Closing Costs</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                    <input type="text" value={closingCosts} onChange={handleInputChange(setClosingCosts)}
                                        className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                        <TrendingDown className="w-5 h-5" />
                        Calculate Savings
                    </button>
                </div>

                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className={`p-6 text-white ${result.monthlySavings > 0 ? 'bg-green-600' : 'bg-red-500'}`}>
                            <p className="text-sm opacity-80">Monthly Savings</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlySavings)}/mo</p>
                        </div>

                        <div className="p-6 space-y-3 text-sm">
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Current Payment</span>
                                <span className="font-medium">{formatCurrency(result.currentPayment)}/mo</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>New Payment</span>
                                <span className="font-medium text-green-600">{formatCurrency(result.newPayment)}/mo</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Closing Costs</span>
                                <span className="font-medium">{formatCurrency(result.closingCosts)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Break-Even Point</span>
                                <span className="font-bold text-blue-600">{result.breakEvenMonths} months</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>Total Savings</span>
                                <span className="font-bold text-green-600">{formatCurrency(result.totalSavings)}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>
            </main>
        </div>
    );
}
