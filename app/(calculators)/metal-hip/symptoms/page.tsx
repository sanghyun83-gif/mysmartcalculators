import Link from "next/link";
import { SITE, MOM_2026 } from "@/lib/calculators/metal-hip";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Metal Toxicity Symptoms | ${SITE.name}`, description: "Symptoms of cobalt and chromium poisoning from MoM hip implants." };

export default function SymptomsPage() {
    const symptoms = [
        { category: "Neurological", items: ["Memory problems", "Cognitive decline", "Hearing loss", "Vision changes", "Tinnitus (ringing in ears)", "Depression and mood changes"] },
        { category: "Cardiac", items: ["Cardiomyopathy", "Heart failure", "Irregular heartbeat", "Shortness of breath"] },
        { category: "Local (Hip)", items: ["Pain in groin/thigh", "Clicking or grinding", "Implant loosening", "Limited mobility", "Swelling"] },
        { category: "Systemic", items: ["Fatigue and weakness", "Thyroid dysfunction", "Skin rashes", "Nausea", "Weight loss"] },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/metal-hip" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Symptoms</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Metal Toxicity Symptoms</h1>
                    <p className="text-slate-400">Signs of cobalt and chromium poisoning from MoM hips.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {symptoms.map((group, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-4">{group.category}</h3>
                            <ul className="space-y-2">
                                {group.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2 text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-red-400 rounded-full" />{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">When to Get Tested</h3>
                    <p className="text-slate-300">If you have a metal-on-metal hip implant and experience any of these symptoms, request blood metal testing immediately. Cobalt levels above 7 ppb are concerning and may indicate implant failure.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/metal-hip/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="metal-hip" count={5} /></div></div></section>
        </>
    );
}
