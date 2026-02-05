"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight, Shield, Activity, Info, FileText, AlertTriangle, Landmark } from "lucide-react";

export default function CarAccidentLegalHub() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/car-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Negligence Doctrine", id: "#negligence" },
                                { n: "Fault Thresholds", id: "#fault" },
                                { n: "Vicarious Liability", id: "#vicarious" },
                                { n: "Punitive Damages", id: "#punitive" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-2">Legal Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic">Tort-Law Sync 2026</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <div className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-widest">
                            <Scale className="w-3 h-3" /> Tort Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            The Law of <span className="text-red-600 italic">Liability</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Analyzing Negligence, Duty of Care, and Proxy Liability in 2026 Motor Vehicle Tort across all 50 jurisdictions.
                        </p>
                    </div>

                    {/* Section 1: Negligence */}
                    <section id="negligence" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-sm">1</div>
                            The Doctrine of Negligence
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                            <p>
                                Most car accident claims are based on **Negligence**. To prevail, you must prove that the other driver failed to act with the level of care that a reasonable person would have exercised under similar circumstances.
                            </p>
                            <p>
                                In 2026, this increasingly includes the use of autonomous systems (L2/L3) and the failure to disengage autopilot in hazardous conditions. Liability is not an opinion; it is a mathematical outcome of documenting a breach in the standard duty of care required by state-level vehicle codes.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Fault thresholds */}
                    <section id="fault" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <AlertTriangle className="w-48 h-48 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Comparative Fault Rules</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                Understanding your jurisdiction's fault threshold is critical. In "Pure Comparative" states (like California), you can recover damages even if you are 99% at fault.
                            </p>
                            <p>
                                <strong className="text-white underline decoration-red-600 decoration-2">The 51% Rule</strong>: However, in "Modified" states, being 51% responsible results in a complete **Legal Bar** from all compensation. Our auditor integrates these specific state-level rules into every simulation.
                            </p>
                        </div>
                    </section>

                    {/* Liability Types Grid */}
                    <section id="vicarious" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-red-600 decoration-4">Liability Categories</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Car Accident Tort Classifications</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Vicarious Liability", d: "When an employer is legally responsible for an accident caused by an employee during work hours (Respondeat Superior)." },
                                { t: "Punitive Damages", d: "Extra compensation awarded in cases of extreme recklessness, such as DUI or street racing, designed to punish the defendant." },
                                { t: "Strict Liability", d: "Applied in product defect cases, such as exploding airbags or sudden unintended acceleration events." },
                                { t: "Negligent Entrustment", d: "When a vehicle owner is liable for lending their car to someone they knew (or should have known) was incompetent or dangerous." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3 hover:bg-white/10 transition-colors group">
                                    <div className="text-red-500 font-black text-sm group-hover:scale-110 transition-transform inline-block font-mono">CODE: T-LAW-{100 + i}</div>
                                    <h4 className="text-lg font-black text-white">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8">
                        <Link href="/car-accident/calculator" className="w-full p-8 bg-red-600 rounded-[3rem] text-center hover:bg-red-500 transition-all group overflow-hidden relative shadow-2xl shadow-red-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Launch Settlement Auditor Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
