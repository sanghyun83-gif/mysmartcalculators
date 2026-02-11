"use client";

import { Car, ChevronRight, Activity, CheckCircle2, Gavel, Scale, Shield, ArrowRight, AlertTriangle, FileText, Landmark, Users, Search, TrendingUp, Zap, MapPin, DollarSign, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ACCIDENT_CONSTANTS, formatCurrency } from "@/lib/calculators/car-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const [selectedState, setSelectedState] = useState("CA");

    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-red-500/30">
            {/* 1. S-Class Predator Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-8 animate-pulse">
                            <Zap className="w-3.5 h-3.5" />
                            2026 Actuarial Logic Sync
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                            Car Accident <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600 italic">Settlement Auditor.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
                            Professional-grade liability valuation for <span className="text-white">Tort Damages</span>. Analyze settlement trajectories using 50-state case law data and forensic multipliers.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/car-accident/calculator" className="bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                                Start Private Audit <ChevronRight className="w-5 h-5" />
                            </Link>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Personal ID Required
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 2026 Litigation Data
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Anchor Navigator (Sticky Sub-Nav) */}
            <div className="sticky top-[70px] z-[110] bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-12 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
                    <a href="#stats" className="hover:text-red-500 transition-colors cursor-pointer">Litigation Stats</a>
                    <a href="#tiers" className="hover:text-red-500 transition-colors cursor-pointer">Injury Tiers</a>
                    <a href="#intelligence" className="hover:text-red-500 transition-colors cursor-pointer">Case Intelligence</a>
                </div>
            </div>

            {/* 2. Benchmark Matrix (Stats Wall) */}
            <section id="stats" className="py-12 bg-black/40 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "Median Settlement", value: "$42,500", detail: "2026 NSC Data" },
                            { label: "Policy Limit Cap", value: "3.5x Multiplier", detail: "Representation Gap" },
                            { label: "Liability Cutoff", value: "51% Rule", detail: "Modified Comparative" },
                            { label: "DUI Delta", value: "+150%", detail: "Punitive Factor" }
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default border-l border-red-500/20 pl-6 space-y-1 hover:border-red-500 transition-colors">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                                <p className="text-[10px] font-bold text-red-500/60 uppercase">{stat.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Logic & Methodology (The Composite Skeleton - Injury Tiers) */}
            <section id="tiers" className="py-32 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">The Anatomy <br />of Valuation.</h2>
                            <div className="h-1.5 w-24 bg-red-600 rounded-full" />
                        </div>

                        <div className="prose prose-invert prose-slate text-lg font-medium leading-[1.8] text-slate-400 space-y-8">
                            <p>
                                A car accident settlement is not a random number. It is a calculated response to **Tort Liability** and **Economic Indemnity**. In 2026, insurance algorithms prioritize hard-coded special damages as the anchor for all non-economic payouts.
                            </p>
                            <p>
                                Our auditor distinguishes between 'Soft Special' (minimal intervention) and 'Hard Special' (surgical/clinical) damages to accurately mimic insurance adjuster behavior. If you lack medical bill anchors, your pain and suffering estimate is statistically likely to be rejected.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { icon: <Scale className="w-6 h-6" />, title: "Comparative Fault", desc: "How your recovery is reduced by your fault percentage (0% to 100%)." },
                                { icon: <Activity className="w-6 h-6" />, title: "Multiplier Method", desc: "The standard 1.5x - 5.0x logic applied to clinical recovery stages." },
                                { icon: <Landmark className="w-6 h-6" />, title: "Policy Limits", desc: "The cap on available funds based on the at-fault driver's insurance." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                                    <div className="p-3 bg-red-500/10 rounded-2xl text-red-500 group-hover:scale-110 transition-transform">
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

                    <div className="sticky top-12 p-12 bg-slate-900 border border-red-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-all">
                            <Shield className="w-64 h-64 text-red-600" />
                        </div>
                        <div className="relative z-10 space-y-10">
                            <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">Legal Representation <span className="text-red-500">Gap.</span></h3>
                            <p className="text-slate-400 font-bold italic text-sm border-l-2 border-red-500 pl-6 leading-loose">
                                "The Insurance Research Council (IRC) reports that represented claimants receive 3.5x higher net settlements than those handling claims pro se."
                            </p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                                        <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Insurance <br />First Offer</div>
                                        <div className="text-2xl font-black text-slate-500">$18,400</div>
                                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-1/4 bg-slate-600" />
                                        </div>
                                    </div>
                                    <div className="p-6 bg-red-500/5 rounded-3xl border border-red-500/20 space-y-4">
                                        <div className="text-[10px] font-black uppercase text-red-500 tracking-widest">Attorney-Led <br />Audit Net</div>
                                        <div className="text-2xl font-black text-white">$64,400</div>
                                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-gradient-to-r from-red-600 to-rose-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[11px] font-black uppercase text-white tracking-widest">The Multiplier Gap</span>
                                        <span className="px-2 py-1 bg-red-600 text-[10px] font-black text-white rounded">+350%</span>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { label: "Future Wage Loss Documentation", status: true },
                                            { label: "Latent Injury Medical Coding", status: true },
                                            { label: "Bad Faith Policy Pressure", status: true }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[9px] text-center text-slate-600 font-bold uppercase tracking-widest pt-2">
                                    *Based on Insurance Research Council (IRC) Industry Benchmarks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Liability Rules (id='rules') */}
            <section id="rules" className="py-32 bg-slate-900/10 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase italic">The 51% Fault Barrier.</h2>
                        <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto leading-relaxed">
                            Every jurisdiction applies its own 'Liability Filter.' In Modified Comparative states, crossing the 51% threshold means **ZERO** recovery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {[
                            { name: "Pure Comparative", desc: "Recover even if you are 99% at fault. Your award is simply reduced by that 99%.", examples: "California, New York, Florida" },
                            { name: "Modified Comparative", desc: "Barred from recovery if your fault is 50% or 51% (varies by state).", examples: "Texas, Illinois, Pennsylvania" }
                        ].map((rule, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-red-500/30 transition-all group">
                                <h4 className="text-xl font-black text-white mb-4 italic group-hover:text-red-500 transition-colors uppercase tracking-tighter underline underline-offset-8 decoration-red-600/30">{rule.name}</h4>
                                <p className="text-slate-400 text-sm font-medium leading-loose mb-6">{rule.desc}</p>
                                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Typical Jurisdictions: <span className="text-slate-400">{rule.examples}</span></div>
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
                        <p className="text-red-500 font-black text-xs uppercase tracking-[0.4em]">Advanced Forensic Simulation</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                id: "01",
                                title: "Human / Behavioral",
                                desc: "Analysis of DUI, Distracted Driving (Cell phone logs), and Gross Negligence. These factors trigger punitive multipliers.",
                                entities: ["Punitive Damages", "Gross Negligence", "DUI Multiplier"]
                            },
                            {
                                id: "02",
                                title: "Technical / Mechanical",
                                desc: "Event Data Recorder (EDR) 'Black Box' analysis. Speed, braking, and steering data are the ultimate liability anchors.",
                                entities: ["EDR Data", "Braking Latency", "Collision Force"]
                            },
                            {
                                id: "03",
                                title: "Legal / Jurisdictional",
                                desc: "Venue-specific multipliers. Adjusting for 'Nuclear Counties' vs conservative insurance-friendly zip codes.",
                                entities: ["Venue Weighting", "Nuclear Jury Verdicts", "MDL Policy"]
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-red-500/5 transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 italic scale-150 group-hover:text-red-500/10 transition-colors">{pillar.id}</div>
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

            {/* 6. Case Intelligence Library (FAQ Section) */}
            <section id="faq" className="py-32 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-1 w-24 bg-red-600 rounded-full" />
                        <h2 className="text-4xl font-black text-white tracking-widest uppercase italic leading-none">Intelligence Library.</h2>
                    </div>

                    <div className="grid gap-12 pt-8 border-t border-white/5">
                        {[
                            {
                                q: "How is 'Pain and Suffering' calculated in 2026?",
                                a: "Insurance carriers now primarily use AI-driven medical coding audits. They look for 'ICD-10 Consistency'. Pain and suffering is then calculated as a multiple (1.5x up to 5x) of your documented 'Special Damages' (medical bills + lost wages)."
                            },
                            {
                                q: "What is the 'Representation Gap' and why is it 3.5x?",
                                a: "Attorneys understand how to document 'Future Earning Capacity' and 'Latent Injuries' (like disc herniations that worsen over time). Pro se claimants often settle for the first offer, missing out on over 70% of the case's true delta value."
                            },
                            {
                                q: "How does a 'Statute of Limitations' impact my calculator result?",
                                a: "In most states (e.g., California/Texas), you have 2 years to file. If you miss this window, your result is legally $0. However, 'Statutes of Repose' may provide exceptions for defective vehicle components regardless of the accident date."
                            },
                            {
                                q: "Will 'Policy Limits' cap my settlement?",
                                a: "Yes. Even if your damages are $1M, if the at-fault driver has a $25k limit and no personal assets, $25k is the effective cap. This is why 'Uninsured/Underinsured' coverage on your own policy is critical."
                            },
                            {
                                q: "Can I use this auditor for a 'Minor' car accident?",
                                a: "Yes. Tier 0 (Soft Tissue) accidents are the most common. Our auditor handles these by applying a lower multiplier (1.2x - 1.5x) and accounting for property damage value stabilization."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="group cursor-help space-y-4">
                                <h4 className="text-xl font-black text-red-500 tracking-tight flex gap-4 lowercase">
                                    <span className="opacity-20 text-white font-serif">?</span> {faq.q}
                                </h4>
                                <div className="pl-8 border-l-2 border-red-600/20">
                                    <p className="text-slate-400 text-sm font-medium leading-loose group-hover:text-slate-300 transition-colors uppercase tracking-tight">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Final Call to Audit */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-20 bg-gradient-to-br from-red-600 to-rose-700 rounded-[5rem] text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_rgba(220,38,38,0.4)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">Run a Private <br />Liability Audit.</h2>
                            <p className="text-red-50 text-xl font-bold max-w-2xl mx-auto leading-relaxed italic opacity-80">
                                Access the 2026 S-Class Actuarial Matrix. Calculate your settlement trajectory without sharing personal identification.
                            </p>
                            <Link href="/car-accident/calculator" className="inline-flex items-center gap-4 bg-white text-black px-16 py-8 rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl">
                                Launch Auditor <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Calculators */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <RelatedCalculators currentCalc="car-accident" count={6} />
                </div>
            </section>
        </div>
    );
}
