"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, BUSINESS_TYPES, DATA_SENSITIVITY, COVERAGE_LIMITS, FAQS, calculateCyberPremium, formatCurrency, CYBER_2026 } from "@/lib/calculators/cyber-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Shield, ChevronDown, ChevronUp, ArrowLeft, TrendingUp } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [businessType, setBusinessType] = useState("professional");
    const [dataSensitivity, setDataSensitivity] = useState("pii");
    const [coverageLimit, setCoverageLimit] = useState("1m");
    const [annualRevenue, setAnnualRevenue] = useState("2000000");
    const [employeeCount, setEmployeeCount] = useState("25");
    const [hasMFA, setHasMFA] = useState(true);
    const [priorBreach, setPriorBreach] = useState(false);
    const [result, setResult] = useState<ReturnType<typeof calculateCyberPremium> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateCyberPremium(businessType, dataSensitivity, coverageLimit, parseInt(annualRevenue.replace(/\D/g, '')) || 0, parseInt(employeeCount) || 0, hasMFA, priorBreach));
    };

    return (
        <>




            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Premium Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Cyber Insurance Premium Calculator</h1>
                    <p className="text-slate-400">7 input fields for advanced premium estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Industry Type</label><select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{BUSINESS_TYPES.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Data Sensitivity</label><select value={dataSensitivity} onChange={(e) => setDataSensitivity(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{DATA_SENSITIVITY.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Coverage Limit</label><select value={coverageLimit} onChange={(e) => setCoverageLimit(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{COVERAGE_LIMITS.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Revenue ($)</label><input type="text" value={annualRevenue} onChange={(e) => setAnnualRevenue(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div className="md:col-span-2"><label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees</label><input type="text" value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <label className="flex items-center gap-3 p-3 bg-emerald-700/20 border border-emerald-500/30 rounded-lg cursor-pointer"><input type="checkbox" checked={hasMFA} onChange={() => setHasMFA(!hasMFA)} className="w-4 h-4 text-emerald-500" /><span className="text-emerald-300 text-sm">MFA enabled (15% discount)</span></label>
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={priorBreach} onChange={() => setPriorBreach(!priorBreach)} className="w-4 h-4 text-blue-500" /><span className="text-slate-300 text-sm">Prior breach/claim</span></label>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Premium</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Premium</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-blue-400">{formatCurrency(result.annualPremium)}/year</p><p className="text-2xl text-emerald-400 mt-2">{formatCurrency(result.monthlyPremium)}/month</p><p className="text-slate-400 mt-2">{result.businessType} • {result.coverageLimit}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Premium Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Annual Premium</span><span className="text-white">{formatCurrency(result.annualPremium)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Monthly Premium</span><span className="text-white">{formatCurrency(result.monthlyPremium)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Daily Cost</span><span className="text-white">${result.dailyCost}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start gap-3"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-emerald-200">Enable MFA, EDR, and maintain regular backups to reduce premiums by 10-25%.</p></div>
                    </div>
                )}
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left"><span className="text-white font-medium pr-4">{faq.question}</span>{openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>
                            {openFaq === i && <div className="px-4 pb-4"><p className="text-slate-400">{faq.answer}</p></div>}
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="cyber-insurance" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="insurance" /></section>
            </section>


        </>
    );
}
