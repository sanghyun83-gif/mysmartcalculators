import Link from "next/link";
import { SITE, DO_2026 } from "@/lib/calculators/do-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `D&O Coverage Guide | ${SITE.name}`, description: "Guide to D&O insurance coverage." };

export default function GuidePage() {
    const covered = ["Breach of fiduciary duty", "Mismanagement claims", "Regulatory investigations", "Employment practices claims", "Securities claims (public)", "Defense costs"];

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/do-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">D&amp;O Coverage Guide</h1>
                    <p className="text-slate-400">Understanding Side A, B, and C coverage.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">What D&amp;O Covers</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {covered.map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 mb-12">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">Side A Coverage</h3>
                        <p className="text-slate-400">Protects directors and officers directly when the company cannot or will not indemnify them. Most critical coverage.</p>
                    </div>
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-emerald-300 mb-2">Side B Coverage</h3>
                        <p className="text-slate-400">Reimburses the company when it indemnifies directors and officers. Protects company balance sheet.</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-purple-300 mb-2">Side C Coverage</h3>
                        <p className="text-slate-400">Covers the company entity for securities claims. Most relevant for public companies. Also called &quot;entity coverage.&quot;</p>
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/do-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="do-insurance" count={5} /></div></div></section>

        </>
    );
}
