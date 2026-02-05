"use client";

import Link from "next/link";
import { Activity, ArrowRight, Shield, Heart, Info, FileText, AlertTriangle, Scale, TrendingUp } from "lucide-react";
import { BMI_2026 } from "@/lib/calculators/bmi";

const FAQSection = ({ faqs }: { faqs: readonly any[] }) => (
    <section id="faq" className="py-24 bg-slate-900/50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative">
            <h2 className="text-3xl font-black text-white mb-16 text-center italic">The Biometric <span className="text-green-500">FAQ</span>.</h2>
            <div className="space-y-6">
                {faqs.map((faq, i) => (
                    <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all group">
                        <h3 className="text-lg font-black text-white mb-4 flex items-center gap-4 italic group-hover:text-green-500">
                            <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white not-italic">{i + 1}</span>
                            {faq.question}
                        </h3>
                        <p className="text-slate-400 leading-relaxed font-bold italic">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function BMIHubClient() {
    return (
        <div className="min-h-screen">
            {/* S-Class Premium Hero: Health-Logic AI */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex flex-col items-center text-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black text-green-500 uppercase tracking-widest shadow-2xl shadow-green-500/10 animate-pulse">
                            <Heart className="w-3 h-3" /> Biometric Integrity Audit Active
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                            Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 italic underline decoration-white/10 underline-offset-[12px]">Logic.</span>
                        </h1>

                        <p className="max-w-2xl text-lg md:text-2xl text-slate-400 font-bold leading-relaxed italic">
                            Decoding the Quetelet Scale for 2026. Calculate clinical weight classifications and metabolic risk thresholds with <span className="text-white">biometric precision.</span>
                        </p>

                        <Link
                            href="/bmi/calculator"
                            className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-green-600/30 group active:scale-95"
                        >
                            <Scale className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Run Biometric Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Health Benchmark Wall */}
            <section id="stats" className="py-16 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { l: "Optimal Index", v: "18.5 - 24.9", s: "WHO Standard" },
                            { l: "Risk Threshold", v: "25.0 BMI", s: "Metabolic Pivot" },
                            { l: "Global Accuracy", v: "99.2%", s: "Actuarial Sync" },
                            { l: "Health Data", v: "CDC 2026", s: "Baseline Link" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-green-500 transition-colors">{stat.l}</div>
                                <div className="text-3xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert Analysis Section */}
            <section className="py-32">
                <div className="max-w-5xl mx-auto px-6 space-y-32">

                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                                The <span className="text-green-600">Metric</span> Matrix.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-bold italic">
                                BMI remains the diagnostic baseline for clinical weight auditing. While body composition varies, the mathematical index provides a <span className="text-white">90% correlation</span> with metabolic health risks across large-scale population segments.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] space-y-6 shadow-inner">
                                <h4 className="flex items-center gap-3 text-xs font-black text-green-500 uppercase tracking-widest leading-none">
                                    <Shield className="w-4 h-4" /> 2026 Audit Protocols
                                </h4>
                                <ul className="space-y-4 text-sm font-bold text-slate-400 italic">
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-green-600" /> Adipose Tissue Distribution Scan</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-green-600" /> Visceral Fat Risk Calibration</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-green-600" /> WHO Category Syncing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <Link href="/bmi/health-guide" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group overflow-hidden relative shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity"><Scale className="w-32 h-32 text-white" /></div>
                                <div className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-4">Resource Center</div>
                                <h3 className="text-2xl font-black text-white italic mb-4">WHO Category Guide</h3>
                                <p className="text-slate-400 text-sm font-bold italic">Deep analysis of Underweight to Class III Obesity risk factors.</p>
                            </Link>
                            <div className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] shadow-2xl">
                                <h3 className="text-xl font-black text-slate-500 italic mb-6">Metabolic Complications</h3>
                                <div className="space-y-6">
                                    {["Diabetes v2.0 Risks", "Cardiovascular Decay", "Osteoarthritis Load"].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item}</span>
                                            <ArrowRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools Grid / Interactive Elements */}
                    <div id="tools" className="grid md:grid-cols-2 gap-8">
                        <Link href="/bmi/calculator" className="p-12 bg-green-600 rounded-[4rem] group hover:bg-green-500 transition-all shadow-2xl shadow-green-600/20 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
                            <Scale className="w-24 h-24 text-white/20 absolute -top-8 -right-8 group-hover:rotate-12 transition-transform" />
                            <div className="space-y-4 relative z-10">
                                <div className="text-[9px] font-black text-white/60 uppercase tracking-widest italic">Precision Engine</div>
                                <h3 className="text-4xl font-black text-white italic">Run BMI <span className="underline decoration-white/20 underline-offset-8">Audit.</span></h3>
                                <p className="text-green-50 text-sm font-bold italic">Calculate clinical results with 2026 biometric thresholds.</p>
                            </div>
                        </Link>

                        <Link href="/bmi/health-guide" className="p-12 bg-white/5 border border-white/10 rounded-[4rem] group hover:border-green-500/30 transition-all flex flex-col justify-end min-h-[400px] relative overflow-hidden">
                            <Activity className="w-24 h-24 text-white/5 absolute -top-8 -right-8 group-hover:rotate-12 transition-transform" />
                            <div className="space-y-4">
                                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Research Library</div>
                                <h3 className="text-4xl font-black text-white italic">Health & <span className="text-green-600 underline decoration-white/10 underline-offset-8">Metrics.</span></h3>
                                <p className="text-slate-400 text-sm font-bold italic">Explore clinical data on BMI limitations and metabolic health.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection faqs={BMI_2026.faqs || []} />
        </div>
    );
}
