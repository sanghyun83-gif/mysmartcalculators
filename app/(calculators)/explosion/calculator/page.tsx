"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Zap } from "lucide-react";
import { SITE, EXPLOSION_2026, calculateExplosionSettlement, formatCurrency, ExplosionResult } from "@/lib/calculators/explosion";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ExplosionCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [severityIndex, setSeverityIndex] = useState(2);
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [result, setResult] = useState<ExplosionResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateExplosionSettlement(typeIndex, severityIndex, parseVal(medicalBills))); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Explosion Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your explosion accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Explosion Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{EXPLOSION_2026.explosionTypes.map((e, i) => (<option key={i} value={i}>{e.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{EXPLOSION_2026.explosionTypes[typeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Severity</label><select value={severityIndex} onChange={(e) => setSeverityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{EXPLOSION_2026.injurySeverity.map((s, i) => (<option key={i} value={i}>{s.severity}</option>))}</select><p className="text-xs text-slate-500 mt-1">{EXPLOSION_2026.injurySeverity[severityIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.explosionType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (3x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Severity Factor ({result.severity})</span><span className="font-medium text-amber-400">{formatCurrency(result.severityBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Explosion Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What causes most explosion accidents?</h3><p className="text-slate-400">Natural gas leaks are the leading cause of residential explosions. Industrial explosions often involve chemical compounds, dust accumulation, or equipment failures.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who can be held liable for an explosion?</h3><p className="text-slate-400">Gas utility companies, property owners, equipment manufacturers, employers, contractors, and pipeline operators may be liable depending on the cause.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What types of injuries occur in explosions?</h3><p className="text-slate-400">Burns (thermal and chemical), blast traumatic brain injury (TBI), hearing loss, shrapnel wounds, fractures, amputations, and internal organ damage are common.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How are explosion settlements calculated?</h3><p className="text-slate-400">Factors include injury severity, medical expenses, lost wages, pain and suffering, disfigurement, and whether gross negligence or safety violations occurred.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is blast-related TBI?</h3><p className="text-slate-400">Blast traumatic brain injury occurs from the pressure wave of an explosion. Symptoms may be delayed and include cognitive issues, headaches, and memory problems.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{EXPLOSION_2026.citation}</p>
            </main>
        </>
    );
}
