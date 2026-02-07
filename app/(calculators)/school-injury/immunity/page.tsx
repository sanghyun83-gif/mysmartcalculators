import Link from "next/link";
import { SITE, SCHOOL_2026 } from "@/lib/calculators/school-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { School, ArrowLeft, ArrowRight, Shield, XCircle, CheckCircle } from "lucide-react";

export const metadata = { title: `Government Immunity for Schools | ${SITE.name}`, description: "Understanding sovereign immunity in school injury lawsuits." };

export default function ImmunityPage() {
    const immunityLimits = [
        { title: "Damage Caps", description: "Most states cap damages against public schools (e.g., $100K-$500K per incident). This limits total recovery regardless of injury severity.", impact: "High" },
        { title: "Notice Requirements", description: "You must file a formal tort claims notice within 60-180 days. Missing this deadline completely bars your lawsuit.", impact: "Critical" },
        { title: "Discretionary Function", description: "Schools may be immune for decisions involving judgment (curriculum, discipline). But not immune for negligent implementation.", impact: "Medium" },
        { title: "Proprietary Activities", description: "Activities for profit (renting facilities) may not be protected by immunity. These claims face fewer restrictions.", impact: "Low" },
    ];

    const exceptions = [
        "Ministerial duties (following established rules)",
        "Dangerous conditions on premises",
        "Negligent supervision of students",
        "Motor vehicle accidents (school buses)",
        "Willful or wanton misconduct",
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/school-injury" className="flex items-center gap-2 hover:opacity-80"><School className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/school-injury" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Government Immunity</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Government Immunity for Schools</h1>
                    <p className="text-slate-400">Understanding sovereign immunity in school lawsuits.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">What is Sovereign Immunity?</h2>
                    <p className="text-slate-300 mb-4">Public schools are government entities protected by sovereign immunity. However, most states have waived immunity to some extent through Tort Claims Acts.</p>
                    <p className="text-slate-300">These acts allow lawsuits but impose strict procedural requirements and damage caps that significantly affect your claim.</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle className="w-5 h-5" />Immunity Limitations:</h2>
                    <div className="space-y-4">
                        {immunityLimits.map((item, i) => (
                            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <span className={`text-xs px-2 py-1 rounded ${item.impact === 'Critical' ? 'bg-red-500/20 text-red-400' : item.impact === 'High' ? 'bg-amber-500/20 text-amber-400' : item.impact === 'Medium' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>{item.impact}</span>
                                </div>
                                <p className="text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Exceptions - When Immunity Doesn&apos;t Apply:</h2>
                    <div className="space-y-2">
                        {exceptions.map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/school-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="school-injury" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SCHOOL_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
