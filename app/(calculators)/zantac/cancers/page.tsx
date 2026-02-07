import Link from "next/link";
import { SITE, CANCER_TYPES, ZANTAC_2026, formatCurrency } from "@/lib/calculators/zantac";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Pill, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Cancers Linked to Zantac/NDMA | ${SITE.name}`, description: "Cancers associated with Zantac/ranitidine. NDMA contamination, stomach, bladder, liver cancer." };

export default function CancersPage() {
    const additionalCancers = ["Colorectal Cancer", "Prostate Cancer", "Pancreatic Cancer", "Kidney Cancer"];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/zantac" className="flex items-center gap-2 hover:opacity-80"><Pill className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/zantac" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Cancer Info</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cancers Linked to Zantac/NDMA</h1>
                    <p className="text-slate-400">Understanding the connection between ranitidine and cancer.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">What is NDMA?</h3>
                    <p className="text-slate-300 text-sm">N-Nitrosodimethylamine (NDMA) is a probable human carcinogen found in contaminated Zantac. Studies showed Zantac produced NDMA when exposed to heat, and levels increased over time in storage. The FDA found levels exceeding acceptable daily intake limits.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Primary Linked Cancers</h2>
                    <div className="space-y-4">
                        {CANCER_TYPES.map((cancer) => (
                            <div key={cancer.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <div><h3 className="text-white font-medium">{cancer.name}</h3><p className="text-sm text-slate-400">{cancer.description}</p></div>
                                <span className="text-purple-400 font-semibold">{formatCurrency(cancer.avgSettlement)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Additional Cancers Under Investigation</h2>
                    <div className="grid md:grid-cols-2 gap-2">
                        {additionalCancers.map((cancer, i) => (
                            <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-400 rounded-full" /><span className="text-slate-300">{cancer}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Scientific Evidence</h2>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li>• FDA testing found NDMA in Zantac at levels exceeding 0.32 mcg daily limit</li>
                        <li>• Independent laboratory Valisure detected NDMA levels up to 3,000,000 ng per tablet</li>
                        <li>• NDMA classified as &quot;probably carcinogenic&quot; by WHO IARC</li>
                        <li>• Animal studies link NDMA to liver tumors and other cancers</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/zantac/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="zantac" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ZANTAC_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
