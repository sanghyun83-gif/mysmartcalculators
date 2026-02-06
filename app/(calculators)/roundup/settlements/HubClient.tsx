"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, ArrowRight, DollarSign, TrendingUp, Shield, Activity, Target, Gavel } from "lucide-react";
import { ROUNDUP_CONSTANTS } from "@/lib/calculators/roundup";

export default function RoundupSettlementsHub() {
    const stats = ROUNDUP_CONSTANTS.stats;

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/roundup" className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Bellwether Trends", id: "#bellwether" },
                                { l: "Payout Matrix", id: "#matrix" },
                                { n: "Jury Award Data", id: "#data" },
                                { n: "Bayer Fund State", id: "#fund" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n || item.l}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2">Fund Status</div>
                            <div className="text-xs font-bold text-white uppercase italic tracking-tighter">$10.9B Active Allocation</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                            <BarChart3 className="w-3 h-3" /> Actuarial Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            $10.9B <span className="text-emerald-500 italic">Global</span> Fund.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Roundup settlement values are dictated by a points-based system coordinated by the Special Master in MDL 2741.
                        </p>
                    </div>

                    {/* Section 1: Bellwether Pattern */}
                    <section id="bellwether" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm">1</div>
                            The Bellwether Pattern Logic
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                Settlement values in the Roundup MDL are non-linear. They are dictated by "Bellwether" trials? initial test cases that set the price of a specific injury type. In recent 2024-2026 trials, jury awards have ranged from defense verdicts to staggering **$2.25 Billion** awards.
                            </p>
                            <p>
                                Bayer's strategy focuses on a global settlement framework resolving 98% of outstanding claims. This fund allocates "Points" based on medical complexity. A patient with Stage IV NHL who underwent stem-cell therapy represents a **Tier 1** claim, which typically commands 4x the value of a non-surgical Tier 3 claim.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Payout Matrix */}
                    <section id="matrix" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-12 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <DollarSign className="w-48 h-48 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic text-center">2026 Payout Matrix Staging</h2>

                        <div className="space-y-6 max-w-2xl mx-auto">
                            {[
                                { t: "Tier 1: High-Grade NHL Surgery", v: "$500,000+", d: "Includes stem cell transplants or aggressive R-CHOP cycles." },
                                { t: "Tier 2: Intermediate Chemotherapy", v: "$250,000 - $500,000", d: "Documented medical causality with standard treatment protocols." },
                                { t: "Tier 3: Low-Grade / Monitoring", v: "$50,000 - $250,000", d: "Chronic Small Cell or low-aggression pathology tiers." }
                            ].map((row, i) => (
                                <div key={i} className="group border-b border-white/5 pb-6">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-lg font-black text-white">{row.t}</span>
                                        <span className="text-xl font-black text-emerald-400">{row.v}</span>
                                    </div>
                                    <p className="text-xs font-medium text-slate-500 italic">{row.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Stats Grid */}
                    <section id="data" className="space-y-12 py-16 border-t border-white/10 text-center">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-emerald-500 decoration-4">Settlement Benchmarks</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Based on adjusted national jury award trends</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { t: "Avg Settlement", v: "$165,000" },
                                { t: "MDL Active Files", v: "MDL 2741" },
                                { t: "Nuclear Peak", v: "$2.25B" },
                                { t: "Bayer Liability", v: "$10.9B" }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-1 hover:border-emerald-500/30 transition-all">
                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{stat.t}</div>
                                    <div className="text-xl font-black text-white tracking-tighter">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
                        <Link href="/roundup/calculator" className="w-full p-8 bg-emerald-600 rounded-[3rem] text-center hover:bg-emerald-500 transition-all group overflow-hidden relative shadow-2xl shadow-emerald-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Start Case Audit <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                            *Data derived from publicly available Bayer settlement disclosures and MDL 2741 Special Master reports. Individual recovery is dependent on point-score allocation and medical lien mitigation.
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
}
