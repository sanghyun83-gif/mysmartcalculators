"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, HEARING_CONDITIONS, SERVICE_PERIODS, FAQS, calculate3MEarplugSettlement, formatCurrency, EARPLUG_2026 } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Ear, ChevronDown, ChevronUp, ArrowLeft, CheckCircle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [hearingCondition, setHearingCondition] = useState("moderate-loss");
    const [servicePeriod, setServicePeriod] = useState("iraq-afghanistan");
    const [yearsAffected, setYearsAffected] = useState("10");
    const [vaDisabilityRating, setVaDisabilityRating] = useState("30");
    const [hasDocumentation, setHasDocumentation] = useState(true);
    const [hadSurgery, setHadSurgery] = useState(false);
    const [usesHearingAids, setUsesHearingAids] = useState(true);
    const [result, setResult] = useState<ReturnType<typeof calculate3MEarplugSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculate3MEarplugSettlement(hearingCondition, servicePeriod, parseInt(yearsAffected) || 5, parseInt(vaDisabilityRating) || 0, hasDocumentation, hadSurgery, usesHearingAids));
    };

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/3m-earplug" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Advanced Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">3M Earplug Settlement Calculator</h1>
                    <p className="text-slate-400">7 input fields for comprehensive payout estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Hearing Condition</label><select value={hearingCondition} onChange={(e) => setHearingCondition(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{HEARING_CONDITIONS.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Service Period</label><select value={servicePeriod} onChange={(e) => setServicePeriod(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{SERVICE_PERIODS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years Affected</label><input type="number" value={yearsAffected} onChange={(e) => setYearsAffected(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">VA Disability Rating (%)</label><input type="number" value={vaDisabilityRating} onChange={(e) => setVaDisabilityRating(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" max={100} /></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={hasDocumentation} onChange={() => setHasDocumentation(!hasDocumentation)} className="w-4 h-4 text-purple-500" /><span className="text-slate-300 text-sm">Has CAEv2 Documentation</span></label>
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={hadSurgery} onChange={() => setHadSurgery(!hadSurgery)} className="w-4 h-4 text-purple-500" /><span className="text-slate-300 text-sm">Had Ear Surgery</span></label>
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={usesHearingAids} onChange={() => setUsesHearingAids(!usesHearingAids)} className="w-4 h-4 text-purple-500" /><span className="text-slate-300 text-sm">Uses Hearing Aids</span></label>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Estimate Settlement</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Settlement</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-purple-400">{formatCurrency(result.estimateLow)} - {formatCurrency(result.estimateHigh)}</p><p className="text-slate-400 mt-2">{result.condition} • {result.servicePeriod}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6 text-center">
                            <p className="text-slate-400">Estimated Tier Classification</p>
                            <p className="text-2xl font-bold text-purple-400 mt-2">{result.tier}</p>
                        </div>
                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-emerald-200">Settlement processing is underway. Contact your attorney or check your claim status for payment timing.</p></div>
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

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="legal" /></section>
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
                                name: "How accurate is the 3m earplug calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this 3m earplug calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the 3m earplug data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these 3m earplug results for decisions?",
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
