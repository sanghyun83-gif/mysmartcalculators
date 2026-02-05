"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, MANUFACTURERS, BREAST_IMPLANT_2026 } from "@/lib/calculators/breast-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function EligibilityPage() {
    const [hasImplants, setHasImplants] = useState<boolean | null>(null);
    const [implantType, setImplantType] = useState<string>("");
    const [hasDiagnosis, setHasDiagnosis] = useState<boolean | null>(null);
    const [hasSymptoms, setHasSymptoms] = useState<boolean | null>(null);
    const [step, setStep] = useState(1);

    const isEligible = hasImplants && (implantType === "textured" || hasDiagnosis || hasSymptoms);

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/breast-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-2xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><CheckCircle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Pre-qualification Screening</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Do You Qualify?</h1>
                    <p className="text-slate-400">Answer a few questions to check eligibility.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                    {step === 1 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Do you have or had breast implants?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => { setHasImplants(true); setStep(2); }} className={`p-4 rounded-lg border ${hasImplants === true ? 'border-purple-500 bg-purple-500/20' : 'border-slate-600 hover:border-purple-500/50'}`}><span className="text-white font-medium">Yes</span></button>
                                <button onClick={() => { setHasImplants(false); setStep(5); }} className={`p-4 rounded-lg border ${hasImplants === false ? 'border-purple-500 bg-purple-500/20' : 'border-slate-600 hover:border-purple-500/50'}`}><span className="text-white font-medium">No</span></button>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">What type of implants?</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {["textured", "smooth", "unknown"].map((type) => (
                                    <button key={type} onClick={() => { setImplantType(type); setStep(3); }} className={`p-4 rounded-lg border text-left ${implantType === type ? 'border-purple-500 bg-purple-500/20' : 'border-slate-600 hover:border-purple-500/50'}`}>
                                        <span className="text-white font-medium capitalize">{type === "textured" ? "Textured (Higher Risk)" : type === "smooth" ? "Smooth" : "I don't know"}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Have you been diagnosed with BIA-ALCL or BII?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => { setHasDiagnosis(true); setStep(5); }} className="p-4 rounded-lg border border-slate-600 hover:border-purple-500/50"><span className="text-white font-medium">Yes</span></button>
                                <button onClick={() => { setHasDiagnosis(false); setStep(4); }} className="p-4 rounded-lg border border-slate-600 hover:border-purple-500/50"><span className="text-white font-medium">No</span></button>
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Do you have symptoms? (fatigue, pain, brain fog, swelling)</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => { setHasSymptoms(true); setStep(5); }} className="p-4 rounded-lg border border-slate-600 hover:border-purple-500/50"><span className="text-white font-medium">Yes</span></button>
                                <button onClick={() => { setHasSymptoms(false); setStep(5); }} className="p-4 rounded-lg border border-slate-600 hover:border-purple-500/50"><span className="text-white font-medium">No</span></button>
                            </div>
                        </div>
                    )}
                    {step === 5 && (
                        <div className="text-center space-y-4">
                            {isEligible ? (
                                <>
                                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto"><CheckCircle className="w-8 h-8 text-emerald-400" /></div>
                                    <h3 className="text-xl font-bold text-emerald-400">You May Qualify</h3>
                                    <p className="text-slate-400">Based on your answers, you may be eligible for a breast implant lawsuit. Consult an attorney for a full evaluation.</p>
                                    <Link href="/breast-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-4 h-4" /></Link>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-amber-400">May Not Qualify</h3>
                                    <p className="text-slate-400">Based on your answers, you may not have a strong case. However, only an attorney can provide a definitive evaluation.</p>
                                    <button onClick={() => { setStep(1); setHasImplants(null); setImplantType(""); setHasDiagnosis(null); setHasSymptoms(null); }} className="text-purple-400 underline">Start Over</button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="breast-implant" count={5} /></div></div></section>
        </>
    );
}
