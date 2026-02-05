import Link from "next/link";
import { SITE, INJURY_TYPES, MESH_2026 } from "@/lib/calculators/transvaginal-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Mesh Complications | ${SITE.name}`, description: "Known transvaginal mesh complications and injuries." };

export default function ComplicationsPage() {
    const complications = [
        { name: "Mesh Erosion", description: "Mesh breaks through vaginal tissue, causing pain, bleeding, and infection. Often requires surgical removal. Most common complication." },
        { name: "Chronic Pelvic Pain", description: "Persistent pain in pelvic region that doesn't resolve. May worsen over time. Significantly impacts quality of life." },
        { name: "Dyspareunia", description: "Painful intercourse caused by mesh placement or erosion. Can affect both the woman and her partner." },
        { name: "Organ Perforation", description: "Mesh perforates bladder, bowel, or vaginal wall. Requires emergency surgery. Can cause serious infection." },
        { name: "Mesh Contraction", description: "Mesh shrinks and hardens over time, causing tissue damage and pain. Often requires complete removal." },
        { name: "Infection", description: "Bacteria colonize the mesh, causing chronic infection that doesn't respond to antibiotics. May require mesh removal." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/transvaginal-mesh" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/transvaginal-mesh" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Complications</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Mesh Complications</h1>
                    <p className="text-slate-400">Known injuries from transvaginal mesh implants.</p>
                </div>
                <div className="space-y-6">
                    {complications.map((comp, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-2">{comp.name}</h3>
                            <p className="text-slate-400">{comp.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">FDA Action</h3>
                    <p className="text-slate-300">In 2019, the FDA ordered manufacturers to stop selling transvaginal mesh for pelvic organ prolapse (POP) after concluding that manufacturers had not demonstrated reasonable assurance of safety and effectiveness.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/transvaginal-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="transvaginal-mesh" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{MESH_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
