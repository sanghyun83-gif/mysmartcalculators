"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill, Droplets, Flame,
    Car
} from "lucide-react";
import { SITE, STATISTICS, VEHICLE_ERAS, COVERAGE_OPTIONS, RELATED_CALCULATORS } from "@/lib/calculators/antique-car-insurance";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
            {/* 1. S-Class Hero: Cinema-Blue Restoration Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            VALUATION PROTOCOL 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Antique <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800">Audit Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional antique vehicle liability forecasting. Solve for agreed-value premiums, vintage era adjustments, and collectibility risk.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/antique-car-insurance/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl overflow-hidden shadow-blue-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Analyze Premium Value <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">INS DATA</p>
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
                            <Shield className="w-5 h-5 text-blue-500" />
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
                                        <td className="py-3 text-right text-blue-400 uppercase tracking-tighter">{stat.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Era Arbitrage */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Car className="w-5 h-5 text-blue-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Vehicle Eras</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Era</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Risk Score</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {VEHICLE_ERAS.map((era, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 italic">{era.name}</td>
                                        <td className="py-3 text-right text-blue-400">{era.factor}x base</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Calculation Matrix */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Scale className="w-5 h-5 text-blue-500" />
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
                                    <td className="py-3 text-right text-blue-400">Fixed Payout</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Garage Storage</td>
                                    <td className="py-3 text-right text-blue-500 font-bold">40% Discount</td>
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
                            S-Class Forensic Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Valuation <br />
                            <span className="text-blue-600">Calculus.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Antique vehicle coverage is governed by **Actuarial Scarcity Protocols**. Our engine audits premium potentials based on era risk factors, usage limitations, and current 2026 agreed-value settlement benchmarks.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Era Forensics", desc: "Audit of vehicle production scarcity", icon: Car },
                                { title: "Actuarial Calibration", desc: "III Insurance Roadmap alignment", icon: Stethoscope },
                                { title: "Coverage Logic", desc: "Agreed-value payout protocols", icon: Lock }
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
                                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Actuarial Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Payout Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-blue-600 rounded-[3rem] space-y-4 shadow-2xl shadow-blue-900/20 text-center">
                                <p className="text-xs font-bold text-blue-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 Insurance Information Institute data, collector market valuations, and actuarial scarcity benchmarks."
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
                            Antique Insurance FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "How much does it cost to insure an antique car in 2026?",
                                a: "In 2026, antique car insurance costs $200-$600 per year on average. These low rates are possible because collector vehicles are rarely driven and kept in secure storage."
                            },
                            {
                                q: "What is 'Agreed Value' in antique car insurance?",
                                a: "Agreed Value is a fixed amount agreed upon by the owner and insurer. Unlike standard auto insurance which pays 'Actual Cash Value' (minus depreciation), Agreed Value pays the full amount if the vehicle is totaled."
                            },
                            {
                                q: "Can I use my antique car as a daily driver?",
                                a: "No. Antique car policies require the vehicle to be used for exhibitions, club activities, or limited pleasure driving. Most policies include a mileage limit between 1,000 and 2,500 miles per year."
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
                                Audit Your Premium <br />
                                Coverage Potential.
                            </h2>
                            <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't overpay for collector vehicle protection. Initiate your official S-Class forensic antique insurance audit.
                            </p>
                            <Link href="/antique-car-insurance/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="grid md:grid-cols-3 gap-6">
                            {RELATED_CALCULATORS.map((calc, i) => (
                                <Link key={i} href={calc.url} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg"><Car className="w-6 h-6 text-blue-400" /></div>
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
