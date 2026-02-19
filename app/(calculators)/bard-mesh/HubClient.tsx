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
import { SITE, CALCULATORS, INJURY_TYPES, BARD_2026, formatCurrency } from "@/lib/calculators/bard-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const injuries = useMemo(() => INJURY_TYPES.slice(0, 4), []);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-red-500/30">
            {/* 1. S-Class Hero: Cinema-Red Surgical Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            SURGICAL AUDIT 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Bard Hernia <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-800">Mesh Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional mesh litigation forecasting. Audit settlement values for Ventralex, Composix Kugel, and 3DMax revision claims.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/bard-mesh/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all shadow-2xl overflow-hidden shadow-red-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Calculate Settlement <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="p-2 bg-red-500/10 rounded-lg">
                                    <Scale className="w-5 h-5 text-red-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">MDL 2846 SYNC</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Settlement Active</p>
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
                            <ShieldAlert className="w-5 h-5 text-red-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Injury Profile</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Severity</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Settlement</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {injuries.map((inj, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 font-black text-white uppercase tracking-tighter">{inj.name.split(' ')[0]}</td>
                                        <td className="py-3 text-right text-red-400 uppercase tracking-tighter">{formatCurrency(inj.avgSettlement)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Clinical Status */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-red-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Litigation Stats</h3>
                        </div>
                        <table className="text-sm font-bold text-white uppercase tracking-tighter">
                        </table>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Metric</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Value</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Active MDL Claims</td>
                                    <td className="py-3 text-right text-red-400">{BARD_2026.statistics.claims}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Manufacturer</td>
                                    <td className="py-3 text-right text-white">C.R. Bard / Davol</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">MDL Status</td>
                                    <td className="py-3 text-right text-red-400">{BARD_2026.statistics.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Audit Matrix */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Target className="w-5 h-5 text-red-500" />
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
                                    <td className="py-3 font-black text-white">Revision Burden</td>
                                    <td className="py-3 text-right text-red-400">+35% Value</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Recoil Ring Failure</td>
                                    <td className="py-3 text-right text-red-500 font-bold">High Severity</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 uppercase">Audit Version</td>
                                    <td className="py-3 text-right text-red-400">S-Class v2.6</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-red-500" />
                            S-Class Forensic Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Mesh <br />
                            <span className="text-red-600">Calculus.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Compensation for Bard mesh injuries is driven by **Polypropylene Degradation Metrics**. Our engine audits claim values based on revision surgery counts, organ perforation severity, and the memory recoil ring failure protocols.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Material Failure", desc: "Analysis of mesh shrinkage and contracture", icon: Thermometer },
                                { title: "Revision Scalar", desc: "Surgical intervention value indexing", icon: ShieldAlert },
                                { title: "Product Audit", desc: "Calculation of specific device risk layers", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-red-500" />
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
                        <div className="absolute -inset-4 bg-red-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <FileText className="w-64 h-64 rotate-12 text-red-900" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Claim Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Surgical <br /> Failure Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-red-600 rounded-[3rem] space-y-4 shadow-2xl shadow-red-900/20 text-center">
                                <p className="text-xs font-bold text-red-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 MDL 2846 settlement structures, Bellwether trial verdicts, and FDA adverse event reports."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-red-500/30 underline-offset-8">
                            Bard Mesh FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is the primary allegation in Bard mesh lawsuits?",
                                a: "Lawsuits allege that Bard hernia mesh products are defectively designed, causing the mesh to shrink, migrate, or break. Specifically, the Composix Kugel mesh featured a memory recoil ring that could break and cause internal organ damage."
                            },
                            {
                                q: "How much is the average settlement for Bard mesh?",
                                a: "While every case is unique, 2026 settlement benchmarks show that claims requiring revision surgery typically range from $150,000 to over $300,000. Cases without surgery but with documented chronic complications range from $50,000 to $125,000."
                            },
                            {
                                q: "Is there an active MDL for Bard mesh cases?",
                                a: "Yes, Bard hernia mesh cases are consolidated into MDL 2846 in the Southern District of Ohio. This MDL oversees thousands of claims against C.R. Bard and Davol regarding various polypropylene mesh products."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-red-500" />
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
                    <div className="p-16 bg-gradient-to-br from-red-600 to-red-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-red-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your <br />
                                Mesh Claim.
                            </h2>
                            <p className="text-red-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't let medical device failure go unpaid. Initiate your official S-Class forensic Bard mesh settlement audit.
                            </p>
                            <Link href="/bard-mesh/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {CALCULATORS.map((calc, i) => (
                                <Link key={i} href={`/${calc.id}`} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-red-500/10 rounded-lg"><Activity className="w-6 h-6 text-red-400" /></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{calc.name}</h3>
                                            <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <RelatedCalculators currentCalc="bard-mesh" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
