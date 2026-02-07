"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Pickaxe } from "lucide-react";
import { SITE, MINING_2026, calculateMiningSettlement, formatCurrency, MiningResult } from "@/lib/calculators/mining-injury";

export default function MiningCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [mshaIndex, setMshaIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [result, setResult] = useState<MiningResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateMiningSettlement(typeIndex, mshaIndex, parseVal(medicalBills))); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Mining Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your mining accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{MINING_2026.injuryTypes.map((i, idx) => (<option key={idx} value={idx}>{i.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{MINING_2026.injuryTypes[typeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">MSHA Violation</label><select value={mshaIndex} onChange={(e) => setMshaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{MINING_2026.mshaViolations.map((m, idx) => (<option key={idx} value={idx}>{m.violation} ({m.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{MINING_2026.mshaViolations[mshaIndex].description}</p></div>
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
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (3x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">MSHA Violation Factor</span><span className="font-medium text-amber-400">{formatCurrency(result.mshaBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Mining Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What are the most common mining injuries?</h3><p className="text-slate-400">Cave-ins/roof collapses, equipment accidents, explosions, black lung disease, and toxic exposure are the leading causes of mining injuries and fatalities.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can I sue my employer for a mining injury?</h3><p className="text-slate-400">While workers' comp typically applies, you may sue if MSHA violations caused your injury, or sue third parties like equipment manufacturers.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is black lung disease?</h3><p className="text-slate-400">Coal workers' pneumoconiosis (CWP) is caused by inhaling coal dust over time. Federal programs and lawsuits provide compensation for affected miners.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What MSHA violations increase settlements?</h3><p className="text-slate-400">Roof control violations (30 CFR 75.200), ventilation failures, inadequate training, and defective equipment significantly increase liability and settlement values.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who can be held liable for mining accidents?</h3><p className="text-slate-400">Mining companies, equipment manufacturers, contractors, property owners, and safety equipment suppliers may all be liable depending on the cause.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the Federal Black Lung Program?</h3><p className="text-slate-400">A federal program providing monthly benefits and medical coverage to miners disabled by black lung disease, administered by the Department of Labor.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do mining injury cases take?</h3><p className="text-slate-400">Most cases settle in 12-24 months. Complex cases involving multiple defendants or black lung claims may take longer.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, future earnings, pain and suffering, and disability benefits. Fatal accidents support wrongful death claims.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Are surface miners protected?</h3><p className="text-slate-400">Yes, MSHA regulations cover both underground and surface mining operations. Surface mining has distinct hazards like highwall collapses.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What if the mine closed?</h3><p className="text-slate-400">You may still have claims against the company, their insurance, or federal programs even if the mine is no longer operating.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{MINING_2026.citation}</p>
            </main>
        </>
    );
}
