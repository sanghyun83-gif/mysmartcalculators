"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, TRUCK_TYPES, REVENUE_TIERS, FAQS } from "@/lib/calculators/food-truck-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function FoodTruckInsuranceCalculatorPage() {
    const [truckType, setTruckType] = useState("");
    const [revenue, setRevenue] = useState("");
    const [hasDeepFryer, setHasDeepFryer] = useState(false);
    const [includeProperty, setIncludeProperty] = useState(true);
    const [includeSpoilage, setIncludeSpoilage] = useState(true);
    const [result, setResult] = useState<null | { annual: number; monthly: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const truck = TRUCK_TYPES.find(t => t.id === truckType);
        const revenueTier = REVENUE_TIERS.find(r => r.id === revenue);

        if (!truck || !revenueTier) return;

        const fryerFactor = hasDeepFryer ? 1.15 : 1.0;
        let autoPremium = 3500 * truck.factor * revenueTier.factor;
        let glPremium = 2500 * truck.factor * revenueTier.factor * fryerFactor;
        let propertyPremium = includeProperty ? 1200 : 0;
        let spoilagePremium = includeSpoilage ? 400 : 0;

        const annual = Math.round(autoPremium + glPremium + propertyPremium + spoilagePremium);
        const monthly = Math.round(annual / 12);

        const breakdown = [
            { label: "Commercial Auto", value: truck.name, cost: `$${Math.round(autoPremium).toLocaleString()}` },
            { label: "General Liability", value: hasDeepFryer ? "With deep fryer" : "Standard", cost: `$${Math.round(glPremium).toLocaleString()}` },
            ...(includeProperty ? [{ label: "Business Property", value: "Equipment", cost: `$${propertyPremium.toLocaleString()}` }] : []),
            ...(includeSpoilage ? [{ label: "Food Spoilage", value: "Refrigeration", cost: `$${spoilagePremium.toLocaleString()}` }] : []),
        ];

        setResult({ annual, monthly, breakdown });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Truck className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Food Truck Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your mobile food vendor insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Truck Type</label>
                                <select value={truckType} onChange={(e) => setTruckType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {TRUCK_TYPES.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Revenue</label>
                                <select value={revenue} onChange={(e) => setRevenue(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select revenue...</option>
                                    {REVENUE_TIERS.map((r) => (<option key={r.id} value={r.id}>{r.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Cooking Equipment</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={hasDeepFryer} onChange={(e) => setHasDeepFryer(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Deep fryer (+15% GL)</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Coverage Options</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeProperty} onChange={(e) => setIncludeProperty(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Business Property ($1,200/yr)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeSpoilage} onChange={(e) => setIncludeSpoilage(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Food Spoilage ($400/yr)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!truckType || !revenue} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
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
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 mobile food vendor insurance data</p>
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
                                name: "How accurate is the food truck insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this food truck insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the food truck insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these food truck insurance results for decisions?",
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
