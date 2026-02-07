import Link from "next/link";
import { SITE, PATHOGEN_TYPES, FOOD_2026, formatCurrency } from "@/lib/calculators/food-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Bug, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Foodborne Pathogen Types | ${SITE.name}`, description: "Understanding E.coli, Salmonella, Listeria and other foodborne pathogens." };

export default function PathogensPage() {
    const pathogenInfo = [
        { name: "E. coli O157:H7", description: "Most dangerous E. coli strain. Can cause Hemolytic Uremic Syndrome (HUS), leading to kidney failure. Common sources: undercooked beef, raw milk, contaminated produce.", complications: "HUS, kidney failure, TTP", settlements: "$400,000+ average" },
        { name: "Salmonella", description: "Most common cause of food poisoning. Can cause reactive arthritis lasting months or years. Sources: poultry, eggs, raw produce.", complications: "Reactive arthritis, bacteremia", settlements: "$150,000 average" },
        { name: "Listeria monocytogenes", description: "High mortality rate, especially dangerous for pregnant women, elderly, and immunocompromised. Sources: deli meats, soft cheeses, unpasteurized dairy.", complications: "Meningitis, miscarriage", settlements: "$500,000+ average" },
        { name: "Campylobacter", description: "Can trigger Guillain-Barré Syndrome (GBS), causing paralysis. Sources: undercooked poultry, unpasteurized milk.", complications: "GBS, temporary paralysis", settlements: "$180,000 average" },
        { name: "Norovirus", description: "Most common cause of foodborne illness outbreaks. Usually resolves quickly but very contagious. Common on cruise ships and buffets.", complications: "Severe dehydration", settlements: "$50,000 average" },
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
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Bug className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Pathogen Types</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Foodborne Pathogen Types</h1>
                    <p className="text-slate-400">Understanding different pathogens and their complications.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8 flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-red-300 mb-2">Severity Matters</h3>
                        <p className="text-slate-300">The type of pathogen and resulting complications significantly impact settlement value. E.coli O157:H7 and Listeria cases with organ damage have the highest values.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {pathogenInfo.map((pathogen, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{pathogen.name}</h3>
                                <span className="text-amber-400 font-medium text-sm">{pathogen.settlements}</span>
                            </div>
                            <p className="text-slate-400 mb-3">{pathogen.description}</p>
                            <div className="text-sm"><span className="text-red-400 font-medium">Complications:</span> <span className="text-slate-300">{pathogen.complications}</span></div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center"><Link href="/food-poisoning/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="food-poisoning" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{FOOD_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
