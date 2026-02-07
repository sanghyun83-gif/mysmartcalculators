"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, PiggyBank, TrendingDown } from "lucide-react";
import {
    MORTGAGE_CONSTANTS,
    calculateExtraPayments,
    formatCurrency,
    parseFormattedNumber,
    ExtraPaymentResult
} from "@/lib/calculators/mortgage";

export default function ExtraPaymentsPage() {
    const { defaults } = MORTGAGE_CONSTANTS;
    const [loanAmount, setLoanAmount] = useState("320,000");
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [loanTerm, setLoanTerm] = useState(30);
    const [extraPayment, setExtraPayment] = useState("200");
    const [result, setResult] = useState<ExtraPaymentResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const amount = parseFormattedNumber(loanAmount) || 320000;
        const rate = parseFloat(interestRate) || defaults.interestRate;
        const extra = parseFormattedNumber(extraPayment) || 200;
        setResult(calculateExtraPayments(amount, rate, loanTerm, extra));
    };

    return (
        <>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h1 className="text-xl font-bold text-slate-800 mb-2">Pay Off Your Mortgage Early</h1>
                <p className="text-sm text-slate-500 mb-6">See how extra payments reduce your loan term and interest</p>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <input type="text" value={loanAmount} onChange={handleInputChange(setLoanAmount)}
                                className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                            <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Term</label>
                            <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value={15}>15 years</option>
                                <option value={20}>20 years</option>
                                <option value={30}>30 years</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Extra Monthly Payment</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <input type="text" value={extraPayment} onChange={handleInputChange(setExtraPayment)}
                                className="w-full pl-8 pr-4 py-4 text-lg border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 bg-blue-50" />
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
                <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-600 text-white rounded-xl p-6 text-center">
                            <p className="text-sm text-green-100">Interest Saved</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.interestSaved)}</p>
                        </div>
                        <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
                            <p className="text-sm text-blue-100">Time Saved</p>
                            <p className="text-3xl font-bold">{result.yearsSaved} years</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Original Term</span>
                                <span className="font-medium">{Math.round(result.originalTermMonths / 12)} years</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>New Term</span>
                                <span className="font-medium text-green-600">{Math.round(result.newTermMonths / 12)} years</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Original Interest</span>
                                <span className="font-medium text-red-500">{formatCurrency(result.totalInterestOriginal)}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>New Interest</span>
                                <span className="font-medium text-green-600">{formatCurrency(result.totalInterestWithExtra)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                <p className="text-sm text-slate-400">Advertisement</p>
            </div>
        </>
    );
}
