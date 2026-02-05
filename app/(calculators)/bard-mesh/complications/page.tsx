import Link from "next/link";
import { SITE, INJURY_TYPES, BARD_2026 } from "@/lib/calculators/bard-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Bard Mesh Complications | ${SITE.name}`, description: "Known Bard hernia mesh complications." };

export default function ComplicationsPage() {
    const complications = [
        { name: "Mesh Shrinkage / Contraction", description: "Polypropylene mesh can shrink significantly after implantation, causing pain and hernia recurrence." },
        { name: "Chronic Pain", description: "Persistent pain at the surgical site from nerve damage, mesh contraction, or inflammatory response." },
        { name: "Infection / Abscess", description: "Bacterial infection around the mesh requiring antibiotics or surgical removal." },
        { name: "Adhesions", description: "Scar tissue forms between mesh and organs, causing pain and potentially bowel obstruction." },
        { name: "Mesh Migration", description: "Mesh moves from original placement, potentially penetrating organs or causing additional injury." },
        { name: "Bowel Perforation", description: "Mesh or broken components penetrate intestines, requiring emergency surgery. Common with Composix Kugel recall." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/bard-mesh" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Complications</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Bard Mesh Complications</h1>
                    <p className="text-slate-400">Known issues with Bard hernia mesh.</p>
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
                <div className="mt-12 text-center"><Link href="/bard-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bard-mesh" count={5} /></div></div></section>
        </>
    );
}
