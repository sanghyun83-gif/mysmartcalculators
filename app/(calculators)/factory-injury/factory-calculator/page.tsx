"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Factory } from "lucide-react";
import { SITE, FACTORY_2026, calculateFactorySettlement, formatCurrency, FactoryResult } from "@/lib/calculators/factory-injury";

export default function FactoryCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [oshaIndex, setOshaIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<FactoryResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateFactorySettlement(typeIndex, oshaIndex, parseVal(medicalBills))); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Factory Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your manufacturing accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FACTORY_2026.injuryTypes.map((i, idx) => (<option key={idx} value={idx}>{i.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{FACTORY_2026.injuryTypes[typeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">OSHA Violation</label><select value={oshaIndex} onChange={(e) => setOshaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FACTORY_2026.oshaViolations.map((o, idx) => (<option key={idx} value={idx}>{o.violation} ({o.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{FACTORY_2026.oshaViolations[oshaIndex].description}</p></div>
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
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.injuryType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">OSHA Violation Factor</span><span className="font-medium text-amber-400">{formatCurrency(result.oshaBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Factory Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Can I sue my employer for a factory injury?</h3><p className="text-slate-400">While workers' comp typically limits employer lawsuits, you may sue if OSHA violations caused your injury, or sue third parties like equipment manufacturers.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What OSHA violations increase settlements?</h3><p className="text-slate-400">Machine guarding (1910.212), lockout/tagout (1910.147), and fall protection violations significantly increase liability and settlement values.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is a third-party claim?</h3><p className="text-slate-400">A claim against parties other than your employer, such as equipment manufacturers, maintenance contractors, or property owners whose negligence caused your injury.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do factory injury cases take?</h3><p className="text-slate-400">Most cases settle in 6-18 months. Complex cases involving multiple defendants or serious injuries may take 2-3 years.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, future earnings, pain and suffering, disfigurement, and vocational rehabilitation costs.</p></div>
                    </div>
                </section>

            </main>
        </>
    );
}
