"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight, Shield, Activity, Info, FileText, Microscope } from "lucide-react";

export default function RoundupLegalHub() {
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
                                { n: "Duty to Warn", id: "#warn" },
                                { n: "Strict Liability", id: "#liability" },
                                { n: "Discovery Rule", id: "#discovery" },
                                { n: "Punitive Damages", id: "#punitive" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2">Legal Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic">MDL 2741 Sync Active</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                            <Scale className="w-3 h-3" /> Mass Tort Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            Strict Liability & <span className="text-emerald-500 italic">Roundup</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Understanding the "Duty to Warn" framework and the scientific ghostwriting allegations in glyphosate litigation 2026.
                        </p>
                    </div>

                    {/* Section 1: Warning Defect */}
                    <section id="warn" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm">1</div>
                            The 'Failure to Warn' Standard
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                In most U.S. jurisdictions, a manufacturer has a non-delegable duty to warn consumers of known or knowable risks associated with their products. In the Roundup MDL 2741, plaintiffs argue that by 1999, internal glyphosate studies showed a clear genotoxic signal.
                            </p>
                            <p>
                                By failing to include a cancer warning on the label until court mandates, Bayer is held to a **Strict Liability** standard. Litigation centers on whether the manufacturer's knowledge of oxidative stress risks should have triggered immediate label changes under federal shielding laws.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Discovery Rule */}
                    <section id="discovery" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Gavel className="w-48 h-48 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Discovery Rule & SOL</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                A critical hurdle in 2026 is the **Discovery Rule**. Most states allow 2 years from the date you *knew or should have known* your cancer was linked to Roundup usage.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-emerald-500 decoration-2">Timeline Audit</strong>: misses a filing deadline by even 24 hours can result in a complete bar to recovery, regardless of the injury severity or medical bills incurred during chemo-immunotherapy.
                            </p>
                        </div>
                    </section>

                    {/* Damages Section */}
                    <section id="punitive" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-emerald-500 decoration-4">Damages Allocation</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Economic Damages", d: "Documented medical expenses, loss of earning capacity, and palliative care costs linked to NHL treatment." },
                                { t: "Punitive Damages", d: "Awards intended to punish Bayer for 'reckless indifference' to consumer safety, often exceeding the compensatory award." },
                                { t: "Loss of Consortium", d: "Claims for the loss of companionship and support by the spouse of an injured glyphosate victim." },
                                { t: "Fear of Cancer", d: "In specific jurisdictions, compensation for the emotional distress of verified exposure before a diagnosis." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-colors group">
                                    <div className="text-emerald-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">#{i + 1}</div>
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
                                Launch Liability Audit Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
