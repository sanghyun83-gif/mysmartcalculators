"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, ELECTROCUTION_2026, calculateElectrocutionSettlement, formatCurrency, ElectrocutionResult } from "@/lib/calculators/electrocution";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ElectrocutionCalculatorPage() {
    const [voltageIndex, setVoltageIndex] = useState(1);
    const [injuryIndex, setInjuryIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [result, setResult] = useState<ElectrocutionResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateElectrocutionSettlement(voltageIndex, injuryIndex, medicalNum)); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Electrocution Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your electrical injury compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Voltage Level</label><select value={voltageIndex} onChange={(e) => setVoltageIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{ELECTROCUTION_2026.voltageLevels.map((v, i) => (<option key={i} value={i}>{v.level} ({v.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{ELECTROCUTION_2026.voltageLevels[voltageIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{ELECTROCUTION_2026.injuryTypes.map((t, i) => (<option key={i} value={i}>{t.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{ELECTROCUTION_2026.injuryTypes[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-yellow-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-400" /><span className="text-yellow-300">{result.voltageLevel} | {result.voltageMultiplier}x</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-amber-400">{formatCurrency(result.painSuffering)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Electrocution FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Who can be held liable for electrocution?</h3><p className="text-slate-400">Employers (OSHA violations), utility companies (downed lines), product manufacturers (defective products), and property owners (faulty wiring).</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Does voltage level affect settlements?</h3><p className="text-slate-400">Yes. Higher voltage injuries typically result in more severe injuries and higher settlements due to increased pain, suffering, and permanent damage.</p></div>
                    </div>
                </section>

            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Who can be held liable for electrocution injuries?", acceptedAnswer: { "@type": "Answer", text: "Employers, utility companies, product manufacturers, and property owners can all be held liable depending on the circumstances." } }] }) }} />
        </>
    );
}
