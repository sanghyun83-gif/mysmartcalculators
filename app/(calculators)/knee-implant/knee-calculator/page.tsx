"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, KNEE_2026, calculateKneeSettlement, formatCurrency, KneeResult } from "@/lib/calculators/knee-implant";

export default function KneeCalculatorPage() {
    const [compIndex, setCompIndex] = useState(0);
    const [brandIndex, setBrandIndex] = useState(0);
    const [timeIndex, setTimeIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [result, setResult] = useState<KneeResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateKneeSettlement(parseVal(medicalBills), compIndex, brandIndex, timeIndex));
    };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6 text-center">
                    <p className="text-red-300 font-semibold">⚠️ Multiple Recalls: Exactech, Zimmer, Stryker, DePuy</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Knee Replacement Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your defective implant compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Complication Type</label><select value={compIndex} onChange={(e) => setCompIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{KNEE_2026.complications.map((c, i) => (<option key={i} value={i}>{c.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{KNEE_2026.complications[compIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Implant Brand</label><select value={brandIndex} onChange={(e) => setBrandIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{KNEE_2026.recalledBrands.map((b, i) => (<option key={i} value={i}>{b.brand} ({b.manufacturer})</option>))}</select>{KNEE_2026.recalledBrands[brandIndex].recalled && <p className="text-xs text-red-400 mt-1">⚠️ Recalled: {KNEE_2026.recalledBrands[brandIndex].reason}</p>}</div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Time Until Failure</label><select value={timeIndex} onChange={(e) => setTimeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{KNEE_2026.timeToFailure.map((t, i) => (<option key={i} value={i}>{t.period}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-purple-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-purple-300">{result.complicationType} - {result.implantBrand}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Brand Bonus ({result.implantBrand})</span><span className="font-medium text-purple-400">{formatCurrency(result.brandBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Time Factor ({result.timeToFailure})</span><span className="font-medium text-purple-400">{formatCurrency(result.timeBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Knee Implant FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What causes knee implants to fail?</h3><p className="text-slate-400">Common causes include component loosening, polyethylene insert wear, metal debris release, infection, and design defects. Some implants fail within 1-3 years instead of the expected 15-20 years.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Which knee implants have been recalled?</h3><p className="text-slate-400">Exactech (June 2022), Zimmer Persona, Stryker Triathlon, DePuy Attune, and Smith & Nephew Journey II have all faced recalls or significant litigation.</p></div>
                    </div>
                </section>
            </main>
        </>
    );
}
