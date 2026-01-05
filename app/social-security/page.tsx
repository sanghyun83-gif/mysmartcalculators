import Link from "next/link";
import { SITE, CALCULATORS, SS_2026, formatCurrency } from "@/lib/calculators/social-security";
import { ArrowRight, Users, DollarSign, Calendar, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-blue-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Social Security
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Estimate your retirement benefits at 62, Full Retirement Age, and 70.
            See how claiming age affects your monthly check.
          </p>

          <Link
            href="/ss-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Benefits
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>{SITE.year} Avg Monthly: <strong>{formatCurrency(SS_2026.avgBenefit)}</strong> • Max at 70: <strong>{formatCurrency(SS_2026.maxBenefitAge70)}</strong></span>
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
                {(SS_2026.statistics.beneficiaries / 1000000).toFixed(0)}M
              </p>
              <p className="text-sm text-slate-400 mt-1">Beneficiaries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(SS_2026.avgBenefit)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Monthly</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {formatCurrency(SS_2026.maxBenefitAge70)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Max at 70</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                67
              </p>
              <p className="text-sm text-slate-400 mt-1">Full Retirement Age</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Social Security Tools
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

      {/* Claiming Age Comparison */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            When Should You Claim?
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-red-400">62</p>
              <p className="text-white font-semibold mt-2">Earliest Age</p>
              <p className="text-sm text-slate-400 mt-2">~30% reduction</p>
              <p className="text-xs text-red-300 mt-1">Lower monthly, more checks</p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-emerald-400">67</p>
              <p className="text-white font-semibold mt-2">Full Retirement Age</p>
              <p className="text-sm text-slate-400 mt-2">100% of PIA</p>
              <p className="text-xs text-emerald-300 mt-1">Your full benefit</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-blue-400">70</p>
              <p className="text-white font-semibold mt-2">Maximum Age</p>
              <p className="text-sm text-slate-400 mt-2">+24% increase</p>
              <p className="text-xs text-blue-300 mt-1">Highest monthly benefit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Social Security Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Benefits based on highest 35 years of earnings",
            "COLA adjustment annually for inflation",
            "Spousal benefits up to 50% of worker's PIA",
            "Survivor benefits for widows/widowers",
            "Earnings test applies if working before FRA",
            "Medicare enrollment at 65 (separate from SS)",
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
          Estimate Your Benefits
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} rates.
        </p>
        <Link
          href="/ss-calculator"
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
              <Users className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Visit SSA.gov for official info.
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
