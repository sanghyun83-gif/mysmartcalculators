"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill, Droplets, Flame,
    Bike
} from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS, ATV_TYPES } from "@/lib/calculators/atv-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
            {/* 1. S-Class Hero: Cinema-Blue Coverage Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            COVERAGE PROTOCOL 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            ATV Coverage <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800">Audit Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional off-road risk forecasting. Solve for premium benchmarks, UTV era adjustments, and comprehensive liability risk.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/atv-insurance/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl overflow-hidden shadow-blue-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Calculate Premium <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">ACTUARIAL DATA</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Premium Sync</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Market Profile */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-blue-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Market Profile</h3>
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
                                        <td className="py-3 font-black text-white uppercase tracking-tighter">{stat.label}</td>
                                        <td className="py-3 text-right text-blue-400 uppercase tracking-tighter">{stat.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Vehicle Arbitrage */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Bike className="w-5 h-5 text-blue-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Vehicle Classes</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Class</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Risk Factor</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {ATV_TYPES.map((type, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 italic">{type.name}</td>
                                        <td className="py-3 text-right text-blue-400">{type.factor.toFixed(1)}x</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Coverage Matrix */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-blue-500" />
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
                                    <td className="py-3 font-black text-white">Guest Liability</td>
                                    <td className="py-3 text-right text-blue-400">Included</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Collision Deck</td>
                                    <td className="py-3 text-right text-blue-500 font-bold">Standard</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 uppercase">Audit Version</td>
                                    <td className="py-3 text-right text-blue-400">S-Class v2.6</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
                            S-Class Actuarial Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Off-Road <br />
                            <span className="text-blue-600">Calculus.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            ATV premiums are governed by **Recreational Risk Protocols**. Our engine audits cost structures based on displacement brackets, UTV rollover protection factors, and current 2026 industry benchmarks.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Unit Valuation", desc: "Forced audit of market replacement value", icon: DollarSign },
                                { title: "Exposure Diagnostics", desc: "Public trail vs. private farm use sync", icon: MapPin },
                                { title: "Actuarial Calibration", desc: "2026 national underwriting roadmap", icon: Lock }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-blue-500" />
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
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Activity className="w-64 h-64 rotate-12 text-blue-900" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Premium Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Underwriting.
                                </h3>
                            </div>
                            <div className="p-8 bg-blue-600 rounded-[3rem] space-y-4 shadow-2xl shadow-blue-900/20 text-center">
                                <p className="text-xs font-bold text-blue-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 national carrier filings, III.org data benchmarks, and recreational vehicle loss ratios."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-500/30 underline-offset-8">
                            ATV Insurance FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "How much does ATV insurance cost in 2026?",
                                a: "Standard policies average $100-$400 annually. Utility quads are typically the most affordable to insure ($150-$250), while high-performance sport ATVs and luxury side-by-sides (UTVs) can exceed $500 per year."
                            },
                            {
                                q: "Is insurance required for ATVs on public trails?",
                                a: "Requirement varies by state. Many popular trail systems and federal lands require at least liability coverage. Even if not legally mandated, liability protection is critical as most homeowner policies exclude off-road vehicle accidents."
                            },
                            {
                                q: "What does comprehensive ATV coverage protect?",
                                a: "Comprehensive coverage protects against non-collision events, including theft (highly common for ATVs), damage from fire, vandalism, storm damage, and transport accidents while on a trailer."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-blue-500" />
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
                    <div className="p-16 bg-gradient-to-br from-blue-600 to-blue-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-blue-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your Off-Road <br />
                                Protection Wall.
                            </h2>
                            <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't ride exposed. Initiate your official S-Class forensic ATV insurance premium audit.
                            </p>
                            <Link href="/atv-insurance/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {RELATED_CALCULATORS.map((calc, i) => (
                                <Link key={i} href={calc.url} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg"><Activity className="w-6 h-6 text-blue-400" /></div>
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
                        <RelatedCalculators currentCalc="atv-insurance" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
