"use client";

import Link from "next/link";
import { SITE, CALCULATORS, HEALTH_2026, formatCurrency } from "@/lib/calculators/health-insurance";
import { ArrowRight, Heart, DollarSign, Shield, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">ACA Subsidies Available</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Health Insurance
            <span className="text-blue-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate health insurance costs and subsidy eligibility.
            Free {SITE.year} calculator with ACA marketplace estimates.
          </p>

          <Link
            href="/health-insurance/health-calculator"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Premium
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Avg Individual Premium: <strong>{formatCurrency(HEALTH_2026.avgPremiums.individual)}/month</strong></span>
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
                {formatCurrency(HEALTH_2026.avgPremiums.individual)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Monthly Premium</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {HEALTH_2026.statistics.uninsuredRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Uninsured Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-400">
                {HEALTH_2026.statistics.marketplaceCoverage}M
              </p>
              <p className="text-sm text-slate-400 mt-1">Marketplace Enrollees</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-400">
                {HEALTH_2026.statistics.employerCoverage}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Employer Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Health Insurance Tools
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

      {/* Metal Tiers */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {SITE.year} Health Plan Tiers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HEALTH_2026.metalTiers.map((tier, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
                <h3 className={`text-lg font-bold ${tier.name === 'Bronze' ? 'text-amber-600' :
                  tier.name === 'Silver' ? 'text-gray-400' :
                    tier.name === 'Gold' ? 'text-yellow-500' :
                      'text-purple-400'
                  }`}>
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-white mt-2">{tier.actuarialValue}%</p>
                <p className="text-xs text-slate-400">Coverage</p>
                <p className="text-sm text-blue-400 mt-2">{formatCurrency(tier.avgPremium)}/mo avg</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Health Insurance Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Open enrollment: Nov 1 - Jan 15",
            "ACA subsidies available up to 400% FPL",
            "Employer plans have lower premiums",
            "Bronze = lowest premium, highest deductible",
            "Silver = best for subsidy and CSR",
            "HDHP qualifies for HSA (tax-free savings)",
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
          Find Your Estimated Premium
        </h2>
        <p className="text-slate-400 mb-8">
          Check if you qualify for ACA subsidies.
        </p>
        <Link
          href="/health-insurance/health-calculator"
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
            <RelatedCalculators currentCalc="health-insurance" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
