"use client";

import React from "react";
import Link from "next/link";
import { SITE, FAQS, EARPLUG_2026 } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowLeft, Scale, Shield, Activity, Info, Gavel } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { ClientOnly } from "@/components/ClientOnly";
import EarplugAuditEngine from "./EarplugAuditEngine";

export default function CalculatorPage() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30 pb-24">
            {/* Header / Nav */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <Link href="/3m-earplug" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Case Intelligence
                </Link>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">
                        <Scale className="w-3.5 h-3.5" />
                        Forensic Actuarial Benchmarks
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase mb-6">
                        Expert <span className="text-indigo-500">Audit Engine.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 font-medium leading-[1.6]">
                        Input your Service-Connected clinical data to determine your **MDL 2885 EPP Tier** placement. S-Class v2.1 uses 2026 disbursement priority logic.
                    </p>
                </div>
            </div>

            {/* Audit Engine Container */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-4 gap-12 items-start">
                    <div className="lg:col-span-3">
                        <ClientOnly
                            fallback={
                                <div className="h-[600px] w-full bg-slate-900/50 animate-pulse rounded-[3rem] flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <Activity className="w-12 h-12 text-indigo-500 animate-spin" />
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Initializing S-Class Audit Engine...</p>
                                    </div>
                                </div>
                            }
                        >
                            <EarplugAuditEngine />
                        </ClientOnly>
                    </div>

                    {/* Sidebar Trust Pins */}
                    <div className="space-y-6 lg:pt-0">
                        <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/5 pb-4">Audit Pillars</h4>
                            {[
                                { label: "EPP Tier Logic", icon: Shield, color: "text-indigo-400" },
                                { label: "VA Audiometry Sync", icon: Activity, color: "text-emerald-400" },
                                { label: "Exposure Delta", icon: Gavel, color: "text-purple-400" }
                            ].map((pin, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className={`p-2 bg-white/5 rounded-xl ${pin.color} group-hover:scale-110 transition-transform`}>
                                        <pin.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{pin.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] space-y-4">
                            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-loose italic">
                                "The Elective Payment Program (EPP) Tier 5 ($100,000) is the highest standard tier. Cases exceeding this are audited for EIF eligibility."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Integration */}
            <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5 mt-24">
                <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-12">Case Intelligence FAQ.</h2>
                <div className="grid gap-12">
                    {FAQS.slice(0, 4).map((faq, i) => (
                        <div key={i} className="space-y-4 group">
                            <h4 className="text-lg font-black text-indigo-400 tracking-tight flex gap-4 lowercase">
                                <span className="opacity-20 text-white font-serif">?</span> {faq.question}
                            </h4>
                            <div className="pl-8 border-l-2 border-indigo-600/20">
                                <p className="text-slate-400 text-sm font-medium leading-loose uppercase tracking-tight">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pt-24">
                <div className="flex justify-center border-t border-white/5 pt-12">
                    <div className="w-full max-w-sm"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div>
                </div>
                <div className="mt-12 opacity-40 hover:opacity-100 transition-opacity">
                    <LegalDisclaimer category="legal" />
                </div>
            </section>
        </div>
    );
}
