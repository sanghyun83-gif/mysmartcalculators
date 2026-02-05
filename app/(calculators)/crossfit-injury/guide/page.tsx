import Link from "next/link";
import { SITE, CROSSFIT_2026 } from "@/lib/calculators/crossfit-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Flame, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `CrossFit Injury Claims Guide | ${SITE.name}`, description: "How to file a CrossFit injury lawsuit claim." };

export default function GuidePage() {
    const steps = [
        { title: "Seek Immediate Medical Care", description: "Get medical attention right away, especially for rhabdo symptoms (dark urine, extreme muscle pain, weakness). These conditions can be life-threatening." },
        { title: "Document the Workout", description: "Record the WOD (Workout of the Day), reps, weights, and time. Note any pressure from the coach to continue or ignore symptoms." },
        { title: "Report to Box Management", description: "Report the incident to the CrossFit box (gym). Request a written incident report. Note if they discourage medical attention." },
        { title: "Preserve Your Waiver", description: "Keep your membership waiver for attorney review. CrossFit waivers often don't protect against reckless coaching or culture issues." },
        { title: "Consult Fitness Injury Attorney", description: "CrossFit cases require understanding the unique culture and training methods. An attorney can evaluate waiver enforceability and negligence issues." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">CrossFit Injury Claims Guide</h1>
                    <p className="text-slate-400">How to file a CrossFit injury lawsuit.</p>
                </div>
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center"><span className="text-amber-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Rhabdo Warning Signs</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Dark/brown urine", "Extreme muscle pain", "Weakness/fatigue", "Swelling in limbs", "Nausea/vomiting", "Confusion"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/crossfit-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="crossfit-injury" count={5} /></div></div></section>

        </>
    );
}
