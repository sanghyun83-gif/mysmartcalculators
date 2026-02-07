import Link from "next/link";
import { SITE, TOXIC_TORT_2026 } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Scale, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `How to File a Toxic Tort Claim | ${SITE.name}`, description: "Step-by-step guide to filing a toxic tort lawsuit. Evidence needed, statute of limitations, finding an attorney." };

export default function GuidePage() {
    const steps = [
        { title: "Document Your Exposure", description: "Gather evidence of where and when you were exposed. Include residence history, employment records near contamination sites, and any company notices or warnings received." },
        { title: "Get Medical Diagnosis", description: "Obtain comprehensive medical records linking your condition to toxic exposure. Expert medical testimony connecting exposure to disease is often required." },
        { title: "Identify Responsible Parties", description: "Determine all potentially liable parties: polluters, manufacturers, property owners, and government agencies who failed to protect you." },
        { title: "Check Statute of Limitations", description: "Understand your state's deadline. The 'discovery rule' may apply, starting the clock when you discovered the injury and its cause." },
        { title: "Consult a Toxic Tort Attorney", description: "Experienced attorneys work on contingency and have resources to fight corporations. They can identify all liable parties and applicable MDL cases." },
        { title: "Join MDL or File Individually", description: "Depending on your case, joining existing MDL litigation may be efficient. Your attorney will determine the best strategy." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/toxic-tort" className="flex items-center gap-2 hover:opacity-80"><Scale className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/toxic-tort" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File a Toxic Tort Claim</h1>
                    <p className="text-slate-400">Step-by-step guide to pursuing compensation for toxic exposure.</p>
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
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Key Evidence for Toxic Tort Cases</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Medical records & diagnosis", "Exposure timeline documentation", "Scientific studies linking substance to disease", "Expert witness testimony", "Company records of contamination knowledge", "EPA/government reports on site"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TOXIC_TORT_2026.citations[3]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
