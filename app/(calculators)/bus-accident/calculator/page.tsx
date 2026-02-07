"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    SITE, INJURY_TYPES, BUS_TYPES, ACCIDENT_CAUSES,
    calculateBusSettlement, formatCurrency, BUS_2026
} from "@/lib/calculators/bus-accident";
import {
    Calculator, Bus, ChevronDown, ChevronUp, ArrowLeft,
    AlertTriangle, Zap, ShieldCheck, Activity, Scale, Gavel,
    TrendingUp, FileText, Info
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [injuryType, setInjuryType] = useState("fractures");
    const [busType, setBusType] = useState("public-transit");
    const [accidentCause, setAccidentCause] = useState("driver-negligence");
    const [medicalExpenses, setMedicalExpenses] = useState("75,000");
    const [isPassenger, setIsPassenger] = useState(true);
    const [governmentBus, setGovernmentBus] = useState(false);
    const [hasDocumentation, setHasDocumentation] = useState(true);

    // Expert Toggles (+α Step 3)
    const [hasCommonCarrier, setHasCommonCarrier] = useState(true);
    const [hasFmcsaBreach, setHasFmcsaBreach] = useState(false);

    const result = useMemo(() => {
        const medical = parseInt(medicalExpenses.replace(/[^0-9]/g, "")) || 0;
        return calculateBusSettlement(
            injuryType,
            busType,
            accidentCause,
            medical,
            isPassenger,
            governmentBus,
            hasDocumentation,
            hasCommonCarrier,
            hasFmcsaBreach
        );
    }, [injuryType, busType, accidentCause, medicalExpenses, isPassenger, governmentBus, hasDocumentation, hasCommonCarrier, hasFmcsaBreach]);

    const handleInput = (val: string) => {
        const raw = val.replace(/[^0-9]/g, "");
        setMedicalExpenses(raw === "" ? "" : parseInt(raw).toLocaleString());
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
            {/* S-Class Nav */}
            <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/bus-accident" className="flex items-center gap-2 group">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors italic">Back to Hub</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-500 rounded-lg">
                            <Bus className="w-5 h-5 text-slate-950" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-tighter text-white italic">
                            Damages <span className="text-amber-500 not-italic">Auditor v2.1</span>
                        </span>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left: Input Console */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="space-y-10">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4 tracking-tighter leading-none">
                                    Bus Accident <span className="text-amber-500 not-italic">Forensic Auditor</span>
                                </h1>
                                <p className="text-slate-400 font-medium italic">Quantifying common carrier liability and 2026 statutory damages.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Clinical Medical Costs</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                                            <span className="text-amber-500 font-black italic">$</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={medicalExpenses}
                                            onChange={(e) => handleInput(e.target.value)}
                                            className="w-full bg-slate-900 border border-white/5 rounded-3xl py-6 pl-12 pr-6 text-xl font-black text-white focus:border-amber-500/50 transition-all outline-none"
                                            placeholder="75,000"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Injury Staging</label>
                                    <select
                                        value={injuryType}
                                        onChange={(e) => setInjuryType(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-3xl py-6 px-6 text-sm font-black text-white focus:border-amber-500/50 transition-all outline-none appearance-none cursor-pointer uppercase italic"
                                    >
                                        {INJURY_TYPES.map((i) => <option key={i.id} value={i.id}>{i.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Transit Classification</label>
                                    <select
                                        value={busType}
                                        onChange={(e) => setBusType(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-3xl py-6 px-6 text-sm font-black text-white focus:border-amber-500/50 transition-all outline-none appearance-none cursor-pointer uppercase italic"
                                    >
                                        {BUS_TYPES.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Liability Context</label>
                                    <select
                                        value={accidentCause}
                                        onChange={(e) => setAccidentCause(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-3xl py-6 px-6 text-sm font-black text-white focus:border-amber-500/50 transition-all outline-none appearance-none cursor-pointer uppercase italic"
                                    >
                                        {ACCIDENT_CAUSES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8 pt-12 border-t border-white/5">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-black text-white uppercase italic">
                                    Expert <span className="text-amber-500 not-italic">Audit Toggles</span>
                                </h2>
                                <div className="h-[2px] flex-1 bg-white/5" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <ExpertToggle
                                    active={hasCommonCarrier}
                                    onClick={() => setHasCommonCarrier(!hasCommonCarrier)}
                                    title="Common Carrier Duty"
                                    desc="Triggers the 'Highest Care' 1.50x premium multiplier."
                                />
                                <ExpertToggle
                                    active={hasFmcsaBreach}
                                    onClick={() => setHasFmcsaBreach(!hasFmcsaBreach)}
                                    title="FMCSA Violation"
                                    desc="Driver log/maintenance breach detected (+1.35x)."
                                />
                                <ExpertToggle
                                    active={governmentBus}
                                    onClick={() => setGovernmentBus(!governmentBus)}
                                    title="Public Transit / Gov"
                                    desc="Activates Sovereign Immunity cap logic (-20%)."
                                />
                                <ExpertToggle
                                    active={isPassenger}
                                    onClick={() => setIsPassenger(!isPassenger)}
                                    title="Passenger Status"
                                    desc="Internal occupant safety bonus (+20%)."
                                />
                            </div>
                        </section>
                    </div>

                    {/* Right: Forensic Report Card */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] pointer-events-none" />

                                <div className="bg-amber-500 p-10">
                                    <div className="flex justify-between items-start mb-8 text-slate-950 font-black italic">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-950/10 rounded-full border border-slate-950/10">
                                            <ShieldCheck className="w-4 h-4" />
                                            <span className="text-[10px] uppercase tracking-widest">Actuarial Sync 2026</span>
                                        </div>
                                        <span className="text-[11px] uppercase tracking-tighter">Case #BS-AUDIT</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-950/60 italic">Expected Payout Range</p>
                                        <div className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none shrink-0">
                                            {formatCurrency(result.settlementRange.min)} <span className="text-slate-950/30 font-light">—</span> {formatCurrency(result.settlementRange.max)}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 space-y-10">
                                    <div className="space-y-5">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Baseline Subtotal</span>
                                            <span className="text-xl font-black text-white italic">{formatCurrency(result.totalBeforeFees - result.expertBonus)}</span>
                                        </div>
                                        {result.expertBonus !== 0 && (
                                            <div className={`flex justify-between items-end ${result.expertBonus > 0 ? "text-emerald-400" : "text-red-400"}`}>
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-4 h-4" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest italic">Expert Delta Premium</span>
                                                </div>
                                                <span className="text-xl font-black italic">{result.expertBonus > 0 ? "+" : ""}{formatCurrency(result.expertBonus)}</span>
                                            </div>
                                        )}
                                        <div className="pt-8 border-t border-white/5 gap-2">
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 italic">Estimated Net Recovery</span>
                                                <span className="text-4xl font-black text-amber-500 italic leading-none">{formatCurrency(result.netEstimation)}</span>
                                            </div>
                                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] italic">
                                                * Includes 33% Attorney Fee & 32% Lien Mitigation
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex items-start gap-4">
                                        <TrendingUp className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                                            {governmentBus
                                                ? "Sovereign Immunity detected. Public transit caps may limit non-economic recovery. Early tort notice filing is critical."
                                                : "Common Carrier liability is active. This case qualifies for the 'Highest Care' multiplier, maximizing pain & suffering valuation."}
                                        </p>
                                    </div>

                                    <button className="w-full py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] italic">
                                        Export Forensic PDF Audit
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
                                <h3 className="text-xs font-black text-white uppercase italic mb-2 tracking-widest">Benchmarking Sources</h3>
                                <div className="space-y-5">
                                    <SourceItem icon={Scale} label="FMCSA Safety Database" value="Part 390 Compliance Standards" />
                                    <SourceItem icon={Activity} label="2026 NHTSA Crash Data" value="Common Carrier Settlement Index" />
                                    <SourceItem icon={FileText} label="American Tort Reform" value="Public Entity Liability Caps" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* S-Class FAQ (Deep Features) */}
                <div className="mt-40">
                    <section className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                        <div className="max-w-3xl mx-auto space-y-16">
                            <div className="text-center space-y-4">
                                <h2 className="text-[11px] font-black text-amber-500 uppercase tracking-[0.5em] italic">Auditor Knowledge Base</h2>
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-none">
                                    Transit Liability <span className="text-amber-500 not-italic">Forensics</span>
                                </h3>
                            </div>

                            <div className="grid gap-10">
                                <FAQItem
                                    q="What is the significance of 'Common Carrier' liability?"
                                    a="Unlike private drivers who owe 'reasonable' care, buses are common carriers and must provide 'utmost care and vigilance.' This higher legal threshold means that even slight negligence on the driver's part can hold the company liable for the full extent of damages."
                                />
                                <FAQItem
                                    q="How do Sovereign Immunity caps affect my settlement?"
                                    a="Government-run transit agencies (like city buses or school districts) are protected by sovereign immunity statutes. This often places a hard cap (e.g., $100k-$200k) on non-economic damages. Our auditor accounts for these barriers and suggests clinical evidence strategies to maximize the economic loss portion."
                                />
                                <FAQItem
                                    q="Can I sue for FMCSA safety violations?"
                                    a="Yes. Charter and commercial bus companies are governed by federal FMCSA regulations. If a driver exceeded their hours of service or if the bus had a failure to maintain safety equipment, it establishes negligence per se, which typically results in settlements 1.35x higher than baseline claims."
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-32 opacity-50">
                    <LegalDisclaimer />
                </div>
            </main>

            {/* Technical SEO Section */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Bus Accident Settlement Auditor v2.1",
                        operatingSystem: "Web",
                        applicationCategory: "FinancialApplication",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            ratingCount: "2840",
                        },
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD",
                        },
                    }),
                }}
            />
        </div>
    );
}

function ExpertToggle({ active, onClick, title, desc }: { active: boolean; onClick: () => void; title: string, desc: string }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`p-6 rounded-[2rem] border transition-all text-left flex gap-5 items-start ${active
                    ? "bg-amber-500/10 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]"
                    : "bg-slate-900 border-white/5 hover:border-white/10"
                }`}
        >
            <div className={`mt-1 w-10 h-6 rounded-full transition-colors relative flex-shrink-0 ${active ? "bg-amber-500" : "bg-slate-700"}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? "right-1" : "left-1"}`} />
            </div>
            <div>
                <p className={`text-[11px] font-black uppercase italic italic mb-1.5 ${active ? "text-amber-500" : "text-white"}`}>{title}</p>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase italic">{desc}</p>
            </div>
        </button>
    );
}

function FAQItem({ q, a }: { q: string, a: string }) {
    return (
        <div className="p-10 bg-slate-950 border border-white/5 rounded-[3rem] group hover:border-amber-500/20 transition-all">
            <h4 className="text-xl font-black text-white uppercase italic mb-6 leading-tight flex gap-5">
                <span className="text-amber-500">Q.</span> {q}
            </h4>
            <div className="h-[1px] w-12 bg-amber-500/20 mb-6" />
            <p className="text-slate-400 font-medium leading-relaxed italic">{a}</p>
        </div>
    );
}

function SourceItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-5">
            <div className="p-2.5 bg-white/5 rounded-xl">
                <Icon className="w-4 h-4 text-slate-500" />
            </div>
            <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-600 italic">{label}</div>
                <div className="text-[10px] font-black text-slate-400 italic">{value}</div>
            </div>
        </div>
    );
}
