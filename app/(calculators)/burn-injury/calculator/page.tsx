"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    BURN_2026,
    calculateBurnSettlement,
    formatCurrency,
    BurnResult
} from "@/lib/calculators/burn-injury";

export default function BurnCalculatorPage() {
    const [degreeIndex, setDegreeIndex] = useState(1);
    const [tbsaIndex, setTbsaIndex] = useState(1);
    const [age, setAge] = useState("35");
    const [annualIncome, setAnnualIncome] = useState("65,000");
    const [hasScarring, setHasScarring] = useState(false);
    const [hasDisfigurement, setHasDisfigurement] = useState(false);
    const [result, setResult] = useState<BurnResult | null>(null);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setAnnualIncome(""); return; }
        setAnnualIncome(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const ageNum = parseInt(age) || 35;
        const incomeNum = parseVal(annualIncome);
        setResult(calculateBurnSettlement(degreeIndex, tbsaIndex, ageNum, incomeNum, hasScarring, hasDisfigurement));
    };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Burn Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your burn injury settlement based on severity</p>

                    <div className="space-y-5 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Burn Degree</label>
                            <select value={degreeIndex} onChange={(e) => setDegreeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">
                                {BURN_2026.burnDegrees.map((d, i) => (<option key={i} value={i}>{d.degree}</option>))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">{BURN_2026.burnDegrees[degreeIndex].description}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">TBSA (Total Body Surface Area)</label>
                            <select value={tbsaIndex} onChange={(e) => setTbsaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">
                                {BURN_2026.tbsaMultipliers.map((t, i) => (<option key={i} value={i}>{t.range} - {t.description}</option>))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Your Age</label>
                            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Annual Income</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={annualIncome} onChange={handleIncomeChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="scarring" checked={hasScarring} onChange={(e) => setHasScarring(e.target.checked)} className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-orange-500" />
                            <label htmlFor="scarring" className="text-sm text-slate-300">Permanent scarring</label>
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="disfigurement" checked={hasDisfigurement} onChange={(e) => setHasDisfigurement(e.target.checked)} className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-orange-500" />
                            <label htmlFor="disfigurement" className="text-sm text-slate-300">Disfigurement (face/visible areas)</label>
                        </div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                        <Calculator className="w-5 h-5" />Calculate Settlement
                    </button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-orange-900/30 p-4 border-b border-slate-700">
                            <div className="flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-400" />
                                <span className="text-orange-300">{result.burnDegree} | TBSA: {result.tbsaRange}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Settlement Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Treatment Costs</span><span className="font-medium text-white">{formatCurrency(result.baseTreatmentCost)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Future Medical</span><span className="font-medium text-white">{formatCurrency(result.futureMedical)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Pain & Suffering</span><span className="font-medium text-orange-400">{formatCurrency(result.painSuffering)}</span></div>
                                {result.scarringDamages > 0 && (<div className="flex justify-between py-2"><span className="text-slate-300">Scarring/Disfigurement</span><span className="font-medium text-red-400">{formatCurrency(result.scarringDamages)}</span></div>)}
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-orange-500" />Burn Settlement FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is TBSA?</h3><p className="text-slate-400">Total Body Surface Area is the percentage of body affected by burns. Higher TBSA increases treatment costs and settlement value.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Do scarring/disfigurement increase settlements?</h3><p className="text-slate-400">Yes. Permanent scarring and disfigurement, especially on visible areas, significantly increase settlement amounts.</p></div>
                    </div>
                </section>

            </main>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is TBSA in burn injuries?", acceptedAnswer: { "@type": "Answer", text: "Total Body Surface Area (TBSA) is the percentage of body affected by burns. Higher TBSA increases treatment costs and settlement value." } }] }) }} />
        </>
    );
}
