import Link from "next/link";
import { SITE, ACCUTANE_2026 } from "@/lib/calculators/accutane";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Accutane Side Effects | ${SITE.name}`, description: "Known Accutane side effects and complications." };

export default function SideEffectsPage() {
    const sideEffects = [
        { name: "Inflammatory Bowel Disease (IBD)", severity: "SEVERE", description: "Crohn's disease and ulcerative colitis developing during or after Accutane treatment." },
        { name: "Depression / Suicidal Thoughts", severity: "SEVERE", description: "Psychiatric effects including depression, mood changes, and suicidal ideation." },
        { name: "Birth Defects", severity: "SEVERE", description: "Severe birth defects if taken during pregnancy, including heart and brain abnormalities." },
        { name: "Liver Damage", severity: "Moderate", description: "Elevated liver enzymes and potential liver toxicity requiring monitoring." },
        { name: "Vision Problems", severity: "Moderate", description: "Dry eyes, night blindness, and other visual disturbances." },
        { name: "Joint/Muscle Pain", severity: "Common", description: "Myalgia, arthralgia, and decreased bone density." },
        { name: "Severe Dry Skin", severity: "Common", description: "Extreme dryness of skin, lips, and mucous membranes." },
        { name: "Hair Thinning", severity: "Common", description: "Temporary hair loss or thinning during treatment." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/accutane" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Side Effects</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Accutane Side Effects</h1>
                    <p className="text-slate-400">Known complications from Accutane/isotretinoin.</p>
                </div>
                <div className="space-y-4">
                    {sideEffects.map((effect, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{effect.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${effect.severity === 'SEVERE' ? 'bg-red-500/20 text-red-400' : effect.severity === 'Moderate' ? 'bg-amber-500/20 text-amber-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{effect.severity}</span>
                            </div>
                            <p className="text-slate-400 text-sm">{effect.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">FDA Black Box Warnings</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li> Pregnancy: MUST NOT take if pregnant - severe birth defects</li>
                        <li> Depression: May cause depression and suicidal thoughts</li>
                        <li> iPLEDGE: Required registration program for all patients</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/accutane/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="accutane" count={5} /></div></div></section>
        </>
    );
}
