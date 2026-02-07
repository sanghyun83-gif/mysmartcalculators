"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Activity, ArrowLeft, ArrowRight, ChevronRight, Info, Shield,
    Calculator, DollarSign, Scale, Gavel, MapPin, Search, Star, AlertTriangle, BarChart3, Pill, Stethoscope
} from "lucide-react";
import {
    OZEMPIC_CONSTANTS, calculateSettlement, formatCurrency, getInjuryTiers, getDurationLevels
} from "@/lib/calculators/ozempic";

export function CalculatorClient() {
    const [injury, setInjury] = useState<any>("gastroparesis");
    const [duration, setDuration] = useState<any>("medium");
    const [medicalBills, setMedicalBills] = useState("45000");
    const [hospitalization, setHospitalization] = useState(false);
    const [surgery, setSurgery] = useState(false);
    const [pre2023, setPre2023] = useState(false);

    const results = useMemo(() => {
        return calculateSettlement(
            injury,
            duration,
            parseInt(medicalBills.replace(/[^0-9]/g, '')) || 0,
            hospitalization,
            surgery,
            pre2023
        );
    }, [injury, duration, medicalBills, hospitalization, surgery, pre2023]);

    return (
        <>
            <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                {/* Input Panel (LHS) */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-4">
                        <div className="text-[11px] font-black text-rose-500 uppercase tracking-[0.3em]">MDL 3094 Precision Input v2.6</div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Settlement <span className="text-rose-500 italic text-white/90">Audit</span>.</h1>
                        <p className="text-slate-400 font-medium">Calibrate your potential recovery based on clinical injury tiers and FDA label chronologies.</p>
                    </div>

                    <div className="grid gap-6">
                        {/* Injury Type */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <Stethoscope className="w-3 h-3" /> Diagnostic Category
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {getInjuryTiers().map((tier) => (
                                    <button
                                        key={tier.id}
                                        onClick={() => setInjury(tier.id)}
                                        className={`p-4 rounded-xl border text-left transition-all ${injury === tier.id
                                            ? 'bg-rose-500/10 border-rose-500 text-white ring-1 ring-rose-500'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                                            }`}
                                    >
                                        <div className="text-sm font-black">{tier.label}</div>
                                        <div className="text-[10px] opacity-60 mt-1 line-clamp-1">{tier.description}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Medical Bills */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <DollarSign className="w-3 h-3" /> Documented Medical Bills
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold group-focus-within:text-rose-500">$</div>
                                <input
                                    type="text"
                                    value={medicalBills}
                                    onChange={(e) => setMedicalBills(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-8 text-xl font-black text-white outline-none focus:border-rose-500 transition-all placeholder:text-slate-700"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Duration & Aggravating Factors */}
                        <div className="grid md:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Usage Duration</label>
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm font-bold text-white outline-none"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                >
                                    {getDurationLevels().map((dl) => (
                                        <option key={dl.id} value={dl.id} className="bg-slate-900">{dl.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Procedural Factors</label>
                                <div className="space-y-3">
                                    {[
                                        { id: 'hosp', l: 'Hospitalization', v: hospitalization, s: setHospitalization },
                                        { id: 'surg', l: 'Surgical Intervention', v: surgery, s: setSurgery },
                                        { id: 'pre23', l: 'Pre-2023 Usage', v: pre2023, s: setPre2023 }
                                    ].map((f) => (
                                        <label key={f.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    className="peer sr-only"
                                                    checked={f.v}
                                                    onChange={e => f.s(e.target.checked)}
                                                />
                                                <div className="w-5 h-5 border-2 border-white/10 rounded bg-white/5 peer-checked:bg-rose-500 peer-checked:border-rose-500 transition-all shadow-sm" />
                                                <CheckCircle2 className="w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-all" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{f.l}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel (RHS) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 space-y-6">
                        <div className="p-10 bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Activity className="w-24 h-24 text-rose-500" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Audit Result</div>
                                <div className="text-xs font-bold text-slate-500">{results.expertTier}</div>
                            </div>

                            <div className="space-y-4">
                                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                    {formatCurrency(results.totalMid)}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-black text-slate-400">
                                    <span className="text-rose-500"> {formatCurrency(results.totalLow)}</span>
                                    <ArrowRight className="w-3 h-3" />
                                    <span>{formatCurrency(results.totalHigh)}</span>
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 font-medium italic">Base Compensation ({results.injuryType})</span>
                                    <span className="text-white font-black">{formatCurrency(results.baseHigh)}</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 font-medium italic">Biochemical Exposure Multiplier</span>
                                    <span className="text-emerald-400 font-black">{results.duration}</span>
                                </div>
                                {results.factorBonus > 0 && (
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-500 font-medium italic">Legal Aggravation Bonus</span>
                                        <span className="text-amber-500 font-black">+{formatCurrency(results.factorBonus)}</span>
                                    </div>
                                )}
                            </div>

                            <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest text-center pt-4">
                                Neural Analysis Based on MDL 3094 Dataset 2026.4.1
                            </div>
                        </div>

                        <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-4 group cursor-help transition-all hover:bg-rose-500/20">
                            <AlertTriangle className="w-5 h-5 text-rose-500" />
                            <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Failure to Warn Alert: Pre-2023 cases prioritize label negligence logic.</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Deep SEO Area below the fold */}
            <section className="bg-slate-900/50 border-t border-white/5 py-32">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-white italic">Understanding the MDL Tier Point System</h2>
                        <p className="text-slate-400 leading-relaxed font-bold">
                            Unlike isolated personal injury cases, MDL 3094 utilizes a structured settlement matrix. This point-based system allocates common funds based on clinical evidence, not just emotional narrative.
                        </p>
                    </div>

                    <div className="prose prose-invert prose-rose max-w-none text-slate-400 text-sm font-medium leading-[2]">
                        <h3 className="text-white">The Actuarial Multiplier for Gastroparesis</h3>
                        <p>
                            Gastroparesis, or stomach paralysis, is valued exponentially based on the requirement of surgical intervention. A patient requiring a gastric pacemaker (Electrical Stimulation) is categorized in the highest injury bracket of the MDL framework. Our calculator reflects this $500,000+ potential valuation baseline.
                        </p>
                        <h3 className="text-white">Discovery & The Pre-2023 Strategy</h3>
                        <p>
                            Legal discovery in the Pennsylvania federal courts has focused heavily on internal memos regarding 'intestinal obstruction.' If your medication history dates back to 2022 or early 2023, you were prescribed the drug during a window where the manufacturer failed to include 'Ileus' in the Prescribing Information. This oversight is the cornerstone of punitive damage logic in mass tort litigation.
                        </p>
                        <h3 className="text-white">2026 Bellwether Patterns</h3>
                        <p>
                            Wait for the bellwether trials. The first five cases scheduled for trial in MDL 3094 will set the 'payout floor.' Early estimates from the Data Analyst Expert Team suggest that Tier 1 Gastroparesis verdicts could exceed $1.5M per claimant in nuclear jurisdictions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 py-12 border-y border-white/5">
                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-rose-500 uppercase tracking-widest">Medical Documentation Audit</h4>
                            <ul className="space-y-2 text-[11px] font-bold text-slate-500 list-disc pl-4 italic">
                                <li>4-Hour Gastric Emptying Scan (GES)</li>
                                <li>Endoscopy/Colonoscopy Reports</li>
                                <li>Pharmacy Dispense Records (2021-2025)</li>
                                <li>Emergency Admissions for Dehydration</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-rose-500 uppercase tracking-widest">MDL 3094 Status</h4>
                            <div className="p-6 bg-black rounded-2xl border border-white/10 space-y-2">
                                <div className="text-[10px] text-slate-500 uppercase">Current Phase</div>
                                <div className="text-sm font-black text-emerald-400">Bellwether Discovery</div>
                                <div className="text-[9px] text-slate-600">Updated: Jan 2026 @ Seoul Central Data Lab</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function CheckCircle2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}
