"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Package } from "lucide-react";
import { SITE, PRODUCT_2026, formatCurrency } from "@/lib/calculators/product-liability";

export default function RecallsPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/product-liability" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Product Recalls</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Notable Product Recalls</h1><p className="text-slate-400">Major recalls and resulting settlements</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Recent High-Profile Recalls</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Product</th><th className="py-3 text-center text-slate-400">Year</th><th className="py-3 text-center text-slate-400">Injuries</th><th className="py-3 text-center text-slate-400">Deaths</th></tr></thead>
                        <tbody className="text-slate-300">{PRODUCT_2026.recentRecalls.map((r, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 text-white font-medium">{r.product}</td><td className="py-3 text-center text-slate-400">{r.year}</td><td className="py-3 text-center text-amber-400">{r.injuries}</td><td className="py-3 text-center text-red-400">{r.deaths}</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Recall Strengthens Your Case</h3>
                    <p className="text-slate-300">If a product was recalled after your injury, it significantly strengthens your lawsuit. The recall is an admission by the manufacturer that the product was defective. You can still file a claim even if injured before the recall was announced.</p>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/product-liability/product-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{PRODUCT_2026.citation}</p>
            </main>
        </>
    );
}
