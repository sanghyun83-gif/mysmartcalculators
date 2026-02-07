"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, OIL_RIG_2026, calculateOilRigSettlement, formatCurrency, OilRigResult } from "@/lib/calculators/oil-rig";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function OilRigCalculatorPage() {
    const [injuryIndex, setInjuryIndex] = useState(0);
    const [liabilityIndex, setLiabilityIndex] = useState(0);
    const [yearsExperience, setYearsExperience] = useState("5");
    const [medicalBills, setMedicalBills] = useState("150,000");
    const [annualWage, setAnnualWage] = useState("85,000");
    const [result, setResult] = useState<OilRigResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleWageChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setAnnualWage(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const years = parseInt(yearsExperience) || 5; const medicalNum = parseVal(medicalBills); const wageNum = parseVal(annualWage); setResult(calculateOilRigSettlement(injuryIndex, liabilityIndex, years, medicalNum, wageNum)); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/oil-rig" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Flame className="w-5 h-5 text-orange-500" /><span className="text-lg font-bold text-white">Oil Rig Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Oil Rig Injury Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your offshore drilling injury compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{OIL_RIG_2026.injuryTypes.map((inj, i) => (<option key={i} value={i}>{inj.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{OIL_RIG_2026.injuryTypes[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Maritime Law Type</label><select value={liabilityIndex} onChange={(e) => setLiabilityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{OIL_RIG_2026.liabilityTypes.map((lib, i) => (<option key={i} value={i}>{lib.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{OIL_RIG_2026.liabilityTypes[liabilityIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years of Experience</label><input type="text" value={yearsExperience} onChange={(e) => setYearsExperience(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills to Date</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Wage (Before Injury)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={annualWage} onChange={handleWageChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-orange-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-orange-400" /><span className="text-orange-300">{result.liabilityType} Claim</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Maritime Law Bonus</span><span className="font-medium text-orange-400">{formatCurrency(result.liabilityBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-orange-500" />Oil Rig Injury FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is the Jones Act?</h3><p className="text-slate-400">The Jones Act (46 U.S.C. §30104) allows seamen injured on vessels to sue their employers for negligence. It provides broader protections than workers&apos; comp.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Am I covered under Jones Act or OCSLA?</h3><p className="text-slate-400">If you work on a vessel (drilling ship, supply boat), you&apos;re likely covered by Jones Act. If you work on a fixed platform, OCSLA (Outer Continental Shelf Lands Act) applies.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{OIL_RIG_2026.citation}</p>
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the Jones Act?", acceptedAnswer: { "@type": "Answer", text: "The Jones Act allows seamen injured on vessels to sue employers for negligence, providing broader protections than workers' comp." } }] }) }} />
        </>
    );
}
