import Link from "next/link";
import { SITE, DEFENDANTS, PFAS_2026, formatCurrency } from "@/lib/calculators/pfas";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Flame, ArrowLeft, ArrowRight, Building } from "lucide-react";

export const metadata = { title: `PFAS Defendant Companies | ${SITE.name}`, description: "PFAS lawsuit defendants: 3M, DuPont, Chemours, Tyco. Settlement status and litigation updates." };

export default function ManufacturersPage() {
    const companies = [
        { name: "3M Company", product: "Scotchgard, AFFF foam", settlement: "$10.3B (water systems)", status: "Individual claims ongoing", note: "Largest PFAS manufacturer; exiting PFAS production by 2025" },
        { name: "DuPont/Chemours", product: "Teflon, C8/PFOA", settlement: "Multiple settlements", status: "Active MDL litigation", note: "Spin-off Chemours handling legacy liabilities" },
        { name: "Tyco Fire Products", product: "AFFF firefighting foam", settlement: "Pending", status: "Active litigation", note: "Major AFFF supplier to military and airports" },
        { name: "Kidde-Fenwal", product: "Fire suppression systems", settlement: "Pending", status: "Active litigation", note: "Industrial fire suppression manufacturer" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/pfas" className="flex items-center gap-2 hover:opacity-80"><Flame className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/pfas" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Building className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Defendants</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">PFAS Defendant Companies</h1>
                    <p className="text-slate-400">Major manufacturers being sued in {PFAS_2026.statistics.mdlNumber}.</p>
                </div>

                <div className="space-y-6">
                    {companies.map((company, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h2 className="text-xl font-bold text-amber-400">{company.name}</h2>
                                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded">{company.status}</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className="text-slate-300"><span className="text-slate-500">Products:</span> {company.product}</p>
                                <p className="text-slate-300"><span className="text-slate-500">Settlement:</span> {company.settlement}</p>
                                <p className="text-slate-400 italic">{company.note}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">3M Water System Settlement</h3>
                    <p className="text-slate-300 text-sm">In June 2023, 3M agreed to pay $10.3 billion over 13 years to help public water systems test for and treat PFAS contamination. This settlement does NOT cover individual personal injury claims, which continue in MDL 2873.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/pfas/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="pfas" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PFAS_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
