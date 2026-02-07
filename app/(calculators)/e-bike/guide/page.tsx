import Link from "next/link";
import { SITE, EBIKE_2026 } from "@/lib/calculators/e-bike";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Bike, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `E-Bike Accident Claims Guide | ${SITE.name}`, description: "How to file an e-bike accident lawsuit claim." };

export default function GuidePage() {
    const steps = [
        { title: "Document the Accident Scene", description: "Take photos of the e-bike, injuries, road conditions, and any defects. Note the e-bike make, model, and class (1, 2, or 3)." },
        { title: "Get Medical Treatment", description: "Seek immediate medical attention. E-bike accidents at higher speeds often result in TBI and spinal injuries requiring prompt diagnosis." },
        { title: "Preserve the E-Bike", description: "If you suspect a defect (brakes, battery, throttle), do not repair or dispose of the e-bike. It is key evidence for product liability claims." },
        { title: "Gather Evidence", description: "Collect police reports, witness statements, medical records, and any surveillance footage. Document all expenses and lost wages." },
        { title: "Consult Personal Injury Attorney", description: "E-bike cases may involve product liability (manufacturer) and motor vehicle claims. An attorney can identify all liable parties." },
    ];

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/e-bike" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">E-Bike Accident Claims Guide</h1>
                    <p className="text-slate-400">How to file an e-bike accident lawsuit.</p>
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
                        {["E-bike photos", "Police report", "Medical records", "E-bike model/class", "Witness statements", "Defect evidence"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/e-bike/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="e-bike" count={5} /></div></div></section>

        </>
    );
}
