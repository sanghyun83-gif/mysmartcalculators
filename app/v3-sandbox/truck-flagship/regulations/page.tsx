import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Trucking Safety Regulations | FMCSA Standards | TruckMaster AI",
    description: "Understand federal trucking safety regulations and how logbook violations impact commercial accident settlements. Audit your case for compliance.",
    alternates: { canonical: './' }
};

export default function RegulationGuide() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Header */}
                <div className="max-w-4xl space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                        DOT Compliance Registry 2026
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                        Safety <span className="text-emerald-500">Mandates</span>.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        Commercial motor vehicles (CMVs) are subject to the <span className="text-white">Federal Motor Carrier Safety Regulations (FMCSR)</span>.
                        A single violation can transform a standard accident into a high-liability corporate negligence case.
                    </p>
                </div>

                {/* Regulation Grid */}
                <div className="grid lg:grid-cols-12 gap-12 mt-24">
                    <div className="lg:col-span-8 space-y-20">

                        {/* 1. HOS Rules: Part 395 */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Shield className="w-10 h-10 text-emerald-500" />
                                <h2 className="text-3xl font-black text-white tracking-tight">FMCSR Part 395: The Science of Fatigue</h2>
                            </div>
                            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg">
                                <p>
                                    Fatigue is the single most controllable factor in 18-wheeler collisions. The DOT enforces the <strong>11-Hour Driving Limit</strong> and the <strong>14-Hour Workday Rule</strong> to mitigate the risks associated with driver exhaustion. When a driver falsifies an ELD (Electronic Logging Device) log, they are committing federal fraud, which can trigger punitive damages.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 not-prose">
                                    <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] space-y-4">
                                        <h4 className="text-xs font-black text-emerald-500 uppercase tracking-widest leading-none">The 70-Hour Rule</h4>
                                        <p className="text-sm font-bold text-white leading-relaxed">Drivers may not work more than 70 hours in any 8-day period? a common violation during "peak freight" seasons.</p>
                                    </div>
                                    <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] space-y-4">
                                        <h4 className="text-xs font-black text-emerald-500 uppercase tracking-widest leading-none">Adverse Conditions Exception</h4>
                                        <p className="text-sm font-bold text-white leading-relaxed">Companies often abuse this rule to force drivers to operate in dangerous weather, increasing liability risk.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Commercial Inspection: Part 396 */}
                        <section className="p-16 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 shadow-2xl">
                            <h2 className="text-2xl font-black text-white tracking-tight">Part 396: Mechanical Negligence Audit</h2>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                A motor carrier is legally required to identify and fix mechanical defects BEFORE the truck hits the road. We audit company maintenance files for "Deferred Maintenance"? a corporate strategy to save money that leads to catastrophic brake failure.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { t: "Out-of-Adjustment Brakes", d: "Brakes accounting for 29.4% of all mechanical-related truck crashes in our 2026 dataset." },
                                    { t: "Conspicuity Tape (Reflectivity)", d: "Trailer visibility failures during night-time merges or roadside stops." },
                                    { t: "Tire Retread Failures", d: "Overused tires exploding at highway speeds (Delamination incidents)." },
                                    { t: "Fifth-Wheel Coupling", d: "Failure to lock the trailer connection, leading to catastrophic detaching." }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-black/40 rounded-3xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
                                        <div className="text-[10px] font-black text-emerald-500 uppercase mb-2 tracking-widest">{item.t}</div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-bold italic">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. CSA Scores & Safety Measurement System (SMS) */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                                <AlertTriangle className="w-10 h-10 text-emerald-500" />
                                The CSA Score: A Company's "Rap Sheet"
                            </h2>
                            <div className="prose prose-invert prose-slate max-w-none text-slate-400 text-lg space-y-6">
                                <p>
                                    The FMCSA maintains a public database of carrier performance called the <strong>Compliance, Safety, Accountability (CSA)</strong> score. This score is divided into several "BASIC" categories, including Unsafe Driving, Crash Indicator, and HOS Compliance.
                                </p>
                                <p>
                                    If a company has a high score in the "Crash Indicator" category and subsequently causes an accident, we can argue they had <strong>Actual Knowledge</strong> of their dangerous practices. This is a critical building block for securing settlements in the multi-million dollar range.
                                </p>
                            </div>
                        </section>

                        {/* 4. Drug & Alcohol Clearinhouse: Part 382 */}
                        <section className="p-12 bg-white/5 border border-white/10 rounded-[3rem] space-y-6">
                            <h2 className="text-2xl font-black text-white italic">Part 382: The Clearinghouse Mandate</h2>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                Motor carriers MUST check the federal Drug & Alcohol Clearinghouse before hiring a driver. If a carrier hired a driver with a "Prohibited" status, they have committed <strong>Negligent Hiring</strong>. Our audit toolkit includes a guide for subpoenaing these specific HR records post-accident.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-8 bg-emerald-600/10 border border-emerald-500/20 rounded-[2.5rem] space-y-6">
                                <h3 className="text-xl font-black text-white">Compliance Toolkit</h3>
                                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                    Does your accident involve a DOT violation? Use our audit engine to calculate the resulting multiplier impact.
                                </p>
                                <Link href="/truck-accident/calculator" className="flex items-center justify-between p-4 bg-emerald-600 rounded-2xl hover:bg-emerald-500 transition-all group">
                                    <span className="text-[10px] font-black uppercase text-white">Audit Case for Violations</span>
                                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
