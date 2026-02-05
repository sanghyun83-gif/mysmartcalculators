import Link from "next/link";
import { SITE, PFAS_2026 } from "@/lib/calculators/pfas";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Flame, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `How to File a PFAS Lawsuit | ${SITE.name}`, description: "Step-by-step guide to filing a PFAS lawsuit. MDL 2873, evidence needed, settlement timeline." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm PFAS Exposure", description: "Document how you were exposed: firefighter AFFF use, contaminated water source, industrial work, military service. Keep employment records, water testing results, and residence history." },
        { title: "Get a Qualifying Diagnosis", description: "PFAS claims require diagnosis of a linked condition: kidney cancer, testicular cancer, thyroid disease, ulcerative colitis. Get complete medical records from all treating physicians." },
        { title: "Blood PFAS Testing (If Available)", description: "Blood tests showing elevated PFAS levels strengthen your case. Some law firms offer free testing. Results above population averages support causation." },
        { title: "Calculate Your Damages", description: "Document all damages: medical bills, lost income, disability, future treatment costs, pain and suffering. Wrongful death claims require proof of death and damages to survivors." },
        { title: "Consult a PFAS Attorney", description: "PFAS cases are handled in MDL 2873. Experienced attorneys work on contingency and coordinate with lead counsel. Initial consultations are free at most firms." },
        { title: "File in MDL 2873", description: "Most personal injury cases are consolidated in MDL 2873 (SC District Court). Your attorney will file the complaint and manage discovery and settlement negotiations." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/pfas" className="flex items-center gap-2 hover:opacity-80"><Flame className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/pfas" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File a PFAS Lawsuit</h1>
                    <p className="text-slate-400">Step-by-step guide to joining the PFAS MDL.</p>
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
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Key Evidence for PFAS Claims</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Cancer/disease diagnosis", "Employment/military records", "Residence near contamination", "Blood PFAS test results", "Medical treatment records", "Water test results (if applicable)"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/pfas/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="pfas" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PFAS_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
