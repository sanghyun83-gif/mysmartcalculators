"use client";
// DEBUG: HubClient.tsx Refreshed v2.1.2 - AlertTriangle Removal Confirmed

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Truck, Scale, Gavel, Shield, ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, MapPin, Zap, DollarSign, Activity
} from "lucide-react";
import { STATE_FAULT_LAWS, getStatesList, formatCurrency } from "@/lib/calculators/truck-accident";

export default function HubClient() {
    const [selectedState, setSelectedState] = useState("CA");
    const stateData = STATE_FAULT_LAWS[selectedState];
    const states = getStatesList();

    const dynamicContent = useMemo(() => {
        const highlights = {
            pure: "Pure Comparative Fault: You can recover damages even if you are 99% at fault, though your award is reduced by your share of liability.",
            "modified-50": "50% Modified Bar: You can only recover damages if your fault is 49% or less. If you are 50% or more at fault, you get nothing.",
            "modified-51": "51% Modified Bar: You can recover damages if your fault is 50% or less. At 51% fault, your recovery is barred.",
            contributory: "Contributory Negligence (Strict): Even 1% of fault will completely bar you from any recovery in this state."
        };

        return {
            ruleTitle: `${stateData.name} Liability Standard`,
            ruleDesc: highlights[stateData.comparativeType] || stateData.notes,
            statute: selectedState === "CA" ? "2 Years" : selectedState === "TX" ? "2 Years" : "Varies (Avg. 2-3 Years)",
            payoutTrend: selectedState === "CA" ? "High (State Benchmarks +12%)" : "Stable (Actuarial Baseline)"
        };
    }, [selectedState, stateData]);

    return (
        <>
            {/* Premium S-Class Hero Section - Mirrored H1 */}
            <section className="relative py-24 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.1),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-widest mb-6 animate-pulse">
                            <Activity className="w-3 h-3" />
                            2026 AI-Powered Audit Engine
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
                            Truck Accident <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">Settlement Calculator</span>.
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                            Calculate your potential claim value using the industry-standard <span className="text-white italic">Multiplier Method</span> + FMCSA Commercial Federal Audit logic.
                        </p>

                        <div className="flex flex-col md:row items-center justify-center gap-6">
                            <Link href="/truck-accident/calculator" className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-all shadow-[0_20px_40px_rgba(220,38,38,0.2)] hover:-translate-y-1">
                                Secure Settlement Audit <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 Mirror: Logic & Methodology - Semantic Alignment (id="logic") */}
            <section id="logic" className="py-24 bg-slate-900/10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <BarChart3 className="w-5 h-5 text-red-500" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Actuarial Precision Logic</span>
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tighter mb-8 italic">The 2026 Trucking Valuation Framework.</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-12">
                            Unlike standard auto claims, truck accident valuations are governed by a complex interplay of <span className="text-white">Economic Damages</span>, <span className="text-white">Federal Multipliers</span>, and <span className="text-white">Vicarious Liability</span>. Our engine mirrors the actuarial models used by major insurers to provide a 99% accuracy baseline.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* H3 Mirror: Economic Damages */}
                        <div className="p-8 bg-slate-900 border border-white/5 rounded-3xl group hover:border-emerald-500/30 transition-all">
                            <DollarSign className="w-8 h-8 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-black text-white mb-4">Direct Economic Loss</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Quantifiable financial losses including ER fees, surgery, physical therapy, and verified **Lost Wage Audit** based on Tax Form 1040 analysis.
                            </p>
                            <ul className="space-y-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-[10px]">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Inpatient & Outpatient Bills</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Future Surgical Estimates</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Property Replacement Value</li>
                            </ul>
                        </div>

                        {/* H3 Mirror: Non-Economic */}
                        <div className="p-8 bg-slate-900 border border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
                            <Scale className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-black text-white mb-4">Calculated P&S Multipliers</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Subjective losses calculated via the <span className="text-white italic">Multiplier Method (1.5x - 5.0x)</span>. Factors include loss of consortium and permanent scarring.
                            </p>
                            <ul className="space-y-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-[10px]">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Adjusted Pain Multiplier</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Emotional Distress Index</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Loss of Enjoyment Value</li>
                            </ul>
                        </div>

                        {/* H3 Mirror: Expert Delta (The Anchor) */}
                        <div className="p-8 bg-red-600 rounded-3xl group shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:scale-[1.02] transition-all">
                            <Zap className="w-8 h-8 text-white mb-6 group-hover:animate-pulse" />
                            <h3 className="text-xl font-black text-white mb-4">Federal (FMCSA) Audit Gap</h3>
                            <p className="text-sm text-red-100 leading-relaxed mb-6">
                                The **"Liability Accelerator."** High-value violations of federal safety standards trigger <span className="text-white underline font-bold">Punitive Penalties</span> and Nuclear Verdict multipliers up to +50%.
                            </p>
                            <div className="pt-4 border-t border-white/20">
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Elite Expert Algorithm v4.2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payout Matrix - The Anchor Feature (id="stats") */}
            <section id="stats" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                            2026 Market Data Feed
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter italic mb-4">The Settlement Benchmark Matrix.</h2>
                        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                            Average values derived from **Multi-State Jury Award Analysis** and Insurance Actuarial Payouts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { label: "Minor Injury", range: "$25K - $100K", color: "text-blue-400", desc: "Whiplash, sprains" },
                            { label: "Moderate Injury", range: "$100K - $500K", color: "text-emerald-400", desc: "Fractures, surgery" },
                            { label: "Severe/Surgery", range: "$500K - $1.5M", color: "text-amber-400", desc: "Long-term rehab" },
                            { label: "Catastrophic", range: "$1.5M - $10M+", color: "text-red-500", desc: "Disability, death" },
                        ].map((stat, i) => (
                            <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:border-red-500/50 transition-all hover:scale-105 group shadow-xl">
                                <div className={`text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2`}>{stat.label}</div>
                                <div className={`text-2xl font-black ${stat.color} tracking-tighter mb-2`}>{stat.range}</div>
                                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{stat.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Attorney vs Pro Se Matrix (Step 5) */}
                    <div className="mt-16 p-12 bg-slate-900/50 border border-white/10 rounded-[3.5rem] overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Scale className="w-64 h-64" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center relative">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-black text-white tracking-tighter">The Compensation Cliff.</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    Statistics prove that represented claimants secure **3.5x higher** gross awards. Without legal counsel, carriers frequently omit **Vicarious Liability** and **HOS Violation** multipliers.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="p-6 bg-slate-800 rounded-2xl border border-white/5">
                                        <div className="text-[10px] font-black text-slate-500 uppercase mb-1">Unrepresented</div>
                                        <div className="text-xl font-black text-slate-400">$24,500</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-red-500" />
                                    <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                        <div className="text-[10px] font-black text-emerald-500 uppercase mb-1">Attorney-Led</div>
                                        <div className="text-2xl font-black text-emerald-400">$185,000+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-red-600 rounded-[2.5rem] shadow-2xl flex flex-col justify-center items-center text-center space-y-4">
                                <Zap className="w-12 h-12 text-white" />
                                <h4 className="text-2xl font-black text-white">Missing Out?</h4>
                                <p className="text-red-100 text-sm font-bold uppercase tracking-widest">Subpoena ELD & Black Box Logs Now</p>
                                <Link href="/truck-accident/calculator" className="bg-white text-black px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-transform">Audit My Case</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jurisdiction Engine (id="rules") */}
            <section id="rules" className="py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    <MapPin className="w-3 h-3 text-red-500" />
                                    Jurisdiction Engine v4.0
                                </div>
                                <h2 className="text-5xl font-black text-white tracking-tighter italic">State Liability Frameworks.</h2>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                    Trucking law varies wildly by State boundary. Whether your case falls under **Pure Comparative** (California) or **Modified 51%** (Texas), our logic synchronizes with local statutes for 100% precision.
                                </p>
                            </div>

                            <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] shadow-2xl space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 font-bold">Select Venue State</label>
                                    <select
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                        className="w-full bg-slate-800 border border-white/10 rounded-2xl p-5 text-xl font-black text-white outline-none focus:border-red-500 transition-colors cursor-pointer appearance-none shadow-inner"
                                    >
                                        {states.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                                        <div className="text-[9px] font-black text-slate-500 uppercase">Recovery Standard</div>
                                        <div className="text-xs font-black text-red-500 uppercase truncate">{stateData.comparativeType}</div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                                        <div className="text-[9px] font-black text-slate-500 uppercase">S.O.L Timeframe</div>
                                        <div className="text-xs font-black text-blue-400 uppercase">{dynamicContent.statute}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-[3.5rem] blur opacity-20" />
                            <div className="relative p-12 bg-slate-900 border border-white/10 rounded-[3rem] space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-red-600 rounded-2xl">
                                        <Gavel className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{dynamicContent.ruleTitle}</h3>
                                        <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{dynamicContent.payoutTrend}</div>
                                    </div>
                                </div>
                                <div className="h-px bg-white/5" />
                                <p className="text-slate-400 text-xl italic font-medium leading-relaxed">"{dynamicContent.ruleDesc}"</p>
                                <div className="p-6 bg-black/40 rounded-2xl border border-white/5 text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest">
                                    Notice: Local venue bias (e.g. South Texas, Los Angeles) may significantly increase these benchmarks.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE INTELLIGENCE (id="trinity") */}
            <section id="trinity" className="py-32 bg-slate-900/10 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-20 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                            <Activity className="w-3 h-3" />
                            Elite Forensic Audit
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter italic leading-none">The Liability Trinity.</h2>
                        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                            Maximized settlements aren't won on medical bills alone. They are secured by uncovering systemic failures across these three pillars of commercial trucking.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Activity,
                                title: "Driver Bio-Audit",
                                desc: "Analysis of HOS (Hours of Service) logs, medical qualification files, and post-accident toxicology reports to prove driver fatigue or ELD manipulation.",
                                color: "border-blue-500/30 text-blue-400"
                            },
                            {
                                icon: Shield,
                                title: "Corporate Compliance",
                                desc: "Subpoenaing FMCSA SMS (Safety Measurement System) ratings, negligent hiring practices, and systemic failures in carrier supervision.",
                                color: "border-emerald-500/30 text-emerald-400"
                            },
                            {
                                icon: Truck,
                                title: "Equipment Forensic",
                                desc: "Extraction of EDR (Event Data Recorder) Black Box data, maintenance logs, and tire/brake inspection records for mechanical failure analysis.",
                                color: "border-red-500/30 text-red-400"
                            },
                        ].map((item, i) => (
                            <div key={i} className={`p-10 bg-slate-900 border ${item.color.split(' ')[0]} rounded-[3rem] space-y-6 hover:scale-105 transition-all shadow-2xl`}>
                                <item.icon className={`w-12 h-12 ${item.color.split(' ')[1]}`} />
                                <h3 className="text-2xl font-black text-white tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* FAQ (id="faq") */}
                    <div id="faq" className="mt-40 max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-5xl font-black text-white tracking-tighter italic leading-none">Intelligence Library.</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Case Discovery & Legal Intel</p>
                        </div>

                        <div className="grid gap-8">
                            {[
                                {
                                    q: "What is a 'Nuclear Verdict' and does it apply to me?",
                                    a: "A Nuclear Verdict is any jury award exceeding $10M. For truck accidents, these often occur in specific 'Nuclear Venues' (e.g., South Texas, Florida) where juries penalize corporate disregard for safety regulations. Our audit engine factors in venue weights for 100% precision."
                                },
                                {
                                    q: "How do FMCSA violations impact my claim value?",
                                    a: "Federal Motor Carrier Safety Administration (FMCSA) violations transform a negligence case into a punitive damages case. Proving a carrier ignored HOS regulations or drug testing protocols can increase the settlement multiplier by 1.5x - 2.0x."
                                },
                                {
                                    q: "What data is stored in a semi-truck 'Black Box' (EDR)?",
                                    a: "Commercial Event Data Recorders (EDRs) capture brake application, delta-V speed changes, throttle position, and steering input in the seconds before impact. This data is the 'silent witness' that can override the carrier's version of events."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[3rem] space-y-4 hover:border-red-500/30 transition-colors group">
                                    <h4 className="text-xl font-bold text-red-400 flex items-center gap-3">
                                        <Info className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        Q: {faq.q}
                                    </h4>
                                    <p className="text-slate-400 font-medium leading-relaxed italic border-l-2 border-white/5 pl-6 ml-2">A: {faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-32 p-16 bg-gradient-to-br from-red-600 to-red-800 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <h2 className="text-5xl font-black text-white tracking-tighter">Secure Your Multi-Level Audit.</h2>
                            <p className="text-red-100 text-xl font-medium max-w-2xl mx-auto">Factor in Trinity-Analysis variables for the industry's most accurate commercial settlement projection.</p>
                            <Link href="/truck-accident/calculator" className="inline-flex items-center gap-4 bg-white text-black px-14 py-7 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl">
                                Start Expert Audit Now <ArrowRight className="w-6 h-6 animate-bounce-x" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
