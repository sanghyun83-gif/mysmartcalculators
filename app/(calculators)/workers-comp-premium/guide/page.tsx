import Link from "next/link";
import { SITE, WCP_2026 } from "@/lib/calculators/workers-comp-premium";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, FileText } from "lucide-react";

export const metadata = { title: `WC Rate Guide | ${SITE.name}`, description: "How workers comp rates work." };

export default function GuidePage() {
    const formula = [
        { step: "1. Classify", desc: "Each job type has a class code with a base rate per $100 payroll" },
        { step: "2. Calculate Manual Premium", desc: "(Payroll / 100) × Class Code Rate = Manual Premium" },
        { step: "3. Apply Experience Mod", desc: "Manual Premium × EMR = Modified Premium" },
        { step: "4. Apply State & Discounts", desc: "Modified Premium × State Factor × Discounts = Final" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/workers-comp-premium" className="flex items-center gap-2 hover:opacity-80"><Briefcase className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/workers-comp-premium" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Rate Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Workers Comp Rate Guide</h1>
                    <p className="text-slate-400">How workers compensation premiums are calculated.</p>
                </div>

                <div className="space-y-4">
                    {formula.map((item, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.step}</h3>
                            <p className="text-slate-300">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-300 mb-2">Example Calculation</h3>
                    <p className="text-slate-300 font-mono text-sm">$500,000 payroll × 8810 rate ($0.16) = $800 manual<br />$800 × 0.90 EMR = $720<br />$720 × 1.00 state × 0.92 safety = <strong className="text-emerald-400">$662/year</strong></p>
                </div>

                <div className="mt-12 text-center"><Link href="/workers-comp-premium/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Your Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="workers-comp-premium" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{WCP_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
