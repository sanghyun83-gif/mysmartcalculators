"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill, Droplets, Flame,
    Palette
} from "lucide-react";
import { SITE, STATISTICS, ART_TYPES, COVERAGE_OPTIONS, RELATED_CALCULATORS } from "@/lib/calculators/art-insurance";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30">
            {/* 1. S-Class Hero: Cinema-Indigo Collection Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            VALUATION PROTOCOL 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Fine Art <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-800">Audit Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional fine art liability forecasting. Solve for agreed-value premiums, collection scarcity adjustments, and provenance risk.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/art-insurance/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-2xl overflow-hidden shadow-indigo-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Analyze Premium Value <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">ART DATA</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Actuarial Sync</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Liability Profile */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-indigo-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Market Benchmarks</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Metric</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Verification</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {STATISTICS.map((stat, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 font-black text-white">{stat.label}</td>
                                        <td className="py-3 text-right text-indigo-400 uppercase tracking-tighter">{stat.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Art Type Arbitrage */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Palette className="w-5 h-5 text-indigo-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Asset Categories</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Category</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Risk Factor</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {ART_TYPES.map((type, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 italic">{type.name}</td>
                                        <td className="py-3 text-right text-indigo-400">{type.factor}x base</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Calculation Matrix */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Scale className="w-5 h-5 text-indigo-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Audit Matrix</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Factor</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-black text-white">Agreed Value</td>
                                    <td className="py-3 text-right text-indigo-400">Fixed Payout</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Climate Control</td>
                                    <td className="py-3 text-right text-indigo-500 font-bold">25% Discount</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 uppercase">Audit Version</td>
                                    <td className="py-3 text-right text-indigo-400">S-Class v2.6</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
                            S-Class Forensic Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Curatorial <br />
                            <span className="text-indigo-600">Calculus.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Fine art coverage is governed by **Provenance Fidelity Protocols**. Our engine audits premium potentials based on art type fragility, storage security ratings, and current 2026 collection valuation benchmarks.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Asset Forensics", desc: "Audit of medium-specific fragility logs", icon: Palette },
                                { title: "Actuarial Calibration", desc: "III Fine Art Roadmap alignment", icon: Stethoscope },
                                { title: "Valuation Logic", desc: "Agreed-value appraisal sync", icon: Lock }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-indigo-500" />
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
                        <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Activity className="w-64 h-64 rotate-12 text-indigo-900" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Actuarial Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Payout Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-indigo-600 rounded-[3rem] space-y-4 shadow-2xl shadow-indigo-900/20 text-center">
                                <p className="text-xs font-bold text-indigo-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 Insurance Information Institute data, Sotheby's market trends, and fine art actuarial benchmarks."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-indigo-500/30 underline-offset-8">
                            Art Insurance FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "How much does it cost to insure art in 2026?",
                                a: "In 2026, art insurance typically costs 0.5% to 1.5% of the total appraised value annually. Higher risk items like sculptures or high-transit collections may sit at the higher end of this range."
                            },
                            {
                                q: "Is fine art covered under standard homeowners insurance?",
                                a: "Most homeowners policies have strict limits ($1,000-$5,000) for collectibles and do not cover 'mysterious disappearance' or accidental breakage. A specialized art floater is required for comprehensive protection."
                            },
                            {
                                q: "How often should I update my art appraisals?",
                                a: "For insurance purposes, art appraisals should be updated every 3 to 5 years (or sooner in volatile markets) twice as often) to ensure your 'Agreed Value' coverage reflects current market conditions."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-indigo-500" />
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
                    <div className="p-16 bg-gradient-to-br from-indigo-600 to-indigo-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-indigo-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your Collection <br />
                                Coverage Potential.
                            </h2>
                            <p className="text-indigo-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't leave your masterpiece unprotected. Initiate your official S-Class forensic fine art insurance audit.
                            </p>
                            <Link href="/art-insurance/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="grid md:grid-cols-3 gap-6">
                            {RELATED_CALCULATORS.map((calc, i) => (
                                <Link key={i} href={calc.url} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-lg"><Palette className="w-6 h-6 text-indigo-400" /></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{calc.name}</h3>
                                            <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
