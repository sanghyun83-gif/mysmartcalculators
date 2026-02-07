"use client";

import Link from "next/link";
import { SITE, CALCULATORS, RMD_2026, formatCurrency } from "@/lib/calculators/rmd";
import { ArrowRight, TrendingDown, DollarSign, Calendar, CheckCircle, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-teal-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingDown className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">SECURE 2.0 Updated</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            RMD
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your Required Minimum Distribution from IRAs and 401(k)s.
            Free {SITE.year} calculator with updated IRS tables.
          </p>

          <Link
            href="/rmd/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your RMD
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <Calendar className="w-4 h-4" />
              <span>RMD starting age: <strong>{RMD_2026.startingAge}</strong> (SECURE 2.0)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">
                {RMD_2026.startingAge}
              </p>
              <p className="text-sm text-slate-400 mt-1">Starting Age</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(RMD_2026.statistics.avgRmd)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Annual RMD</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {RMD_2026.missedPenalty}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Missed RMD Penalty</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                Dec 31
              </p>
              <p className="text-sm text-slate-400 mt-1">Annual Deadline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free RMD Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Accounts Requiring RMDs */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Which Accounts Require RMDs?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                RMDs Required
              </h3>
              <ul className="space-y-2">
                {RMD_2026.accountTypes.map((account, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    {account}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No RMDs Required
              </h3>
              <ul className="space-y-2">
                {RMD_2026.noRmdAccounts.map((account, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    {account}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          RMD Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "RMDs start at age 73 (SECURE 2.0)",
            "First RMD deadline: April 1 of next year",
            "Subsequent RMDs due December 31",
            "Penalty reduced from 50% to 25%",
            "Roth IRAs: no RMDs for original owner",
            "Inherited IRAs: 10-year rule applies",
          ].map((fact, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
              <span className="text-slate-300">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your RMD
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation using {SITE.year} IRS tables.
        </p>
        <Link
          href="/rmd/calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      
      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="rmd" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult a tax professional.
            </p>
            <p className="text-sm text-slate-500">
              © {SITE.year} {SITE.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
