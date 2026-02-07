"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Truck, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, TRUCK_2026, calculateTruckSettlement, formatCurrency, TruckResult } from "@/lib/calculators/18-wheeler";
import { ResultMetric } from "@/components/v3/ResultMetric";

export default function TruckCalculatorPage() {
    const [injuryIndex, setInjuryIndex] = useState(2);
    const [liabilityIndex, setLiabilityIndex] = useState(1);
    const [faultPercent, setFaultPercent] = useState("100");
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [annualIncome, setAnnualIncome] = useState("55,000");
    const [result, setResult] = useState<TruckResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setAnnualIncome(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const fault = Math.min(100, Math.max(0, parseInt(faultPercent) || 100)); const medicalNum = parseVal(medicalBills); const incomeNum = parseVal(annualIncome); setResult(calculateTruckSettlement(injuryIndex, liabilityIndex, fault, medicalNum, incomeNum)); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">18 Wheeler Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your semi-truck accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{TRUCK_2026.injuryTypes.map((inj, i) => (<option key={i} value={i}>{inj.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{TRUCK_2026.injuryTypes[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Liable Party</label><select value={liabilityIndex} onChange={(e) => setLiabilityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{TRUCK_2026.liabilityParties.map((p, i) => (<option key={i} value={i}>{p.party}</option>))}</select><p className="text-xs text-slate-500 mt-1">{TRUCK_2026.liabilityParties[liabilityIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Truck Driver Fault %</label><input type="text" value={faultPercent} onChange={(e) => setFaultPercent(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Income</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={annualIncome} onChange={handleIncomeChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-red-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-red-300">{result.liabilityParty} Liability</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Detailed Breakdown</h3>
                            <div className="grid gap-4">
                                <ResultMetric
                                    label="Base Pain & Suffering"
                                    value={formatCurrency(result.baseDamages)}
                                    description="Non-economic damages based on injury severity."
                                />
                                <ResultMetric
                                    label="Medical Multiplier (3x)"
                                    value={formatCurrency(result.medicalCosts)}
                                    description="Estimated economic damages including future care."
                                    variant="highlight"
                                />
                                <ResultMetric
                                    label="Lost Wages Estimate"
                                    value={formatCurrency(result.lostWages)}
                                    description="Projected 5-year earning capacity impact."
                                />
                                {result.liabilityBonus > 0 && (
                                    <ResultMetric
                                        label="Corporate Liability Bonus"
                                        value={formatCurrency(result.liabilityBonus)}
                                        description="Added weight for commercial carrier negligence."
                                        variant="highlight"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-red-500" />18 Wheeler Accident FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Why are truck accident settlements higher?</h3><p className="text-slate-400">Trucking companies carry $750K-$5M insurance policies (required by FMCSA), injuries are typically more severe, and multiple parties can be held liable.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who can I sue after a truck accident?</h3><p className="text-slate-400">You may sue the truck driver, trucking company (vicarious liability), cargo loader, truck manufacturer, or maintenance company depending on the cause.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{TRUCK_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Why are truck accident settlements higher?", acceptedAnswer: { "@type": "Answer", text: "Trucking companies carry $750K-$5M insurance policies, injuries are more severe, and multiple parties can be liable." } }] }) }} />
        </>
    );
}
