"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HardHat, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, CONSTRUCTION_2026, calculateConstructionSettlement, formatCurrency, ConstructionResult } from "@/lib/calculators/construction-accident";

export default function ConstructionCalculatorPage() {
    const [injuryIndex, setInjuryIndex] = useState(0);
    const [oshaIndex, setOshaIndex] = useState(0);
    const [age, setAge] = useState("35");
    const [annualIncome, setAnnualIncome] = useState("55,000");
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [result, setResult] = useState<ConstructionResult | null>(null);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setAnnualIncome(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => { const ageNum = parseInt(age) || 35; const incomeNum = parseVal(annualIncome); const medicalNum = parseVal(medicalBills); if (medicalNum > 0) setResult(calculateConstructionSettlement(injuryIndex, oshaIndex, ageNum, incomeNum, medicalNum)); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Construction Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your construction injury settlement</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CONSTRUCTION_2026.injuryTypes.map((t, i) => (<option key={i} value={i}>{t.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{CONSTRUCTION_2026.injuryTypes[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">OSHA Violation Level</label><select value={oshaIndex} onChange={(e) => setOshaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CONSTRUCTION_2026.oshaViolations.map((v, i) => (<option key={i} value={i}>{v.type} ({v.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{CONSTRUCTION_2026.oshaViolations[oshaIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Your Age</label><input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Income</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={annualIncome} onChange={handleIncomeChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-amber-300">{result.injuryType} | OSHA: {result.oshaViolation}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Treatment Costs</span><span className="font-medium text-white">{formatCurrency(result.baseTreatmentCost)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Future Medical</span><span className="font-medium text-white">{formatCurrency(result.futureMedical)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-amber-400">{formatCurrency(result.painSuffering)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Construction FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is OSHA&apos;s Fatal Four?</h3><p className="text-slate-400">The four leading causes of construction deaths: Falls (33.5%), Struck-by (11.1%), Electrocution (8.5%), and Caught-in/between (5.5%).</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How do OSHA violations affect settlements?</h3><p className="text-slate-400">Willful violations can multiply settlement amounts, as they indicate the employer knowingly disregarded safety regulations.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{CONSTRUCTION_2026.citationNote}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is OSHA's Fatal Four?", acceptedAnswer: { "@type": "Answer", text: "The four leading causes of construction deaths: Falls, Struck-by, Electrocution, and Caught-in/between." } }] }) }} />
        </>
    );
}
