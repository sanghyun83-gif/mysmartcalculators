import Link from "next/link";
import { SITE, CLASS_CODES, WCP_2026 } from "@/lib/calculators/workers-comp-premium";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = { title: `Class Codes | ${SITE.name}`, description: "Workers comp class codes and rates." };

export default function ClassCodesPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/workers-comp-premium" className="flex items-center gap-2 hover:opacity-80"><Briefcase className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/workers-comp-premium" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Briefcase className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Class Codes</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Workers Comp Class Codes</h1>
                    <p className="text-slate-400">Sample class codes and base rates per $100 payroll.</p>
                </div>

                <div className="space-y-4">
                    {CLASS_CODES.map((code) => {
                        const riskLevel = code.rate < 1 ? "Low Risk" : code.rate < 3 ? "Medium Risk" : "High Risk";
                        const riskColor = code.rate < 1 ? "emerald" : code.rate < 3 ? "amber" : "red";
                        return (
                            <div key={code.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-white font-semibold">{code.name}</h3>
                                    <span className={`text-sm text-${riskColor}-400`}>{riskLevel}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-blue-400">${code.rate}</p>
                                    <p className="text-xs text-slate-500">per $100 payroll</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Finding Your Class Code</h3>
                    <p className="text-slate-300">NCCI assigns class codes based on your primary business operations. Contact your insurer for your specific code. Misclassification can result in audits.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/workers-comp-premium/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="workers-comp-premium" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{WCP_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
