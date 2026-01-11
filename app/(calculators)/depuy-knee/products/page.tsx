import Link from "next/link";
import { SITE, DEPUY_KNEE_PRODUCTS, DEPUY_KNEE_2026 } from "@/lib/calculators/depuy-knee";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `DePuy Knee Products | ${SITE.name}`, description: "DePuy Attune and other knee implant products." };

export default function ProductsPage() {
    const products = [
        { name: "Attune Knee System", year: "2013", issue: "Tibial component loosening. Multiple reports of early failure within 2-5 years requiring revision surgery." },
        { name: "Sigma Knee System", year: "2000", issue: "Various complications including wear, loosening, and polyethylene insert failures reported." },
        { name: "LCS Complete System", year: "1998", issue: "Mobile bearing design with reports of bearing spinout and instability." },
        { name: "Sigma PFC", year: "1991", issue: "Earlier generation with reports of tibial insert wear and osteolysis." },
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/depuy-knee" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/depuy-knee" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Knee Products</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">DePuy Knee Products</h1>
                    <p className="text-slate-400">Products involved in litigation.</p>
                </div>
                <div className="space-y-6">
                    {products.map((product, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                                <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-400">Launched {product.year}</span>
                            </div>
                            <p className="text-slate-400">{product.issue}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Attune Tibial Loosening</h3>
                    <p className="text-slate-300">The Attune Knee System has been the primary focus of recent litigation. Studies suggest the tibial baseplate design may not allow proper cement bonding, leading to loosening and early failure.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/depuy-knee/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="depuy-knee" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{DEPUY_KNEE_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </div>
    );
}
