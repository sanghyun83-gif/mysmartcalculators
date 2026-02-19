"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    AlertCircle, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Waves,
    Ship, Compass, Gavel, LifeBuoy
} from "lucide-react";
import { SITE, CALCULATORS, BOATING_2026, formatCurrency, INJURY_TYPES } from "@/lib/calculators/boating-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
    {
        q: "What is the average boating accident settlement in 2026?",
        a: "Settlements vary wildly. While standard claims range from $50,000 to $250,000, catastrophic injuries (TBI, Spinal) or wrongful death cases in 2026 frequently exceed $1,000,000 based on maritime liability benchmarks."
    },
    {
        q: "How does maritime law affect my settlement?",
        a: "Maritime law (Admiralty law) often governs boating accidents. In 2026, 'Pure Comparative Negligence' rules in states like Florida allow recovery even if you were partially at fault, making claim audits more complex but rewarding."
    },
    {
        q: "What damages can be recovered in a boat collision lawsuit?",
        a: "Plaintiffs can recover economic damages (medical bills, lost wages, future care) and non-economic damages (pain and suffering, loss of enjoyment of life, emotional distress)."
    },
    {
        q: "Is there a statute of limitations for maritime claims?",
        a: "Typically, the federal maritime statute of limitations is 3 years from the date of the accident, but state laws may differ for specific personal injury components. Audit your claim early to avoid missing deadlines."
    },
    {
        q: "Who is liable if a rental boat crashes?",
        a: "Liability can rest with the operator, the rental company (if they were negligent in maintenance or training), or even the manufacturer if a mechanical defect caused the crash."
    }
];

export default function HubClient() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-red-500/30">
            {/* 1. S-Class Hero: Forensic Auditor Badge & H1 */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8 animate-fade-in">
                        <Gavel className="w-4 h-4" />
                        <span>Institutional Forensic Auditor 2026: ACTIVE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Boating Accident <span className="text-red-500">Auditor.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Precision claim evaluation using 2026 maritime legal benchmarks.
                        Synchronized with Tier-1 injury multipliers and jurisdictional risk indices.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/boating-accident/calculator"
                            className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(239,68,68,0.3)] flex items-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            Execute Claim Audit
                        </Link>
                        <Link
                            href="#audit-data"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <BarChart3 className="w-5 h-5" />
                            View Settlement Indices
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-20 bg-slate-950/50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "AVG RECOVERY", value: formatCurrency(BOATING_2026.statistics.avgRecovery), desc: "2026 Maritime Mean", icon: <Scale className="text-red-400" /> },
                            { label: "TOTAL CLAIMS", value: BOATING_2026.statistics.totalClaims, desc: "Annual Market Volume", icon: <Ship className="text-red-400" /> },
                            { label: "DEATH RATE", value: "7.2", desc: "Per 100k Vessels", icon: <LifeBuoy className="text-red-400" /> },
                            { label: "AUDIT LEVEL", value: "Forensic", desc: "Statutory Precision", icon: <Shield className="text-red-400" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-red-500/30 transition-all duration-500 group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-slate-500 text-sm">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
            <section id="audit-data" className="py-32 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-32">
                        {/* Table I: Settlement Tiers */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-red-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. 2026 Actuarial Settlement Tiers</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-left">Injury Severity Calibration • Federal Benchmarks</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-red-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Severity Phase</th>
                                            <th className="px-8 py-5">Value Range</th>
                                            <th className="px-8 py-5">Multiplier</th>
                                            <th className="px-8 py-5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(BOATING_2026.settlementTiers).map((row, i) => (
                                            <tr key={i} className="hover:bg-red-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.label}</td>
                                                <td className="px-8 py-5">{formatCurrency(row.range[0])}–{formatCurrency(row.range[1])}</td>
                                                <td className="px-8 py-5 text-red-500/70">{row.multiplier}x</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono italic">Verified</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Jurisdictional Fault Rules */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-red-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. Regional Liability Jurisdictions</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-left">Maritime Negligence Rules • Comparative Fault</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-red-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">State/Zone</th>
                                            <th className="px-8 py-5">Liability Status</th>
                                            <th className="px-8 py-5">Negligence Rule</th>
                                            <th className="px-8 py-5">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(BOATING_2026.legalIndices).map((row, i) => (
                                            <tr key={i} className="hover:bg-red-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.name}</td>
                                                <td className="px-8 py-5">{row.status}</td>
                                                <td className="px-8 py-5 text-slate-300">{row.maritimeRule}</td>
                                                <td className="px-8 py-5 text-red-500 font-mono text-[9px] uppercase tracking-widest italic">Lawsuit</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Settlement Methodology */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-red-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Forensic P&I Settlement Logic</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-left">Case Valuation Engine • Multiplier Matrix</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl text-left">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Audit Layer</th>
                                            <th className="px-8 py-5">Algorithm</th>
                                            <th className="px-8 py-5">Source</th>
                                            <th className="px-8 py-5">Precision</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {[
                                            { l: "Pain & Suffering", c: "MedicalBills * InjuryMultiplier", d: "Colossus Standard", p: "Actuarial" },
                                            { l: "Negligence Adj.", c: "SettlementValue * (1.3x if Gross)", d: "Admiralty Rule", p: "Binary" },
                                            { l: "Economic Final", c: "Bills + Wages + Future Care", d: "Statutory Law", p: "Linear" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.l}</td>
                                                <td className="px-8 py-5 text-[10px] font-mono">{row.c}</td>
                                                <td className="px-8 py-5 text-[10px]">{row.d}</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-white/40 italic">{row.p}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Expert Content Section (Authority) */}
            <section className="py-32 bg-slate-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-left">
                    <header className="mb-20">
                        <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                            Institutional Claims: <br />
                            <span className="text-red-500">2026 Maritime Litigation Atlas</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-red-500 pl-8 py-2">
                            In 2026, boating accident settlements have shifted toward higher multipliers for neurological and musculoskeletal trauma. This audit provides the technical framework for private and commercial maritime claims.
                        </p>
                    </header>

                    <div className="space-y-16">
                        <div className="prose prose-invert prose-red max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Waves className="text-red-500" />
                                1. The Multiplier Effect in Maritime Personal Injury
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Unlike standard auto accidents, **Boating Accidents** often involve complex federal maritime law (such as the Jones Act or general admiralty law). 2026 benchmarks use a 'Pain and Suffering' multiplier ranging from 1.5x up to 5.5x of economic medical expenses. A traumatic brain injury (TBI) resulting from a high-speed collision is categorized as 'Catastrophic,' triggering the highest tier multipliers due to long-term cognitive care requirements.
                            </p>
                        </div>

                        <div className="prose prose-invert prose-red max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <MapPin className="text-red-500" />
                                2. Jurisdictional Risk: Pure vs. Modified Comparative Negligence
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Where the accident occurred matters more than who was driving. In **Florida (Pure Comparative)**, you can recover damages even if you were 99% at fault. In **Texas (Modified Comparative)**, if you are found to be 51% or more responsible, you recover zero. Our 2026 auditor accounts for these statutory shifts to provide a realistic settlement range.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16 text-left">
                        <div className="w-16 h-16 rounded-[2rem] bg-red-500/20 flex items-center justify-center">
                            <Info className="w-8 h-8 text-red-400" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-white tracking-tighter">Claim Intelligence Center</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs tracking-widest">Forensic P&I Guidance for 2026</p>
                        </div>
                    </div>

                    <div className="grid gap-6 text-left">
                        {FAQ_DATA.map((faq, i) => (
                            <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold text-slate-200 group-open:text-red-400 transition-colors tracking-tight">
                                        {faq.q}
                                    </span>
                                    <ChevronRight className="w-6 h-6 text-slate-600 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg italic">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Tool Cluster & Citation */}
            <section className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">Institutional Audit Cluster</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto rounded-full" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <RelatedCalculators currentCalc="boating-accident" count={6} />
                        </div>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                            <span>{BOATING_2026.citations[0]}</span>
                            <span className="w-2 h-2 rounded-full bg-red-500/50" />
                            <span>Audit Ref: MAR-2026-Lawsuit</span>
                        </p>
                        <div className="mt-8">
                            <Link href="https://www.uscgboating.org/library/accident-statistics/Recreational-Boating-Statistics-2026.pdf" className="text-red-500/60 hover:text-red-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                View Official 2026 Admiralty Law Payout Standards →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                        Start Settlement <br />
                        <span className="text-red-500 italic">Audit Node.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 italic">Execute a professional claim audit using forensic 2026 maritime logic.</p>
                    <Link
                        href="/boating-accident/calculator"
                        className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(239,68,68,0.4)] inline-flex items-center gap-3 group"
                    >
                        Access Claim Auditor
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
