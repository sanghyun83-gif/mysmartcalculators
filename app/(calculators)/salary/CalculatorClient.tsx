"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    Calculator,
    Banknote,
    Clock,
    Calendar,
    ArrowRightLeft,
    RotateCcw,
    Zap,
    Scale,
    TrendingUp,
    Shield
} from "lucide-react";

type PayPeriod = 'annual' | 'monthly' | 'semimonthly' | 'biweekly' | 'weekly' | 'daily' | 'hourly';

export default function CalculatorClient() {
    const [amount, setAmount] = useState<string>("50000");
    const [period, setPeriod] = useState<PayPeriod>('annual');
    const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
    const [daysPerWeek, setDaysPerWeek] = useState<number>(5);

    // Dynamic Calculation Engine
    const results = useMemo(() => {
        const numAmount = parseFloat(amount) || 0;
        let annualGross = 0;

        // Normalize to Annual Gross first
        switch (period) {
            case 'annual': annualGross = numAmount; break;
            case 'monthly': annualGross = numAmount * 12; break;
            case 'semimonthly': annualGross = numAmount * 24; break;
            case 'biweekly': annualGross = numAmount * 26; break;
            case 'weekly': annualGross = numAmount * 52; break;
            case 'daily': annualGross = numAmount * daysPerWeek * 52; break;
            case 'hourly': annualGross = numAmount * hoursPerWeek * 52; break;
        }

        const hourly = annualGross / (hoursPerWeek * 52);

        return {
            annual: annualGross,
            monthly: annualGross / 12,
            semimonthly: annualGross / 24,
            biweekly: annualGross / 26,
            weekly: annualGross / 52,
            daily: annualGross / (52 * daysPerWeek),
            hourly: hourly
        };
    }, [amount, period, hoursPerWeek, daysPerWeek]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

    return (
        <div className="space-y-12">
            {/* Input Engine Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Audit Parameters</h2>
                    </div>

                    <div className="space-y-8">
                        {/* Primary Amount Input */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Salary Amount ($)</label>
                            <div className="relative group/input">
                                <Banknote className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" />
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl py-6 pl-16 pr-6 text-2xl font-bold text-white focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                                    placeholder="50,000"
                                />
                            </div>
                        </div>

                        {/* Pay Frequency Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Pay Period</label>
                            <div className="grid grid-cols-2 gap-3">
                                {(['annual', 'monthly', 'biweekly', 'hourly'] as PayPeriod[]).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setPeriod(p)}
                                        className={`py-4 px-4 rounded-xl border-2 font-bold capitalize transition-all ${period === p
                                                ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                                : "bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300"
                                            }`}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Advanced Controls */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    <Clock className="w-3 h-3" /> Hours/Week
                                </label>
                                <select
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white font-semibold outline-none focus:border-emerald-500/50"
                                >
                                    {[35, 37.5, 40, 45, 50, 60].map(h => <option key={h} value={h}>{h} Hours</option>)}
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> Days/Week
                                </label>
                                <select
                                    value={daysPerWeek}
                                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white font-semibold outline-none focus:border-emerald-500/50"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7].map(d => <option key={d} value={d}>{d} Days</option>)}
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={() => { setAmount("50000"); setPeriod('annual'); }}
                            className="w-full py-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-500 font-bold hover:bg-slate-900 hover:text-slate-300 transition-all flex items-center justify-center gap-2 border-dashed"
                        >
                            <RotateCcw className="w-4 h-4" /> Reset Audit
                        </button>
                    </div>
                </div>

                {/* Results Dashboard */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hero Result - Annual */}
                    <div className="md:col-span-2 p-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-sm">Annual Gross Audit</span>
                            </div>
                            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-lg">
                                {formatCurrency(results.annual)}
                            </div>
                            <p className="text-white/70 font-medium max-w-sm">Total institutional compensation baseline for 2026 fiscal year.</p>
                        </div>
                    </div>

                    {[
                        { label: 'Monthly', val: results.monthly, icon: <Calendar className="w-5 h-5" />, color: "emerald" },
                        { label: 'Hourly Rate', val: results.hourly, icon: <RotateCcw className="w-5 h-5" />, color: "blue" },
                        { label: 'Weekly', val: results.weekly, icon: <ArrowRightLeft className="w-5 h-5" />, color: "emerald" },
                        { label: 'Bi-Weekly', val: results.biweekly, icon: <Scale className="w-5 h-5" />, color: "emerald" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all group relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{item.label}</span>
                                <div className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors">{item.icon}</div>
                            </div>
                            <div className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                                {formatCurrency(item.val)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compliance Note */}
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-start gap-4">
                <Shield className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <p className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-emerald-500 font-bold">2026 Compliance Note:</strong> These figures are calculated based on gross compensation protocols. This audit does not account for variable federal/state tax nexus or FICA withholding thresholds unless specific tax overrides are applied. Always verify total rewards with your HR institutional representative.
                </p>
            </div>
        </div>
    );
}
