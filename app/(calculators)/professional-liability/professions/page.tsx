import Link from "next/link";
import { SITE, PROFESSION_TYPES, PL_2026, formatCurrency } from "@/lib/calculators/professional-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = { title: `E&O By Profession | ${SITE.name}`, description: "Professional liability rates by profession type." };

export default function ProfessionsPage() {
    const details = [
        { id: "consultant", typical: ["$1M/$1M limits", "Contract reviews", "Documentation"], notes: "Low base rate. Focus on clear proposals and scope." },
        { id: "accountant", typical: ["$1M/$2M limits", "Malpractice coverage", "Tax error protection"], notes: "CPA firms need higher limits. State board may require coverage." },
        { id: "lawyer", typical: ["$2M/$2M minimum", "Bar requirements", "Tail coverage"], notes: "Highest rates. Many states require malpractice insurance." },
        { id: "tech", typical: ["$1M/$2M limits", "Data breach extension", "SLA coverage"], notes: "Add cyber liability. Client contracts often require proof." },
        { id: "healthcare", typical: ["$1M/$3M limits", "State minimums", "Tail coverage"], notes: "Medical malpractice separate. High risk specialty." },
        { id: "architect", typical: ["$1M/$2M limits", "Project-based", "Structural coverage"], notes: "Coverage per project common. Long tail exposure." },
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
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Briefcase className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">By Profession</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">E&amp;O By Profession</h1>
                    <p className="text-slate-400">Professional liability rates by profession type.</p>
                </div>

                <div className="space-y-6">
                    {PROFESSION_TYPES.map((prof) => {
                        const info = details.find(d => d.id === prof.id);
                        return (
                            <div key={prof.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{prof.name}</h3>
                                        <p className="text-slate-400 mt-1">{info?.notes}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-400">{formatCurrency(prof.baseRate)}</p>
                                        <p className="text-xs text-slate-500">base rate/yr</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {info?.typical.map((item, i) => (
                                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{item}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center"><Link href="/professional-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="professional-liability" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PL_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
