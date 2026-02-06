"use client";

import Link from "next/link";
import { ArrowLeft, Landmark, Shield, Microscope, Info, Gavel, CheckCircle2, ArrowRight, Activity, FileText, AlertTriangle } from "lucide-react";

export default function CarAccidentRegulationsHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/car-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "NHTSA Standards", id: "#nhtsa" },
                                { n: "EDR (Black Box)", id: "#edr" },
                                { n: "Insurance Mandates", id: "#insurance" },
                                { n: "Privacy Torts", id: "#privacy" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-2">Policy Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic">Federal Safety Sync 2026</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-widest">
                            <Shield className="w-3 h-3" /> Regulatory Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            Vehicle <span className="text-red-600 italic">Regulations</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Analyzing NHTSA safety standards, state-level insurance mandates, and EDR data ownership rules for 2026.
                        </p>
                    </div>

                    {/* Section 1: NHTSA */}
                    <section id="nhtsa" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-sm">1</div>
                            Federal Safety Mandates
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                The **NHTSA (National Highway Traffic Safety Administration)** establishes and enforces Federal Motor Vehicle Safety Standards (FMVSS). In 2026, the update focuses heavily on **Predictive Avoidance Systems** and Automated Emergency Braking (AEB).
                            </p>
                            <p>
                                Failure to maintain these systems according to manufacturer and federal guidelines can now shift a percentage of liability toward the vehicle owner or operator, even if they didn't directly cause the impact, under the theory of "Improper Equipment Maintenance."
                            </p>
                        </div>
                    </section>

                    {/* Section 2: EDR */}
                    <section id="edr" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Microscope className="w-48 h-48 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">EDR (Black Box) Ownership</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                New federal mandates require **Event Data Recorders (EDR)** in all passenger vehicles. This data is considered "Neutral Evidence" but is frequently subpoenaed to prove speed, braking timing, and force of impact.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-red-600 decoration-2">Legal Admissibility</strong>: Understanding who "owns" this data? the manufacturer, the owner, or the insurer? varies significantly by state. Our auditor helps you identify the data privacy hurdles in your specific jurisdiction.
                            </p>
                        </div>
                    </section>

                    {/* Mandates Section */}
                    <section id="insurance" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-red-600 decoration-4">2026 Compliance Wall</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Standard Insurance & Data Mandates</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Liability Mandates", d: "States require minimum liability coverage (e.g., 25/50/25), but these are often insufficient for serious bone or surgical (Tier 1/2) injuries." },
                                { t: "UM/UIM Rules", d: "Legal pathways for recovery when the at-fault driver has no insurance or limits lower than your actual damages." },
                                { t: "ADAR Reporting", d: "Advanced Driver Assistance reporting is now mandatory in post-accident filings to determine system-level failure vs. human error." },
                                { t: "Telematics Privacy", d: "Privacy torts related to vehicle data vary; CA (CCPA) provides much stronger protection than traditional common law states." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-all group">
                                    <div className="text-red-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">REG-CODE:{200 + i}</div>
                                    <h4 className="text-lg font-black text-white">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/car-accident/calculator" className="w-full p-8 bg-red-600 rounded-[3rem] text-center hover:bg-red-500 transition-all group overflow-hidden relative shadow-2xl shadow-red-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Regulatory Audit Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
