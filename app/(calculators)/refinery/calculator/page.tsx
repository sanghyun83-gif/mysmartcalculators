"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Fuel } from "lucide-react";
import { SITE, REFINERY_2026, calculateRefinerySettlement, formatCurrency, RefineryResult } from "@/lib/calculators/refinery";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function RefineryCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("250,000");
    const [result, setResult] = useState<RefineryResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateRefinerySettlement(typeIndex, parseVal(medicalBills))); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/refinery" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Fuel className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Refinery Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Refinery Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your refinery accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{REFINERY_2026.accidentTypes.map((a, i) => (<option key={i} value={i}>{a.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{REFINERY_2026.accidentTypes[typeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.accidentType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Medical Costs (3x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Refinery Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What are the most dangerous refinery hazards?</h3><p className="text-slate-400">Explosions, flash fires, toxic chemical releases (H2S, benzene), high-pressure equipment failures, and falls during turnaround maintenance are the leading causes of refinery injuries.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who can be held liable for refinery accidents?</h3><p className="text-slate-400">Refinery owners/operators, contractor companies, equipment manufacturers, engineering firms, and staffing agencies may all be liable depending on the circumstances.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the CSB?</h3><p className="text-slate-400">The Chemical Safety and Hazard Investigation Board investigates major refinery accidents. CSB reports can be crucial evidence proving negligence.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can contract workers sue?</h3><p className="text-slate-400">Yes, contract and temporary workers can often sue the refinery owner as a third party, even if workers' comp applies to their direct employer.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, future earnings, pain and suffering, disfigurement, and in cases of gross negligence, punitive damages.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{REFINERY_2026.citation}</p>
            </main>
        </>
    );
}
