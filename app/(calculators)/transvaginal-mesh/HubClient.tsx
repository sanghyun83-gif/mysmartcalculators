"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_TYPES, MESH_2026, formatCurrency } from "@/lib/calculators/transvaginal-mesh";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Heart, Scale, Ban } from "lucide-react";



export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded border border-purple-500/30">Advanced</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <Ban className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">FDA Banned Transvaginal Mesh for POP in 2019</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-rose-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator • Advanced</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transvaginal Mesh<span className="block text-purple-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate mesh lawsuit settlements. Erosion, chronic pain, organ perforation claims.</p>
                    <Link href="/transvaginal-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">{MESH_2026.statistics.totalSettlements}</p><p className="text-sm text-slate-400 mt-1">Total Settlements</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{MESH_2026.statistics.fdaStatus}</p><p className="text-sm text-slate-400 mt-1">FDA Status</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{MESH_2026.statistics.casesResolved}</p><p className="text-sm text-slate-400 mt-1">Cases Resolved</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">Ongoing</p><p className="text-sm text-slate-400 mt-1">New Claims</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Mesh Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-purple-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-purple-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Injury Types & Compensation</h2>
                    <div className="space-y-4">
                        {INJURY_TYPES.map((injury) => (
                            <div key={injury.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{injury.name}</h3><p className="text-sm text-slate-400">{injury.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(injury.avgSettlement)}</p><p className="text-xs text-slate-500">projected value</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is the Transvaginal Mesh Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Transvaginal mesh lawsuits allege that manufacturers sold defective mesh products that caused mesh erosion, chronic pain, organ perforation, and other serious complications. Over $8 billion has been paid in settlements.</p>
                    <p className="text-slate-300 mb-4">In 2019, the FDA ordered manufacturers to stop selling transvaginal mesh for pelvic organ prolapse after determining that safety and effectiveness had not been established. Major defendants include Johnson &amp; Johnson (Ethicon), Boston Scientific, and C.R. Bard.</p>
                    <p className="text-slate-300">Many women required multiple revision surgeries to remove or repair the mesh. Cases involving mesh erosion through vaginal tissue, painful intercourse, and organ damage have received the highest compensation.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">Advanced calculator with 7 input factors based on {SITE.year} litigation data.</p>
                <Link href="/transvaginal-mesh/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="transvaginal-mesh" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Heart className="w-5 h-5 text-purple-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{MESH_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </>
    );
}
