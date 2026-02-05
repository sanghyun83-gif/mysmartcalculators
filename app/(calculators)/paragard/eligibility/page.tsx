"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { SITE, PARAGARD_2026 } from "@/lib/calculators/paragard";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function EligibilityPage() {
    const [answers, setAnswers] = useState<boolean[]>(new Array(PARAGARD_2026.eligibility.length).fill(false));
    const [showResult, setShowResult] = useState(false);

    const toggleAnswer = (index: number) => { const newAnswers = [...answers]; newAnswers[index] = !newAnswers[index]; setAnswers(newAnswers); };
    const criticalMet = PARAGARD_2026.eligibility.filter((e, i) => e.critical && answers[i]).length;
    const criticalTotal = PARAGARD_2026.eligibility.filter(e => e.critical).length;
    const isEligible = criticalMet >= criticalTotal - 1;

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/paragard" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-lg font-bold text-white">Pre-qualification Screening</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Do You Qualify for a Lawsuit?</h1><p className="text-slate-400">Answer these questions to check your eligibility</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-6">Paragard Lawsuit Eligibility Checklist</h2>
                    <div className="space-y-4">
                        {PARAGARD_2026.eligibility.map((item, i) => (
                            <button key={i} onClick={() => toggleAnswer(i)} className={`w-full p-4 rounded-lg border text-left transition-all flex items-center gap-4 ${answers[i] ? 'bg-green-900/30 border-green-500/50' : 'bg-slate-700 border-slate-600 hover:border-slate-500'}`}>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${answers[i] ? 'bg-green-500' : 'bg-slate-600'}`}>
                                    {answers[i] ? <CheckCircle className="w-4 h-4 text-white" /> : <div className="w-3 h-3 rounded-full bg-slate-400" />}
                                </div>
                                <div className="flex-1">
                                    <p className={`font-medium ${answers[i] ? 'text-green-300' : 'text-white'}`}>{item.requirement}</p>
                                    {item.critical && <span className="text-xs text-red-400">* Critical requirement</span>}
                                </div>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => setShowResult(true)} className="w-full mt-6 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700">Check My Eligibility</button>
                </div>

                {showResult && (
                    <div className={`rounded-xl border p-6 mb-6 ${isEligible ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'}`}>
                        <div className="flex items-center gap-4 mb-4">
                            {isEligible ? <CheckCircle className="w-10 h-10 text-green-400" /> : <XCircle className="w-10 h-10 text-red-400" />}
                            <div><h3 className="text-xl font-bold text-white">{isEligible ? 'You May Qualify!' : 'May Not Qualify'}</h3><p className="text-sm text-slate-300">{criticalMet}/{criticalTotal} critical requirements met</p></div>
                        </div>
                        {isEligible ? (
                            <div><p className="text-green-200 mb-4">Based on your answers, you may be eligible to file a Paragard lawsuit. The first bellwether trial is {PARAGARD_2026.bellwetherTrial.firstTrialDate}.</p>
                                <Link href="/paragard/calculator" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                        ) : (
                            <div><p className="text-red-200">Based on your answers, you may not meet all the critical requirements. However, every case is different - consult with an attorney for a free evaluation.</p></div>
                        )}
                    </div>
                )}

                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-3"><AlertTriangle className="w-6 h-6 text-yellow-400 mt-1" /><div><h3 className="text-lg font-bold text-white mb-2">Important Deadline</h3><p className="text-yellow-200 text-sm">Statute of limitations varies by state. With the first bellwether trial starting {PARAGARD_2026.bellwetherTrial.firstTrialDate}, now is the time to act. Consult an attorney immediately.</p></div></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{PARAGARD_2026.citation}</p>
            </main>
        </>
    );
}
