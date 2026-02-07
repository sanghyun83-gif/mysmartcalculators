import Link from "next/link";
import { SITE, TOXIC_TORT_2026, formatCurrency } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Scale, ArrowLeft, ArrowRight, Shield, MapPin } from "lucide-react";

export const metadata = { title: `EPA Superfund Sites | ${SITE.name}`, description: "Information about EPA Superfund contaminated sites. Living near Superfund sites and your legal rights." };

export default function SuperfundPage() {
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
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">EPA Contaminated Sites</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Superfund Sites</h1>
                    <p className="text-slate-400">Understanding EPA-designated contaminated sites and your legal rights.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <MapPin className="w-10 h-10 text-red-400" />
                        <div><p className="text-4xl font-bold text-red-400">{TOXIC_TORT_2026.statistics.superfundSites}</p><p className="text-slate-400">Superfund Sites Nationwide</p></div>
                    </div>
                    <p className="text-slate-300">Superfund sites are contaminated locations identified by the EPA under CERCLA (Comprehensive Environmental Response, Compensation, and Liability Act). These sites contain hazardous substances that pose risks to human health and the environment.</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">What Makes a Superfund Site?</h2>
                        <p className="text-slate-400">Sites are designated based on contamination severity, threat to public health, and proximity to populations. Common sources include former industrial facilities, landfills, mining operations, and military bases.</p>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">Living Near a Superfund Site</h2>
                        <p className="text-slate-400">If you live or work near a Superfund site and developed health problems, you may be entitled to compensation from responsible parties. These parties are legally required to pay for cleanup and victim compensation.</p>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">Your Legal Rights</h2>
                        <p className="text-slate-400">Superfund law holds polluters strictly liable for contamination, meaning you don&apos;t need to prove negligence. If responsible parties are identified, they must pay for cleanup and can be sued for personal injury damages.</p>
                    </div>
                </div>

                <div className="mt-12 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Check Your Area</h3>
                    <p className="text-amber-200 text-sm mb-4">The EPA maintains a searchable database of all Superfund sites. Check if you live near contamination and review health advisories for your area.</p>
                    <a href="https://www.epa.gov/superfund/search-superfund-sites-where-you-live" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">EPA Superfund Site Search →</a>
                </div>

                <div className="mt-12 text-center"><Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TOXIC_TORT_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
