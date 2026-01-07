import Link from "next/link";
import { SITE, DAYCARE_2026 } from "@/lib/calculators/daycare-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Baby, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Daycare Negligence Types | ${SITE.name}`, description: "Understanding forms of daycare negligence and liability." };

export default function NegligencePage() {
    const negligenceTypes = [
        { title: "Abuse by Staff", description: "Physical, sexual, or emotional abuse by daycare employees. Creates liability for both the abuser and facility for negligent hiring/supervision.", severity: "Critical" },
        { title: "Inadequate Supervision", description: "Failure to properly watch children leading to accidents, falls, or injuries. Staff distracted by phones, understaffing, or inattention.", severity: "High" },
        { title: "Staff-to-Child Ratio Violations", description: "States require specific ratios (e.g., 1:4 for infants). Exceeding these ratios means children aren't properly supervised.", severity: "High" },
        { title: "Negligent Hiring", description: "Failure to conduct proper background checks on employees. Hiring people with prior convictions or disciplinary actions.", severity: "Critical" },
        { title: "Unsafe Premises", description: "Hazardous conditions including broken equipment, choking hazards, unsecured chemicals, or inadequate fencing.", severity: "Medium" },
        { title: "Improper Food Handling", description: "Failure to accommodate allergies, improper food storage, or serving age-inappropriate foods leading to choking or allergic reactions.", severity: "Medium" },
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/daycare-injury" className="flex items-center gap-2 hover:opacity-80"><Baby className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/daycare-injury" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Negligence Types</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Forms of Daycare Negligence</h1>
                    <p className="text-slate-400">Understanding how daycares can be held liable.</p>
                </div>

                <div className="space-y-4">
                    {negligenceTypes.map((item, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${item.severity === 'Critical' ? 'bg-red-500/20 text-red-400' : item.severity === 'High' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>{item.severity}</span>
                            </div>
                            <p className="text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center"><Link href="/daycare-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="daycare-injury" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{DAYCARE_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </div>
    );
}
