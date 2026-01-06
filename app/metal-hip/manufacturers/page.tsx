import Link from "next/link";
import { SITE, MOM_MANUFACTURERS, MOM_2026 } from "@/lib/calculators/metal-hip";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, Building } from "lucide-react";

export const metadata = { title: `MoM Hip Manufacturers | ${SITE.name}`, description: "Metal-on-metal hip implant manufacturers and defendants." };

export default function ManufacturersPage() {
    const manufacturers = [
        { name: "DePuy (J&J)", products: "ASR, ASR XL, Pinnacle Ultamet", settlement: "$4+ Billion", status: "Major Settlements" },
        { name: "Stryker", products: "Rejuvenate, ABG II, LFIT V40", settlement: "$1.5+ Billion", status: "Settled" },
        { name: "Zimmer Biomet", products: "Durom Cup, M/L Taper", settlement: "$500+ Million", status: "Ongoing" },
        { name: "Smith & Nephew", products: "Birmingham Hip Resurfacing, R3", settlement: "$500+ Million", status: "Settled" },
        { name: "Wright Medical", products: "Conserve Plus, Dynasty", settlement: "$240+ Million", status: "Settled" },
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/metal-hip" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/metal-hip" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Building className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Manufacturers</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">MoM Hip Manufacturers</h1>
                    <p className="text-slate-400">Companies that manufactured metal-on-metal hip implants.</p>
                </div>
                <div className="space-y-6">
                    {manufacturers.map((mfr, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{mfr.name}</h3>
                                <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">{mfr.status}</span>
                            </div>
                            <p className="text-sm text-slate-400 mb-2"><strong>Products:</strong> {mfr.products}</p>
                            <p className="text-xl font-bold text-purple-400">{mfr.settlement}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Total Industry Impact</h3>
                    <p className="text-3xl font-bold text-purple-400 mb-2">{MOM_2026.statistics.totalSettlements}</p>
                    <p className="text-slate-400">Paid across all MoM hip manufacturers to resolve claims.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/metal-hip/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="metal-hip" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{MOM_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </div>
    );
}
