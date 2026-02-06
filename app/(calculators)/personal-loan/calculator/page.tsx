"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Calculator, DollarSign, TrendingUp, AlertCircle,
    RefreshCcw, Shield, MapPin, Scale, Info
} from "lucide-react";
import {
    calculatePersonalLoan,
    getStatesList,
    PersonalLoanResult,
    SITE
} from "@/lib/calculators/personal-loan";

export default function PersonalLoanCalculator() {
    const [state, setState] = useState("CA");
    const [amount, setAmount] = useState("10,000");
    const [apr, setApr] = useState("12.5");
    const [term, setTerm] = useState("36");
    const [result, setResult] = useState<PersonalLoanResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const amt = parseInt(amount.replace(/[^0-9]/g, "")) || 0;
        const rate = parseFloat(apr) || 0;
        const months = parseInt(term) || 0;

        if (amt > 0 && months > 0) {
            setResult(calculatePersonalLoan(amt, rate, months, state));
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Input Panel */}
                <div className="space-y-8 bg-slate-900 border border-white/5 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Calculator className="w-32 h-32 text-indigo-500" />
                    </div>

                    <div className="space-y-2 text-left">
                        <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Loan <span className="text-indigo-500 underline decoration-white/10 underline-offset-8">Audit.</span></h2>
                        <p className="text-slate-400 font-bold italic text-sm">Configure your personal credit parameters.</p>
                    </div>

                    <div className="space-y-6 text-left">
                        {/* State Selection */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Governing State Jurisdiction</label>
                            <div className="relative group/input">
                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500/50 group-hover/input:text-indigo-500 transition-colors" />
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="w-full bg-slate-950 border border-white/10 rounded-3xl py-5 pl-16 pr-8 text-xl font-bold text-white focus:border-indigo-500/50 outline-none transition-all italic tracking-tighter appearance-none"
                                >
                                    {getStatesList().map((s) => (
                                        <option key={s.code} value={s.code}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Loan Amount */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Principal Balance</label>
                            <div className="relative group/input">
                                <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500/50 group-hover/input:text-indigo-500 transition-colors" />
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={handleInputChange(setAmount)}
                                    className="w-full bg-slate-950 border border-white/10 rounded-3xl py-6 pl-16 pr-8 text-2xl font-black text-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none italic tracking-tighter"
                                    placeholder="10,000"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Interest Rate */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">APR Rate (%)</label>
                                <div className="relative group/input">
                                    <TrendingDown className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500/50 group-hover/input:text-indigo-500 transition-colors" />
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={apr}
                                        onChange={(e) => setApr(e.target.value)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-3xl py-5 pl-16 pr-8 text-xl font-bold text-white focus:border-indigo-500/50 outline-none transition-all italic tracking-tighter"
                                    />
                                </div>
                            </div>

                            {/* Term */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Term (Months)</label>
                                <div className="relative group/input">
                                    <RefreshCcw className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500/50 group-hover/input:text-indigo-500 transition-colors" />
                                    <input
                                        type="number"
                                        value={term}
                                        onChange={(e) => setTerm(e.target.value)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-3xl py-5 pl-16 pr-8 text-xl font-bold text-white focus:border-indigo-500/50 outline-none transition-all italic tracking-tighter"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all hover:scale-[1.02] shadow-2xl shadow-indigo-600/30 active:scale-95 flex items-center justify-center gap-4 group"
                    >
                        Execute Analysis
                    </button>
                </div>

                {/* Results Panel */}
                <div className="space-y-8">
                    {!result ? (
                        <div className="h-full border-4 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 space-y-6 min-h-[500px]">
                            <div className="p-8 bg-indigo-500/5 rounded-full animate-pulse">
                                <Calculator className="w-16 h-16 text-indigo-500/20" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-slate-300 uppercase italic tracking-widest">Awaiting Parameters</h3>
                                <p className="text-sm text-slate-600 font-bold italic">Configure the credit audit to view payment breakdown.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">
                            {/* Main Payment Card */}
                            <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <Shield className="w-48 h-48" />
                                </div>
                                <div className="relative z-10 space-y-4 text-left">
                                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-md">
                                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-100">Monthly Obligation Calculated</span>
                                    </div>
                                    <div className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none">
                                        ${result.monthlyPayment.toLocaleString()}
                                    </div>
                                    <p className="text-indigo-100/60 font-black uppercase tracking-[0.3em] text-xs">Simulated Periodic Installment</p>
                                </div>
                            </div>

                            {/* Usury Limit Warning */}
                            {result.isOverLimit && (
                                <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-[2.5rem] flex gap-6 items-start text-left">
                                    <div className="p-3 bg-red-500/20 rounded-2xl">
                                        <AlertCircle className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="text-sm font-black text-red-500 uppercase tracking-widest italic">Usury Limit Conflict</h5>
                                        <p className="text-red-200/60 text-xs font-bold italic leading-relaxed">
                                            The selected APR exceeds {state}&apos;s legal limit of <span className="text-red-500 underline underline-offset-4">{result.stateMaxAPR}%</span>.
                                            Potential Penalty: <span className="text-white uppercase px-2 py-0.5 bg-red-500/20 rounded">{result.statePenalty}</span>.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Legal Context Card */}
                            <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 space-y-6 text-left">
                                <h4 className="text-xs font-black text-indigo-500 uppercase tracking-widest italic flex items-center gap-3">
                                    <Scale className="w-4 h-4" /> State Legal Profile
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Jurisdiction</span>
                                        <span className="text-lg font-black text-white italic tracking-tight">{state}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Legal APR Cap</span>
                                        <span className="text-lg font-black text-indigo-400 italic tracking-tight">{result.stateMaxAPR}%</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-bold italic leading-tight uppercase tracking-widest">
                                        {result.stateDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Financial Totals */}
                            <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 space-y-8 text-left">
                                <h4 className="text-xs font-black text-indigo-500 uppercase tracking-widest italic flex items-center gap-3">
                                    <TrendingDown className="w-4 h-4" /> Aggregate Cost Audit
                                </h4>
                                <div className="space-y-6">
                                    {[
                                        { l: "Principal Balance", v: `$${parseInt(amount.replace(/[^0-9]/g, "")).toLocaleString()}`, c: "text-white" },
                                        { l: "Total Interest Load", v: `$${result.totalInterest.toLocaleString()}`, c: "text-red-500" },
                                        { l: "Total Repayment", v: `$${result.totalPayment.toLocaleString()}`, c: "text-emerald-400 font-black" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center group/item border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic group-hover/item:text-slate-300 transition-colors uppercase">{item.l}</span>
                                            <span className={`text-xl font-black italic tracking-tight ${item.c}`}>{item.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Expert Info Section */}
            <section className="max-w-4xl mx-auto py-16 text-left">
                <div className="bg-slate-900 rounded-[2rem] border border-white/10 p-8 space-y-6">
                    <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-3">
                        <Info className="w-5 h-5 text-indigo-500" />
                        Understanding State Usury Laws
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-4">
                            <h3 className="font-bold text-white uppercase tracking-widest text-xs italic">Why APR Limits Matter</h3>
                            <p className="text-slate-400 leading-relaxed font-bold italic">
                                States set maximum interest rates (usury limits) to protect consumers from predatory lending. While many national banks can "export" their home state&apos;s rates, state-level limits provide a critical benchmark for local and private loans.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-white uppercase tracking-widest text-xs italic">Penalties for Violations</h3>
                            <p className="text-slate-400 leading-relaxed font-bold italic">
                                Violating usury laws can lead to severe penalties, including the forfeiture of all interest, double or triple damages, or in some states like New York, the entire loan (principal + interest) may be declared void.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
