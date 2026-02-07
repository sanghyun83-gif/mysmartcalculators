import Link from "next/link";
import { SITE, ETHICON_PRODUCTS, ETHICON_2026 } from "@/lib/calculators/ethicon-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Ethicon Mesh Products | ${SITE.name}`, description: "Recalled and problematic Ethicon hernia mesh products." };

export default function ProductsPage() {
    const products = [
        { name: "Physiomesh Flexible Composite", status: "RECALLED 2016", issue: "Recalled due to higher rates of hernia recurrence and reoperation. Subject of MDL 2846." },
        { name: "Prolene Hernia System", status: "Active Claims", issue: "Polypropylene mesh system linked to chronic pain, infection, and mesh migration." },
        { name: "Proceed Surgical Mesh", status: "Active Claims", issue: "Multi-layer mesh with reports of adhesions, pain, and revision surgery requirements." },
        { name: "Ultrapro Hernia System", status: "Active Claims", issue: "Lightweight partially absorbable mesh with reported complications." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/ethicon-mesh" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/ethicon-mesh" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Mesh Products</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ethicon Mesh Products</h1>
                    <p className="text-slate-400">Devices involved in litigation.</p>
                </div>
                <div className="space-y-6">
                    {products.map((product, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${product.status.includes('RECALLED') ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>{product.status}</span>
                            </div>
                            <p className="text-slate-400">{product.issue}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Physiomesh Recall</h3>
                    <p className="text-slate-300">In May 2016, Ethicon voluntarily recalled Physiomesh after data revealed higher rates of hernia recurrence and revision surgery compared to competitor products. Over 20,000 claims have been filed in MDL 2846.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/ethicon-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ethicon-mesh" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ETHICON_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
