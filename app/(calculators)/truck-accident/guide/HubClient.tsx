"use client";

import React from 'react';
import Link from 'next/link';
import {
    Truck,
    Shield,
    Gavel,
    Activity,
    CheckCircle2,
    ArrowRight,
    Zap,
    Scale,
    FileText,
    Info,
    Search,
    AlertTriangle,
    Database,
    HardHat,
    Target,
    Stethoscope
} from 'lucide-react';
import { TRUCK_2026, formatCurrency } from '@/lib/calculators/truck-accident';

export default function GuideHub() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
            {/* 1. Forensic Guide Hero */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-3xl space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
                            <Database className="w-3.5 h-3.5" />
                            Forensic Intelligence Standard v2.1
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] italic uppercase">
                            Trucking <br />
                            <span className="text-blue-500">Liability.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium italic max-w-2xl">
                            Decoding the complexity of **Commercial Federal Regulations (FMCSA)** and multi-layer carrier insurance structures.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. The Liability Trinity Frame (id="trinity") */}
            <section id="trinity" className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
                <div className="grid lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Regulatory Audit",
                            icon: Gavel,
                            pillars: ["FMCSA Safety Violations", "Hours of Service (HOS)", "CDL Qualification Audit"],
                            color: "text-blue-500"
                        },
                        {
                            title: "Forensic Audit",
                            icon: Activity,
                            pillars: ["Black Box (EDR) Extraction", "Brake System Analysis", "Biomechanical Proof"],
                            color: "text-indigo-500"
                        },
                        {
                            title: "Exposure Audit",
                            icon: Shield,
                            pillars: ["Primary $1M Policy", "Excess/Umbrella Layers", "Corporate Asset Shield"],
                            color: "text-emerald-500"
                        }
                    ].map((card, i) => (
                        <div key={i} className="bg-slate-900 border border-white/10 p-10 rounded-[3.5rem] space-y-8 shadow-2xl group hover:border-blue-500/30 transition-all">
                            <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-blue-500/10 transition-colors">
                                <card.icon className={`w-8 h-8 ${card.color}`} />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">{card.title}.</h3>
                            <ul className="space-y-4">
                                {card.pillars.map((p, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                                        <span className="text-xs font-bold text-slate-500 uppercase leading-snug tracking-wider italic">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. FMCSA Safety Pillars (id="fmcsa") */}
            <section id="fmcsa" className="py-32 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    The <span className="text-blue-500">FMCSA</span> <br />
                                    Safety Breach.
                                </h2>
                                <p className="text-lg text-slate-400 font-medium italic">
                                    Federal trucking regulations are the **"Absolute Liability"** triggers of the industry. A single safety breach can multiply case value by 2x.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Hours of Service (HOS)", desc: "Exceeding driving time limits causes catastrophic fatigue-related impact.", icon: Zap },
                                    { title: "Negligent Maintenance", desc: "Skipped inspections on brakes or tires transform accidents into 'Foreseeable Events'.", icon: Search },
                                    { title: "Illegal Hiring", desc: "Failing to verify a driver's background or past drug violations.", icon: AlertTriangle }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl flex items-start gap-6 group hover:bg-slate-900 transition-colors">
                                        <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20">
                                            <item.icon className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-2">{item.title}</h4>
                                            <p className="text-xs font-bold text-slate-600 italic uppercase leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-[4rem] blur-3xl" />
                            <div className="relative bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-12 opacity-5">
                                    <FileText className="w-80 h-80" />
                                </div>
                                <div className="space-y-8 relative">
                                    <h3 className="text-3xl font-black text-white tracking-tighter italic uppercase">Absolute Liability Matrix.</h3>
                                    <p className="text-slate-400 font-medium italic leading-relaxed">
                                        "When a carrier violates FMCSA Part 395, the legal burden shifts. The question is no longer IF they are liable, but HOW MUCH they must pay in punitive damages."
                                    </p>
                                    <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                                        <div>
                                            <div className="text-[10px] font-black text-blue-500 uppercase mb-2">Multiplier Alpha</div>
                                            <div className="text-3xl font-black text-white italic tracking-tighter">1.5x - 3x</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-red-500 uppercase mb-2">Verdict Bias</div>
                                            <div className="text-3xl font-black text-white italic tracking-tighter">Nuclear</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Settlement Valuation Matrix (id="benchmarks") */}
            <section id="benchmarks" className="py-32 bg-slate-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-500/20 underline-offset-[20px]">Actuarial Benchmarks.</h2>
                        <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] pt-8">National Median Payouts (S-Class Calibrated)</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { injury: "Whiplash / Soft Tissue", range: "$50K - $125K", audit: "Low Policy Risk" },
                            { injury: "Fracture / Internal", range: "$150K - $750K", audit: "Moderate Risk" },
                            { injury: "TBI / Spinal Surgery", range: "$750K - $3.5M", audit: "High Policy Event" },
                            { injury: "Permanent Disability", range: "$3.5M - $25M+", audit: "Nuclear Trigger" }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded-[3rem] space-y-4 hover:border-blue-500/40 transition-all text-center">
                                <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{item.injury}</span>
                                <div className="text-2xl font-black text-white italic tracking-tighter">{item.range}</div>
                                <div className="text-[8px] font-bold text-slate-700 uppercase tracking-widest bg-black/40 py-1.5 rounded-lg">{item.audit}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The Black Box Intelligence (id="edr") */}
            <section id="edr" className="py-32 bg-[#020617] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-16 bg-slate-900 border border-white/10 rounded-[4rem] lg:flex gap-20 items-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 transition-all group-hover:w-4" />

                        <div className="lg:w-1/2 space-y-8 relative z-10">
                            <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Black Box <br />
                                <span className="text-blue-500">Forensics.</span>
                            </h3>
                            <p className="text-slate-400 font-medium italic leading-relaxed">
                                Every modern semi-truck contains an **Event Data Recorder (EDR)**. We extract velocity, braking, and steering data to prove negligence beyond a reasonable shadow of a doubt.
                            </p>
                            <Link href="/truck-accident/settlement-calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all italic">
                                Run Forensic Audit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-2 gap-4 relative z-10">
                            {[
                                { label: "Delta-V Speed", icon: Activity },
                                { label: "Brake Application", icon: Search },
                                { label: "Steering Angle", icon: Target },
                                { label: "Throttle %", icon: Zap }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-black/40 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-3">
                                    <stat.icon className="w-6 h-6 text-blue-500" />
                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Verdict Intelligence CTA */}
            <section className="py-32 bg-slate-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic uppercase leading-none">
                            Demand a <span className="text-blue-500">Forensic Audit.</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-medium italic leading-relaxed uppercase">
                            Don't accept a standard settlement for a corporate safety violation. Standardize your claim with the S-Class Audit Engine today.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <Link href="/truck-accident/settlement-calculator" className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-900/40 italic">
                            Quantify My Claim Now
                        </Link>
                        <Link href="/truck-accident" className="px-12 py-6 bg-slate-900 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-white/20 transition-all italic">
                            Return to Intelligence Hub
                        </Link>
                    </div>

                    <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] italic pt-12">
                        Certified Forensic Cargo Intelligence • 2026 MDM Standard
                    </p>
                </div>
            </section>
        </div>
    );
}
