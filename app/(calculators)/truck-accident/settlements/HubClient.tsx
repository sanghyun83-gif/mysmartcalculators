"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, ArrowRight, DollarSign, TrendingUp, Shield, Activity, Target } from "lucide-react";

export default function TruckSettlementsHub() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/truck-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Policy Limits", id: "#policy" },
                                { n: "Jurisdiction Variance", id: "#jurisdiction" },
                                { n: "Injury Correlation", id: "#correlation" },
                                { n: "Jury Award Data", id: "#data" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2">Live Data Feed</div>
                            <div className="text-xs font-bold text-white uppercase italic tracking-tighter">2026 Actuarial Sync</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                            <BarChart3 className="w-3 h-3" /> Payout Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            Truck Payout <span className="text-blue-500 italic">Benchmarks</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Commercial vehicle settlements are data-driven events. Understanding policy limits, jurisdictional variance,
                            and injury severity correlations is the key to maximizing recovery.
                        </p>
                    </div>

                    {/* Section 1: Policy Limits */}
                    <section id="policy" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">1</div>
                            Policy Limit Realities
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                Unlike personal auto accidents where coverage is often limited to $25,000 or $50,000, commercial trucks are federally mandated to carry significantly higher liability limits. Most interstate semi-trucks operate with at least **$750,000** in coverage, while major carriers often have **primary policies of $5M+**.
                            </p>
                            <p>
                                In 18-wheeler litigation, the goal is often to identify "excess" or "umbrella" layers of coverage. In 2026, many carriers have consolidated their risk, making third-party liability audits critical to finding the true payout ceiling.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Jurisdiction */}
                    <section id="jurisdiction" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-12 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Target className="w-48 h-48 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Jurisdictional Variance Matrix</h2>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            The zip code of your accident can change your case value by hundreds of thousands of dollars. "Judicial Hellholes" (pro-plaintiff jurisdictions) like Philadelphia or Cook County often result in verdicts 35-50% higher than the national average.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                            <div>
                                <div className="text-[10px] font-black text-slate-600 uppercase mb-1">High Payout Tier</div>
                                <div className="text-sm font-black text-rose-400">CA, NY, PA, IL</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-slate-600 uppercase mb-1">Average Payout Tier</div>
                                <div className="text-sm font-black text-blue-400">TX, FL, GA, WA</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-slate-600 uppercase mb-1">Conservative Tier</div>
                                <div className="text-sm font-black text-slate-400">AL, NE, SD, UT</div>
                            </div>
                        </div>
                    </section>

                    {/* Data Stats Grid */}
                    <section id="data" className="space-y-12 py-16 border-t border-white/10 text-center">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-blue-500 decoration-4">2026 Payout Benchmarks</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Based on adjusted national jury award trends</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { t: "Avg. Disc Herniation", v: "$85,000+" },
                                { t: "Avg. Surgery Case", v: "$350,000+" },
                                { t: "Fatal/Catastrophic", v: "$2.5M - $10M" },
                                { t: "Trucking Median", v: "$142,500" }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-2 hover:border-blue-500/30 transition-all">
                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{stat.t}</div>
                                    <div className="text-xl font-black text-white tracking-tighter">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
                        <Link href="/truck-accident/calculator" className="w-full p-8 bg-blue-600 rounded-[3rem] text-center hover:bg-blue-500 transition-all group overflow-hidden relative shadow-2xl shadow-blue-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Settlement Audit <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                            *Data derived from 2026 actuarial analysis of commercial vehicle liability policies and public jury verdict trackers. Individual results vary based on proximate cause and fault barriers.
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
}
