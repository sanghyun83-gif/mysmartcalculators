"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Flame } from "lucide-react";
import { SITE, GAS_2026, calculateGasSettlement, formatCurrency, GasResult } from "@/lib/calculators/gas-explosion";

export default function GasCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [result, setResult] = useState<GasResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateGasSettlement(typeIndex, parseVal(medicalBills))); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Gas Explosion Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your gas explosion compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Explosion Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{GAS_2026.explosionTypes.map((e, i) => (<option key={i} value={i}>{e.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{GAS_2026.explosionTypes[typeIndex].description}</p></div>
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
                                <div className="flex justify-between py-2"><span className="text-slate-300">Medical Costs (3x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Gas Explosion FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What causes most gas explosions?</h3><p className="text-slate-400">Natural gas leaks from aging pipes, defective appliances, and improper installation are leading causes. Gas utilities' failure to detect leaks is a major liability factor.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who is liable for a gas explosion?</h3><p className="text-slate-400">Gas utility companies, property owners who ignored gas smells, appliance manufacturers, pipeline operators, and contractors who improperly installed gas lines may be liable.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What if I smelled gas before the explosion?</h3><p className="text-slate-400">If you reported a gas smell and the utility failed to respond adequately, this significantly strengthens your case and may support punitive damages.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can I sue the gas company?</h3><p className="text-slate-400">Yes, gas utilities can be sued for negligence in maintaining lines, failing to detect leaks, or inadequate response to reports. Many large settlements involve utility company negligence.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, property damage, pain and suffering, and in cases of gross negligence, punitive damages. Fatal explosions support wrongful death claims.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{GAS_2026.citation}</p>
            </main>
        </>
    );
}
