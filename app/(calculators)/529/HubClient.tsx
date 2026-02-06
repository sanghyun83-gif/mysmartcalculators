"use client";

import Link from "next/link";
import { SITE, CALCULATORS, PLAN_529_2026, formatCurrency } from "@/lib/calculators/529";
import { ArrowRight, GraduationCap, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-teal-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Tax-Free College Savings</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            529 Plan
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate 529 plan growth and see how much you&apos;ll save for college.
            Tax-free growth for education expenses.
          </p>

          <Link
            href="/529/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Now
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Limit Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>{SITE.year} Gift Limit: <strong>{formatCurrency(PLAN_529_2026.annualGiftExclusion)}</strong>/beneficiary ??Superfunding: <strong>{formatCurrency(PLAN_529_2026.superfunding)}</strong></span>
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
                {formatCurrency(PLAN_529_2026.annualGiftExclusion)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Annual Gift Limit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                0%
              </p>
              <p className="text-sm text-slate-400 mt-1">Tax on Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {PLAN_529_2026.statistics.statesWithDeduction}
              </p>
              <p className="text-sm text-slate-400 mt-1">States w/ Deduction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                ${PLAN_529_2026.statistics.totalAssets}B
              </p>
              <p className="text-sm text-slate-400 mt-1">Total 529 Assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free 529 Tools
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

      {/* Qualified Expenses */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            What 529 Funds Can Pay For
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {PLAN_529_2026.qualifiedExpenses.map((expense, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                <span className="text-slate-300">{expense}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Cost Preview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          {SITE.year} Average College Costs
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5 text-center">
            <p className="text-sm text-emerald-400 font-semibold">Public 4-Year (In-State)</p>
            <p className="text-3xl font-bold text-white mt-2">{formatCurrency(PLAN_529_2026.collegeCostPublic4Year)}</p>
            <p className="text-xs text-slate-400 mt-1">per year</p>
          </div>
          <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-5 text-center">
            <p className="text-sm text-slate-400 font-semibold">Private 4-Year</p>
            <p className="text-3xl font-bold text-white mt-2">{formatCurrency(PLAN_529_2026.collegeCoestPrivate4Year)}</p>
            <p className="text-xs text-slate-400 mt-1">per year</p>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-4">
          College costs increase ~{PLAN_529_2026.avgAnnualIncrease}% annually
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Start Saving for College Today
        </h2>
        <p className="text-slate-400 mb-8">
          See how much your 529 plan can grow with tax-free compounding.
        </p>
        <Link
          href="/529/calculator"
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
            <RelatedCalculators currentCalc="529" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
