"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plane, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, AVIATION_2026, calculateAviationSettlement, formatCurrency, AviationResult } from "@/lib/calculators/aviation";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function AviationCalculatorPage() {
    const [accidentIndex, setAccidentIndex] = useState(0);
    const [causeIndex, setCauseIndex] = useState(1);
    const [severityIndex, setSeverityIndex] = useState(2);
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [result, setResult] = useState<AviationResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const medicalNum = parseVal(medicalBills); setResult(calculateAviationSettlement(accidentIndex, causeIndex, severityIndex, medicalNum)); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Aviation Accident Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your plane crash compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Type</label><select value={accidentIndex} onChange={(e) => setAccidentIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{AVIATION_2026.accidentTypes.map((acc, i) => (<option key={i} value={i}>{acc.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{AVIATION_2026.accidentTypes[accidentIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Cause</label><select value={causeIndex} onChange={(e) => setCauseIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{AVIATION_2026.causeTypes.map((c, i) => (<option key={i} value={i}>{c.cause} ({c.percentage}% of accidents)</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Severity</label><select value={severityIndex} onChange={(e) => setSeverityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{AVIATION_2026.injurySeverity.map((s, i) => (<option key={i} value={i}>{s.severity}</option>))}</select></div>
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
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-amber-300">{result.accidentType} - {result.causeType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Severity Factor ({result.severity})</span><span className="font-medium text-white">{formatCurrency(result.severityFactor)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (3x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Cause Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.causeBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Aviation Accident FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the Montreal Convention?</h3><p className="text-slate-400">The Montreal Convention limits airline liability to approximately SDR 175,800 (~$235,000) for international flights, unless the airline is proven negligent. Domestic flights have no caps.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who can be held liable in a plane crash?</h3><p className="text-slate-400">Liability can extend to airlines, aircraft manufacturers (Boeing, Airbus), maintenance companies, air traffic controllers, and even government agencies like the FAA.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{AVIATION_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the Montreal Convention?", acceptedAnswer: { "@type": "Answer", text: "The Montreal Convention limits airline liability to SDR 175,800 for international flights unless negligence is proven." } }] }) }} />
        </>
    );
}
