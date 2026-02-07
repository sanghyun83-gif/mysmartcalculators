"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, POLLUTION_TYPES, DAMAGE_TYPES, FAQS, calculateEnvironmentalSettlement, formatCurrency, ENVIRONMENTAL_2026 } from "@/lib/calculators/environmental";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, TreePine, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [pollutionType, setPollutionType] = useState("water-pollution");
    const [damageType, setDamageType] = useState("property");
    const [propertyValue, setPropertyValue] = useState("400000");
    const [remediationCost, setRemediationCost] = useState("75000");
    const [businessLoss, setBusinessLoss] = useState("50000");
    const [yearsAffected, setYearsAffected] = useState("5");
    const [numberOfPlaintiffs, setNumberOfPlaintiffs] = useState("1");
    const [result, setResult] = useState<ReturnType<typeof calculateEnvironmentalSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateEnvironmentalSettlement(pollutionType, damageType, parseInt(propertyValue.replace(/\D/g, '')) || 0, parseInt(remediationCost.replace(/\D/g, '')) || 0, parseInt(businessLoss.replace(/\D/g, '')) || 0, parseInt(yearsAffected) || 3, parseInt(numberOfPlaintiffs) || 1));
    };

    return (
        <>




            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Advanced Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Environmental Lawsuit Calculator</h1>
                    <p className="text-slate-400">7 input fields for comprehensive environmental damage estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Pollution Type</label><select value={pollutionType} onChange={(e) => setPollutionType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{POLLUTION_TYPES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Damage Type</label><select value={damageType} onChange={(e) => setDamageType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{DAMAGE_TYPES.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Property Value ($)</label><input type="text" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Remediation Cost ($)</label><input type="text" value={remediationCost} onChange={(e) => setRemediationCost(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Business Loss ($)</label><input type="text" value={businessLoss} onChange={(e) => setBusinessLoss(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years Affected</label><input type="number" value={yearsAffected} onChange={(e) => setYearsAffected(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div className="md:col-span-2"><label className="block text-sm font-medium text-slate-300 mb-2"># of Plaintiffs (Class Action)</label><input type="number" value={numberOfPlaintiffs} onChange={(e) => setNumberOfPlaintiffs(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-amber-900/30 to-emerald-900/20 border border-amber-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Settlement</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-amber-400">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p><p className="text-slate-400 mt-2">{result.pollutionType} • {result.damageType}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Damages Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Property Value Loss</span><span className="text-white">{formatCurrency(result.propertyDamage)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Remediation Cost</span><span className="text-white">{formatCurrency(result.remediationCost)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Business Loss</span><span className="text-white">{formatCurrency(result.businessLoss)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Non-Economic Damages</span><span className="text-white">{formatCurrency(result.nonEconomicLow)} - {formatCurrency(result.nonEconomicHigh)}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-amber-200">Environmental cases depend on evidence of contamination and defendant liability. Consult an environmental attorney for accurate evaluation.</p></div>
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

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="environmental" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="legal" /></section>
            </section>


        </>
    );
}
