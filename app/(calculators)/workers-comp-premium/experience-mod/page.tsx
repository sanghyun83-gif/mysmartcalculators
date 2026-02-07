import Link from "next/link";
import { SITE, EXPERIENCE_MODS, WCP_2026 } from "@/lib/calculators/workers-comp-premium";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, Shield } from "lucide-react";

export const metadata = { title: `Experience Mod | ${SITE.name}`, description: "Understanding experience modification rate." };

export default function ExperienceModPage() {
    const tips = [
        { tip: "Safety Programs", desc: "Implement comprehensive safety training and protocols" },
        { tip: "Return-to-Work", desc: "Bring injured workers back on light duty quickly" },
        { tip: "Claims Management", desc: "Report claims promptly and manage actively" },
        { tip: "Accident Investigation", desc: "Investigate all incidents to prevent recurrence" },
        { tip: "Pre-Employment Screening", desc: "Physical exams for high-risk positions" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/workers-comp-premium" className="flex items-center gap-2 hover:opacity-80"><Briefcase className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/workers-comp-premium" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Experience Mod</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Modification Rate</h1>
                    <p className="text-slate-400">How EMR affects your workers comp premium.</p>
                </div>

                <div className="space-y-4">
                    {EXPERIENCE_MODS.map((mod) => {
                        const savings = mod.multiplier < 1 ? `${Math.round((1 - mod.multiplier) * 100)}% savings` : mod.multiplier > 1 ? `${Math.round((mod.multiplier - 1) * 100)}% surcharge` : "Baseline";
                        const color = mod.multiplier < 1 ? "emerald" : mod.multiplier > 1 ? "red" : "blue";
                        return (
                            <div key={mod.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{mod.name}</h3></div>
                                <span className={`text-${color}-400 font-medium`}>{savings}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-300 mb-4">How to Lower Your EMR</h3>
                    <div className="space-y-3">
                        {tips.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-emerald-400 font-bold">{i + 1}.</span>
                                <div><span className="text-white font-medium">{item.tip}:</span> <span className="text-slate-400">{item.desc}</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/workers-comp-premium/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="workers-comp-premium" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{WCP_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
