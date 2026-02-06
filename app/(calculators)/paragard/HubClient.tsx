"use client";

import Link from "next/link";
import { SITE, CALCULATORS, PARAGARD_2026, formatCurrency } from "@/lib/calculators/paragard";
import { ArrowRight, Shield, AlertTriangle, Scale, Calendar } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2"><Shield className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-rose-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-6 animate-pulse">
            <Scale className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300 font-semibold">?   Bellwether Trial: {PARAGARD_2026.bellwetherTrial.firstTrialDate}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Paragard IUD<span className="text-purple-400"> Lawsuit Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your Paragard IUD fracture settlement. First bellwether trial starts {PARAGARD_2026.bellwetherTrial.date}. {PARAGARD_2026.statistics.lawsuitsFiled.toLocaleString()}+ lawsuits pending in {PARAGARD_2026.bellwetherTrial.mdlNumber}.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paragard/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
            <Link href="/paragard/trial-status" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"><Calendar className="w-5 h-5" />2026 Trial Status</Link>
          </div>
          <div className="mt-8 bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-purple-300 text-sm"><AlertTriangle className="w-4 h-4" /><span>{PARAGARD_2026.statistics.defectRate}% device defect rate reported to FDA</span></div>
          </div>
        </div>
      </section>

      <section className="bg-red-900/20 border-y border-red-700/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Scale className="w-8 h-8 text-red-400" />
            <div><p className="text-lg font-bold text-white">First Bellwether Trial: {PARAGARD_2026.bellwetherTrial.firstTrialDate}</p><p className="text-sm text-red-300">{PARAGARD_2026.bellwetherTrial.court} | {PARAGARD_2026.bellwetherTrial.mdlNumber} | vs. {PARAGARD_2026.bellwetherTrial.defendant}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-purple-400">{(PARAGARD_2026.statistics.totalImplanted / 1000000).toFixed(1)}M+</p><p className="text-sm text-slate-400 mt-1">Devices Implanted</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-rose-400">{(PARAGARD_2026.statistics.lawsuitsFiled / 1000).toFixed(1)}K+</p><p className="text-sm text-slate-400 mt-1">Lawsuits Pending</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-yellow-400">{formatCurrency(PARAGARD_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-red-400">{PARAGARD_2026.statistics.defectRate}%</p><p className="text-sm text-slate-400 mt-1">Defect Rate</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Paragard Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon; return (
              <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-purple-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-purple-400" /></div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3>
                  <p className="text-sm text-slate-400">{calc.description}</p>
                  <span className="inline-flex items-center gap-1 text-purple-400 text-sm">Start <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Fracture Types & Settlements</h2>
          <div className="space-y-4">{PARAGARD_2026.fractureTypes.slice(0, 5).map((f, i) => (<div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{f.type}</h3><p className="text-sm text-slate-400">{f.description}</p></div><div className="text-right"><p className="text-lg font-bold text-purple-400">{formatCurrency(f.avgSettlement)}</p><p className="text-xs text-slate-500">Avg Settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If your Paragard IUD broke during removal, you may be entitled to significant compensation. First trial starts {PARAGARD_2026.bellwetherTrial.date}.</p>
        <Link href="/paragard/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>

      
      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="paragard" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-purple-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
          <p className="text-sm text-slate-400 text-center">{PARAGARD_2026.citation}. For informational purposes only.</p>
          <p className="text-sm text-slate-500">© {SITE.year} {SITE.name}</p>
        </div>
      </footer>
    </>
  );
}
