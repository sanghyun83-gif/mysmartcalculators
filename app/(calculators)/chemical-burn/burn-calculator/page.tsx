"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Flame } from "lucide-react";
import { SITE, CHEMBURN_2026, calculateBurnSettlement, formatCurrency, BurnResult } from "@/lib/calculators/chemical-burn";

export default function BurnCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [severityIndex, setSeverityIndex] = useState(1);
    const [areaIndex, setAreaIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<BurnResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateBurnSettlement(typeIndex, severityIndex, areaIndex, parseVal(medicalBills))); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Chemical Burn Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your chemical burn compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Chemical/Burn Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CHEMBURN_2026.burnTypes.map((b, i) => (<option key={i} value={i}>{b.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{CHEMBURN_2026.burnTypes[typeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Burn Severity</label><select value={severityIndex} onChange={(e) => setSeverityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CHEMBURN_2026.burnSeverity.map((s, i) => (<option key={i} value={i}>{s.severity}</option>))}</select><p className="text-xs text-slate-500 mt-1">{CHEMBURN_2026.burnSeverity[severityIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Body Area Affected</label><select value={areaIndex} onChange={(e) => setAreaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CHEMBURN_2026.bodyArea.map((a, i) => (<option key={i} value={i}>{a.area}</option>))}</select><p className="text-xs text-slate-500 mt-1">{CHEMBURN_2026.bodyArea[areaIndex].description}</p></div>
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
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.burnType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Severity Factor ({result.severity})</span><span className="font-medium text-amber-400">{formatCurrency(result.severityBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Body Area Factor ({result.bodyArea})</span><span className="font-medium text-amber-400">{formatCurrency(result.areaBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Chemical Burn FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What chemicals cause the most severe burns?</h3><p className="text-slate-400">Strong acids (sulfuric, hydrochloric) and alkalis (lye, ammonia) cause the most severe burns. Alkali burns are often worse because they penetrate deeper into tissue.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who is liable for workplace chemical burns?</h3><p className="text-slate-400">Employers who fail to provide proper PPE, safety training, or OSHA-compliant storage can be held liable. Manufacturers of defective containers or safety equipment may also be responsible.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What OSHA violations increase settlement value?</h3><p className="text-slate-400">Missing or inadequate PPE, improper chemical storage, lack of eyewash stations, inadequate ventilation, and failure to provide safety training all increase liability.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do I have to file a chemical burn lawsuit?</h3><p className="text-slate-400">Statute of limitations varies by state (typically 2-3 years). However, workers' comp claims must be filed much sooner. Consult an attorney immediately.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses (including skin grafts), lost wages, pain and suffering, disfigurement damages, and in severe cases, punitive damages for gross negligence.</p></div>
                    </div>
                </section>
            </main>
        </>
    );
}
