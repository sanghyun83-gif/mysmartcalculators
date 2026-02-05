"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Pipette } from "lucide-react";
import { SITE, PIPELINE_2026, calculatePipelineSettlement, formatCurrency, PipelineResult } from "@/lib/calculators/pipeline";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function PipelineCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("200,000");
    const [result, setResult] = useState<PipelineResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculatePipelineSettlement(typeIndex, parseVal(medicalBills))); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pipeline" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Pipette className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Pipeline Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Pipeline Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your pipeline accident compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PIPELINE_2026.accidentTypes.map((a, i) => (<option key={i} value={i}>{a.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{PIPELINE_2026.accidentTypes[typeIndex].description}</p></div>
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
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Pipeline Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What causes most pipeline accidents?</h3><p className="text-slate-400">Corrosion, excavation damage, material/weld failures, equipment malfunction, and operator error are the leading causes. Many are preventable with proper maintenance.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who is liable for pipeline explosions?</h3><p className="text-slate-400">Pipeline operators, owners, maintenance contractors, construction companies, equipment manufacturers, and excavators who strike lines may all be liable.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is PHMSA?</h3><p className="text-slate-400">The Pipeline and Hazardous Materials Safety Administration regulates pipeline safety. PHMSA violation records can be crucial evidence in lawsuits.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, property damage, pain and suffering, and in cases of gross negligence, punitive damages. Fatal accidents support wrongful death claims.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do pipeline cases take?</h3><p className="text-slate-400">Most cases settle in 12-24 months. Complex cases involving multiple victims or catastrophic explosions may take longer and often involve class actions.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{PIPELINE_2026.citation}</p>
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
                                name: "How accurate is the pipeline calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this pipeline calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the pipeline data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these pipeline results for decisions?",
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
