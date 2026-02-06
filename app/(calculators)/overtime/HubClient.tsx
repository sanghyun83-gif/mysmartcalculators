"use client";

import Link from "next/link";
import { SITE, CALCULATORS, OVERTIME_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/overtime";
import { ArrowRight, Clock, DollarSign, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} FLSA
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Overtime Pay
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your overtime earnings. Time and a half, double time,
            and see exactly how much you should be paid.
          </p>

          <Link
            href="/overtime/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your OT Pay
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Overtime = <strong>1.5× your regular rate</strong> after 40 hours/week (FLSA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">1.5×</p>
              <p className="text-sm text-slate-400 mt-1">Time and a Half</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">40 hrs</p>
              <p className="text-sm text-slate-400 mt-1">Weekly Threshold</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {OVERTIME_CONSTANTS_2026.statistics.workersEligible}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Workers Eligible</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">$15B</p>
              <p className="text-sm text-slate-400 mt-1">Unpaid OT Yearly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Overtime Tools
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

      {/* OT Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of Overtime Pay
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <p className="text-3xl font-bold text-emerald-400 mb-2">1.5×</p>
              <h3 className="font-semibold text-white mb-1">Time and a Half</h3>
              <p className="text-sm text-slate-400">50% more than regular rate. Standard overtime.</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-emerald-500/50">
              <p className="text-3xl font-bold text-green-400 mb-2">2×</p>
              <h3 className="font-semibold text-white mb-1">Double Time</h3>
              <p className="text-sm text-slate-400">Twice regular rate. CA after 12 hrs/day.</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <p className="text-3xl font-bold text-blue-400 mb-2">3×</p>
              <h3 className="font-semibold text-white mb-1">Triple Time</h3>
              <p className="text-sm text-slate-400">Rare. Some union contracts only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exempt vs Non-Exempt Preview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Who Gets Overtime?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-white">Non-Exempt (Gets OT)</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>??Hourly workers</li>
              <li>??Salaried under ${Math.round(OVERTIME_CONSTANTS_2026.federal.salaryThreshold / 1000)}K/year</li>
              <li>??Most blue collar jobs</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="font-semibold text-white">Exempt (No OT)</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>??Executive, admin, professional</li>
              <li>??Salaried over ${Math.round(OVERTIME_CONSTANTS_2026.federal.salaryThreshold / 1000)}K/year</li>
              <li>??Outside sales, computer pros</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/overtime/flsa-guide" className="text-emerald-400 hover:text-emerald-300 text-sm">
            Learn more about FLSA exemptions  →</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Overtime Pay
        </h2>
        <p className="text-slate-400 mb-8">
          Enter your hours and hourly rate to see your earnings.
        </p>
        <Link
          href="/overtime/calculator"
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
            <RelatedCalculators currentCalc="overtime" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-500" />
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
