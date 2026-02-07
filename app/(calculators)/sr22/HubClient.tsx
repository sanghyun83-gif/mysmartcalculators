"use client";

import Link from "next/link";
import { SITE, CALCULATORS, SR22_CONSTANTS_2026, STATE_SR22, formatCurrency } from "@/lib/calculators/sr22";
import { ArrowRight, Shield, MapPin, AlertTriangle, Car, FileText } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const topStates = Object.entries(STATE_SR22).slice(0, 4);

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
            {SITE.year} Rates
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SR-22
            <span className="text-blue-400"> Insurance Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your SR-22 insurance cost after a DUI, license suspension, or driving violation.
            See rates by state and find affordable high-risk coverage.
          </p>

          <Link
            href="/sr22/calculator"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your SR-22 Cost
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>SR-22 can increase your insurance by <strong>50-150%</strong> depending on the violation</span>
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
                {formatCurrency(SR22_CONSTANTS_2026.statistics.avgAnnualCost)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Annual Increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {SR22_CONSTANTS_2026.statistics.avgFilingPeriod} yrs
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Filing Period</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">80%</p>
              <p className="text-sm text-slate-400 mt-1">DUI Rate Increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">$25</p>
              <p className="text-sm text-slate-400 mt-1">Avg Filing Fee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free SR-22 Tools
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

      {/* State Costs Preview */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            SR-22 Costs by State
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topStates.map(([key, state]) => (
              <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <h3 className="font-semibold text-white">{state.name}</h3>
                </div>
                <p className="text-xs text-slate-400 mb-1">Min Liability: {state.minimumLiability}</p>
                <p className="text-xs text-slate-400 mb-2">Filing: {state.filingPeriod} years</p>
                <p className="text-lg font-bold text-blue-400">
                  {formatCurrency(state.avgAnnualCost)}/yr
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/sr22/state-requirements"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              View All State Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is SR-22 */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          What is SR-22 Insurance?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Certificate of Responsibility</h3>
            <p className="text-sm text-slate-400">
              SR-22 is a form filed by your insurance company proving you have the state&apos;s minimum liability coverage.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Required After Violations</h3>
            <p className="text-sm text-slate-400">
              Typically required after DUI/DWI, driving without insurance, license suspension, or multiple traffic violations.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Car className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Usually 3 Years</h3>
            <p className="text-sm text-slate-400">
              Most states require SR-22 filing for 3 years. Any lapse can restart the clock and result in license suspension.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out Your SR-22 Insurance Cost
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate based on your violation type and state requirements.
        </p>
        <Link
          href="/sr22/calculator"
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
            <RelatedCalculators currentCalc="sr22" count={5} />
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
              For informational purposes only. Get quotes from licensed insurance agents.
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
