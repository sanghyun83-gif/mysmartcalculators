import Link from "next/link";
import { SITE, WATER_CONTAMINATION_2026 } from "@/lib/calculators/water-contamination";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `How to File a Water Contamination Claim | ${SITE.name}`, description: "Step-by-step guide to filing a water contamination lawsuit. PFAS, Camp Lejeune, evidence needed." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm Your Exposure", description: "Determine when and where you were exposed to contaminated water. For Camp Lejeune, you need 30+ days at the base 1953-1987. For PFAS, confirm your water source had contamination." },
        { title: "Document Your Diagnosis", description: "Obtain complete medical records showing your qualifying condition. Cancer, thyroid disease, and other linked conditions must be documented by physicians." },
        { title: "Gather Proof of Residence/Work", description: "Collect evidence you lived or worked at the contaminated location. Military records, utility bills, employment records, and housing documents help establish exposure." },
        { title: "Test Your Water (if ongoing)", description: "If contamination is current, have your water professionally tested. Lab results showing PFAS or other contaminants provide key evidence." },
        { title: "Calculate Your Damages", description: "Document all medical expenses, lost wages, ongoing treatment costs, and impact on quality of life. Keep all receipts and records." },
        { title: "Consult an Attorney", description: "Water contamination cases are complex. Experienced attorneys work on contingency and can navigate MDL proceedings or Camp Lejeune claims." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/water-contamination" className="flex items-center gap-2 hover:opacity-80"><Droplets className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/water-contamination" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File a Water Contamination Claim</h1>
                    <p className="text-slate-400">Step-by-step guide to pursuing compensation.</p>
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
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Key Evidence to Gather</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Water test results", "Medical records & diagnoses", "Proof of residence/work", "Military service records", "Utility/housing records", "Expert medical opinions"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/water-contamination/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="water-contamination" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{WATER_CONTAMINATION_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
