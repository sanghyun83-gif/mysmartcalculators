"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Waves, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, DROWNING_2026, calculateDrowningSettlement, formatCurrency, DrowningResult } from "@/lib/calculators/pool-drowning";

export default function DrowningCalculatorPage() {
    const [liabilityIndex, setLiabilityIndex] = useState(1);
    const [outcomeIndex, setOutcomeIndex] = useState(1);
    const [negligenceIndex, setNegligenceIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<DrowningResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateDrowningSettlement(liabilityIndex, outcomeIndex, negligenceIndex, medicalNum)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pool-drowning" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Waves className="w-5 h-5 text-blue-500" /><span className="text-lg font-bold text-white">Drowning Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Pool Drowning Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your pool accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Pool Location/Liability</label><select value={liabilityIndex} onChange={(e) => setLiabilityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{DROWNING_2026.liabilityTypes.map((l, i) => (<option key={i} value={i}>{l.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{DROWNING_2026.liabilityTypes[liabilityIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Outcome</label><select value={outcomeIndex} onChange={(e) => setOutcomeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{DROWNING_2026.outcomeTypes.map((o, i) => (<option key={i} value={i}>{o.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{DROWNING_2026.outcomeTypes[outcomeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Negligence Factor</label><select value={negligenceIndex} onChange={(e) => setNegligenceIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{DROWNING_2026.negligenceFactors.map((n, i) => (<option key={i} value={i}>{n.factor} ({n.multiplier}x)</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-amber-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-blue-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-blue-400" /><span className="text-blue-300">{result.outcomeType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-white">{formatCurrency(result.painSuffering)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">+ Negligence Bonus</span><span className="font-bold text-amber-400">{formatCurrency(result.negligenceBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Pool Drowning FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Who is liable for a pool drowning?</h3><p className="text-slate-400">Pool owners, property managers, and sometimes lifeguards can be held liable for inadequate supervision, missing barriers, or defective equipment.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is premises liability?</h3><p className="text-slate-400">Property owners have a duty to maintain safe conditions. Failure to do so can result in premises liability lawsuits.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{DROWNING_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Who is liable for a pool drowning accident?", acceptedAnswer: { "@type": "Answer", text: "Pool owners, property managers, and sometimes lifeguards can be held liable for inadequate supervision or defective equipment." } }] }) }} />
        </>
    );
}
