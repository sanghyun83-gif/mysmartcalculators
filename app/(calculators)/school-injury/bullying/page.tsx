import Link from "next/link";
import { SITE, SCHOOL_2026 } from "@/lib/calculators/school-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { School, ArrowLeft, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata = { title: `School Bullying Lawsuits | ${SITE.name}`, description: "Filing lawsuits for school bullying and harassment." };

export default function BullyingPage() {
    const requirements = [
        { title: "School Knowledge", description: "You must prove the school knew about the bullying or harassment before your child was injured. Documentation of prior reports is essential.", key: true },
        { title: "Failure to Act", description: "The school must have failed to take reasonable steps to stop the bullying after being informed. One report may not be enough - patterns matter.", key: true },
        { title: "Resulting Harm", description: "Physical injury, psychological harm, or academic damage must be documented. Medical and therapy records are crucial.", key: true },
        { title: "Deliberate Indifference", description: "For federal claims (Title IX, Section 1983), you may need to prove the school was deliberately indifferent to known harassment.", key: false },
    ];

    const evidence = [
        "Written complaints to school",
        "Emails/letters to administrators",
        "Incident reports",
        "Medical/therapy records",
        "Witness statements",
        "Social media evidence",
        "Text message screenshots",
        "Academic records showing decline",
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/school-injury" className="flex items-center gap-2 hover:opacity-80"><School className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/school-injury" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Bullying Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">School Bullying Lawsuits</h1>
                    <p className="text-slate-400">Holding schools accountable for failing to stop bullying.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">What Makes a Bullying Lawsuit?</h2>
                    <p className="text-slate-300 mb-4">Schools can&apos;t prevent all bullying, but they must respond appropriately when informed. A successful lawsuit requires showing the school knew and failed to act.</p>
                    <p className="text-slate-300">The key is documentation - every report you make to the school creates a paper trail of their knowledge and response (or lack thereof).</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-amber-400 mb-6">Key Requirements:</h2>
                    <div className="space-y-4">
                        {requirements.map((item, i) => (
                            <div key={i} className={`bg-slate-800 border rounded-xl p-6 ${item.key ? 'border-amber-500/30' : 'border-slate-700'}`}>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className={`w-5 h-5 mt-0.5 ${item.key ? 'text-amber-400' : 'text-slate-500'}`} />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                        <p className="text-slate-400 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-emerald-400 mb-4">Essential Evidence to Gather:</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {evidence.map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/school-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="school-injury" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SCHOOL_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
