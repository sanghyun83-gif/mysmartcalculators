import Link from "next/link";
import { SITE, MESH_MANUFACTURERS, MESH_2026 } from "@/lib/calculators/transvaginal-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, Building } from "lucide-react";

export const metadata = { title: `Mesh Manufacturers | ${SITE.name}`, description: "Transvaginal mesh manufacturers and defendants." };

export default function ManufacturersPage() {
    const manufacturers = [
        { name: "Johnson & Johnson / Ethicon", products: "Prolift, TVT, TVT-O, Gynecare", settlement: "$8.9 Billion", status: "Settled" },
        { name: "Boston Scientific", products: "Pinnacle, Uphold, Obtryx", settlement: "$2.5 Billion", status: "Ongoing" },
        { name: "C.R. Bard", products: "Avaulta, Align, Pelvilace", settlement: "$1.5 Billion", status: "Settled" },
        { name: "Coloplast", products: "Aris, Supris, Novasilk", settlement: "$500 Million", status: "Settled" },
        { name: "American Medical Systems", products: "Apogee, Perigee, MiniArc", settlement: "$1.6 Billion", status: "Settled" },
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
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Building className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Manufacturers</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Mesh Manufacturers</h1>
                    <p className="text-slate-400">Companies that manufactured and sold transvaginal mesh.</p>
                </div>
                <div className="space-y-6">
                    {manufacturers.map((mfr, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{mfr.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${mfr.status === 'Settled' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{mfr.status}</span>
                            </div>
                            <p className="text-sm text-slate-400 mb-2"><strong>Products:</strong> {mfr.products}</p>
                            <p className="text-xl font-bold text-purple-400">{mfr.settlement}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Total Industry Settlements</h3>
                    <p className="text-3xl font-bold text-purple-400 mb-2">{MESH_2026.statistics.totalSettlements}</p>
                    <p className="text-slate-400">Paid to resolve transvaginal mesh claims across all manufacturers.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/transvaginal-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="transvaginal-mesh" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{MESH_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
