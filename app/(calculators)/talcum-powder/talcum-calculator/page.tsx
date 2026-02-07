"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    ArrowLeft, Droplet, Calculator, Info, AlertTriangle,
    Shield, CheckCircle2, Microscope, Gavel, ArrowRight,
    Search, BarChart3, Stethoscope, DollarSign, Activity
} from "lucide-react";
import {
    SITE, TALCUM_2026, calculateTalcumSettlement, formatCurrency
} from "@/lib/calculators/talcum-powder";

export default function TalcumCalculatorPage() {
    const [cancerIndex, setCancerIndex] = useState(1);
    const [usageIndex, setUsageIndex] = useState(2);
    const [yearsOfUse, setYearsOfUse] = useState("20");
    const [medicalBills, setMedicalBills] = useState("150000");

    // Expert Toggles (+α Step 3)
    const [hasBankruptcyOptOut, setHasBankruptcyOptOut] = useState(false);
    const [hasAsbestosMarker, setHasAsbestosMarker] = useState(false);
    const [hasBrcaMutation, setHasBrcaMutation] = useState(false);

    const result = useMemo(() => {
        const years = parseInt(yearsOfUse) || 20;
        const medicalNum = parseInt(medicalBills.replace(/[^0-9]/g, '')) || 0;

        return calculateTalcumSettlement(
            cancerIndex,
            usageIndex,
            years,
            medicalNum,
            hasBankruptcyOptOut,
            hasAsbestosMarker,
            hasBrcaMutation
        );
    }, [cancerIndex, usageIndex, yearsOfUse, medicalBills, hasBankruptcyOptOut, hasAsbestosMarker, hasBrcaMutation]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <header className={`fixed top-0 w-full z-[100] bg-slate-900/90 backdrop-blur-xl border-b border-white/5 py-4`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/talcum-powder" className="flex items-center gap-3 group">
                        <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-amber-500 transition-colors" />
                        <div className="p-1.5 bg-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                            <Droplet className="w-4 h-4 text-slate-950" />
                        </div>
                        <span className="text-lg font-black tracking-tighter text-white uppercase italic">Audit <span className="text-amber-500 not-italic">v2.1</span></span>
                    </Link>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        2026 MDL 2738 CALIBRATION
                    </div>
                </div>
            </header>

            <main id="calculator-audit" className="pt-32 pb-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                {/* Input Panel (LHS) */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-widest">
                            <Microscope className="w-3 h-3" /> Talc Precision Input v4.26
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Settlement <span className="text-amber-500 italic">Audit</span>.</h1>
                        <p className="text-slate-400 font-medium text-lg italic">Calibrate your potential recovery based on clinical staging and bankruptcy trial premiums.</p>
                    </div>

                    <div className="grid gap-10">
                        {/* 1. Diagnostic Tier */}
                        <div className="space-y-4">
                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Stethoscope className="w-3.5 h-3.5" /> Clinical Staging
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TALCUM_2026.cancerTypes.map((tier, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCancerIndex(i)}
                                        className={`p-6 rounded-2xl border text-left transition-all ${cancerIndex === i
                                            ? 'bg-amber-500/10 border-amber-500 text-white ring-1 ring-amber-500 shadow-2xl shadow-amber-500/10'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                                            }`}
                                    >
                                        <div className="text-sm font-black mb-1 leading-tight">{tier.type}</div>
                                        <div className="text-[10px] opacity-60 font-medium">MDL Benchmark: {formatCurrency(tier.avgSettlement)}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Exposure & Economic Variables */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Droplet className="w-3.5 h-3.5 text-amber-500" /> Usage History
                                </label>
                                <select
                                    value={usageIndex}
                                    onChange={(e) => setUsageIndex(parseInt(e.target.value))}
                                    className="w-full bg-slate-900 border-2 border-white/5 rounded-2xl p-4 text-sm font-bold text-white outline-none focus:border-amber-500/50 transition-all shadow-inner appearance-none"
                                >
                                    {TALCUM_2026.usageTypes.map((u, i) => (
                                        <option key={i} value={i}>{u.type}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <DollarSign className="w-3.5 h-3.5 text-amber-500" /> Medical Expenses
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 font-black group-focus-within:text-amber-500 transition-colors">$</div>
                                    <input
                                        type="text"
                                        value={medicalBills}
                                        onChange={(e) => setMedicalBills(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full bg-slate-900 border-2 border-white/5 rounded-2xl p-4 pl-12 text-lg font-black text-white outline-none focus:border-amber-500/50 transition-all shadow-inner"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 3. Aggravating Expert Modifiers */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <Shield className="w-3.5 h-3.5" /> Forensic Expert Toggles
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { id: 'trial', l: 'Individual Trial Path (Opt-Out)', v: hasBankruptcyOptOut, s: setHasBankruptcyOptOut, d: 'Preserves claim from limited bankruptcy fund.' },
                                    { id: 'asb', l: 'Asbestos Mineral Marker', v: hasAsbestosMarker, s: setHasAsbestosMarker, d: 'Forensic proof of asbestos-talc linkage.' },
                                    { id: 'brca', l: 'BRCA1/2 Mutation Marker', v: hasBrcaMutation, s: setHasBrcaMutation, d: 'Sensitivity adjustment for genetic causation.' }
                                ].map((f) => (
                                    <label key={f.id} className="p-5 bg-slate-950/50 border border-white/5 rounded-2xl flex items-start gap-4 cursor-pointer group hover:border-amber-500/30 transition-all">
                                        <div className="relative mt-1">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={f.v}
                                                onChange={e => f.s(e.target.checked)}
                                            />
                                            <div className="w-5 h-5 border-2 border-white/10 rounded bg-white/5 peer-checked:bg-amber-500 peer-checked:border-amber-500 transition-all" />
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-all" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-xs font-black text-slate-300 group-hover:text-white transition-colors leading-tight uppercase italic">{f.l}</span>
                                            <p className="text-[9px] text-slate-600 font-medium leading-tight">{f.d}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-3xl flex items-center gap-5">
                            <div className="p-3 bg-red-500/20 rounded-2xl">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                            </div>
                            <div className="text-[11px] font-black text-red-400 uppercase tracking-[0.15em] leading-relaxed">
                                J&J Bankruptcy Update Feb 2026: Third Chapter 11 filing rejected. Claimants now entitled to full state-court jury paths.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel (RHS) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 space-y-8">
                        <div className="p-12 bg-gradient-to-br from-[#111827] to-black border border-amber-500/20 rounded-[4rem] shadow-2xl shadow-amber-500/5 space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Gavel className="w-32 h-32 text-amber-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-amber-500 uppercase tracking-[0.4em] mb-2 p-1 bg-amber-500/10 w-fit rounded">Audit Result</div>
                                <div className="text-sm font-black text-slate-400 tracking-tight italic">
                                    {result.cancerType} / {result.usageType}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none shrink-0">
                                    {formatCurrency(result.totalMid)}
                                </div>
                                <div className="flex items-center gap-4 text-lg font-black text-slate-500 tracking-tight px-1 py-1 rounded-xl bg-white/5 w-fit">
                                    <span className="text-amber-500/80"> {formatCurrency(result.totalLow)}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-700" />
                                    <span>{formatCurrency(result.totalHigh)}</span>
                                </div>
                            </div>

                            <div className="space-y-5 pt-10 border-t border-white/5 text-[11px]">
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic">Base Valuation</span>
                                    <span className="text-white font-black">{formatCurrency(result.baseDamages)}</span>
                                </div>
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic">Ec. Damages (x2.5)</span>
                                    <span className="text-slate-300 font-black">{formatCurrency(result.medicalCosts)}</span>
                                </div>
                                {result.expertBonus > 0 && (
                                    <div className="flex justify-between items-center group/item pt-4 border-t border-amber-500/10">
                                        <span className="text-amber-500 font-black uppercase tracking-[0.2em] italic">Forensic Liability Delta</span>
                                        <span className="text-amber-500 font-black animate-pulse">+{formatCurrency(result.expertBonus)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center group/item pt-4 border-t border-white/5">
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 font-bold uppercase tracking-widest italic text-[10px]">Forensic Net Payout</span>
                                        <span className="text-[9px] text-slate-600 font-medium italic">Estimated after 2026 Admin Liens</span>
                                    </div>
                                    <span className="text-white font-black text-lg">{formatCurrency(result.netEstimation)}</span>
                                </div>
                            </div>

                            <div className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em] text-center pt-6 border-t border-white/5 italic">
                                S-Class Actuarial Engine v2.1 @ 2026
                            </div>
                        </div>

                        {/* Verified Badge */}
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1a] bg-slate-800 flex items-center justify-center text-[10px] font-black text-amber-500 uppercase italic">MDL</div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase font-black uppercase tracking-widest leading-none mb-1 text-center">Regulatory Audit</div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest">MDL 2738 Analysts</div>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-amber-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="bg-slate-900/40 border-t border-white/5 py-32">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">The Ovarian Cancer Points Matrix</h2>
                        <p className="text-slate-400 text-xl leading-[1.8] font-bold italic">
                            The 2026 Talcum Powder litigation landscape has shifted from global bankruptcy settlements to aggressive state-court trial strategies following the dismissal of J&J's redundant Chapter 11 filings.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-10 bg-slate-950 border border-white/10 rounded-[3rem] space-y-6">
                            <h4 className="text-[11px] font-black text-amber-500 uppercase tracking-widest italic">Evidence Required</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-500 italic">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Pathology: High-Grade Serous</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Talc-Mineral Biopsy Evidence</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Decadal Usage Confirmation</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Pharmacy Purchase Records</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-amber-600 rounded-[3rem] text-white space-y-4 shadow-2xl shadow-amber-600/20 group">
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-80">2026 Trial Status</div>
                            <div className="text-2xl font-black tracking-tight uppercase italic group-hover:scale-105 transition-transform">Bellwether Phase: Active</div>
                            <p className="text-amber-50 text-sm font-medium leading-relaxed italic opacity-80">
                                Juries are currently assigning punitive weights based on J&J's long-term internal knowledge of asbestos contamination.
                            </p>
                            <button className="w-full bg-white text-amber-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-4 hover:bg-slate-950 hover:text-white transition-colors">
                                Request Expert Case Review
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
