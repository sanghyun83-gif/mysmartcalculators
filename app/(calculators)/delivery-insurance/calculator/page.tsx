"use client";

import { useState } from "react";
import Link from "next/link";
import { Package, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, PLATFORMS, DRIVING_FREQUENCY, INSURANCE_OPTIONS, FAQS } from "@/lib/calculators/delivery-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function DeliveryInsuranceCalculatorPage() {
    const [platform, setPlatform] = useState("");
    const [frequency, setFrequency] = useState("");
    const [insuranceType, setInsuranceType] = useState("");
    const [vehicleAge, setVehicleAge] = useState("3-5");
    const [currentPremium, setCurrentPremium] = useState(120);
    const [result, setResult] = useState<null | { monthly: number; annual: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const platformData = PLATFORMS.find(p => p.id === platform);
        const frequencyData = DRIVING_FREQUENCY.find(f => f.id === frequency);
        const insurance = INSURANCE_OPTIONS.find(i => i.id === insuranceType);

        if (!platformData || !frequencyData || !insurance) return;

        let additionalCost = insurance.avgCost;
        additionalCost *= platformData.factor;
        additionalCost *= frequencyData.factor;

        const monthly = Math.round(additionalCost);
        const annual = monthly * 12;

        const breakdown = [
            { label: "Platform", value: platformData.name, cost: `×${platformData.factor}` },
            { label: "Driving Frequency", value: frequencyData.name, cost: `×${frequencyData.factor}` },
            { label: "Insurance Type", value: insurance.name, cost: `$${insurance.avgCost}/mo base` },
            { label: "Current Premium", value: `$${currentPremium}/mo`, cost: "Existing" },
        ];

        setResult({ monthly, annual, breakdown });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Package className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Delivery Driver Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your DoorDash/UberEats insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Delivery Platform</label>
                                <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select platform...</option>
                                    {PLATFORMS.map((p) => (<option key={p.id} value={p.id}>{p.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Driving Frequency</label>
                                <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select frequency...</option>
                                    {DRIVING_FREQUENCY.map((f) => (<option key={f.id} value={f.id}>{f.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Insurance Type</label>
                                <select value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {INSURANCE_OPTIONS.map((i) => (<option key={i.id} value={i.id}>{i.name} (~${i.avgCost}/mo)</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Vehicle Age</label>
                                <select value={vehicleAge} onChange={(e) => setVehicleAge(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="0-2">0-2 years (New)</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="6-8">6-8 years</option>
                                    <option value="9+">9+ years</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-300 mb-2">Current Personal Premium ($/month)</label>
                                <input type="number" min="50" max="400" value={currentPremium} onChange={(e) => setCurrentPremium(parseInt(e.target.value) || 120)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" />
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!platform || !frequency || !insuranceType} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Additional Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.monthly}/mo</div>
                                    <div className="text-sm text-slate-400">Additional Monthly Cost</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.annual}/yr</div>
                                    <div className="text-sm text-slate-400">Additional Annual Cost</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Cost Breakdown</h3>
                            <div className="space-y-2">
                                {result.breakdown.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-slate-400">{item.label}: {item.value}</span>
                                        <span className="text-blue-300">{item.cost}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 NAIC industry averages</p>
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
