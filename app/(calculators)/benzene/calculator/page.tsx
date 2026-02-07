"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Droplets } from "lucide-react";
import { SITE, BENZENE_2026, calculateBenzeneSettlement, formatCurrency, BenzeneResult } from "@/lib/calculators/benzene";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function BenzeneCalculatorPage() {
    const [diseaseIndex, setDiseaseIndex] = useState(0);
    const [sourceIndex, setSourceIndex] = useState(0);
    const [durationIndex, setDurationIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [result, setResult] = useState<BenzeneResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateBenzeneSettlement(diseaseIndex, sourceIndex, durationIndex, parseVal(medicalBills))); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Benzene Leukemia Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your benzene exposure compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Disease Diagnosed</label><select value={diseaseIndex} onChange={(e) => setDiseaseIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{BENZENE_2026.diseases.map((d, i) => (<option key={i} value={i}>{d.disease}</option>))}</select><p className="text-xs text-slate-500 mt-1">{BENZENE_2026.diseases[diseaseIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Source</label><select value={sourceIndex} onChange={(e) => setSourceIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{BENZENE_2026.exposureSources.map((s, i) => (<option key={i} value={i}>{s.source} ({s.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{BENZENE_2026.exposureSources[sourceIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Duration</label><select value={durationIndex} onChange={(e) => setDurationIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{BENZENE_2026.exposureDuration.map((d, i) => (<option key={i} value={i}>{d.duration}</option>))}</select></div>
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
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.disease})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Exposure Source Factor</span><span className="font-medium text-purple-400">{formatCurrency(result.sourceBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Duration Factor ({result.duration})</span><span className="font-medium text-purple-400">{formatCurrency(result.durationBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Benzene FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is benzene and where is it found?</h3><p className="text-slate-400">Benzene is a colorless, flammable liquid used in chemical manufacturing. It's found in gasoline, rubber, plastics, pesticides, and oil refineries. OSHA classifies it as a known human carcinogen.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How does benzene cause leukemia?</h3><p className="text-slate-400">Benzene damages bone marrow, where blood cells are produced. Long-term exposure can cause genetic mutations leading to AML, CML, MDS, and other blood cancers.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What occupations have highest exposure risk?</h3><p className="text-slate-400">Refinery workers, chemical plant operators, rubber/tire workers, gas station attendants, painters, steel workers, and mechanics have the highest occupational exposure.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long after exposure does leukemia develop?</h3><p className="text-slate-400">Benzene-related leukemia typically develops 5-15 years after exposure. Some cases have been documented 20+ years later.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What evidence do I need for a benzene lawsuit?</h3><p className="text-slate-400">Medical records confirming diagnosis, work history showing benzene exposure, industrial hygiene data, and employer safety records are key evidence.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{BENZENE_2026.citation}</p>
            </main>
        </>
    );
}
