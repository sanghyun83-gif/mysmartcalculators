"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, VEHICLE_TYPES, BUSINESS_USES, COVERAGE_LIMITS, FAQS, calculateCommercialAutoPremium, formatCurrency, CA_2026 } from "@/lib/calculators/commercial-auto";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Truck, ChevronDown, ChevronUp, ArrowLeft, TrendingUp } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [vehicleType, setVehicleType] = useState("sedan");
    const [businessUse, setBusinessUse] = useState("service");
    const [coverageLimit, setCoverageLimit] = useState("250-500");
    const [fleetSize, setFleetSize] = useState("3");
    const [annualMileage, setAnnualMileage] = useState("15000");
    const [cleanRecords, setCleanRecords] = useState(true);
    const [hasTelematics, setHasTelematics] = useState(false);
    const [result, setResult] = useState<ReturnType<typeof calculateCommercialAutoPremium> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateCommercialAutoPremium(vehicleType, businessUse, coverageLimit, parseInt(fleetSize) || 1, parseInt(annualMileage) || 0, cleanRecords, hasTelematics));
    };

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/commercial-auto" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Premium Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Commercial Auto Premium Calculator</h1>
                    <p className="text-slate-400">7 input fields for fleet and vehicle pricing.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Vehicle Type</label><select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{VEHICLE_TYPES.map((v) => <option key={v.id} value={v.id}>{v.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Business Use</label><select value={businessUse} onChange={(e) => setBusinessUse(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{BUSINESS_USES.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Coverage Limit</label><select value={coverageLimit} onChange={(e) => setCoverageLimit(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{COVERAGE_LIMITS.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Fleet Size (# of vehicles)</label><input type="text" value={fleetSize} onChange={(e) => setFleetSize(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div className="md:col-span-2"><label className="block text-sm font-medium text-slate-300 mb-2">Annual Mileage (per vehicle)</label><input type="text" value={annualMileage} onChange={(e) => setAnnualMileage(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <label className="flex items-center gap-3 p-3 bg-emerald-700/20 border border-emerald-500/30 rounded-lg cursor-pointer"><input type="checkbox" checked={cleanRecords} onChange={() => setCleanRecords(!cleanRecords)} className="w-4 h-4 text-emerald-500" /><span className="text-emerald-300 text-sm">Clean driving records (10% discount)</span></label>
                        <label className="flex items-center gap-3 p-3 bg-emerald-700/20 border border-emerald-500/30 rounded-lg cursor-pointer"><input type="checkbox" checked={hasTelematics} onChange={() => setHasTelematics(!hasTelematics)} className="w-4 h-4 text-emerald-500" /><span className="text-emerald-300 text-sm">Telematics installed (8% discount)</span></label>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Premium</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Premium</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-blue-400">{formatCurrency(result.perVehiclePremium)}/vehicle/year</p><p className="text-2xl text-emerald-400 mt-2">{formatCurrency(result.monthlyPerVehicle)}/month per vehicle</p><p className="text-slate-400 mt-2">{result.vehicleType} • {result.coverageLimit}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Fleet Total</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Per Vehicle</span><span className="text-white">{formatCurrency(result.perVehiclePremium)}/year</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Fleet Total</span><span className="text-xl font-bold text-blue-400">{formatCurrency(result.fleetTotal)}/year</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-start gap-3"><TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-blue-200">Fleets of 5+ vehicles get 8% discount. 10+ vehicles get 15% off.</p></div>
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

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="commercial-auto" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="insurance" /></section>
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
                                name: "How accurate is the commercial auto calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this commercial auto calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the commercial auto data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these commercial auto results for decisions?",
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
