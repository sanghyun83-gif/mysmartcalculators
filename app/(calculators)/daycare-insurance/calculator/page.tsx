"use client";

import { useState } from "react";
import Link from "next/link";
import { Baby, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, DAYCARE_TYPES, CHILD_TIERS, FAQS } from "@/lib/calculators/daycare-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function DaycareInsuranceCalculatorPage() {
    const [daycareType, setDaycareType] = useState("");
    const [children, setChildren] = useState("");
    const [includeAbuse, setIncludeAbuse] = useState(true);
    const [includeProfessional, setIncludeProfessional] = useState(true);
    const [includeProperty, setIncludeProperty] = useState(true);
    const [result, setResult] = useState<null | { annual: number; monthly: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const daycare = DAYCARE_TYPES.find(d => d.id === daycareType);
        const childTier = CHILD_TIERS.find(c => c.id === children);

        if (!daycare || !childTier) return;

        let glPremium = 2000 * daycare.factor * childTier.factor;
        let professionalPremium = includeProfessional ? 800 * daycare.factor * childTier.factor : 0;
        let abusePremium = includeAbuse ? 1500 * childTier.factor : 0;
        let propertyPremium = includeProperty ? 1200 : 0;

        const annual = Math.round(glPremium + professionalPremium + abusePremium + propertyPremium);
        const monthly = Math.round(annual / 12);

        const breakdown = [
            { label: "General Liability", value: daycare.name, cost: `$${Math.round(glPremium).toLocaleString()}` },
            ...(includeProfessional ? [{ label: "Professional Liability", value: "Care coverage", cost: `$${Math.round(professionalPremium).toLocaleString()}` }] : []),
            ...(includeAbuse ? [{ label: "Abuse/Molestation", value: "Required", cost: `$${Math.round(abusePremium).toLocaleString()}` }] : []),
            ...(includeProperty ? [{ label: "Business Property", value: "Equipment", cost: `$${propertyPremium.toLocaleString()}` }] : []),
        ];

        setResult({ annual, monthly, breakdown });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Baby className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Daycare Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your child care center insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Daycare Type</label>
                                <select value={daycareType} onChange={(e) => setDaycareType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {DAYCARE_TYPES.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Children Enrolled</label>
                                <select value={children} onChange={(e) => setChildren(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select count...</option>
                                    {CHILD_TIERS.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-300 mb-2">Coverage Options</label>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeAbuse} onChange={(e) => setIncludeAbuse(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Abuse/Molestation (Required)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeProfessional} onChange={(e) => setIncludeProfessional(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Professional Liability</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeProperty} onChange={(e) => setIncludeProperty(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Business Property</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!daycareType || !children} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Annual Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.annual.toLocaleString()}/yr</div>
                                    <div className="text-sm text-slate-400">Total Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.monthly.toLocaleString()}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Payment</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Coverage Breakdown</h3>
                            <div className="space-y-2">
                                {result.breakdown.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-slate-400">{item.label}: {item.value}</span>
                                        <span className="text-blue-300">{item.cost}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 child care insurance data</p>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl">
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <span className="font-medium text-white">{faq.question}</span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-slate-300">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}
