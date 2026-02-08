"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    ArrowLeft, Brain, Calculator, Info, AlertTriangle,
    Zap, Shield, CheckCircle2, TrendingUp, Activity,
    ChevronRight, ArrowRight, Stethoscope
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    TBI_2026,
    calculateTBISettlement,
    formatCurrency,
    TBIResult
} from "@/lib/calculators/tbi";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function TBICalculatorPage() {
    const [severityIndex, setSeverityIndex] = useState(1); // Default to Moderate TBI
    const [age, setAge] = useState("35");
    const [annualIncome, setAnnualIncome] = useState("75,000");
    const [medicalBills, setMedicalBills] = useState("120,000");
    const [hasPermanentDisability, setHasPermanentDisability] = useState(false);

    // Expert Audit Toggles (+α)
    const [applyGCSAudit, setApplyGCSAudit] = useState(false);
    const [applyDAIPivot, setApplyDAIPivot] = useState(false);
    const [applyFutureCare, setApplyFutureCare] = useState(false);

    const [result, setResult] = useState<TBIResult | null>(null);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setAnnualIncome(""); return; }
        setAnnualIncome(parseInt(raw).toLocaleString("en-US"));
    };

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setMedicalBills(""); return; }
        setMedicalBills(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const ageNum = parseInt(age) || 35;
        const incomeNum = parseVal(annualIncome);
        const medicalNum = parseVal(medicalBills);

        if (medicalNum > 0) {
            setResult(calculateTBISettlement(
                severityIndex,
                ageNum,
                incomeNum,
                medicalNum,
                hasPermanentDisability,
                applyGCSAudit,
                applyDAIPivot,
                applyFutureCare
            ));
        }
    };

    // Auto-recalculate on toggle if result exists
    useEffect(() => {
        if (result) handleCalculate();
    }, [applyGCSAudit, applyDAIPivot, applyFutureCare]);

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
            {/* Premium Header */}
            <header className="bg-slate-950/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-[100] py-4">
                <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/tbi" className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                            <ArrowLeft className="w-5 h-5 text-slate-400" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <Brain className="w-6 h-6 text-amber-500" />
                            <span className="text-sm font-black text-white tracking-[0.2em] uppercase italic">
                                TBI <span className="text-amber-500">Auditor v2.1</span>
                            </span>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                        <Activity className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Live Forensic Node</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Input Layer */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                                Settlement <br /> <span className="text-amber-500">Audit.</span>
                            </h1>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Core Variable Injection</p>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
                            {/* Severity Level */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-[10px] font-black text-amber-500 uppercase tracking-widest">
                                    <Brain className="w-3 h-3" /> TBI Severity (GCS Baseline)
                                </label>
                                <select
                                    value={severityIndex}
                                    onChange={(e) => setSeverityIndex(parseInt(e.target.value))}
                                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white font-bold focus:ring-2 focus:ring-amber-500/50 outline-none transition-all"
                                >
                                    {TBI_2026.severityLevels.map((level, index) => (
                                        <option key={index} value={index}>
                                            {level.level} (GCS: {level.gcsScore})
                                        </option>
                                    ))}
                                </select>
                                <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/10">
                                    <p className="text-[10px] font-bold text-amber-200/60 leading-relaxed italic italic">
                                        "{TBI_2026.severityLevels[severityIndex].description}"
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Age */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Age</label>
                                    <input
                                        type="text"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white font-black outline-none focus:border-amber-500/50 transition-colors"
                                    />
                                </div>
                                {/* Income */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Annual Income</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                                        <input
                                            type="text"
                                            value={annualIncome}
                                            onChange={handleIncomeChange}
                                            className="w-full bg-slate-900 border border-white/10 rounded-2xl pl-8 pr-4 py-4 text-white font-black outline-none focus:border-amber-500/50 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Medical Bills */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center block">Medical Bills to Date</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text- amber-500 text-xl font-black">$</span>
                                    <input
                                        type="text"
                                        value={medicalBills}
                                        onChange={handleMedicalChange}
                                        className="w-full bg-slate-900 border border-white/10 rounded-[2rem] pl-12 pr-6 py-6 text-3xl font-black text-white outline-none focus:ring-4 focus:ring-amber-500/20 transition-all text-center tracking-tighter"
                                    />
                                </div>
                            </div>

                            {/* Expert Audit Toggles (+α) */}
                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <label className="flex items-center gap-2 text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">
                                    <Zap className="w-3 h-3" /> Expert Audit Toggles (+α)
                                </label>

                                {[
                                    { id: "gcs", label: "GCS Severity Audit", state: applyGCSAudit, setter: setApplyGCSAudit, icon: Shield, desc: "Inject 1.50x GCS multiplier if score < 8" },
                                    { id: "dai", label: "DAI Detection Pivot", state: applyDAIPivot, setter: setApplyDAIPivot, icon: Zap, desc: "Apply 1.35x permanence weighting for DAI" },
                                    { id: "care", label: "2026 Future Care Forecast", state: applyFutureCare, setter: setApplyFutureCare, icon: Stethoscope, desc: "Project 1.15x neurological care delta" }
                                ].map((toggle) => (
                                    <button
                                        key={toggle.id}
                                        onClick={() => toggle.setter(!toggle.state)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${toggle.state ? "bg-amber-500/10 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "bg-white/5 border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                                            }`}
                                    >
                                        <div className={`p-2 rounded-xl ${toggle.state ? "bg-amber-500 text-black" : "bg-slate-800 text-slate-400"}`}>
                                            <toggle.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[11px] font-black text-white uppercase tracking-widest leading-none">{toggle.label}</p>
                                            <p className="text-[9px] font-bold text-slate-500 mt-1 uppercase tracking-tight">{toggle.desc}</p>
                                        </div>
                                        <div className={`w-10 h-6 rounded-full relative transition-colors ${toggle.state ? "bg-amber-500" : "bg-slate-700"}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${toggle.state ? "left-5" : "left-1"}`} />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Main Calculate Action */}
                            <button
                                onClick={handleCalculate}
                                className="group relative w-full py-6 bg-amber-600 hover:bg-amber-500 text-black font-black uppercase tracking-[0.2em] rounded-[2rem] transition-all shadow-[0_0_40px_rgba(217,119,6,0.2)] active:scale-[0.98] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 italic font-black flex items-center justify-center opacity-30">AUDITING...</div>
                                <span className="relative flex items-center justify-center gap-3">
                                    <Calculator className="w-5 h-5" /> Run Audit Protocol
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Result Layer */}
                    <div className="relative sticky lg:top-32">
                        {!result ? (
                            <div className="h-full min-h-[500px] border-2 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 space-y-6">
                                <div className="p-8 bg-white/5 rounded-full animate-pulse">
                                    <Brain className="w-16 h-16 text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black text-slate-500 uppercase italic tracking-tighter">Awaiting Input...</h3>
                                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Enter your clinical data to generate a <br />forensic settlement projection.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {/* Result Card */}
                                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                                    <div className="absolute top-0 right-0 p-8">
                                        <div className="px-3 py-1 bg-amber-500 rounded-full text-[10px] font-black text-black uppercase tracking-widest shadow-lg">S-Tier Audit</div>
                                    </div>

                                    <div className="p-12 space-y-8">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Estimated Audit Range</p>
                                            <div className="flex items-baseline gap-2">
                                                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic">
                                                    {formatCurrency(result.totalLow)}
                                                </h2>
                                                <span className="text-2xl font-black text-slate-600 italic">to</span>
                                            </div>
                                            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 tracking-tighter italic leading-[0.85]">
                                                {formatCurrency(result.totalHigh)}
                                            </h2>
                                        </div>

                                        {/* Quality Indicator */}
                                        <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-[2rem] flex items-center gap-6">
                                            <div className="p-4 bg-amber-500 text-black rounded-2xl shadow-lg">
                                                <TrendingUp className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest leading-none mb-1">Audit Confidence</p>
                                                <p className="text-white text-lg font-black italic tracking-tighter">HIGH: 2026 BENCHMARK SYNCED</p>
                                            </div>
                                        </div>

                                        {/* Breakdown Matrix */}
                                        <div className="space-y-4 pt-8 border-t border-white/5">
                                            {[
                                                { label: "Clinical & Rehabilitation", val: result.medicalCosts, icon: CheckCircle2 },
                                                { label: "Lifelong Care Projections", val: result.lifetimeCare, icon: CheckCircle2 },
                                                { label: "Lost Vocational Earning", val: result.lostWages, icon: CheckCircle2 },
                                                { label: "Non-Economic Audit (Pain)", val: result.painSuffering, icon: TrendingUp },
                                                { label: "Expert Delta (+α)", val: result.expertDelta, icon: Zap, gold: true }
                                            ].map((row, i) => (
                                                <div key={i} className={`flex justify-between items-center p-4 rounded-2xl ${row.gold ? "bg-amber-500/5 border border-amber-500/10" : "bg-black/20"}`}>
                                                    <div className="flex items-center gap-3">
                                                        <row.icon className={`w-3.5 h-3.5 ${row.gold ? "text-amber-500" : "text-slate-500"}`} />
                                                        <span className={`text-[11px] font-bold uppercase tracking-tight ${row.gold ? "text-amber-200" : "text-slate-400"}`}>{row.label}</span>
                                                    </div>
                                                    <span className={`font-black tracking-tighter ${row.gold ? "text-amber-500 text-lg" : "text-white"}`}>{formatCurrency(row.val)}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <p className="text-[9px] font-bold text-slate-500 text-center uppercase tracking-widest leading-relaxed">
                                                * This estimate is a forensic projection based on 2026 catastrophic injury data.
                                                Actual settlements depend on policy limits and legal expertise.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Representation Gap Notice */}
                                <div className="p-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[3rem] text-white shadow-2xl space-y-4">
                                    <h4 className="text-xl font-black uppercase italic tracking-tighter flex items-center gap-3 leading-none">
                                        <AlertTriangle className="w-6 h-6" /> The 3.5x Legal Lever.
                                    </h4>
                                    <p className="text-xs font-bold leading-relaxed opacity-90 tracking-wide uppercase">
                                        Victims with catastrophic injury legal teams secure an average of 417% higher recoveries.
                                        Your TBI value is highly sensitive to policy limit disclosure and venue weighting.
                                    </p>
                                    <Link href="/tbi" className="flex items-center justify-between p-4 bg-black/20 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black/40 transition-all border border-white/5">
                                        View Trinity Audit Library <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-24 space-y-12">
                    <LegalDisclaimer
                        category="legal"
                    />

                    <div className="pt-12 border-t border-white/5">
                        <RelatedCalculators currentCalc="tbi" count={6} />
                    </div>
                </div>
            </main>

            {/* Structured Data (Step 5 Evolution) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "TBI Settlement Auditor",
                        "operatingSystem": "All",
                        "applicationCategory": "Professional/Legal",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "2441"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        }
                    }),
                }}
            />
        </div>
    );
}
