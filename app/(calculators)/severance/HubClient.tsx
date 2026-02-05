"use client";

import Link from "next/link";
import { SITE, CALCULATORS, SEVERANCE_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/severance";
import { ArrowRight, DollarSign, Briefcase, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Data
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Severance Pay
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your severance package. Estimate what you should receive
            based on your salary, tenure, and company practices.
          </p>

          <Link
            href="/severance/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Package
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span><strong>{SEVERANCE_CONSTANTS_2026.statistics.pctWhoNegotiate}%</strong> of employees who negotiate get a better package</span>
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
                {SEVERANCE_CONSTANTS_2026.statistics.companiesOfferingSeverance}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Companies Offer Severance</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {SEVERANCE_CONSTANTS_2026.statistics.avgSeveranceWeeks}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Weeks Offered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {SEVERANCE_CONSTANTS_2026.statistics.avgWithNegotiation}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg After Negotiating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">1-2 wks</p>
              <p className="text-sm text-slate-400 mt-1">Per Year is Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Severance Tools
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

      {/* Severance Formulas */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Common Severance Formulas
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold text-white">Standard</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-400 mb-2">1 week</p>
              <p className="text-sm text-slate-400">per year of service</p>
              <p className="text-xs text-slate-500 mt-2">Most common formula</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-emerald-500/50">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Generous</h3>
              </div>
              <p className="text-3xl font-bold text-green-400 mb-2">2 weeks</p>
              <p className="text-sm text-slate-400">per year of service</p>
              <p className="text-xs text-slate-500 mt-2">Tech/finance standard</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Executive</h3>
              </div>
              <p className="text-3xl font-bold text-blue-400 mb-2">4+ weeks</p>
              <p className="text-sm text-slate-400">per year of service</p>
              <p className="text-xs text-slate-500 mt-2">Senior executives</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          What&apos;s Often Included
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {SEVERANCE_CONSTANTS_2026.additionalBenefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
              <span className="text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Severance Package
        </h2>
        <p className="text-slate-400 mb-8">
          Get an estimate of what you should expect and negotiate for.
        </p>
        <Link
          href="/severance/calculator"
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
            <RelatedCalculators currentCalc="severance" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult an employment attorney for specific advice.
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
