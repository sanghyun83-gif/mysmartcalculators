"use client";

import { Car, ChevronRight, Activity, CheckCircle2, Gavel, Scale, Shield, ArrowRight, AlertTriangle, FileText, Landmark, Users, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HubClient() {
    return (
        <>
            {/* S-Class Premium Hero: AutoAccident Pro AI */}
            <section className="relative py-20 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking_widest mb-8 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                            <Scale className="w-3.5 h-3.5" />
                            Comparative Fault Audit Engine v5.0
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
                            Accident <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600">Logic.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                            Professional-grade legal auditing for <span className="text-white italic">Tort Liability</span> and settlement scaling. Powered by 50-state case law mapping and 2026 actuarial benchmarks.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <Link href="/car-accident/calculator" className="flex items-center gap-3 bg-white text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-all shadow-[0_25px_50px_rgba(220,38,38,0.25)] hover:-translate-y-1">
                                Launch Settlement Auditor <ChevronRight className="w-5 h-5" />
                            </Link>
                            <div className="flex flex-col items-start gap-1 text-left">
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tort-Law Sync 2026
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Litigation Stat Wall */}
            <section id="stats" className="py-16 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { l: "Avg Settlement", v: "$45,000+" },
                            { l: "States Covered", v: "50 Jurisdictions" },
                            { l: "Fault Threshold", v: "51% Rule Multi" },
                            { l: "Pain Multiplier", v: "1.5x - 5.0x" }
                        ].map((s, i) => (
                            <div key={i} className="space-y-2 border-l border-red-600/20 pl-6">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{s.l}</div>
                                <div className="text-2xl font-black text-white tracking-tight">{s.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* S-Class Depth: 1,000+ Words Expert Analysis */}
            <section className="py-32 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 space-y-32">

                    {/* 1. The Anatomy of Tort Liability */}
                    <div className="relative">
                        <div className="absolute -left-20 top-0 opacity-10 hidden lg:block">
                            <Gavel className="w-40 h-40 text-red-600" />
                        </div>
                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-red-600/10 rounded-2xl border border-red-600/20 shadow-xl">
                                    <Scale className="w-10 h-10 text-red-600" />
                                </div>
                                <h2 className="text-5xl font-black text-white tracking-tighter italic">Causation & Breach</h2>
                            </div>
                            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-8 text-lg font-medium leading-[1.8]">
                                <p>
                                    A car accident settlement is fundamentally built upon the legal doctrine of **Tort Liability**. To secure a significant payout in 2026, a claimant must demonstrate four critical pillars: Duty, Breach, Causation, and Damages. Our audit engine recognizes that every jurisdiction—from California to New York—applies these pillars through the lens of varying "Duty of Care" standards, particularly regarding commercial versus private vehicle operation.
                                </p>
                                <p>
                                    The "Nuclear Verdict" era has arrived. Insurance carriers are no longer just fighting for 10% reductions; they are utilizing **Predictive Litigation Analytics** to minimize high-delta claims. To counter this, our S-Class auditor implements **Comparative Fault Logic**. Understanding whether your state follows the 51% rule (Modified Comparative) or the 1% rule (Contributory) is the difference between a mid-six-figure settlement and a complete bar from recovery.
                                </p>
                                <div className="p-12 bg-red-600/5 border border-red-600/10 rounded-[3rem] shadow-inner relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <AlertTriangle className="w-20 h-20 text-red-400" />
                                    </div>
                                    <p className="text-red-300/80 italic text-xl">
                                        "In 2026, insurance adjusters prioritize hard-coded medical liens over subjective pain estimates. Our auditor forces a pivot toward 'Economic Resilience' to maximize the pre-tax payout delta."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Injury Tiers & Actuarial Staging */}
                    <div id="tiers" className="space-y-12">
                        <div className="flex items-center gap-4">
                            <Activity className="w-12 h-12 text-red-600" />
                            <h2 className="text-4xl font-black text-white tracking-tight underline decoration-red-600/30 decoration-8 underline-offset-8">MDL Injury Categorization</h2>
                        </div>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed">
                            Not all damages are created equal. Our actuarial engine categorizes injuries into four 'Nuclear Tiers' to mirror the 2026 settlement matrix:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 pt-6 text-left">
                            {[
                                { t: "Soft Tissue (Tier 0)", d: "Whiplash, sprains, and minor contusions. Usually settled within policy limits with a 1.5x multiplier.", c: "bg-slate-900 border-white/10" },
                                { t: "Bone & Joint (Tier 1)", d: "Fractures and dislocations requiring immobilization. Multiplier pushes to 3.0x due to documented recovery time.", c: "bg-red-900/10 border-red-600/40" },
                                { t: "Surgical Intervention (Tier 2)", d: "Orthopedic surgeries or organ repair. These claims often cross the $100k threshold immediately.", c: "bg-slate-900 border-white/10" },
                                { t: "Catastrophic (Tier 3)", d: "Paralysis, TBI, or loss of limb. These are 'Policy-Limit' events requiring immediate litigation scaling.", c: "bg-slate-900 border-white/10" }
                            ].map((item, i) => (
                                <div key={i} className={`p-10 rounded-[2.5rem] border transition-all hover:scale-[1.02] shadow-xl ${item.c}`}>
                                    <h4 className="text-xl font-black text-white mb-4">{item.t}</h4>
                                    <p className="text-sm text-slate-400 font-bold leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. The 51% Fault Barrier */}
                    <div className="p-20 bg-gradient-to-br from-slate-900 to-red-950/20 border border-red-600/20 rounded-[5rem] shadow-2xl relative group">
                        <div className="absolute -top-10 -right-10 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-transform">
                            <Shield className="w-48 h-48 text-red-600" />
                        </div>
                        <h2 className="text-4xl font-black text-white mb-10 leading-tight">Modified Comparative <span className="text-red-500">Hazard.</span></h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-xl font-medium leading-[1.8] space-y-8">
                            <p>
                                The most dangerous point in any car accident claim is the **Fault Allocation**.
                            </p>
                            <p>
                                In states following the "Modified Comparative 51% Rule" (e.g., Texas, Illinois), if you are found to be 51% at fault, your recovery is slashed to **Zero**. Even if your damages are $1M.
                            </p>
                            <div className="flex gap-4 p-8 bg-black/40 rounded-3xl border border-white/5">
                                <div className="text-red-600 font-black text-4xl leading-none">51%</div>
                                <p className="text-sm font-bold text-slate-400 italic">
                                    Our audit engine applies a **Negative-Fault Buffer**, alerting you instantly if your liability percentage threatens the entire legal solvency of your claim.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Expert Case Intelligence (LSI FAQ) */}
                    <div id="intelligence" className="space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-5xl font-black text-white tracking-widest uppercase italic">Case intelligence</h2>
                            <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />
                        </div>
                        <div className="grid gap-12">
                            {[
                                {
                                    q: "How does the 'Black Box' (EDR) affect my settlement?",
                                    a: "Modern Event Data Recorders (EDR) provide millisecond-accurate data on speed, braking, and steering. If EDR data contradicts your statement, insurance companies will use it to push your fault percentage past the 51% barrier. Our auditor accounts for this mechanical evidence in Tier 2/3 assessments."
                                },
                                {
                                    q: "Can I claim 'Pain and Suffering' without documented medical bills?",
                                    a: "Legally, yes; practically, no. In 2026, Non-economic damages are almost always calculated as a multiple of 'Hard Special Damages'. Without medical bill anchors, your pain and suffering estimate will likely be rejected by algorithmic adjusters."
                                },
                                {
                                    q: "What is the 'Statute of Repose' vs. 'Statute of Limitations'?",
                                    a: "The Limitations period (usually 2-3 years) is the clock for filing. Repose is a harder deadline often related to vehicle manufacturing defects. Missing either is a fatal blow to any recovery attempt. Our guide tracks these across all 50 states."
                                },
                                {
                                    q: "Why do insurance companies offer low initial settlements?",
                                    a: "Adjusters use 'Time-Decay' logic. They know that as bills pile up, claimants become more desperate. An initial $5k offer is designed to close the file before the true extent of injury (e.g., latent neck injuries) is documented."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6 hover:bg-red-600/5 transition-colors">
                                    <h4 className="text-2xl font-black text-red-500 leading-tight tracking-tight flex gap-4">
                                        <span className="opacity-20 text-white">Q:</span> {faq.q}
                                    </h4>
                                    <p className="text-slate-400 font-medium leading-relaxed pl-12 border-l border-red-600/20">A: {faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA: The Accident Audit Logic */}
                    <div className="p-16 bg-red-600 rounded-[4rem] text-center space-y-10 shadow-[0_40px_100px_rgba(220,38,38,0.3)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-none">Run a Private Liability Audit.</h2>
                            <p className="text-red-50 text-xl font-bold max-w-2xl mx-auto italic underline decoration-white/20 underline-offset-8">
                                Use the 2026 S-Class Actuarial Engine to simulate your settlement trajectory across any of the 50 jurisdictions.
                            </p>
                            <Link href="/car-accident/calculator" className="inline-flex items-center gap-4 bg-white text-black px-16 py-8 rounded-[2rem] font-black text-lg uppercase tracking_widest hover:bg-slate-50 transition-all hover:scale-105 shadow-2xl">
                                Start Settlement Audit <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
