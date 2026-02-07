"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Train, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, FELA_2026, calculateFelaSettlement, formatCurrency, FelaResult } from "@/lib/calculators/fela";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function FelaCalculatorPage() {
    const [injuryIndex, setInjuryIndex] = useState(0);
    const [jobIndex, setJobIndex] = useState(2);
    const [companyIndex, setCompanyIndex] = useState(0);
    const [yearsWorked, setYearsWorked] = useState("15");
    const [medicalBills, setMedicalBills] = useState("50,000");
    const [annualWage, setAnnualWage] = useState("75,000");
    const [result, setResult] = useState<FelaResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const handleWageChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setAnnualWage(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { const years = parseInt(yearsWorked) || 15; const medicalNum = parseVal(medicalBills); const wageNum = parseVal(annualWage); setResult(calculateFelaSettlement(injuryIndex, jobIndex, companyIndex, years, medicalNum, wageNum)); };

    return (
        <>


            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">FELA Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your railroad injury compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FELA_2026.injuryTypes.map((inj, i) => (<option key={i} value={i}>{inj.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{FELA_2026.injuryTypes[injuryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Job Position</label><select value={jobIndex} onChange={(e) => setJobIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FELA_2026.jobTypes.map((j, i) => (<option key={i} value={i}>{j.job}</option>))}</select><p className="text-xs text-slate-500 mt-1">{FELA_2026.jobTypes[jobIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Railroad Company</label><select value={companyIndex} onChange={(e) => setCompanyIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{FELA_2026.railroadCompanies.map((c, i) => (<option key={i} value={i}>{c.company}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Years Worked</label><input type="text" value={yearsWorked} onChange={(e) => setYearsWorked(e.target.value)} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Wage</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={annualWage} onChange={handleWageChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="bg-amber-900/30 p-4 border-b border-slate-700"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-amber-300">{result.company} - {result.jobType}</span></div></div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Lost Wages</span><span className="font-medium text-white">{formatCurrency(result.lostWages)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Job Risk Bonus</span><span className="font-medium text-amber-400">{formatCurrency(result.jobBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />FELA FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is FELA?</h3><p className="text-slate-400">The Federal Employers&apos; Liability Act (45 U.S.C. §51-60) allows railroad workers to sue their employers for negligence. Unlike workers&apos; comp, FELA requires proving negligence but allows full compensation.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who qualifies for FELA?</h3><p className="text-slate-400">Any employee of a railroad engaged in interstate commerce, including conductors, engineers, track workers, carmen, and signal maintainers.</p></div>
                    </div>
                </section>

            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is FELA?", acceptedAnswer: { "@type": "Answer", text: "FELA allows railroad workers to sue employers for negligence, providing full compensation unlike workers' comp." } }] }) }} />
        </>
    );
}
