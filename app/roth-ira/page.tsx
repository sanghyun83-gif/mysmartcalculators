import Link from "next/link";
import { SITE, CALCULATORS, ROTH_2026, formatCurrency } from "@/lib/calculators/roth-ira";
import { ArrowRight, TrendingUp, DollarSign, Calendar, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-500" />
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
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Tax-Free Growth</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Roth IRA
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your Roth IRA growth and retirement value.
            See the power of tax-free compounding.
          </p>

          <Link
            href="/roth-ira/roth-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Growth
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Limit Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>{SITE.year} Limit: <strong>{formatCurrency(ROTH_2026.contributionLimit)}</strong> (+{formatCurrency(ROTH_2026.catchUpContribution)} if 50+)</span>
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
                {formatCurrency(ROTH_2026.contributionLimit)}
              </p>
              <p className="text-sm text-slate-400 mt-1">{SITE.year} Limit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                0%
              </p>
              <p className="text-sm text-slate-400 mt-1">Tax on Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {ROTH_2026.statistics.avgAnnualReturn}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Return</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                No RMDs
              </p>
              <p className="text-sm text-slate-400 mt-1">Required Distributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Roth IRA Tools
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

      {/* Benefits */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Why Roth IRA?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {ROTH_2026.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Limits Preview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          {SITE.year} Income Limits
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Single Filers</h3>
            <p className="text-sm text-slate-300">
              Full: Under {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutStart)}
            </p>
            <p className="text-sm text-slate-400">
              Phase-out: {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutStart)} - {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutEnd)}
            </p>
          </div>
          <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2">Married Filing Jointly</h3>
            <p className="text-sm text-slate-300">
              Full: Under {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutStart)}
            </p>
            <p className="text-sm text-slate-400">
              Phase-out: {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutStart)} - {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutEnd)}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Roth IRA Growth
        </h2>
        <p className="text-slate-400 mb-8">
          See how much you could have at retirement with tax-free growth.
        </p>
        <Link
          href="/roth-ira/roth-calculator"
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
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult a financial advisor.
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
