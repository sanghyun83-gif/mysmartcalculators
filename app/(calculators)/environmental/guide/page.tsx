import Link from "next/link";
import { SITE, ENVIRONMENTAL_2026 } from "@/lib/calculators/environmental";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { TreePine, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `How to File an Environmental Lawsuit | ${SITE.name}`, description: "Step-by-step guide to filing an environmental lawsuit. Property damage, pollution claims, citizen suits." };

export default function GuidePage() {
    const steps = [
        { title: "Document the Contamination", description: "Collect evidence of pollution: photos, environmental testing results, health effects, property damage. Keep a timeline of when contamination started and when discovered." },
        { title: "Identify Responsible Parties", description: "Determine who caused the contamination: factories, refineries, landfills, agricultural operations, government facilities. Multiple parties may be liable." },
        { title: "Get Environmental Testing", description: "Hire certified environmental consultants to test air, water, or soil. Professional testing creates evidence of contamination levels and sources." },
        { title: "Assess Your Damages", description: "Document all harm: property value loss, remediation costs, health effects, business losses, relocation expenses. Get professional appraisals." },
        { title: "Consult an Environmental Attorney", description: "Environmental law is complex. Experienced attorneys work on contingency and can identify all legal options including citizen suits under federal law." },
        { title: "File Administrative Complaints", description: "Report violations to EPA, state agencies, and local authorities. This creates an official record and may trigger enforcement action." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/environmental" className="flex items-center gap-2 hover:opacity-80"><TreePine className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/environmental" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File an Environmental Lawsuit</h1>
                    <p className="text-slate-400">Step-by-step guide to pursuing an environmental claim.</p>
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
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Citizen Suit Rights</h3>
                    <p className="text-amber-200 text-sm">Federal environmental laws (Clean Air Act, Clean Water Act) allow citizens to sue polluters directly when agencies fail to act. You may also recover attorney fees if successful.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/environmental/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="environmental" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ENVIRONMENTAL_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
