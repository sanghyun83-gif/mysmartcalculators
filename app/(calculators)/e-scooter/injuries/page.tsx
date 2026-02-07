import Link from "next/link";
import { SITE, INJURY_TYPES, ESCOOTER_2026, formatCurrency } from "@/lib/calculators/e-scooter";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Zap, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Common E-Scooter Injuries | ${SITE.name}`, description: "Types of injuries from e-scooter accidents and their severity." };

const injuryDetails = [
    { type: "Traumatic Brain Injury (TBI)", rate: "30%", description: "Most serious e-scooter injury. Often caused by falls without helmets. Can result in permanent cognitive impairment, memory loss, and personality changes.", prevention: "Helmet use reduces TBI risk by 60%" },
    { type: "Facial Trauma", rate: "35%", description: "Broken nose, fractured orbital bones, dental injuries, and facial lacerations. E-scooter riders tend to fall forward, hitting face first.", prevention: "Full-face helmets provide best protection" },
    { type: "Fractures", rate: "40%", description: "Wrist fractures (Colles fracture) are most common as riders instinctively extend arms during falls. Arm and leg fractures also frequent.", prevention: "Wrist guards can help protect against breaks" },
    { type: "Soft Tissue", rate: "65%", description: "Sprains, strains, contusions, and road rash. While less severe, these injuries can require weeks of recovery and leave permanent scarring.", prevention: "Protective clothing reduces road rash severity" },
];

export default function InjuriesPage() {
    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/e-scooter" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Injury Types</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common E-Scooter Injuries</h1>
                    <p className="text-slate-400">Understanding injury patterns and severity.</p>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-8">
                    <div className="grid grid-cols-2 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-amber-400">{ESCOOTER_2026.statistics.injuries}</p><p className="text-sm text-slate-400 mt-1">Annual ER Visits</p></div>
                        <div><p className="text-3xl font-bold text-red-400">Only 4% Wear Helmets</p><p className="text-sm text-slate-400 mt-1">Of Injured Riders</p></div>
                    </div>
                </div>

                <div className="space-y-6">
                    {injuryDetails.map((injury, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white">{injury.type}</h3>
                                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">{injury.rate} of cases</span>
                            </div>
                            <p className="text-slate-400 mb-4">{injury.description}</p>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3"><p className="text-sm text-emerald-300"><strong>Prevention:</strong> {injury.prevention}</p></div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Settlement Values by Injury</h3>
                    <div className="space-y-3">
                        {INJURY_TYPES.map((injury) => (
                            <div key={injury.id} className="flex justify-between py-2 border-b border-slate-700">
                                <span className="text-slate-300">{injury.name}</span>
                                <span className="text-amber-400 font-semibold">{formatCurrency(injury.avgSettlement)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/e-scooter/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="e-scooter" count={5} /></div></div></section>

        </>
    );
}
