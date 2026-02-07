"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight, Shield, Activity, Info, FileText } from "lucide-react";

export default function TruckLegalHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/truck-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Multiplier Logic", id: "#multiplier" },
                                { n: "Economic Damages", id: "#economic" },
                                { n: "Comparative Fault", id: "#fault" },
                                { n: "Legal Strategy", id: "#strategy" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-red-400 uppercase tracking-widest mb-2">Audit Status</div>
                            <div className="text-xs font-bold text-white uppercase italic">2026 Legal Sync Active</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-widest">
                            <Scale className="w-3 h-3" /> Settlement Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            The Payout <span className="text-red-500 italic">Multiplier</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Truck accident damages are divided into Economic (bills/wages) and Non-Economic (pain/suffering).
                            The multiplier is the most contested variable in commercial vehicle litigation.
                        </p>
                    </div>

                    {/* Section 1: Multiplier Mechanics */}
                    <section id="multiplier" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-sm">1</div>
                            The Multiplier Framework
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                In 18-wheeler cases, "Pain and Suffering" is often calculated by taking your total medical bills and multiplying them by a factor—usually between 1.5x and 5x. However, in cases involving gross negligence or safety violations, this multiplier can exceed 10x.
                            </p>
                            <p>
                                Insurance adjusters use software like **Colossus** to determine these values. Our S-Class engine reverses this logic, auditing case details against the same actuarial data used by major insurance carriers in 2026.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Fault Logic */}
                    <section id="fault" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-8 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Gavel className="w-48 h-48 text-red-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Comparative vs. Contributory</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                Under <strong className="text-white">Comparative Fault</strong>, your settlement is reduced by your percentage of fault. If you are 10% at fault and the award is $1M, you receive $900,000.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-red-500">The 51% Bar</strong>: In modified comparative states (like TX or FL), if discovery proves you are 51% or more at fault, the defendant pays zero. This is почему (why) early representation and black-box data preservation are critical.
                            </p>
                        </div>
                    </section>

                    {/* Strategy Checklist */}
                    <section id="strategy" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-red-500 decoration-4">Case Strategy Checklist</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Black Box Data", d: "Preserve the ELD (Electronic Logging Device) data within 48 hours to prevent 'unintentional' deletion by the carrier." },
                                { t: "Respondeat Superior", d: "Linking the driver's negligence directly to the parent trucking company to access higher $5M+ policy limits." },
                                { t: "Negligence Per Se", d: "Using FMCSR violations as automatic proof of negligence, bypassing the need to prove a 'reasonable person' standard." },
                                { t: "Policy Limit Audit", d: "Investigating excess and umbrella policies that are often hidden during initial insurance disclosures." }
                            ].map((strat, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-colors group">
                                    <div className="text-red-500 font-black text-sm group-hover:scale-110 transition-transform inline-block">#{i + 1}</div>
                                    <h4 className="text-lg font-black text-white">{strat.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{strat.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/truck-accident/calculator" className="w-full p-8 bg-red-600 rounded-[3rem] text-center hover:bg-red-500 transition-all group overflow-hidden relative shadow-2xl shadow-red-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Audit with Multiplier Intelligence <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
