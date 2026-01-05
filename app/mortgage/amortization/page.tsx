"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingDown, Calculator } from "lucide-react";
import {
    SITE,
    MORTGAGE_CONSTANTS,
    generateAmortizationSchedule,
    formatCurrency,
    parseFormattedNumber,
    AmortizationSummary
} from "@/lib/calculators/mortgage";

export default function AmortizationPage() {
    const { defaults } = MORTGAGE_CONSTANTS;
    const [loanAmount, setLoanAmount] = useState("320,000");
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [loanTerm, setLoanTerm] = useState(30);
    const [result, setResult] = useState<AmortizationSummary | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const amount = parseFormattedNumber(loanAmount) || 320000;
        const rate = parseFloat(interestRate) || defaults.interestRate;
        setResult(generateAmortizationSchedule(amount, rate, loanTerm));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/mortgage" className="text-slate-400 hover:text-blue-600">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-bold text-slate-800">Amortization Schedule</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-6">Amortization Calculator</h1>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={loanAmount} onChange={handleInputChange(setLoanAmount)}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                            <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                                className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Term (years)</label>
                            <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}
                                className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value={15}>15 years</option>
                                <option value={20}>20 years</option>
                                <option value={30}>30 years</option>
                            </select>
                        </div>
                    </div>

                    <button onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Generate Schedule
                    </button>
                </div>

                {result && (
                    <>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                                <p className="text-sm text-slate-500">Total Interest</p>
                                <p className="text-2xl font-bold text-red-600">{formatCurrency(result.totalInterest)}</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                                <p className="text-sm text-slate-500">Total Payments</p>
                                <p className="text-2xl font-bold text-slate-800">{formatCurrency(result.totalPayments)}</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-slate-600">Year</th>
                                            <th className="px-4 py-3 text-right font-semibold text-slate-600">Principal</th>
                                            <th className="px-4 py-3 text-right font-semibold text-slate-600">Interest</th>
                                            <th className="px-4 py-3 text-right font-semibold text-slate-600">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {result.yearlyData.map((row, i) => (
                                            <tr key={row.year} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="px-4 py-3 font-medium">Year {row.year}</td>
                                                <td className="px-4 py-3 text-right text-green-600">{formatCurrency(row.totalPrincipal)}</td>
                                                <td className="px-4 py-3 text-right text-red-500">{formatCurrency(row.totalInterest)}</td>
                                                <td className="px-4 py-3 text-right font-medium">{formatCurrency(row.endingBalance)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>
            </main>
        </div>
    );
}
