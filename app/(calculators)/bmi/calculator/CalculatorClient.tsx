"use client";

import { useState } from "react";
import { Scale, Calculator, Info, CheckCircle, AlertTriangle, ArrowRight, Activity, Shield } from "lucide-react";
import {
    calculateBMI,
    BMIResult,
    BMI_2026
} from "@/lib/calculators/bmi";

export function CalculatorClient() {
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(7);
    const [weight, setWeight] = useState("160");
    const [result, setResult] = useState<BMIResult | null>(null);

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        setWeight(raw);
    };

    const handleCalculate = () => {
        const weightNum = parseInt(weight) || 0;
        if (weightNum > 0 && heightFeet > 0) {
            setResult(calculateBMI(heightFeet, heightInches, weightNum));
        }
    };

    return (
        <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
            {/* Input Panel (LHS) */}
            <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black text-green-500 uppercase tracking-widest">
                        <Activity className="w-3 h-3" /> Biometric Auditor v5.0
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Health <span className="text-green-500 italic">Audit</span>.</h1>
                    <p className="text-slate-400 font-medium text-lg italic">Align your body mass index with 2026 clinical standards and metabolic risk thresholds.</p>
                </div>

                <div className="grid gap-10">
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[3.5rem] space-y-8 shadow-2xl">
                        {/* Height Section */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Vertical Dimension (Height)</label>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-bold text-slate-600 uppercase ml-1">Feet</label>
                                    <select
                                        value={heightFeet}
                                        onChange={(e) => setHeightFeet(parseInt(e.target.value))}
                                        className="w-full bg-black border border-white/10 rounded-2xl p-4 text-sm font-bold text-white focus:border-green-500 outline-none transition-all appearance-none"
                                    >
                                        {[4, 5, 6, 7].map((ft) => (
                                            <option key={ft} value={ft}>{ft} ft</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-bold text-slate-600 uppercase ml-1">Inches</label>
                                    <select
                                        value={heightInches}
                                        onChange={(e) => setHeightInches(parseInt(e.target.value))}
                                        className="w-full bg-black border border-white/10 rounded-2xl p-4 text-sm font-bold text-white focus:border-green-500 outline-none transition-all appearance-none"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i}>{i} in</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Weight Section */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Mass Dimension (Weight)</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={weight}
                                    onChange={handleWeightChange}
                                    placeholder="160"
                                    className="w-full px-6 py-6 text-2xl font-black bg-black border-2 border-white/5 rounded-[2rem] text-white focus:border-green-500/50 outline-none transition-all"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 font-black uppercase text-xs tracking-widest">lbs</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[120, 150, 180, 220].map((w) => (
                                    <button
                                        key={w}
                                        type="button"
                                        onClick={() => setWeight(w.toString())}
                                        className="py-2.5 bg-white/5 hover:bg-white/10 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition"
                                    >
                                        {w} lbs
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Calculate Button */}
                        <button
                            onClick={handleCalculate}
                            className="w-full py-6 bg-green-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-green-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-600/20 active:scale-[0.98]"
                        >
                            <Calculator className="w-5 h-5" />
                            Initiate Audit
                        </button>
                    </div>
                </div>
            </div>

            {/* Output Panel (RHS) */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-32 space-y-8">
                    {result ? (
                        <div className="p-12 bg-gradient-to-br from-[#0c111d] to-black border border-green-500/20 rounded-[4rem] shadow-2xl space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Scale className="w-32 h-32 text-green-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-green-500 uppercase tracking-[0.4em] mb-2 p-1 bg-green-500/10 w-fit rounded">Biometric Output</div>
                                <div className="text-sm font-black text-slate-400 tracking-tight italic">
                                    Clinical Index Result
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none shrink-0">
                                    {result.bmi}
                                </div>
                                <div className={`flex items-center gap-4 text-xs font-black tracking-tight px-4 py-2 rounded-xl bg-white/5 border border-white/10 w-fit uppercase ${result.categoryColor}`}>
                                    {result.category}
                                </div>
                            </div>

                            <div className="space-y-5 pt-10 border-t border-white/5 text-[11px]">
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Biological Height</span>
                                    <span className="text-white font-black">{heightFeet}&apos;{heightInches}&quot;</span>
                                </div>
                                <div className="flex justify-between items-center group/item">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest italic group-hover/item:text-slate-400">Calculated Mass</span>
                                    <span className="text-white font-black">{weight} lbs</span>
                                </div>
                                <div className="flex justify-between items-center group/item text-green-400">
                                    <span className="font-black uppercase tracking-widest italic">Healthy Range</span>
                                    <span className="font-black">{result.healthyWeightRange.min} - {result.healthyWeightRange.max} lbs</span>
                                </div>
                            </div>

                            <div className={`p-6 rounded-3xl border space-y-2 ${result.isHealthy ? 'bg-green-500/5 border-green-500/20' : 'bg-amber-500/5 border-amber-500/20'}`}>
                                <div className={`text-[10px] font-black uppercase ${result.isHealthy ? 'text-green-500' : 'text-amber-500'}`}>
                                    {result.isHealthy ? 'Optimal Status' : 'Risk Warning'}
                                </div>
                                <div className="text-[11px] font-bold text-white italic leading-relaxed">
                                    {result.isHealthy ? 'Your index aligns with WHO longevity benchmarks.' : 'Your index deviates from clinical optima. Secondary audit advised.'}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] flex flex-col items-center justify-center text-center space-y-6 h-[500px] border-dashed">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                <Activity className="w-10 h-10 text-slate-700 animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Awaiting Input</div>
                                <p className="text-xs text-slate-600 font-bold italic">Audit engine in standby mode...</p>
                            </div>
                        </div>
                    )}

                    {/* Verified Badge */}
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1a] bg-slate-800 flex items-center justify-center text-[10px] font-black text-green-500">DA</div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-slate-500">Compliance Audit</div>
                                <div className="text-sm font-black text-white uppercase tracking-widest">Expert Analysts</div>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-green-500" />
                        </div>
                    </div>
                </div>
            </div>
        
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
                                name: "How accurate is the bmi calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this bmi calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the bmi data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these bmi results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
