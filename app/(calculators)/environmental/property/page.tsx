import Link from "next/link";
import { SITE, ENVIRONMENTAL_2026, formatCurrency } from "@/lib/calculators/environmental";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { TreePine, ArrowLeft, ArrowRight, Home, DollarSign } from "lucide-react";

export const metadata = { title: `Property Damage from Contamination | ${SITE.name}`, description: "Guide to property damage claims from environmental contamination. Diminished value, remediation costs, relocation." };

export default function PropertyPage() {
    const damageTypes = [
        { name: "Diminished Property Value", range: "15-50% loss", description: "Contamination reduces market value even after cleanup. Buyers discount for stigma." },
        { name: "Remediation Costs", range: "$25,000-$500,000+", description: "Cleanup expenses including testing, removal, and monitoring." },
        { name: "Relocation Expenses", range: "$5,000-$50,000", description: "Temporary housing, moving costs, and inconvenience during cleanup." },
        { name: "Loss of Use", range: "Varies", description: "Compensation for time property was unusable due to contamination." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/environmental" className="flex items-center gap-2 hover:opacity-80"><TreePine className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/environmental" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Home className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Property Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Property Damage Claims</h1>
                    <p className="text-slate-400">Compensation for environmental contamination of your property.</p>
                </div>
                <div className="space-y-4">
                    {damageTypes.map((type, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div><h3 className="text-white font-semibold">{type.name}</h3><p className="text-slate-400 text-sm mt-1">{type.description}</p></div>
                            <div className="flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-lg"><DollarSign className="w-4 h-4 text-amber-400" /><span className="text-amber-300 font-semibold">{type.range}</span></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Proving Property Damage</h3>
                    <ul className="text-slate-400 space-y-2 text-sm">
                        <li>??Environmental testing showing contamination levels</li>
                        <li>??Before/after property appraisals</li>
                        <li>??Remediation cost estimates from contractors</li>
                        <li>??Documentation of the source of contamination</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/environmental/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Your Claim<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="environmental" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ENVIRONMENTAL_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
