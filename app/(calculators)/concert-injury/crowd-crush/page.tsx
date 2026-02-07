import Link from "next/link";
import { SITE, CONCERT_2026 } from "@/lib/calculators/concert-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Music, ArrowLeft, ArrowRight, Users, AlertTriangle } from "lucide-react";

export const metadata = { title: `Crowd Crush & Surge Claims | ${SITE.name}`, description: "Understanding crowd crush and surge injury claims." };

export default function CrowdCrushPage() {
    const crushInfo = [
        { title: "What is Crowd Crush?", description: "Crowd crush occurs when density exceeds safe limits (4-5 people per square meter). Unlike panic stampedes, victims often cannot move at all - they're compressed by the crowd and can't breathe." },
        { title: "The Astroworld Tragedy", description: "In November 2021, 10 people died and hundreds were injured at Astroworld Festival when a crowd surge compressed attendees against barriers. Lawsuits highlight failures in crowd management and emergency response." },
        { title: "Warning Signs Ignored", description: "Crowd crush doesn't happen suddenly. Warning signs include difficulty breathing, people being lifted off their feet, and waves of compression. Organizers are often warned before disaster strikes." },
        { title: "Who is Responsible?", description: "Liability can extend to venues, promoters, security companies, crowd management firms, and sometimes performers who encouraged dangerous behavior or ignored obvious warning signs." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/concert-injury" className="flex items-center gap-2 hover:opacity-80"><Music className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/concert-injury" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Users className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Crowd Crush Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Crowd Crush &amp; Surge Claims</h1>
                    <p className="text-slate-400">Understanding crowd crush injuries and liability.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8 flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-red-300 mb-2">Growing Concert Safety Crisis</h3>
                        <p className="text-slate-300">{CONCERT_2026.statistics.deaths}. Poor crowd management and exceeded capacities continue to cause preventable deaths at live events.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {crushInfo.map((item, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center"><Link href="/concert-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="concert-injury" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{CONCERT_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
