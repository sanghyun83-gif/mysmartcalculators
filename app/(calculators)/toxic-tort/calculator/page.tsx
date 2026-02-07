"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, TOXIC_EXPOSURE_TYPES, DISEASE_TYPES, LIABILITY_FACTORS, FAQS, calculateToxicTortSettlement, formatCurrency, TOXIC_TORT_2026 } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Scale, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [exposureType, setExposureType] = useState("water-contamination");
    const [diseaseType, setDiseaseType] = useState("cancer");
    const [liabilityFactor, setLiabilityFactor] = useState("negligence");
    const [medicalExpenses, setMedicalExpenses] = useState("150000");
    const [lostWages, setLostWages] = useState("200000");
    const [futureCareCost, setFutureCareCost] = useState("300000");
    const [yearsExposed, setYearsExposed] = useState("10");
    const [age, setAge] = useState("50");
    const [numberOfPlaintiffs, setNumberOfPlaintiffs] = useState("1");
    const [propertyDamage, setPropertyDamage] = useState("50000");
    const [result, setResult] = useState<ReturnType<typeof calculateToxicTortSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const displayedFaqs = showAllFaqs ? FAQS : FAQS.slice(0, 5);

    const handleCalculate = () => {
        setResult(calculateToxicTortSettlement(exposureType, diseaseType, liabilityFactor, parseInt(medicalExpenses.replace(/\D/g, '')) || 0, parseInt(lostWages.replace(/\D/g, '')) || 0, parseInt(futureCareCost.replace(/\D/g, '')) || 0, parseInt(yearsExposed) || 5, parseInt(age) || 50, parseInt(numberOfPlaintiffs) || 1, parseInt(propertyDamage.replace(/\D/g, '')) || 0));
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/toxic-tort" className="flex items-center gap-2 hover:opacity-80"><Scale className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/toxic-tort" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Advanced+ Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Toxic Tort Settlement Calculator</h1>
                    <p className="text-slate-400">10+ input fields for comprehensive settlement estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Type</label><select value={exposureType} onChange={(e) => setExposureType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{TOXIC_EXPOSURE_TYPES.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Resulting Disease</label><select value={diseaseType} onChange={(e) => setDiseaseType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{DISEASE_TYPES.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Defendant Liability</label><select value={liabilityFactor} onChange={(e) => setLiabilityFactor(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{LIABILITY_FACTORS.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years Exposed</label><input type="number" value={yearsExposed} onChange={(e) => setYearsExposed(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Expenses ($)</label><input type="text" value={medicalExpenses} onChange={(e) => setMedicalExpenses(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Lost Wages ($)</label><input type="text" value={lostWages} onChange={(e) => setLostWages(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Future Care Costs ($)</label><input type="text" value={futureCareCost} onChange={(e) => setFutureCareCost(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Property Damage ($)</label><input type="text" value={propertyDamage} onChange={(e) => setPropertyDamage(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Your Age</label><input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2"># of Plaintiffs (Class Action)</label><input type="number" value={numberOfPlaintiffs} onChange={(e) => setNumberOfPlaintiffs(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-amber-900/30 to-red-900/20 border border-amber-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Settlement</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-amber-400">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p><p className="text-slate-400 mt-2">{result.exposureType} • {result.diseaseType}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Damages Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Economic Damages</span><span className="text-white">{formatCurrency(result.economicDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Pain & Suffering</span><span className="text-white">{formatCurrency(result.painSufferingLow)} - {formatCurrency(result.painSufferingHigh)}</span></div>
                                {result.punitiveDamages > 0 && <div className="flex justify-between py-2 bg-red-500/10 rounded-lg px-3"><span className="text-red-300">Punitive Damages ({result.liabilityLevel})</span><span className="text-red-400 font-bold">+{formatCurrency(result.punitiveDamages)}</span></div>}
                                {result.punitiveDamages > 0 && <div className="flex justify-between py-2 bg-amber-500/10 rounded-lg px-3"><span className="text-amber-300 font-semibold">Total w/ Punitive</span><span className="text-amber-400 font-bold">{formatCurrency(result.totalWithPunitive)}</span></div>}
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-amber-200">Toxic tort cases are complex. Actual settlements depend on scientific evidence and litigation strategy. Consult an experienced attorney.</p></div>
                    </div>
                )}
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {displayedFaqs.map((faq, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left"><span className="text-white font-medium pr-4">{faq.question}</span>{openFaq === i ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>
                            {openFaq === i && <div className="px-4 pb-4"><p className="text-slate-400">{faq.answer}</p></div>}
                        </div>
                    ))}
                </div>
                {FAQS.length > 5 && <button onClick={() => setShowAllFaqs(!showAllFaqs)} className="w-full mt-4 text-amber-400 hover:text-amber-300 text-sm">{showAllFaqs ? 'Show Less' : `Show All ${FAQS.length} FAQs`}</button>}
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div>
      <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="legal" /></section>
</section>

            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TOXIC_TORT_2026.citations.join(" • ")}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year} {SITE.name}</p></div></footer>
        </>
    );
}
