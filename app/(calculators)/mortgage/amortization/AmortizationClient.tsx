"use client";

import { useState } from "react";
import { Calculator, Table as TableIcon } from "lucide-react";
import {
    MORTGAGE_CONSTANTS,
    generateAmortizationSchedule,
    formatCurrency,
    parseFormattedNumber,
    AmortizationSummary
} from "@/lib/calculators/mortgage";

export default function AmortizationClient() {
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
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase">Amortization Logic</h1>
                    <p className="text-sm text-slate-400 font-bold italic uppercase tracking-widest">Full lifecycle debt trajectory audit</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Loan Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input type="text" value={loanAmount} onChange={handleInputChange(setLoanAmount)}
                                className="w-full bg-slate-950/50 pl-8 pr-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Interest Rate (%)</label>
                        <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                            className="w-full bg-slate-950/50 px-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Loan Term (Years)</label>
                        <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full bg-slate-950/50 px-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer">
                            <option value={15} className="bg-slate-900">15 years</option>
                            <option value={20} className="bg-slate-900">20 years</option>
                            <option value={30} className="bg-slate-900">30 years</option>
                        </select>
                    </div>
                </div>

                <button onClick={handleCalculate}
                    className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95">
                    <Calculator className="w-5 h-5" />
                    Generate Actuarial Schedule
                </button>
            </div>

            {result && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/5 text-center space-y-1">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Interest Paid</p>
                            <p className="text-3xl font-black text-rose-500 italic">{formatCurrency(result.totalInterest)}</p>
                        </div>
                        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/5 text-center space-y-1">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Lifecycle Cost</p>
                            <p className="text-3xl font-black text-white italic">{formatCurrency(result.totalPayments)}</p>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Year</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Principal</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Interest</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Ending Balance</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {result.yearlyData.map((row, i) => (
                                        <tr key={row.year} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-8 py-5">
                                                <span className="text-sm font-black text-white italic">Year {row.year}</span>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <span className="text-sm font-bold text-emerald-400">{formatCurrency(row.totalPrincipal)}</span>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <span className="text-sm font-bold text-rose-400">{formatCurrency(row.totalInterest)}</span>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <span className="text-sm font-black text-white">{formatCurrency(row.endingBalance)}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            <div className="my-12 p-8 bg-white/5 border border-white/5 rounded-3xl text-center">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Housing Market Audit Protocol 2026</p>
            </div>
        </div>
    );
}
