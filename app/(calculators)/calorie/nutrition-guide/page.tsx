"use client";

import Link from "next/link";
import {
    ArrowLeft, ArrowRight, Flame, FileText, CheckCircle,
    Zap, Microscope, Heart, Target, Apple, Landmark,
    Shield, TrendingUp, Sparkles, Scale, Info, Globe,
    Calculator
} from "lucide-react";
import { SITE, CALORIE_2026, formatNumber } from "@/lib/calculators/calorie";

export default function NutritionGuidePage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 pb-24">
            {/* S-Class Header */}
            <header className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 mb-16">
                <div className="space-y-2">
                    <Link
                        href="/calorie"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-500 transition-colors font-black uppercase tracking-widest text-[10px]"
                    >
                        <ArrowLeft className="w-3 h-3" /> Metabolic Hub
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Metabolic <span className="text-amber-500 italic">Guide</span> 2026.
                    </h1>
                    <p className="text-slate-500 font-bold text-sm italic">
                        Deconstructing the thermodynamic architecture of human survival.
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Microscope className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Research Archive</p>
                        <p className="text-sm font-black text-white uppercase tracking-tighter">2026 DATA DEPLOYED</p>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 space-y-24">
                {/* 1. Energy Flux Baseline */}
                <section className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-3xl w-fit">
                            <Landmark className="w-8 h-8 text-amber-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                            Institutional <br /> Energy Flux Baselines
                        </h2>
                        <div className="h-1 w-20 bg-amber-500 rounded-full" />
                        <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                            Universal benchmarks derived from USDA and WHO 2026 surveillance data for healthy sedentary populations.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 text-center group hover:border-amber-500/30 transition-all">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Male Delta (Avg)</p>
                            <p className="text-5xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tabular-nums">
                                {formatNumber(CALORIE_2026.statistics.recommendedMen)}
                            </p>
                            <p className="text-[10px] text-slate-500 font-black mt-2 uppercase italic tracking-tighter">kcal per 24h cycle</p>
                        </div>
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 text-center group hover:border-amber-500/30 transition-all">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Female Delta (Avg)</p>
                            <p className="text-5xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tabular-nums">
                                {formatNumber(CALORIE_2026.statistics.recommendedWomen)}
                            </p>
                            <p className="text-[10px] text-slate-500 font-black mt-2 uppercase italic tracking-tighter">kcal per 24h cycle</p>
                        </div>
                    </div>
                </section>

                {/* 2. Macro Architecture - FIX ERROR HERE */}
                <section className="space-y-12">
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                        <h2 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-3">
                            <Target className="w-8 h-8 text-amber-500" />
                            Macro-Composition Architecture
                        </h2>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Balanced Audit Standard</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                label: "Protein Architecture",
                                ratio: CALORIE_2026.macroBlueprints.balanced.p,
                                icon: Heart,
                                color: "text-blue-500",
                                desc: "Structural integrity and metabolic preservation."
                            },
                            {
                                label: "Carbohydrate Flux",
                                ratio: CALORIE_2026.macroBlueprints.balanced.c,
                                icon: Zap,
                                color: "text-amber-500",
                                desc: "Primary kinetic energy and neural fuel."
                            },
                            {
                                label: "Lipid Equilibrium",
                                ratio: CALORIE_2026.macroBlueprints.balanced.f,
                                icon: Shield,
                                color: "text-purple-500",
                                desc: "Hormonal regulation and cellular signaling."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center text-center group hover:bg-slate-950 transition-all">
                                <div className={`p-4 bg-black/40 border border-white/5 rounded-2xl mb-8 group-hover:border-amber-500/30 transition-all ${item.color}`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{item.label}</h3>
                                <p className="text-3xl font-black text-white mb-6 uppercase tabular-nums">{Math.round(item.ratio * 100)}%</p>
                                <p className="text-xs text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Thermodynamic Protocols */}
                <section className="relative p-12 bg-slate-900 border border-white/5 rounded-[4rem] overflow-hidden">
                    <div className="absolute top-0 right-0 p-16 opacity-5 scale-150 rotate-12">
                        <Scale className="w-48 h-48 text-amber-500" />
                    </div>
                    <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-12 space-y-12">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Biological Optimization Protocols</h2>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Strategic directives for sustainable metabolic health</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Whole Food Architecture", desc: "Prioritize ingredients with zero industrial processing to maximize micronutrient density." },
                                    { title: "Hydration Equilibrium", desc: "Maintain cellular hydration (3-4L daily) to facilitate efficient lipid lipolysis." },
                                    { title: "Protein Prioritization", desc: "Distribute protein intake evenly across windows to stimulate muscle synthesis." },
                                    { title: "Complex Glycogen Flux", desc: "Source carbohydrates from slow-release conduits to avoid insulin spikes." },
                                    { title: "Gastric Volume Signaling", desc: "Increase vegetable fiber to trigger early leptin (satiety) neural responses." },
                                    { title: "Circadian Fueling", desc: "Align carbohydrate ingestion with periods of highest kinetic activity." }
                                ].map((tip, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-black/40 border border-white/5 rounded-3xl hover:border-amber-500/20 transition-all group">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">{tip.title}</h4>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed italic">{tip.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Final CTA */}
                <section className="text-center py-24 space-y-10 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <h2 className="text-5xl font-black text-white tracking-tighter leading-none relative z-10">
                        Ready to Map Your <br /> <span className="text-amber-500 italic">Survival Energy?</span>
                    </h2>
                    <div className="flex flex-col items-center gap-8 relative z-10">
                        <Link
                            href="/calorie/calculator"
                            className="bg-amber-600 hover:bg-amber-500 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-amber-600/30 flex items-center gap-3 active:scale-95"
                        >
                            <Calculator className="w-6 h-6" />
                            Initialize Precision Audit
                        </Link>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.4em] italic leading-none">
                            Validated via USDA Directive 2026.04
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
