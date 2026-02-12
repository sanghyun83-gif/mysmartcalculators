"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, FileText, CheckCircle, Zap, Shield, Globe, Scale } from "lucide-react";
import { SITE, TIP_2026 } from "@/lib/calculators/tip";

export default function TippingGuidePage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200">
            {/* Sub-Header / Breadcrumb */}
            <nav className="bg-slate-900/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/tip" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                                <FileText className="w-5 h-5 text-amber-500" />
                            </div>
                            <div>
                                <h1 className="text-sm font-black text-white uppercase tracking-tighter">Tipping <span className="text-amber-500">Audit Guide</span></h1>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">2026 Standardized Protocols</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Live Standard</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-16">
                {/* Hero section for Guide */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-amber-500" />
                        <span className="text-xs text-amber-400 font-black uppercase tracking-[0.2em]">Institutional Accuracy Guaranteed</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                        Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Reciprocity</span> Guide
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium italic">
                        The definitive 2026 data-grid for hospitality, personal care, and specialized service tranches.
                    </p>
                </div>

                {/* Standard Tips Grid */}
                <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm mb-12 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                        <Globe className="w-64 h-64 text-amber-500" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
                            <Zap className="w-6 h-6 text-amber-500" /> Standard Gratuity Tranches
                        </h2>

                        <div className="grid gap-4">
                            {TIP_2026.tipPercentages.map((tip) => (
                                <div
                                    key={tip.service}
                                    className="flex items-center justify-between p-6 bg-black/20 hover:bg-amber-500/5 border border-white/5 hover:border-amber-500/20 rounded-3xl transition-all group/item"
                                >
                                    <div className="space-y-1">
                                        <p className="text-white font-black uppercase tracking-widest text-sm group-hover/item:text-amber-400 transition-colors">{tip.service}</p>
                                        <p className="text-xs text-slate-500 font-bold italic">{tip.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                            {tip.percent}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Services Matrix */}
                <section className="grid lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] p-10">
                        <h2 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter">
                            <Scale className="w-5 h-5 text-amber-500" /> Specialized Service Audit
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                { label: "Hair Stylist", val: "15-20%" },
                                { label: "Spa Services", val: "15-20%" },
                                { label: "Taxi/Rideshare", val: "15-20%" },
                                { label: "Valet Parking", val: "$2-5" },
                                { label: "Hotel Housekeeping", val: "$2-5/night" },
                                { label: "Bellhop", val: "$1-2/bag" },
                                { label: "Coffee Shop", val: "$1-2" },
                                { label: "Movers", val: "$20-40 ea" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                                    <span className="text-sm font-black text-amber-500">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-amber-900/20">
                        <div className="space-y-4">
                            <Shield className="w-10 h-10 opacity-50 text-white" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">The Golden Rule of Service</h3>
                            <p className="text-xs font-bold leading-relaxed opacity-80 italic">
                                "Gratuity is a reflection of respect. In 2026, the standard remains 20% for excellent technical execution."
                            </p>
                        </div>
                        <div className="pt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                            <CheckCircle className="w-3 h-3 text-white" /> 2026 Institutional Source
                        </div>
                    </div>
                </section>

                {/* Tipping Etiquette Block */}
                <section className="bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] p-10 mb-16">
                    <h2 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter">
                        <CheckCircle className="w-6 h-6 text-amber-500" /> Audit Best Practices
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Always tip in cash when possible",
                            "Tip on pre-tax amount (Standard)",
                            "Adjust for technical mastery",
                            "Check if gratuity is pre-included",
                            "Round up for auditing ease",
                            "Reciprocity over obligation"
                        ].map((tip, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-black/20 rounded-2xl border border-white/5">
                                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{tip}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="text-center space-y-12">
                    <div className="h-px w-20 bg-amber-500 mx-auto opacity-30" />
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Ready to Execute?</h3>
                        <Link
                            href="/tip/calculator"
                            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-12 py-5 rounded-[2.5rem] font-black text-lg transition-all hover:scale-105 shadow-2xl shadow-amber-600/30 group active:scale-95"
                        >
                            Initialize Audit Engine
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Institutional Citation */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center md:text-left">
                        {TIP_2026.citation}
                    </p>
                    <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="text-[8px] font-black px-2 py-1 border border-white/20 rounded">EMILY POST</div>
                        <div className="text-[8px] font-black px-2 py-1 border border-white/20 rounded">US-DOL</div>
                        <div className="text-[8px] font-black px-2 py-1 border border-white/20 rounded">NRA-2026</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
