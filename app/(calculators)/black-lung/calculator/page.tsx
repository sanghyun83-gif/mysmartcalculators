"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, BLACK_LUNG_TYPES, SEVERITY_LEVELS, FAQS, calculateBlackLungSettlement, formatCurrency, BLACK_LUNG_2026 } from "@/lib/calculators/black-lung";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Stethoscope, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [lungType, setLungType] = useState("simple");
    const [severity, setSeverity] = useState("moderate");
    const [medicalExpenses, setMedicalExpenses] = useState("50000");
    const [lostWages, setLostWages] = useState("80000");
    const [yearsExposed, setYearsExposed] = useState("20");
    const [result, setResult] = useState<ReturnType<typeof calculateBlackLungSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateBlackLungSettlement(lungType, severity, parseInt(medicalExpenses.replace(/\D/g, '')) || 0, parseInt(lostWages.replace(/\D/g, '')) || 0, parseInt(yearsExposed) || 15));
    };

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/black-lung" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Free {SITE.year} Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Black Lung Settlement Calculator</h1>
                    <p className="text-slate-400">Estimate your coal workers&apos; pneumoconiosis compensation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Disease Type</label><select value={lungType} onChange={(e) => setLungType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{BLACK_LUNG_TYPES.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Severity</label><select value={severity} onChange={(e) => setSeverity(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{SEVERITY_LEVELS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Expenses ($)</label><input type="text" value={medicalExpenses} onChange={(e) => setMedicalExpenses(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Lost Wages ($)</label><input type="text" value={lostWages} onChange={(e) => setLostWages(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div className="md:col-span-2"><label className="block text-sm font-medium text-slate-300 mb-2">Years in Mining</label><input type="number" value={yearsExposed} onChange={(e) => setYearsExposed(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-gray-900/30 border border-purple-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Settlement Range</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-purple-400">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p><p className="text-slate-400 mt-2">{result.type} - {result.severity}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Settlement Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Medical Expenses</span><span className="text-white">{formatCurrency(result.medicalExpenses)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Lost Wages</span><span className="text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Future Care</span><span className="text-white">{formatCurrency(result.futureCare)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Pain & Suffering</span><span className="text-white">{formatCurrency(result.painSufferingLow)} - {formatCurrency(result.painSufferingHigh)}</span></div>
                                <div className="flex justify-between py-2 bg-emerald-500/10 rounded-lg px-3"><span className="text-emerald-300">+ Federal Monthly Benefit</span><span className="text-emerald-400 font-bold">${result.monthlyFederalBenefit}/mo</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-amber-200">This estimates civil lawsuit value. Federal black lung benefits are separate and guaranteed by law.</p></div>
                    </div>
                )}
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left"><span className="text-white font-medium pr-4">{faq.question}</span>{openFaq === i ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>
                            {openFaq === i && <div className="px-4 pb-4"><p className="text-slate-400">{faq.answer}</p></div>}
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="black-lung" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="medical" /></section>
            </section>
        
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
                                name: "How accurate is the black lung calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this black lung calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the black lung data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these black lung results for decisions?",
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
