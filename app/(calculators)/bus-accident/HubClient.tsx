"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE, BUS_2026, formatCurrency } from "@/lib/calculators/bus-accident";
import {
    ArrowRight, Bus, AlertTriangle, Scale, Shield,
    Gavel, Search, BarChart3, Info, Star, CheckCircle2,
    Zap, Eye, Activity, FileText, Globe
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "liability", label: "Regulatory Audit", icon: Gavel },
        { id: "trinity", label: "Trinity Hub", icon: BarChart3 },
        { id: "gap", label: "Valuation Gap", icon: Shield },
        { id: "faq", label: "Case Library", icon: Info },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
            {/* S-Class Premium Navigator */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-2 bg-amber-500 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
                            <Bus className="w-5 h-5 text-slate-950" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                            Bus Accident <span className="text-amber-500 not-italic text-sm ml-1">Auditor v2.1</span>
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors italic">
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <Link href="/bus-accident/calculator" className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Launch Audit
                    </Link>
                </div>
            </nav>

            {/* S-Class Hero Section */}
            <header className="relative pt-48 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 animate-fade-in">
                        <Activity className="w-3 h-3 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">2026 Common Carrier Actuarial Metric</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[0.85] uppercase italic">
                        Bus Accident <br />
                        <span className="text-amber-500 not-italic">Settlement Auditor</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Synthesizing FMCSA safety violations, <span className="text-white italic">Common Carrier liability</span>, and 2026 injury staging metrics into a definitive valuation engine.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/bus-accident/calculator" className="w-full sm:w-auto bg-amber-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)] flex items-center justify-center gap-3 italic">
                            Quantify Case Value <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Global Benchmark Matrix */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Annual Incidents", value: "60K", suffix: "+", color: "text-white" },
                            { label: "High-Imact Multiplier", value: "1.50x", suffix: "", color: "text-amber-500" },
                            { label: "Avg Fatality Payout", style: "italic", value: "$850K", suffix: "+", color: "text-white" },
                            { label: "FMCSA Violation Gap", value: "+35%", suffix: "", color: "text-emerald-500" }
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <p className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter ${stat.color}`}>{stat.value}{stat.suffix}</p>
                                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors italic">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trinity Audit Pillars */}
            <section id="trinity" className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-[11px] font-black text-amber-500 uppercase tracking-[0.4em] italic">The Predator Framework</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-white italic uppercase">Trinity <span className="text-amber-500 not-italic">Asset Audit</span></h3>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            id: "regulatory",
                            title: "Regulatory Audit",
                            desc: "Deep-diver into FMCSA driver logs and maintenance history. Identifying breaches in 'Duty of Care' standards.",
                            icon: Gavel,
                            color: "amber",
                            features: ["FMCSA Safety Rating", "Driver Fatigue Analysis", "Electronic Logging Audit"]
                        },
                        {
                            id: "clinical",
                            title: "Clinical Analysis",
                            desc: "Quantifying orthopedic trauma and spinal displacements against 2026 medical-legal cost codes.",
                            icon: BarChart3,
                            color: "red",
                            features: ["ICD-10 Staging", "Future Neuro Care", "Rehab Cost Projections"]
                        },
                        {
                            id: "statutory",
                            title: "Statutory Defense",
                            desc: "Navigating Sovereign Immunity windows and Common Carrier liability caps for public transit claims.",
                            icon: Shield,
                            color: "blue",
                            features: ["Tort Notice Analysis", "Immunity Cap Mitigation", "Liability Threshold Audit"]
                        }
                    ].map((pillar, i) => (
                        <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] hover:border-amber-500/20 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
                            <div className={`w-16 h-16 rounded-2xl bg-${pillar.color}-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <pillar.icon className={`w-8 h-8 text-${pillar.color}-500`} />
                            </div>
                            <h4 className="text-2xl font-black text-white mb-6 uppercase italic">{pillar.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium italic">{pillar.desc}</p>
                            <ul className="space-y-4">
                                {pillar.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-amber-500/80 transition-all italic">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Representation Valuation Gap */}
            <section id="gap" className="py-32 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                                The Case <br />
                                <span className="text-amber-500 not-italic">Representative Gap</span>
                            </h2>
                            <p className="text-slate-400 text-xl leading-relaxed font-medium italic">
                                In 2026, insurance adjusters devalue Pro Se (unrepresented) bus claims by up to 320%. Expert legal representation triggers the <span className="text-white">Common Carrier Alpha</span> multiplier.
                            </p>
                            <div className="space-y-5">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-black uppercase text-slate-500 italic">Self-Represented Floor</span>
                                    <span className="text-2xl font-black text-slate-400 italic italic">$28,500</span>
                                </div>
                                <div className="p-8 bg-amber-500/10 rounded-3xl border border-amber-500/30 flex items-center justify-between relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-full bg-amber-500/20 blur-3xl group-hover:w-60 transition-all duration-700" />
                                    <div className="relative z-10 flex flex-col">
                                        <span className="text-xs font-black uppercase text-amber-500 italic">Forensic Audit Value</span>
                                        <span className="text-[10px] font-bold text-amber-500/60 uppercase tracking-widest mt-1">S-Class v2.1 Normalized</span>
                                    </div>
                                    <span className="text-4xl font-black text-white italic relative z-10">$102,000+</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-amber-500/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 font-bold" />
                            <div className="bg-slate-950 border border-white/10 p-2 rounded-[3.5rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-500 relative shadow-2xl">
                                <div className="bg-slate-900 rounded-[3rem] p-12 space-y-8">
                                    <div className="flex items-center gap-4 text-[10px] font-black text-amber-500 uppercase tracking-widest italic">
                                        <Shield className="w-5 h-5" /> 2026 Actuarial Verified
                                    </div>
                                    <h4 className="text-3xl font-black text-white uppercase italic leading-tight">Evidence Lock & <br /> FMCSA Discovery</h4>
                                    <p className="text-slate-500 text-sm font-medium leading-[1.8] italic">
                                        Audit-grade analysis of common carrier maintenance logs and driver safety ratings ensures maximum leverage against transit insurance tranches.
                                    </p>
                                    <Link href="/bus-accident/calculator" className="block w-full text-center bg-white text-slate-950 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-500 transition-all italic">
                                        Execute Damages Audit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Case Library (FAQ) */}
            <section id="faq" className="py-32 max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-[11px] font-black text-amber-500 uppercase tracking-[0.4em] italic leading-tight">EEAT Intent Library</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-tight italic">
                            Case <span className="text-amber-500 not-italic">Intelligence Intelligence</span>
                        </h3>
                    </div>
                    <div className="flex items-center gap-4 pb-2">
                        <div className="h-[2px] w-2 media-w-20 bg-amber-500/30" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">2026 Update</span>
                    </div>
                </div>

                <div className="grid gap-8">
                    {[
                        {
                            q: "Why are bus settlements higher than standard car claims?",
                            a: "Buses are classified as 'Common Carriers,' meaning they owe passengers the 'highest duty of care.' A breach that would be minor in a passenger car becomes significant negligence in a bus context, triggering premium multipliers."
                        },
                        {
                            q: "What is the 2026 Sovereign Immunity update for city buses?",
                            a: "Claims against city, county, or state-run transit typically involve 'Sovereign Immunity.' These cases have strictly enforced notice deadlines (often as short as 60 days) and hard payout caps that require strategic clinical evidence to bypass."
                        },
                        {
                            q: "How does the FMCSA Safety Rating affect my case?",
                            a: "If the bus company had a record of safety violations prior to your accident, it establishes a pattern of negligent entrustment. This forensic proof is a primary driver for 'Nuclear Verdict' level settlements."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-[2.5rem] group hover:border-amber-500/20 transition-all relative overflow-hidden">
                            <h4 className="text-xl font-black text-white mb-6 flex items-start gap-4 uppercase italic leading-snug">
                                <span className="text-amber-500">Q.</span> {item.q}
                            </h4>
                            <p className="text-slate-400 text-base leading-[1.8] font-medium pl-10 border-l border-amber-500/20 italic">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* S-Class Footer */}
            <footer className="py-20 border-t border-white/5 bg-slate-950 font-bold">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-xl">
                            <Bus className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                            <span className="text-lg font-black text-white uppercase tracking-tighter italic">Bus Accident <span className="text-amber-500">Calculator</span></span>
                            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-1 italic">Personal Injury Hub 2026</p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <FooterLink label="E-E-A-T Policy" />
                        <FooterLink label="NHTSA Data Sync" />
                        <FooterLink label="Privacy Audit" />
                    </div>
                    <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.2em] italic max-w-sm leading-relaxed uppercase italic">
                        Predator Engine v2.1. Developed for Common Carrier liability audit. Not legal advice.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-8">
                    <RelatedCalculators currentCalc="bus-accident" count={6} />
                </div>
            </footer>
        </div>
    );
}

function FooterLink({ label }: { label: string }) {
    return (
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white cursor-pointer transition-colors italic uppercase">
            {label}
        </span>
    );
}
