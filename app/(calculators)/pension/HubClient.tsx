"use client";

import Link from "next/link";
import { SITE, CALCULATORS, PENSION_2026, formatCurrency } from "@/lib/calculators/pension";
import { ArrowRight, Briefcase, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-emerald-500" />
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
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pension
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your defined benefit pension. Estimate monthly payments,
            lump sum value, and early retirement options.
          </p>

          <Link
            href="/pension/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Pension
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Avg Private Pension: <strong>{formatCurrency(PENSION_2026.statistics.avgPrivatePension)}/mo</strong>  Public: <strong>{formatCurrency(PENSION_2026.statistics.avgPublicPension)}/mo</strong></span>
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
                {formatCurrency(PENSION_2026.statistics.avgPrivatePension)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Private/Mo</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(PENSION_2026.statistics.avgPublicPension)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Public/Mo</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {PENSION_2026.statistics.avgYearsOfService}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Years Service</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {PENSION_2026.statistics.percentWithPension}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Workers w/ Pension</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Pension Tools
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

      {/* Pension Formula */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How Pensions Are Calculated
          </h2>

          <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 text-center mb-6">
            <p className="text-lg text-emerald-300 font-mono">
              Monthly Benefit = Final Avg Salary × Years × Multiplier %
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-400">Low Multiplier</p>
              <p className="text-2xl font-bold text-white">{PENSION_2026.benefitMultipliers.low}%</p>
              <p className="text-xs text-slate-500">per year of service</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 text-center border border-emerald-500/50">
              <p className="text-sm text-slate-400">Average</p>
              <p className="text-2xl font-bold text-emerald-400">{PENSION_2026.benefitMultipliers.average}%</p>
              <p className="text-xs text-slate-500">per year of service</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-400">Generous</p>
              <p className="text-2xl font-bold text-white">{PENSION_2026.benefitMultipliers.generous}%</p>
              <p className="text-xs text-slate-500">per year of service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Pension Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Based on final average salary (last 3-5 years)",
            "Years of service multiplied by benefit factor",
            "Early retirement may reduce benefits 6%/year",
            "Lump sum option available at some employers",
            "Survivor benefits for spouse (usually 50%)",
            "COLA adjustments vary by plan",
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
          Estimate Your Pension
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation for {SITE.year}.
        </p>
        <Link
          href="/pension/calculator"
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
            <RelatedCalculators currentCalc="pension" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult your HR department.
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
