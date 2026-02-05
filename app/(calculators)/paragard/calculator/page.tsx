"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, PARAGARD_2026, calculateParagardSettlement, formatCurrency, ParagardResult } from "@/lib/calculators/paragard";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ParagardCalculatorPage() {
    const [fractureIndex, setFractureIndex] = useState(0);
    const [removalIndex, setRemovalIndex] = useState(2);
    const [usageIndex, setUsageIndex] = useState(2);
    const [medicalBills, setMedicalBills] = useState("50,000");
    const [result, setResult] = useState<ParagardResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateParagardSettlement(fractureIndex, removalIndex, usageIndex, medicalNum)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/paragard" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-purple-500" /><span className="text-lg font-bold text-white">Paragard Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6 text-center">
                    <p className="text-red-300 font-semibold">🔥 First Bellwether Trial: {PARAGARD_2026.bellwetherTrial.firstTrialDate}</p>
                    <p className="text-sm text-red-200">{PARAGARD_2026.bellwetherTrial.mdlNumber} | {PARAGARD_2026.bellwetherTrial.court}</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Paragard Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your IUD fracture compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={fractureIndex} onChange={(e) => setFractureIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PARAGARD_2026.fractureTypes.map((f, i) => (<option key={i} value={i}>{f.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{PARAGARD_2026.fractureTypes[fractureIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Removal Procedure</label><select value={removalIndex} onChange={(e) => setRemovalIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PARAGARD_2026.removalFactors.map((r, i) => (<option key={i} value={i}>{r.factor}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Usage Duration</label><select value={usageIndex} onChange={(e) => setUsageIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PARAGARD_2026.usageDuration.map((u, i) => (<option key={i} value={i}>{u.duration}</option>))}</select></div>
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
                        <div className="bg-purple-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-purple-300">{result.fractureType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Removal Bonus ({result.removalFactor})</span><span className="font-medium text-purple-400">{formatCurrency(result.removalBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Usage Bonus ({result.usageDuration})</span><span className="font-medium text-purple-400">{formatCurrency(result.usageBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Paragard FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Why does Paragard break?</h3><p className="text-slate-400">The Paragard IUD is made of plastic with copper coiled around it. The plastic arms can become brittle over time and fracture during removal, leaving fragments inside the body.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">When is the first bellwether trial?</h3><p className="text-slate-400">The first bellwether trial in MDL 2974 is scheduled for {PARAGARD_2026.bellwetherTrial.firstTrialDate} in the {PARAGARD_2026.bellwetherTrial.court}. This trial will set precedent for future settlements.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{PARAGARD_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "When is the first Paragard bellwether trial?", acceptedAnswer: { "@type": "Answer", text: `The first bellwether trial is scheduled for ${PARAGARD_2026.bellwetherTrial.firstTrialDate}.` } }] }) }} />
        </>
    );
}
