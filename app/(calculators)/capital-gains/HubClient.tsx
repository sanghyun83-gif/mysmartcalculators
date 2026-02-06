"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CAPITAL_GAINS_2026, formatCurrency } from "@/lib/calculators/capital-gains";
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Capital Gains Tax
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate capital gains tax on stocks, crypto, real estate, and other investments.
            Includes federal rates, NIIT, and state taxes.
          </p>

          <Link
            href="/capital-gains/gains-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Tax
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Long-term gains taxed at <strong>0%, 15%, or 20%</strong> (held over 1 year)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">0%</p>
              <p className="text-sm text-slate-400 mt-1">Lowest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">15%</p>
              <p className="text-sm text-slate-400 mt-1">Most Common Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">20%</p>
              <p className="text-sm text-slate-400 mt-1">Highest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">3.8%</p>
              <p className="text-sm text-slate-400 mt-1">NIIT Surtax</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Capital Gains Tools
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

      {/* Long vs Short Term */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Long-Term vs Short-Term Gains
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Long-Term</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">Held more than 1 year</p>
              <ul className="text-sm text-emerald-300 space-y-1">
                <li> 0% if income under {formatCurrency(CAPITAL_GAINS_2026.longTermRates.single[0].max)}</li>
                <li> 15% for most taxpayers</li>
                <li> 20% for high earners</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-semibold text-white">Short-Term</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">Held 1 year or less</p>
              <ul className="text-sm text-red-300 space-y-1">
                <li> Taxed as ordinary income</li>
                <li> Rates from 10% to 37%</li>
                <li> Can be much higher than LT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Capital Gains Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Hold investments over 1 year for lower rates",
            "NIIT adds 3.8% for high earners",
            "Some states have no capital gains tax",
            "Losses can offset gains (up to $3,000/year)",
            "Primary home exclusion: $250K/$500K",
            "Qualified dividends get LT rates",
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
          Calculate Your Investment Tax
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} tax rates.
        </p>
        <Link
          href="/capital-gains/gains-calculator"
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
            <RelatedCalculators currentCalc="capital-gains" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
