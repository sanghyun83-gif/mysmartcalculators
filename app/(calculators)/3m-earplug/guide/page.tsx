import Link from "next/link";
import { SITE, EARPLUG_2026, EPP_TIERS } from "@/lib/calculators/3m-earplug";
import {
    ArrowLeft,
    Shield,
    Ear,
    Gavel,
    Activity,
    Scale,
    Stethoscope,
    ChevronRight,
    Zap,
    CheckCircle,
    AlertTriangle,
    FileText,
    BadgeCheck,
    TrendingUp,
    Target
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata = {
    title: "3M Earplug Lawsuit Guide 2026 | Forensic Settlement Audit",
    description: "Comprehensive guide to MDL 2885 3M Earplug lawsuit. Analysis of EPP tiers, EIF eligibility, and VA audiology benchmarks for 2026 claimants.",
};

export default function GuidePage() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30 pb-24">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/3m-earplug" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors mb-12">
                            <ArrowLeft className="w-4 h-4" /> Back to Case Auditor
                        </Link>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            MDL 2885 Forensic Intelligence
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none italic uppercase mb-8">
                            The 3M Forensic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600">Claims Blueprint.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                            Navigate the $6.01B MDL 2885 settlement. A deep-dive into EPP classification logic, audiology thresholds, and the 2026 disbursement priority.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-12 gap-24 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* 1. Legal Landscape */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">01. MDL 2885 Architecture.</h2>
                                <div className="h-1.5 w-24 bg-indigo-600 rounded-full" />
                            </div>
                            <div className="prose prose-invert prose-indigo max-w-none text-lg text-slate-400 leading-relaxed font-medium space-y-8">
                                <p>
                                    The 3M Combat Arms Earplug Products Liability Litigation (**MDL 2885**) reached a global settlement in August 2023. This framework aims to resolve approximately 300,000 claims through two primary channels: the **Elective Payment Program (EPP)** and the **Extraordinary Injury Fund (EIF)**.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 not-prose">
                                    <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-4">
                                        <Shield className="w-10 h-10 text-indigo-500" />
                                        <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">EPP (The Standard)</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-tight">
                                            Designed for 99% of claimants. Provides fixed, expedited payments ranging from **$10,000 to $100,000** based on injury tier documentation.
                                        </p>
                                    </div>
                                    <div className="p-10 bg-indigo-600 rounded-[3rem] space-y-4 shadow-2xl">
                                        <Zap className="w-10 h-10 text-white" />
                                        <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">EIF (The Elite)</h4>
                                        <p className="text-sm text-indigo-100/70 leading-relaxed uppercase tracking-tight">
                                            Reserved for catastrophic injuries, surgical history, or profound bilateral loss. Payouts can exceed **$250,000** upon rigorous audit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Clinical Path (Hearing Loss Matrix) */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">02. Clinical Audiometry Matrix.</h2>
                                <div className="h-1.5 w-24 bg-purple-600 rounded-full" />
                            </div>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed">
                                The settlement auditor classifies your injury based on **Pure Tone Averages (PTA)** and **Speech Discrimination Scores (SDS)**.
                            </p>

                            <div className="overflow-x-auto rounded-[2rem] border border-white/5">
                                <table className="w-full text-left bg-black/40">
                                    <thead className="bg-white/5 border-b border-white/10">
                                        <tr>
                                            <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Injury Severity</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">dB Threshold Shift</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">EPP Target Tier</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {[
                                            { severity: "Profound / Bilateral", db: "45dB + Across PTA", tier: "Level 5 ($100k)" },
                                            { severity: "Significant / High Freq", db: "30-40dB Shift", tier: "Level 4 ($50k)" },
                                            { severity: "Moderate Loss", db: "25dB + Shift", tier: "Level 3 ($24k)" },
                                            { severity: "Tinnitus Documentation", db: "Clinical Diagnosis", tier: "Level 1-2 ($10k-$16k)" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="px-8 py-6 text-white font-black uppercase text-xs tracking-tighter italic">{row.severity}</td>
                                                <td className="px-8 py-6 text-slate-400 text-sm font-medium">{row.db}</td>
                                                <td className="px-8 py-6 font-black text-indigo-400 italic text-sm group-hover:bg-indigo-500/10 transition-colors uppercase tracking-widest">{row.tier}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. Forensic Evidence Pillar */}
                        <div className="p-16 bg-slate-900 border border-white/5 rounded-[4rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 translate-y--12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
                                <Scale className="w-64 h-64 text-indigo-500" />
                            </div>
                            <div className="relative z-10 space-y-12">
                                <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">The Forensic <span className="text-indigo-500">Evidence Audit.</span></h3>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <p className="text-sm font-bold text-slate-400 leading-relaxed uppercase tracking-tight">
                                            To qualify for Tier 4 or 5, your case must bridge the gap between military service records and current clinical findings.
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                "Service-Connected Audiogram (Pre-2015)",
                                                "VA Clinical Rating of 20% or Higher",
                                                "Hearing Aid Prescription Records",
                                                "Permanent Tinnitus Diagnosis (ICD-10 H93.1)"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-black/40 border border-indigo-500/20 rounded-3xl space-y-4">
                                        <div className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                                            <TrendingUp className="w-4 h-4" /> Optimization Signal
                                        </div>
                                        <p className="text-[11px] font-medium text-slate-400 italic leading-loose uppercase">
                                            "Claimants with documented surgical history or cochlear implants bypass standard EPP tiers for EIF valuation audits."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Payment Timeline */}
                        <div className="space-y-12 border-t border-white/5 pt-24">
                            <div className="flex items-center gap-4">
                                <Activity className="w-10 h-10 text-emerald-500" />
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">2026 Disbursement Matrix.</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { phase: "Ph 1: Ledger Sync", status: "Complete", desc: "Settlement Registration & Wave 1 EPP", date: "2024-2025" },
                                    { phase: "Ph 2: Deep Audit", status: "Active", desc: "Tier 4/5 Verification & EIF Review", date: "CURRENT" },
                                    { phase: "Ph 3: Final Pool", status: "Pending", desc: "Excess Funds Pro-Rata Distribution", date: "Late 2026" }
                                ].map((item, i) => (
                                    <div key={i} className={`p-8 rounded-3xl border ${i === 1 ? "bg-emerald-500/10 border-emerald-500/30 ring-4 ring-emerald-500/5" : "bg-black/40 border-white/5"}`}>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.phase}</p>
                                        <p className="text-xl font-black text-white mb-2 italic tracking-tighter">{item.status}</p>
                                        <p className="text-[10px] font-bold text-slate-600 uppercase mb-4">{item.desc}</p>
                                        <div className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em]">{item.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 sticky top-32 space-y-8">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] space-y-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
                            <h4 className="text-xl font-black text-white italic tracking-tighter uppercase leading-none">The S-Class <br />Expert Audit.</h4>

                            <div className="space-y-6">
                                {[
                                    { label: "MDL Sync", val: "Verified", icon: Shield },
                                    { label: "Clinical Matrix", val: "S-Class v2.1", icon: Activity },
                                    { label: "Data Authority", val: "MDL 2885", icon: Scale }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <stat.icon className="w-4 h-4 text-indigo-500" />
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                        </div>
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">{stat.val}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/3m-earplug/calculator" className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-center py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.03] shadow-xl italic">
                                Analyze My Settlement Tier <ChevronRight className="inline w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] space-y-6">
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Authority Signals</h5>
                            <div className="space-y-4">
                                {SITE.description.split(".").slice(0, 2).map((text, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                                        <p className="text-[11px] font-medium text-slate-400 capitalize underline italic decoration-indigo-500/20">{text}.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Calculators Integration */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="flex flex-col items-center space-y-12">
                    <h2 className="text-4xl font-black text-white tracking-widest uppercase italic leading-none">Cross-Reference.</h2>
                    <div className="w-full max-w-sm">
                        <RelatedCalculators currentCalc="3m-earplug" count={5} />
                    </div>
                </div>
            </section>

            {/* Footer Disclaimer */}
            <footer className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 opacity-50 text-center space-y-4">
                <div className="flex justify-center items-center gap-3">
                    <Ear className="w-6 h-6 text-indigo-500" />
                    <span className="text-xl font-black text-white tracking-widest uppercase italic">3M Combat Arms Auditor.</span>
                </div>
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest max-w-2xl mx-auto leading-loose">
                    Forensic investigation synthesis of MDL 2885 Elective Payment Program (EPP).
                    Data audited against primary court records and clinical audiometry benchmarks. 2026 Edition.
                </p>
            </footer>
        </div>
    );
}
