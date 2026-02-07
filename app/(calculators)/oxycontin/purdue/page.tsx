import Link from "next/link";
import { SITE, OXYCONTIN_2026 } from "@/lib/calculators/oxycontin";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, Scale } from "lucide-react";

export const metadata = { title: `Purdue Pharma Settlement | ${SITE.name}`, description: "Purdue Pharma bankruptcy settlement details." };

export default function PurduePage() {
    const timeline = [
        { year: "1996", event: "OxyContin First Marketed", description: "Purdue Pharma launches OxyContin with claims of low addiction risk." },
        { year: "2007", event: "First Major Settlement", description: "Purdue pays $600M and pleads guilty to federal charges of misleading marketing." },
        { year: "2019", event: "Bankruptcy Filing", description: "Purdue Pharma files for Chapter 11 bankruptcy amid thousands of lawsuits." },
        { year: "2021", event: "Initial Settlement Plan", description: "Bankruptcy court approves restructuring with Sackler family contribution." },
        { year: "2024", event: "Supreme Court Ruling", description: "Initial settlement blocked, requiring revised terms." },
        { year: "2025-26", event: "New Settlement", description: "Revised $6B+ settlement approved with enhanced Sackler contribution." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/oxycontin" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/oxycontin" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Settlement Details</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Purdue Pharma Settlement</h1>
                    <p className="text-slate-400">Bankruptcy trust and Sackler contribution.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-emerald-400">$6B+</p>
                        <p className="text-slate-300 mt-2">Purdue Bankruptcy Trust</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-purple-400">$4.5B+</p>
                        <p className="text-slate-300 mt-2">Sackler Family Contribution</p>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-6">Settlement Timeline</h2>
                <div className="space-y-4">
                    {timeline.map((item, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex gap-4">
                            <div className="flex-shrink-0 w-16 text-center"><span className="text-purple-400 font-bold">{item.year}</span></div>
                            <div><h3 className="text-white font-semibold">{item.event}</h3><p className="text-slate-400 text-sm">{item.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Where Does the Money Go?</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>• Individual victim compensation through bankruptcy trust</li>
                        <li>• State and local government abatement programs</li>
                        <li>• Addiction treatment and prevention programs</li>
                        <li>• Naloxone distribution and overdose prevention</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/oxycontin/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="oxycontin" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{OXYCONTIN_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
