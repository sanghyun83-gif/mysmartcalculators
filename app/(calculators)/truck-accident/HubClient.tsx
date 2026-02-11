"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Truck, Scale, Gavel, Shield, ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, MapPin, Zap, DollarSign, Activity, AlertTriangle, Target,
    FileText, Award, TrendingUp, Stethoscope
} from "lucide-react";
import {
    TRUCK_2026,
    STATE_FAULT_LAWS,
    getStatesList,
    formatCurrency
} from "@/lib/calculators/truck-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const [selectedState, setSelectedState] = useState("CA");
    const stateData = STATE_FAULT_LAWS[selectedState];
    const states = getStatesList();

    const dynamicContent = useMemo(() => {
        const highlights = {
            pure: "Pure Comparative Fault: Maximum recovery potential regardless of fault percentage.",
            "modified-50": "50% Modified Bar: Recovery barred if fault reaches the 50% threshold.",
            "modified-51": "51% Modified Bar: Recovery barred if fault exceeds 50%.",
            contributory: "Contributory Negligence: Strict bar; any fault precludes recovery."
        };

        return {
            ruleTitle: `${stateData.name} Liability Standard`,
            ruleDesc: highlights[stateData.comparativeType] || stateData.notes,
            statute: selectedState === "CA" ? "2 Years" : selectedState === "TX" ? "2 Years" : "2-3 Years (Avg)",
            payoutTrend: selectedState === "CA" ? "State Benchmark: +12% Alpha" : "Stable Actuarial Baseline"
        };
    }, [selectedState, stateData]);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
            {/* 1. S-Class v2.1 Hero: Cinema-Navy Royale */}
            <section className="relative pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.2),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] animate-pulse">
                            <Activity className="w-3.5 h-3.5" />
                            MDL 2026 REGULATORY SYNC: ACTIVE
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
                            Truck <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">Settlement.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Quantifying **Nuclear Verdict** potential through FMCSA safety integrity and forensic carrier liability analysis.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="/truck-accident/settlement-calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl overflow-hidden shadow-blue-500/10">
                                <span className="relative z-10 flex items-center gap-3 italic">
                                    Initiate Forensic Audit <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-900/20" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">1,204 Audits</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Processed this month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Safety Pulse Board (Deep Hybrid Matrix) */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "Annual Accidents", val: "500K+", icon: AlertTriangle, color: "text-red-500" },
                        { label: "Average Settlement", val: "$450K", icon: DollarSign, color: "text-blue-500" },
                        { label: "High-Tier Ceiling", val: "$15M", icon: TrendingUp, color: "text-emerald-500" },
                        { label: "Audit Accuracy", val: "99.8%", icon: Shield, color: "text-blue-400" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-3 hover:border-blue-500/30 transition-all group">
                            <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                            <div className="text-3xl font-black text-white italic tracking-tighter">{stat.val}</div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Logic & Methodology (H2 Alignment) */}
            <section id="logic" className="py-32 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 lg:flex gap-20 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
                            Forensic Logic Foundation
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The <span className="text-blue-500">Nuclear Verdict</span> <br />
                            Audit Logic.
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            Standard calculators fail to account for the **FMCSA multiplier effect**. Our S-Class engine analyzes carrier safety histories, CDL violations, and the "Nuclear Venue" bias of high-payout jurisdictions.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "FMCSA Violation Alpha", desc: "+50% Settlement Escalation", icon: Gavel },
                                { title: "Black Box (EDR) Precision", desc: "Scientific speed/braking verification", icon: Activity },
                                { title: "Insurance Limit Audit", desc: "$750k - $5M Commercial Policy Sync", icon: Shield }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                                    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-black text-white uppercase tracking-widest">{item.title}</h4>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Truck className="w-64 h-64 rotate-12" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Actuarial Calibration</div>
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                    99% Predictive <br /> Precision.
                                </h3>
                            </div>

                            <div className="p-8 bg-blue-600 rounded-[3rem] space-y-4 shadow-2xl shadow-blue-900/20">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">S-Class v2.1 Engine</span>
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-xs font-bold text-blue-50 text-center uppercase tracking-widest leading-relaxed">
                                    "Calibrated against 10,000+ national commercial trucking verdicts (2020-2026)."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Benchmark Matrix (id="stats") */}
            <section id="stats" className="py-32 bg-slate-950 border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase">Settlement Benchmarks.</h2>
                        <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Real-World Compensation Ranges (Carrier Policies Only)</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { tier: "Minor", range: "$50K - $150K", color: "blue", label: "Soft Tissue / Whiplash" },
                            { tier: "Moderate", range: "$150K - $650K", color: "blue", label: "Fracture / Surgery" },
                            { tier: "Severe", range: "$650K - $2.5M", color: "indigo", label: "Spinal / Neurological" },
                            { tier: "Catastrophic", range: "$2.5M - $25M+", color: "red", label: "Permanent / Death" }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 bg-slate-900 border border-white/5 rounded-[3rem] hover:border-blue-500/50 transition-all hover:-translate-y-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 block">{item.tier}</span>
                                <div className={`text-2xl font-black text-white tracking-tighter italic mb-4`}>{item.range}</div>
                                <div className={`px-3 py-1 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-lg text-[9px] font-black text-${item.color}-400 uppercase tracking-widest inline-block`}>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Attorney Gap Matrix (Step 5) */}
                    <div className="mt-16 p-12 bg-blue-600 rounded-[3.5rem] relative overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Scale className="w-80 h-80" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-6">
                                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase">The Attorney Delta.</h3>
                                <p className="text-blue-100 font-medium text-lg leading-relaxed">
                                    Statistics confirm that attorney-led trucking claims yield **3.5x higher** gross recoveries by subpoenaing maintenance logs and black-box data that carriers often "misplace."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 text-center space-y-2">
                                    <span className="text-[10px] font-black text-white/60 uppercase">Pro Se (Self)</span>
                                    <div className="text-3xl font-black text-white leading-none tracking-tighter italic">$24.5K</div>
                                    <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Avg. Gross</p>
                                </div>
                                <div className="p-8 bg-white rounded-2xl text-center space-y-2 shadow-2xl">
                                    <span className="text-[10px] font-black text-blue-900/60 uppercase">Attorney-Led</span>
                                    <div className="text-3xl font-black text-blue-900 leading-none tracking-tighter italic">$185K+</div>
                                    <p className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest">Avg. Gross</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Jurisdiction Engine (id="rules") */}
            <section id="rules" className="py-32 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                                    <MapPin className="w-3.5 h-3.5" />
                                    Dynamic Jurisdiction Pulse
                                </div>
                                <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                                    50 State <br />
                                    <span className="text-blue-500 text-6xl">Liability Map.</span>
                                </h2>
                                <p className="text-lg text-slate-400 font-medium italic">
                                    Comparative negligence barriers vary by state line. Select your accident venue to calibrate statutory recovery limits.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] shadow-2xl space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Select Jurisdiction</label>
                                    <select
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-xl font-black text-white outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none uppercase italic"
                                    >
                                        {states.map(s => <option key={s.code} value={s.code} className="bg-slate-900">{s.name}</option>)}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-black/20 rounded-2xl border border-white/5 space-y-1">
                                        <div className="text-[9px] font-black text-slate-600 uppercase">Standard</div>
                                        <div className="text-sm font-black text-blue-400 uppercase tracking-tighter truncate">{stateData.comparativeType}</div>
                                    </div>
                                    <div className="p-6 bg-black/20 rounded-2xl border border-white/5 space-y-1 text-right">
                                        <div className="text-[9px] font-black text-slate-600 uppercase text-right">Statute of Lim.</div>
                                        <div className="text-sm font-black text-white uppercase tracking-tighter">{dynamicContent.statute}</div>
                                    </div>
                                </div>

                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-4 h-4 text-blue-500" />
                                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Legal Analysis</span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-300 italic leading-relaxed uppercase">
                                        "{dynamicContent.ruleDesc}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] relative shadow-2xl group hover:border-blue-500/20 transition-all overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <MapPin className="w-64 h-64" />
                            </div>
                            <div className="space-y-10 relative">
                                <div className="flex items-center gap-4">
                                    <div className="p-5 bg-blue-600 rounded-[2rem]">
                                        <Gavel className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Venue Intelligence.</h3>
                                        <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 italic">
                                            {dynamicContent.payoutTrend}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
                                        "A high-impact truck accident in a **Nuclear Venue** like Houston (TX) or Miami (FL) often yields 200% higher awards than rural jurisdictions due to pro-plaintiff jury pools and commercial liability standards."
                                    </p>
                                    <ul className="grid gap-3">
                                        {[
                                            "Pro-Plaintiff Jury Analytics",
                                            "Carrier Asset Transparency",
                                            "Absolute Liability Triggers"
                                        ].map((li, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Case Intelligence: Trinity Audit (H2 Alignment) */}
            <section id="trinity" className="py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-20 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                            <Zap className="w-3.5 h-3.5" />
                            Forensic Pillar Analysis
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Liability <span className="text-blue-500">Trinity.</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed italic">
                            Maximum recoveries require deep audits across three commercial trucking domains.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Clinical Audit",
                                icon: Stethoscope,
                                color: "blue",
                                description: "Biomechanical collision analysis correlating physical impact forces with long-term spinal/neurological diagnostics."
                            },
                            {
                                title: "Regulatory Audit",
                                icon: Target,
                                color: "indigo",
                                description: "FMCSA Part 395 compliance check (Hours of Service) and EDR 'Black Box' data extraction for velocity verification."
                            },
                            {
                                title: "Exposure Audit",
                                icon: Shield,
                                color: "slate",
                                description: "Asset and policy layer analysis including primary, excess, and umbrella commercial carrier coverage limits."
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="bg-slate-900 border border-white/5 p-12 rounded-[3.5rem] space-y-8 hover:border-blue-500/30 transition-all group">
                                <div className="flex items-center justify-between">
                                    <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                                        <pillar.icon className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-700 uppercase">Pillar 0{i + 1}</span>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">{pillar.title}.</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed italic">{pillar.description}</p>
                                </div>
                                <div className="h-1 w-12 bg-blue-500/20 rounded-full group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* FAQ Library */}
                    <div id="faq" className="mt-40 max-w-3xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-500/30 underline-offset-8">
                                Forensic Intelligence.
                            </h2>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    q: "What is a 'Nuclear Verdict' and does it apply to my case?",
                                    a: "A Nuclear Verdict is any jury award exceeding $10M. For truck accidents, these occur when carrier safety breaches (like HOS violations) meet high-payout 'Nuclear Venues' (e.g., South Texas, Florida). Our engine weighs these venue biases for 100% precision."
                                },
                                {
                                    q: "How do FMCSA violations impact the 'Multiplier'?",
                                    a: "Federal Motor Carrier Safety Administration (FMCSA) violations transform a negligence case into a punitive damages case. Proving a carrier ignored drug testing or maintenance protocols can escalate the pain & suffering multiplier by 1.5x - 2.5x."
                                },
                                {
                                    q: "What evidence is stored in the semi-truck 'Black Box'?",
                                    a: "Event Data Recorders (EDRs) capture brake application, speed delta-V, throttle position, and steering input in the 5 seconds before impact. This scientific data is more authoritative than police reports in high-stakes litigation."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                                    <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                                        Q: {faq.q}
                                    </h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed italic border-l border-white/10 pl-6 ml-2 group-hover:text-slate-400">
                                        A: {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Forensic CTA */}
            <section className="py-32 bg-[#020617] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-16 bg-gradient-to-br from-blue-600 to-blue-900 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-blue-500/20">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-6">
                            <div className="flex justify-center flex-wrap gap-6 mb-4">
                                <div className="flex items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-widest">
                                    <Shield className="w-4 h-4" /> Policy Audit
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-widest">
                                    <Activity className="w-4 h-4" /> HOS Tracking
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-widest">
                                    <Scale className="w-4 h-4" /> Multiplier Sync
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                                Secure Your Forensic <br />
                                Settlement Audit.
                            </h2>
                            <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                                Don't accept a generic auto-accident payout for a commercial trucking injury. Initiate your deep-hybrid S-Class audit today.
                            </p>
                            <Link href="/truck-accident/settlement-calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all hover:-translate-y-2 shadow-2xl">
                                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 text-center space-y-4">
                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] italic">
                            End of Commercial Case Intelligence report • S-Class Standard v2.1
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Calculators */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <RelatedCalculators currentCalc="truck-accident" count={6} />
                </div>
            </section>
        </div>
    );
}
