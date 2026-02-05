import Link from "next/link";
import { SITE, INJURY_TYPES, SPINE_2026 } from "@/lib/calculators/spine-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Spine Implant Complications | ${SITE.name}`, description: "Known spine implant complications." };

export default function ComplicationsPage() {
    const complications = [
        { name: "Ectopic Bone Growth", description: "Infuse BMP causes bone to grow in unwanted areas, compressing nerves and spinal cord. Common in cervical off-label use." },
        { name: "Nerve Damage / Radiculopathy", description: "Excessive bone growth or device migration can compress nerves, causing pain, numbness, and weakness in arms or legs." },
        { name: "Failed Fusion / Pseudoarthrosis", description: "The spinal bones fail to fuse together, causing continued instability, pain, and need for revision surgery." },
        { name: "Infection", description: "Surgical site infections around the implant may require removal and extended antibiotic treatment." },
        { name: "Device Migration", description: "Artificial discs, cages, or screws may move from their original position, causing pain and further complications." },
        { name: "Male Sterility", description: "Infuse BMP used in certain lumbar procedures has been linked to male reproductive complications and sterility." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/spine-implant" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/spine-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Complications</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Spine Implant Complications</h1>
                    <p className="text-slate-400">Known issues with spinal devices.</p>
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
                        {INJURY_TYPES.slice(0, 3).map((injury, i) => (
                            <div key={i} className="flex justify-between"><span className="text-slate-300">{injury.name}</span><span className="text-purple-400 font-semibold">${(injury.avgSettlement / 1000).toFixed(0)}K avg</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/spine-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="spine-implant" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SPINE_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
