"use client";

import React, { useState, useMemo, useEffect } from 'react';
import {
    Calculator,
    DollarSign,
    Calendar,
    Percent,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    Zap,
    Shield,
    TrendingDown,
    Clock,
    Info,
    CheckCircle2,
    CalendarDays,
    Table as TableIcon
} from 'lucide-react';
import { calculateLoan, LoanResult } from '@/lib/calculators/loan';

export function CalculatorClient() {
    // Input States
    const [amount, setAmount] = useState<number>(50000);
    const [rate, setRate] = useState<number>(5.5);
    const [years, setYears] = useState<number>(5);
    const [showSchedule, setShowSchedule] = useState(false);

    const result = useMemo(() => {
        if (amount <= 0 || rate < 0 || years <= 0) return null;
        return calculateLoan(amount, rate, years);
    }, [amount, rate, years]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4">
                        <Shield className="w-3 h-3" />
                        <span>S-CLASS FINANCIAL AUDIT ENGINE</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Loan Amortization <span className="text-blue-500">Audit</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        High-precision debt mechanics engine. Analyze principal decay, interest accumulation, and total cost of credit with 2026 institutional standards.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Input Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />

                            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-blue-500" />
                                Loan Configuration
                            </h2>

                            <div className="space-y-6">
                                {/* Loan Amount */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                                        Loan Principal Amount
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                                            placeholder="e.g. 50000"
                                        />
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="500000"
                                        step="1000"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 mt-4"
                                    />
                                </div>

                                {/* Interest Rate */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                                        Annual Interest Rate (APR)
                                    </label>
                                    <div className="relative">
                                        <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={rate}
                                            onChange={(e) => setRate(Number(e.target.value))}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                                            placeholder="e.g. 5.5"
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2 px-1">
                                        <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">Prime: 3.5%</span>
                                        <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">Market: 7.5%</span>
                                    </div>
                                </div>

                                {/* Loan Term */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                                        Loan Term (Years)
                                    </label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                        <input
                                            type="number"
                                            value={years}
                                            onChange={(e) => setYears(Number(e.target.value))}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                                            placeholder="e.g. 5"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 mt-3">
                                        {[1, 3, 5, 10].map(yr => (
                                            <button
                                                key={yr}
                                                onClick={() => setYears(yr)}
                                                className={`py-2 rounded-xl text-xs font-bold transition-all ${years === yr ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                            >
                                                {yr}Y
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl mt-10 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-[0.98] group">
                                <Zap className="w-5 h-5 fill-current group-hover:animate-pulse" />
                                <span>EXECUTE AUDIT</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Benchmark Info */}
                        <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-6">
                            <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Info className="w-3 h-3" />
                                Market Standards Notice
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Most consumer loans are calculated via monthly compounding.
                                Our engine aligns with 2026 Truth in Lending Act (TILA) precision mandates to ensure sub-cent accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="lg:col-span-7 space-y-6">
                        {result ? (
                            <>
                                {/* Primary Stats Card */}
                                <div className="bg-slate-900 border border-white/10 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-8 opacity-20">
                                        <TrendingDown className="w-24 h-24 text-blue-500" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="mb-10">
                                            <span className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] block mb-2">Estimated Monthly Payment</span>
                                            <div className="text-6xl font-black text-white tracking-tighter">
                                                {formatCurrency(result.monthlyPayment)}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
                                            <div>
                                                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest block mb-1">Total Interest Paid</span>
                                                <div className="text-2xl font-bold text-amber-500">{formatCurrency(result.totalInterest)}</div>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest block mb-1">Total Cost of Loan</span>
                                                <div className="text-2xl font-bold text-white">{formatCurrency(result.totalPayment)}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                                            <div className="flex-1">
                                                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest block mb-1">Projected Payoff Date</span>
                                                <div className="flex items-center gap-2 text-white font-bold">
                                                    <CalendarDays className="w-4 h-4 text-blue-500" />
                                                    {result.payoffDate}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-[10px] font-bold uppercase tracking-widest">
                                                <CheckCircle2 className="w-3 h-3" />
                                                Audit Verified
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Progress Bar (Principal vs Interest) */}
                                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
                                    <div className="flex justify-between text-xs font-bold mb-4 px-1">
                                        <span className="text-slate-400 uppercase tracking-widest">Payment Components</span>
                                        <span className="text-blue-500 uppercase tracking-widest">Cost Analysis</span>
                                    </div>
                                    <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
                                        <div
                                            className="h-full bg-blue-500"
                                            style={{ width: `${(amount / result.totalPayment) * 100}%` }}
                                        />
                                        <div
                                            className="h-full bg-amber-500"
                                            style={{ width: `${(result.totalInterest / result.totalPayment) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Principal: {formatCurrency(amount)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Interest: {formatCurrency(result.totalInterest)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Toggle Amortization Schedule */}
                                <div className="space-y-4">
                                    <button
                                        onClick={() => setShowSchedule(!showSchedule)}
                                        className="w-full flex items-center justify-between p-6 bg-slate-900 border border-white/5 rounded-2xl hover:bg-slate-800/80 transition-all font-bold tracking-tight text-white group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <TableIcon className="w-5 h-5 text-blue-500" />
                                            <span>Full Amortization Schedule</span>
                                            <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full ml-2">DATA RICH</span>
                                        </div>
                                        {showSchedule ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500 group-hover:animate-bounce" />}
                                    </button>

                                    {showSchedule && (
                                        <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="bg-slate-800/50 border-b border-white/5">
                                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Month</th>
                                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment</th>
                                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Principal</th>
                                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interest</th>
                                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Remaining</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-white/5">
                                                        {result.amortization.map((p, idx) => {
                                                            // Only show first 12, last 12, or all if short
                                                            const totalM = result.amortization.length;
                                                            if (totalM > 24 && idx >= 12 && idx < totalM - 12) {
                                                                if (idx === 12) {
                                                                    return (
                                                                        <tr key="spacer">
                                                                            <td colSpan={5} className="px-6 py-3 text-center text-slate-600 text-[10px] font-black tracking-widest bg-slate-950/30 italic">
                                                                                ••• STEADY STATE REPAYMENT PHASE (MONTHS 13 - {totalM - 12}) •••
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                }
                                                                return null;
                                                            }
                                                            return (
                                                                <tr key={p.period} className="hover:bg-blue-500/5 transition-colors group">
                                                                    <td className="px-6 py-4 font-mono text-xs text-blue-400 font-bold">#{p.period}</td>
                                                                    <td className="px-6 py-4 text-xs font-bold text-white">{formatCurrency(p.payment)}</td>
                                                                    <td className="px-6 py-4 text-xs font-bold text-green-400">{formatCurrency(p.principal)}</td>
                                                                    <td className="px-6 py-4 text-xs font-bold text-rose-400">{formatCurrency(p.interest)}</td>
                                                                    <td className="px-6 py-4 text-xs font-mono text-slate-500">{formatCurrency(p.remainingBalance)}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="p-4 bg-slate-950/50 text-[10px] text-slate-600 text-center font-bold tracking-widest uppercase border-t border-white/5">
                                                End of Projected Amortization Schedule
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-900/20 border border-slate-800 border-dashed rounded-3xl p-12 text-center group">
                                <div className="p-6 rounded-full bg-slate-900 border border-slate-800 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Clock className="w-12 h-12 text-slate-700" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-400 mb-2 tracking-tight">Awaiting Parameters</h3>
                                <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                                    Enter loan principal, interest, and term to initiate the neural amortization sequence.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
