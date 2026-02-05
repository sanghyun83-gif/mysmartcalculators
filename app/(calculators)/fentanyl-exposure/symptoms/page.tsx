import Link from "next/link";
import { SITE, FENTANYL_2026 } from "@/lib/calculators/fentanyl-exposure";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Fentanyl Exposure Symptoms | ${SITE.name}`, description: "Fentanyl exposure symptoms and signs." };

export default function SymptomsPage() {
    const symptoms = [
        { name: "Respiratory Depression", severity: "SEVERE", description: "Slow, shallow, or stopped breathing. Most dangerous symptom requiring immediate Narcan." },
        { name: "Altered Consciousness", severity: "SEVERE", description: "Confusion, disorientation, loss of consciousness, or unresponsiveness." },
        { name: "Pinpoint Pupils", severity: "Moderate", description: "Extremely constricted pupils (miosis) that don't respond to light changes." },
        { name: "Drowsiness/Sedation", severity: "Moderate", description: "Extreme sleepiness, difficulty staying awake, nodding off." },
        { name: "Nausea/Vomiting", severity: "Moderate", description: "Stomach upset, vomiting, which can be dangerous if unconscious." },
        { name: "Muscle Weakness", severity: "Moderate", description: "Limp body, inability to stand or walk, loss of coordination." },
        { name: "Dizziness", severity: "Mild", description: "Lightheadedness, vertigo, feeling unsteady." },
        { name: "Skin Changes", severity: "Mild", description: "Cold, clammy skin, bluish lips or fingernails (cyanosis)." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/fentanyl-exposure" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/fentanyl-exposure" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Symptoms</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Fentanyl Exposure Symptoms</h1>
                    <p className="text-slate-400">Warning signs of fentanyl exposure.</p>
                </div>
                <div className="space-y-4">
                    {symptoms.map((symptom, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{symptom.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${symptom.severity === 'SEVERE' ? 'bg-red-500/20 text-red-400' : symptom.severity === 'Moderate' ? 'bg-amber-500/20 text-amber-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{symptom.severity}</span>
                            </div>
                            <p className="text-slate-400 text-sm">{symptom.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/30 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Emergency Response</h3>
                    <p className="text-slate-300 mb-4">If fentanyl exposure is suspected:</p>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300">
                        <li>Call 911 immediately</li>
                        <li>Administer Narcan (naloxone) if available</li>
                        <li>Move to fresh air if inhalation suspected</li>
                        <li>Begin rescue breathing if not breathing</li>
                    </ol>
                </div>
                <div className="mt-12 text-center"><Link href="/fentanyl-exposure/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="fentanyl-exposure" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{FENTANYL_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
