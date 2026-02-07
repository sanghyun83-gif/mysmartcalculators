"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, INJURY_TYPES, BUS_TYPES, ACCIDENT_CAUSES, FAQS, calculateBusSettlement, formatCurrency, BUS_2026 } from "@/lib/calculators/bus-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Bus, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [injuryType, setInjuryType] = useState("fractures");
    const [busType, setBusType] = useState("public-transit");
    const [accidentCause, setAccidentCause] = useState("driver-negligence");
    const [medicalExpenses, setMedicalExpenses] = useState("75000");
    const [isPassenger, setIsPassenger] = useState(true);
    const [governmentBus, setGovernmentBus] = useState(false);
    const [hasDocumentation, setHasDocumentation] = useState(true);
    const [result, setResult] = useState<ReturnType<typeof calculateBusSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateBusSettlement(injuryType, busType, accidentCause, parseInt(medicalExpenses.replace(/\D/g, '')) || 0, isPassenger, governmentBus, hasDocumentation));
    };

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/bus-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Settlement Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Bus Accident Settlement Calculator</h1>
                    <p className="text-slate-400">7 input fields for claim estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryType} onChange={(e) => setInjuryType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{INJURY_TYPES.map((i) => <option key={i.id} value={i.id}>{i.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Bus Type</label><select value={busType} onChange={(e) => setBusType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{BUS_TYPES.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Accident Cause</label><select value={accidentCause} onChange={(e) => setAccidentCause(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{ACCIDENT_CAUSES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Expenses ($)</label><input type="text" value={medicalExpenses} onChange={(e) => setMedicalExpenses(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={isPassenger} onChange={() => setIsPassenger(!isPassenger)} className="w-4 h-4 text-amber-500" /><span className="text-slate-300 text-sm">Was a passenger</span></label>
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={governmentBus} onChange={() => setGovernmentBus(!governmentBus)} className="w-4 h-4 text-amber-500" /><span className="text-slate-300 text-sm">Government bus</span></label>
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={hasDocumentation} onChange={() => setHasDocumentation(!hasDocumentation)} className="w-4 h-4 text-amber-500" /><span className="text-slate-300 text-sm">Documentation available</span></label>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-amber-900/30 to-slate-900 border border-amber-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Settlement</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-amber-400">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p><p className="text-slate-400 mt-2">{result.injuryType} • {result.busType}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Damages Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Medical Expenses</span><span className="text-white">{formatCurrency(result.medicalExpenses)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Pain &amp; Suffering (Est.)</span><span className="text-white">{formatCurrency(result.painSuffering)}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-amber-200">Common carrier cases often result in higher settlements due to heightened duty of care.</p></div>
                    </div>
                )}
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left"><span className="text-white font-medium pr-4">{faq.question}</span>{openFaq === i ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>
                            {openFaq === i && <div className="px-4 pb-4"><p className="text-slate-400">{faq.answer}</p></div>}
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bus-accident" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="legal" /></section>
            </section>

        </>
    );
}
