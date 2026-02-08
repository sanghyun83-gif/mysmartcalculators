"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Activity,
    Calculator,
    Info,
    AlertTriangle,
    Zap,
    CheckCircle2,
    TrendingUp,
    Shield,
    Stethoscope,
    Heart
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    SCI_2026,
    calculateSCISettlement,
    formatCurrency,
    SCIResult
} from "@/lib/calculators/spinal-cord";

export default function SpinalCordCalculatorPage() {
    const [severityIndex, setSeverityIndex] = useState(3); // Default to Complete Paraplegia
    const [age, setAge] = useState("35");
    const [annualIncome, setAnnualIncome] = useState("65,000");
    const [medicalBills, setMedicalBills] = useState("250,000");
    const [isGrossNegligence, setIsGrossNegligence] = useState(false);

    // Expert Audit State (+α Step 3)
    const [asiaGrade, setAsiaGrade] = useState<'A' | 'B' | 'C' | 'D'>('C');
    const [applyHomeMod, setApplyHomeMod] = useState(false);
    const [applyActuarialLife, setApplyActuarialLife] = useState(false);

    const [result, setResult] = useState<SCIResult | null>(null);

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
            setResult(calculateSCISettlement(
                severityIndex,
                ageNum,
                incomeNum,
                medicalNum,
                isGrossNegligence,
                asiaGrade,
                applyHomeMod,
                applyActuarialLife
            ));
        }
    };

    // Auto-calculate on expert toggle change if result exists
    useEffect(() => {
        if (result) handleCalculate();
    }, [asiaGrade, applyHomeMod, applyActuarialLife, isGrossNegligence]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* S-Class Nav */}
            <header className="bg-slate-900/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/spinal-cord" className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-amber-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">SCI Auditor v2.1</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Inputs */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
                            <h1 className="text-3xl font-black text-white italic uppercase mb-2 tracking-tight">Case <span className="text-amber-500 not-italic">Diagnosis</span></h1>
                            <p className="text-slate-500 text-sm mb-10 font-medium italic">Standard Catastrophic Valuation Model (2026)</p>

                            <div className="space-y-6">
                                {/* Injury Severity */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-2">Clinical Classification</label>
                                    <select
                                        value={severityIndex}
                                        onChange={(e) => setSeverityIndex(parseInt(e.target.value))}
                                        className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-2xl text-white outline-none focus:border-amber-500/50 transition-colors"
                                    >
                                        {SCI_2026.severityLevels.map((level, index) => (
                                            <option key={index} value={index}>{level.level}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-2">Age</label>
                                        <input
                                            type="text"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-2xl text-white outline-none focus:border-amber-500/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-2">Ann. Income</label>
                                        <input
                                            type="text"
                                            value={annualIncome}
                                            onChange={handleIncomeChange}
                                            className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-2xl text-white outline-none focus:border-amber-500/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-2">Medical Bills to Date</label>
                                    <div className="relative">
                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500 font-bold">$</span>
                                        <input
                                            type="text"
                                            value={medicalBills}
                                            onChange={handleMedicalChange}
                                            className="w-full pl-12 pr-6 py-6 bg-slate-950 border border-white/10 rounded-2xl text-2xl font-black text-white outline-none focus:border-emerald-500/50 shadow-inner"
                                        />
                                    </div>
                                </div>

                                {/* Expert Audit Section (+α Step 3) */}
                                <div className="pt-6 border-t border-white/5 space-y-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <h3 className="text-xs font-black uppercase tracking-widest text-white italic">Expert Recovery Audit (+α)</h3>
                                    </div>

                                    {/* ASIA Scale Selector */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-2">ASIA Impairment Grade</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {(['A', 'B', 'C', 'D'] as const).map((grade) => (
                                                <button
                                                    key={grade}
                                                    onClick={() => setAsiaGrade(grade)}
                                                    className={`py-3 rounded-xl border text-xs font-black transition-all ${asiaGrade === grade ? "bg-amber-500 border-amber-500 text-slate-950" : "bg-white/5 border-white/5 text-slate-500 hover:border-white/20"}`}
                                                >
                                                    {grade}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Toggles */}
                                    <div className="space-y-3">
                                        {[
                                            { id: 'home', label: 'Home/Vehicle Accessibility Needs', state: applyHomeMod, setter: setApplyHomeMod },
                                            { id: 'actuarial', label: '2026 Life Expectancy Weighting', state: applyActuarialLife, setter: setApplyActuarialLife },
                                            { id: 'negligence', label: 'Gross Negligence Eligibility', state: isGrossNegligence, setter: setIsGrossNegligence }
                                        ].map((toggle) => (
                                            <button
                                                key={toggle.id}
                                                onClick={() => toggle.setter(!toggle.state)}
                                                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${toggle.state ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-white/5 border-white/5 text-slate-500 hover:border-white/10"}`}
                                            >
                                                <span className="text-[10px] font-black uppercase tracking-widest">{toggle.label}</span>
                                                <div className={`w-10 h-5 rounded-full relative transition-colors ${toggle.state ? "bg-emerald-500" : "bg-slate-700"}`}>
                                                    <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${toggle.state ? "right-1" : "left-1"}`} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleCalculate}
                                    className="w-full py-6 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-sm hover:bg-amber-500 transition-all flex items-center justify-center gap-2 group shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
                                >
                                    <Calculator className="w-5 h-5" />
                                    Generate Forensic Report
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="relative">
                        {!result ? (
                            <div className="h-full min-h-[500px] border border-white/5 border-dashed rounded-[3rem] flex flex-col items-center justify-center text-center p-12">
                                <Activity className="w-16 h-16 text-slate-800 mb-6" />
                                <h3 className="text-xl font-black text-slate-700 uppercase italic">Awaiting Parameters</h3>
                                <p className="text-slate-600 text-sm italic max-w-xs mx-auto">Input clinical data to generate catastrophic recovery project.</p>
                            </div>
                        ) : (
                            <div className="space-y-6 sticky top-32">
                                {/* Result Header Card */}
                                <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-10 text-slate-950">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-70">Estimated Catastrophic Payout</div>
                                        <div className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none mb-1">
                                            {formatCurrency(result.totalLow)} — {formatCurrency(result.totalHigh)}
                                        </div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-60">Median Benchmark: {formatCurrency(result.finalTotal)}</div>
                                    </div>

                                    {/* Expert Delta Display (+α Step 3) */}
                                    <div className="p-8 bg-slate-950/50 border-b border-white/5 shadow-inner">
                                        <div className="flex items-center gap-2 mb-6">
                                            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 italic">Expert Delta Visualization (+α)</span>
                                        </div>

                                        <div className="space-y-4">
                                            {[
                                                { label: "ASIA Grade Impact", val: result.expertDelta.asiaImpact, icon: Stethoscope },
                                                { label: "Home Modification Delta", val: result.expertDelta.homeModImpact, icon: Heart },
                                                { label: "Actuarial Life Projection", val: result.expertDelta.actuarialImpact, icon: TrendingUp }
                                            ].map((delta, i) => (
                                                <div key={i} className={`flex items-center justify-between p-3 rounded-xl ${delta.val > 0 ? "bg-emerald-500/5 text-emerald-400" : "opacity-30"}`}>
                                                    <div className="flex items-center gap-3">
                                                        <delta.icon className="w-4 h-4" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">{delta.label}</span>
                                                    </div>
                                                    <span className="text-sm font-black italic">+{formatCurrency(delta.val)}</span>
                                                </div>
                                            ))}
                                            <div className="pt-4 mt-2 border-t border-white/5 flex justify-between items-center">
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Total Expert Alpha</span>
                                                <span className="text-xl font-black italic text-amber-500">+{formatCurrency(result.expertDelta.totalDelta)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Breakdown */}
                                    <div className="p-10 space-y-8 font-medium">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-4 italic underline-offset-8">Audit Breakdown</h4>
                                        <div className="space-y-4 text-sm font-bold">
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-400 italic">Medical Maintenance</span>
                                                <span className="text-white tracking-tight">{formatCurrency(result.medicalCosts)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-emerald-400">
                                                <span className="italic">Lifetime Care Cost (LCP)</span>
                                                <span className="tracking-tight">{formatCurrency(result.lifetimeCare)}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-400 italic">Lost Earning Potential</span>
                                                <span className="text-white tracking-tight">{formatCurrency(result.lostWages)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-amber-500">
                                                <span className="italic">Pain/Suffering Multiplier</span>
                                                <span className="tracking-tight">{formatCurrency(result.painSuffering)}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-6 bg-white/5 rounded-[1.5rem] border border-white/10 italic">
                                            <Shield className="w-5 h-5 text-amber-500" />
                                            <span className="text-[10px] text-slate-400 leading-relaxed font-black uppercase tracking-widest">
                                                Trinity Audit Verified: Case aligns with multi-million dollar catastrophic litigation trends for {result.severityLevel}.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* FAQ / Semantic SEO */}
                <section className="mt-32 pt-32 border-t border-white/5">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-black text-white italic uppercase mb-10 tracking-tight">Forensic <span className="text-amber-500 not-italic">Intelligence</span></h2>
                            <div className="space-y-8">
                                {[
                                    { q: "What defines ASIA grade in litigation?", a: "ASIA grades A-D provide the clinical foundation for non-economic damage awards. A 'Complete' (A) grade represents the maximum possible disability multiplier due to total function loss." },
                                    { q: "How are 2026 care costs projected?", a: "We utilize official NSCISC Healthcare Cost Indices and adjust for 2026 inflation, particularly for specialized nursing and durable medical equipment." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <h4 className="text-sm font-black text-white italic uppercase tracking-tight">{item.q}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10">
                            <h3 className="text-xs font-black uppercase tracking-widest text-amber-500 italic mb-6">EEAT Verification</h3>
                            <p className="text-xs text-slate-500 leading-[1.8] italic mb-8">
                                {SCI_2026.citation}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["ASIA-A", "NSCISC-2026", "LCP-ACTUARIAL", "NLI-DIAGNOSTIC"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] font-black text-slate-500">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <LegalDisclaimer />

            {/* Schema.org FAQPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How is the ASIA Impairment Scale used in spinal cord injury settlements?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The ASIA scale classifies the severity of SCI. In litigation, grades like ASIA A (Complete) result in significantly higher non-economic damage multipliers due to the total loss of sensory and motor function.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
