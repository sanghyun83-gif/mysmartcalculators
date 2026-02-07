import Link from "next/link";
import { SITE, CYBER_2026 } from "@/lib/calculators/cyber-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Shield, ArrowLeft, ArrowRight, FileText, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `Cyber Coverage Guide | ${SITE.name}`, description: "Guide to cyber insurance coverage." };

export default function GuidePage() {
    const firstParty = ["Data breach response", "Ransomware payments", "Business interruption", "Forensic investigation", "Notification costs", "Credit monitoring"];
    const thirdParty = ["Regulatory fines", "Legal defense", "Customer lawsuits", "PCI-DSS fines", "Media liability", "Privacy liability"];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/cyber-insurance" className="flex items-center gap-2 hover:opacity-80"><Shield className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/cyber-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cyber Coverage Guide</h1>
                    <p className="text-slate-400">First-party vs third-party coverage explained.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-blue-300 mb-4">First-Party Coverage</h3>
                        <p className="text-slate-400 text-sm mb-4">Your direct losses</p>
                        <div className="space-y-3">
                            {firstParty.map((item, i) => (
                                <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-purple-300 mb-4">Third-Party Coverage</h3>
                        <p className="text-slate-400 text-sm mb-4">Liability to others</p>
                        <div className="space-y-3">
                            {thirdParty.map((item, i) => (
                                <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-4">Common Exclusions</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Unencrypted devices", "Known vulnerabilities", "War/terrorism", "Infrastructure failure", "Prior acts", "Intentional acts"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/cyber-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="cyber-insurance" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{CYBER_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
