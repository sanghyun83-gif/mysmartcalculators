import Link from "next/link";
import { SITE, MAJOR_MDL_CASES, TOXIC_TORT_2026 } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Scale, ArrowLeft, ArrowRight, Gavel } from "lucide-react";

export const metadata = { title: `Active Toxic Tort MDL Cases | ${SITE.name}`, description: "Current mass tort litigation for toxic exposure claims. PFAS, Camp Lejeune, Paraquat, Roundup MDL cases." };

export default function MdlPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/toxic-tort" className="flex items-center gap-2 hover:opacity-80"><Scale className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/toxic-tort" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Gavel className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Mass Tort Litigation</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Active MDL Cases</h1>
                    <p className="text-slate-400">Current multidistrict litigation for toxic exposure claims.</p>
                </div>
                <div className="space-y-4">
                    {MAJOR_MDL_CASES.map((mdl, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-bold text-white">{mdl.name}</h2>
                                    <p className="text-slate-400 text-sm mt-1">{mdl.mdl}</p>
                                    <p className="text-slate-500 text-sm">Defendants: {mdl.defendants}</p>
                                </div>
                                <span className={`text-sm px-4 py-2 rounded-full ${mdl.status === 'Active' ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}`}>{mdl.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">What is an MDL?</h3>
                    <p className="text-slate-400 text-sm">Multidistrict Litigation (MDL) consolidates similar federal cases before one judge for pretrial proceedings. This improves efficiency while preserving each plaintiff&apos;s individual claim. MDL cases often result in global settlements or bellwether trial verdicts that influence all related claims.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TOXIC_TORT_2026.citations[4]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
