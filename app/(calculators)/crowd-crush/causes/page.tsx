import Link from "next/link";
import { SITE, CRUSH_2026 } from "@/lib/calculators/crowd-crush";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Crowd Crush Causes | ${SITE.name}`, description: "Understanding what causes crowd crush disasters." };

export default function CausesPage() {
    const causes = [
        { title: "Excessive Density", description: "When crowd density exceeds 4-5 people per square meter, movement becomes impossible. At 6+ people/m², crowd crush becomes likely. Proper capacity limits and monitoring are essential." },
        { title: "Poor Venue Design", description: "Dead ends, narrowing pathways, and insufficient exits create fatal bottlenecks. The Itaewon disaster occurred in a narrow downhill alley with no escape routes." },
        { title: "Inadequate Crowd Management", description: "Failure to monitor crowd density, control entry points, and respond to warning signs. Professional crowd management can prevent disasters." },
        { title: "Force Imbalance", description: "When crowd pressure from one direction isn't balanced, progressive crowd collapse occurs. People fall like dominoes and cannot get up." },
        { title: "Communication Failures", description: "Inability to communicate with the crowd about dangers, exits, or need to stop movement. Sound systems and trained staff are critical." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Users className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Crush Causes</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">What Causes Crowd Crush?</h1>
                    <p className="text-slate-400">Understanding the factors behind crowd disasters.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8 flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-red-300 mb-2">Critical Understanding</h3>
                        <p className="text-slate-300">Most crowd crush victims don&apos;t die from trampling. They die from compressive asphyxia - being squeezed so tightly they cannot expand their chest to breathe.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {causes.map((cause, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">{cause.title}</h3>
                            <p className="text-slate-400">{cause.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Crowd Density Levels</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-slate-700"><span className="text-slate-300">Safe (2-3/m²)</span><span className="text-emerald-400 font-medium">Normal movement</span></div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700"><span className="text-slate-300">Critical (4/m²)</span><span className="text-yellow-400 font-medium">Movement difficult</span></div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-700"><span className="text-slate-300">Dangerous (5/m²)</span><span className="text-orange-400 font-medium">Crush likely</span></div>
                        <div className="flex justify-between items-center py-2"><span className="text-slate-300">Fatal (6+/m²)</span><span className="text-red-400 font-medium">Deaths expected</span></div>
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/crowd-crush/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="crowd-crush" count={5} /></div></div></section>

        </>
    );
}
