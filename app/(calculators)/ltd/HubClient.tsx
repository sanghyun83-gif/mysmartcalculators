"use client";

import Link from "next/link";
import { SITE, CALCULATORS, LTD_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/ltd";
import { ArrowRight, Shield, DollarSign, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-indigo-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Long Term Disability
            <span className="text-blue-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your LTD insurance benefits. Estimate monthly payouts
            based on your income, policy terms, and coverage limits.
          </p>

          <Link
            href="/ltd/calculator"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Benefits
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span><strong>{LTD_CONSTANTS_2026.statistics.disabilityChance}%</strong> of workers become disabled before age 65</span>
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
                {LTD_CONSTANTS_2026.benefitPercentages.standard}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Standard Coverage</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-400">
                {formatCurrency(LTD_CONSTANTS_2026.maxMonthlyBenefits.typical)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Typical Max/Month</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {LTD_CONSTANTS_2026.statistics.avgDisabilityLength}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Months Disabled</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-400">
                {LTD_CONSTANTS_2026.statistics.workersWithLTD}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Workers Have LTD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free LTD Tools
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

      {/* How LTD Works */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How LTD Insurance Works
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Waiting Period</h3>
              </div>
              <p className="text-3xl font-bold text-blue-400 mb-2">90 Days</p>
              <p className="text-sm text-slate-400">Typical elimination period before benefits start</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-blue-500/50">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-indigo-400" />
                <h3 className="font-semibold text-white">Benefit Amount</h3>
              </div>
              <p className="text-3xl font-bold text-indigo-400 mb-2">60%</p>
              <p className="text-sm text-slate-400">Of your pre-disability income</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-white">Benefit Duration</h3>
              </div>
              <p className="text-3xl font-bold text-cyan-400 mb-2">To Age 65</p>
              <p className="text-sm text-slate-400">Most comprehensive coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* What LTD Covers */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          What LTD Covers
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Chronic illness and diseases",
            "Musculoskeletal disorders (back, neck)",
            "Mental health conditions",
            "Cancer treatment recovery",
            "Heart disease and stroke",
            "Injuries from accidents",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
              <span className="text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your LTD Benefits
        </h2>
        <p className="text-slate-400 mb-8">
          See how much you could receive if you become disabled.
        </p>
        <Link
          href="/ltd/calculator"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </>
  );
}
