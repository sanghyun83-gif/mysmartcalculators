import Link from "next/link";
import { SITE, INJURY_TYPES, DEPUY_2026 } from "@/lib/calculators/depuy-hip";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `DePuy Hip Complications | ${SITE.name}`, description: "Known DePuy hip implant complications." };

export default function ComplicationsPage() {
    const complications = [
        { name: "Metallosis", description: "Cobalt and chromium particles shed from metal-on-metal implants enter bloodstream and tissue. Causes tissue death, pain, and systemic poisoning." },
        { name: "Pseudotumor", description: "Inflammatory mass forms near the implant in response to metal debris. Not cancerous but causes significant tissue damage." },
        { name: "Osteolysis", description: "Bone dissolves around the implant due to inflammatory reaction. Leads to implant loosening and failure." },
        { name: "Implant Loosening", description: "Implant becomes unstable and separates from bone. Causes severe pain and requires revision surgery." },
        { name: "Chronic Pain", description: "Persistent hip pain that doesn't resolve. May be accompanied by clicking, grinding, or limited mobility." },
        { name: "Metal Toxicity", description: "Elevated cobalt/chromium in blood causes neurological symptoms, heart problems, thyroid dysfunction, and vision/hearing issues." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Complications</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">DePuy Hip Complications</h1>
                    <p className="text-slate-400">Known injuries from DePuy hip implants.</p>
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
                <div className="mt-12 text-center"><Link href="/depuy-hip/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="depuy-hip" count={5} /></div></div></section>

        </>
    );
}
