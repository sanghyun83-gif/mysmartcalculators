"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, ArrowRight, DollarSign, TrendingUp, Shield, Activity, Target, Landmark, LineChart, PieChart, Gavel } from "lucide-react";

export default function CarAccidentSettlementsHub() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/car-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Settlement Multipliers", id: "#multipliers" },
                                { n: "Payout Matrix", id: "#matrix" },
                                { n: "Venue Bias", id: "#venue" },
                                { n: "Case Benchmarks", id: "#benchmarks" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-2">Market Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic tracking-tighter">Settlement Sync Active</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-widest">
                            <TrendingUp className="w-3 h-3" /> Actuarial Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            $45.2k <span className="text-red-500 italic">Benchmark</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            A technical breakdown of 2026 average car accident settlements, insurance multipliers, and jury verdict volatility.
                        </p>
                    </div>

                    {/* Section 1: Multipliers */}
                    <section id="multipliers" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-sm">1</div>
                            The Settlement Multiplier Logic
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                Most insurance adjusters utilize software (like Colossus) to determine settlement value. These algorithms assign "Point Values" to specific ICD-10 medical codes. Our auditor mirrors this by applying a **Tiered Multiplier** to your medical specials.
                            </p>
                            <p>
                                Typically, soft tissue injuries command a 1.5x - 2.0x multiplier, while surgical events or bone fractures push the non-economic damage multiplier to 3.0x - 5.0x. Understanding these "Anchors" is the difference between a low-ball offer and a policy-limit recovery.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Payout Matrix */}
                    <section id="matrix" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-12 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <DollarSign className="w-48 h-48 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic text-center">2026 Payout Distribution Matrix</h2>

                        <div className="space-y-6 max-w-2xl mx-auto">
                            {[
                                { t: "Tier 0 (Soft Tissue)", v: "$3,500 - $18,000", d: "Whiplash, minor sprains, no permanent loss of function." },
                                { t: "Tier 1 (Bone/Fracture)", v: "$35,000 - $85,000", d: "Documented fractures requiring immobilization or minor invasive work." },
                                { t: "Tier 2 (Surgical)", v: "$120,000 - $350,000", d: "Orthopedic surgeries or intensive internal repair with rehab." }
                            ].map((row, i) => (
                                <div key={i} className="group border-b border-white/5 pb-6">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-lg font-black text-white">{row.t}</span>
                                        <span className="text-xl font-black text-red-500">{row.v}</span>
                                    </div>
                                    <p className="text-xs font-medium text-slate-500 italic">{row.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Venue Bias Section */}
                    <section id="venue" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-red-600 decoration-4">The Venue Weighting</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Geographic Settlement Deviations</p>
                        </div>
                        <div className="prose prose-invert prose-slate max-w-2xl mx-auto text-slate-400 text-lg font-medium leading-relaxed text-center">
                            <p>
                                Settlements are highly dependent on **Venue Bias**. A jury in Bronx County, NY, statistically awards 40% higher non-economic damages than a jury in a rural Texas county for the exact same injury tier.
                            </p>
                        </div>
                    </section>

                    {/* Data Stats Grid */}
                    <section id="benchmarks" className="space-y-12 py-16 border-t border-white/10 text-center">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-red-600 decoration-4">MDL Benchmarks</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Standard Settlement Payout Tiers</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { t: "Avg. Moderate", v: "$45,200" },
                                { t: "Severe (Tier 2)", v: "$125k+" },
                                { t: "Nuclear Award", v: "$5M+" }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-1 hover:border-red-500/30 transition-all">
                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{stat.t}</div>
                                    <div className="text-xl font-black text-white tracking-tighter">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
                        <Link href="/car-accident/calculator" className="w-full p-8 bg-red-600 rounded-[3rem] text-center hover:bg-red-500 transition-all group overflow-hidden relative shadow-2xl shadow-red-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Audit My Compensation Potential <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                            *Settlement benchmarks derived from 2026 actuarial data across all 50 states. Individual results vary based on policy limits, venue bias, and documentation of economic resilience.
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
}
