"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Pill, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, OZEMPIC_2026, calculateOzempicSettlement, formatCurrency, OzempicResult } from "@/lib/calculators/ozempic";

export default function OzempicCalculatorPage() {
    const [sideEffectIndex, setSideEffectIndex] = useState(0);
    const [usageDuration, setUsageDuration] = useState("12");
    const [medicalBills, setMedicalBills] = useState("50,000");
    const [annualIncome, setAnnualIncome] = useState("55,000");
    const [hospitalized, setHospitalized] = useState(true);
    const [surgeryRequired, setSurgeryRequired] = useState(false);
    const [result, setResult] = useState<OzempicResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setAnnualIncome(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const duration = parseInt(usageDuration) || 12; const medicalNum = parseVal(medicalBills); const incomeNum = parseVal(annualIncome); setResult(calculateOzempicSettlement(sideEffectIndex, duration, medicalNum, incomeNum, hospitalized, surgeryRequired)); };

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/ozempic" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Pill className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Ozempic Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Ozempic Lawsuit Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your Ozempic lawsuit compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Side Effect/Injury</label><select value={sideEffectIndex} onChange={(e) => setSideEffectIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{OZEMPIC_2026.sideEffects.map((s, i) => (<option key={i} value={i}>{s.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{OZEMPIC_2026.sideEffects[sideEffectIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Duration of Ozempic Use (Months)</label><input type="text" value={usageDuration} onChange={(e) => setUsageDuration(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Income</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={annualIncome} onChange={handleIncomeChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div className="flex items-center gap-3"><input type="checkbox" id="hospitalized" checked={hospitalized} onChange={(e) => setHospitalized(e.target.checked)} className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-500" /><label htmlFor="hospitalized" className="text-sm text-slate-300">I was hospitalized</label></div>
                        <div className="flex items-center gap-3"><input type="checkbox" id="surgery" checked={surgeryRequired} onChange={(e) => setSurgeryRequired(e.target.checked)} className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-500" /><label htmlFor="surgery" className="text-sm text-slate-300">Surgery was required</label></div>
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
                        <div className="bg-red-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-red-300">{result.sideEffect}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-amber-400">{formatCurrency(result.painSuffering)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Ozempic Lawsuit FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the Ozempic lawsuit about?</h3><p className="text-slate-400">Plaintiffs allege Novo Nordisk failed to warn about serious side effects including gastroparesis, intestinal blockage, and vision loss from Ozempic and Wegovy.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Am I eligible to file a lawsuit?</h3><p className="text-slate-400">You may be eligible if you took Ozempic, Wegovy, or similar GLP-1 drugs and experienced serious side effects like stomach paralysis or required hospitalization.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{OZEMPIC_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the Ozempic lawsuit about?", acceptedAnswer: { "@type": "Answer", text: "Plaintiffs allege Novo Nordisk failed to warn about serious side effects including gastroparesis, intestinal blockage, and vision loss." } }] }) }} />
        </div>
    );
}
