import Link from "next/link";
import { SITE, PARKING_2026 } from "@/lib/calculators/parking-lot-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Car, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Parking Lot Accident Claims Guide | ${SITE.name}`, description: "How to file a parking lot accident lawsuit claim." };

export default function GuidePage() {
    const steps = [
        { title: "Call 911 for Injuries", description: "Call 911 for any injuries. Even minor parking lot accidents should have a police report filed. This documents the scene officially." },
        { title: "Document the Scene", description: "Take photos and videos of vehicles, damage, the parking lot conditions, lighting, potholes, and any obstructed sightlines. Get photos before anything moves." },
        { title: "Request Security Footage", description: "Most parking lots have security cameras. Request footage preservation from the property owner in writing immediately - footage is often deleted within days." },
        { title: "Get Witness Information", description: "Collect contact information from other witnesses. Note who the property owner is and get security/management contact information." },
        { title: "Consult Premises Attorney", description: "Parking lot cases can involve multiple liable parties. An experienced attorney can identify all defendants and preserve critical evidence." },
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
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Parking Lot Accident Claims Guide</h1>
                    <p className="text-slate-400">How to file a parking lot accident lawsuit.</p>
                </div>
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center"><span className="text-amber-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Key Evidence</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Police report", "Security footage", "Scene photos", "Witness contacts", "Property condition", "Lighting status"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/parking-lot-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="parking-lot-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PARKING_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
