"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, HAIR_RELAXER_2026, calculateHairRelaxerSettlement, formatCurrency, HairRelaxerResult } from "@/lib/calculators/hair-relaxer";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function HairRelaxerCalculatorPage() {
    const [cancerIndex, setCancerIndex] = useState(0);
    const [frequencyIndex, setFrequencyIndex] = useState(2);
    const [yearsOfUse, setYearsOfUse] = useState("15");
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<HairRelaxerResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const years = parseInt(yearsOfUse) || 15; const medicalNum = parseVal(medicalBills); setResult(calculateHairRelaxerSettlement(cancerIndex, frequencyIndex, years, medicalNum)); };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h1 className="text-xl font-bold text-white mb-2">Hair Relaxer Lawsuit Settlement Calculator</h1>
                <p className="text-sm text-slate-400 mb-6">Estimate your hair relaxer lawsuit compensation</p>

                <div className="space-y-5 mb-6">
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Diagnosis</label><select value={cancerIndex} onChange={(e) => setCancerIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HAIR_RELAXER_2026.cancerTypes.map((c, i) => (<option key={i} value={i}>{c.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{HAIR_RELAXER_2026.cancerTypes[cancerIndex].description}</p></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Usage Frequency</label><select value={frequencyIndex} onChange={(e) => setFrequencyIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HAIR_RELAXER_2026.usageFrequency.map((f, i) => (<option key={i} value={i}>{f.frequency}</option>))}</select><p className="text-xs text-slate-500 mt-1">{HAIR_RELAXER_2026.usageFrequency[frequencyIndex].description}</p></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Years of Use</label><input type="text" value={yearsOfUse} onChange={(e) => setYearsOfUse(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                </div>

                <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
            </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-rose-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-rose-400" /><span className="text-rose-300">{result.cancerType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-white">{formatCurrency(result.painSuffering)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Usage Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.usageBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Hair Relaxer Lawsuit FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the hair relaxer lawsuit about?</h3><p className="text-slate-400">Studies show chemical hair relaxers contain endocrine-disrupting chemicals linked to uterine cancer, ovarian cancer, and endometriosis. Lawsuits allege manufacturers failed to warn consumers.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Am I eligible to file a lawsuit?</h3><p className="text-slate-400">You may be eligible if you regularly used chemical hair straighteners/relaxers and were diagnosed with uterine cancer, ovarian cancer, endometriosis, or uterine fibroids.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{HAIR_RELAXER_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the hair relaxer lawsuit about?", acceptedAnswer: { "@type": "Answer", text: "Studies link chemical hair relaxers to uterine cancer and endometriosis. Lawsuits allege manufacturers failed to warn consumers about these risks." } }] }) }} />
        </>
    );
}
