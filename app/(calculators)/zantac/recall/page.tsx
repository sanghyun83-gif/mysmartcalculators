import Link from "next/link";
import { SITE, ZANTAC_2026 } from "@/lib/calculators/zantac";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Pill, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Why Zantac Was Recalled | ${SITE.name}`, description: "FDA Zantac recall information. Ranitidine, NDMA contamination, timeline, manufacturers." };

export default function RecallPage() {
    const timeline = [
        { date: "September 2019", event: "Valisure laboratory detects high NDMA levels in ranitidine" },
        { date: "September 2019", event: "FDA announces investigation into NDMA in ranitidine" },
        { date: "October 2019", event: "Major manufacturers issue voluntary recalls" },
        { date: "April 2020", event: "FDA requests withdrawal of ALL ranitidine products from U.S. market" },
        { date: "2020-Present", event: "Thousands of lawsuits filed against manufacturers" },
    ];

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
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">FDA Recall</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Zantac Was Recalled</h1>
                    <p className="text-slate-400">FDA recall timeline and NDMA contamination.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">FDA Recall Statement</h3>
                    <p className="text-slate-300 text-sm">&quot;FDA requested that all manufacturers withdraw their ranitidine products from the market because NDMA levels increase over time when stored at higher than room temperature, which may result in consumer exposure to unacceptable levels of this impurity.&quot;</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-6">Recall Timeline</h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500/30" />
                        <div className="space-y-6">
                            {timeline.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 relative">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 z-10">
                                        <span className="text-purple-400 text-xs font-bold">{i + 1}</span>
                                    </div>
                                    <div className="flex-1 bg-slate-700/50 rounded-lg p-4">
                                        <span className="text-purple-400 font-semibold text-sm">{item.date}</span>
                                        <p className="text-slate-300 mt-1">{item.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Key Discovery</h2>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li> NDMA forms when ranitidine is exposed to heat (even body temperature)</li>
                        <li> NDMA levels increase the longer ranitidine is stored</li>
                        <li> Testing showed some pills exceeded safe limits by thousands of times</li>
                        <li> All brand-name and generic ranitidine products were affected</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/zantac/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="zantac" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ZANTAC_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
