import Link from "next/link";
import { SITE, TYLENOL_2026 } from "@/lib/calculators/tylenol";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Pill, ArrowLeft, ArrowRight, FileText, BookOpen } from "lucide-react";

export const metadata = { title: `Scientific Studies | ${SITE.name}`, description: "Research linking Tylenol to autism. JAMA studies, meta-analyses." };

export default function StudiesPage() {
    const studies = [
        { title: "JAMA Pediatrics 2019", finding: "Prenatal acetaminophen exposure associated with 20% increased risk of autism", source: "Bauer et al." },
        { title: "JAMA Pediatrics 2014", finding: "Long-term use linked to hyperkinetic disorders and ADHD-like behavior", source: "Liew et al." },
        { title: "European Journal of Epidemiology 2018", finding: "Meta-analysis: significant association with ADHD symptoms", source: "Masarwa et al." },
        { title: "International Journal of Epidemiology 2016", finding: "Prenatal exposure linked to behavioral problems in children", source: "Stergiakouli et al." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/tylenol" className="flex items-center gap-2 hover:opacity-80"><Pill className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/tylenol" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><BookOpen className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Research</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Scientific Studies</h1>
                    <p className="text-slate-400">Research linking acetaminophen to neurodevelopmental disorders.</p>
                </div>

                <div className="space-y-4">
                    {studies.map((study, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg flex-shrink-0"><FileText className="w-6 h-6 text-purple-400" /></div>
                                <div>
                                    <h3 className="text-white font-semibold">{study.title}</h3>
                                    <p className="text-slate-300 mt-1">{study.finding}</p>
                                    <p className="text-sm text-slate-500 mt-2">Source: {study.source}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Important Note</h3>
                    <p className="text-sm text-amber-200/80">While these studies show associations, causation is still debated in the scientific community. The lawsuits allege that manufacturers should have warned about these risks. Consult medical and legal professionals for guidance.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/tylenol/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="tylenol" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TYLENOL_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
