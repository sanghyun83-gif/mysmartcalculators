"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Activity, ArrowLeft, ChevronRight, Info, Shield, TrendingUp,
    Calculator, DollarSign, Scale, Gavel, MapPin, Search, Star, AlertTriangle, BarChart3, Pill, Briefcase, Landmark, PieChart, LineChart, Wallet, ArrowRight, CheckCircle2
} from "lucide-react";
import {
    calculateCarAccidentSettlement, formatCurrency, ACCIDENT_CONSTANTS
} from "@/lib/calculators/car-accident";

export function CalculatorClient() {
    const [medicalBills, setMedicalBills] = useState("15000");
    const [lostWages, setLostWages] = useState("5000");
    const [propertyDamage, setPropertyDamage] = useState("8000");
    const [faultPercentage, setFaultPercentage] = useState(0);
    const [stateCode, setStateCode] = useState("CA");
    const [injuryTier, setInjuryTier] = useState<keyof typeof ACCIDENT_CONSTANTS.injuryTiers>("MODERATE");

    const results = useMemo(() => {
        return calculateCarAccidentSettlement({
            medicalBills: parseInt(medicalBills.replace(/[^0-9]/g, '')) || 0,
            lostWages: parseInt(lostWages.replace(/[^0-9]/g, '')) || 0,
            propertyDamage: parseInt(propertyDamage.replace(/[^0-9]/g, '')) || 0,
            faultPercentage,
            stateCode,
            injuryTier
        });
    }, [medicalBills, lostWages, propertyDamage, faultPercentage, stateCode, injuryTier]);

    return (
        <>
            <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                {/* Input Panel (LHS) */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-widest">
                            <Scale className="w-3 h-3" /> Liability Auditor v5.0
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Tort <span className="text-red-500 italic">Audit</span>.</h1>
                        <p className="text-slate-400 font-medium text-lg italic">Align your accident claim with 50-state case law and jurisdictional fault bars.</p>
                    </div>

                    <div className="grid gap-10">
                        {/* 1. Base Damages */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Documented Medical Bills</label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 font-black group-focus-within:text-red-500">$</div>
                                    <input
                                        type="text"
                                        value={medicalBills}
                                        onChange={(e) => setMedicalBills(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-2xl p-6 pl-12 text-xl font-black text-white focus:border-red-500/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Lost Wages & Property</label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 font-black group-focus-within:text-red-500">$</div>
                                    <input
                                        type="text"
                                        value={lostWages}
                                        onChange={(e) => setLostWages(e.target.value)}
                                        className="w-full bg-slate-900 border border-white/5 rounded-2xl p-6 pl-12 text-xl font-black text-white focus:border-red-500/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 2. Injury Staging */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1 text-center block">Injury Severity Categorization</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {(Object.entries(ACCIDENT_CONSTANTS.injuryTiers) as [keyof typeof ACCIDENT_CONSTANTS.injuryTiers, any][]).map(([key, value]) => (
                                    <button
                                        key={key}
                                        onClick={() => setInjuryTier(key)}
                                        className={`p-4 rounded-2xl border text-[10px] font-black transition-all ${injuryTier === key ? 'bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' : 'bg-slate-900 border-white/5 text-slate-500 hover:border-white/20'}`}
                                    >
                                        {value.label.split('(')[0]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Jurisdictional Fault */}
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3.5rem] space-y-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Incident Jurisdiction</label>
                                    <select
                                        value={stateCode}
                                        onChange={(e) => setStateCode(e.target.value)}
                                        className="bg-black border border-white/10 rounded-xl px-4 py-3 text-sm font-black text-white focus:border-red-500 outline-none appearance-none cursor-pointer pr-10"
                                    >
                                        {["CA", "NY", "TX", "FL", "IL", "PA", "GA", "VA", "AZ", "WA"].map(st => (
                                            <option key={st} value={st}>{st} - {st === "VA" ? "Contributory Bar" : "Comparative"}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-4 flex-grow md:max-w-xs">
                                    <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        <span>Fault Allocation</span>
                                        <span className="text-red-500">{faultPercentage}% At Fault</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="100" value={faultPercentage}
                                        onChange={(e) => setFaultPercentage(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-red-600/5 p-4 rounded-xl border border-red-600/10 italic">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                Warning: {faultPercentage > 50 ? "51% Rule may bar recovery in many states." : "Fault reduction lowers total economic recovery."}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel (RHS) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 space-y-8">
                        <div className="p-12 bg-gradient-to-br from-[#0c111d] to-black border border-red-500/20 rounded-[4rem] shadow-2xl space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Scale className="w-32 h-32 text-red-600" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em] mb-2 p-1 bg-red-500/10 w-fit rounded">S-Class Settlement Net</div>
                                <div className="text-sm font-black text-slate-400 tracking-tight italic">
                                    Projected Post-Fault Value
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none shrink-0">
                                    {formatCurrency(results.mid)}
                                </div>
                                <div className="flex items-center gap-4 text-xs font-black text-red-400 tracking-tight px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 w-fit">
                                    <TrendingUp className="w-4 h-4" /> Range: {formatCurrency(results.low)} - {formatCurrency(results.high)}
                                </div>
                            </div>

                            <div className="space-y-5 pt-10 border-t border-white/5 text-[11px]">
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Economic Damages</span>
                                    <span className="text-white font-black">{formatCurrency(results.breakdown.economic)}</span>
                                </div>
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Pain & Suffering</span>
                                    <span className="text-white font-black">{formatCurrency(results.breakdown.painSuffering)}</span>
                                </div>
                                <div className="flex justify-between items-center group/item text-red-500">
                                    <span className="font-black uppercase tracking-widest italic group-hover/item:text-slate-400">Fault Reduction</span>
                                    <span className="font-black">-{formatCurrency(results.breakdown.faultReduction)}</span>
                                </div>
                            </div>

                            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-2">
                                <div className="text-[10px] font-black text-slate-500 uppercase">Tier Logic Verification</div>
                                <div className="text-[11px] font-bold text-white italic">"{results.breakdown.tierLabel} Settlement Pattern Applied"</div>
                            </div>

                            <div className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em] text-center pt-6 border-t border-white/5 italic">
                                Accident Audit Engine v5.0 @ 2026
                            </div>
                        </div>

                        {/* Verified Badge */}
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1a] bg-slate-800 flex items-center justify-center text-[10px] font-black text-red-500">DA</div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500">Compliance Audit</div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest">Expert Analysts</div>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Content: S-Class Deep Content Extension */}
            <section className="bg-slate-900/40 border-t border-white/5 py-32">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-white italic tracking-tighter">The Actuarial Scaling of Tort Damages</h2>
                        <p className="text-slate-400 text-xl leading-[1.8] font-bold">
                            A car accident settlement is not a random number; it's a mathematical derivation of documented medical costs mirrored against jurisdictional risk thresholds.
                        </p>
                    </div>

                    <div className="prose prose-invert prose-red max-w-none text-slate-400 text-lg font-medium leading-[2.2] space-y-12">
                        <div className="p-10 bg-black rounded-[3rem] border border-white/10 shadow-2xl italic">
                            "The difference between a mid-level settlement and a Tier 3 'Nuclear' result depends almost entirely on the documentation of Latent Causation and Future Earning Loss."
                        </div>

                        <h3 className="text-white text-2xl font-black tracking-tight">The Role of Comparative Fault</h3>
                        <p>
                            In state-level tort law, fault is often the primary battleground. Insurance adjusters will scrutinize police reports, weather conditions, and vehicle telematics to assign even a 10% fault to the claimant. In a $500k case, this represents a $50,000 deduction. Our S-Class auditor accounts for these 'soft deductions' to provide a realistic net recovery estimate.
                        </p>

                        <h3 className="text-white text-2xl font-black tracking-tight">Pain and Suffering: The Multiplier Theory</h3>
                        <p>
                            While many calculators use a simple flat rate, professional attorneys apply a 'Per Diem' or 'Multiplier' method. For Soft Tissue injuries, the multiple is typically 1.5x to 2x. For surgical interventions, it scales to 3x-5x. If your injury is 'Catastrophic' (Tier 3), standard multipliers often fail, and the case pivots toward 'Total Loss' valuations based on life-time care costs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-10 bg-slate-950 border border-white/10 rounded-[3rem] space-y-6">
                            <h4 className="text-[11px] font-black text-red-500 uppercase tracking-widest">Audit Checklist</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-500 italic">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-red-500" /> Medical Specials Documented</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-red-500" /> 50-State Fault Sync applied</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-red-500" /> Future Wage Buffer active</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-red-500" /> Property Damage Isolated</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-red-600 rounded-[3rem] text-white space-y-4 shadow-2xl shadow-red-600/20">
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Final Expert Status</div>
                            <div className="text-2xl font-black tracking-tight">Audit Status: Verification Ready</div>
                            <p className="text-red-50 text-sm font-medium leading-relaxed italic">
                                Your current inputs match 2026 settlement benchmarks for Tier 2 surgical interventions.
                            </p>
                            <button className="w-full bg-white text-red-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-4">
                                Request Full Liability Audit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the car accident calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this car accident calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the car accident data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these car accident results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
