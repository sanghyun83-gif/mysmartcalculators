import Link from "next/link";
import { SITE, PFAS_2026, formatCurrency } from "@/lib/calculators/pfas";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Flame, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Firefighter AFFF PFAS Claims | ${SITE.name}`, description: "Firefighter PFAS lawsuits from AFFF foam exposure. Cancer claims, presumption laws, settlements." };

export default function FirefighterPage() {
    const cancerTypes = ["Kidney Cancer", "Testicular Cancer", "Prostate Cancer", "Bladder Cancer", "Non-Hodgkin Lymphoma", "Leukemia", "Thyroid Cancer", "Pancreatic Cancer"];

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
                    <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-2 mb-4"><Flame className="w-4 h-4 text-orange-400" /><span className="text-sm text-orange-300">Firefighter Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Firefighter AFFF PFAS Claims</h1>
                    <p className="text-slate-400">{(PFAS_2026.statistics.firefighterClaims / 1000).toFixed(0)}K+ firefighter claims filed in MDL 2873.</p>
                </div>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-orange-300 mb-3">What is AFFF?</h3>
                    <p className="text-slate-300 text-sm">Aqueous Film-Forming Foam (AFFF) is used to extinguish fuel fires. It contains PFAS chemicals that firefighters absorb through skin contact and inhalation. Studies show firefighters have higher cancer rates than the general population.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Cancers Linked to AFFF Exposure</h2>
                    <div className="grid md:grid-cols-2 gap-2">
                        {cancerTypes.map((cancer, i) => (
                            <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-400 rounded-full" /><span className="text-slate-300">{cancer}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">State Cancer Presumption Laws</h2>
                    <p className="text-slate-300 text-sm mb-4">Many states have enacted laws presuming that certain cancers in firefighters are work-related, making it easier to obtain workers&apos; compensation and pursue lawsuits.</p>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2"><span className="text-emerald-400"></span>Florida, California, New York, Texas have strong presumption laws</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-400"></span>Shifts burden of proof to employer/insurer</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-400"></span>May cover PFAS-linked cancers</li>
                    </ul>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Firefighter Settlement Estimates</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4"><p className="text-sm text-slate-400">Cancer Claims</p><p className="text-xl font-bold text-amber-400">$500,000 - $850,000</p></div>
                        <div className="bg-slate-700/50 rounded-lg p-4"><p className="text-sm text-slate-400">Wrongful Death</p><p className="text-xl font-bold text-amber-400">$750,000 - $1.5M</p></div>
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/pfas/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="pfas" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PFAS_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
