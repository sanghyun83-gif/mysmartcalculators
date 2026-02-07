"use client";

import Link from "next/link";
import { ArrowLeft, Shield, TriangleAlert, ArrowRight, Gavel, Scale, FileText, Activity } from "lucide-react";

export default function TruckRegulationsHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/truck-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "HOS Standards", id: "#hos" },
                                { n: "Maintenance Logs", id: "#maintenance" },
                                { n: "FMCSA Compliance", id: "#fmcsa" },
                                { n: "Violation Audit", id: "#violations" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2">Internal Check</div>
                            <div className="text-xs font-bold text-white uppercase italic">FMCSA 2026 Ready</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                            <Shield className="w-3 h-3" /> Safety Compliance Unit
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            Trucking <span className="text-emerald-500 italic">Safety Unit</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Federal Motor Carrier Safety Administration (FMCSA) regulations govern every aspect of commercial trucking.
                            Violations of these strict safety laws are the primary drivers of seven and eight-figure verdicts.
                        </p>
                    </div>

                    {/* Section 1: HOS */}
                    <section id="hos" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm">1</div>
                            Hours of Service (HOS)
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                The "Hours of Service" (HOS) regulations were created to prevent driver fatigue?”one of the leading causes of fatal 18-wheeler accidents. Current 2026 standards require strict adherence to the **14-hour driving window** and mandatory **10-hour rest periods**.
                            </p>
                            <p>
                                In many cases, trucking companies incentivize drivers to exceed these limits, leading to "falsified logs." If discovery reveals a discrepancy between GPS data and the driver's logbook, the case moves from simple negligence to **Punitive Damages** territory.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Maintenance */}
                    <section id="maintenance" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-8 relative overflow-hidden text-balance">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <TriangleAlert className="w-48 h-48 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Maintenance & Log Integrity</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                Every commercial vehicle is required to undergo pre-trip, post-trip, and periodic annual inspections. Brake failure or tire blowouts are rarely "unavoidable accidents"; they are almost always the result of deferred maintenance documented (or ignored) in carrier logs.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-emerald-500">Negligence Per Se</strong>: If a truck involved in a collision is found to have out-of-service violations at the scene, the driver and company are often found negligent "as a matter of law."
                            </p>
                        </div>
                    </section>

                    {/* Violations List */}
                    <section id="violations" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-emerald-500 decoration-4">Standard Violation Audit</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2">Analysis of common FMCSA breach patterns in litigation</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Fatigued Driving", d: "Documentary evidence of HOS violations leading to delayed reaction times and 'micro-sleep' events." },
                                { t: "Improper Loading", d: "Overweight or poorly secured cargo shifting in transit, causing jackknife or rollover events." },
                                { t: "Driver Qualification", d: "Failing to screen for medical conditions or past DUI history when hiring CDL holders." },
                                { t: "Equipment Failure", d: "Pre-existing brake or lighting defects that were cleared by 'rubber stamp' internal inspections." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-all group">
                                    <div className="text-emerald-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">CODE: {1000 + i}</div>
                                    <h4 className="text-lg font-black text-white">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/truck-accident/calculator" className="w-full p-8 bg-emerald-600 rounded-[3rem] text-center hover:bg-emerald-500 transition-all group overflow-hidden relative shadow-2xl shadow-emerald-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Start Case Audit with Regulation Sync <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
