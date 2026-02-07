"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Leaf, ArrowLeft, ChevronRight, Info, Shield,
    Calculator, DollarSign, Scale, Gavel, MapPin, Search, Star, AlertTriangle, BarChart3, Pill, Microscope, Stethoscope, CheckCircle2, ArrowRight
} from "lucide-react";
import {
    calculateRoundupSettlement, formatCurrency, getInjuryTiers, getExposureLevels
} from "@/lib/calculators/roundup";

export function CalculatorClient() {
    const [injury, setInjury] = useState<any>("nhl-stage-1-2");
    const [exposure, setExposure] = useState<any>("med");
    const [medicalBills, setMedicalBills] = useState("75000");
    const [isCommercial, setIsCommercial] = useState(false);
    const [pre2015, setPre2015] = useState(false);
    const [hasMonsanto, setHasMonsanto] = useState(false); // +α Step 4
    const [hasWarn, setHasWarn] = useState(false); // +α Step 4
    const [hasDurnell, setHasDurnell] = useState(false); // +α Step 4

    const results = useMemo(() => {
        return calculateRoundupSettlement(
            injury,
            exposure,
            parseInt(medicalBills.replace(/[^0-9]/g, '')) || 0,
            isCommercial,
            pre2015,
            hasMonsanto,
            hasWarn,
            hasDurnell
        );
    }, [injury, exposure, medicalBills, isCommercial, pre2015, hasMonsanto, hasWarn, hasDurnell]);

    return (
        <>
            <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                {/* Input Panel (LHS) */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                            <Microscope className="w-3 h-3" /> Roundup Precision Input v4.21
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Settlement <span className="text-emerald-500 italic">Audit</span>.</h1>
                        <p className="text-slate-400 font-medium text-lg italic">Calibrate your potential recovery based on clinical NHL tiers and phosphonate exposure chronologies.</p>
                    </div>

                    <div className="grid gap-10">
                        {/* 1. Diagnostic Tier */}
                        <div className="space-y-4">
                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Stethoscope className="w-3.5 h-3.5" /> Diagnostic Classification
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {getInjuryTiers().map((tier) => (
                                    <button
                                        key={tier.id}
                                        onClick={() => setInjury(tier.id)}
                                        className={`p-6 rounded-2xl border text-left transition-all ${injury === tier.id
                                            ? 'bg-emerald-500/10 border-emerald-500 text-white ring-1 ring-emerald-500 shadow-2xl shadow-emerald-500/10'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                                            }`}
                                    >
                                        <div className="text-sm font-black mb-1">{tier.label}</div>
                                        <div className="text-[10px] opacity-60 font-medium">Standard Valuation Base: {formatCurrency(tier.baseValue)}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Exposure Metric */}
                        <div className="space-y-4">
                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Leaf className="w-3.5 h-3.5" /> Lifetime Exposure Load
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {getExposureLevels().map((lvl) => (
                                    <button
                                        key={lvl.id}
                                        onClick={() => setExposure(lvl.id)}
                                        className={`py-4 rounded-xl border text-center text-xs font-black transition-all ${exposure === lvl.id
                                            ? 'bg-emerald-500 text-white border-emerald-500'
                                            : 'bg-white/5 border-white/10 text-slate-500 hover:border-white/20'
                                            }`}
                                    >
                                        {lvl.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Economic Variable */}
                        <div className="space-y-4">
                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                <DollarSign className="w-3.5 h-3.5" /> Documented Medical Expenses
                            </label>
                            <div className="relative group">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 font-black group-focus-within:text-emerald-500 text-xl transition-colors">$</div>
                                <input
                                    type="text"
                                    value={medicalBills}
                                    onChange={(e) => setMedicalBills(e.target.value)}
                                    className="w-full bg-slate-900 border-2 border-white/5 rounded-3xl p-6 pl-12 text-2xl font-black text-white outline-none focus:border-emerald-500/50 transition-all shadow-inner"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* 4. Aggravating Modifiers */}
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Liability Modifiers</h4>
                                <div className="space-y-5">
                                    {[
                                        { id: 'comm', l: 'Commercial Usage (Landscaping/Farm)', v: isCommercial, s: setIsCommercial },
                                        { id: 'pre15', l: 'Pre-2015 Diagnosis Window', v: pre2015, s: setPre2015 },
                                        { id: 'monsanto', l: 'Monsanto Papers Evidence (+α)', v: hasMonsanto, s: setHasMonsanto },
                                        { id: 'warn', l: 'Failure to Warn Aggravation (+α)', v: hasWarn, s: setHasWarn },
                                        { id: 'durnell', l: '2026 Durnell SC Catalyst (+α)', v: hasDurnell, s: setHasDurnell }
                                    ].map((f) => (
                                        <label key={f.id} className="flex items-center gap-4 cursor-pointer group">
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    className="peer sr-only"
                                                    checked={f.v}
                                                    onChange={e => f.s(e.target.checked)}
                                                />
                                                <div className="w-6 h-6 border-2 border-white/10 rounded-lg bg-white/5 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all shadow-lg" />
                                                <CheckCircle2 className="w-4 h-4 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-all" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors leading-tight">{f.l}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl flex items-center gap-5 group transition-colors hover:bg-emerald-500/10">
                                <div className="p-3 bg-emerald-500/20 rounded-2xl group-hover:bg-emerald-500/30 transition-colors">
                                    <AlertTriangle className="w-6 h-6 text-emerald-500" />
                                </div>
                                <div className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.15em] leading-relaxed">
                                    IARC Monograph 112: Probable carcinogen status anchors liability pre-2015.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel (RHS) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 space-y-8">
                        <div className="p-12 bg-gradient-to-br from-[#0c111d] to-black border border-emerald-500/20 rounded-[4rem] shadow-2xl shadow-emerald-500/5 space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Gavel className="w-32 h-32 text-emerald-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-2 p-1 bg-emerald-500/10 w-fit rounded">Audit Result</div>
                                <div className="text-sm font-black text-slate-400 tracking-tight italic">
                                    {results.injuryLabel} / {results.exposureLabel} Factor
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none shrink-0">
                                    {formatCurrency(results.totalMid)}
                                </div>
                                <div className="flex items-center gap-4 text-lg font-black text-slate-500 tracking-tight px-1 py-1 rounded-xl bg-white/5 w-fit">
                                    <span className="text-emerald-500/80"> {formatCurrency(results.totalLow)}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-700" />
                                    <span>{formatCurrency(results.totalHigh)}</span>
                                </div>
                            </div>

                            <div className="space-y-5 pt-10 border-t border-white/5 text-[11px]">
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Benchmarked Base</span>
                                    <span className="text-white font-black">{formatCurrency(results.baseValue)}</span>
                                </div>
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Lifetime Exposure Factor</span>
                                    <span className="text-emerald-400 font-black">x{results.exposureFactor.toFixed(1)}</span>
                                </div>
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Scientific Liability Weight</span>
                                    <span className="text-amber-500 font-black">X{results.liabilityMultiplier.toFixed(2)}</span>
                                </div>
                                {results.expertBonus > 0 && (
                                    <div className="flex justify-between items-center group/item pt-4 border-t border-emerald-500/10">
                                        <span className="text-emerald-500 font-black uppercase tracking-[0.2em] italic">Forensic Liability Delta</span>
                                        <span className="text-emerald-500 font-black animate-pulse">+{formatCurrency(results.expertBonus)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center group/item pt-4 border-t border-white/5">
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 font-bold uppercase tracking-widest italic text-[10px]">Forensic Net Payout</span>
                                        <span className="text-[9px] text-slate-600 font-medium">After estimated 2026 Admin Liens</span>
                                    </div>
                                    <span className="text-white font-black text-lg">{formatCurrency(results.netEstimation)}</span>
                                </div>
                            </div>

                            <div className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em] text-center pt-6 border-t border-white/5 italic">
                                S-Class Actuarial Engine v4.0 @ 2026
                            </div>
                        </div>

                        {/* Verified Badge */}
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1a] bg-slate-800 flex items-center justify-center text-[10px] font-black text-emerald-500">DA</div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500">Compliance Audit</div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest">Expert Analysts</div>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-emerald-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Content: The 1,000 Word Principle Continues */}
            <section className="bg-slate-900/40 border-t border-white/5 py-32">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-white italic tracking-tighter">Understanding the NHL Settlement Points System</h2>
                        <p className="text-slate-400 text-xl leading-[1.8] font-bold">
                            Roundup litigation (MDL 2741) is not a simple injury case. It is a multi-billion dollar actuarial puzzle. The Special Master utilizes a structured matrix where points are allocated based on three non-negotiable pillars: Diagnostic Severity, Duration of Exposure, and Age at Diagnosis.
                        </p>
                    </div>

                    <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg font-medium leading-[2.2] space-y-12">
                        <div className="p-10 bg-black rounded-[3rem] border border-white/10 shadow-2xl italic">
                            "The difference between a Tier 1 and Tier 3 award often comes down to the quality of pharmacy dispense records and medical oncology staging documentation."
                        </div>

                        <h3 className="text-white text-2xl font-black tracking-tight">Causality and the 'Glyphosate-Load' Metric</h3>
                        <p>
                            To win a Non-Hodgkin Lymphoma claim in 2026, the plaintiff must prove that their usage of Roundup was 'more likely than not' a substantial factor in their oncogenesis. Our auditor applies an actuarial load algorithm: commercial users (landscapers/farmers) who did not utilize PPE (Personal Protective Equipment) are weighted 40% higher in the settlement matrix because their dosage was direct and cumulative.
                        </p>

                        <h3 className="text-white text-2xl font-black tracking-tight">The Monsanto 'General Duty' Breach</h3>
                        <p>
                            Internal communications discovered during the Hardeman and Pilliod trials established that Monsanto scientists had concerns about Roundup's toxicity as early as 1999. In the context of S-Class litigation, we use this 'Knowledge Window' to justify punitive multipliers. Users who were exposed between 1999 and 2015 face a manufacturer that allegedly had a scientific 'General Duty' to warn but chose to protect market share instead.
                        </p>

                        <h3 className="text-white text-2xl font-black tracking-tight">Administrative Deductions & Net Payouts</h3>
                        <p>
                            While a gross award might reach $500,000, the take-home net is reduced by Attorney Contingency Fees (typically 33-40%) and Medical Subrogation Liens. Our 2026 engine factors in an estimated 15% deduction for lien mitigation, providing a realistic take-home net that protects the claimant from optimistic but inaccurate projections.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-10 bg-slate-950 border border-white/10 rounded-[3rem] space-y-6">
                            <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-widest">Evidence Checklist</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-500 italic">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Oncology Biopsy Reports</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> NHL Subtype Identification</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Proof of Product Purchase</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 10+ Years Usage Logs</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-emerald-600 rounded-[3rem] text-white space-y-4 shadow-2xl shadow-emerald-600/20">
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Final Expert Status</div>
                            <div className="text-2xl font-black tracking-tight">Bellwether Phase: Active</div>
                            <p className="text-emerald-50 text-sm font-medium leading-relaxed italic">
                                Settlements are currently being distributed to Tier 1 and Tier 2 claimants as per the 2026 court mandate.
                            </p>
                            <button className="w-full bg-white text-emerald-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-4">
                                Request Expert Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
