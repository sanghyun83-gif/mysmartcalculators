"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Truck, ArrowLeft, ChevronRight, Info, Shield,
    Calculator, DollarSign, Scale, Gavel, MapPin, Search, Star
} from "lucide-react";
import {
    STATE_FAULT_LAWS, getStatesList, calculateSettlement, formatCurrency
} from "@/lib/calculators/truck-accident";

export function CalculatorClient() {
    const [state, setState] = useState("CA");
    const [medical, setMedical] = useState("125000");
    const [wages, setWages] = useState("45000");
    const [property, setProperty] = useState("15000");
    const [severity, setSeverity] = useState<any>("severe");
    const [fault, setFault] = useState(0);

    const states = getStatesList();

    const results = useMemo(() => {
        return calculateSettlement(
            state,
            parseInt(medical) || 0,
            parseInt(wages) || 0,
            parseInt(property) || 0,
            severity,
            fault
        );
    }, [state, medical, wages, property, severity, fault]);

    return (
        <>
            <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                {/* Input Panel (LHS) */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-4">
                        <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em]">Precision Input v4.1</div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Settlement <span className="text-red-500 italic">Audit</span>.</h1>
                        <p className="text-slate-400 font-medium">Please provide the economic variables of your accident. All data is processed locally with zero server-side storage.</p>
                    </div>

                    <div className="grid gap-6 p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl">
                        {/* State & Severity Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Jurisdiction</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
                                    <select
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="w-full bg-slate-800 border border-white/5 rounded-2xl p-4 pl-12 text-sm font-bold focus:border-red-500 outline-none transition-all appearance-none"
                                    >
                                        {states.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Injury Severity</label>
                                <select
                                    value={severity}
                                    onChange={(e) => setSeverity(e.target.value)}
                                    className="w-full bg-slate-800 border border-white/5 rounded-2xl p-4 text-sm font-bold focus:border-red-500 outline-none transition-all appearance-none"
                                >
                                    <option value="minor">Minor (Soft Tissue)</option>
                                    <option value="moderate">Moderate (Fractures)</option>
                                    <option value="severe">Severe (Surgery required)</option>
                                    <option value="permanent">Permanent (Disability)</option>
                                    <option value="catastrophic">Catastrophic</option>
                                </select>
                            </div>
                        </div>

                        {/* Financial Inputs */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { label: "Medical Bills", val: medical, set: setMedical, icon: Calculator },
                                { label: "Lost Wages", val: wages, set: setWages, icon: DollarSign },
                                { label: "Property Damage", val: property, set: setProperty, icon: Truck },
                            ].map((input, i) => (
                                <div key={i} className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">{input.label}</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={input.val}
                                            onChange={(e) => input.set(e.target.value)}
                                            className="w-full bg-slate-800 border border-white/5 rounded-2xl p-4 text-sm font-bold focus:border-red-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Fault Slider */}
                        <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <span>Comparative Fault Audit</span>
                                <span className={fault > 0 ? "text-red-500" : "text-emerald-500"}>{fault}% At-Fault</span>
                            </div>
                            <input
                                type="range"
                                min="0" max="100"
                                value={fault}
                                onChange={(e) => setFault(parseInt(e.target.value))}
                                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                            />
                            <p className="text-[9px] text-slate-500 font-bold italic leading-relaxed">
                                Adjusted for {results.stateName} {results.faultSystem.toUpperCase()} laws.
                                {fault > 50 && " Caution: Recovery may be barred in Modified states."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Output Panel (RHS / Sticky) */}
                <div className="lg:col-span-5">
                    <div className="sticky top-32 space-y-6">
                        <div className="relative group overflow-hidden">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-[#111827] border border-white/10 p-10 rounded-[2.5rem] space-y-12 shadow-2xl">
                                <div className="space-y-2">
                                    <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em]">Projected Settlement Range</div>
                                    <div className="text-2xl md:text-5xl font-black tracking-tighter leading-tight break-words flex flex-wrap items-baseline gap-2">
                                        <span>{formatCurrency(results.settlementLow)}</span>
                                        <span className="text-slate-700 text-2xl">-</span>
                                        <span>{formatCurrency(results.settlementHigh)}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 bg-white/5 rounded-3xl border border-white/5">
                                        <div className="text-[9px] font-black text-slate-500 uppercase mb-2">After Attorney Fee (Net)</div>
                                        <div className="text-lg font-black text-white">{formatCurrency(results.afterAttorneyFeeHigh)}</div>
                                    </div>
                                    <div className="p-5 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                                        <div className="text-[9px] font-black text-emerald-500 uppercase mb-2">Attorney Impact</div>
                                        <div className="text-lg font-black text-emerald-400">+30% Est.</div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="p-3 bg-red-500/10 rounded-xl group-hover/item:bg-red-500 transition-colors">
                                            <Scale className="w-5 h-5 text-red-500 group-hover/item:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase">Multiplier Logic</div>
                                            <div className="text-sm font-bold">Severity-Matched {results.painMultiplier}x Multiplier</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="p-3 bg-blue-500/10 rounded-xl group-hover/item:bg-blue-500 transition-colors">
                                            <Gavel className="w-5 h-5 text-blue-500 group-hover/item:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase">Jurisdiction Rules</div>
                                            <div className="text-sm font-bold">{results.stateName} Statutory Adherence</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-white text-black py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all shadow-2xl">
                                    Secure Full Case Audit <ChevronRight className="w-4 h-4 inline ml-2" />
                                </button>
                            </div>
                        </div>

                        {/* EEAT Footnote */}
                        <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 flex items-center gap-4 group cursor-default">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111827] bg-slate-800 flex items-center justify-center text-[8px] font-black text-red-500 uppercase">DA</div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-slate-500 leading-none">Verified by</div>
                                <div className="text-xs font-black text-white uppercase tracking-widest group-hover:text-red-500 transition-colors">Data Analyst Expert Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Sticky Result Bar - "The Dopamine Bar" */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[120] bg-[#111827]/95 backdrop-blur-xl border-t border-red-500/30 p-4 shadow-[0_-10px_40px_rgba(239,68,68,0.2)] animate-in slide-in-from-bottom duration-500">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                        <div className="text-[9px] font-black text-red-500 uppercase tracking-widest leading-none">Net Estimate</div>
                        <div className="text-xl font-black text-white tracking-tighter">
                            {formatCurrency(results.afterAttorneyFeeHigh)}
                        </div>
                    </div>
                    <Link href="#calculator-audit" className="flex-grow max-w-[180px] bg-red-600 text-white py-3 rounded-xl font-black text-[10px] text-center uppercase tracking-widest shadow-lg shadow-red-500/20 active:scale-95 transition-all">
                        Audit Case Now
                    </Link>
                </div>
            </div>
        </>
    );
}
