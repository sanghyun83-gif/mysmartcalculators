import Link from "next/link";
import { SITE, SPINE_PRODUCTS, SPINE_2026 } from "@/lib/calculators/spine-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Spine Implant Products | ${SITE.name}`, description: "Recalled and problematic spine implant devices." };

export default function ProductsPage() {
    const products = [
        { name: "Medtronic Infuse BMP", status: "Major MDL", issue: "Bone morphogenetic protein approved for lumbar use but widely used off-label in cervical spine. Caused bone overgrowth, cancer risks, male sterility." },
        { name: "Artificial Disc Replacement", status: "Active Claims", issue: "Various cervical and lumbar disc replacement devices with reports of migration, subsidence, and revision surgery requirements." },
        { name: "Pedicle Screw Systems", status: "Ongoing", issue: "Spinal screw systems with reports of screw breakage, loosening, and failure requiring additional surgery." },
        { name: "Spinal Cages", status: "Various", issue: "Interbody fusion cages with reports of subsidence, migration, and failed fusion requiring revision." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/spine-implant" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/spine-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Spine Products</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Spine Implant Products</h1>
                    <p className="text-slate-400">Devices involved in litigation.</p>
                </div>
                <div className="space-y-6">
                    {products.map((product, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                                <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">{product.status}</span>
                            </div>
                            <p className="text-slate-400">{product.issue}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Medtronic Infuse BMP MDL</h3>
                    <p className="text-slate-300">The largest spine implant litigation involves Medtronic&apos;s Infuse BMP product. Over $2.5 billion has been paid to settle claims. Cases continue to be filed.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/spine-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="spine-implant" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SPINE_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
