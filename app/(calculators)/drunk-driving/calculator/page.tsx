"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle, Shield, Gavel, DollarSign, Activity, Scale, ChevronRight } from "lucide-react";
import { SITE, DUI_DATA_2026, formatCurrency } from "@/lib/calculators/drunk-driving";

export default function DUICalculatorPage() {
    const [state, setState] = useState<keyof typeof DUI_DATA_2026.penalties1stOffense.states>("AZ");
    const [complexity, setComplexity] = useState(1); // 1 = Standard, 2 = Aggravated, 3 = Felony

    const auditResult = useMemo(() => {
        const stateData = DUI_DATA_2026.penalties1stOffense.states[state];
        const baseLegal = DUI_DATA_2026.hiddenCosts.legalFees.min;
        const legalFees = baseLegal * (complexity === 1 ? 1 : complexity === 2 ? 2.5 : 5);
        const sr22Total = DUI_DATA_2026.hiddenCosts.sr22Insurance.annualAvg * 3; // 3 year impact
        const iidTotal = DUI_DATA_2026.hiddenCosts.ignitionInterlock.totalYear;
        const fines = stateData.fine * (complexity === 1 ? 1 : complexity === 2 ? 3 : 10);
        const totalLiability = legalFees + sr22Total + iidTotal + fines + 500; // +500 misc fees

        return {
            totalLiability,
            legalFees,
            sr22Total,
            iidTotal,
            fines,
            jail: stateData.jail,
            severity: stateData.severity
        };
    }, [state, complexity]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-rose-500/30 pb-20">
            {/* --- HEADER --- */}
            <header className="pt-12 pb-8 px-4 border-b border-white/5 bg-slate-900/40">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <Link href="/drunk-driving" className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold mb-4 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Hub
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                            DUI <span className="text-rose-600">Audit Engine</span>
                        </h1>
                        <p className="text-slate-500 mt-1 font-medium tracking-widest uppercase text-[10px]">Verified 2026 Institutional Framework</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-xl text-center">
                            <p className="text-[10px] font-black text-rose-400 uppercase tracking-tighter">Current CPC</p>
                            <p className="text-xl font-black text-white">$85.24</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
                {/* --- INPUT PANEL --- */}
                <div className="lg:col-span-5 space-y-8">
                    <section className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                            <Activity className="w-5 h-5 text-rose-500" />
                            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Audit Parameters</h2>
                        </div>

                        <div className="space-y-8">
                            {/* State Selection */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Jurisdiction</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {(Object.keys(DUI_DATA_2026.penalties1stOffense.states) as Array<keyof typeof DUI_DATA_2026.penalties1stOffense.states>).map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setState(s)}
                                            className={`p-4 rounded-2xl border transition-all text-sm font-bold uppercase tracking-widest ${state === s ? 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-600/20' : 'bg-slate-800 border-white/5 text-slate-500 hover:border-white/20'}`}
                                        >
                                            {s} Tier
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Complexity Selector */}
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-left">Case Complexity</label>
                                <div className="space-y-3">
                                    {[
                                        { id: 1, label: "Standard 1st Offense", desc: "No accidents, valid license." },
                                        { id: 2, label: "Aggravated / High BAC", desc: "BAC > 0.15% or property damage." },
                                        { id: 3, label: "Felony / Injury", desc: "Bodily harm or 3rd+ offense." }
                                    ].map((c) => (
                                        <button
                                            key={c.id}
                                            onClick={() => setComplexity(c.id)}
                                            className={`w-full p-5 rounded-2xl border text-left transition-all relative overflow-hidden group ${complexity === c.id ? 'bg-slate-800 border-rose-600' : 'bg-slate-900/50 border-white/5 hover:border-white/10'}`}
                                        >
                                            {complexity === c.id && <div className="absolute top-0 right-0 p-4"><div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /></div>}
                                            <div className="text-sm font-black text-white group-hover:text-rose-400 transition-colors uppercase tracking-widest text-left">{c.label}</div>
                                            <div className="text-[10px] text-slate-500 font-medium text-left">{c.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-rose-950/20 border border-rose-500/20 rounded-3xl">
                            <div className="flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0" />
                                <p className="text-[10px] text-rose-200/60 leading-relaxed uppercase tracking-tighter text-left">
                                    This audit provides institutional estimates. Actual judicial outcomes vary by prosecutor discretion and 2026 local sentencing guidelines.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* --- RESULT PANEL --- */}
                <div className="lg:col-span-7 space-y-8">
                    <section className="bg-slate-900 border border-rose-600/20 rounded-[3rem] p-10 shadow-[0_0_80px_-20px_rgba(225,29,72,0.15)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12">
                            <Scale className="w-64 h-64 text-rose-500" />
                        </div>

                        <div className="relative z-10 text-left">
                            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-8 text-left">
                                <Shield className="w-8 h-8 text-rose-500" />
                                <div className="text-left">
                                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter text-left">Audit Result</h2>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] text-left">Institutional Liability Forecast</p>
                                </div>
                            </div>

                            <div className="mb-12 text-left">
                                <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-4 text-left">Total Estimated Conviction Cost (3YR Cumulative)</p>
                                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter text-left">
                                    {formatCurrency(auditResult.totalLiability)}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="p-6 bg-slate-950 border border-white/5 rounded-[2rem] text-left">
                                    <Gavel className="w-5 h-5 text-rose-500 mb-4" />
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-left">Mandatory Jail</p>
                                    <p className="text-2xl font-black text-white">{auditResult.jail}</p>
                                </div>
                                <div className="p-6 bg-slate-950 border border-white/5 rounded-[2rem] text-left">
                                    <Activity className="w-5 h-5 text-rose-500 mb-4" />
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-left">Fine Assessment</p>
                                    <p className="text-2xl font-black text-white">{formatCurrency(auditResult.fines)}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl hover:bg-white/[0.07] transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-rose-400" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-bold text-white text-left text-left text-left">SR-22 Insurance Surcharge</p>
                                            <p className="text-[10px] text-slate-500 uppercase">3-Year Projected Lift</p>
                                        </div>
                                    </div>
                                    <div className="text-lg font-black text-rose-500">{formatCurrency(auditResult.sr22Total)}</div>
                                </div>
                                <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl hover:bg-white/[0.07] transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                            <DollarSign className="w-4 h-4 text-amber-400" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-bold text-white text-left">Legal Defense Fund</p>
                                            <p className="text-[10px] text-slate-500 uppercase">Retainer + Admin Fees</p>
                                        </div>
                                    </div>
                                    <div className="text-lg font-black text-rose-500">{formatCurrency(auditResult.legalFees)}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Secondary Result: Action Plan */}
                    <div className="p-10 bg-rose-600 rounded-[3rem] text-white shadow-2xl shadow-rose-600/20 group relative overflow-hidden">
                        <div className="relative z-10 text-left">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-left">Institutional Action Plan</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Consult 2026 DUI compliance specialist.",
                                    "Request SR-22 non-standard rate pool audit.",
                                    "Verify IID equipment calibration certification."
                                ].map((step, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-left">
                                        <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-[10px] shrink-0">{idx + 1}</div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/drunk-driving/guide" className="inline-flex items-center gap-3 bg-white text-rose-600 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
                                Detailed Guide <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
