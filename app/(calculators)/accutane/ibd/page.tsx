import Link from "next/link";
import { SITE, ACCUTANE_2026 } from "@/lib/calculators/accutane";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, Scale } from "lucide-react";

export const metadata = { title: `Accutane IBD Connection | ${SITE.name}`, description: "The link between Accutane and inflammatory bowel disease." };

export default function IBDPage() {
    const studies = [
        { year: "2006", finding: "Studies showed increased IBD risk in Accutane users compared to general population." },
        { year: "2009", finding: "Roche discontinues brand-name Accutane amid mounting lawsuits." },
        { year: "2010", finding: "Major jury verdict awards $25M to IBD plaintiff." },
        { year: "2014", finding: "Meta-analysis confirms statistical association between isotretinoin and IBD." },
        { year: "2020", finding: "Ongoing litigation continues with generic isotretinoin manufacturers." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/accutane" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">IBD Connection</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Accutane &amp; IBD Connection</h1>
                    <p className="text-slate-400">The link between Accutane and inflammatory bowel disease.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
                        <p className="text-2xl font-bold text-red-400">Crohn&apos;s Disease</p>
                        <p className="text-slate-300 mt-2">Most common IBD linked to Accutane use</p>
                    </div>
                    <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 text-center">
                        <p className="text-2xl font-bold text-amber-400">Ulcerative Colitis</p>
                        <p className="text-slate-300 mt-2">Second most common IBD condition</p>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-6">Research Timeline</h2>
                <div className="space-y-4">
                    {studies.map((study, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex gap-4">
                            <div className="flex-shrink-0 w-16 text-center"><span className="text-purple-400 font-bold">{study.year}</span></div>
                            <p className="text-slate-300">{study.finding}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">IBD Symptoms to Watch</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>??Persistent diarrhea (often bloody)</li>
                        <li>??Abdominal pain and cramping</li>
                        <li>??Unexplained weight loss</li>
                        <li>??Fatigue and malaise</li>
                        <li>??Urgency to use bathroom</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/accutane/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="accutane" count={5} /></div></div></section>
        </>
    );
}
