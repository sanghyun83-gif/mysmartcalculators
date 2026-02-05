import Link from "next/link";
import { SITE, PARKING_2026 } from "@/lib/calculators/parking-lot-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Car, ArrowLeft, ArrowRight, Scale } from "lucide-react";

export const metadata = { title: `Parking Lot Liability | ${SITE.name}`, description: "Who is liable for parking lot accidents." };

export default function LiabilityPage() {
    const parties = [
        { title: "Negligent Driver", description: "Drivers who fail to yield, back up unsafely, or speed through parking lots are primarily liable. Pedestrians have the right of way." },
        { title: "Property Owner", description: "Property owners must maintain safe parking lots. Poor lighting, potholes, confusing lane markings, and obstructed sightlines create liability." },
        { title: "Property Management", description: "If a management company handles maintenance, they may share liability for failing to address known hazards." },
        { title: "Security Company", description: "If security was hired but failed to patrol or enforce safety rules, they may share liability." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/parking-lot-accident" className="flex items-center gap-2 hover:opacity-80"><Car className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/parking-lot-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Liability Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Who is Liable?</h1>
                    <p className="text-slate-400">Understanding parking lot accident liability.</p>
                </div>

                <div className="space-y-4">
                    {parties.map((party, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">{party.title}</h3>
                            <p className="text-slate-400">{party.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Comparative Fault</h3>
                    <p className="text-slate-400">In many states, multiple parties can share liability. Even if you were partially at fault, you may still recover compensation proportional to the other parties&apos; fault.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/parking-lot-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="parking-lot-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PARKING_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
