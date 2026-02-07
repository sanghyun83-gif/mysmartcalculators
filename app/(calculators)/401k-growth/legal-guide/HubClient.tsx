"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight, Shield, Activity, Info, FileText, Landmark, LandmarkIcon } from "lucide-react";

export default function FinanceLegalHub() {
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
                                { n: "ERISA Compliance", id: "#erisa" },
                                { n: "IRS Section 401(k)", id: "#irs" },
                                { n: "Fiduciary Duty", id: "#fiduciary" },
                                { n: "Vesting Rules", id: "#vesting" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2">Legal Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic">DOL Regulatory Sync Active</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <header className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                            <Scale className="w-3 h-3" /> Fiduciary Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            The 401(k) <span className="text-blue-500 italic">Legal</span> Framework.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Understanding Fiduciary Duty, ERISA protections, and IRS Section 401(k) tax code compliance in 2026.
                        </p>
                    </header>

                    {/* Section 1: ERISA */}
                    <section id="erisa" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">1</div>
                            ERISA Compliance Audit
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                The **Employee Retirement Income Security Act of 1974 (ERISA)** is the foundational law protecting your 401k assets. It sets minimum standards for most voluntarily established retirement and health plans in private industry to provide protection for individuals in these plans.
                            </p>
                            <p>
                                ERISA requires plan sponsors to provide participants with plan information including important information about plan features and funding; provides fiduciary responsibilities for those who manage and control plan assets; and requires plans to establish a grievance and appeals process for participants to get benefits from their plans.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: IRS Code */}
                    <section id="irs" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Landmark className="w-48 h-48 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">IRS Section 401(k) Logic</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                The "Legal Alpha" of a 401k is found in IRS Code Section 401(k), which allows an employee to elect to have a portion of their compensation contributed to a qualified plan on a pre-tax basis.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-blue-500 decoration-2">Tax Deferral</strong>: You avoid taxes today at your highest marginal rate, betting that your effective tax rate in retirement will be significantly lower. This creates a powerful mathematical advantage over taxable brokerage accounts for long-term wealth accumulation.
                            </p>
                        </div>
                    </section>

                    {/* Fiduciary Section */}
                    <section id="fiduciary" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-blue-500 decoration-4">The Fiduciary Standard</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">ERISA Title I Protection Benchmarks</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Duty of Loyalty", d: "Plan managers must act solely in the interest of participants and their beneficiaries, with the exclusive purpose of providing benefits." },
                                { t: "Duty of Prudence", d: "Managers must act with the care, skill, prudence, and diligence that a 'prudent person' would use in similar circumstances." },
                                { t: "Vesting Schedules", d: "Legal timelines that dictate when employer match contributions become 100% owned by the employee (Cliff vs. Graded)." },
                                { t: "Fee Transparency", d: "Fiduciaries must ensure plan fees are reasonable. A 1% fee difference over 30 years can reduce a nest egg by 25%." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-colors group">
                                    <div className="text-blue-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">CODE: FIN-{401 + i}</div>
                                    <h4 className="text-lg font-black text-white">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <footer className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/401k-growth/calculator" className="w-full p-8 bg-blue-600 rounded-[3rem] text-center hover:bg-blue-500 transition-all group overflow-hidden relative shadow-2xl shadow-blue-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Launch Growth Auditor Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </footer>

                </main>
            </div>
        </div>
    );
}
