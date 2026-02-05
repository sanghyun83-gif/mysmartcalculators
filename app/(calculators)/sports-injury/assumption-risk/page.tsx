import Link from "next/link";
import { SITE, SPORTS_2026 } from "@/lib/calculators/sports-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Trophy, ArrowLeft, ArrowRight, Shield, XCircle, CheckCircle } from "lucide-react";

export const metadata = { title: `Assumption of Risk Defense | ${SITE.name}`, description: "Understanding assumption of risk in sports injury lawsuits." };

export default function AssumptionRiskPage() {
    const protections = [
        { title: "Inherent Sports Risks", description: "Players accept normal risks of the sport. Getting tackled in football or checked in hockey are inherent risks.", applies: true },
        { title: "Visible Known Hazards", description: "Athletes are expected to accept obvious risks they can see and avoid.", applies: true },
        { title: "Voluntary Participation", description: "Choosing to play the sport shows acceptance of its natural risks.", applies: true },
    ];

    const exceptions = [
        { title: "Gross Negligence", description: "Assumption of risk doesn't protect against reckless or intentional misconduct.", applies: false },
        { title: "Hidden Dangers", description: "Schools are liable for dangerous conditions athletes couldn't know about.", applies: false },
        { title: "Protocol Violations", description: "Violating concussion protocols or safety rules creates liability.", applies: false },
        { title: "Defective Equipment", description: "Product liability claims aren't blocked by assumption of risk.", applies: false },
        { title: "Youth Sports", description: "Minors have higher protections. Waivers often don't apply to children.", applies: false },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/sports-injury" className="flex items-center gap-2 hover:opacity-80"><Trophy className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/sports-injury" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Legal Defense</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Assumption of Risk Defense</h1>
                    <p className="text-slate-400">When this defense protects defendants - and when it doesn&apos;t.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">What is Assumption of Risk?</h2>
                    <p className="text-slate-300 mb-4">Assumption of risk is a legal defense where defendants argue the injured person voluntarily accepted known risks. In sports, this means players accept normal sports risks.</p>
                    <p className="text-slate-300">However, this defense has important limitations that often allow sports injury lawsuits to succeed.</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle className="w-5 h-5" />Defense Applies:</h2>
                    <div className="space-y-4">
                        {protections.map((item, i) => (
                            <div key={i} className="bg-slate-800 border border-red-500/30 rounded-xl p-6 flex items-start gap-4">
                                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-slate-400 mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Defense Doesn&apos;t Apply:</h2>
                    <div className="space-y-4">
                        {exceptions.map((item, i) => (
                            <div key={i} className="bg-slate-800 border border-emerald-500/30 rounded-xl p-6 flex items-start gap-4">
                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-slate-400 mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/sports-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="sports-injury" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SPORTS_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
