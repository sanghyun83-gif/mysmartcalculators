import Link from "next/link";
import { SITE, DISEASE_TYPES, TOXIC_TORT_2026 } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Scale, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Diseases from Toxic Exposure | ${SITE.name}`, description: "Health conditions caused by toxic exposure: cancer, neurological damage, respiratory disease, and more." };

export default function DiseasesPage() {
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
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Health Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Diseases from Toxic Exposure</h1>
                    <p className="text-slate-400">Health conditions linked to environmental and chemical exposure.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {DISEASE_TYPES.map((disease) => (
                        <div key={disease.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h2 className="text-lg font-bold text-white mb-2">{disease.name}</h2>
                            <p className="text-slate-400 text-sm mb-3">{disease.description}</p>
                            <div className="flex items-center gap-2"><span className="text-xs text-slate-500">Settlement Multiplier:</span><span className="text-amber-400 font-bold">{disease.multiplier}x</span></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Latent Disease Warning</h3>
                    <p className="text-amber-200 text-sm">Many toxic exposures cause diseases that appear years or decades later. If you were exposed to chemicals, even without current symptoms, document your exposure and monitor your health. The statute of limitations typically begins when disease is diagnosed, not when exposure occurred.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TOXIC_TORT_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
