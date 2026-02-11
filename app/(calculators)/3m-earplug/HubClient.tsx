"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    SITE,
    CALCULATORS,
    HEARING_CONDITIONS,
    EPP_TIERS,
    FAQS,
    EARPLUG_2026,
    formatCurrency
} from "@/lib/calculators/3m-earplug";
import {
    Shield,
    Activity,
    Zap,
    Gavel,
    ChevronRight,
    ArrowRight,
    Ear,
    Info,
    Scale,
    Stethoscope,
    Users,
    AlertCircle,
    TrendingUp,
    FileText
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30">
            {/* 1. S-Class Predator Hero (Cinema-Dark Royale) */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4 animate-pulse">
                            <Zap className="w-3.5 h-3.5" />
                            MDL 2885 Disbursement Sync 2026
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                            3M Combat Arms <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 italic">Settlement Auditor.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
                            High-fidelity valuation for <span className="text-white">Veterans Hearing Loss & Tinnitus</span>. Analyze your EPP Tier placement using official MDL 2885 protocols and forensic clinical benchmarks.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/3m-earplug/calculator" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                                Launch Expert Audit <ChevronRight className="w-5 h-5" />
                            </Link>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <Shield className="w-4 h-4 text-indigo-500" /> Secure MDL Sync
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <Activity className="w-4 h-4 text-emerald-500" /> Funds Disbursing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Anchor Navigator (Sticky Sub-Nav) */}
            <div className={`sticky top-[70px] z-[110] transition-all duration-300 border-b border-white/5 py-4 hidden md:block ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-12 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
                    <a href="#stats" className="hover:text-indigo-400 transition-colors cursor-pointer">Settlement Metrics</a>
                    <a href="#matrix" className="hover:text-indigo-400 transition-colors cursor-pointer">EPP Tier Matrix</a>
                    <a href="#trinity" className="hover:text-indigo-400 transition-colors cursor-pointer">Trinity Audit</a>
                    <a href="#faq" className="hover:text-indigo-400 transition-colors cursor-pointer">Case Intelligence</a>
                </div>
            </div>

            {/* 2. Settlement Pulse Board */}
            <section id="stats" className="py-12 bg-black/40 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full bg-indigo-500/5 blur-[100px]" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "Global Settlement", value: `$${(EARPLUG_2026.statistics.settlementAmount / 1e9).toFixed(2)}B`, detail: "MDL 2885 Total" },
                            { label: "Participation Rate", value: EARPLUG_2026.statistics.eppParticipation, detail: "EPP Enrollment" },
                            { label: "Avg Tier Payout", value: formatCurrency(EARPLUG_2026.statistics.avgPayoutEstimate), detail: "2026 Estimate" },
                            { label: "Current Status", value: EARPLUG_2026.statistics.status, detail: "Verified Claims" }
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default border-l border-indigo-500/20 pl-6 space-y-1 hover:border-indigo-500 transition-colors">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                                <p className="text-[10px] font-bold text-indigo-500/60 uppercase">{stat.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. EPP Settlement Matrix (The Core Discovery) */}
            <section id="matrix" className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">The Anatomy <br />of EPP Tiers.</h2>
                            <div className="h-1.5 w-24 bg-indigo-600 rounded-full" />
                        </div>

                        <div className="prose prose-invert prose-slate text-lg font-medium leading-[1.8] text-slate-400 space-y-8">
                            <p>
                                The 3M Earplug settlement is structured around the **Elective Payment Program (EPP)**, which classifies claimants into defined levels based on the decibel (dB) threshold of their hearing loss and the presence of tinnitus.
                            </p>
                            <p>
                                In 2026, the S-Class auditor accounts for the **Expert Delta**—the difference between the EPP base offer and the potential litigation value of your individual case, especially for those in high-severity brackets.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {CALCULATORS.map((calc, i) => {
                                const Icon = calc.icon;
                                return (
                                    <Link key={i} href={`/${calc.id}`} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                                        <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">{calc.name}</h4>
                                            <p className="text-sm text-slate-500 font-bold">{calc.description}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="sticky top-12 p-12 bg-slate-900 border border-indigo-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-all">
                            <Ear className="w-64 h-64 text-indigo-600" />
                        </div>
                        <div className="relative z-10 space-y-10">
                            <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">EPP <span className="text-indigo-500">Tier Matrix.</span></h3>
                            <p className="text-slate-400 font-bold italic text-sm border-l-2 border-indigo-500 pl-6 leading-loose">
                                "99% of claimants are now being processed through the EPP fixed-payment tiers. Level 5 cases are prioritized for disbursement."
                            </p>

                            <div className="space-y-4">
                                {EPP_TIERS.map((tier, i) => (
                                    <div key={i} className={`p-6 rounded-3xl border transition-all ${i === 4 ? "bg-indigo-500/10 border-indigo-500/30" : "bg-black/40 border-white/5"}`}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{tier.name}</span>
                                            <span className="text-xl font-black text-white">{formatCurrency(tier.base)}</span>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-600 uppercase">{tier.description}</p>
                                    </div>
                                ))}

                                <div className="p-6 bg-indigo-600 rounded-3xl shadow-xl space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[11px] font-black uppercase text-white/80 tracking-widest">Representative Premium</span>
                                        <span className="px-2 py-1 bg-white text-[10px] font-black text-indigo-600 rounded">UP TO 3.5X</span>
                                    </div>
                                    <p className="text-[10px] text-white/60 font-medium leading-relaxed uppercase">
                                        Forensic documentation of audiology thresholds often unlocks higher tier placement or EIF eligibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Trinity Audit (id='trinity') */}
            <section id="trinity" className="py-32 bg-slate-900/10 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                    <div className="text-center space-y-4">
                        <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic">Trinity Audit.</h2>
                        <p className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em]">3M MDL Forensic Framework</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                id: "01",
                                title: "Clinical / Audiometry",
                                icon: Stethoscope,
                                desc: "Analysis of dB threshold shifts and speech discrimination scores compared to military induction benchmarks.",
                                entities: ["dB Threshold Shift", "Tinnitus Documentation"]
                            },
                            {
                                id: "02",
                                title: "Statutory / EPP Sync",
                                icon: Shield,
                                desc: "Synchronization with MDL 2885 Elective Payment Program (EPP) Tier classifications and eligibility gates.",
                                entities: ["Tier 1-5 Mapping", "EPP Status Audit"]
                            },
                            {
                                id: "03",
                                title: "Exposure / Liability",
                                icon: Gavel,
                                desc: "Forensic verification of CAEv2 issuance, combat environment decibel levels (HE), and duration of active use.",
                                entities: ["OEF/OIF Exposure", "CAEv2 Logs"]
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-indigo-500/5 transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 italic scale-150 group-hover:text-indigo-500/10 transition-colors">{pillar.id}</div>
                                <div className="mb-8">
                                    <pillar.icon className="w-12 h-12 text-indigo-500 group-hover:scale-110 transition-transform" />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-6 italic tracking-tighter uppercase leading-none">{pillar.title}</h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 relative z-10">{pillar.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.entities.map((e, j) => (
                                        <span key={j} className="text-[8px] font-black uppercase px-2 py-1 bg-white/5 border border-white/10 text-slate-500 rounded-full tracking-widest">{e}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Case Intelligence FAQ */}
            <section id="faq" className="py-32 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-1 bg-indigo-600 rounded-full" />
                        <h2 className="text-4xl font-black text-white tracking-widest uppercase italic leading-none">Case Intelligence.</h2>
                    </div>

                    <div className="grid gap-12 pt-8 border-t border-white/5">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="group cursor-help space-y-4">
                                <h4 className="text-xl font-black text-indigo-400 tracking-tight flex gap-4 lowercase">
                                    <span className="opacity-20 text-white font-serif">?</span> {faq.question}
                                </h4>
                                <div className="pl-8 border-l-2 border-indigo-600/20">
                                    <p className="text-slate-400 text-sm font-medium leading-loose group-hover:text-slate-300 transition-colors uppercase tracking-tight">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Legal CTA */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-20 bg-gradient-to-br from-indigo-600 to-slate-950 rounded-[5rem] text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_rgba(79,70,229,0.3)] border border-indigo-500/20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">Secure an Expert <br />3M EPP Audit.</h2>
                            <p className="text-indigo-100 text-xl font-bold max-w-2xl mx-auto leading-relaxed italic opacity-80">
                                Access the S-Class EPP Classification Logic. Estimate your disbursement tier based on forensic 2026 hearing loss data.
                            </p>
                            <Link href="/3m-earplug/calculator" className="inline-flex items-center gap-4 bg-white text-indigo-900 px-16 py-8 rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl">
                                Start Audit Engine <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-24 border-t border-white/5 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
                    <div className="flex justify-center items-center gap-3">
                        <Ear className="w-6 h-6 text-indigo-500" />
                        <span className="text-xl font-black text-white tracking-widest uppercase italic">3M Combat Arms Auditor.</span>
                    </div>
                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] max-w-3xl mx-auto leading-loose">
                        MDL 2885 Official Sync • Not Legal Advice • Professional Actuarial Estimate Only • Strictly Confidential Forensic Processing
                    </p>
                    <div className="pt-12 flex justify-center gap-12 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        <Link href="/hearing-loss-calculator" className="hover:text-indigo-400">VA Hearing Loss</Link>
                        <Link href="/tinnitus" className="hover:text-indigo-400">Tinnitus Rating</Link>
                        <Link href="/burn-injury" className="hover:text-indigo-400">Combat Injury</Link>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-8">
                    <RelatedCalculators currentCalc="3m-earplug" count={6} />
                </div>
            </footer>
        </div>
    );
}
