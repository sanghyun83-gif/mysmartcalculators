"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, GYM_TYPES, MEMBER_TIERS, FAQS } from "@/lib/calculators/gym-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function GymInsuranceCalculatorPage() {
    const [gymType, setGymType] = useState("");
    const [members, setMembers] = useState("");
    const [hasTrainers, setHasTrainers] = useState(true);
    const [includeProfessional, setIncludeProfessional] = useState(true);
    const [hasYouth, setHasYouth] = useState(false);
    const [result, setResult] = useState<null | { annual: number; monthly: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const gym = GYM_TYPES.find(g => g.id === gymType);
        const memberTier = MEMBER_TIERS.find(m => m.id === members);

        if (!gym || !memberTier) return;

        let glPremium = 2500 * gym.factor * memberTier.factor;
        let professionalPremium = includeProfessional ? 1200 * gym.factor * memberTier.factor : 0;
        let propertyPremium = 2000 * memberTier.factor;
        let abusePremium = hasYouth ? 500 : 0;

        const annual = Math.round(glPremium + professionalPremium + propertyPremium + abusePremium);
        const monthly = Math.round(annual / 12);

        const breakdown = [
            { label: "General Liability", value: gym.name, cost: `$${Math.round(glPremium).toLocaleString()}` },
            ...(includeProfessional ? [{ label: "Professional Liability", value: "Training coverage", cost: `$${Math.round(professionalPremium).toLocaleString()}` }] : []),
            { label: "Business Property", value: "Equipment", cost: `$${Math.round(propertyPremium).toLocaleString()}` },
            ...(hasYouth ? [{ label: "Abuse/Molestation", value: "Youth programs", cost: `$${abusePremium.toLocaleString()}` }] : []),
        ];

        setResult({ annual, monthly, breakdown });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Dumbbell className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Gym Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your fitness center insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Gym Type</label>
                                <select value={gymType} onChange={(e) => setGymType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {GYM_TYPES.map((g) => (<option key={g.id} value={g.id}>{g.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Member Count</label>
                                <select value={members} onChange={(e) => setMembers(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select members...</option>
                                    {MEMBER_TIERS.map((m) => (<option key={m.id} value={m.id}>{m.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Programs</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={hasYouth} onChange={(e) => setHasYouth(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Youth/Kids Programs (+$500)</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Coverage Options</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeProfessional} onChange={(e) => setIncludeProfessional(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Professional Liability (Training)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!gymType || !members} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
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
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 fitness and recreation insurance data</p>
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
