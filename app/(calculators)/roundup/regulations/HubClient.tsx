"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Microscope, Info, Gavel, CheckCircle2, ArrowRight, Activity, FileText } from "lucide-react";

export default function RoundupRegulationsHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/roundup" className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "EPA Standards", id: "#epa" },
                                { n: "IARC Conflict", id: "#iarc" },
                                { n: "Prop 65", id: "#prop65" },
                                { n: "Global Ban Map", id: "#global" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2">Safety Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic">2026 Regulatory Sync</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                            <Shield className="w-3 h-3" /> Regulatory Compliance Unit
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            EPA vs. <span className="text-emerald-500 italic">IARC</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Analyzing the 2026 global regulatory landscape for Glyphosate usage and the conflicting mandates that drive high-value mass torts.
                        </p>
                    </div>

                    {/* Section 1: EPA vs IARC */}
                    <section id="iarc" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm">1</div>
                            The IARC Monograph 112 Conflict
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                In 2015, the International Agency for Research on Cancer (IARC) shocked the agrochemical world by classifying glyphosate as a **Group 2A Probable Carcinogen**. This was based on "limited evidence" in humans for Non-Hodgkin Lymphoma and "sufficient evidence" in experimental animals.
                            </p>
                            <p>
                                While the EPA continues to maintain that glyphosate is safe when used as directed, the European Food Safety Authority (EFSA) has issued significantly stricter mandates. The EPA's refusal to align with IARC in 2026 remains a cornerstone of Bayer's defense strategy, but various bellwether juries have found the IARC science more compelling.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Prop 65 */}
                    <section id="prop65" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Microscope className="w-48 h-48 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">California Proposition 65</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                California's OEHHA recognized glyphosate as a carcinogen in 2017, requiring "clear and reasonable" warnings on products sold within the state. This regulatory move created a **Knowledge Anchor** for litigation.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-emerald-500 decoration-2">Litigation Link</strong>: Plaintiffs argue that any manufacturer failing to warn post-2017 was in direct violation of state-level safety thresholds, effectively bypassing many federal 'Preemption' arguments used in other jurisdictions.
                            </p>
                        </div>
                    </section>

                    {/* Global Status Grid */}
                    <section id="global" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-emerald-500 decoration-4">2026 Global Usage Index</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Monitoring international glyphosate restrictions</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "EU Restrictions", d: "France and Germany have implemented partial bans near schools and residential areas, moving toward a total phase-out by 2028." },
                                { t: "Ninth Circuit Ruling", d: "U.S. appellate courts have ordered the EPA to re-examine its 'No Cancer Risk' finding based on environmental impact data." },
                                { t: "Homeowner Ban", d: "Major retailers have removed concentrated glyphosate from shelves in response to public liability pressure." },
                                { t: "Mexican Mandate", d: "Mexico has initiated a progressive reduction in glyphosate imports, citing sustainable agriculture and public health." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-all group">
                                    <div className="text-emerald-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">CODE: REG-{2026 + i}</div>
                                    <h4 className="text-lg font-black text-white">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/roundup/calculator" className="w-full p-8 bg-emerald-600 rounded-[3rem] text-center hover:bg-emerald-500 transition-all group overflow-hidden relative shadow-2xl shadow-emerald-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Settlement Audit with Regulatory Data <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
