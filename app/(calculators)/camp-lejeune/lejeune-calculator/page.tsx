"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Droplet, Calculator, Info, AlertTriangle, Calendar } from "lucide-react";
import { SITE, LEJEUNE_2026, calculateLejeuneSettlement, formatCurrency, LejeuneResult } from "@/lib/calculators/camp-lejeune";

export default function LejeuneCalculatorPage() {
    const [conditionIndex, setConditionIndex] = useState(0);
    const [exposureIndex, setExposureIndex] = useState(2);
    const [claimantIndex, setClaimantIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<LejeuneResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateLejeuneSettlement(conditionIndex, exposureIndex, claimantIndex, medicalNum)); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6 text-center">
                    <div className="flex items-center justify-center gap-2"><Calendar className="w-4 h-4 text-red-400" /><span className="text-red-300 font-semibold">??Filing Deadline: {LEJEUNE_2026.statistics.deadlineExtended}</span></div>
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Camp Lejeune Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your water contamination compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Condition</label><select value={conditionIndex} onChange={(e) => setConditionIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{LEJEUNE_2026.conditions.map((c, i) => (<option key={i} value={i}>{c.condition} (Tier {c.tier})</option>))}</select><p className="text-xs text-slate-500 mt-1">{LEJEUNE_2026.conditions[conditionIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Time at Camp Lejeune</label><select value={exposureIndex} onChange={(e) => setExposureIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{LEJEUNE_2026.exposureYears.map((e, i) => (<option key={i} value={i}>{e.period}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Claimant Type</label><select value={claimantIndex} onChange={(e) => setClaimantIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{LEJEUNE_2026.claimantTypes.map((c, i) => (<option key={i} value={i}>{c.type}</option>))}</select></div>
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
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-amber-300">{result.condition} - {result.claimantType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Exposure Bonus ({result.exposurePeriod})</span><span className="font-medium text-amber-400">{formatCurrency(result.exposureBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Claimant Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.claimantBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Camp Lejeune FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the PACT Act?</h3><p className="text-slate-400">The Camp Lejeune Justice Act (part of PACT Act, signed {LEJEUNE_2026.statistics.pactActSigned}) allows anyone exposed to contaminated water at Camp Lejeune for 30+ days between 1953-1987 to file a lawsuit.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What contaminants were in the water?</h3><p className="text-slate-400">{LEJEUNE_2026.contaminants.map(c => `${c.name} (${c.level})`).join(', ')}. These chemicals are linked to cancer, birth defects, and other serious conditions.</p></div>
                    </div>
                </section>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the PACT Act?", acceptedAnswer: { "@type": "Answer", text: "The Camp Lejeune Justice Act allows anyone exposed to contaminated water at Camp Lejeune for 30+ days between 1953-1987 to file a lawsuit." } }] }) }} />
        </>
    );
}
