import Link from "next/link";
import { SITE, WATER_CONTAMINATION_2026, formatCurrency } from "@/lib/calculators/water-contamination";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `PFAS Forever Chemicals Lawsuits | ${SITE.name}`, description: "PFAS water contamination lawsuits. Forever chemicals, MDL 2873, health effects, compensation." };

export default function PFASPage() {
    const healthEffects = [
        "Kidney cancer", "Testicular cancer", "Thyroid disease", "Ulcerative colitis",
        "High cholesterol", "Pregnancy complications", "Liver damage", "Immune suppression"
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
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Active MDL</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">PFAS &quot;Forever Chemicals&quot; Lawsuits</h1>
                    <p className="text-slate-400">{WATER_CONTAMINATION_2026.statistics.pfasMDL} ??{(WATER_CONTAMINATION_2026.statistics.pfasAffectedPeople / 1000000).toFixed(0)}M+ Americans Exposed</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">What Are PFAS?</h3>
                    <p className="text-slate-300 text-sm">Per- and polyfluoroalkyl substances (PFAS) are synthetic chemicals used in firefighting foam, nonstick cookware, waterproof clothing, and food packaging. Called &quot;forever chemicals&quot; because they don&apos;t break down in the environment or human body.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Health Effects Linked to PFAS</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {healthEffects.map((effect, i) => (
                            <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-400 rounded-full" /><span className="text-slate-300">{effect}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">PFAS MDL Status ({SITE.year})</h2>
                    <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>3M settled for $10.3 billion (public water systems)</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>DuPont/Chemours facing thousands of claims</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>Individual cancer claims proceeding to trial</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400">??/span>State AG lawsuits ongoing nationwide</li>
                    </ul>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Who Can File a PFAS Lawsuit?</h2>
                    <ul className="space-y-2 text-slate-300">
                        <li>??Residents near contaminated water sources</li>
                        <li>??People diagnosed with PFAS-linked cancers or diseases</li>
                        <li>??Firefighters exposed to AFFF foam</li>
                        <li>??Military personnel at bases with contamination</li>
                        <li>??Workers at PFAS manufacturing facilities</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/water-contamination/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="water-contamination" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{WATER_CONTAMINATION_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
