"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Truck } from "lucide-react";
import { SITE, FORKLIFT_2026, calculateForkliftSettlement, formatCurrency, ForkliftResult } from "@/lib/calculators/forklift";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ForkliftCalculatorPage() {
    const [typeIndex, setTypeIndex] = useState(0);
    const [oshaIndex, setOshaIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<ForkliftResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateForkliftSettlement(typeIndex, oshaIndex, parseVal(medicalBills))); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Forklift Accident Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your forklift injury compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Type</label><select value={typeIndex} onChange={(e) => setTypeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FORKLIFT_2026.accidentTypes.map((a, i) => (<option key={i} value={i}>{a.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{FORKLIFT_2026.accidentTypes[typeIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">OSHA Violation</label><select value={oshaIndex} onChange={(e) => setOshaIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FORKLIFT_2026.oshaViolations.map((o, i) => (<option key={i} value={i}>{o.violation} ({o.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{FORKLIFT_2026.oshaViolations[oshaIndex].description}</p></div>
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
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">OSHA Violation Factor</span><span className="font-medium text-amber-400">{formatCurrency(result.oshaBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Forklift Accident FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What causes most forklift accidents?</h3><p className="text-slate-400">Tip-overs (42% of deaths), pedestrian strikes, falling loads, and being crushed between the forklift and objects are the leading causes. Most are preventable with proper training.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Do I need forklift certification?</h3><p className="text-slate-400">Yes, OSHA requires all forklift operators to be trained and certified (29 CFR 1910.178). Lack of training is a major liability factor in lawsuits.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can I sue my employer for a forklift accident?</h3><p className="text-slate-400">While workers' comp typically applies, you may sue for OSHA violations or sue third parties like forklift manufacturers or maintenance contractors.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What OSHA violations increase settlements?</h3><p className="text-slate-400">No operator training, missing seatbelts, poor maintenance, overloading, and allowing untrained pedestrians in work zones all increase liability.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the average forklift accident settlement?</h3><p className="text-slate-400">Average settlements range from $500,000 to $1.2 million depending on injury severity. Fatal accidents often exceed $2 million.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{FORKLIFT_2026.citation}</p>
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
                                name: "How accurate is the forklift calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this forklift calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the forklift data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these forklift results for decisions?",
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
