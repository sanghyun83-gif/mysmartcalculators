import Link from "next/link";
import { SITE, INJURY_TYPES, ETHICON_2026 } from "@/lib/calculators/ethicon-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Ethicon Mesh Complications | ${SITE.name}`, description: "Known Ethicon hernia mesh complications." };

export default function ComplicationsPage() {
    const complications = [
        { name: "Mesh Failure / Recurrence", description: "Hernia returns due to mesh failure, separation, or inadequate tissue integration. Physiomesh showed higher recurrence rates." },
        { name: "Chronic Pain", description: "Persistent pain at the surgical site that continues months or years after surgery. May be caused by nerve entrapment or mesh contraction." },
        { name: "Infection / Abscess", description: "Bacterial infection around the mesh requiring antibiotics, drainage, or mesh removal. Can become serious if untreated." },
        { name: "Mesh Migration", description: "Mesh moves from original placement, potentially causing organ damage or bowel obstruction." },
        { name: "Adhesions", description: "Scar tissue forms between mesh and organs, causing pain and potentially requiring surgical separation." },
        { name: "Bowel Obstruction", description: "Mesh or adhesions block the intestines, causing severe abdominal pain and requiring emergency surgery." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/ethicon-mesh" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/ethicon-mesh" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Complications</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ethicon Mesh Complications</h1>
                    <p className="text-slate-400">Known issues with Ethicon hernia mesh.</p>
                </div>
                <div className="space-y-6">
                    {complications.map((comp, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-2">{comp.name}</h3>
                            <p className="text-slate-400">{comp.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Compensation by Injury</h3>
                    <div className="space-y-2">
                        {INJURY_TYPES.map((injury, i) => (
                            <div key={i} className="flex justify-between"><span className="text-slate-300">{injury.name}</span><span className="text-purple-400 font-semibold">${(injury.avgSettlement / 1000).toFixed(0)}K avg</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/ethicon-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ethicon-mesh" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ETHICON_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
