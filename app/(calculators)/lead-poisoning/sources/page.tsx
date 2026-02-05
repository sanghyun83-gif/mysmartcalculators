import Link from "next/link";
import { SITE, EXPOSURE_SOURCES, LEAD_POISONING_2026, formatCurrency } from "@/lib/calculators/lead-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Lead Exposure Sources | ${SITE.name}`, description: "Common sources of lead poisoning: lead paint, contaminated water, occupational exposure." };

export default function SourcesPage() {
    const details = [
        { id: "lead-paint", name: "Lead Paint", facts: ["Banned in 1978, but still in 29M+ homes", "Major source of childhood lead exposure", "Renovation and demolition create toxic dust", "Landlords legally responsible for disclosure"], claims: "Lawsuits target landlords who failed to remove or disclose lead paint hazards." },
        { id: "water", name: "Contaminated Water", facts: ["9+ million homes have lead service lines", "Flint crisis affected 100,000+ residents", "EPA Lead and Copper Rule requires action", "Water testing reveals hidden contamination"], claims: "Class actions against utilities and municipalities can result in massive settlements." },
        { id: "occupational", name: "Occupational Exposure", facts: ["Battery manufacturing, smelters, construction", "OSHA requires blood lead monitoring", "Take-home contamination affects families", "Protective equipment often inadequate"], claims: "Workers' comp plus third-party suits against negligent employers." },
        { id: "products", name: "Consumer Products", facts: ["Imported toys, jewelry, cosmetics", "Traditional remedies may contain lead", "FDA/CPSC recall dangerous products", "Children's products most concerning"], claims: "Product liability claims against manufacturers and importers." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/lead-poisoning" className="flex items-center gap-2 hover:opacity-80"><Droplets className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/lead-poisoning" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Exposure Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sources of Lead Exposure</h1>
                    <p className="text-slate-400">Where lead poisoning comes from and how to prove your case.</p>
                </div>
                <div className="space-y-6">
                    {details.map((source) => (
                        <div key={source.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-purple-400 mb-4">{source.name}</h2>
                            <ul className="space-y-2 mb-4">{source.facts.map((fact, i) => <li key={i} className="flex items-start gap-2"><span className="text-purple-400 mt-1">•</span><span className="text-slate-300">{fact}</span></li>)}</ul>
                            <div className="bg-purple-500/10 rounded-lg p-3"><p className="text-purple-200 text-sm"><strong>Legal claims:</strong> {source.claims}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center"><Link href="/lead-poisoning/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="lead-poisoning" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{LEAD_POISONING_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
