import Link from "next/link";
import { SITE, CANCER_TYPES, ROUNDUP_2026, formatCurrency } from "@/lib/calculators/roundup";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Leaf, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Non-Hodgkin Lymphoma & Roundup | ${SITE.name}`, description: "NHL and Roundup/glyphosate connection. Symptoms, diagnosis, lawsuit eligibility." };

export default function NHLPage() {
    const symptoms = ["Swollen lymph nodes (neck, armpits, groin)", "Fatigue and weakness", "Unexplained weight loss", "Night sweats and fever", "Chest pain, coughing", "Abdominal pain or swelling"];

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/roundup" className="flex items-center gap-2 hover:opacity-80"><Leaf className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/roundup" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Cancer Info</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Non-Hodgkin Lymphoma & Roundup</h1>
                    <p className="text-slate-400">Understanding the link between glyphosate and NHL.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">What is Non-Hodgkin Lymphoma?</h3>
                    <p className="text-slate-300 text-sm">Non-Hodgkin lymphoma (NHL) is a cancer that starts in white blood cells called lymphocytes. It&apos;s the primary cancer scientifically linked to glyphosate (Roundup) exposure. NHL can occur in lymph nodes throughout the body.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">NHL Symptoms</h2>
                    <div className="grid md:grid-cols-2 gap-2">
                        {symptoms.map((symptom, i) => (
                            <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-400 rounded-full" /><span className="text-slate-300 text-sm">{symptom}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Cancers Linked to Glyphosate</h2>
                    <div className="space-y-3">
                        {CANCER_TYPES.map((cancer) => (
                            <div key={cancer.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <div><h3 className="text-white font-medium">{cancer.name}</h3><p className="text-sm text-slate-400">{cancer.description}</p></div>
                                <span className="text-purple-400 font-semibold">{formatCurrency(cancer.avgSettlement)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Scientific Evidence</h2>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li>• <strong>IARC (WHO):</strong> Classified glyphosate as &quot;probably carcinogenic to humans&quot; (Group 2A) in 2015</li>
                        <li>• <strong>Meta-analyses:</strong> Studies show 41% increased NHL risk with high glyphosate exposure</li>
                        <li>• <strong>Jury verdicts:</strong> Multiple juries found Roundup to be a substantial factor in causing cancer</li>
                        <li>• <strong>EPA review:</strong> EPA maintains glyphosate is not likely carcinogenic (disputed in courts)</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/roundup/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="roundup" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ROUNDUP_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </div>
    );
}
