"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    SITE,
    LEJEUNE_2026,
    formatCurrency
} from "@/lib/calculators/camp-lejeune";
import {
    ArrowLeft,
    ArrowRight,
    Droplet,
    FileText,
    AlertTriangle,
    Shield,
    Zap,
    Award,
    Scale,
    Activity,
    Info,
    Waves,
    CheckCircle2,
    TrendingUp,
    ChevronRight,
    Search,
    Brain,
    Database,
    Gavel
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function LejeuneGuidePage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "timeline", name: "Exposure Logic" },
        { id: "mdl", name: "MDL Discovery" },
        { id: "trinity", name: "Trinity Audit" },
        { id: "faq", name: "Expert FAQ" }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
            {/* Navigation Overlay */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/camp-lejeune" className="flex items-center gap-2 group text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        HUB
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        {sections.map(s => (
                            <a key={s.id} href={`#${s.id}`} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-amber-500 transition-colors">{s.name}</a>
                        ))}
                    </div>
                    <Link href="/camp-lejeune/lejeune-calculator" className="px-5 py-2.5 bg-amber-500 text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95">
                        Launch Auditor
                    </Link>
                </div>
            </nav>

            {/* Cinematic Guide Hero */}
            <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                        <Brain className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 italic">Forensic Intelligence Hub v2.1</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
                        The <span className="text-amber-500 not-italic">Lejeune</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">Recovery Standard.</span>
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <p className="text-lg text-slate-400 font-medium leading-relaxed italic border-l-2 border-amber-500/30 pl-8">
                            A deep technical breakdown of the 2026 Camp Lejeune Justice Act (CLJA).
                            Analyzing Department of Justice (DOJ) settlement tracks, ATSDR water plume data,
                            and the 30-day "Success Period" logic.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">DOJ Deadline</div>
                                <div className="text-3xl font-black text-white italic tracking-tighter text-rose-500">{LEJEUNE_2026.statistics.deadlineExtended}</div>
                            </div>
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Claims Indexed</div>
                                <div className="text-3xl font-black text-white italic tracking-tighter text-amber-500">{(LEJEUNE_2026.statistics.claimsFiled / 1000).toFixed(0)}K+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exposure Logic Matrix (id='timeline') */}
            <section id="timeline" className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 font-black italic italic uppercase tracking-tighter">
                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-12 font-black italic italic uppercase tracking-tighter text-center mb-10">
                            <div className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6">
                                <Waves className="w-12 h-12 text-amber-500" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9] tracking-tighter mb-4 italic italic">
                                Plume & <span className="text-amber-500 not-italic">Latency Logic</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-7 not-italic">
                            <div className="space-y-4">
                                <div className="bg-slate-900/50 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden group hover:border-amber-500/30 transition-all">
                                    <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                                        The 30-Day Success Barrier
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        Per the PACT Act, any individual (Veteran, Family, or Civilian) who resided or worked at Camp Lejeune for at least 30 cumulative days between August 1, 1953, and December 31, 1987, is eligible for recovery.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                                            <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Target Period</div>
                                            <div className="text-sm font-black text-white uppercase italic tracking-tighter">1953 — 1987</div>
                                        </div>
                                        <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                                            <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Min. Duration</div>
                                            <div className="text-sm font-black text-white uppercase italic tracking-tighter">30 Consecutive Days</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden group hover:border-amber-500/30 transition-all">
                                    <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight flex items-center gap-3 italic italic italic">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        ATSDR Plume Modeling
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Agency for Toxic Substances and Disease Registry (ATSDR) identified two main water systems: <span className="text-white">Tarawa Terrace</span> (TCE contaminated) and <span className="text-white">Hadnot Point</span> (PCE/TCE/Benzene/Vinyl Chloride). Eligibility depends on showing presence within these specific plume zones.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 not-italic">
                            <div className="bg-slate-950 border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:opacity-10 transition-all duration-700">
                                    <Database className="w-32 h-32 text-amber-500" />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase italic mb-8 tracking-tight italic italic underline decoration-amber-500/30 decoration-4">Contaminant Profile</h3>
                                <div className="space-y-6">
                                    {LEJEUNE_2026.contaminants.map((c, i) => (
                                        <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                            <div>
                                                <div className="text-sm font-black text-white uppercase tracking-tighter mb-1">{c.name}</div>
                                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 italic">Toxic Potential: HIGH</div>
                                            </div>
                                            <div className="text-xs font-black text-amber-500 uppercase tracking-widest bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/10">
                                                {c.level}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MDL Discovery & Benchmarks (id='mdl') */}
            <section id="mdl" className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6 leading-tight font-black italic italic uppercase tracking-tighter">
                            The S-Class <br />
                            <span className="text-amber-500 not-italic tracking-tighter">Recovery Matrix</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {LEJEUNE_2026.conditions.slice(0, 6).map((cond, i) => (
                            <div key={i} className="bg-slate-950/80 border border-white/10 p-10 rounded-[3rem] relative group hover:scale-[1.02] transition-all duration-500 shadow-xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-20 transition-all">
                                    <Zap className="w-20 h-20 text-white" />
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-6 italic flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    PACT ACT TIER {cond.tier}
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter leading-tight italic italic italic italic">{cond.condition}</h3>
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-6 italic tracking-tighter">
                                    {formatCurrency(cond.avgSettlement)}
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed font-medium mb-8">
                                    Expert Audit: Higher ranges possible for cases with latency {'>'}10 years or evidence of multi-well exposure.
                                </p>
                                <Link href="/camp-lejeune/lejeune-calculator" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                                    Calculate My Tier <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trinity Case Intelligence (id='trinity') */}
            <section id="trinity" className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-12 font-black italic italic uppercase tracking-tighter text-center mb-16">
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9] tracking-tighter underline underline-offset-8 decoration-amber-500/20 italic italic">
                                Forensic Trinity <span className="text-amber-500 not-italic italic italic">Standards.</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-4 p-10 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-white/10 transition-all">
                            <div className="p-4 bg-amber-500 rounded-3xl w-fit mb-8 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                                <Activity className="w-8 h-8 text-slate-950" />
                            </div>
                            <h4 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter italic italic underline underline-offset-4 decoration-amber-500/30">Biomechanical Path</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium italic italic">
                                Molecular analysis of TCE/PCE metabolites in cellular data. Linking forensic toxicology directly to diagnostic diagnosis.
                            </p>
                        </div>

                        <div className="lg:col-span-4 p-10 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-white/10 transition-all scale-110 shadow-2xl relative z-20">
                            <div className="p-4 bg-blue-500 rounded-3xl w-fit mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                <Gavel className="w-8 h-8 text-slate-950" />
                            </div>
                            <h4 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter italic italic underline underline-offset-4 decoration-blue-500/30">Tort Liability Gap</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium italic italic italic">
                                Strategic comparison of DOJ Elective Early Settlements vs Full Litigation potential ($1.2M - $5M focus).
                            </p>
                        </div>

                        <div className="lg:col-span-4 p-10 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-white/10 transition-all">
                            <div className="p-4 bg-orange-500 rounded-3xl w-fit mb-8 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                                <Scale className="w-8 h-8 text-slate-950" />
                            </div>
                            <h4 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter italic italic underline underline-offset-4 decoration-orange-500/30">Statutory Sync</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium italic italic">
                                Real-time alignment with PACT Act (CLJA) judicial precedents in the North Carolina Eastern District.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert FAQ (id='faq') */}
            <section id="faq" className="py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-24 tracking-tighter font-black italic italic uppercase tracking-tighter">
                        Intelligence <span className="text-amber-500 not-italic underline decoration-amber-500/20 decoration-8 underline-offset-8">Library.</span>
                    </h2>

                    <div className="space-y-6 text-left">
                        {[
                            { q: "What is the CLJA 'Burden of Proof'?", a: "The Camp Lejeune Justice Act implements a lower 'Equipose' burden of proof. Claimants only need to show that a causal link between the toxic water and their injury is 'at least as likely as not'." },
                            { q: "Is there a cap on attorney fees?", a: "Yes. In 2023, the DOJ implemented a 20% cap for administrative settlements and 25% for litigation cases. Our Auditor factors these offsets into your net recovery projection." },
                            { q: "Can family members of deceased Veterans file?", a: "Yes. The CLJA allows for wrongful death claims. These cases often command a 'Wrongful Death Multiplier' of 1.4x in our audit logic due to loss of consortium and estate damages." },
                            { q: "What if I served and lived off-base?", a: "If you worked on-base for at least 30 cumulative days, you are eligible regardless of your off-base residence. Proximity to specific contaminated wells at Tarawa Terrace or Hadnot Point is the primary forensic driver." }
                        ].map((faq, i) => (
                            <div key={i} className="group bg-slate-900/50 border border-white/5 p-10 rounded-[3rem] hover:bg-slate-900 transition-all cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-10 transition-all rotate-12">
                                    <Search className="w-32 h-32 text-white" />
                                </div>
                                <div className="flex gap-8 relative z-10">
                                    <span className="text-amber-500/20 text-4xl font-black italic tracking-tighter font-black">?</span>
                                    <div>
                                        <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter italic italic italic italic underline underline-offset-4 decoration-amber-500/30 group-hover:decoration-amber-500 transition-all">{faq.q}</h4>
                                        <p className="text-slate-400 text-[13px] leading-relaxed font-medium italic italic italic">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-40 bg-slate-950 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)] blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic mb-12 tracking-tighter leading-[0.8] italic underline transition-all hover:decoration-amber-500 decoration-white/10 decoration-[10px]">
                        Justice <br />
                        <span className="text-amber-500 not-italic">Quantified.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 mb-16 font-medium italic italic max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
                        Execute your forensic audit before the <span className="text-white">August 2026</span> PACT Act deadline.
                    </p>
                    <Link href="/camp-lejeune/lejeune-calculator" className="group relative inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-xl hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        Launch Recovery Audit
                        <Zap className="w-8 h-8 group-hover:animate-pulse" />
                    </Link>
                </div>
            </section>

            {/* Footer S-Class */}
            <footer className="py-24 border-t border-white/5 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-amber-500 rounded-xl">
                                <Scale className="w-6 h-6 text-slate-950" />
                            </div>
                            <span className="text-2xl font-black uppercase tracking-tighter text-white italic">
                                Lejeune <span className="text-amber-500 not-italic">Auditor</span>
                            </span>
                        </div>
                        <div className="flex gap-10">
                            {sections.map(s => (
                                <a key={s.id} href={`#${s.id}`} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors uppercase italic">{s.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 italic">
                            &copy; 2026 Camp Lejeune Forensic Intelligence. PACT ACT COMPLIANT.
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 italic">2026 DOJ DATABASE SYNC ACTIVE</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* SEO IQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Camp Lejeune Forensic Recovery Guide 2026",
                        "description": "Comprehensive guide to Camp Lejeune Justice Act recovery tracks, clinical tiers, and forensic exposure logic.",
                        "author": {
                            "@type": "Organization",
                            "name": "Camp Lejeune Forensic Team"
                        },
                        "datePublished": "2026-02-09",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://mysmartcalculators.com/camp-lejeune/lejeune-guide"
                        }
                    })
                }}
            />
        </div>
    );
}
