import Link from "next/link";
import { SITE, EXPOSURE_TYPES, FENTANYL_2026 } from "@/lib/calculators/fentanyl-exposure";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, Scale } from "lucide-react";

export const metadata = { title: `Fentanyl Exposure Types | ${SITE.name}`, description: "How fentanyl exposure occurs." };

export default function TypesPage() {
    const exposureTypes = [
        { name: "First Responders (Police/EMS/Fire)", risk: "Very High", description: "Officers and emergency personnel encounter fentanyl at overdose scenes, drug seizures, and during arrests. Accidental inhalation or skin contact is common." },
        { name: "Healthcare Workers", risk: "High", description: "Nurses, doctors, and hospital staff may be exposed when treating overdose patients or handling contaminated items." },
        { name: "Corrections Officers", risk: "High", description: "Prison staff face exposure risks from drug smuggling, inmate mail, and cell searches where fentanyl may be concealed." },
        { name: "Postal/Shipping Workers", risk: "Medium", description: "Mail handlers may be exposed to fentanyl shipped through packages, especially in distribution centers." },
        { name: "Housekeeping/Cleaning Staff", risk: "Medium", description: "Hotel, motel, and rental property cleaners may encounter fentanyl residue left by occupants." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/fentanyl-exposure" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/fentanyl-exposure" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Exposure Types</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Fentanyl Exposure Types</h1>
                    <p className="text-slate-400">Who is at risk of fentanyl exposure.</p>
                </div>
                <div className="space-y-6">
                    {exposureTypes.map((type, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${type.risk === 'Very High' ? 'bg-red-500/20 text-red-400' : type.risk === 'High' ? 'bg-amber-500/20 text-amber-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{type.risk} Risk</span>
                            </div>
                            <p className="text-slate-400">{type.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Exposure Routes</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div><p className="text-white font-semibold">Inhalation</p><p className="text-sm text-slate-400">Breathing airborne particles</p></div>
                        <div><p className="text-white font-semibold">Skin Contact</p><p className="text-sm text-slate-400">Touching powder/residue</p></div>
                        <div><p className="text-white font-semibold">Ingestion</p><p className="text-sm text-slate-400">Accidental oral contact</p></div>
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/fentanyl-exposure/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="fentanyl-exposure" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{FENTANYL_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
