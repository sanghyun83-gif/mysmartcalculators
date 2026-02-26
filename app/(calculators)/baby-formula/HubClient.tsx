"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Baby, Scale, Gavel, Shield, ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, MapPin, Zap, DollarSign, Activity, AlertTriangle, Target,
    FileText, Award, TrendingUp, Stethoscope, HeartPulse
} from "lucide-react";
import {
    SITE,
    CALCULATORS,
    INJURY_SEVERITY,
    FORMULA_2026,
    formatCurrency
} from "@/lib/calculators/baby-formula";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-purple-500/30">
            {/* 1. S-Class Hero: Cinema-Purple Royale */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            MDL 3026 AUDIT 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Baby Formula <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-700">NEC Lawsuit.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional quantification of necrotizing enterocolitis (NEC) liability through MDL 3026 bellwether data.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/baby-formula/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-50 transition-all shadow-2xl overflow-hidden shadow-purple-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Initiate NEC Audit <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">{FORMULA_2026.statistics.pendingCases}+ Cases</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Currently in MDL 3026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Historical Trends */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Litigation Velocity</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Event</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Metric</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Bellwether Verdict I</td>
                                    <td className="py-3 text-right text-purple-400">$60,000,000</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Bellwether Verdict II</td>
                                    <td className="py-3 text-right text-purple-400">$495,000,000</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Global Settlement Phase</td>
                                    <td className="py-3 text-right uppercase font-black text-amber-500">Projected 2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Comparative Benchmark */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Stethoscope className="w-5 h-5 text-purple-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Severity Benchmarks</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Injury Class</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Est. Range</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3">{INJURY_SEVERITY[0].name}</td>
                                    <td className="py-3 text-right">$250K - $450K</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">{INJURY_SEVERITY[2].name}</td>
                                    <td className="py-3 text-right">$600K - $1.2M</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">{INJURY_SEVERITY[INJURY_SEVERITY.length - 1]?.name || "Severe NEC"}</td>
                                    <td className="py-3 text-right text-rose-500">$2.5M+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Technical Specification */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-purple-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">MDL 3026 Specs</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Parameter</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Standard</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Causation Protocol</td>
                                    <td className="py-3 text-right">Cow&apos;s Milk Link</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Primary Jurisdiction</td>
                                    <td className="py-3 text-right">N.D. Illinois</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Audit Version</td>
                                    <td className="py-3 text-right text-purple-400">S-Class v2.6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. Technical Guide & Pathology Methodology */}
            <section id="logic" className="py-32 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 lg:flex gap-20 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <BarChart3 className="w-3.5 h-3.5 text-purple-500" />
                            S-Class Forensic Pathology
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The NEC <br />
                            <span className="text-purple-500">Causation Audit.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            The baby formula NEC litigation pivots on **failure to warn**. Our engine audits the specific causal link between cow&apos;s milk-based formula (Enfamil/Similac) and the rapid onset of necrotizing enterocolitis in preterm infants.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Bellwether Data Sync", desc: "Real-time trial outcome weighting", icon: Gavel },
                                { title: "Surgical Impact Auditor", desc: "Resection and ostomy severity audit", icon: HeartPulse },
                                { title: "Life Care Plan Matrix", desc: "Long-term developmental expense audit", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-black text-white uppercase tracking-widest">{item.title}</h4>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
                        <div className="absolute -inset-4 bg-purple-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Baby className="w-64 h-64 rotate-12" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest">Clinical Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Payout Precision.
                                </h3>
                            </div>
                            <div className="p-8 bg-purple-600 rounded-[3rem] space-y-4 shadow-2xl shadow-purple-900/20 text-center">
                                <p className="text-xs font-bold text-purple-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against North Shore and MDL 3026 bellwether verdicts exceeding $555M in aggregate damages (2024-2026)."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub (PAA Targeted) */}
            <section id="faq" className="py-32 bg-slate-950 border-y border-white/5 relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-6 relative">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-purple-500/30 underline-offset-8">
                            NEC Litigation FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is the average NEC settlement payout in 2026?",
                                a: "Average NEC settlement payouts in 2026 are projected between $300,000 and $800,000. However, jury verdicts for severe cases involving surgical resection have exceeded $60M per infant, establishing massive upward pressure on settlement negotiations."
                            },
                            {
                                q: "When will the baby formula NEC lawsuit settle?",
                                a: "MDL 3026 is currently in the late bellwether phase. Global settlement negotiations are anticipated to materialize in late 2026 as manufacturers seek to resolve thousands of pending claims following significant jury defeats in Illinois and Missouri."
                            },
                            {
                                q: "Who is at fault for baby formula NEC?",
                                a: "Current litigation targets manufacturers Abbott (Similac) and Mead Johnson (Enfamil) for failing to warn that cow&apos;s milk-based formula carries a significantly higher risk of NEC for premature infants compared to human donor milk or fortifiers."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                                    Q: {faq.q}
                                </h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed italic border-l border-white/10 pl-6 ml-2 group-hover:text-slate-400">
                                    A: {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Related Calculators & CTA */}
            <section className="py-32 bg-[#020617] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-16 bg-gradient-to-br from-purple-600 to-purple-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-purple-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your NEC <br />
                                Settlement Value.
                            </h2>
                            <p className="text-purple-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't accept a standard settlement for life-altering infant injuries. Initiate your institutional-grade lawsuit audit.
                            </p>
                            <Link href="/baby-formula/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <RelatedCalculators currentCalc="baby-formula" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}

