"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Activity, ArrowRight, Shield, Heart, Info, FileText, AlertTriangle, Landmark, TrendingUp, CheckCircle } from "lucide-react";

export default function BMIHealthHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8 text-balance">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/bmi" className="inline-flex items-center gap-2 text-[10px] font-black text-green-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "BMI Categories", id: "#categories" },
                                { n: "Health Benefits", id: "#benefits" },
                                { n: "Risk Matrix", id: "#risks" },
                                { n: "Metric Standards", id: "#standards" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-green-500 uppercase tracking-widest mb-2">Audit Status</div>
                            <div className="text-xs font-bold text-white uppercase italic">WHO Guideline Sync Active</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <header className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black text-green-500 uppercase tracking-widest">
                            <Heart className="w-3 h-3" /> Health Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            The BMI <span className="text-green-600 italic">Audit</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Navigating clinical weight classifications and metabolic risk thresholds in the 2026 biometric landscape.
                        </p>
                    </header>

                    {/* Section 1: Categories */}
                    <section id="categories" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white text-sm">1</div>
                            BMI Categories (WHO Standard)
                        </h2>
                        <div className="bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Scale className="w-24 h-24 text-green-500" /></div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-4 text-left text-slate-500 font-black uppercase text-[10px] tracking-widest">Classification</th>
                                            <th className="py-4 text-left text-slate-500 font-black uppercase text-[10px] tracking-widest">Index Range</th>
                                            <th className="py-4 text-left text-slate-500 font-black uppercase text-[10px] tracking-widest">Metabolic Risk</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-bold">
                                        {[
                                            { c: "Underweight", r: "< 18.5", m: "Moderate", s: "text-blue-400" },
                                            { c: "Normal Weight", r: "18.5 - 24.9", m: "Optimal", s: "text-green-400" },
                                            { c: "Overweight", r: "25 - 29.9", m: "Increased", s: "text-yellow-400" },
                                            { c: "Obese Class I", r: "30 - 34.9", m: "High", s: "text-orange-400" },
                                            { c: "Obese Class II", r: "35 - 39.9", m: "Very High", s: "text-red-400" },
                                            { c: "Obese Class III", r: "≥ 40", m: "Nuclear", s: "text-red-500 underline" }
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group/row">
                                                <td className={`py-6 ${row.s} italic tracking-tighter text-lg`}>{row.c}</td>
                                                <td className="py-6 text-white font-mono">{row.r}</td>
                                                <td className="py-6 text-slate-400 group-hover/row:text-white transition-colors uppercase text-[10px] tracking-widest">{row.m}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Benefits */}
                    <div id="benefits" className="p-12 bg-green-900/10 border border-green-500/20 rounded-[4rem] space-y-10 relative overflow-hidden group">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <CheckCircle className="w-48 h-48 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Optimal BMI Advantages</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Vascular Resilience", d: "Reduced arterial plaque accumulation and heart-stress triggers." },
                                { t: "Insulin Sensitivity", d: "Optimal management of glucose disposal and metabolic flow." },
                                { t: "Joint Longevity", d: "Minimizing loading forces on skeletal structures and spinal alignment." },
                                { t: "Restorative Sleep", d: "Significant decrease in obstructive airway events and hypoxic stress." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-green-500 font-black text-sm uppercase tracking-widest italic group-hover:underline underline-offset-4">{item.t}</div>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Health Risks Section */}
                    <section id="risks" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-green-600 decoration-4">The Multi-Risk Audit</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Clinical Biometric Complications</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 bg-red-600/5 border border-red-600/20 rounded-[3rem] space-y-6">
                                <h4 className="text-xl font-black text-red-500 flex items-center gap-3"><AlertTriangle className="w-5" /> High-Cap Risks</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed italic">Type 2 Diabetes, Cardiovascular Decay, Sleep Apnea, and specific inflammatory cancers correlated to visceral adipose tissue.</p>
                            </div>
                            <div className="p-10 bg-blue-600/5 border border-blue-600/20 rounded-[3rem] space-y-6">
                                <h4 className="text-xl font-black text-blue-500 flex items-center gap-3"><Info className="w-5" /> Low-Cap Risks</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed italic">Weakened bone density, immune system vulnerability, fertility complications, and chronic nutrient absorption deficiencies.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Standards */}
                    <section id="standards" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4 italic underline decoration-white/10 underline-offset-8">Clinical Metric Standards</h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 text-lg font-medium leading-[1.8]">
                            <p>
                                Performance in BMI auditing requires understanding the **Quetelet Scale**. While athletes may show higher indices due to muscle density, the 2026 Clinical Baseline utilizes **Waist-to-Height Ratios (WHtR)** as a high-fidelity secondary audit point to isolate abdominal adipose volume.
                            </p>
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8 text-center max-w-2xl mx-auto pb-20">
                        <Link href="/bmi/calculator" className="w-full p-8 bg-green-600 rounded-[3rem] text-center hover:bg-green-500 transition-all group overflow-hidden relative shadow-2xl shadow-green-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Biometric Audit Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
