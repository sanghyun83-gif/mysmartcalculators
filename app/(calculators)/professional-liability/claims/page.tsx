import Link from "next/link";
import { SITE, PL_2026 } from "@/lib/calculators/professional-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Common E&O Claims | ${SITE.name}`, description: "Common professional liability claims." };

export default function ClaimsPage() {
    const claims = [
        { name: "Negligence", frequency: "Most Common", example: "Client claims consultant gave bad advice that caused financial loss.", avgCost: "$25,000 - $75,000" },
        { name: "Missed Deadline", frequency: "Very Common", example: "Attorney misses statute of limitations. Accountant files taxes late.", avgCost: "$10,000 - $50,000" },
        { name: "Breach of Contract", frequency: "Common", example: "Client claims services didn't meet contract specifications.", avgCost: "$15,000 - $40,000" },
        { name: "Errors in Work", frequency: "Common", example: "Accountant makes calculation error in tax return. Engineer miscalculates structure.", avgCost: "$20,000 - $100,000" },
        { name: "Failure to Perform", frequency: "Less Common", example: "Consultant fails to deliver promised analysis or recommendations.", avgCost: "$10,000 - $30,000" },
        { name: "Misrepresentation", frequency: "Less Common", example: "Client claims professional misrepresented qualifications or capabilities.", avgCost: "$25,000 - $75,000" },
    ];

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
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Common Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common E&amp;O Claims</h1>
                    <p className="text-slate-400">Types of claims covered by professional liability.</p>
                </div>

                <div className="space-y-4">
                    {claims.map((claim, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{claim.name}</h3>
                                <div className="text-right">
                                    <p className="text-sm text-blue-400">{claim.frequency}</p>
                                    <p className="text-xs text-slate-500">{claim.avgCost}</p>
                                </div>
                            </div>
                            <p className="text-slate-400">{claim.example}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Defense Costs Matter</h3>
                    <p className="text-slate-300">Even frivolous claims require legal defense. E&amp;O covers defense costs regardless of claim outcome.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/professional-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="professional-liability" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PL_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
