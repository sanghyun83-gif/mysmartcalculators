import Link from "next/link";
import { SITE, AFFF_2026 } from "@/lib/calculators/firefighter-foam";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Flame, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `AFFF Claims Guide | ${SITE.name}`, description: "How to file an AFFF firefighting foam lawsuit. Evidence, process." };

export default function GuidePage() {
    const steps = [
        { title: "Document Your Exposure History", description: "Gather employment records, military service records, or training logs documenting your exposure to AFFF. Include dates, locations, and frequency of exposure." },
        { title: "Collect Medical Records", description: "Obtain complete medical records documenting your cancer diagnosis, treatment history, and any other PFAS-related health conditions." },
        { title: "Get PFAS Blood Testing", description: "Consider getting blood tests to measure PFAS levels in your body. Elevated levels strengthen the connection between exposure and your condition." },
        { title: "Calculate Your Damages", description: "Document all medical expenses, lost wages, future treatment costs, and quality of life impacts. Consider long-term care needs." },
        { title: "Identify Manufacturers", description: "Determine which AFFF products you were exposed to. Major defendants include 3M, DuPont/Chemours, Tyco, and Kidde-Fenwal." },
        { title: "Consult an AFFF Attorney", description: "Contact an attorney experienced in AFFF/PFAS litigation. MDL 2873 is complex. Many offer free consultations and work on contingency." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/firefighter-foam" className="flex items-center gap-2 hover:opacity-80"><Flame className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/firefighter-foam" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AFFF Claims Guide</h1>
                    <p className="text-slate-400">How to file a firefighting foam lawsuit.</p>
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
                        {["Employment/military records", "AFFF training logs", "Cancer diagnosis records", "PFAS blood test results", "Medical bills", "Lost wage documentation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/firefighter-foam/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="firefighter-foam" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{AFFF_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
