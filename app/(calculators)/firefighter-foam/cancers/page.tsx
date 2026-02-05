import Link from "next/link";
import { SITE, CANCER_TYPES, AFFF_2026, formatCurrency } from "@/lib/calculators/firefighter-foam";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Flame, ArrowLeft, ArrowRight, Activity } from "lucide-react";

export const metadata = { title: `PFAS-Linked Cancers | ${SITE.name}`, description: "Cancers linked to AFFF firefighting foam and PFAS exposure." };

export default function CancersPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/firefighter-foam" className="flex items-center gap-2 hover:opacity-80"><Flame className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/firefighter-foam" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Activity className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Cancer Information</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">PFAS-Linked Cancers</h1>
                    <p className="text-slate-400">Cancers associated with AFFF firefighting foam exposure.</p>
                </div>

                <div className="space-y-6">
                    {CANCER_TYPES.map((cancer) => (
                        <div key={cancer.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div><h3 className="text-xl font-semibold text-white">{cancer.name}</h3><p className="text-slate-400 mt-1">{cancer.description}</p></div>
                                <div className="text-right"><p className="text-2xl font-bold text-amber-400">{formatCurrency(cancer.avgSettlement)}</p><p className="text-xs text-slate-500">projected avg</p></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Other PFAS Health Effects</h3>
                    <ul className="grid md:grid-cols-2 gap-2 text-slate-300 text-sm">
                        <li>• Ulcerative colitis</li>
                        <li>• Thyroid disorders</li>
                        <li>• High cholesterol</li>
                        <li>• Pregnancy complications</li>
                        <li>• Immune system effects</li>
                        <li>• Hormone disruption</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/firefighter-foam/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="firefighter-foam" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{AFFF_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
