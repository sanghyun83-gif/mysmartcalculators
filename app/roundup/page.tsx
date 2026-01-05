import Link from "next/link";
import { SITE, CALCULATORS, CANCER_TYPES, ROUNDUP_2026, formatCurrency } from "@/lib/calculators/roundup";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Leaf, Scale } from "lucide-react";

export const metadata = { title: `${SITE.name} | Free ${SITE.year} Glyphosate Cancer Calculator`, description: SITE.description };

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Leaf className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">Bayer ${(ROUNDUP_2026.statistics.totalSettlement / 1000000000).toFixed(0)}B+ Settlement • {(ROUNDUP_2026.statistics.pendingClaims / 1000).toFixed(0)}K+ Pending Claims</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-green-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roundup Lymphoma<span className="block text-purple-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate glyphosate cancer lawsuit settlements. Non-Hodgkin lymphoma, Bayer/Monsanto claims. Verdicts up to {formatCurrency(ROUNDUP_2026.statistics.highestVerdict)}.</p>
                    <Link href="/roundup/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">${(ROUNDUP_2026.statistics.totalSettlement / 1000000000).toFixed(0)}B+</p><p className="text-sm text-slate-400 mt-1">Total Settlement</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">{(ROUNDUP_2026.statistics.resolvedCases / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Cases Resolved</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{formatCurrency(ROUNDUP_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{formatCurrency(ROUNDUP_2026.statistics.highestVerdict)}</p><p className="text-sm text-slate-400 mt-1">Largest Verdict</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Roundup Lawsuit Tools</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg"><Icon className="w-6 h-6 text-purple-400" /></div>
                                    <div><h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3">Get Started <ArrowRight className="w-4 h-4" /></span></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Cancers Linked to Roundup</h2>
                    <div className="space-y-4">
                        {CANCER_TYPES.map((cancer) => (
                            <div key={cancer.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{cancer.name}</h3><p className="text-sm text-slate-400">{cancer.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(cancer.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is the Roundup Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">The Roundup lawsuit involves claims that Monsanto&apos;s Roundup weedkiller (containing glyphosate) causes Non-Hodgkin lymphoma and other cancers. Bayer, which acquired Monsanto in 2018, has faced over 100,000 lawsuits.</p>
                    <p className="text-slate-300 mb-4">Juries have awarded plaintiffs billions in damages, with verdicts later reduced on appeal. Bayer has committed over ${(ROUNDUP_2026.statistics.totalSettlement / 1000000000).toFixed(0)} billion to settle claims, with {(ROUNDUP_2026.statistics.pendingClaims / 1000).toFixed(0)},000+ claims still pending.</p>
                    <p className="text-slate-300">The WHO&apos;s IARC classified glyphosate as &quot;probably carcinogenic to humans&quot; in 2015. While the EPA disagrees, courts have found Bayer liable. New claims are still being filed.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Roundup Claim</h2>
                <p className="text-slate-400 mb-8">Free estimate based on {SITE.year} settlement data.</p>
                <Link href="/roundup/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="roundup" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Leaf className="w-5 h-5 text-purple-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{ROUNDUP_2026.citations[1]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </div>
    );
}
