"use client";

import Link from "next/link";
import { ArrowLeft, Landmark, Shield, Microscope, Info, Gavel, CheckCircle2, ArrowRight, Activity, FileText } from "lucide-react";

export default function FinanceRegulationsHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/401k-growth" className="inline-flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "SECURE 2.0 Overhaul", id: "#secure" },
                                { n: "RMD Pivot (Age 73)", id: "#rmd" },
                                { n: "Auto-Enrollment", id: "#auto" },
                                { n: "Roth Mandates", id: "#roth" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2">Policy Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic">2026 Federal Sync</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <header className="space-y-6 text-balance">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            SECURE Act <span className="text-blue-500 italic">2.0</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Analyzing the 2026 shifts in federal retirement contribution and distribution mandates under the SECURE Act 2.0 of 2022.
                        </p>
                    </header>

                    {/* Section 1: SECURE 2.0 */}
                    <section id="secure" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">1</div>
                            The Savings Gap Overhaul
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                The **SECURE Act 2.0 of 2022** represents the most significant overhaul of US retirement policy in decades, specifically targeting the "Savings Gap" for late-career workers. The legislation includes dozens of provisions aimed at increasing retirement savings and simplifying plan administration.
                            </p>
                            <p>
                                Key changes include enhanced catch-up contributions, mandatory automatic enrollment for new plans, and significant expansions in how participants can access their funds in emergencies without incurring the standard 10% early withdrawal penalty.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: RMD Pivot */}
                    <section id="rmd" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Landmark className="w-48 h-48 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">The 2026 RMD Pivot</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                One of the most critical regulatory updates is the shift in **Required Minimum Distributions (RMDs)**. For those born between 1951 and 1959, the RMD age is now 73. For those born in 1960 or later, it is 75.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-blue-500 decoration-2">Compounding Alpha</strong>: This fundamental change allows for an additional 2-3 years of tax-advantaged compounding, which can increase the longevity of a portfolio by 10% or more if the underlying assets are performing at 2026 historical benchmarks.
                            </p>
                        </div>
                    </section>

                    {/* Auto-Enrollment Section */}
                    <section id="auto" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-blue-500 decoration-4">Behavioral Mandates</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">SECURE 2.0 Defaults & Nudges</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Auto-Enrollment", d: "New 401k/403b plans must automatically enroll employees at a rate of 3%, increasing by 1% annually until 10-15%." },
                                { t: "Roth Catch-up", d: "Workers earning over $145k must direct catch-up contributions to a Roth account (after-tax), effective 2026." },
                                { t: "Emergency Access", d: "Participants can withdraw up to $2,500 once a year for personal emergencies without the 10% penalty tax." },
                                { t: "Student Loan Match", d: "Employers can now make matching contributions to a 401k based on an employee's student loan payments." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-all group">
                                    <div className="text-blue-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">IRS-PUB:{590 + i}</div>
                                    <h4 className="text-lg font-black text-white">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/401k-growth/calculator" className="w-full p-8 bg-blue-600 rounded-[3rem] text-center hover:bg-blue-500 transition-all group overflow-hidden relative shadow-2xl shadow-blue-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Compliance Audit Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
