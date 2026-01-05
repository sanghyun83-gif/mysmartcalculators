import Link from "next/link";
import { SITE, EXPOSURE_LEVELS, EXPOSURE_DURATION, ROUNDUP_2026 } from "@/lib/calculators/roundup";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Leaf, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = { title: `Roundup Exposure Types | ${SITE.name}`, description: "Occupational vs. home use Roundup exposure. Farmers, landscapers, gardeners at risk." };

export default function ExposurePage() {
    const occupations = [
        { title: "Farmers & Agricultural Workers", description: "Spray large quantities on crops, highest exposure risk" },
        { title: "Landscapers & Groundskeepers", description: "Regular application at commercial and residential properties" },
        { title: "Nursery & Greenhouse Workers", description: "Handling plants and spraying in enclosed spaces" },
        { title: "Home Users", description: "Residential gardening and lawn care" },
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/roundup" className="flex items-center gap-2 hover:opacity-80"><Leaf className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/roundup" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Leaf className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Exposure Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Roundup Exposure Types</h1>
                    <p className="text-slate-400">How exposure level affects your claim value.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">At-Risk Occupations</h2>
                    <div className="space-y-4">
                        {occupations.map((job, i) => (
                            <div key={i} className="border-b border-slate-700 last:border-0 pb-3 last:pb-0">
                                <h3 className="text-white font-medium">{job.title}</h3>
                                <p className="text-sm text-slate-400">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Exposure Level Impact</h2>
                    <div className="space-y-3">
                        {EXPOSURE_LEVELS.map((level) => (
                            <div key={level.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <div><h3 className="text-white font-medium">{level.name}</h3><p className="text-sm text-slate-400">{level.description}</p></div>
                                <span className="text-purple-400">{level.multiplier}x</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Duration Matters</h2>
                    <div className="space-y-3">
                        {EXPOSURE_DURATION.map((dur) => (
                            <div key={dur.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <span className="text-white font-medium">{dur.name}</span>
                                <span className="text-purple-400">{dur.multiplier}x multiplier</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/roundup/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="roundup" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ROUNDUP_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </div>
    );
}
