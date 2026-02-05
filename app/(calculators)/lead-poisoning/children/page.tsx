import Link from "next/link";
import { SITE, AGE_GROUPS, SEVERITY_LEVELS, LEAD_POISONING_2026, formatCurrency } from "@/lib/calculators/lead-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, Heart, AlertTriangle } from "lucide-react";

export const metadata = { title: `Children & Lead Poisoning | ${SITE.name}`, description: "Lead poisoning in children: effects, symptoms, blood levels, and compensation." };

export default function ChildrenPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/lead-poisoning" className="flex items-center gap-2 hover:opacity-80"><Droplets className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/lead-poisoning" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Heart className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Children&apos;s Health</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Children & Lead Poisoning</h1>
                    <p className="text-slate-400">Why children are most vulnerable and what parents need to know.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <div className="flex items-center gap-3 mb-3"><AlertTriangle className="w-6 h-6 text-red-400" /><h3 className="text-lg font-semibold text-red-300">Critical Statistics</h3></div>
                    <div className="grid md:grid-cols-2 gap-4 text-center">
                        <div className="bg-slate-800/50 rounded-lg p-4"><p className="text-3xl font-bold text-red-400">{(LEAD_POISONING_2026.statistics.childrenAffected / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400">Children with elevated blood lead</p></div>
                        <div className="bg-slate-800/50 rounded-lg p-4"><p className="text-3xl font-bold text-amber-400">{LEAD_POISONING_2026.statistics.safeBloodLevel} µg/dL</p><p className="text-sm text-slate-400">CDC reference value</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Why Children Are Most Vulnerable</h2>
                    <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-purple-400">•</span>Hand-to-mouth behavior brings lead dust into body</li>
                        <li className="flex items-start gap-2"><span className="text-purple-400">•</span>Developing brains are more susceptible to damage</li>
                        <li className="flex items-start gap-2"><span className="text-purple-400">•</span>Higher absorption rate than adults (50% vs 10%)</li>
                        <li className="flex items-start gap-2"><span className="text-purple-400">•</span>Lower body weight means higher concentration</li>
                    </ul>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Blood Lead Levels & Effects</h2>
                    <div className="space-y-3">
                        {SEVERITY_LEVELS.map((level) => (
                            <div key={level.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <div><h3 className="text-white font-medium">{level.name}</h3><p className="text-sm text-slate-400">{level.description}</p></div>
                                <span className="text-purple-400 text-sm">{level.multiplier}x multiplier</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Damages for Child Lead Poisoning</h2>
                    <ul className="space-y-2 text-slate-300">
                        <li>• Special education costs (often $100,000+)</li>
                        <li>• Lifetime reduced earning capacity</li>
                        <li>• Ongoing medical monitoring and treatment</li>
                        <li>• Therapy for behavioral issues</li>
                        <li>• Pain and suffering for child and parents</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/lead-poisoning/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="lead-poisoning" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{LEAD_POISONING_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
