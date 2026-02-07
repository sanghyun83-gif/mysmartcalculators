"use client";

import Link from "next/link";
import { SITE, CALCULATORS, DIVISION_CONSTANTS_2026, ASSET_TYPES, COMMUNITY_PROPERTY_STATES, formatCurrency } from "@/lib/calculators/property-division";
import { ArrowRight, Home, Scale, PiggyBank, TrendingUp, Car, Gift, Briefcase } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const assetTypes = Object.entries(ASSET_TYPES);

  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-rose-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Laws
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-slate-900 to-pink-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-6">
            <Home className="w-4 h-4 text-rose-400" />
            <span className="text-sm text-rose-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Property Division
            <span className="text-rose-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate how marital assets will be divided in your divorce.
            Community property or equitable distribution based on your state.
          </p>

          <Link
            href="/property-division/division-calculator"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Split
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <Scale className="w-4 h-4" />
              <span>9 states use <strong>community property</strong> (50/50 split), 41 use <strong>equitable distribution</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-400">
                {formatCurrency(DIVISION_CONSTANTS_2026.statistics.avgMaritalAssets)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Marital Assets</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-400">
                {formatCurrency(DIVISION_CONSTANTS_2026.statistics.avgHomeEquity)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Home Equity</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">9</p>
              <p className="text-sm text-slate-400 mt-1">Community Property States</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">
                {DIVISION_CONSTANTS_2026.statistics.divorcesWith401k}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Involve Retirement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Division Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-rose-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-500/10 rounded-lg group-hover:bg-rose-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-rose-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Asset Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of Marital Assets
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Home className="w-5 h-5 text-rose-400" />
                <h3 className="font-semibold text-white">Real Estate</h3>
              </div>
              <p className="text-sm text-slate-400">Home equity, rental properties, land</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <PiggyBank className="w-5 h-5 text-pink-400" />
                <h3 className="font-semibold text-white">Retirement</h3>
              </div>
              <p className="text-sm text-slate-400">401(k), IRA, pension, military</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Investments</h3>
              </div>
              <p className="text-sm text-slate-400">Stocks, bonds, savings, crypto</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Car className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Vehicles</h3>
              </div>
              <p className="text-sm text-slate-400">Cars, boats, motorcycles, RVs</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Personal Property</h3>
              </div>
              <p className="text-sm text-slate-400">Furniture, jewelry, collectibles</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-white">Business Interests</h3>
              </div>
              <p className="text-sm text-slate-400">LLC shares, partnerships, options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Property States */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Community Property States (50/50 Split)
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {COMMUNITY_PROPERTY_STATES.map((state) => (
            <span
              key={state.abbr}
              className="px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-300"
            >
              {state.name}
            </span>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          All other states use <strong>equitable distribution</strong> (fair, but not necessarily equal)
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          See How Your Assets Will Be Split
        </h2>
        <p className="text-slate-400 mb-8">
          Enter your assets and get an estimate of the division.
        </p>
        <Link
          href="/property-division/division-calculator"
          className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="property-division" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-rose-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult a divorce attorney for your case.
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
