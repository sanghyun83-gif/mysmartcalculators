"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Scale, CheckCircle } from "lucide-react";
import { SITE, SOCIAL_2026, formatCurrency } from "@/lib/calculators/social-media";

export default function StateLawsuitsPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-media" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">State Lawsuits</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">State Attorney General Lawsuits</h1><p className="text-slate-400">{SOCIAL_2026.statistics.stateAGs} State AGs have filed lawsuits against social media companies</p></div>

                <div className="bg-amber-900/30 border border-amber-500/50 rounded-xl p-6 mb-8">
                    <div className="flex items-center gap-4">
                        <Scale className="w-10 h-10 text-amber-400" />
                        <div><p className="text-2xl font-bold text-white">{SOCIAL_2026.statistics.stateAGs} States</p><p className="text-amber-200">Have filed lawsuits against Meta, TikTok, and other platforms</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-slate-700/50"><th className="py-4 px-4 text-left text-slate-300">State</th><th className="py-4 px-4 text-center text-slate-300">Cases</th><th className="py-4 px-4 text-center text-slate-300">Status</th><th className="py-4 px-4 text-center text-slate-300">AG Involved</th></tr></thead>
                        <tbody className="text-slate-300">{SOCIAL_2026.stateLawsuits.map((s, i) => (<tr key={i} className="border-t border-slate-700/50 hover:bg-slate-700/30"><td className="py-4 px-4 font-medium text-white">{s.state}</td><td className="py-4 px-4 text-center">{s.cases.toLocaleString()}</td><td className="py-4 px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">{s.status}</span></td><td className="py-4 px-4 text-center">{s.agInvolved ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-slate-500">-</span>}</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">About State AG Lawsuits</h2>
                    <div className="space-y-3 text-sm text-slate-300">
                        <p>• In October 2023, 42 State Attorneys General filed lawsuits against Meta for allegedly harming youth mental health.</p>
                        <p>• These lawsuits claim Meta knew Instagram was addictive and harmful to teenagers but prioritized profits over safety.</p>
                        <p>• Individual claims can be filed alongside state AG lawsuits for personal compensation.</p>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/social-media/social-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{SOCIAL_2026.citationNote}</p>
            </main>
        </>
    );
}
