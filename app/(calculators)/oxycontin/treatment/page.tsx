import Link from "next/link";
import { SITE, OXYCONTIN_2026 } from "@/lib/calculators/oxycontin";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `OxyContin Treatment Costs | ${SITE.name}`, description: "Addiction treatment expense data for claims." };

export default function TreatmentPage() {
    const treatments = [
        { name: "Inpatient Rehab (30 days)", cost: "$15,000 - $40,000", description: "Residential treatment with 24/7 medical supervision, therapy, and structured recovery programs." },
        { name: "Outpatient Treatment", cost: "$5,000 - $15,000", description: "Regular therapy and group sessions while continuing to live at home." },
        { name: "Medical Detox", cost: "$3,000 - $10,000", description: "Medically supervised OxyContin withdrawal, typically 5-7 days." },
        { name: "MAT - Suboxone Program", cost: "$400 - $700/month", description: "Medication-assisted treatment using buprenorphine to manage withdrawal and cravings." },
        { name: "MAT - Methadone Clinic", cost: "$300 - $500/month", description: "Daily methadone dosing at licensed clinic for opioid dependency." },
        { name: "Individual Therapy", cost: "$100 - $300/session", description: "One-on-one counseling for addiction and co-occurring mental health issues." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/oxycontin" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/oxycontin" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Treatment Costs</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">OxyContin Treatment Costs</h1>
                    <p className="text-slate-400">Addiction recovery expense reference.</p>
                </div>
                <div className="space-y-4">
                    {treatments.map((t, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                                <span className="text-purple-400 font-semibold">{t.cost}</span>
                            </div>
                            <p className="text-slate-400 text-sm">{t.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Lifetime Treatment Costs</h3>
                    <p className="text-2xl font-bold text-white mb-2">$50,000 - $400,000+</p>
                    <p className="text-slate-300">Total lifetime costs for OxyContin addiction recovery including multiple rehab stays, ongoing MAT, therapy, and lost wages can reach hundreds of thousands.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/oxycontin/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="oxycontin" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{OXYCONTIN_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
