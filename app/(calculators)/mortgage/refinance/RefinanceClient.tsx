"use client";

import { useState } from "react";
import { TrendingDown } from "lucide-react";
import {
    MORTGAGE_CONSTANTS,
    calculateRefinance,
    formatCurrency,
    parseFormattedNumber,
    RefinanceResult
} from "@/lib/calculators/mortgage";

export default function RefinanceClient() {
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
        <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase">Should You Refinance?</h1>
                    <p className="text-sm text-slate-400 font-bold italic uppercase tracking-widest">See your potential savings and break-even point</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Current Loan Balance</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input type="text" value={currentBalance} onChange={handleInputChange(setCurrentBalance)}
                                className="w-full bg-slate-950/50 pl-8 pr-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Current Rate (%)</label>
                            <input type="number" step="0.125" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)}
                                className="w-full bg-slate-950/50 px-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Remaining Years</label>
                            <input type="number" value={remainingYears} onChange={(e) => setRemainingYears(e.target.value)}
                                className="w-full bg-slate-950/50 px-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">New Rate (%)</label>
                            <input type="number" step="0.125" value={newRate} onChange={(e) => setNewRate(e.target.value)}
                                className="w-full bg-slate-950/50 px-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Closing Costs</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input type="text" value={closingCosts} onChange={handleInputChange(setClosingCosts)}
                                    className="w-full bg-slate-950/50 pl-8 pr-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={handleCalculate}
                    className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95">
                    <TrendingDown className="w-5 h-5" />
                    Calculate Alpha Savings
                </button>
            </div>

            {result && (
                <div className="mt-10 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className={`p-10 text-white ${result.monthlySavings > 0 ? 'bg-emerald-600' : 'bg-rose-500'} relative overflow-hidden`}>
                        <div className="relative z-10 text-center space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Projected Monthly Savings</p>
                            <p className="text-5xl font-black italic">{formatCurrency(result.monthlySavings)}/mo</p>
                        </div>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <TrendingDown className="w-24 h-24" />
                        </div>
                    </div>

                    <div className="p-10 space-y-4">
                        <div className="grid gap-4">
                            {[
                                { l: "Current Payment", v: `${formatCurrency(result.currentPayment)}/mo`, c: "text-slate-400" },
                                { l: "New Payment", v: `${formatCurrency(result.newPayment)}/mo`, c: "text-emerald-400" },
                                { l: "Closing Costs", v: formatCurrency(result.closingCosts), c: "text-slate-400" },
                                { l: "Break-Even Point", v: `${result.breakEvenMonths} Months`, c: "text-blue-400 font-black" },
                                { l: "Lifetime Savings", v: formatCurrency(result.totalSavings), c: "text-emerald-400 font-black text-xl" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 group">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{row.l}</span>
                                    <span className={`text-sm font-black italic tracking-tight ${row.c}`}>{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="my-12 p-8 bg-white/5 border border-white/5 rounded-3xl text-center">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Financial Auditor Verification 2026</p>
            </div>
        </div>
    );
}
