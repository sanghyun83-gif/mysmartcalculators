"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, EXPOSURE_SOURCES, SEVERITY_LEVELS, AGE_GROUPS, FAQS, calculateLeadPoisoningSettlement, formatCurrency, LEAD_POISONING_2026 } from "@/lib/calculators/lead-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Droplets, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [exposureSource, setExposureSource] = useState("lead-paint");
    const [severity, setSeverity] = useState("moderate");
    const [ageGroup, setAgeGroup] = useState("toddler");
    const [medicalExpenses, setMedicalExpenses] = useState("50000");
    const [specialEducation, setSpecialEducation] = useState("100000");
    const [lostEarningCapacity, setLostEarningCapacity] = useState("200000");
    const [yearsExposed, setYearsExposed] = useState("3");
    const [result, setResult] = useState<ReturnType<typeof calculateLeadPoisoningSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateLeadPoisoningSettlement(exposureSource, severity, ageGroup, parseInt(medicalExpenses.replace(/\D/g, '')) || 0, parseInt(specialEducation.replace(/\D/g, '')) || 0, parseInt(lostEarningCapacity.replace(/\D/g, '')) || 0, parseInt(yearsExposed) || 2));
    };

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/lead-poisoning" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Advanced Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Lead Poisoning Calculator</h1>
                    <p className="text-slate-400">7 input fields for comprehensive settlement estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Source</label><select value={exposureSource} onChange={(e) => setExposureSource(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{EXPOSURE_SOURCES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Severity Level</label><select value={severity} onChange={(e) => setSeverity(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{SEVERITY_LEVELS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Age at Exposure</label><select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{AGE_GROUPS.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years Exposed</label><input type="number" value={yearsExposed} onChange={(e) => setYearsExposed(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Expenses ($)</label><input type="text" value={medicalExpenses} onChange={(e) => setMedicalExpenses(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Special Education Costs ($)</label><input type="text" value={specialEducation} onChange={(e) => setSpecialEducation(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div className="md:col-span-2"><label className="block text-sm font-medium text-slate-300 mb-2">Lost Earning Capacity ($)</label><input type="text" value={lostEarningCapacity} onChange={(e) => setLostEarningCapacity(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-red-900/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Settlement</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-purple-400">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p><p className="text-slate-400 mt-2">{result.exposureSource} • {result.severity} • {result.ageGroup}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Damages Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Economic Damages</span><span className="text-white">{formatCurrency(result.economicDamages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Pain & Suffering</span><span className="text-white">{formatCurrency(result.painSufferingLow)} - {formatCurrency(result.painSufferingHigh)}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-purple-200">Lead poisoning cases require medical evidence of blood lead levels. Consult with an attorney experienced in lead exposure litigation.</p></div>
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

            <section className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-center">
                    <div className="w-full max-w-xs">
                        <RelatedCalculators currentCalc="lead-poisoning" count={5} />
                    </div>
                </div>
            </section>
            <section className="max-w-4xl mx-auto px-4 py-4">
                <LegalDisclaimer category="legal" />
            </section>

        </>
    );
}
