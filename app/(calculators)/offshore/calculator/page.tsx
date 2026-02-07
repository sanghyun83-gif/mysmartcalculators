"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Anchor, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, MARITIME_2026, calculateOffshoreSettlement, formatCurrency, OffshoreResult } from "@/lib/calculators/offshore";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function OffshoreCalculatorPage() {
    const [injuryIndex, setInjuryIndex] = useState(0);
    const [workerIndex, setWorkerIndex] = useState(0);
    const [yearsAtSea, setYearsAtSea] = useState("8");
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [monthlyWage, setMonthlyWage] = useState("6,500");
    const [result, setResult] = useState<OffshoreResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleWageChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMonthlyWage(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const years = parseInt(yearsAtSea) || 8; const medicalNum = parseVal(medicalBills); const wageNum = parseVal(monthlyWage); setResult(calculateOffshoreSettlement(injuryIndex, workerIndex, years, medicalNum, wageNum)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/offshore" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Anchor className="w-5 h-5 text-blue-500" /><span className="text-lg font-bold text-white">Offshore Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Offshore Maritime Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your Jones Act or maritime injury compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{MARITIME_2026.injuryTypes.map((inj, i) => (<option key={i} value={i}>{inj.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{MARITIME_2026.injuryTypes[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Worker Classification</label><select value={workerIndex} onChange={(e) => setWorkerIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{MARITIME_2026.workerTypes.map((w, i) => (<option key={i} value={i}>{w.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{MARITIME_2026.workerTypes[workerIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years at Sea</label><input type="text" value={yearsAtSea} onChange={(e) => setYearsAtSea(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Monthly Wage</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={monthlyWage} onChange={handleWageChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-blue-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-blue-400" /><span className="text-blue-300">{result.workerType} Claim</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Maritime Law Bonus</span><span className="font-medium text-blue-400">{formatCurrency(result.workerBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-blue-500" />Maritime Law FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Who qualifies as a Jones Act seaman?</h3><p className="text-slate-400">A Jones Act seaman must spend at least 30% of their work time in service of a vessel in navigation. This includes deckhands, captains, engineers, and other crew members.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is Maintenance and Cure?</h3><p className="text-slate-400">Maintenance and Cure is a maritime benefit that provides injured seamen with daily living expenses (maintenance) and medical care (cure) regardless of fault.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{MARITIME_2026.citationNote}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Who qualifies as a Jones Act seaman?", acceptedAnswer: { "@type": "Answer", text: "A Jones Act seaman must spend at least 30% of their work time in service of a vessel in navigation." } }] }) }} />
        </>
    );
}
