import Link from "next/link";
import { SITE, PL_2026 } from "@/lib/calculators/professional-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, FileText, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `E&O Coverage Guide | ${SITE.name}`, description: "Guide to professional liability insurance coverage." };

export default function GuidePage() {
    const covered = ["Negligence claims", "Missed deadlines", "Errors in work", "Failure to deliver", "Copyright in work product", "Defense costs"];
    const notCovered = ["Intentional wrongdoing", "Criminal acts", "Bodily injury (need GL)", "Property damage", "Employee claims (EPLI)", "Cyber incidents"];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/professional-liability" className="flex items-center gap-2 hover:opacity-80"><Briefcase className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/professional-liability" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">E&amp;O Coverage Guide</h1>
                    <p className="text-slate-400">What professional liability insurance covers.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-emerald-300 mb-4">What&apos;s Covered</h3>
                        <div className="space-y-3">
                            {covered.map((item, i) => (
                                <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-red-300 mb-4">What&apos;s NOT Covered</h3>
                        <div className="space-y-3">
                            {notCovered.map((item, i) => (
                                <div key={i} className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Claims-Made vs. Occurrence</h3>
                    <p className="text-slate-400 mb-4">Most E&amp;O policies are <strong className="text-blue-400">claims-made</strong>:</p>
                    <ul className="text-slate-300 space-y-2">
                        <li><strong className="text-blue-400">Claims-Made:</strong> Covers claims made during the policy period for incidents after retroactive date</li>
                        <li><strong className="text-blue-400">Tail Coverage:</strong> Extends coverage after policy ends for past work</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/professional-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="professional-liability" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PL_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
