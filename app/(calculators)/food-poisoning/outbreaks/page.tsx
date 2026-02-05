import Link from "next/link";
import { SITE, FOOD_2026 } from "@/lib/calculators/food-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Bug, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Recent Food Poisoning Outbreaks | ${SITE.name}`, description: "2026 foodborne illness outbreak tracker and lawsuit information." };

export default function OutbreaksPage() {
    const recentOutbreaks = [
        { date: "2026", pathogen: "E. coli O157:H7", source: "Romaine Lettuce", cases: "150+ cases", deaths: "2 deaths", status: "Investigation ongoing" },
        { date: "2026", pathogen: "Listeria", source: "Deli Meats", cases: "28 cases", deaths: "5 deaths", status: "Recall issued" },
        { date: "2026", pathogen: "Salmonella", source: "Onions", cases: "600+ cases", deaths: "0 deaths", status: "Investigation closed" },
        { date: "2025", pathogen: "E. coli", source: "McDonald's Quarter Pounders", cases: "100+ cases", deaths: "1 death", status: "Lawsuits filed" },
        { date: "2025", pathogen: "Listeria", source: "Boar's Head Deli Meats", cases: "57 cases", deaths: "9 deaths", status: "Major lawsuits" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/food-poisoning" className="flex items-center gap-2 hover:opacity-80"><Bug className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/food-poisoning" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Outbreak Tracker</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Food Poisoning Outbreaks</h1>
                    <p className="text-slate-400">Major outbreaks that may have affected you.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-2">Why Outbreaks Matter for Your Case</h3>
                    <p className="text-slate-300">Being linked to a confirmed outbreak significantly strengthens your case. Health department investigations can establish the source and prove negligence.</p>
                </div>

                <div className="space-y-4">
                    {recentOutbreaks.map((outbreak, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{outbreak.source}</h3>
                                    <p className="text-amber-400 text-sm">{outbreak.pathogen} • {outbreak.date}</p>
                                </div>
                                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">{outbreak.status}</span>
                            </div>
                            <div className="flex gap-6 text-sm">
                                <div><span className="text-slate-400">Cases:</span> <span className="text-white">{outbreak.cases}</span></div>
                                <div><span className="text-slate-400">Deaths:</span> <span className={outbreak.deaths !== "0 deaths" ? "text-red-400" : "text-white"}>{outbreak.deaths}</span></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Check If You&apos;re Affected</h3>
                    <p className="text-slate-400 mb-4">If you got sick after eating any of these products, you may be part of a confirmed outbreak. This significantly strengthens your case.</p>
                    <Link href="/food-poisoning/calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium">Estimate Your Settlement <ArrowRight className="w-4 h-4" /></Link>
                </div>

                <div className="mt-12 text-center"><Link href="/food-poisoning/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="food-poisoning" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{FOOD_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
