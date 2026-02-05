import Link from "next/link";
import { SITE, PARK_2026 } from "@/lib/calculators/amusement-park";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Ticket, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Theme Park Injury Claims Guide | ${SITE.name}`, description: "How to file an amusement park injury lawsuit claim." };

export default function GuidePage() {
    const steps = [
        { title: "Report to Park Management", description: "Report the incident to park staff immediately. Insist on a written incident report and get the names of any operators involved." },
        { title: "Seek Medical Attention", description: "Get medical care right away, even if injuries seem minor. Document all injuries with photos and keep all medical records." },
        { title: "Take Photos and Videos", description: "Document the ride, any visible defects, warning signs (or lack thereof), and your injuries. Get witness contact information." },
        { title: "Keep Your Ticket and Receipt", description: "Your ticket may contain arbitration clauses or waivers. Keep it as evidence. An attorney can review if these apply to your case." },
        { title: "Consult Theme Park Attorney", description: "Large parks have experienced legal teams. You need an attorney who has handled theme park cases and understands their defenses." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/amusement-park" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Theme Park Injury Claims Guide</h1>
                    <p className="text-slate-400">How to file an amusement park injury lawsuit.</p>
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
                        {["Incident report", "Medical records", "Ride photos/videos", "Ticket & receipt", "Witness contacts", "Maintenance records"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/amusement-park/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="amusement-park" count={5} /></div></div></section>
        </>
    );
}
