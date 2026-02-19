"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    AlertTriangle
} from "lucide-react";
import { SITE, CALCULATORS, INJURY_TYPES, DEPUY_KNEE_2026, formatCurrency } from "@/lib/calculators/depuy-knee";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const injuryArr = useMemo(() => INJURY_TYPES.slice(0, 3), []);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
            {/* 1. S-Class Hero: Cinema-Amber Royale */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-400 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            ATTUNE LITIGATION AUDIT 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            DePuy Knee <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-700">Settlement.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Forensic quantification of DePuy Attune tibial loosening and early failure claims through 2026 litigation benchmarks.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/depuy-knee/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-50 transition-all shadow-2xl overflow-hidden shadow-amber-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Analyze Claim Value <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">{DEPUY_KNEE_2026.statistics.status}</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Litigation Volume Audited</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Manufacturer Specs */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-amber-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Payout Velocity</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Metric</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Value</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Manufacturer</td>
                                    <td className="py-3 text-right text-amber-400">{DEPUY_KNEE_2026.statistics.manufacturer}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Main Issue</td>
                                    <td className="py-3 text-right">{DEPUY_KNEE_2026.statistics.issue}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Revision Payout</td>
                                    <td className="py-3 text-right text-amber-400">$200K - $500K</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Comparative Benchmark */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Stethoscope className="w-5 h-5 text-amber-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Injury Benchmarks</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Injury Class</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Avg Settlement</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {injuryArr.map((injury) => (
                                    <tr key={injury.id} className="border-b border-white/5">
                                        <td className="py-3">{injury.name}</td>
                                        <td className="py-3 text-right">{formatCurrency(injury.avgSettlement)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Technical Specification */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-amber-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Audit Specs</h3>
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
                                    <td className="py-3">Study Data</td>
                                    <td className="py-3 text-right">Tibial Failure</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Failure Timing</td>
                                    <td className="py-3 text-right">2 - 5 Years</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Audit Version</td>
                                    <td className="py-3 text-right text-amber-400">S-Class v2.6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. Technical Guide & Clinical Methodology */}
            <section id="logic" className="py-32 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 lg:flex gap-20 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
                            S-Class Litigation Logic
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Attune <br />
                            <span className="text-amber-500">Forensic Audit.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            DePuy Attune lawsuits focus on **Tibial Component Loosening**. Our engine audits clinical failure markers including cement-bond data, early-failure timing windows, and revision surgical complexity.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Loosening Audit", desc: "Tibial baseplate separation analysis", icon: Activity },
                                { title: "Timing Matrix", desc: "Early failure window weighting", icon: Clock },
                                { title: "Litigation Sync", desc: "Active consolidated claim metrics", icon: Gavel }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-amber-500" />
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
                        <div className="absolute -inset-4 bg-amber-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Stethoscope className="w-64 h-64 rotate-12" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Litigation Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Payout Precision.
                                </h3>
                            </div>
                            <div className="p-8 bg-amber-600 rounded-[3rem] space-y-4 shadow-2xl shadow-amber-900/20 text-center">
                                <p className="text-xs font-bold text-amber-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against FDA MAUDE reports and Attune-specific tibial loosening clinical studies (2013-2026)."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-amber-500/30 underline-offset-8">
                            DePuy Knee Lawsuit FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is the average settlement for a DePuy Attune knee lawsuit in 2026?",
                                a: "In 2026, average DePuy Attune knee settlements for cases requiring revision surgery range from $200,000 to $500,000. Values depend strictly on the age of the patient, severity of bone damage, and impact on long-term mobility."
                            },
                            {
                                q: "What causes Attune knee failure?",
                                a: "Studies suggest the Attune tibial baseplate design may not allow proper cement bonding to bone. The cement-bone interface fails, causing loosening and premature failure."
                            },
                            {
                                q: "How do I know if my knee implant is a DePuy Attune?",
                                a: "You can identify your implant by reviewing your original surgical records or product identification labels. If you experience clicking, pain, or instability, your surgeon can perform an audit of the device's status."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-amber-500" />
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
                    <div className="p-16 bg-gradient-to-br from-amber-600 to-amber-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-amber-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your DePuy <br />
                                Knee Settlement.
                            </h2>
                            <p className="text-amber-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't let a defective knee implant dictate your mobility. Initiate your institutional-grade settlement audit.
                            </p>
                            <Link href="/depuy-knee/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <RelatedCalculators currentCalc="depuy-knee" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
