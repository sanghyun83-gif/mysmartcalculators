"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, Calculator, ArrowRight, DollarSign, RotateCcw, Shield } from "lucide-react";
import { SITE, VEHICLE_ERAS, USAGE_LEVELS, FAQS } from "@/lib/calculators/antique-car-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function AntiqueCarInsuranceCalculatorPage() {
    const [vehicleEra, setVehicleEra] = useState("");
    const [agreedValue, setAgreedValue] = useState(45000);
    const [usageLevel, setUsageLevel] = useState("");
    const [result, setResult] = useState<null | { annual: number; monthly: number }>(null);

    const calculatePremium = () => {
        const era = VEHICLE_ERAS.find(e => e.id === vehicleEra);
        const usage = USAGE_LEVELS.find(u => u.id === usageLevel);

        if (!era || !usage) return;

        // Base Calculation: Value * Base Rate (0.008) * Factors
        const baseRate = 0.008;
        const annual = Math.round(agreedValue * baseRate * era.factor * usage.factor);
        const monthly = Math.round(annual / 12);

        setResult({ annual, monthly });
    };

    const handleReset = () => {
        setVehicleEra("");
        setAgreedValue(45000);
        setUsageLevel("");
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-slate-900 font-sans">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50 px-4 py-4 flex items-center justify-between">
                <Link href="/antique-car-insurance" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Calculator className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-bold text-white tracking-tight leading-none">MySmartCalculators</span>
                </Link>
                <Link href="/antique-car-insurance" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                    ← Back to Hub
                </Link>
            </header>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                            <Car className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">{SITE.year} Premium Estimator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Antique Car Rate Estimator</h1>
                        <p className="text-slate-400 text-lg">Specialized 2026 rates for Pre-War and Brass Era vehicles</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-xl">
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">1. Vehicle Era</label>
                                    <div className="grid gap-3">
                                        {VEHICLE_ERAS.map((era) => (
                                            <button
                                                key={era.id}
                                                onClick={() => setVehicleEra(era.id)}
                                                className={`text-left p-4 rounded-xl border transition-all ${vehicleEra === era.id
                                                    ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/10'
                                                    : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                                                    }`}
                                            >
                                                <div className="font-bold">{era.name}</div>
                                                <div className="text-xs opacity-60 mt-1">{era.description}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">2. Agreed Value: ${agreedValue.toLocaleString()}</label>
                                    <input
                                        type="range"
                                        min="15000"
                                        max="500000"
                                        step="5000"
                                        value={agreedValue}
                                        onChange={(e) => setAgreedValue(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-3 font-bold">
                                        <span>$15K</span>
                                        <span>$500K</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">3. Intended Usage</label>
                                    <select
                                        value={usageLevel}
                                        onChange={(e) => setUsageLevel(e.target.value)}
                                        className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select typical usage...</option>
                                        {USAGE_LEVELS.map((u) => (<option key={u.id} value={u.id}>{u.name} — {u.description}</option>))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-12">
                                <button
                                    onClick={calculatePremium}
                                    disabled={!vehicleEra || !usageLevel}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:opacity-50 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-blue-600/30"
                                >
                                    <Calculator className="w-6 h-6" /> Calculate Premium
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors py-2 text-sm font-bold uppercase tracking-widest"
                                >
                                    <RotateCcw className="w-4 h-4" /> Reset Fields
                                </button>
                            </div>
                        </div>

                        <div>
                            {result ? (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-blue-600 rounded-[2.5rem] p-12 text-center shadow-2xl shadow-blue-600/20 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
                                        <h2 className="text-white/80 font-bold uppercase tracking-[0.2em] text-sm mb-6">Estimated Annual Premium</h2>
                                        <div className="text-7xl font-black text-white mb-2 leading-none">
                                            ${result.annual.toLocaleString()}
                                        </div>
                                        <div className="text-blue-200 font-medium text-lg mb-8">per year</div>

                                        <div className="h-px bg-white/10 w-full mb-8" />

                                        <div className="flex items-center justify-between text-white/90">
                                            <span className="font-bold uppercase tracking-wider text-xs">Monthly Est.</span>
                                            <span className="text-3xl font-black">${result.monthly}</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8">
                                        <h3 className="text-white font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                                            <Shield className="w-4 h-4 text-blue-400" /> Coverage Highlights
                                        </h3>
                                        <ul className="space-y-4 text-sm">
                                            <li className="flex gap-3 items-start text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                <span><strong>Agreed Value:</strong> No depreciation applied to total loss claims.</span>
                                            </li>
                                            <li className="flex gap-3 items-start text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                <span><strong>Spare Parts:</strong> Coverage for rare, era-specific components included.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-slate-800/30 border-2 border-dashed border-slate-700/50 rounded-[2.5rem] h-full flex flex-col items-center justify-center p-12 text-center opacity-50">
                                    <Calculator className="w-20 h-20 text-slate-700 mb-6" />
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-lg">Enter Details to View Estimates</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-20">
                        <LegalDisclaimer category="insurance" />
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 bg-slate-800/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-white text-center mb-16 uppercase tracking-[0.2em]">Common Questions</h2>
                    <div className="space-y-6">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700/50 rounded-[2rem] overflow-hidden transition-all shadow-sm open:shadow-blue-500/5">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center transition-transform group-open:rotate-45">
                                        <ArrowRight className="w-5 h-5 text-blue-400" />
                                    </div>
                                </summary>
                                <div className="px-8 pb-8 text-slate-400 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 text-center">
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                    © {SITE.year} MySmartCalculators • Specialized Data from Insurance Estimates 2026.
                </p>
            </footer>
        </div>
    );
}
