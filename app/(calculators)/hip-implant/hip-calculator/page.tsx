"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, HIP_2026, calculateHipSettlement, formatCurrency, HipResult } from "@/lib/calculators/hip-implant";

export default function HipCalculatorPage() {
    const [complicationIndex, setComplicationIndex] = useState(0);
    const [brandIndex, setBrandIndex] = useState(0);
    const [revisionIndex, setRevisionIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [result, setResult] = useState<HipResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateHipSettlement(complicationIndex, brandIndex, revisionIndex, medicalNum)); };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h1 className="text-xl font-bold text-white mb-2">Hip Implant Settlement Calculator</h1>
                <p className="text-sm text-slate-400 mb-6">Estimate your hip replacement lawsuit compensation</p>

                <div className="space-y-5 mb-6">
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Complication Type</label><select value={complicationIndex} onChange={(e) => setComplicationIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HIP_2026.complicationTypes.map((c, i) => (<option key={i} value={i}>{c.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{HIP_2026.complicationTypes[complicationIndex].description}</p></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Hip Implant Brand</label><select value={brandIndex} onChange={(e) => setBrandIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HIP_2026.implantBrands.map((b, i) => (<option key={i} value={i}>{b.brand} ({b.manufacturer}) {b.recalled ? "? ️ RECALLED" : ""}</option>))}</select></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Revision Surgeries</label><select value={revisionIndex} onChange={(e) => setRevisionIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HIP_2026.revisionFactors.map((r, i) => (<option key={i} value={i}>{r.revisions}</option>))}</select></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
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
                        <div className="bg-purple-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-purple-300">{result.implantBrand} - {result.revisionFactor}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.complicationType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Revision & Recall Bonus</span><span className="font-medium text-purple-400">{formatCurrency(result.revisionBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Hip Implant FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is metallosis?</h3><p className="text-slate-400">Metallosis occurs when metal-on-metal hip implants release cobalt and chromium ions into the bloodstream, causing tissue damage, pain, and systemic health issues.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Which hip implants are recalled?</h3><p className="text-slate-400">Major recalls include DePuy ASR, Stryker Rejuvenate/ABG II, Zimmer Durom Cup, Biomet M2a Magnum, and Wright Conserve systems.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{HIP_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is metallosis?", acceptedAnswer: { "@type": "Answer", text: "Metallosis occurs when metal-on-metal hip implants release metal ions causing tissue damage and health issues." } }] }) }} />
        </>
    );
}
