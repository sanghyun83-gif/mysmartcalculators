"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    ArrowLeft, Building, Calculator, Info, AlertTriangle,
    CheckCircle2, Gauge, ShieldCheck, Scale, Gavel, Eye, Footprints
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    SLIP_FALL_CONSTANTS_2026,
    calculateSlipFallSettlement,
    formatCurrency,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/slip-and-fall";

export default function SlipFallSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [faultPercent, setFaultPercent] = useState(0);
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("moderate");
    const [location, setLocation] = useState("retail");
    const [hasAttorney, setHasAttorney] = useState(true);

    // Expert Toggles (+α Step 3)
    const [hasActualNotice, setHasActualNotice] = useState(false);
    const [hasAnsiBreach, setHasAnsiBreach] = useState(false);
    const [hasSurveillance, setHasSurveillance] = useState(false);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            setter(raw === "" ? "" : parseInt(raw).toLocaleString("en-US"));
        };

    const result = useMemo(() => {
        const medical = parseFormattedNumber(medicalExpenses);
        const wages = parseFormattedNumber(lostWages);
        if (medical === 0 && wages === 0) return null;

        return calculateSlipFallSettlement(
            medical, wages, faultPercent, severity, hasAttorney, location,
            hasActualNotice, hasAnsiBreach, hasSurveillance
        );
    }, [medicalExpenses, lostWages, faultPercent, severity, hasAttorney, location, hasActualNotice, hasAnsiBreach, hasSurveillance]);

    const severityOptions = [
        { value: "minor", label: "Minor", desc: "Bruises, sprains" },
        { value: "moderate", label: "Moderate", desc: "Fractures, surgery" },
        { value: "severe", label: "Severe", desc: "Spinal/Back injury" },
        { value: "catastrophic", label: "Catastrophic", desc: "TBI, Hip Fracture" },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* S-Class Premium Header */}
            <header className="border-b border-white/5 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/slip-and-fall" className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <Footprints className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-black uppercase tracking-tighter text-white italic">Case Auditor <span className="text-amber-500 not-italic">v2.1</span></span>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">2026 ANSI Standards</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Forensic Inputs */}
                    <div className="lg:col-span-7 space-y-10">
                        <section>
                            <h1 className="text-4xl font-black text-white mb-4 uppercase italic">Forensic <span className="text-amber-500 not-italic">Liability Audit</span></h1>
                            <p className="text-slate-400 font-medium">Inject your case specifics to quantify the 2026 Premises Liability settlement floor.</p>
                        </section>

                        <div className="space-y-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
                            {/* Economic Core */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3 font-black">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 italic">Medical Expenses</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-5 flex items-center text-amber-500/50 group-focus-within:text-amber-500 transition-colors font-black">$</div>
                                        <input
                                            type="text"
                                            value={medicalExpenses}
                                            onChange={handleInputChange(setMedicalExpenses)}
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 pl-10 pr-6 text-xl font-black text-white focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-800"
                                            placeholder="25,000"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3 font-black">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 italic">Lost Wages</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-5 flex items-center text-amber-500/50 group-focus-within:text-amber-500 transition-colors font-black">$</div>
                                        <input
                                            type="text"
                                            value={lostWages}
                                            onChange={handleInputChange(setLostWages)}
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 pl-10 pr-6 text-xl font-black text-white focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-800"
                                            placeholder="5,000"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Expert Toggles (+α Step 3) */}
                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-black italic">Expert Liability Multipliers</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: "notice", label: "Actual Notice Established", state: hasActualNotice, setter: setHasActualNotice, icon: Gavel, desc: "Owner was aware of hazard" },
                                        { id: "ansi", label: "ANSI B101.1 Breach", state: hasAnsiBreach, setter: setHasAnsiBreach, icon: ShieldCheck, desc: "Sub-standard slip resistance" },
                                        { id: "video", label: "Surveillance Proof", state: hasSurveillance, setter: setHasSurveillance, icon: Eye, desc: "Video evidence of impact" }
                                    ].map((toggle) => (
                                        <button
                                            key={toggle.id}
                                            onClick={() => toggle.setter(!toggle.state)}
                                            className={`p-5 rounded-2xl border transition-all text-left flex items-start gap-4 ${toggle.state ? "bg-amber-500/10 border-amber-500/30" : "bg-slate-950 border-white/5 hover:border-white/10"}`}
                                        >
                                            <div className={`p-2 rounded-lg ${toggle.state ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-500"}`}>
                                                <toggle.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className={`text-xs font-black uppercase tracking-tight ${toggle.state ? "text-amber-400" : "text-slate-400"} italic`}>{toggle.label}</p>
                                                <p className="text-[10px] font-medium text-slate-600 mt-1">{toggle.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Severity Grid */}
                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black italic">Incident Severity Audit</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {severityOptions.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setSeverity(opt.value as any)}
                                            className={`p-4 rounded-xl border text-xs font-black uppercase tracking-widest transition-all italic font-black ${severity === opt.value ? "bg-white text-slate-950 border-white" : "bg-slate-950 border-white/5 text-slate-500 hover:border-white/20"}`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Fault Range */}
                            <div className="space-y-6 pt-4 border-t border-white/5">
                                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black italic">
                                    <span className="text-slate-500 uppercase italic font-black">Comparative Fault Audit</span>
                                    <span className={faultPercent > 50 ? "text-red-500" : "text-amber-500"}>{faultPercent}% LIABILITY</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={faultPercent}
                                    onChange={(e) => setFaultPercent(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                {faultPercent > 50 && (
                                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                        <AlertTriangle className="w-4 h-4 text-red-500" />
                                        <p className="text-[10px] font-black text-red-400 uppercase tracking-widest italic font-black italic">Warning: 51% Fault Bar May Void Recovery</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <LegalDisclaimer className="text-slate-600 bg-transparent py-0" />
                    </div>

                    {/* Right Column: Actuarial Output */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28 space-y-6">
                            {result ? (
                                <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[80px] group-hover:bg-amber-500/20 transition-all" />

                                    <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                                        <Gauge className="w-5 h-5 text-amber-500" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 uppercase italic font-black">Forensic Payout Summary</span>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/80 uppercase italic font-black">Expected Net Recovery</p>
                                            <div className="text-6xl font-black tracking-tighter text-white uppercase italic">
                                                {formatCurrency(result.netEstimation)}
                                            </div>
                                            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mt-2 uppercase italic font-black font-black">
                                                Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                                            </div>
                                        </div>

                                        {/* Forensic Delta (+α Step 4) */}
                                        {(hasActualNotice || hasAnsiBreach || hasSurveillance) && (
                                            <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/30 space-y-3 relative overflow-hidden">
                                                <div className="absolute -right-4 -top-4 transform rotate-12">
                                                    <ShieldCheck className="w-20 h-20 text-amber-500/10" />
                                                </div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 italic font-black">Liability Premium Delta</p>
                                                <div className="text-2xl font-black text-white italic">+{formatCurrency(result.expertBonus)}</div>
                                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest uppercase italic font-black">Added Value via Forensic Toggles</p>
                                            </div>
                                        )}

                                        <div className="space-y-4 font-black">
                                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                                <span className="text-[10px] text-slate-500 uppercase tracking-widest italic font-black">P&S Multiplier</span>
                                                <span className="text-sm text-white italic">{result.painSufferingMultiplier}x</span>
                                            </div>
                                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                                <span className="text-[10px] text-slate-500 uppercase tracking-widest italic font-black">Lien Mitigation</span>
                                                <span className="text-sm text-red-500">-32% EST.</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-4">
                                                <span className="text-[10px] text-white uppercase tracking-widest italic font-black">Attorney Commission</span>
                                                <span className="text-sm text-slate-300 italic">33.3%</span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-amber-500 transition-all hover:scale-105 shadow-xl text-xs italic">
                                            Export Audit Report
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-16 text-center space-y-6">
                                    <div className="w-20 h-20 bg-slate-950 rounded-[2rem] flex items-center justify-center mx-auto border border-white/5">
                                        <Calculator className="w-10 h-10 text-slate-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest italic font-black">Engine Standby</p>
                                        <p className="text-slate-400 text-sm font-medium italic">Enter medical expenses to initialize premises liability forensics.</p>
                                    </div>
                                </div>
                            )}

                            {/* Trust Badge */}
                            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] flex items-center gap-6 group hover:border-amber-500/20 transition-all">
                                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 font-black">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-white uppercase italic tracking-tight font-black">ANSI/NFSI Verified</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 uppercase italic font-black font-black italic">B101.1 Safety Compliance</p>
                                </div>
                                <CheckCircle2 className="w-4 h-4 ml-auto text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
