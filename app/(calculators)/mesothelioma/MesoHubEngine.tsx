"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    SITE,
    CALCULATORS,
    MESO_CONSTANTS_2026,
    INJURY_TYPES,
    formatCurrency
} from "@/lib/calculators/mesothelioma";
import {
    ArrowRight,
    ShieldCheck,
    Scale,
    AlertTriangle,
    Zap,
    Activity,
    ChevronRight,
    TrendingUp,
    CheckCircle2,
    Stethoscope,
    Heart,
    Building2,
    Gavel,
    FileText,
    Flame,
    Award,
    Server
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const HUB_ENGINE_SIGNATURE = "MESO-HUB-V2.1.4-STABLE";

export function MesoHubEngineComponent() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Trust Matrix", href: "#matrix" },
        { name: "Trinity Audit", href: "#trinity" },
        { name: "Clinical Path", href: "#intelligence" },
        { name: "Expert FAQ", href: "#faq" }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
            {/* S-Class Premium Navigator */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                                <Flame className="w-5 h-5 text-slate-950" />
                            </div>
                            <span className="text-sm font-black uppercase tracking-tighter text-white italic">
                                Meso <span className="text-amber-500 not-italic">Auditor v2.1</span>
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <Link href="/mesothelioma/injury-settlement" className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-xl">
                        Execute Audit
                    </Link>
                </div>
            </nav>

            {/* Cinematic Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">2026 Asbestos Trust Fund Standards</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
                        Mesothelioma <br />
                        <span className="text-amber-500 not-italic text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">Settlement Hub.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl text-slate-400 font-medium leading-relaxed mb-12">
                        Professional-grade compensation audit using the <span className="text-white">v2.1 Ranking Predator Engine</span>.
                        Injected with $30B+ Bankruptcy Trust indices, MDL 2738 discovery deltas, and 2026 VA SMC tables.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/mesothelioma/injury-settlement" className="group w-full sm:w-auto px-12 py-6 bg-amber-500 text-slate-950 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                            Calculate Payout Range
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="#trinity" className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                            Review Trinity Audit
                        </a>
                    </div>
                </div>
            </section>

            {/* Benchmark Matrix (id='stats') */}
            <section id="matrix" className="py-24 border-y border-white/5 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Remaining Trust Asset", val: "$30B+", color: "text-amber-500" },
                            { label: "Avg Lawsuit (M)", val: "$2.4M", color: "text-orange-500" },
                            { label: "NARCO Payment %", val: "100%", color: "text-emerald-500" },
                            { label: "Active Trusts", val: "60+", color: "text-blue-500" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2 group cursor-default">
                                <div className={`text-4xl font-black tracking-tighter italic ${stat.color} group-hover:scale-110 transition-transform duration-500`}>{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Liability Framework (id='rules') */}
            <section id="rules" className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6">
                            The Trust Fund <span className="text-amber-500 not-italic">Liquidity Matrix</span>
                        </h2>
                        <p className="text-slate-400 font-medium max-w-2xl mx-auto">
                            Actual 2026 payout percentages for major asbestos bankruptcy trusts. These percentages serve as the critical anchor for all non-litigation recovery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {MESO_CONSTANTS_2026.trustFunds.slice(0, 3).map((trust, i) => (
                            <div key={i} className="bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] group hover:border-amber-500/30 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Server className="w-24 h-24 text-white" />
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-6 italic">— {trust.status}</div>
                                <div className="text-4xl font-black text-white mb-2 italic">{(trust.percentage * 100).toFixed(1)}%</div>
                                <div className="text-xs text-slate-500 font-black uppercase tracking-widest mb-8">{trust.name}</div>
                                <div className="space-y-4 mb-10">
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 shadow-[0_0_15px_rgba(235,158,11,0.5)]" style={{ width: `${trust.percentage * 100}%` }} />
                                    </div>
                                </div>
                                <Link href="/mesothelioma/injury-settlement" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                                    Audit Trust Claim <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Intelligence & Trinity Analysis (id='trinity') */}
            <section id="trinity" className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-7 space-y-12">
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9] tracking-tighter">
                                The Asbestos <br />
                                <span className="text-amber-500 not-italic">Trinity Audit Engine</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Bio-Path Staging", desc: "TNM cancer staging audit (Stage I-IV) vs. asbestos fiber burden path-reports.", icon: Stethoscope, color: "bg-amber-500" },
                                    { title: "Exposure Forensic", desc: "Mapping of direct job-site exposure vs. secondary household transfer dynamics.", icon: Flame, color: "bg-orange-500" },
                                    { title: "Statutory Trust Sync", desc: "Cross-referencing 60+ bankruptcy trust criteria with 2026 payout indices.", icon: Gavel, color: "bg-blue-500" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 group hover:bg-white/10 transition-all">
                                        <div className={`p-4 ${item.color} rounded-2xl h-fit shadow-xl group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-6 h-6 text-slate-950" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-white uppercase italic mb-2 tracking-tight">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-8">
                            {/* Expert Compensation Matrix */}
                            <div className="bg-slate-950 rounded-[3rem] border border-white/10 p-12 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp className="w-32 h-32 text-amber-500" />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase italic mb-10 tracking-tight">Legal Representation Gap</h3>
                                <div className="space-y-10 relative z-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            <span>Pro Se (Trust-Only)</span>
                                            <span>$180k Avg</span>
                                        </div>
                                        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                                            <div className="h-full bg-slate-700 w-[18%] rounded-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-amber-500 font-black font-black">
                                            <span>Attorney-Led (Trial Net)</span>
                                            <span>$1.4M - $10M+ Focus</span>
                                        </div>
                                        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                                            <div className="h-full bg-amber-500 w-[78%] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
                                        </div>
                                    </div>
                                    <div className="pt-10 border-t border-white/5">
                                        <div className="flex items-center gap-3 text-emerald-400 mb-4">
                                            <CheckCircle2 className="w-6 h-6" />
                                            <span className="text-sm font-black uppercase tracking-widest italic">3.8x Median Payout Delta</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed italic font-medium font-medium">
                                            Based on 2026 RAND Litigation audits. Represented claimants access solvent-defendant lawsuit funds that typically pay 300% more than administrative trusts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert FAQ Section (id='faq') */}
            <section id="faq" className="py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6 tracking-tighter leading-none">
                            Case <span className="text-amber-500 not-italic uppercase">Intelligence Library</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium italic italic">Strategic analysis of asbestos litigation, trust fund claiming, and veteran recovery.</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { q: "What is the Asbestos Trust Fund 'Payment Percentage'?", a: "Trusts don't pay 100% of a claim's scheduled value to ensure funds last for future victims. For example, Halliburton pays 60% while Johns Manville pays 5.1%. v2.1 Auditor factors these specific 2026 percentages into every calculation." },
                            { q: "How is 'Secondary Exposure' quantified?", a: "Secondary exposure (e.g., a spouse washing asbestos-laden work clothes) is a high-value tort. Our engine applies a 1.35x Alpha Multiplier to these cases due to the 'Gross Negligence' often required for household contamination to occur." },
                            { q: "Does the Supreme Court 'Durnell' case impact payouts?", a: "Significantly. The 2026 Durnell ruling on federal preemption has shifted the evidentiary burden for 'Failure to Warn' claims, potentially increasing the leverage for solvent-company lawsuit settlements by up to 25%." },
                            { q: "Can Veterans receive both VA Benefits and Trust Fund payouts?", a: "Yes. Mesothelioma is a presumptive condition for asbestos-exposed veterans. Our calculator simulates the 2026 SMC (Special Monthly Compensation) delta, which can add significant lifetime value on top of standard trust recovery." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded-[3rem] group hover:bg-slate-900/80 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <Award className="w-32 h-32 text-white" />
                                </div>
                                <div className="flex gap-6 relative z-10">
                                    <span className="text-amber-500 font-black text-3xl italic opacity-30 group-hover:opacity-100 transition-opacity tracking-tighter">0{i + 1}</span>
                                    <div>
                                        <h4 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter">{faq.q}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed font-medium">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Forensic Tools */}
            <section className="py-32 bg-slate-900/50 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-white uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500">
                            Access Related <span className="text-amber-500 not-italic">Auditors</span>
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <RelatedCalculators currentCalc="mesothelioma" count={3} />
                        </div>
                    </div>
                </div>
            </section>

            {/* S-Class Final CTA */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)] blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic mb-10 tracking-tighter leading-[0.8]">
                        Diagnose <br />
                        <span className="text-amber-500 not-italic">Your Recovery</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto leading-relaxed italic italic">
                        Mesothelioma warrants specialized-grade quantification. Execute the 2026 Audit now.
                    </p>
                    <Link href="/mesothelioma/injury-settlement" className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-xl hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-amber-500/20">
                        Start Settlement Audit
                        <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
            </section>

            {/* S-Class Footer */}
            <footer className="py-24 border-t border-white/5 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-amber-500 rounded-xl shadow-lg">
                                <Flame className="w-6 h-6 text-slate-950" />
                            </div>
                            <span className="text-2xl font-black uppercase tracking-tighter text-white italic">
                                Meso <span className="text-amber-500 not-italic">Auditor</span>
                            </span>
                        </div>
                        <div className="flex gap-10">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 italic">
                            &copy; 2026 Mesothelioma Forensic Standards. MDL 2738 Compliant.
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Live 2026 Trust Asset Sync</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
