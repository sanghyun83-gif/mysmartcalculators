"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Activity, Shield, AlertTriangle, ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, Pill, Stethoscope, Gavel, DollarSign, TrendingUp, Search, Star
} from "lucide-react";
import { OZEMPIC_CONSTANTS, formatCurrency } from "@/lib/calculators/ozempic";

export default function HubClient() {
    const stats = OZEMPIC_CONSTANTS.stats;

    return (
        <>
            {/* Premium Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,63,94,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-black text-rose-400 uppercase tracking-widest mb-8 animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            2026 Pharmaceutical Liability Audit
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                            Ozempic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-orange-600 italic">Settlement Auditor.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
                            Professional-grade valuation for <span className="text-white">GLP-1 Biochemical Injuries</span>. Analyze settlement trajectories using MDL 3094 court records and forensic multipliers.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/ozempic/calculator" className="bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                                Start Private Audit <ChevronRight className="w-5 h-5" />
                            </Link>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> MDL 3094 Data Sync
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 2026 Actuarial Logic
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Anchor Navigator (Sticky Sub-Nav) */}
            <div className="sticky top-[70px] z-[110] bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-12 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
                    <a href="#stats" className="hover:text-rose-500 transition-colors cursor-pointer">MDL Benchmarks</a>
                    <a href="#logic" className="hover:text-rose-500 transition-colors cursor-pointer">Liability Logic</a>
                    <a href="#tiers" className="hover:text-rose-500 transition-colors cursor-pointer">MDL Tiers</a>
                    <a href="#intelligence" className="hover:text-rose-500 transition-colors cursor-pointer">Case Intelligence</a>
                </div>
            </div>

            {/* 2. Benchmark Matrix (Stats Wall) */}
            <section id="stats" className="py-12 bg-black/40 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "MDL Active Cases", v: stats.activeCases + "+", detail: "MDL 3094 Docket" },
                            { label: "FDA FAERS Volume", v: "15,400+", detail: "GLP-1 Adverse Events" },
                            { label: "Presiding Judge", v: "Marston, K.", detail: "Eastern Dist PA" },
                            { label: "NAION Delta", v: "+700%", detail: "Vision Loss Risk" }
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default border-l border-rose-500/20 pl-6 space-y-1 hover:border-rose-500 transition-colors">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-3xl font-black text-white tracking-tight">{stat.v}</p>
                                <p className="text-[10px] font-bold text-rose-500/60 uppercase">{stat.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Logic & Methodology (id='logic') */}
            <section id="logic" className="py-32 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">Biochemical <br />Liability Meta.</h2>
                            <div className="h-1.5 w-24 bg-rose-600 rounded-full" />
                        </div>

                        <div className="prose prose-invert prose-slate text-lg font-medium leading-[1.8] text-slate-400 space-y-8">
                            <p>
                                Semaglutide (Ozempic/Wegovy) operates as a GLP-1 receptor agonist, primarily designed to augment insulin secretion. However, for a high-risk cohort, this pharmacological "deceleration" triggers persistent **Gastric Paralysis**.
                            </p>
                            <p>
                                In 2026, the liability pivot shifted from the side effect itself to the **Failure to Warn** concerning permanent autonomic dysfunction. Documentation of scintigraphy (GES) latency is now the absolute anchor for Tier 1 compensation.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { icon: <Pill className="w-6 h-6" />, title: "Dose Accumulation", desc: "The weighted impact of multi-year exposure on gastric nerve pathways." },
                                { icon: <Gavel className="w-6 h-6" />, title: "Pre-Label Doctrine", desc: "Cases originating before the Sept 2023 FDA label update carry punitive weight." },
                                { icon: <Stethoscope className="w-6 h-6" />, title: "Diagnostic Anchors", desc: "GES, Laparotomy, and NAION clinical markers as primary valuation triggers." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                                    <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 font-bold">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sticky top-12 p-12 bg-slate-900 border border-rose-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-all">
                            <Shield className="w-64 h-64 text-rose-600" />
                        </div>
                        <div className="relative z-10 space-y-10">
                            <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">Legal Representation <span className="text-rose-500">Gap.</span></h3>
                            <p className="text-slate-400 font-bold italic text-sm border-l-2 border-rose-500 pl-6 leading-loose">
                                "MDL 3094 data indicates that represented claimants secure 3.5x higher points-based awards than those filing pro-se claims."
                            </p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                                        <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Global <br />Pro-Se Avg</div>
                                        <div className="text-2xl font-black text-slate-500">$64,000</div>
                                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-1/4 bg-slate-600" />
                                        </div>
                                    </div>
                                    <div className="p-6 bg-rose-500/5 rounded-3xl border border-rose-500/20 space-y-4">
                                        <div className="text-[10px] font-black uppercase text-rose-500 tracking-widest">Attorney-Led <br />Audit Net</div>
                                        <div className="text-2xl font-black text-white">$224,000</div>
                                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-gradient-to-r from-rose-600 to-rose-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-[10px] text-slate-500 font-bold leading-relaxed">
                                    Notice: Attorney-led settlements include future medical lien protection and points-tier optimization for NAION vision loss and Ileus surgery.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MDL 3094 Discovery Tiers (id='tiers') */}
            <section id="tiers" className="py-32 bg-slate-900/20 border-y border-white/5 text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="space-y-4">
                        <div className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em]">Settlement Matrix v2.6</div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase italic">MDL Discovery Tiers.</h2>
                        <p className="text-slate-400 font-bold text-lg max-w-2xl mx-auto leading-relaxed italic">
                            The Eastern District of Pennsylvania utilizes a point-weighted injury hierarchy for global resolution.
                        </p>
                    </div>

                    <div className="grid gap-8 text-left">
                        {[
                            { t: "Tier 1: Catastrophic (NAION/Pacemaker)", d: "Permanent vision loss (NAION) or gastric paralysis requiring electrical stimulation/G-Tube. projected in the $500k-$1.2M range.", icon: <Star className="w-5 h-5 text-rose-500" /> },
                            { t: "Tier 2: Severe (Surgery/Obstruction)", d: "Bowel obstructions (Ileus) requiring surgical intervention (Laparotomy). Projected $250k-$550k.", icon: <Shield className="w-5 h-5 text-rose-500" /> },
                            { t: "Tier 3: Chronic (Gastroparesis)", d: "Documented 4-hour gastric retention confirmed by scintigraphy without surgical correction. $100k-$250k.", icon: <Activity className="w-5 h-5 text-rose-500" /> }
                        ].map((tier, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-rose-500/30 transition-all group">
                                <div className="flex items-center gap-4 mb-4">
                                    {tier.icon}
                                    <h4 className="text-xl font-black text-white italic group-hover:text-rose-500 transition-colors uppercase">{tier.t}</h4>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-loose pl-9">{tier.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Case Intelligence / Trinity Analysis (id='intelligence') */}
            <section id="intelligence" className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                    <div className="text-center space-y-4">
                        <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic">Trinity Audit.</h2>
                        <p className="text-rose-500 font-black text-xs uppercase tracking-[0.4em]">Forensic Biochemical Simulation</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                id: "01",
                                title: "Biochemical Path",
                                desc: "GLP-1 receptor agonist accumulation study. Analyzing the biochemical timeline from first injection to autonomic nerve failure.",
                                entities: ["Autonomic Dysfunction", "Receptor Saturation", "Delayed Emptying"]
                            },
                            {
                                id: "02",
                                title: "MDL Discovery",
                                desc: "Analysis of internal Novo Nordisk safety alerts vs Public FDA labels. Pinpointing the 'Knowledge Window' before 2023.",
                                entities: ["Seal Documents", "Failure to Warn", "Label Chronology"]
                            },
                            {
                                id: "03",
                                title: "Financial Indemnity",
                                desc: "Calculation of medical liens, future surgical costs, and earning capacity reduction due to chronic GI impairment.",
                                entities: ["Subrogation Proofing", "P&S Multipliers", "Economic Offset"]
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-rose-500/5 transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 italic scale-150 group-hover:text-rose-500/10 transition-colors">{pillar.id}</div>
                                <h4 className="text-2xl font-black text-white mb-6 italic tracking-tighter uppercase leading-none">{pillar.title}</h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 relative z-10">{pillar.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.entities.map((e, j) => (
                                        <span key={j} className="text-[8px] font-black uppercase px-2 py-1 bg-white/5 border border-white/10 text-slate-500 rounded-full tracking-widest">{e}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intelligence Library (FAQ Section) */}
            <section id="faq" className="py-32 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-1 w-24 bg-rose-600 rounded-full" />
                        <h2 className="text-4xl font-black text-white tracking-widest uppercase italic leading-none">Intelligence.</h2>
                    </div>

                    <div className="grid gap-12 pt-8 border-t border-white/5">
                        {[
                            {
                                q: "How is 'Gastroparesis' valued in the MDL points system?",
                                a: "MDL 3094 weights claims based on 4-hour Gastric Emptying Study (GES) results. Retention rates exceeding 20% at 4 hours trigger Tier 2 multipliers, while surgical requirements for pacing move the claim to Tier 1."
                            },
                            {
                                q: "What is NAION and why is it considered a 'Nuclear' claim?",
                                a: "NAION (Non-Arteritic Anterior Ischemic Optic Neuropathy) causes sudden, permanent vision loss. Because of the catastrophic nature of blindness, these claims bypass standard GI tiers and are valued up to $1.5M in settlement projections."
                            },
                            {
                                q: "Can I file if I only used Ozempic for off-label weight loss?",
                                a: "Yes. The legal theory focuses on the drug's safety profile and labeling failures, not whether it was used for Type 2 Diabetes vs. obesity. Both Ozempic and Wegovy are part of the consolidated GLP-1 litigation."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="group cursor-help space-y-4">
                                <h4 className="text-xl font-black text-rose-500 tracking-tight flex gap-4 uppercase">
                                    <span className="opacity-20 text-white font-serif italic text-2xl">?</span> {faq.q}
                                </h4>
                                <div className="pl-8 border-l-2 border-rose-600/20">
                                    <p className="text-slate-400 text-sm font-medium leading-loose group-hover:text-slate-300 transition-colors uppercase tracking-tight">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Audit */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-20 bg-gradient-to-br from-rose-600 to-rose-700 rounded-[5rem] text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_rgba(244,63,94,0.4)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">Launch Private <br />MDL Audit.</h2>
                            <p className="text-rose-50 text-xl font-bold max-w-2xl mx-auto leading-relaxed italic opacity-80">
                                Access the 2026 S-Class Actuarial Matrix. Calculate your Ozempic settlement point-score without personal ID.
                            </p>
                            <Link href="/ozempic/calculator" className="inline-flex items-center gap-4 bg-white text-black px-16 py-8 rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl">
                                Start Audit Engine <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
