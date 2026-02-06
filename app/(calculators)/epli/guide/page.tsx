import Link from "next/link";
import { SITE, EPLI_2026 } from "@/lib/calculators/epli";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, FileText, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `EPLI Coverage Guide | ${SITE.name}`, description: "Guide to EPLI insurance coverage." };

export default function GuidePage() {
    const covered = ["Wrongful termination", "Discrimination claims", "Sexual harassment", "Retaliation", "Failure to promote", "Workplace bullying"];
    const notCovered = ["Criminal fines", "Punitive damages", "ERISA violations", "Workers comp claims", "Intentional acts", "Wage & hour (some)"];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/epli" className="flex items-center gap-2 hover:opacity-80"><Users className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Standard</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/epli" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">EPLI Coverage Guide</h1>
                    <p className="text-slate-400">What EPLI insurance covers.</p>
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

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">EEOC Claims Rising</h3>
                    <p className="text-slate-300">EEOC received 81,055 discrimination charges in 2026. Average settlement: $75,000. Defense costs average $125,000 even for unfounded claims.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/epli/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="epli" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{EPLI_2026.citations.join("  ")}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
