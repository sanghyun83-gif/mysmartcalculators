import Link from "next/link";
import { SITE, CRUSH_2026 } from "@/lib/calculators/crowd-crush";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Crowd Crush Claims Guide | ${SITE.name}`, description: "How to file a crowd crush injury lawsuit claim." };

export default function GuidePage() {
    const steps = [
        { title: "Seek Immediate Medical Care", description: "Get medical attention right away. Crush injuries can have delayed symptoms like rhabdomyolysis and organ damage. Document all injuries with photos and keep all medical records." },
        { title: "Document Everything", description: "Save your ticket, wristband, and any receipts. Take photos and videos of injuries. Note the time, location, and crowd conditions you experienced." },
        { title: "Identify Witnesses", description: "Get contact information from other attendees who were nearby. Their testimony about crowd density and warning signs can be crucial evidence." },
        { title: "Preserve Digital Evidence", description: "Save any social media posts, videos, or photos from the event. Request copies of venue surveillance footage before it's deleted." },
        { title: "Consult Mass Tort Attorney", description: "Crowd crush cases often involve multiple defendants and may join class actions. An experienced attorney can identify all liable parties and navigate complex litigation." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Crowd Crush Claims Guide</h1>
                    <p className="text-slate-400">How to file a crowd crush injury lawsuit.</p>
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
                        {["Medical records", "Event ticket/wristband", "Video footage", "Witness contacts", "Social media posts", "Venue surveillance"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/crowd-crush/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="crowd-crush" count={5} /></div></div></section>

        </>
    );
}
