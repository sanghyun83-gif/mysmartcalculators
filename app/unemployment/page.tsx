import Link from "next/link";
import { SITE, CALCULATORS, UI_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/unemployment";
import { ArrowRight, Briefcase, DollarSign, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unemployment Benefits
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your weekly unemployment insurance benefits. Estimate your
            UI payment based on prior wages and state.
          </p>

          <Link
            href="/unemployment/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Benefits
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>UI typically replaces <strong>{UI_CONSTANTS_2026.statistics.replacementRate}%</strong> of your prior weekly wage</span>
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
                {formatCurrency(UI_CONSTANTS_2026.statistics.avgWeeklyBenefit)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Weekly Benefit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {UI_CONSTANTS_2026.benefitFormula.typicalDuration}
              </p>
              <p className="text-sm text-slate-400 mt-1">Weeks Maximum</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {UI_CONSTANTS_2026.statistics.replacementRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Wage Replacement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {(UI_CONSTANTS_2026.statistics.totalRecipients / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-slate-400 mt-1">Weekly Recipients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Unemployment Tools
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

      {/* State Maximums Preview */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {SITE.year} State Maximum Weekly Benefits
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(UI_CONSTANTS_2026.stateMaximums)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 6)
              .map(([state, max]) => (
                <div key={state} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <p className="text-sm text-slate-400">{state}</p>
                  <p className="text-2xl font-bold text-emerald-400">{formatCurrency(max)}</p>
                  <p className="text-xs text-slate-500">per week</p>
                </div>
              ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">
            Maximum varies by state. Use our calculator for your specific state.
          </p>
        </div>
      </section>

      {/* Eligibility Preview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Basic Eligibility Requirements
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Lost job through no fault of your own",
            "Earned minimum base period wages",
            "Able and available to work",
            "Actively seeking employment",
            "Meet state-specific requirements",
            "Not receiving other disqualifying income",
          ].map((req, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
              <span className="text-slate-300">{req}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/eligibility-guide" className="text-emerald-400 hover:text-emerald-300 text-sm">
            Learn more about eligibility →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Unemployment Benefits
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant estimate based on your state and wages.
        </p>
        <Link
          href="/unemployment/calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Contact your state labor department for official information.
            </p>
            <p className="text-sm text-slate-500">
              © {SITE.year} {SITE.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
