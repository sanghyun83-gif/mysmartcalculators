import Link from "next/link";
import { SITE, PARKING_2026 } from "@/lib/calculators/parking-lot-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Car, ArrowLeft, ArrowRight, AlertTriangle, XCircle } from "lucide-react";

export const metadata = { title: `Common Parking Lot Hazards | ${SITE.name}`, description: "Dangerous parking lot conditions that cause accidents." };

export default function HazardsPage() {
    const hazards = [
        { title: "Poor Lighting", description: "Inadequate lighting makes it difficult for drivers to see pedestrians and for pedestrians to see vehicles. Property owners must maintain adequate lighting throughout the lot." },
        { title: "Potholes / Uneven Surfaces", description: "Potholes and cracked pavement cause trip-and-fall injuries and vehicle damage. Property owners must regularly inspect and repair surfaces." },
        { title: "Missing / Confusing Signage", description: "Lack of stop signs, directional arrows, speed limit signs, and pedestrian crossings leads to accidents. Confusing layouts increase collision risk." },
        { title: "Obstructed Sightlines", description: "Large vehicles, overgrown landscaping, and poorly placed structures block driver visibility. Property owners must ensure clear sightlines at intersections." },
        { title: "Inadequate Drainage", description: "Standing water creates slip hazards and conceals potholes. Ice formation in winter creates extreme danger." },
        { title: "No Speed Control", description: "Lack of speed bumps or traffic calming measures allows dangerous speeding. This is especially dangerous near store entrances." },
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
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Common Hazards</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Parking Lot Hazards</h1>
                    <p className="text-slate-400">Dangerous conditions that cause accidents.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-2">Property Owner Duty</h3>
                    <p className="text-slate-300">Property owners have a legal duty to maintain safe parking lots. Failure to address known hazards creates premises liability.</p>
                </div>

                <div className="space-y-4">
                    {hazards.map((hazard, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-start gap-4">
                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">{hazard.title}</h3>
                                <p className="text-slate-400 mt-1">{hazard.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center"><Link href="/parking-lot-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="parking-lot-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PARKING_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
