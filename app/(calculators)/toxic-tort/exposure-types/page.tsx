import Link from "next/link";
import { SITE, TOXIC_EXPOSURE_TYPES, TOXIC_TORT_2026, formatCurrency } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Scale, ArrowLeft, ArrowRight, Beaker } from "lucide-react";

export const metadata = { title: `Toxic Exposure Types | ${SITE.name}`, description: "Guide to toxic exposure types: water contamination, air pollution, chemical exposure, and more." };

export default function ExposureTypesPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/toxic-tort" className="flex items-center gap-2 hover:opacity-80"><Scale className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/toxic-tort" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Beaker className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Exposure Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Types of Toxic Exposure</h1>
                    <p className="text-slate-400">Common sources of toxic exposure and average settlement values.</p>
                </div>
                <div className="space-y-6">
                    {TOXIC_EXPOSURE_TYPES.map((exp) => (
                        <div key={exp.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                                <div><h2 className="text-xl font-bold text-white">{exp.name}</h2><p className="text-slate-400 mt-1">{exp.description}</p></div>
                                <div className="text-right"><p className="text-2xl font-bold text-amber-400">{formatCurrency(exp.avgSettlement)}</p><p className="text-sm text-slate-500">avg settlement</p></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center"><Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TOXIC_TORT_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
