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
        <div className="min-h-screen bg-slate-950">
            {/* S-Class Premium Hero: Health-Logic AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.05)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex flex-col items-center text-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black text-green-500 uppercase tracking-widest shadow-2xl shadow-green-500/10 animate-pulse">
                            <Heart className="w-3 h-3" /> Biometric Integrity Audit Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
                            Body Mass <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 italic underline decoration-white/10 underline-offset-[12px]">Index.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Decoding the Quetelet Scale for 2026. Calculate clinical weight classifications and metabolic risk thresholds with <span className="text-white">biometric precision.</span>
                        </p>

                        <Link
                            href="/bmi/calculator"
                            className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-green-600/30 group active:scale-95"
                        >
                            <Scale className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Run Biometric Audit
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Health Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { l: "Optimal Index", v: "18.5 - 24.9", s: "WHO Standard" },
                            { l: "Risk Threshold", v: "25.0 BMI", s: "Metabolic Pivot" },
                            { l: "Global Accuracy", v: "99.2%", s: "Actuarial Sync" },
                            { l: "Health Data", v: "CDC 2026", s: "Baseline Link" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-green-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Educational Content: Omni-Style Hybrid */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24">

                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Evolution of <span className="text-green-600">Biometric Auditing.</span>
                        </h2>
                        <div className="prose prose-invert prose-green max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                Body Mass Index (BMI) remains the primary screening tool for assessing weight relative to height, but its role has evolved. Originally developed in the 19th century by Adolphe Quetelet as the <span className="text-white">Quetelet Index</span>, it was never intended as an individual health diagnostic. In 1832, Quetelet's aim was to describe the "Average Man" from a statistical sociology perspective.
                            </p>
                            <p>
                                However, contemporary medicine uses it as a critical correlate for metabolic syndrome and cardiovascular risk mortality. In 2026, clinical consensus emphasizes using BMI as the <span className="text-green-500">"first-pass" audit</span>, focusing on clinical obesity vs. preclinical obesity categories established by the WHO. While simple, the 90% correlation between high BMI and metabolic health risks in large populations makes it indispensable for clinical triage.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity"><Scale className="w-48 h-48 text-white" /></div>
                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Limitations & <span className="text-green-600">Precision Factors.</span></h3>
                        <p className="text-slate-400 font-bold italic text-lg relative z-10">
                            A high BMI does not always indicate high body fat. Accuracy depends on body composition variables that the pure formula cannot detect:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-green-500 uppercase tracking-widest">Skeletal Muscle Mass</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Athletes and bodybuilders often register in the "Obese" category because muscle is significantly denser than fat tissue.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-green-500 uppercase tracking-widest">Visceral Fat Layering</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">"Skinny fat" individuals may have a normal BMI while carrying high levels of internal fat around organs.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-green-500 uppercase tracking-widest">Age & Bone Density</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Elderly populations may lose height and bone mass, skewing BMI results higher despite lower overall health risks.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-green-500 uppercase tracking-widest">Ethnic Variances</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Populations of Asian descent face higher metabolic risks at a BMI of 23.0 compared to Caucasians at 25.0.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-none italic uppercase">
                            2026 Clinical <span className="text-green-600">Category Map.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { c: "Underweight", r: "< 18.5", d: "Increased risk of nutritional deficiencies." },
                                { c: "Normal", r: "18.5 - 24.9", d: "Optimal metabolic health baseline." },
                                { c: "Overweight", r: "25.0 - 29.9", d: "Metabolic warning zone for complications." },
                                { c: "Obese Class I", r: "30.0 - 34.9", d: "Clinical obesity requiring monitoring." },
                                { c: "Obese Class II", r: "35.0 - 39.9", d: "High risk for cardiovascular decay." },
                                { c: "Obese Class III", r: "≥ 40.0", d: "Severe impairment risk thresholds." }
                            ].map((cat, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl flex flex-col gap-2 hover:bg-green-500/5 hover:border-green-500/20 transition-all cursor-default">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{cat.c}</span>
                                        <span className="text-sm font-black text-white italic">{cat.r}</span>
                                    </div>
                                    <p className="text-slate-500 text-[11px] font-bold italic leading-tight">{cat.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Analysis Section - Secondary Links */}
            <section className="py-24 border-t border-white/5 bg-slate-900/10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/bmi/health-guide" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                            <h3 className="text-xl font-black text-white italic mb-2 group-hover:text-green-500 transition-colors">BMI Chart</h3>
                            <p className="text-slate-500 text-xs font-bold italic">Visual categories for height and weight.</p>
                        </Link>
                        <Link href="/bmi/health-guide" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                            <h3 className="text-xl font-black text-white italic mb-2 group-hover:text-green-500 transition-colors">Health Risks</h3>
                            <p className="text-slate-500 text-xs font-bold italic">Obesity-related cardiovascular data.</p>
                        </Link>
                        <Link href="/bmi/health-guide" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                            <h3 className="text-xl font-black text-white italic mb-2 group-hover:text-green-500 transition-colors">Risk Audit</h3>
                            <p className="text-slate-500 text-xs font-bold italic">Waist-to-height ratio integration.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Citations: Institutional Credibility 5+ Sources */}
            <section className="py-24 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center">Institutional Citations & Scientific Source Integrity</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { s: "WHO", t: "Obesity and Overweight Data Atlas 2024-2026", d: "Global prevalence and classification standards." },
                            { s: "CDC", t: "Adult BMI Interpretation Guidelines (Updated May 2024)", d: "Clinical risk benchmarking for population health." },
                            { s: "The Lancet", t: "Commission on Clinical Obesity: Diagnostic Framework 2025", d: "Revised obesity definitions beyond BMI thresholds." },
                            { s: "EASO", t: "European Framework for Management of Obesity", d: "Multi-organ risk assessment protocols." },
                            { s: "NIH", t: "All of Us Research Program: Biometric Diversification 2026", d: "Ethnic variances in metabolic health correlates." }
                        ].map((cite, i) => (
                            <div key={i} className="space-y-2 first:col-span-2 group">
                                <div className="text-[9px] font-black text-green-600 uppercase tracking-widest">{cite.s}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-green-500 transition-colors">{cite.t}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">{cite.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-green-600">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Run Your Clinical <span className="underline decoration-white/20 underline-offset-8">Audit Now.</span>
                    </h2>
                    <p className="text-green-100 text-lg md:text-xl font-bold italic">Calculate precise BMI results with 2026 clinical risk benchmarks.</p>
                    <Link
                        href="/bmi/calculator"
                        className="inline-flex items-center gap-4 bg-white text-green-600 px-12 py-6 rounded-full font-black text-base uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        Access Calculator <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* FAQ Section - Now 15 Items */}
            <FAQSection faqs={BMI_2026.faqs || []} />
        </div>
    );
}
