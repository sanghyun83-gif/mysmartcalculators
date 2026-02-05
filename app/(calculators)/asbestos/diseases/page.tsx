"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, Activity } from "lucide-react";
import { SITE, ASBESTOS_2026, formatCurrency } from "@/lib/calculators/asbestos";

export default function DiseasesPage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Asbestos-Related Diseases</h1><p className="text-slate-400">Mesothelioma, lung cancer, asbestosis, and more</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Disease Types & Settlement Values</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Disease</th><th className="py-3 text-center text-slate-400">Avg Settlement</th><th className="py-3 text-center text-slate-400">Latency</th><th className="py-3 text-center text-slate-400">Survival</th></tr></thead>
                        <tbody className="text-slate-300">{ASBESTOS_2026.diseases.map((d, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{d.disease}</p><p className="text-xs text-slate-500">{d.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(d.avgSettlement)}</td><td className="py-3 text-center text-slate-400">{d.latency}</td><td className="py-3 text-center text-rose-400">{d.survival}</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">About Mesothelioma</h3>
                    <p className="text-slate-300">Mesothelioma is an aggressive cancer caused almost exclusively by asbestos exposure. It develops in the lining of the lungs (pleural), abdomen (peritoneal), or heart (pericardial). With a median survival of 12-21 months, mesothelioma cases are often expedited in court.</p>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/asbestos/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{ASBESTOS_2026.citation}</p>
            </main>
        </>
    );
}
