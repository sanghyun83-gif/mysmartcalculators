import Link from "next/link";
import { SITE, BREAST_IMPLANT_2026 } from "@/lib/calculators/breast-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata = { title: `BII Symptoms Guide | ${SITE.name}`, description: "Recognize breast implant illness symptoms." };

const BII_SYMPTOMS = [
    { category: "Systemic", symptoms: ["Chronic fatigue", "Brain fog / cognitive issues", "Memory problems", "Anxiety and depression", "Sleep disturbances"] },
    { category: "Musculoskeletal", symptoms: ["Joint pain and stiffness", "Muscle aches", "Weakness", "Numbness and tingling"] },
    { category: "Skin/Hair", symptoms: ["Hair loss", "Skin rashes", "Dry skin", "Premature aging"] },
    { category: "Other", symptoms: ["Dry eyes and mouth", "Recurring infections", "Food sensitivities", "Temperature regulation issues"] },
];

const ALCL_SYMPTOMS = ["Sudden breast swelling", "Fluid around implant (seroma)", "Breast pain", "Capsular contracture", "Lumps in breast or armpit", "Persistent tightness"];

export default function SymptomsPage() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/breast-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Symptoms Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">BII & ALCL Symptoms</h1>
                    <p className="text-slate-400">Recognize warning signs of breast implant complications.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5" />BIA-ALCL Warning Signs (Seek Immediate Care)</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {ALCL_SYMPTOMS.map((symptom, i) => (
                            <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-red-400 rounded-full" /><span className="text-slate-300">{symptom}</span></div>
                        ))}
                    </div>
                    <p className="text-sm text-red-200 mt-4">BIA-ALCL is a rare cancer. If you experience sudden swelling years after surgery, seek medical evaluation immediately.</p>
                </div>

                <h2 className="text-xl font-bold text-white mb-6">Breast Implant Illness (BII) Symptoms</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {BII_SYMPTOMS.map((cat) => (
                        <div key={cat.category} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-purple-400 mb-4">{cat.category}</h3>
                            <div className="space-y-2">
                                {cat.symptoms.map((symptom, i) => (
                                    <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-500" /><span className="text-slate-300">{symptom}</span></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Important Note</h3>
                    <p className="text-slate-400">BII symptoms can mimic many other conditions. If you have breast implants and experience these symptoms, discuss removal with your doctor. Many women report improvement after explant surgery.</p>
                </div>

                <div className="text-center"><Link href="/breast-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="breast-implant" count={5} /></div></div></section>
        </>
    );
}
