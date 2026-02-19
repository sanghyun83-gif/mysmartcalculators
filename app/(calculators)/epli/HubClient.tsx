"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, Briefcase as IndustryIcon, DollarSign, Calculator, Lock
} from "lucide-react";
import { SITE, CALCULATORS, EMPLOYEE_COUNTS, INDUSTRY_RISKS, EPLI_2026, formatCurrency } from "@/lib/calculators/epli";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-sky-500/30">
            {/* 1. S-Class Hero: Cinema-Sky Royale */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-black text-sky-400 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            EMPLOYMENT LIABILITY PROTOCOL 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            EPLI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-700">Audit Matrix.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional-grade employment liability forecasting. Solve for premiums, claim exposure, and EEOC litigation risk.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/epli/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-sky-50 transition-all shadow-2xl overflow-hidden shadow-sky-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Calculate Liability Premium <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">EEOC SYNC</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Litigation Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Base Premiums */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-sky-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Employee Brackets</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Cohort Size</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Base Rate</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {EMPLOYEE_COUNTS.slice(0, 3).map((emp, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3">{emp.name}</td>
                                        <td className="py-3 text-right text-sky-400">{formatCurrency(emp.baseRate)}</td>
                                    </tr>
                                ))}
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Large (100+)</td>
                                    <td className="py-3 text-right">Custom Quote</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Industry Risk */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <IndustryIcon className="w-5 h-5 text-sky-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Risk Multipliers</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Sector</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Multiplier</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {INDUSTRY_RISKS.map((risk, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3">{risk.name}</td>
                                        <td className="py-3 text-right">{risk.multiplier}x</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Loss Statistics */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-sky-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Claim Exposure</h3>
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
                                    <td className="py-3">Average Settlement</td>
                                    <td className="py-3 text-right text-sky-400">{formatCurrency(EPLI_2026.statistics.avgSettlement)}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Median Award</td>
                                    <td className="py-3 text-right">{formatCurrency(EPLI_2026.statistics.medianAward)}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">High-End Verdict</td>
                                    <td className="py-3 text-right text-sky-400">{formatCurrency(EPLI_2026.statistics.highEndVerdict)}</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-sky-500" />
                            S-Class Actuarial Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Actuarial <br />
                            <span className="text-sky-500">Risk Protocol.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Employment Practices Liability involves **Extreme Variance** in claim outcomes. Our engine audits risk through institutional actuarial logic, applying NAIC benchmarks to 2026 EEOC litigation data.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Exposure Quantification", desc: "Cohort-based claim probability audit", icon: Users },
                                { title: "Actuarial Weighting", desc: "Industry-specific risk multipliers", icon: Target },
                                { title: "Loss Control Sync", desc: "HR policy and training discounts", icon: Lock }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-sky-500/10 rounded-xl group-hover:bg-sky-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-sky-500" />
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
                        <div className="absolute -inset-4 bg-sky-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Shield className="w-64 h-64 rotate-12" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Market Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Actuarial Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-sky-600 rounded-[3rem] space-y-4 shadow-2xl shadow-sky-900/20 text-center">
                                <p className="text-xs font-bold text-sky-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 NAIC market reports, EEOC litigation stats, and BLS employment benchmarks."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-sky-500/30 underline-offset-8">
                            EPLI Insurance FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is EPLI insurance?",
                                a: "EPLI protects employers from claims alleging wrongful termination, discrimination, harassment, and other employment-related issues."
                            },
                            {
                                q: "Who needs EPLI coverage?",
                                a: "Any employer with employees faces significant liability. Small businesses are increasingly targeted for wrongful termination and harassment lawsuits where defense costs alone can exceed $50,000."
                            },
                            {
                                q: "How are EPLI premiums calculated in 2026?",
                                a: "Premiums are based on employee headcount, industry risk classification (NAIC), and the presence of documented HR policies and training programs."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-sky-500" />
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
                    <div className="p-16 bg-gradient-to-br from-sky-600 to-sky-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-sky-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your Employment <br />
                                Liability Premium.
                            </h2>
                            <p className="text-sky-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't leave your balance sheet exposed to litigation. Initiate your official S-Class actuarial premium audit.
                            </p>
                            <Link href="/epli/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-sky-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <RelatedCalculators currentCalc="epli" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
