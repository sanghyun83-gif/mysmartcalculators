"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Package } from "lucide-react";
import { SITE, PRODUCT_2026, calculateProductSettlement, formatCurrency, ProductResult } from "@/lib/calculators/product-liability";

export default function ProductCalculatorPage() {
    const [defectIndex, setDefectIndex] = useState(0);
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [severityIndex, setSeverityIndex] = useState(2);
    const [medicalBills, setMedicalBills] = useState("100,000");
    const [result, setResult] = useState<ProductResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateProductSettlement(defectIndex, categoryIndex, severityIndex, parseVal(medicalBills))); };

    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/product-liability" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Package className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Product Calculator</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Product Liability Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your defective product compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Defect Type</label><select value={defectIndex} onChange={(e) => setDefectIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PRODUCT_2026.defectTypes.map((d, i) => (<option key={i} value={i}>{d.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{PRODUCT_2026.defectTypes[defectIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Product Category</label><select value={categoryIndex} onChange={(e) => setCategoryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PRODUCT_2026.productCategories.map((c, i) => (<option key={i} value={i}>{c.category} ({c.multiplier}x)</option>))}</select><p className="text-xs text-slate-500 mt-1">{PRODUCT_2026.productCategories[categoryIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Severity</label><select value={severityIndex} onChange={(e) => setSeverityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{PRODUCT_2026.injurySeverity.map((s, i) => (<option key={i} value={i}>{s.severity}</option>))}</select><p className="text-xs text-slate-500 mt-1">{PRODUCT_2026.injurySeverity[severityIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
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
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.defectType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Product Category Factor</span><span className="font-medium text-amber-400">{formatCurrency(result.categoryBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Severity Factor ({result.severity})</span><span className="font-medium text-amber-400">{formatCurrency(result.severityBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Product Liability FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">What is product liability?</h3><p className="text-slate-400">Product liability holds manufacturers, distributors, and retailers responsible for injuries caused by defective products. Unlike negligence, it often applies strict liability - you don't need to prove the company was careless.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What are the types of product defects?</h3><p className="text-slate-400">Manufacturing defects (production errors), design defects (inherently unsafe design), and failure to warn (missing warnings/instructions). Design defects typically result in higher settlements.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Who can I sue for a defective product?</h3><p className="text-slate-400">You can potentially sue the manufacturer, distributor, retailer, or any party in the chain of distribution. All may be held liable under joint and several liability.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How do recalls affect my case?</h3><p className="text-slate-400">A product recall strengthens your case significantly. It demonstrates the manufacturer acknowledged the defect. You can file even if injured before the recall.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What is the statute of limitations?</h3><p className="text-slate-400">Most states allow 2-4 years from injury. Some have "statute of repose" limiting claims after a certain time from sale, regardless of when injury occurred.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Do I need to keep the defective product?</h3><p className="text-slate-400">Yes, preserve the product as evidence if possible. Take photos, keep packaging, receipts, and any communications with the manufacturer.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, pain and suffering, property damage, and in egregious cases, punitive damages to punish the manufacturer.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Are class action lawsuits better?</h3><p className="text-slate-400">Individual lawsuits often yield higher settlements. Class actions may be appropriate for widespread defects with many victims but limited individual damages.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What if I modified the product?</h3><p className="text-slate-400">Modifications may reduce or eliminate liability depending on whether they contributed to the injury. Normal wear and foreseeable misuse typically don't bar claims.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do product liability cases take?</h3><p className="text-slate-400">Simple cases may settle in months; complex cases involving major manufacturers can take 2-5 years, especially if they go to trial or involve mass litigation.</p></div>
                    </div>
                </section>
                <p className="mt-8 text-xs text-slate-500 text-center">{PRODUCT_2026.citation}</p>
            </main>
        </>
    );
}
