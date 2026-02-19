"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
    Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
    Users, DollarSign, Calculator, Lock, TrendingUp as StockIcon, Briefcase as JobIcon,
    Wallet, Landmark
} from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS, DISCOUNT_TYPES } from "@/lib/calculators/espp";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-teal-500/30">
            {/* 1. S-Class Hero: Cinema-Teal Royale */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            STOCK EQUITY PROTOCOL 2026: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            ESPP <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-teal-400 to-teal-700">Audit Matrix.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Forensic equity accumulation forecasting. Solve for lookback provisions, discount arbitrage, and Section 423 tax liability.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/espp/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-50 transition-all shadow-2xl overflow-hidden shadow-teal-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Analyze Stock Payout <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">IRS PUB 525</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Equity Sync</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Table I: Discount Architecture */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-teal-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Discount Models</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Plan Tier</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Discount</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {DISCOUNT_TYPES.slice(0, 3).map((type, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3">{type.name}</td>
                                        <td className="py-3 text-right text-teal-400">{(type.rate * 100).toFixed(0)}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table II: Contribution Limits */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Landmark className="w-5 h-5 text-teal-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Statutory Limits</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Parameter</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Value</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {STATISTICS.map((stat, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3">{stat.label}</td>
                                        <td className="py-3 text-right text-teal-400">{stat.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table III: Audit Versions */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-teal-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Compliance Audit</h3>
                        </div>
                        <table className="w-full text-left text-[11px] font-medium border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter">Registry</th>
                                    <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Section 423 Sync</td>
                                    <td className="py-3 text-right text-teal-400">Active</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Qualifying Disposition</td>
                                    <td className="py-3 text-right">Verified</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3">Audit Version</td>
                                    <td className="py-3 text-right text-teal-400">S-Class v2.6</td>
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
                            <BarChart3 className="w-3.5 h-3.5 text-teal-500" />
                            S-Class Equity Audit
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The ESPP <br />
                            <span className="text-teal-500">Forensic Matrix.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            ESPP gains are often misunderstood. Our engine audits equity accumulation via **Section 423 Statutory Frameworks**, automating the calculation of lookback arbitrage and tax-optimized dispositions.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Discount Arbitrage", desc: "Lookback vs Standard provision audit", icon: TrendingUp },
                                { title: "Grant-Date Valuation", desc: "IRS $25k statutory limit monitoring", icon: Landmark },
                                { title: "Disposition Strategy", desc: "Qualifying vs Disqualifying tax logic", icon: Calculator }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-teal-500" />
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
                        <div className="absolute -inset-4 bg-teal-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Wallet className="w-64 h-64 rotate-12" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-teal-500 uppercase tracking-widest">Market Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    Institutional <br /> Equity Logic.
                                </h3>
                            </div>
                            <div className="p-8 bg-teal-600 rounded-[3rem] space-y-4 shadow-2xl shadow-teal-900/20 text-center">
                                <p className="text-xs font-bold text-teal-50 uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 2026 IRS Publication 525, Section 423 guidelines, and SEC Regulation S-K disclosure mandates."
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
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-teal-500/30 underline-offset-8">
                            ESPP Strategy FAQ.
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "What is the ESPP contribution limit for 2026?",
                                a: "The IRS limits ESPP purchases to $25,000 worth of stock per year (based on grant date price). Employers also typically limit payroll deductions to 10-15% of gross income."
                            },
                            {
                                q: "How is ESPP income taxed?",
                                a: "Taxes are deferred until sell-date. In a 'qualifying disposition' (held 2+ years from grant/1+ year from purchase), the discount is taxed as ordinary income and excess gains as long-term capital gains."
                            },
                            {
                                q: "What is a lookback provision in ESPP?",
                                a: "A lookback provision allows the 15% discount to be applied to the lower of the stock price at the start or end of the offering period, locking in gains even if the stock price rises significantly."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-teal-500" />
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
                    <div className="p-16 bg-gradient-to-br from-teal-600 to-teal-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-teal-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Audit Your Stock <br />
                                Equity Payout.
                            </h2>
                            <p className="text-teal-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't leave your equity gains to chance. Initiate your institutional-grade forensic ESPP audit.
                            </p>
                            <Link href="/espp/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-teal-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32">
                        <RelatedCalculators currentCalc="espp" count={6} />
                    </div>
                </div>
            </section>
        </div>
    );
}
