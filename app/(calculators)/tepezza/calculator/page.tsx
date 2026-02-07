"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Ear, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, TEPEZZA_2026, calculateTepezzaSettlement, formatCurrency, TepezzaResult } from "@/lib/calculators/tepezza";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function TepezzaCalculatorPage() {
    const [injuryIndex, setInjuryIndex] = useState(0);
    const [infusionIndex, setInfusionIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("50,000");
    const [result, setResult] = useState<TepezzaResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateTepezzaSettlement(injuryIndex, infusionIndex, medicalNum)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/tepezza" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Ear className="w-5 h-5 text-purple-500" /><span className="text-lg font-bold text-white">Tepezza Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Tepezza Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your Tepezza hearing loss compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Hearing Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{TEPEZZA_2026.hearingInjuries.map((inj, i) => (<option key={i} value={i}>{inj.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{TEPEZZA_2026.hearingInjuries[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Number of Infusions</label><select value={infusionIndex} onChange={(e) => setInfusionIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{TEPEZZA_2026.infusionFactors.map((inf, i) => (<option key={i} value={i}>{inf.infusions}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills (hearing aids, treatment)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
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
                        <div className="bg-purple-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-purple-300">{result.injuryType} - {result.infusionFactor}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Infusion Bonus</span><span className="font-medium text-purple-400">{formatCurrency(result.infusionBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Tepezza FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is Tepezza and what does it treat?</h3><p className="text-slate-400">Tepezza (teprotumumab) is the only FDA-approved treatment for Thyroid Eye Disease (TED). However, studies show 65%+ of patients experience hearing problems including permanent hearing loss and tinnitus.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">When did the FDA update Tepezza warnings?</h3><p className="text-slate-400">In 2023, the FDA required updated labeling to warn about hearing impairment, including permanent hearing loss. Many patients were not adequately warned before receiving treatment.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{TEPEZZA_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is Tepezza?", acceptedAnswer: { "@type": "Answer", text: "Tepezza is the only FDA-approved treatment for Thyroid Eye Disease, but 65%+ of patients experience hearing problems." } }] }) }} />
        </>
    );
}
