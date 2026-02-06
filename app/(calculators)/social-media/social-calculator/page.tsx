"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Smartphone, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, SOCIAL_2026, calculateSocialSettlement, formatCurrency, SocialResult } from "@/lib/calculators/social-media";

export default function SocialCalculatorPage() {
    const [platformIndex, setPlatformIndex] = useState(0);
    const [symptomIndex, setSymptomIndex] = useState(3);
    const [ageIndex, setAgeIndex] = useState(1);
    const [usageIndex, setUsageIndex] = useState(2);
    const [result, setResult] = useState<SocialResult | null>(null);

    const handleCalculate = () => { setResult(calculateSocialSettlement(platformIndex, symptomIndex, ageIndex, usageIndex)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-media" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Social Media Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6 text-center">
                    <p className="text-red-300 font-semibold">?�️ {SOCIAL_2026.statistics.totalLawsuits.toLocaleString()}+ lawsuits filed | {SOCIAL_2026.statistics.stateAGs} State AGs</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Social Media Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your youth mental health compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Platform Used</label><select value={platformIndex} onChange={(e) => setPlatformIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{SOCIAL_2026.platforms.map((p, i) => (<option key={i} value={i}>{p.name}</option>))}</select><p className="text-xs text-slate-500 mt-1">{SOCIAL_2026.platforms[platformIndex].features}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Mental Health Condition</label><select value={symptomIndex} onChange={(e) => setSymptomIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{SOCIAL_2026.symptoms.map((s, i) => (<option key={i} value={i}>{s.symptom} (Tier {s.tier})</option>))}</select><p className="text-xs text-slate-500 mt-1">{SOCIAL_2026.symptoms[symptomIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Age When Using</label><select value={ageIndex} onChange={(e) => setAgeIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{SOCIAL_2026.ageGroups.map((a, i) => (<option key={i} value={i}>{a.group}</option>))}</select><p className="text-xs text-slate-500 mt-1">{SOCIAL_2026.ageGroups[ageIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Usage Duration</label><select value={usageIndex} onChange={(e) => setUsageIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{SOCIAL_2026.usageDuration.map((u, i) => (<option key={i} value={i}>{u.duration}</option>))}</select></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-amber-300">{result.symptom} - {result.platform}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Age Factor ({result.ageGroup})</span><span className="font-medium text-amber-400">{formatCurrency(result.ageBonus)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Usage Duration ({result.usageDuration})</span><span className="font-medium text-amber-400">{formatCurrency(result.usageBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Platform Factor</span><span className="font-medium text-amber-400">{formatCurrency(result.platformBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Social Media FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Who can file a social media addiction lawsuit?</h3><p className="text-slate-400">Parents/guardians can file on behalf of minors who developed mental health issues (depression, anxiety, eating disorders, self-harm) from using Instagram, TikTok, Snapchat, or other platforms.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is MDL 3047?</h3><p className="text-slate-400">MDL 3047 is the consolidated social media addiction litigation in the Northern District of California, combining thousands of cases against Meta, TikTok, Snap, and other platforms.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{SOCIAL_2026.citation}</p>
            </main>
        </>
    );
}
