"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill
} from "lucide-react";
import { SITE, CALCULATORS, INJURY_TYPES, ABILIFY_2026, formatCurrency } from "@/lib/calculators/abilify";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-purple-500/30">
            {/* 1. S-Class Hero: Cinema-Purple Amethyst Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            LIABILITY PROTOCOL 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Abilify <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800">Audit Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional Abilify settlement forecasting. Solve for compulsive behavior liability, financial loss recovery, and FDA warning relevance.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/abilify/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-50 transition-all shadow-2xl overflow-hidden shadow-purple-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Analyze Settlement Value <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">FDA DATA</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Statutory Sync</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Liability Benchmarks */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <AlertTriangle className="w-5 h-5 text-purple-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Liability Profile</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Metric</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Verification</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-black text-white">FDA Warning</td>
                                    <td className="py-3 text-right text-purple-400">2016 Active</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 uppercase font-black">Manufacturer</td>
                                    <td className="py-3 text-right text-[9px]">Bristol-Myers Squibb</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Claim Status</td>
                                    <td className="py-3 text-right text-purple-400">Ongoing Settlements</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Behavior Compensation Arbitrage */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Heart className="w-5 h-5 text-purple-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Compensable Injuries</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Injury Class</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Avg Settlement</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {INJURY_TYPES.map((injury, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 italic">{injury.name}</td>
                                        <td className="py-3 text-right text-purple-400">{formatCurrency(injury.avgSettlement)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Calculation Benchmarks */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Scale className="w-5 h-5 text-purple-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Audit Benchmarks</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Factor</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Multiplier</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Gambling Severity</td>
                                    <td className="py-3 text-right text-purple-400">2.5x</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Documentation Proved</td>
                                    <td className="py-3 text-right">1.25x Bonus</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Audit Version</td>
                                    <td className="py-3 text-right text-purple-400 italic">S-Class v2.6</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-purple-500" />
                            S-Class Forensic Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Liability <br />
                            <span className="text-purple-600">Recovery Matrix.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Abilify settlements are governed by **Compulsive Propensity Loops**. Our engine audits recovery potentials based on documented financial destruction, behavior cessation timelines, and current FDA-backed legal protocols.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Loss Forensics", desc: "Audit of pathological financial loss", icon: TrendingDown },
                                { title: "Behavior Cessation", desc: "Post-drug recovery duration audit", icon: Target },
                                { title: "Liability Weighting", desc: "FDA warning relevance calibration", icon: Lock }
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
                                <Stethoscope className="w-64 h-64 rotate-12 text-purple-900" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest">Litigation Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Recovery Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-purple-600 rounded-[3rem] space-y-4 shadow-2xl shadow-purple-900/20 text-center">
                                <p className="text-xs font-bold text-purple-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 FDA Safety Communications, multi-district litigation (MDL) settlement trends, and Section 12 liability protocols."
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
                            Abilify Claim FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is the Abilify lawsuit about?",
                                a: "Abilify lawsuits allege that manufacturers Bristol-Myers Squibb and Otsuka knew the drug caused compulsive behaviors like gambling and shopping but failed to warn patients until required by the FDA in 2016."
                            },
                            {
                                q: "What compulsive behaviors qualify for a claim?",
                                a: "Eligible compulsive behaviors include pathological gambling, compulsive shopping/spending, binge eating, and hypersexual behavior that developed after starting Abilify."
                            },
                            {
                                q: "What is the average Abilify settlement value?",
                                a: "Settlement values for 2026 depend on documented financial losses. Cases with severe losses ($100k+) can receive projected recovery ranges of $200,000 to $300,000+."
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
                                Audit Your Recovery <br />
                                Settlement Potential.
                            </h2>
                            <p className="text-purple-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't let compulsive medical negligence go uncompensated. Initiate your official S-Class forensic Abilify audit.
                            </p>
                            <Link href="/abilify/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <RelatedCalculators currentCalc="abilify" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
