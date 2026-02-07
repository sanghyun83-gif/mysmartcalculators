"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, CANCER_TYPES, USAGE_DURATION, USAGE_FREQUENCY, FAQS, calculateZantacSettlement, formatCurrency, ZANTAC_2026 } from "@/lib/calculators/zantac";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Pill, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [cancerType, setCancerType] = useState("stomach");
    const [usageDuration, setUsageDuration] = useState("5-10");
    const [usageFrequency, setUsageFrequency] = useState("daily");
    const [medicalExpenses, setMedicalExpenses] = useState("150000");
    const [lostWages, setLostWages] = useState("100000");
    const [futureCareCosts, setFutureCareCosts] = useState("200000");
    const [hasPharmacyRecords, setHasPharmacyRecords] = useState(true);
    const [result, setResult] = useState<ReturnType<typeof calculateZantacSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateZantacSettlement(cancerType, usageDuration, usageFrequency, parseInt(medicalExpenses.replace(/\D/g, '')) || 0, parseInt(lostWages.replace(/\D/g, '')) || 0, parseInt(futureCareCosts.replace(/\D/g, '')) || 0, hasPharmacyRecords));
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/zantac" className="flex items-center gap-2 hover:opacity-80"><Pill className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/zantac" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Advanced Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Zantac Settlement Calculator</h1>
                    <p className="text-slate-400">7 input fields for comprehensive claim estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Cancer Type</label><select value={cancerType} onChange={(e) => setCancerType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{CANCER_TYPES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Usage Duration</label><select value={usageDuration} onChange={(e) => setUsageDuration(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{USAGE_DURATION.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Usage Frequency</label><select value={usageFrequency} onChange={(e) => setUsageFrequency(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{USAGE_FREQUENCY.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Expenses ($)</label><input type="text" value={medicalExpenses} onChange={(e) => setMedicalExpenses(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Lost Wages ($)</label><input type="text" value={lostWages} onChange={(e) => setLostWages(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Future Care Costs ($)</label><input type="text" value={futureCareCosts} onChange={(e) => setFutureCareCosts(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer mt-4"><input type="checkbox" checked={hasPharmacyRecords} onChange={() => setHasPharmacyRecords(!hasPharmacyRecords)} className="w-4 h-4 text-purple-500" /><span className="text-slate-300 text-sm">Have Pharmacy Records (prescriptions, receipts)</span></label>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-red-900/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Potential Claim Value</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-purple-400">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p><p className="text-slate-400 mt-2">{result.cancerType} • {result.usageDuration}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Damages Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Economic Damages</span><span className="text-white">{formatCurrency(result.economicDamages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Pain & Suffering</span><span className="text-white">{formatCurrency(result.painSufferingLow)} - {formatCurrency(result.painSufferingHigh)}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-amber-200">Zantac litigation is ongoing with mixed results. Consult an attorney for current case status in your jurisdiction.</p></div>
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

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="zantac" count={5} /></div></div>
      <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="medical" /></section>
</section>

            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ZANTAC_2026.citations.join(" • ")}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
