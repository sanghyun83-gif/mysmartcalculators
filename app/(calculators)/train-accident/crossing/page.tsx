import Link from "next/link";
import { SITE, TRAIN_2026 } from "@/lib/calculators/train-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Train, ArrowLeft, ArrowRight, AlertTriangle, Car } from "lucide-react";

export const metadata = { title: `Rail Crossing Accidents | ${SITE.name}`, description: "Understanding railroad crossing accident claims." };

export default function CrossingPage() {
    const crossingFacts = [
        { stat: "2,100+", label: "Crossing Accidents/Year" },
        { stat: "230+", label: "Deaths at Crossings/Year" },
        { stat: "45%", label: "No Active Warning Devices" },
        { stat: "95%", label: "Caused by Driver Error" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/train-accident" className="flex items-center gap-2 hover:opacity-80"><Train className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/train-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Car className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Crossing Accidents</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Rail Crossing Accidents</h1>
                    <p className="text-slate-400">Understanding grade crossing accident claims.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {crossingFacts.map((fact, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold text-amber-400">{fact.stat}</p>
                            <p className="text-xs text-slate-400 mt-1">{fact.label}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">When Railroads Are Liable</h3>
                    <p className="text-slate-400 mb-4">Even though most crossing accidents involve driver error, railroads can be liable for:</p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300"><strong>Signal Failure:</strong> Malfunctioning gates, lights, or bells that fail to warn of approaching trains.</p></div>
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300"><strong>Inadequate Warnings:</strong> Crossings without proper signs, signals, or visibility.</p></div>
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300"><strong>Sight-Line Obstructions:</strong> Vegetation, structures, or equipment blocking view of tracks.</p></div>
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300"><strong>Excessive Speed:</strong> Trains traveling faster than safe for the crossing conditions.</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Types of Crossing Accidents</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Vehicle Strike</span><span className="text-slate-400">Car/truck hit by train</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Pedestrian Strike</span><span className="text-slate-400">Person crossing tracks</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Stalled Vehicle</span><span className="text-slate-400">Car stuck on tracks</span></div>
                        <div className="flex justify-between py-2"><span className="text-slate-300">Gate Failure</span><span className="text-slate-400">Defective warning systems</span></div>
                    </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Typical Crossing Accident Settlements</h3>
                    <p className="text-slate-300 mb-4">When railroad negligence is proven, crossing accident settlements typically range:</p>
                    <ul className="text-slate-300 space-y-2">
                        <li>• <strong>Serious Injury:</strong> $500,000 - $2,000,000</li>
                        <li>• <strong>Wrongful Death:</strong> $1,000,000 - $5,000,000+</li>
                        <li>• <strong>Multiple Fatalities:</strong> Multi-million dollar settlements</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/train-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="train-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TRAIN_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
