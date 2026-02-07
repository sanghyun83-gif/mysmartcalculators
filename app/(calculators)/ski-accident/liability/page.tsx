import Link from "next/link";
import { SITE, SKI_2026 } from "@/lib/calculators/ski-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Mountain, ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `When Ski Resorts Are Liable | ${SITE.name}`, description: "Understanding when ski resorts can be held liable for accidents." };

export default function LiabilityPage() {
    const liableCases = [
        { title: "Ski Lift Malfunctions", description: "Ski lifts are common carriers with highest safety standards. Mechanical failures, operator errors, and derailments create strong liability." },
        { title: "Unmarked Hazards", description: "Resorts must warn of known hazards like rocks, ice patches, or trail maintenance equipment. Failure to mark creates liability." },
        { title: "Negligent Trail Grooming", description: "If grooming equipment left dangerous conditions or the resort failed to maintain safe trails, they may be liable." },
        { title: "Equipment Rental Failures", description: "Rental shops must provide properly maintained equipment with correct binding settings. Failures create product liability claims." },
        { title: "Inadequate Ski Patrol Response", description: "Delayed or negligent emergency response that worsens injuries can create additional liability claims." },
    ];

    const notLiable = [
        { title: "Natural Snow Conditions", description: "Ice, powder, variable conditions are inherent risks of skiing that resorts generally cannot be held liable for." },
        { title: "Other Skier Collisions", description: "Unless the resort was negligent in crowd control, collisions with other skiers are typically that skier's responsibility." },
        { title: "Terrain Features", description: "Moguls, steep terrain, and natural obstacles are inherent risks that skiers assume when purchasing a lift ticket." },
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
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Mountain className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Resort Liability</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">When Ski Resorts Are Liable</h1>
                    <p className="text-slate-400">Understanding the difference between inherent risk and negligence.</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Resorts MAY Be Liable For:</h2>
                    <div className="space-y-4">
                        {liableCases.map((item, i) => (
                            <div key={i} className="bg-slate-800 border border-emerald-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle className="w-5 h-5" />Resorts Generally NOT Liable For:</h2>
                    <div className="space-y-4">
                        {notLiable.map((item, i) => (
                            <div key={i} className="bg-slate-800 border border-red-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/ski-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ski-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SKI_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
