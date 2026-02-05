"use client";

import Link from "next/link";
import { SITE, CALCULATORS, MARITIME_2026, formatCurrency } from "@/lib/calculators/offshore";
import { ArrowRight, Anchor, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2"><Anchor className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Jones Act & Maritime Law Specialists</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Offshore Maritime<span className="text-blue-400"> Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your maritime injury settlement. Includes Jones Act seaman claims, LHWCA longshore workers, and vessel accidents. Free {SITE.year} calculator.</p>
          <Link href="/offshore/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm"><AlertTriangle className="w-4 h-4" /><span>{MARITIME_2026.statistics.jonesActCases.toLocaleString()}+ Jones Act cases filed annually</span></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-blue-400">{MARITIME_2026.statistics.annualInjuries.toLocaleString()}+</p><p className="text-sm text-slate-400 mt-1">Annual Injuries</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-cyan-400">{MARITIME_2026.statistics.jonesActCases.toLocaleString()}+</p><p className="text-sm text-slate-400 mt-1">Jones Act Cases</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-teal-400">{formatCurrency(MARITIME_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-sky-400">{MARITIME_2026.statistics.maintenanceCure}%</p><p className="text-sm text-slate-400 mt-1">M&C Success Rate</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Maritime Tools</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon; return (
              <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-blue-400" /></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold text-white group-hover:text-blue-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-blue-400 text-sm mt-3">Start Now <ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Maritime Injury Types & Settlements</h2>
          <div className="space-y-4">{MARITIME_2026.injuryTypes.slice(0, 5).map((inj, i) => (<div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{inj.type}</h3><p className="text-sm text-slate-400">{inj.description}</p></div><div className="text-right"><p className="text-lg font-bold text-blue-400">{formatCurrency(inj.avgSettlement)}</p><p className="text-xs text-slate-500">Avg Settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If you were injured on a ship, barge, tugboat, or offshore platform, you may be entitled to compensation under Jones Act or LHWCA.</p>
        <Link href="/offshore/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>

      
      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="offshore" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Anchor className="w-5 h-5 text-blue-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
          <p className="text-sm text-slate-400 text-center">{MARITIME_2026.citation}. For informational purposes only.</p>
          <p className="text-sm text-slate-500">© {SITE.year} {SITE.name}</p>
        </div>
      </footer>
    </>
  );
}
