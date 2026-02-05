"use client";

import { useState } from "react";
import { Home, Info } from "lucide-react";
import {
    MORTGAGE_CONSTANTS,
    calculateAffordability,
    formatCurrency,
    parseFormattedNumber,
    AffordabilityResult
} from "@/lib/calculators/mortgage";

export default function AffordabilityClient() {
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
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-10">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase text-left">Affordability Audit</h1>
                    <p className="text-sm text-slate-400 font-bold italic uppercase tracking-widest text-left">
                        Based on the {dtiLimits.housing}% DTI rule for housing
                    </p>
                </div>

                <div className="space-y-6 text-left">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Annual Income (Before Taxes)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input type="text" value={annualIncome} onChange={handleInputChange(setAnnualIncome)}
                                className="w-full bg-slate-950/50 pl-8 pr-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Monthly Debts (Loans, Credit, etc.)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input type="text" value={monthlyDebts} onChange={handleInputChange(setMonthlyDebts)}
                                className="w-full bg-slate-950/50 pl-8 pr-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Available Down Payment</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input type="text" value={downPayment} onChange={handleInputChange(setDownPayment)}
                                className="w-full bg-slate-950/50 pl-8 pr-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Interest Rate (%)</label>
                        <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                            className="w-full bg-slate-950/50 px-4 py-4 text-xl font-black text-white border-2 border-white/5 rounded-2xl focus:border-blue-500 transition-all outline-none" />
                    </div>
                </div>

                <button onClick={handleCalculate}
                    className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95">
                    <Home className="w-5 h-5" />
                    Calculate Purchase Capacity
                </button>
            </div>

            {result && (
                <div className="mt-10 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
                        <div className="relative z-10 text-center space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">You Can Afford Up To</p>
                            <p className="text-6xl font-black italic tracking-tighter">{formatCurrency(result.maxHomePrice)}</p>
                        </div>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Home className="w-32 h-32" />
                        </div>
                    </div>

                    <div className="p-10 space-y-4">
                        <div className="grid gap-4">
                            {[
                                { l: "Monthly Gross Income", v: formatCurrency(result.monthlyIncome), c: "text-slate-400" },
                                { l: "Max Monthly Payment (PITI)", v: formatCurrency(result.maxMonthlyPayment), c: "text-blue-400" },
                                { l: "Down Payment Applied", v: formatCurrency(result.downPayment), c: "text-slate-400" },
                                { l: "Projected Loan Amount", v: formatCurrency(result.estimatedLoanAmount), c: "text-white font-black" },
                                { l: "Final DTI Ratio", v: `${result.dtiRatio}%`, c: "text-emerald-400 font-black" }
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
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Lender Compliance Sync 2026</p>
            </div>
        </div>
    );
}
