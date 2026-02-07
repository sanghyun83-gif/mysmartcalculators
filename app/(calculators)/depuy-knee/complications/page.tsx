import Link from "next/link";
import { SITE, INJURY_TYPES, DEPUY_KNEE_2026 } from "@/lib/calculators/depuy-knee";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `DePuy Knee Complications | ${SITE.name}`, description: "Known DePuy knee implant complications." };

export default function ComplicationsPage() {
    const complications = [
        { name: "Tibial Loosening", description: "The tibial component separates from the shin bone. Most common problem with Attune knee. Causes pain, instability, and requires revision surgery." },
        { name: "Aseptic Loosening", description: "Implant loosens without infection. The cement-bone interface fails, causing the implant to become unstable." },
        { name: "Chronic Pain", description: "Persistent knee pain that doesn't resolve after the expected recovery period. May indicate implant failure." },
        { name: "Instability", description: "Knee feels unstable or gives way during activities. May be caused by loosening or improper implant positioning." },
        { name: "Polyethylene Wear", description: "Plastic insert between metal components wears down, creating debris that causes inflammation and bone loss." },
        { name: "Bone Loss (Osteolysis)", description: "Bone around the implant dissolves due to inflammatory reaction to wear debris." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Complications</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">DePuy Knee Complications</h1>
                    <p className="text-slate-400">Known issues with DePuy knee implants.</p>
                </div>
                <div className="space-y-6">
                    {complications.map((comp, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-2">{comp.name}</h3>
                            <p className="text-slate-400">{comp.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Compensation by Injury</h3>
                    <div className="space-y-2">
                        {INJURY_TYPES.slice(0, 3).map((injury, i) => (
                            <div key={i} className="flex justify-between"><span className="text-slate-300">{injury.name}</span><span className="text-purple-400 font-semibold">${(injury.avgSettlement / 1000).toFixed(0)}K avg</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/depuy-knee/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="depuy-knee" count={5} /></div></div></section>

        </>
    );
}
