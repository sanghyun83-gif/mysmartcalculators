"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, CRANE_2026, calculateCraneSettlement, formatCurrency, CraneResult } from "@/lib/calculators/crane";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CraneCalculatorPage() {
    const [accidentIndex, setAccidentIndex] = useState(0);
    const [oshaIndex, setOshaIndex] = useState(0);
    const [severityIndex, setSeverityIndex] = useState(2);
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [result, setResult] = useState<CraneResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateCraneSettlement(accidentIndex, oshaIndex, severityIndex, parseVal(medicalBills))); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6 text-center">
                    <p className="text-red-300 font-semibold">?�️ {CRANE_2026.statistics.annualDeaths} deaths + {CRANE_2026.statistics.annualInjuries.toLocaleString()} injuries/year</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Crane Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your construction accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Type</label><select value={accidentIndex} onChange={(e) => setAccidentIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CRANE_2026.accidentTypes.map((a, i) => (<option key={i} value={i}>{a.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{CRANE_2026.accidentTypes[accidentIndex].description} ({CRANE_2026.accidentTypes[accidentIndex].fatalityRate}% fatal)</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">OSHA Violations</label><select value={oshaIndex} onChange={(e) => setOshaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CRANE_2026.oshaViolations.map((o, i) => (<option key={i} value={i}>{o.violation} ({o.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{CRANE_2026.oshaViolations[oshaIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Severity</label><select value={severityIndex} onChange={(e) => setSeverityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{CRANE_2026.injurySeverity.map((s, i) => (<option key={i} value={i}>{s.level}</option>))}</select><p className="text-xs text-slate-500 mt-1">{CRANE_2026.injurySeverity[severityIndex].description}</p></div>
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
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-amber-300">{result.accidentType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (3x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">OSHA Violation Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.oshaBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Severity Factor ({result.severity})</span><span className="font-medium text-amber-400">{formatCurrency(result.severityBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Crane Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Who can I sue after a crane accident?</h3><p className="text-slate-400">Potential defendants include the general contractor, crane operator's employer, crane owner/rental company, crane manufacturer (for defects), site owner, and rigging contractors.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How do OSHA violations affect my case?</h3><p className="text-slate-400">OSHA violations can significantly increase your settlement. Willful violations (1.8x) and multiple violations (2.0x) indicate the employer knowingly ignored safety rules, strengthening your case.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the statute of limitations?</h3><p className="text-slate-400">Most states allow 2-3 years to file a construction injury lawsuit. OSHA must be notified within 30 days for fatal accidents. Consult an attorney immediately.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What are common crane accident causes?</h3><p className="text-slate-400">Common causes include contact with power lines, overloading, improper rigging, mechanical failure, lack of inspection, and operator error/fatigue.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can I file workers' comp AND a lawsuit?</h3><p className="text-slate-400">Yes. Workers' compensation covers immediate medical bills and lost wages, while a third-party lawsuit against negligent contractors or manufacturers can provide additional compensation.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{CRANE_2026.citation}</p>
            </main>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the crane calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this crane calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the crane data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these crane results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
