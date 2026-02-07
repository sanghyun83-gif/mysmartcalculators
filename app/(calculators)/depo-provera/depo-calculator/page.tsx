"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Brain, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, DEPO_2026, calculateDepoSettlement, formatCurrency, DepoResult } from "@/lib/calculators/depo-provera";

export default function DepoCalculatorPage() {
    const [tumorIndex, setTumorIndex] = useState(0);
    const [usageIndex, setUsageIndex] = useState(2);
    const [surgeryIndex, setSurgeryIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<DepoResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateDepoSettlement(tumorIndex, usageIndex, surgeryIndex, medicalNum)); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Depo-Provera Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your brain tumor compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Tumor Type</label><select value={tumorIndex} onChange={(e) => setTumorIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{DEPO_2026.tumorTypes.map((t, i) => (<option key={i} value={i}>{t.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{DEPO_2026.tumorTypes[tumorIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Depo-Provera Usage Duration</label><select value={usageIndex} onChange={(e) => setUsageIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{DEPO_2026.usageDuration.map((u, i) => (<option key={i} value={i}>{u.duration}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Surgery Status</label><select value={surgeryIndex} onChange={(e) => setSurgeryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{DEPO_2026.surgeryFactors.map((s, i) => (<option key={i} value={i}>{s.surgery}</option>))}</select></div>
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
                        <div className="bg-purple-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-purple-300">{result.tumorType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Usage Bonus ({result.usageDuration})</span><span className="font-medium text-purple-400">{formatCurrency(result.usageBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Surgery Bonus ({result.surgeryFactor})</span><span className="font-medium text-purple-400">{formatCurrency(result.surgeryBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Depo-Provera FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the link between Depo-Provera and brain tumors?</h3><p className="text-slate-400">Studies show that long-term Depo-Provera use increases meningioma (brain tumor) risk by up to 500%. In January 2026, the FDA required updated labeling to warn about this risk.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the Depo-Provera MDL?</h3><p className="text-slate-400">In February 2025, federal lawsuits were consolidated into MDL No. 3126 in the Middle District of Florida. Over 1,300 cases are pending against Pfizer.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{DEPO_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the link between Depo-Provera and brain tumors?", acceptedAnswer: { "@type": "Answer", text: "Long-term Depo-Provera use increases meningioma risk by up to 500%." } }] }) }} />
        </>
    );
}
