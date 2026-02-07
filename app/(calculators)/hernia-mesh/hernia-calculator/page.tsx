"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, HERNIA_2026, calculateHerniaMeshSettlement, formatCurrency, HerniaResult } from "@/lib/calculators/hernia-mesh";

export default function HerniaCalculatorPage() {
    const [complicationIndex, setComplicationIndex] = useState(1);
    const [surgeryIndex, setSurgeryIndex] = useState(1);
    const [revisionCount, setRevisionCount] = useState("2");
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [result, setResult] = useState<HerniaResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const count = parseInt(revisionCount) || 2; const medicalNum = parseVal(medicalBills); setResult(calculateHerniaMeshSettlement(complicationIndex, surgeryIndex, count, medicalNum)); };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h1 className="text-xl font-bold text-white mb-2">Hernia Mesh Settlement Calculator</h1>
                <p className="text-sm text-slate-400 mb-6">Estimate your hernia mesh lawsuit compensation</p>

                <div className="space-y-5 mb-6">
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Complication Type</label><select value={complicationIndex} onChange={(e) => setComplicationIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HERNIA_2026.complications.map((c, i) => (<option key={i} value={i}>{c.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{HERNIA_2026.complications[complicationIndex].description}</p></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Surgery History</label><select value={surgeryIndex} onChange={(e) => setSurgeryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{HERNIA_2026.surgeryFactors.map((s, i) => (<option key={i} value={i}>{s.factor}</option>))}</select><p className="text-xs text-slate-500 mt-1">{HERNIA_2026.surgeryFactors[surgeryIndex].description}</p></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Number of Revision Surgeries</label><input type="text" value={revisionCount} onChange={(e) => setRevisionCount(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                    <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                </div>

                <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
            </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-red-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-red-300">{result.complication}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-white">{formatCurrency(result.painSuffering)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Surgery Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.surgeryBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Hernia Mesh Lawsuit FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the hernia mesh lawsuit about?</h3><p className="text-slate-400">Lawsuits allege manufacturers sold defective mesh products that caused serious complications including chronic pain, infection, and organ perforation.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Am I eligible to file a lawsuit?</h3><p className="text-slate-400">You may be eligible if you had hernia mesh surgery and experienced complications like chronic pain, mesh migration, infection, or required revision surgery.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{HERNIA_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the hernia mesh lawsuit about?", acceptedAnswer: { "@type": "Answer", text: "Lawsuits allege manufacturers sold defective mesh products that caused serious complications." } }] }) }} />
        </>
    );
}
