"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Activity } from "lucide-react";
import { SITE, ASBESTOS_2026, calculateAsbestosSettlement, formatCurrency, AsbestosResult } from "@/lib/calculators/asbestos";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function AsbestosCalculatorPage() {
    const [diseaseIndex, setDiseaseIndex] = useState(0);
    const [siteIndex, setSiteIndex] = useState(0);
    const [durationIndex, setDurationIndex] = useState(1);
    const [medicalBills, setMedicalBills] = useState("200,000");
    const [result, setResult] = useState<AsbestosResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateAsbestosSettlement(diseaseIndex, siteIndex, durationIndex, parseVal(medicalBills))); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Asbestos Exposure Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate mesothelioma & asbestos compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Disease Diagnosed</label><select value={diseaseIndex} onChange={(e) => setDiseaseIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{ASBESTOS_2026.diseases.map((d, i) => (<option key={i} value={i}>{d.disease}</option>))}</select><p className="text-xs text-slate-500 mt-1">{ASBESTOS_2026.diseases[diseaseIndex].description} | Latency: {ASBESTOS_2026.diseases[diseaseIndex].latency}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Site</label><select value={siteIndex} onChange={(e) => setSiteIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{ASBESTOS_2026.exposureSites.map((s, i) => (<option key={i} value={i}>{s.site} ({s.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{ASBESTOS_2026.exposureSites[siteIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Exposure Duration</label><select value={durationIndex} onChange={(e) => setDurationIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{ASBESTOS_2026.exposureDuration.map((d, i) => (<option key={i} value={i}>{d.duration}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.disease})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Exposure Site Factor</span><span className="font-medium text-purple-400">{formatCurrency(result.siteBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Duration Factor ({result.duration})</span><span className="font-medium text-purple-400">{formatCurrency(result.durationBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-purple-500" />Asbestos FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the average mesothelioma settlement?</h3><p className="text-slate-400">The average mesothelioma settlement is $1-2.4 million, with verdicts sometimes exceeding $10 million. Amount depends on disease severity, exposure history, and liable companies.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What are asbestos trust funds?</h3><p className="text-slate-400">Bankrupt asbestos companies set up trust funds totaling over $30 billion to compensate victims. You may file claims with multiple trusts if exposed to different companies' products.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do I have to file an asbestos lawsuit?</h3><p className="text-slate-400">Statutes of limitations vary by state (1-6 years) and typically begin when you're diagnosed. Many states have special provisions for latent diseases like mesothelioma.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can family members file claims?</h3><p className="text-slate-400">Yes. Secondary exposure claims (family members exposed to fibers on workers' clothing) are valid. Wrongful death claims can also be filed by surviving family members.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What evidence do I need?</h3><p className="text-slate-400">Medical records confirming diagnosis, work history showing exposure, and product identification. Experienced attorneys can help locate evidence and company records.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What occupations have highest exposure risk?</h3><p className="text-slate-400">Shipyard workers, construction workers, insulators, electricians, plumbers, mechanics, military veterans (especially Navy), and refinery workers have the highest risk.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Is there a link between asbestos and lung cancer?</h3><p className="text-slate-400">Yes. Asbestos exposure increases lung cancer risk 5x. Combined with smoking, risk increases 50-90x. Lung cancer victims can file claims even without mesothelioma.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the latency period for mesothelioma?</h3><p className="text-slate-400">Mesothelioma typically develops 20-50 years after initial exposure, making it difficult to connect current illness to past workplace exposure.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Can I file while receiving workers' comp?</h3><p className="text-slate-400">Yes. Workers' compensation and third-party lawsuits are separate. You can pursue both simultaneously for maximum compensation.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do asbestos cases take?</h3><p className="text-slate-400">Settlements typically take 1-2 years. Cases are often expedited for mesothelioma patients due to short life expectancy. Trust fund claims may be faster.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{ASBESTOS_2026.citation}</p>
            </main>
        </>
    );
}
