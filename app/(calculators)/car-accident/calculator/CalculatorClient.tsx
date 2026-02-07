"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Activity, ArrowLeft, ChevronRight, Info, Shield, TrendingUp,
    Calculator, DollarSign, Scale, Gavel, MapPin, Search, Star, AlertTriangle, BarChart3, Pill, Briefcase, Landmark, PieChart, LineChart, Wallet, ArrowRight, CheckCircle2, Zap
} from "lucide-react";
import {
    calculateCarAccidentSettlement, formatCurrency, ACCIDENT_CONSTANTS
} from "@/lib/calculators/car-accident";
import { ResultMetric } from "@/components/v3/ResultMetric";

export function CalculatorClient() {
    const [medicalBills, setMedicalBills] = useState("15000");
    const [lostWages, setLostWages] = useState("5000");
    const [propertyDamage, setPropertyDamage] = useState("8000");
    const [faultPercentage, setFaultPercentage] = useState(0);
    const [stateCode, setStateCode] = useState("CA");
    const [injuryTier, setInjuryTier] = useState<keyof typeof ACCIDENT_CONSTANTS.injuryTiers>("MODERATE");

    // Expert Audit Toggles (+α)
    const [isAggravated, setIsAggravated] = useState(false);
    const [isClearLiability, setIsClearLiability] = useState(false);

    const results = useMemo(() => {
        return calculateCarAccidentSettlement({
            medicalBills: parseInt(medicalBills.replace(/[^0-9]/g, '')) || 0,
            lostWages: parseInt(lostWages.replace(/[^0-9]/g, '')) || 0,
            propertyDamage: parseInt(propertyDamage.replace(/[^0-9]/g, '')) || 0,
            faultPercentage,
            stateCode,
            injuryTier,
            isAggravated,
            isClearLiability
        });
    }, [medicalBills, lostWages, propertyDamage, faultPercentage, stateCode, injuryTier, isAggravated, isClearLiability]);

    return (
        <div className="bg-slate-950 min-h-screen">
            <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                {/* Input Panel (LHS) */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">
                            <Zap className="w-3.5 h-3.5 animate-pulse" /> Expert Audit Engine v2.1
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Liability <span className="text-red-500 italic">Audit.</span></h1>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-2xl">
                            Simulate your settlement delta using <span className="text-white italic">2026 Actuarial Staging</span> and jurisdictional fault-bars.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {/* 1. Expert Multiplier Switches (+α) */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <button
                                onClick={() => setIsAggravated(!isAggravated)}
                                className={`p-6 rounded-3xl border transition-all flex items-center justify-between group ${isAggravated ? 'bg-red-500/10 border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'bg-slate-900 border-white/5 hover:border-white/20'}`}
                            >
                                <div className="text-left">
                                    <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isAggravated ? 'text-red-500' : 'text-slate-500'}`}>Aggravated Factor</h4>
                                    <p className="text-[10px] font-bold text-slate-400">DUI / Hit & Run / Gross Negligence</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${isAggravated ? 'bg-red-600' : 'bg-slate-800'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isAggravated ? 'right-1' : 'left-1'}`} />
                                </div>
                            </button>

                            <button
                                onClick={() => setIsClearLiability(!isClearLiability)}
                                className={`p-6 rounded-3xl border transition-all flex items-center justify-between group ${isClearLiability ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-slate-900 border-white/5 hover:border-white/20'}`}
                            >
                                <div className="text-left">
                                    <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isClearLiability ? 'text-emerald-500' : 'text-slate-500'}`}>Clear Liability</h4>
                                    <p className="text-[10px] font-bold text-slate-400">Rear-end / Left-turn Violation</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${isClearLiability ? 'bg-emerald-600' : 'bg-slate-800'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isClearLiability ? 'right-1' : 'left-1'}`} />
                                </div>
                            </button>
                        </div>

                        {/* 2. Base Damages */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Medical Specials (Documented)</label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 font-black group-focus-within:text-red-500">$</div>
                                    <input
                                        type="text" value={medicalBills} onChange={(e) => setMedicalBills(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-[2.5rem] p-6 pl-12 text-2xl font-black text-white focus:border-red-500/50 outline-none transition-all shadow-inner"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Lost Wages & Property</label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 font-black group-focus-within:text-red-500">$</div>
                                    <input
                                        type="text" value={lostWages} onChange={(e) => setLostWages(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-[2.5rem] p-6 pl-12 text-2xl font-black text-white focus:border-red-500/50 outline-none transition-all shadow-inner"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 3. Jurisdictional Filter */}
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                                <MapPin className="w-32 h-32 text-red-600" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Accident Venue</label>
                                    <select
                                        value={stateCode}
                                        onChange={(e) => setStateCode(e.target.value)}
                                        className="bg-black border border-white/10 rounded-2xl px-6 py-4 text-sm font-black text-white focus:border-red-500 outline-none appearance-none cursor-pointer pr-12 shadow-2xl"
                                    >
                                        {["CA", "NY", "TX", "FL", "IL", "PA", "GA", "VA", "AZ", "WA"].map(st => (
                                            <option key={st} value={st}>{st} - {st === "VA" ? "Contributory (Hard Bar)" : "Comparative Logic"}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-6 flex-grow md:max-w-xs">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Fault Percentage</span>
                                        <span className={`text-2xl font-black ${faultPercentage > 50 ? 'text-red-500' : 'text-white'}`}>{faultPercentage}%</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="100" value={faultPercentage}
                                        onChange={(e) => setFaultPercentage(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] font-black p-5 rounded-2xl border bg-black/40 border-white/5 italic">
                                {faultPercentage > 50 ? (
                                    <><AlertTriangle className="w-4 h-4 text-red-500" /> <span className="text-red-500 uppercase">Warning: Recovery may be BARRED in Modified Comparative Jurisdictions.</span></>
                                ) : (
                                    <><CheckCircle2 className="w-4 h-4 text-emerald-500" /> <span className="text-slate-400">Liability Filter Active: Award reduced proportionally (Net {100 - faultPercentage}%).</span></>
                                )}
                            </div>
                        </div>

                        {/* 4. Injury Staging */}
                        <div className="space-y-6 text-center">
                            <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">ICD-10 Injury Staging (2026 Actuarial)</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {(Object.entries(ACCIDENT_CONSTANTS.injuryTiers) as [keyof typeof ACCIDENT_CONSTANTS.injuryTiers, any][]).map(([key, value]) => (
                                    <button
                                        key={key}
                                        onClick={() => setInjuryTier(key)}
                                        className={`p-6 rounded-3xl border text-[10px] font-black transition-all space-y-2 group h-32 flex flex-col items-center justify-center ${injuryTier === key ? 'bg-red-600 border-red-500 text-white shadow-[0_20px_40px_rgba(220,38,38,0.3)] scale-105' : 'bg-slate-900 border-white/5 text-slate-500 hover:border-white/20'}`}
                                    >
                                        <span className="uppercase tracking-widest">{value.label.split(':')[0]}</span>
                                        <span className={`text-[8px] font-bold block leading-relaxed opacity-60 group-hover:opacity-100`}>
                                            {value.label.split(':')[1]}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel (RHS) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 space-y-8">
                        <div className="p-12 bg-gradient-to-br from-slate-900 via-black to-slate-950 border border-red-500/20 rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                                <Gavel className="w-48 h-48 text-red-600" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-[.3em]">
                                    <Shield className="w-3 h-3" /> Audit Verified
                                </div>
                                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest italic">Projected Settlement Delta</h3>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                                    {formatCurrency(results.mid)}
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-red-400 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
                                        <TrendingUp className="w-4 h-4" /> Range: {formatCurrency(results.low)} - {formatCurrency(results.high)}
                                    </div>
                                    {(isAggravated || isClearLiability) && (
                                        <div className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 flex items-center gap-2">
                                            <Star className="w-3.5 h-3.5 fill-emerald-400" /> Expert Delta Active
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-4 pt-10 border-t border-white/5 relative z-10">
                                <ResultMetric
                                    label="Medical & Wage Base"
                                    value={formatCurrency(results.breakdown.economic)}
                                    description="Documented economic indemnity including wage buffer."
                                />
                                <ResultMetric
                                    label="Non-Economic Scaling"
                                    value={formatCurrency(results.breakdown.painSuffering)}
                                    description={`Pain & Suffering based on ${ACCIDENT_CONSTANTS.injuryTiers[injuryTier].multiplier}x Expert Multiplier.`}
                                    variant="highlight"
                                />
                                {faultPercentage > 0 && (
                                    <ResultMetric
                                        label="Liability Reduction"
                                        value={`-${formatCurrency(results.breakdown.faultReduction)}`}
                                        description={`Deduction for ${faultPercentage}% comparative fault.`}
                                        variant="critical"
                                        trend={{ type: 'down', label: 'Fault Deduction' }}
                                    />
                                )}
                            </div>

                            <div className="p-6 bg-red-600/5 rounded-[2.5rem] border border-red-600/20 space-y-3 relative z-10">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Actuarial Staging Note</div>
                                <p className="text-[11px] font-bold text-white leading-relaxed italic">
                                    "{results.breakdown.tierLabel} settlement trajectory applied across {stateCode} jurisdictional risk-pool."
                                </p>
                            </div>
                        </div>

                        {/* High-EEAT Trust Badge */}
                        <div className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] flex items-center justify-between group transform hover:-translate-y-1 transition-all">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center shadow-2xl">
                                    <Scale className="w-7 h-7 text-red-600" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs font-black text-white uppercase tracking-widest mb-0.5">2026 Legal-Sync</div>
                                    <div className="text-[10px] font-bold text-slate-500">Updated to FMCSA & Tort Standards</div>
                                </div>
                            </div>
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-red-600/10 flex items-center justify-center text-[10px] font-black text-red-500 uppercase tracking-tighter">EA</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Trinity Insight Section */}
            <section className="py-32 bg-slate-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">The "Nuclear" <br />Multiplier.</h2>
                            <div className="h-2 w-24 bg-red-600 rounded-full" />
                        </div>
                        <p className="text-slate-400 text-xl font-medium leading-loose">
                            In high-delta car accident cases, the multiplier isn't static. Factors like <span className="text-white italic">Aggravated Negligence (DUI)</span> can trigger punitive damages, pushing your non-economic award into the "Nuclear Verdict" range.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] space-y-4">
                                <div className="text-3xl font-black text-white tracking-tighter">1.5x</div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DUI / Aggravated Boost</p>
                            </div>
                            <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] space-y-4">
                                <div className="text-3xl font-black text-white tracking-tighter">1.15x</div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Clear Liability Gap</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-16 bg-slate-900 border border-white/5 rounded-[5rem] shadow-2xl space-y-10 group">
                        <h4 className="text-2xl font-black text-white tracking-tighter uppercase italic underline decoration-red-600 decoration-8 underline-offset-8">Professional Logic</h4>
                        <div className="space-y-6">
                            {[
                                { t: "Economic Indemnity", d: "Documented medical and wage loss is the bedrock of the claim." },
                                { t: "Pain & Suffering Staging", d: "Calculated based on clinical diagnostic codes (ICD-10)." },
                                { t: "Liability Reduction Matrix", d: "Accounting for the exact fault-bar of the state venue." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group-hover:translate-x-2 transition-transform">
                                    <div className="w-1.5 h-12 bg-red-600 rounded-full shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-xs font-black text-white uppercase tracking-widest">{item.t}</p>
                                        <p className="text-xs text-slate-500 font-bold italic lowercase">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
