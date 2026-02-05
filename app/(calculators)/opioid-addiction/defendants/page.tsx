import Link from "next/link";
import { SITE, OPIOID_2026 } from "@/lib/calculators/opioid-addiction";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, Scale } from "lucide-react";

export const metadata = { title: `Opioid Lawsuit Defendants | ${SITE.name}`, description: "Companies involved in opioid litigation." };

export default function DefendantsPage() {
    const defendants = [
        { name: "Purdue Pharma", status: "BANKRUPTCY SETTLEMENT", amount: "$6B+ Trust", description: "Maker of OxyContin, declared bankruptcy. Sackler family contributed billions to addiction treatment trusts." },
        { name: "Johnson & Johnson (Janssen)", status: "SETTLEMENT", amount: "$5B+", description: "Manufactured poppy-derived opioid ingredients. Settled with states and local governments." },
        { name: "McKesson", status: "SETTLEMENT", amount: "$8B+", description: "Major drug distributor accused of failing to report suspicious opioid orders to pharmacies." },
        { name: "Cardinal Health", status: "SETTLEMENT", amount: "$6B+", description: "Drug distributor that allegedly ignored red flags about opioid diversion." },
        { name: "AmerisourceBergen", status: "SETTLEMENT", amount: "$6B+", description: "Third major distributor in landmark 'Big Three' settlement agreement." },
        { name: "Teva Pharmaceuticals", status: "SETTLEMENT", amount: "$4B+", description: "Generic opioid manufacturer that settled claims nationwide." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/opioid-addiction" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/opioid-addiction" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Defendants</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Opioid Lawsuit Defendants</h1>
                    <p className="text-slate-400">Major companies involved in opioid litigation.</p>
                </div>
                <div className="space-y-6">
                    {defendants.map((d, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{d.name}</h3>
                                <div className="text-right">
                                    <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">{d.status}</span>
                                    <p className="text-purple-400 font-semibold mt-1">{d.amount}</p>
                                </div>
                            </div>
                            <p className="text-slate-400">{d.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Total Industry Settlements</h3>
                    <p className="text-2xl font-bold text-white mb-2">$50+ Billion</p>
                    <p className="text-slate-300">Combined settlements from manufacturers, distributors, and pharmacies for opioid-related claims across all states and localities.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/opioid-addiction/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="opioid-addiction" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{OPIOID_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
