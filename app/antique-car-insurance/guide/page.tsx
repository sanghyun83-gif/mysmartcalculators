"use client";

import Link from "next/link";
import { Calculator, Shield, Car, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE, VEHICLE_ERAS, USAGE_LEVELS } from "@/lib/calculators/antique-car-insurance";

export default function AntiqueCarInsuranceGuidePage() {
    return (
        <div className="min-h-screen bg-slate-900 font-sans">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50 px-4 py-4 flex items-center justify-between">
                <Link href="/antique-car-insurance" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Calculator className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-bold text-white tracking-tight">MySmartCalculators</span>
                </Link>
                <Link href="/antique-car-insurance" className="text-slate-400 hover:text-white text-sm font-bold transition-colors uppercase tracking-widest">
                    ← Back
                </Link>
            </header>

            <section className="py-24 px-4 relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
                        <Shield className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-bold text-blue-300 uppercase tracking-widest leading-none">2026 Compliance Guide</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Understanding Antique Coverage</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        The difference between a "Classic" and an "Antique" is more than just age—it's about how you protect historical value.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-slate-800/40 border border-slate-700/50 rounded-[3rem] p-12 shadow-sm">
                            <h2 className="text-3xl font-black text-white mb-8 border-l-4 border-blue-600 pl-6 uppercase tracking-wider">Qualification Era Factor</h2>
                            <div className="space-y-8">
                                {VEHICLE_ERAS.map((era, index) => (
                                    <div key={index} className="flex gap-6 items-start">
                                        <div className="bg-blue-600/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                                            <Car className="w-7 h-7 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{era.name}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{era.description}</p>
                                            <span className="bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full font-black uppercase tracking-widest">
                                                Rate Multiplier: {era.factor}x
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-blue-600 rounded-[3rem] p-12 shadow-2xl shadow-blue-600/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <AlertCircle className="w-32 h-32 text-white" />
                                </div>
                                <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Mandatory Requirements</h2>
                                <ul className="space-y-6">
                                    {[
                                        "Vehicle must be 25 years or older.",
                                        "Must be stored in a locked, fully enclosed garage.",
                                        "Regular usage NOT permitted (Exhibition & Pleasure only).",
                                        "Owner must have a separate daily driver vehicle."
                                    ].map((req, i) => (
                                        <li key={i} className="flex gap-4 items-center font-bold text-white/90">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-800/40 border border-slate-700/50 rounded-[3rem] p-12">
                                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm text-blue-400">Usage Adjustments</h3>
                                <div className="grid gap-4">
                                    {USAGE_LEVELS.map((usage, i) => (
                                        <div key={i} className="flex items-center justify-between py-4 border-b border-slate-700/50 last:border-0">
                                            <div>
                                                <div className="text-white font-bold">{usage.name}</div>
                                                <div className="text-slate-500 text-xs uppercase tracking-widest font-black mt-1">{usage.description}</div>
                                            </div>
                                            <div className="text-blue-400 font-black tracking-widest">{usage.factor}x</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto bg-slate-800/20 border-2 border-dashed border-slate-700 p-16 rounded-[4rem] text-center">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest">Ready to calculate your rate?</h2>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                        Our 2026 data model is updated with the latest Hagerty and Grundy baseline standards for agreed-value protection.
                    </p>
                    <Link href="/antique-car-insurance/calculator" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl text-xl font-bold transition-all shadow-xl shadow-blue-600/20">
                        Start Calculating <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 text-center">
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                    © {SITE.year} MySmartCalculators • Antique Division • Compliance Standards 2026.
                </p>
            </footer>
        </div>
    );
}
