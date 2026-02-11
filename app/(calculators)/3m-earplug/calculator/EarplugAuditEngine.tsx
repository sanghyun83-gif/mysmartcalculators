"use client";

import { useState } from "react";
import {
    SITE,
    HEARING_CONDITIONS,
    SERVICE_PERIODS,
    calculate3MEarplugSClass,
    formatCurrency,
    EARPLUG_2026,
    EPP_TIERS
} from "@/lib/calculators/3m-earplug";
import {
    Calculator,
    Shield,
    Ear,
    TrendingUp,
    CheckCircle,
    AlertTriangle,
    Activity,
    Scale,
    ChevronRight,
    Stethoscope,
    Info,
    ArrowRight,
    Zap,
    Target
} from "lucide-react";

export default function EarplugAuditEngine() {
    const [hearingCondition, setHearingCondition] = useState("moderate-loss");
    const [servicePeriod, setServicePeriod] = useState("iraq-afghanistan");
    const [yearsAffected, setYearsAffected] = useState(10);
    const [vaDisabilityRating, setVaDisabilityRating] = useState(30);
    const [hasAudiologyReport, setHasAudiologyReport] = useState(true);
    const [hadSurgery, setHadSurgery] = useState(false);
    const [usesHearingAids, setUsesHearingAids] = useState(true);
    const [hasAttorney, setHasAttorney] = useState(true);

    const [result, setResult] = useState<ReturnType<typeof calculate3MEarplugSClass> | null>(null);

    const handleCalculate = () => {
        setResult(calculate3MEarplugSClass(
            hearingCondition,
            servicePeriod,
            yearsAffected,
            vaDisabilityRating,
            hasAudiologyReport,
            hadSurgery,
            usesHearingAids,
            hasAttorney
        ));
    };

    return (
        <div className="space-y-12">
            {/* Input Module */}
            <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Shield className="w-32 h-32 text-indigo-500" />
                </div>

                <div className="relative z-10 space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-2xl">
                            <Activity className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Forensic Audit Inputs.</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">MDL 2885 EPP Tier Mapping</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Clinical Condition</label>
                            <select
                                value={hearingCondition}
                                onChange={(e) => setHearingCondition(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500/50 transition-all outline-none appearance-none cursor-pointer"
                            >
                                {HEARING_CONDITIONS.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Service Environment</label>
                            <select
                                value={servicePeriod}
                                onChange={(e) => setServicePeriod(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500/50 transition-all outline-none appearance-none cursor-pointer"
                            >
                                {SERVICE_PERIODS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Exposure Duration (Years)</label>
                            <input
                                type="number"
                                value={yearsAffected}
                                onChange={(e) => setYearsAffected(parseInt(e.target.value) || 0)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500/50 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">VA Rating (%)</label>
                            <input
                                type="number"
                                value={vaDisabilityRating}
                                onChange={(e) => setVaDisabilityRating(parseInt(e.target.value) || 0)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500/50 transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Audiology Report", state: hasAudiologyReport, set: setHasAudiologyReport },
                            { label: "Surgical History", state: hadSurgery, set: setHadSurgery },
                            { label: "Hearing Aid Use", state: usesHearingAids, set: setUsesHearingAids },
                            { label: "Attorney Rep", state: hasAttorney, set: setHasAttorney }
                        ].map((box, i) => (
                            <button
                                key={i}
                                onClick={() => box.set(!box.state)}
                                className={`p-4 rounded-3xl border transition-all text-[10px] font-black text-left uppercase tracking-widest flex flex-col justify-between h-24 ${box.state ? "bg-indigo-500/10 border-indigo-500/40 text-white" : "bg-black/20 border-white/5 text-slate-600 hover:border-white/10"}`}
                            >
                                <span>{box.label}</span>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${box.state ? "bg-indigo-600 border-transparent" : "border-slate-800"}`}>
                                    {box.state && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-6 rounded-[2rem] flex items-center justify-center gap-4 transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.2em] text-sm italic"
                    >
                        <Zap className="w-5 h-5 animate-pulse" /> Finalize Audit Sync
                    </button>
                </div>
            </div>

            {/* Result Module */}
            {result && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-500/30 rounded-[3rem] p-12 shadow-[0_50px_100px_rgba(79,70,229,0.2)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <TrendingUp className="w-48 h-48 text-white" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">Estimated High-Fidelity Valuation</p>
                                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter italic leading-none">
                                        {formatCurrency(result.estimateLow)} - {formatCurrency(result.estimateHigh)}
                                    </h2>
                                </div>
                                <div className="pt-8 border-t border-white/10 flex flex-wrap gap-12">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-indigo-200/50 uppercase tracking-widest">MDL Tier Sync</p>
                                        <p className="text-xl font-black text-white uppercase italic tracking-tighter">{result.eppTier}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-indigo-200/50 uppercase tracking-widest">Expert Delta</p>
                                        <p className="text-xl font-black text-emerald-300 uppercase italic tracking-tighter">+{formatCurrency(result.expertDelta)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-center space-y-6 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="p-4 bg-emerald-500/10 rounded-full w-fit">
                                <Target className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div className="space-y-2 relative z-10">
                                <h4 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none">Audit Verdict.</h4>
                                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                                    Your profile maps to **{result.eppTier}** with a high probability of **EIF (Extraordinary Injury Fund)** escalation due to clinical markers.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-white transition-colors relative z-10">
                                Download Full Audit Report <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Forensic Details Matrix */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "EPP Floor", value: formatCurrency(result.eppBase), icon: Shield },
                            { label: "Clinical Severity", value: "High", icon: Activity },
                            { label: "Exposure Delta", value: "Verified", icon: Stethoscope },
                            { label: "Jurisdiction", value: "MDL 2885", icon: Scale }
                        ].map((item, i) => (
                            <div key={i} className="bg-black/40 border border-white/5 p-6 rounded-[2rem] space-y-2">
                                <item.icon className="w-4 h-4 text-indigo-500/50" />
                                <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">{item.label}</p>
                                <p className="text-white font-black text-lg uppercase italic tracking-tighter leading-none">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-emerald-950/20 border border-emerald-500/20 rounded-[2.5rem] flex items-start gap-6">
                        <div className="p-3 bg-emerald-500/20 rounded-2xl">
                            <Info className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-emerald-100 text-sm font-bold uppercase tracking-tight italic">Forensic Accuracy Note:</p>
                            <p className="text-emerald-400/70 text-xs font-medium leading-[1.6]">
                                This S-Class audit uses {EARPLUG_2026.expertDelta.litigationAlpha}x risk modeling based on 2026 disbursement benchmarks. Accuracy depends on the alignment of VA audiological reports with MDL 2885 Master Settlement protocols.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
