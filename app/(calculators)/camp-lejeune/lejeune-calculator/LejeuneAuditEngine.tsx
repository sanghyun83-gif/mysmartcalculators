"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Droplet,
    Calculator,
    Info,
    AlertTriangle,
    Calendar,
    Zap,
    Award,
    TrendingUp,
    ChevronDown,
    ChevronUp,
    ShieldCheck,
    Stethoscope,
    Activity
} from "lucide-react";
import {
    SITE,
    LEJEUNE_2026,
    calculateLejeuneSettlement,
    formatCurrency,
    LejeuneResult
} from "@/lib/calculators/camp-lejeune";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export function LejeuneAuditEngineComponent() {
    const [conditionIndex, setConditionIndex] = useState(0);
    const [exposureIndex, setExposureIndex] = useState(2);
    const [claimantIndex, setClaimantIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [isExpertMode, setIsExpertMode] = useState(false);
    const [useEESTrack, setUseEESTrack] = useState(true);
    const [result, setResult] = useState<LejeuneResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const medicalNum = parseVal(medicalBills);
        setResult(calculateLejeuneSettlement(
            conditionIndex,
            exposureIndex,
            claimantIndex,
            medicalNum,
            isExpertMode,
            useEESTrack
        ));
    };

    const selectedCond = LEJEUNE_2026.conditions[conditionIndex];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Minimal Header */}
            <header className="border-b border-white/5 py-6">
                <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/camp-lejeune" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-xs font-black uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Hub
                    </Link>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">v2.1 Bio-Toxic Auditor</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Calculator */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                                <Calculator className="w-64 h-64 text-white" />
                            </div>

                            <div className="relative z-10">
                                <h1 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                                    Settlement <span className="text-amber-500">Auditor</span>
                                </h1>
                                <p className="text-slate-400 text-sm font-medium mb-10 italic">Execute 2026 CLJA/PACT Act recovery simulation.</p>

                                <div className="space-y-8">
                                    {/* Medical Condition */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                            <Stethoscope className="w-3 h-3 text-amber-500" />
                                            Diagnosed Condition (PACT Act Tier)
                                        </label>
                                        <select
                                            value={conditionIndex}
                                            onChange={(e) => setConditionIndex(parseInt(e.target.value))}
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 text-lg font-black text-white focus:ring-0 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                                        >
                                            {LEJEUNE_2026.conditions.map((c, i) => (
                                                <option key={i} value={i}>{c.condition} (Tier {c.tier})</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Time at Lejeune */}
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Residence Duration</label>
                                            <select
                                                value={exposureIndex}
                                                onChange={(e) => setExposureIndex(parseInt(e.target.value))}
                                                className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-white focus:ring-0 focus:border-amber-500 transition-all"
                                            >
                                                {LEJEUNE_2026.exposureYears.map((e, i) => (
                                                    <option key={i} value={i}>{e.period}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Claimant Type */}
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Legal Standing</label>
                                            <select
                                                value={claimantIndex}
                                                onChange={(e) => setClaimantIndex(parseInt(e.target.value))}
                                                className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-white focus:ring-0 focus:border-amber-500 transition-all"
                                            >
                                                {LEJEUNE_2026.claimantTypes.map((c, i) => (
                                                    <option key={i} value={i}>{c.type}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Medical Expenses */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                            <Droplet className="w-3 h-3 text-amber-500" />
                                            Audited Medical Economic Losses
                                        </label>
                                        <div className="relative group">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-600 group-focus-within:text-amber-500 transition-colors">$</span>
                                            <input
                                                type="text"
                                                value={medicalBills}
                                                onChange={handleMedicalChange}
                                                className="w-full bg-slate-950 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-2xl font-black text-white focus:ring-0 focus:border-amber-500 transition-all placeholder:text-slate-800"
                                            />
                                        </div>
                                    </div>

                                    {/* Expert Audit Toggles */}
                                    <div className="pt-4 border-t border-white/5 space-y-4">
                                        <button
                                            onClick={() => setIsExpertMode(!isExpertMode)}
                                            className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                <Zap className={`w-3 h-3 ${isExpertMode ? "text-amber-500 fill-amber-500" : "text-slate-500"}`} />
                                                Expert Audit Mode (+α)
                                            </span>
                                            {isExpertMode ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </button>

                                        {isExpertMode && (
                                            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                                {/* DOJ EESTrack vs Tort */}
                                                <div className="flex items-center justify-between p-5 bg-slate-950 rounded-2xl border border-white/5">
                                                    <div>
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Recovery Track</div>
                                                        <div className="text-[8px] text-slate-500 font-bold uppercase">Expedited vs Litigation Potential</div>
                                                    </div>
                                                    <div className="flex bg-slate-900 p-1 rounded-xl">
                                                        <button
                                                            onClick={() => setUseEESTrack(true)}
                                                            className={`px-4 py-2 rounded-lg text-[8px] font-black uppercase transition-all ${useEESTrack ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-500 hover:text-white"}`}
                                                        >EES Track</button>
                                                        <button
                                                            onClick={() => setUseEESTrack(false)}
                                                            className={`px-4 py-2 rounded-lg text-[8px] font-black uppercase transition-all ${!useEESTrack ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-500 hover:text-white"}`}
                                                        >Full Tort</button>
                                                    </div>
                                                </div>

                                                <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                                                    <div className="flex gap-2">
                                                        <Info className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                                                        <p className="text-[9px] text-slate-400 italic font-medium leading-relaxed">
                                                            {useEESTrack
                                                                ? "EES Track leverages the 2026 DOJ expedited payment schedule ($100k-$450k caps)."
                                                                : "Full Tort track calculates potential trial verdicts bypassing DOJ caps via toxicological forensic evidence."}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        onClick={handleCalculate}
                                        className="group w-full py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-amber-500 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                                    >
                                        <Zap className="w-5 h-5 fill-current" />
                                        Execute Recovery Audit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <LegalDisclaimer />
                    </div>

                    {/* Right Column: Results & IQ */}
                    <div className="lg:col-span-5 space-y-8">
                        {result ? (
                            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                                {/* Result Card */}
                                <div className="bg-amber-500 rounded-[2.5rem] p-10 text-slate-950 shadow-2xl shadow-amber-500/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                                        <Award className="w-32 h-32" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-70 italic">Projected Valuation</div>
                                        <div className="text-6xl font-black tracking-tighter italic mb-4">{formatCurrency(result.totalMid)}</div>
                                        <div className="flex items-center gap-2 mb-8">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Range: {formatCurrency(result.totalLow)} ??{formatCurrency(result.totalHigh)}</span>
                                        </div>

                                        {result.expertDelta > 0 && (
                                            <div className="p-4 bg-slate-950/20 backdrop-blur-md rounded-2xl border border-slate-950/10">
                                                <div className="text-[10px] font-black uppercase tracking-widest mb-1">Expert Data Offset</div>
                                                <div className="text-2xl font-black italic">+{formatCurrency(result.expertDelta)}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Itemized Breakdown */}
                                <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 italic">Audit Intelligence Breakdown</h3>
                                    <div className="space-y-6">
                                        {[
                                            { label: "Base Condition Value", val: formatCurrency(result.baseDamages) },
                                            { label: "Economic Damage Multiplier", val: `+${formatCurrency(result.medicalCosts)}`, highlight: true },
                                            { label: "Exposure Seniority Bonus", val: `+${formatCurrency(result.exposureBonus)}` },
                                            { label: "Claimant Alpha Status", val: `+${formatCurrency(result.claimantBonus)}` }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-end gap-4 pb-4 border-b border-white/5">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                                                <span className={`text-lg font-black italic ${item.highlight ? "text-amber-500" : "text-white"}`}>
                                                    {item.val}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="flex justify-between items-end pt-4">
                                            <span className="text-sm font-black uppercase tracking-widest text-white">Projected Case Value</span>
                                            <span className="text-3xl font-black text-amber-500 italic">{formatCurrency(result.totalMid)}</span>
                                        </div>
                                    </div>
                                    <div className="mt-10 p-6 bg-slate-950 rounded-2xl border border-white/5">
                                        <div className="flex items-start gap-3">
                                            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-[10px] leading-relaxed text-slate-400 font-medium italic">
                                                **Note**: 2026 Audit incorporates CLJA forensic standards. High-value cases often bypass the elective track to target $1M+ litigation payouts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-900/40 border border-white/5 border-dashed rounded-[3rem]">
                                <div className="p-6 bg-white/5 rounded-full mb-6 relative">
                                    <Activity className="w-12 h-12 text-blue-500" />
                                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase italic mb-2">Awaiting Case Metrics</h3>
                                <p className="text-xs text-slate-500 font-medium max-w-[200px] mx-auto uppercase tracking-widest leading-loose">
                                    Select clinical staging to trigger the toxic water audit protocol.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* v2.1 SEO Software Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Camp Lejeune v2.1 Recovery Auditor",
                        "operatingSystem": "All",
                        "applicationCategory": "FinanceApplication",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },})
                }}
            />
        </div>
    );
}

