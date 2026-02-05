import Link from "next/link";
import { SITE, BARD_PRODUCTS, BARD_2026 } from "@/lib/calculators/bard-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Bard Mesh Products | ${SITE.name}`, description: "Recalled and problematic Bard hernia mesh products." };

export default function ProductsPage() {
    const products = [
        { name: "Composix Kugel Mesh", status: "RECALLED 2005-07", issue: "Class I recall due to defective memory recoil ring that could break, causing bowel perforations." },
        { name: "Ventralex Hernia Patch", status: "Active Claims", issue: "Self-expanding patch with reports of chronic pain, infection, and mesh failure requiring revision." },
        { name: "3DMax Mesh", status: "Active Claims", issue: "Three-dimensional mesh with reports of shrinkage, migration, and chronic pain." },
        { name: "PerFix Plug", status: "Active Claims", issue: "Plug-and-patch system linked to chronic pain and mesh migration requiring removal." },
        { name: "Ventralight ST Mesh", status: "Active Claims", issue: "Coated mesh with reports of adhesions and inflammatory reactions." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/bard-mesh" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Mesh Products</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Bard Mesh Products</h1>
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
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Composix Kugel Class I Recall</h3>
                    <p className="text-slate-300">The Composix Kugel Mesh was subject to a Class I recall (most serious) in 2005-2007 after reports of the memory recoil ring breaking and causing serious intestinal injuries.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/bard-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bard-mesh" count={5} /></div></div></section>
        </>
    );
}
