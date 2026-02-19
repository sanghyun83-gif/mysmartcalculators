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
import { SITE, CALCULATORS, INFECTION_TYPES, BAIR_2026, formatCurrency } from "@/lib/calculators/bair-hugger";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const infections = useMemo(() => INFECTION_TYPES, []);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-orange-500/30">
            {/* 1. S-Class Hero: Cinema-Orange Surgical Hub */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            INFECTION AUDIT 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Bair Hugger <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-800">Infection Node.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Institutional thermal litigation forecasting. Audit settlement values for PJI, revision surgeries, and surgical warming blanket contamination.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/bair-hugger/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-2xl overflow-hidden shadow-orange-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Calculate Settlement <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="p-2 bg-orange-500/10 rounded-lg">
                                    <Thermometer className="w-5 h-5 text-orange-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">MDL SYNC</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">State Court Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Infection Arbitrage */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="w-5 h-5 text-orange-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Injury Profile</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Site</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Settlement</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {infections.map((inf, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 font-black text-white uppercase tracking-tighter">{inf.name.split(' ')[0]}</td>
                                        <td className="py-3 text-right text-orange-400 uppercase tracking-tighter">{formatCurrency(inf.avgSettlement)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Clinical Status */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-orange-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Litigation Stats</h3>
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
                                    <td className="py-3 italic">Active State Cases</td>
                                    <td className="py-3 text-right text-orange-400">{BAIR_2026.statistics.pendingCases}+</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Manufacturer</td>
                                    <td className="py-3 text-right text-white">3M Company</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Infection Rate</td>
                                    <td className="py-3 text-right text-orange-400">PJI Index</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Audit Matrix */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Target className="w-5 h-5 text-orange-500" />
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
                                    <td className="py-3 text-right text-orange-400">+40% Value</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 italic">Amputation Scalar</td>
                                    <td className="py-3 text-right text-orange-500 font-bold">Max Severity</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 uppercase">Audit Version</td>
                                    <td className="py-3 text-right text-orange-400">S-Class v2.6</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-orange-500" />
                            S-Class Forensic Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Infection <br />
                            <span className="text-orange-600">Calculus.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Compensation for Bair Hugger injuries is driven by **Pathogen Proliferation Metrics**. Our engine audits claim values based on hardware revision counts, microbial severity, and the Montreal PJI protocols.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Thermal Dynamics", desc: "Analysis of forced-air bacteria circulation", icon: Thermometer },
                                { title: "PJI Scalar", desc: "Periprosthetic joint infection value indexing", icon: ShieldAlert },
                                { title: "Revision Audit", desc: "Calculation of multiple surgery recovery layers", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-orange-500" />
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
                        <div className="absolute -inset-4 bg-orange-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <FileText className="w-64 h-64 rotate-12 text-orange-900" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Claim Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Surgical <br /> Failure Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-orange-600 rounded-[3rem] space-y-4 shadow-2xl shadow-orange-900/20 text-center">
                                <p className="text-xs font-bold text-orange-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 state court verdicts, medical revision cost structures, and FDA MAUDE device contamination reports."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-orange-500/30 underline-offset-8">
                            Bair Hugger FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is the primary basis of Bair Hugger lawsuits?",
                                a: "Lawsuits allege that the Bair Hugger forced-air warming system disrupts the sterile airflow of operating rooms by drawing air from the floor and blowing bacteria-laden air onto surgical sites, specifically during hip and knee replacement procedures."
                            },
                            {
                                q: "How much is a Bair Hugger infection claim worth?",
                                a: "Settlement values are significantly higher for cases involving 'Periprosthetic Joint Infection' (PJI). Claims requiring one or more revision surgeries typically range from $300,000 to $500,000, while extreme cases involving amputation receive maximum valuation."
                            },
                            {
                                q: "Who can file a claim in 2026?",
                                a: "Patients who developed a deep joint infection following a joint replacement surgery where a Bair Hugger device was used may be eligible. In 2026, the focus has shifted to state court litigations after the federal MDL was dismissed."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-orange-500" />
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
                    <div className="p-16 bg-gradient-to-br from-orange-600 to-orange-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-orange-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your <br />
                                Infection Claim.
                            </h2>
                            <p className="text-orange-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't let surgical negligence go unpaid. Initiate your official S-Class forensic Bair Hugger settlement audit.
                            </p>
                            <Link href="/bair-hugger/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {CALCULATORS.map((calc, i) => (
                                <Link key={i} href={`/${calc.id}`} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-orange-500/10 rounded-lg"><Activity className="w-6 h-6 text-orange-400" /></div>
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
                        <RelatedCalculators currentCalc="bair-hugger" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
