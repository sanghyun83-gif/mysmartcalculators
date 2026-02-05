"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Leaf, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, PARAQUAT_2026, calculateParaquatSettlement, formatCurrency, ParaquatResult } from "@/lib/calculators/paraquat";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ParaquatCalculatorPage() {
    const [stageIndex, setStageIndex] = useState(1);
    const [exposureIndex, setExposureIndex] = useState(0);
    const [exposureYears, setExposureYears] = useState("10");
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [annualIncome, setAnnualIncome] = useState("55,000");
    const [result, setResult] = useState<ParaquatResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setAnnualIncome(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const years = parseInt(exposureYears) || 10; const medicalNum = parseVal(medicalBills); const incomeNum = parseVal(annualIncome); setResult(calculateParaquatSettlement(stageIndex, exposureIndex, years, medicalNum, incomeNum)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/paraquat" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Leaf className="w-5 h-5 text-green-500" /><span className="text-lg font-bold text-white">Paraquat Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Paraquat Lawsuit Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your Paraquat lawsuit compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Parkinson&apos;s Disease Stage</label><select value={stageIndex} onChange={(e) => setStageIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PARAQUAT_2026.diseaseStages.map((s, i) => (<option key={i} value={i}>{s.stage}</option>))}</select><p className="text-xs text-slate-500 mt-1">{PARAQUAT_2026.diseaseStages[stageIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Type</label><select value={exposureIndex} onChange={(e) => setExposureIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PARAQUAT_2026.exposureTypes.map((e, i) => (<option key={i} value={i}>{e.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{PARAQUAT_2026.exposureTypes[exposureIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years of Exposure</label><input type="text" value={exposureYears} onChange={(e) => setExposureYears(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Income (Before Diagnosis)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={annualIncome} onChange={handleIncomeChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-amber-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-green-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-green-400" /><span className="text-green-300">{result.diseaseStage}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Exposure Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.exposureBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Paraquat Lawsuit FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is Paraquat?</h3><p className="text-slate-400">Paraquat is a toxic herbicide (weed killer) linked to Parkinson&apos;s disease. It&apos;s banned in 50+ countries but still used in the US.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Am I eligible to file a lawsuit?</h3><p className="text-slate-400">You may be eligible if you were exposed to Paraquat (as a farmer, farm worker, or lived near treated fields) and developed Parkinson&apos;s disease.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{PARAQUAT_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is Paraquat and why are there lawsuits?", acceptedAnswer: { "@type": "Answer", text: "Paraquat is a toxic herbicide linked to Parkinson's disease. Lawsuits allege manufacturers knew about the risks but failed to warn users." } }] }) }} />
        </>
    );
}
