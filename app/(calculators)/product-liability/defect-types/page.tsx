"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, Package } from "lucide-react";
import { SITE, PRODUCT_2026, formatCurrency } from "@/lib/calculators/product-liability";

export default function DefectTypesPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/product-liability" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Product Defect Types</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Types of Product Defects</h1><p className="text-slate-400">Manufacturing, design, and warning defects</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Defect Types & Settlement Values</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Defect Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{PRODUCT_2026.defectTypes.map((d, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{d.type}</p><p className="text-xs text-slate-500">{d.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(d.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-amber-900/30 border border-amber-500/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Design Defects vs Manufacturing Defects</h3>
                    <p className="text-slate-300">Design defects affect all products of that type (inherently unsafe design), while manufacturing defects affect only specific units (production error). Design defects typically result in higher settlements because they show systemic negligence.</p>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/product-liability/product-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{PRODUCT_2026.citation}</p>
            </main>
        </>
    );
}
