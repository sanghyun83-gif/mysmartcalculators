import Link from "next/link";
import { SITE, TRAIN_2026 } from "@/lib/calculators/train-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Train, ArrowLeft, ArrowRight, Scale, CheckCircle } from "lucide-react";

export const metadata = { title: `FELA Railroad Worker Claims | ${SITE.name}`, description: "Understanding FELA claims for railroad workers." };

export default function FelaPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/train-accident" className="flex items-center gap-2 hover:opacity-80"><Train className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/train-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">FELA Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">FELA Railroad Worker Claims</h1>
                    <p className="text-slate-400">Understanding the Federal Employers' Liability Act.</p>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">What is FELA?</h3>
                    <p className="text-slate-300">The Federal Employers' Liability Act (FELA) is a federal law enacted in 1908 that allows railroad workers to sue their employers for on-the-job injuries. Unlike state workers' compensation, FELA requires proving employer negligence but allows recovery of full damages.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">FELA vs. Workers' Compensation</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead><tr className="border-b border-slate-700"><th className="py-3 text-slate-300">Feature</th><th className="py-3 text-slate-300">FELA</th><th className="py-3 text-slate-300">Workers' Comp</th></tr></thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-700/50"><td className="py-3 text-slate-400">Negligence Required?</td><td className="py-3 text-emerald-400">Yes (must prove)</td><td className="py-3 text-amber-400">No (no-fault)</td></tr>
                                <tr className="border-b border-slate-700/50"><td className="py-3 text-slate-400">Pain &amp; Suffering</td><td className="py-3 text-emerald-400">Full recovery allowed</td><td className="py-3 text-red-400">Not allowed</td></tr>
                                <tr className="border-b border-slate-700/50"><td className="py-3 text-slate-400">Lost Wages</td><td className="py-3 text-emerald-400">100% recovery</td><td className="py-3 text-amber-400">66% typically</td></tr>
                                <tr><td className="py-3 text-slate-400">Jury Trial</td><td className="py-3 text-emerald-400">Available</td><td className="py-3 text-red-400">Not available</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Who is Covered?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {["Locomotive engineers", "Conductors", "Brakemen", "Track workers", "Yard workers", "Signal maintainers", "Carmen (car repairers)", "Dispatchers"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Average FELA Settlements</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Cumulative Trauma (back/joints)</span><span className="text-amber-400 font-semibold">$400,000 - $800,000</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Traumatic Injury</span><span className="text-amber-400 font-semibold">$500,000 - $1,500,000</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Amputation</span><span className="text-amber-400 font-semibold">$800,000 - $2,000,000</span></div>
                        <div className="flex justify-between py-2"><span className="text-slate-300">Wrongful Death</span><span className="text-amber-400 font-semibold">$1,000,000 - $3,000,000+</span></div>
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/train-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="train-accident" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TRAIN_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
