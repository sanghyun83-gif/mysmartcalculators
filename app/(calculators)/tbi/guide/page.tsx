"use client";

import Link from "next/link";
import {
    ArrowLeft, ArrowRight, Brain, FileText, AlertTriangle,
    Heart, Info, CheckCircle2, Shield, Zap, Stethoscope,
    TrendingUp, Users, Activity
} from "lucide-react";
import { SITE, TBI_2026, formatCurrency } from "@/lib/calculators/tbi";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function TBIGuidePage() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
            {/* Premium Header */}
            <header className="bg-slate-950/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-[100] py-4">
                <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/tbi" className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                            <ArrowLeft className="w-5 h-5 text-slate-400" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <FileText className="w-6 h-6 text-amber-500" />
                            <span className="text-sm font-black text-white tracking-[0.2em] uppercase italic">
                                Case <span className="text-amber-500">Intelligence Guide</span>
                            </span>
                        </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                        Ref: {SITE.year}.TBI
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-16">
                {/* Page Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[9px] font-black text-amber-500 uppercase tracking-[0.2em]">
                        <Shield className="w-3 h-3" /> Catastrophic Injury Benchmarks
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                        Understanding <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 font-black">Brain Injuries.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                        A Forensic Analysis of GCS Scores, Outcomes, and Legal Valuation
                    </p>
                </div>

                {/* TBI Statistics Matrix */}
                <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 mb-8 space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-[80px] -z-10" />
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                        <h2 className="text-lg font-black text-white uppercase italic flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-amber-500" />
                            {SITE.year} Surveillance Data
                        </h2>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">CDC/NIH Source Baseline</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Cases/Year", val: `${(TBI_2026.statistics.annualCases / 1000000).toFixed(1)}M`, color: "bg-blue-500/10 text-blue-400", border: "border-blue-500/20" },
                            { label: "Deaths/Year", val: TBI_2026.statistics.annualDeaths.toLocaleString(), color: "bg-red-500/10 text-red-400", border: "border-red-500/20" },
                            { label: "Avg Age", val: TBI_2026.statistics.avgAge, color: "bg-amber-500/10 text-amber-500", border: "border-amber-500/20" },
                            { label: "Male Bias", val: `${TBI_2026.statistics.malePercent}%`, color: "bg-emerald-500/10 text-emerald-400", border: "border-emerald-500/20" }
                        ].map((stat, i) => (
                            <div key={i} className={`p-6 rounded-3xl border ${stat.border} ${stat.color} text-center space-y-2`}>
                                <p className="text-2xl font-black tracking-tighter">{stat.val}</p>
                                <p className="text-[9px] font-black uppercase tracking-widest opacity-60">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* GCS Scale Analysis */}
                <div className="bg-slate-950 border border-white/10 rounded-[3rem] p-10 mb-8 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">
                            Glasgow Coma Scale (GCS) Audit
                        </h2>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Technical Entity Analysis</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                        The GCS is the global standard for consciousness auditing. It measures responsive capacity across
                        three pillars: Eye, Verbal, and Motor. Lower scores correlate directly with catastrophic payout multipliers.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { range: "13-15", label: "Mild TBI", desc: "Short recovery window", border: "border-emerald-500/30", text: "text-emerald-400" },
                            { range: "9-12", label: "Moderate TBI", desc: "Definite cognitive shift", border: "border-amber-500/30", text: "text-amber-400" },
                            { range: "3-8", label: "Severe TBI", desc: "Catastrophic permanence", border: "border-red-500/30", text: "text-red-400" }
                        ].map((stat, i) => (
                            <div key={i} className={`p-8 bg-white/5 border-2 ${stat.border} rounded-3xl text-center space-y-2`}>
                                <p className={`text-3xl font-black tracking-tighter ${stat.text}`}>{stat.range}</p>
                                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none">{stat.label}</p>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Severity Master Table */}
                <div className="bg-white/5 border border-white/10 rounded-[3.5rem] p-10 mb-8 overflow-hidden">
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-8">
                        Severity-to-Value Matrix
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Outcome Category</th>
                                    <th className="py-4 text-[10px] font-black text-center text-slate-500 uppercase tracking-widest">GCS</th>
                                    <th className="py-4 text-[10px] font-black text-center text-slate-500 uppercase tracking-widest">Forensic Avg</th>
                                    <th className="py-4 text-[10px] font-black text-center text-slate-500 uppercase tracking-widest">Life Care</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {TBI_2026.severityLevels.map((level, index) => (
                                    <tr key={index} className="group hover:bg-white/5 transition-colors">
                                        <td className="py-6 pr-4">
                                            <p className="text-white font-black uppercase text-xs tracking-widest">{level.level}</p>
                                            <p className="text-[10px] font-bold text-slate-500 mt-1 italic italic">"{level.description}"</p>
                                        </td>
                                        <td className="py-6 text-center">
                                            <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-[10px] font-black text-amber-500">
                                                {level.gcsScore}
                                            </span>
                                        </td>
                                        <td className="py-6 text-center text-lg font-black text-amber-500 tracking-tighter">
                                            {formatCurrency(level.avgSettlement)}
                                        </td>
                                        <td className="py-6 text-center text-[11px] font-black text-slate-400 tracking-tighter">
                                            {formatCurrency(level.lifetimeCost)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Causes & Symptoms: The Trinity View */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-amber-500/5 shadow-2xl border border-amber-500/20 rounded-[3rem] p-10 space-y-6">
                        <h2 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                            Liability Origins
                        </h2>
                        <ul className="space-y-4">
                            {[
                                { l: "Falls", p: TBI_2026.statistics.fallsPercent },
                                { l: "Vehicle Collisions", p: TBI_2026.statistics.vehiclePercent },
                                { l: "Intentional Assaults", p: TBI_2026.statistics.assaultPercent },
                                { l: "Competitive Sports", p: TBI_2026.statistics.sportsPercent }
                            ].map((cause, i) => (
                                <li key={i} className="flex items-center justify-between">
                                    <span className="text-[11px] font-black text-amber-200/60 uppercase tracking-widest">{cause.l}</span>
                                    <div className="flex items-center gap-3 flex-1 ml-6">
                                        <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${cause.p}%` }} />
                                        </div>
                                        <span className="text-xs font-black text-white w-8">{cause.p}%</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 space-y-6">
                        <h2 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
                            <Activity className="w-6 h-6 text-orange-500" />
                            Clinical Echoes
                        </h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {TBI_2026.symptoms.map((symptom, index) => (
                                <div key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-2xl border border-white/5">
                                    <CheckCircle2 className="w-3 h-3 text-orange-500 shrink-0" />
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tight">{symptom}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="group relative p-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[3.5rem] text-center space-y-8 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2s] italic font-black flex items-center justify-center opacity-20 text-[10rem]">TBI</div>

                    <div className="relative z-10 space-y-4">
                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                            Ready for a Forensic Audit?
                        </h2>
                        <p className="text-amber-100 font-bold uppercase text-[10px] tracking-widest max-w-lg mx-auto">
                            Calculate your settlement using 2026 GCS severity tables and expert life care multipliers.
                        </p>
                    </div>
                    <div className="relative z-10">
                        <Link
                            href="/tbi/calculator"
                            className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl"
                        >
                            Start Expert Audit <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Citation */}
                <p className="mt-16 text-[9px] font-bold text-slate-700 text-center uppercase tracking-widest leading-loose max-w-2xl mx-auto">
                    Forensic Transparency Node • 2026 Catastrophic Standards Deployed <br />
                    {TBI_2026.citation}
                </p>
            </main>
        </div>
    );
}
