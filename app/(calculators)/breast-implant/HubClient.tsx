"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill, Droplets, Flame,
    Thermometer, ShieldAlert
} from "lucide-react";
import { SITE, CALCULATORS, INJURY_TYPES, BREAST_IMPLANT_2026, formatCurrency } from "@/lib/calculators/breast-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const injuries = useMemo(() => INJURY_TYPES.slice(0, 3), []);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-rose-500/30">
            {/* 1. S-Class Hero: Cinema-Rose BII Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,63,94,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            LITIGATION AUDIT 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Implant <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-rose-800">BII Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional implant failure forecasting. Audit settlement values for BIA-ALCL, Allergan recall, and autoimmune-BII protocols.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/breast-implant/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-50 transition-all shadow-2xl overflow-hidden shadow-rose-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Calculate Settlement <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="p-2 bg-rose-500/10 rounded-lg">
                                    <Scale className="w-5 h-5 text-rose-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">MDL 2921</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Mass Tort Sync Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Injury Arbitrage */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="w-5 h-5 text-rose-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Injury Profile</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Condition</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Settlement</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {injuries.map((inj, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 font-black text-white uppercase tracking-tighter">{inj.name}</td>
                                        <td className="py-3 text-right text-rose-400 uppercase tracking-tighter">{formatCurrency(inj.avgSettlement)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Clinical Status */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-rose-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Recall Stats</h3>
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
                                    <td className="py-3 italic">Allergan Recall</td>
                                    <td className="py-3 text-right text-rose-400">{BREAST_IMPLANT_2026.statistics.allerganRecall}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">ALCL Cases</td>
                                    <td className="py-3 text-right text-white">{BREAST_IMPLANT_2026.statistics.biaAlclCases}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">MDL Registry</td>
                                    <td className="py-3 text-right text-rose-400">{BREAST_IMPLANT_2026.statistics.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Audit Scalar Matrix */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Target className="w-5 h-5 text-rose-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Audit Matrix</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Layer</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Audit</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-black text-white">Allergan BioCell</td>
                                    <td className="py-3 text-right text-rose-400">+30% Scalar</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Explant Only</td>
                                    <td className="py-3 text-right text-rose-500 font-bold">2.0x Multiplier</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 uppercase">Audit Version</td>
                                    <td className="py-3 text-right text-rose-400">S-Class v2.6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. Technical Guide & Methodology */}
            <section id="logic" className="py-32 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 lg:flex gap-20 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <BarChart3 className="w-3.5 h-3.5 text-rose-500" />
                            S-Class Forensic Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The BII <br />
                            <span className="text-rose-600">Calculus.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Compensation for breast implant illness is driven by **Pathological Verification**. Our engine audits claim values based on BIA-ALCL staging, autoimmune systemic load, and the explant surgery protocols specific to textured implants.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "ALCL Staging Audit", desc: "Analysis of lymphoma cell progression", icon: Thermometer },
                                { title: "Explant Scalar", desc: "Surgical intervention value indexing", icon: Activity },
                                { title: "Recall Specific Audit", desc: "Calculates manufacturer-specific liability layers", icon: ShieldAlert }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-rose-500/10 rounded-xl group-hover:bg-rose-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-rose-500" />
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
                        <div className="absolute -inset-4 bg-rose-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <FileText className="w-64 h-64 rotate-12 text-rose-900" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Claim Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Forensic <br /> Failure Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-rose-600 rounded-[3rem] space-y-4 shadow-2xl shadow-rose-900/20 text-center">
                                <p className="text-xs font-bold text-rose-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 Breast Implant MDL data, FDA adverse event reports on BIA-ALCL, and surgical revision cost benchmarks."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-rose-500/30 underline-offset-8">
                            BII Lawsuit FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is Breast Implant Associated Lymphoma (BIA-ALCL)?",
                                a: "BIA-ALCL is a rare type of non-Hodgkin's lymphoma that develops in the scar tissue (capsule) around breast implants, particularly those with a textured surface like Allergan's Biocell model."
                            },
                            {
                                q: "How much is an average BII settlement in 2026?",
                                a: "Settlement values are heavily influenced by the specific diagnosis. In 2026, cases involving a confirmed BIA-ALCL diagnosis often see settlements ranging from $250,000 to over $500,000. Systemic illness (BII) cases typically range from $100,000 to $200,000."
                            },
                            {
                                q: "Which manufacturers are included in current lawsuits?",
                                a: "The primary focus is on Allergan (recalled textured implants), but claims are also being filed against Mentor and Sientra. MDL 2921 consolidates breast implant products liability cases in federal court."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-rose-500" />
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
                    <div className="p-16 bg-gradient-to-br from-rose-600 to-rose-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-rose-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your <br />
                                BII Claim.
                            </h2>
                            <p className="text-rose-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't let medical device failure go unpunished. Initiate your official S-Class forensic breast implant settlement audit.
                            </p>
                            <Link href="/breast-implant/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16">
                        <RelatedCalculators currentCalc="breast-implant" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
