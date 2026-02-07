"use client";

import Link from "next/link";
import { SITE, CALCULATORS, UMBRELLA_2026, formatCurrency, formatMillions } from "@/lib/calculators/umbrella-insurance";
import { ArrowRight, Shield, DollarSign, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Excess Liability Protection</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Umbrella Insurance
            <span className="text-blue-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate umbrella insurance costs and protect your assets.
            Free {SITE.year} calculator for excess liability coverage.
          </p>

          <Link
            href="/umbrella-insurance/umbrella-calculator"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Premium
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>$1M Coverage: <strong>{formatCurrency(UMBRELLA_2026.avgPremiums.oneMillion)}/year</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {formatCurrency(UMBRELLA_2026.statistics.avgAnnualCost)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Annual Cost</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                $1-10M
              </p>
              <p className="text-sm text-slate-400 mt-1">Coverage Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-400">
                {formatCurrency(UMBRELLA_2026.statistics.avgLawsuitCost)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Lawsuit Cost</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-400">
                {formatMillions(UMBRELLA_2026.statistics.avgPolicyLimit)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Umbrella Insurance Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-blue-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Coverage Tiers */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {SITE.year} Umbrella Policy Costs
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
              <p className="text-blue-400 font-bold text-lg">$1M</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(UMBRELLA_2026.avgPremiums.oneMillion)}</p>
              <p className="text-xs text-slate-400">/year</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
              <p className="text-blue-400 font-bold text-lg">$2M</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(UMBRELLA_2026.avgPremiums.twoMillion)}</p>
              <p className="text-xs text-slate-400">/year</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
              <p className="text-blue-400 font-bold text-lg">$3M</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(UMBRELLA_2026.avgPremiums.threeMillion)}</p>
              <p className="text-xs text-slate-400">/year</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
              <p className="text-blue-400 font-bold text-lg">$5M</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(UMBRELLA_2026.avgPremiums.fiveMillion)}</p>
              <p className="text-xs text-slate-400">/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Why Need Umbrella Insurance?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Covers claims beyond auto/home limits",
            "Protects assets like savings and investments",
            "Covers libel and slander lawsuits",
            "Worldwide coverage protection",
            "Very affordable per $1M coverage",
            "Required for high net worth individuals",
          ].map((fact, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
              <span className="text-slate-300">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Protect Your Assets Today
        </h2>
        <p className="text-slate-400 mb-8">
          See how affordable umbrella insurance can be.
        </p>
        <Link
          href="/umbrella-insurance/umbrella-calculator"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="umbrella-insurance" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              {UMBRELLA_2026.citation}. For informational purposes only.
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
