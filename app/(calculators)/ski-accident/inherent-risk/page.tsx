import Link from "next/link";
import { SITE, SKI_2026 } from "@/lib/calculators/ski-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Mountain, ArrowLeft, ArrowRight, AlertTriangle, Scale } from "lucide-react";

export const metadata = { title: `Inherent Risk Doctrine | ${SITE.name}`, description: "Understanding the inherent risk doctrine and ski resort waivers." };

export default function InherentRiskPage() {
    const inherentRisks = [
        "Changing weather and snow conditions",
        "Ice, powder, and variable terrain",
        "Moguls and natural terrain features",
        "Variations in steepness and difficulty",
        "Collisions with other skiers",
        "Trees, rocks, and lift towers",
    ];

    const exceptions = [
        { title: "Gross Negligence", description: "Waivers cannot protect resorts from gross negligence - extreme departures from reasonable care." },
        { title: "Willful Misconduct", description: "Intentional wrongful acts or reckless disregard for safety are not covered by waivers." },
        { title: "Ski Lift Operations", description: "Many states hold that ski lifts are common carriers, subject to higher safety standards that cannot be waived." },
        { title: "Equipment Defects", description: "Product liability for defective rental equipment generally cannot be waived in advance." },
        { title: "Statutory Duties", description: "Duties imposed by Ski Safety Acts (like marking hazards) may not be waivable." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/ski-accident" className="flex items-center gap-2 hover:opacity-80"><Mountain className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/ski-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Legal Doctrine</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Inherent Risk Doctrine</h1>
                    <p className="text-slate-400">Understanding liability waivers and their limitations.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">What is Inherent Risk?</h2>
                    <p className="text-slate-300 mb-4">The inherent risk doctrine holds that skiers assume certain risks that are fundamental and unavoidable in skiing. Most states have Ski Area Safety Acts that codify this principle.</p>
                    <p className="text-slate-300">When you buy a lift ticket, you generally agree to accept these inherent risks. However, this does NOT mean resorts have no liability.</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-2"><AlertTriangle className="w-5 h-5" />Inherent Risks You Accept:</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <div className="grid md:grid-cols-2 gap-3">
                            {inherentRisks.map((risk, i) => (
                                <div key={i} className="flex items-center gap-2"><span className="text-amber-400"></span><span className="text-slate-300">{risk}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-emerald-400 mb-6">Exceptions - When Waivers Don&apos;t Apply:</h2>
                    <div className="space-y-4">
                        {exceptions.map((item, i) => (
                            <div key={i} className="bg-slate-800 border border-emerald-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/ski-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ski-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SKI_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
