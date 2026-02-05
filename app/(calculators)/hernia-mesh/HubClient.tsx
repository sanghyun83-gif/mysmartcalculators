"use client";

import Link from "next/link";
import { SITE, CALCULATORS, HERNIA_2026, formatCurrency } from "@/lib/calculators/hernia-mesh";
import { ArrowRight, Activity, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      <section className="relative overflow-hidden">          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Defective Medical Device Litigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hernia Mesh<span className="text-amber-400"> Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your hernia mesh lawsuit settlement. Includes mesh complications, revision surgeries, and chronic pain. Free {SITE.year} calculator.</p>
          <Link href="/hernia-mesh/hernia-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
          <div className="mt-8 bg-red-900/30 border border-red-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-red-300 text-sm"><AlertTriangle className="w-4 h-4" /><span>{HERNIA_2026.statistics.meshRecalls} mesh products recalled | {(HERNIA_2026.statistics.fdaReports / 1000).toFixed(0)}K+ FDA reports</span></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-amber-400">{(HERNIA_2026.statistics.activeLawsuits / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Active Lawsuits</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-red-400">{(HERNIA_2026.statistics.fdaReports / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">FDA Reports</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-yellow-400">{HERNIA_2026.statistics.meshRecalls}</p><p className="text-sm text-slate-400 mt-1">Mesh Recalls</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-orange-400">{formatCurrency(HERNIA_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Hernia Mesh Tools</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon; return (
              <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-amber-400" /></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold text-white group-hover:text-amber-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-amber-400 text-sm mt-3">Start Now <ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Complications & Settlements</h2>
          <div className="space-y-4">{HERNIA_2026.complications.slice(0, 5).map((c, i) => (<div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{c.type}</h3><p className="text-sm text-slate-400">{c.description}</p></div><div className="text-right"><p className="text-lg font-bold text-amber-400">{formatCurrency(c.avgSettlement)}</p><p className="text-xs text-slate-500">Avg Settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If you experienced complications from hernia mesh surgery, you may be entitled to compensation.</p>
        <Link href="/hernia-mesh/hernia-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>


      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="hernia-mesh" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
