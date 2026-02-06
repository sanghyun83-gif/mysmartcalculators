import Link from "next/link";
import { SITE, WATER_CONTAMINATION_2026, formatCurrency } from "@/lib/calculators/water-contamination";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, Shield, CheckCircle } from "lucide-react";

export const metadata = { title: `Camp Lejeune Water Contamination Claims | ${SITE.name}`, description: "Camp Lejeune water contamination lawsuits. Military base, 1953-1987 exposure, PACT Act, compensation." };

export default function CampLejeunePage() {
    const conditions = [
        "Bladder cancer", "Kidney cancer", "Breast cancer", "Lung cancer", "Leukemia",
        "Non-Hodgkin lymphoma", "Multiple myeloma", "Parkinson's disease",
        "Liver cancer", "Hepatic steatosis", "Aplastic anemia", "Renal toxicity"
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/water-contamination" className="flex items-center gap-2 hover:opacity-80"><Droplets className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/water-contamination" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Military Base</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Camp Lejeune Water Contamination</h1>
                    <p className="text-slate-400">{(WATER_CONTAMINATION_2026.statistics.campLejeunePlaintiffs / 1000).toFixed(0)}K+ Claims Filed Under Camp Lejeune Justice Act</p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Camp Lejeune Justice Act (2022)</h3>
                    <p className="text-slate-300 text-sm">The PACT Act allows veterans, family members, and civilian workers who lived or worked at Camp Lejeune, NC for at least 30 days between August 1953 and December 1987 to file claims for compensation against the federal government.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Qualifying Conditions</h2>
                    <div className="grid md:grid-cols-3 gap-2">
                        {conditions.map((condition, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{condition}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Who Qualifies?</h2>
                    <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>Marines and military personnel (30+ days, 1953-1987)</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>Spouses and children who lived on base</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>Civilian employees and contractors</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>Reservists who trained at Camp Lejeune</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>Estate of deceased victims (wrongful death claims)</li>
                    </ul>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Settlement Estimates</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4"><p className="text-sm text-slate-400">Tier 1 (Death/Cancer)</p><p className="text-xl font-bold text-amber-400">$450,000+</p></div>
                        <div className="bg-slate-700/50 rounded-lg p-4"><p className="text-sm text-slate-400">Tier 2 (Serious Injury)</p><p className="text-xl font-bold text-amber-400">$250,000+</p></div>
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/water-contamination/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="water-contamination" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{WATER_CONTAMINATION_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
