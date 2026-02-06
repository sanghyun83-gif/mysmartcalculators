"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, PLATFORMS, DRIVING_FREQUENCY, VEHICLE_AGE, INSURANCE_OPTIONS, FAQS } from "@/lib/calculators/rideshare-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function RideshareInsuranceCalculatorPage() {
    const [platform, setPlatform] = useState("");
    const [frequency, setFrequency] = useState("");
    const [vehicleAge, setVehicleAge] = useState("");
    const [insuranceType, setInsuranceType] = useState("");
    const [currentPremium, setCurrentPremium] = useState(150);
    const [hasEndorsement, setHasEndorsement] = useState(false);
    const [state, setState] = useState("California");
    const [result, setResult] = useState<null | { monthly: number; annual: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const platformData = PLATFORMS.find(p => p.id === platform);
        const frequencyData = DRIVING_FREQUENCY.find(f => f.id === frequency);
        const ageData = VEHICLE_AGE.find(a => a.years === vehicleAge);
        const insurance = INSURANCE_OPTIONS.find(i => i.id === insuranceType);

        if (!platformData || !frequencyData || !ageData || !insurance) return;

        // Base additional cost
        let additionalCost = insurance.avgCost;

        // Apply factors
        additionalCost *= platformData.factor;
        additionalCost *= frequencyData.factor;
        additionalCost *= ageData.factor;

        const monthly = Math.round(additionalCost);
        const annual = monthly * 12;

        const breakdown = [
            { label: "Platform", value: platformData.name, cost: `×${platformData.factor}` },
            { label: "Driving Frequency", value: frequencyData.name, cost: `×${frequencyData.factor}` },
            { label: "Vehicle Age", value: `${vehicleAge} years`, cost: `×${ageData.factor}` },
            { label: "Insurance Type", value: insurance.name, cost: `$${insurance.avgCost}/mo base` },
            { label: "Current Personal Premium", value: `$${currentPremium}/mo`, cost: "Existing" },
        ];

        setResult({ monthly, annual, breakdown });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rideshare-insurance" className="text-slate-400 hover:text-white text-sm"> Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Car className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Rideshare Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your Uber/Lyft insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Rideshare Platform</label>
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
                                <label className="block text-sm font-medium text-slate-300 mb-2">Vehicle Age</label>
                                <select value={vehicleAge} onChange={(e) => setVehicleAge(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select age...</option>
                                    {VEHICLE_AGE.map((a) => (<option key={a.years} value={a.years}>{a.years} years - {a.description}</option>))}
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
                                <label className="block text-sm font-medium text-slate-300 mb-2">Current Personal Premium ($/month)</label>
                                <input type="number" min="50" max="500" value={currentPremium} onChange={(e) => setCurrentPremium(parseInt(e.target.value) || 150)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">State</label>
                                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="California">California</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Florida">Florida</option>
                                    <option value="New York">New York</option>
                                    <option value="Illinois">Illinois</option>
                                </select>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!platform || !frequency || !vehicleAge || !insuranceType} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
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

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Data from NAIC, III.</p>
                </div>
            </footer>
        
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
                                name: "How accurate is the rideshare insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this rideshare insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the rideshare insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these rideshare insurance results for decisions?",
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
