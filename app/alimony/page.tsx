import Link from "next/link";
import { SITE, CALCULATORS, ALIMONY_CONSTANTS_2026, STATE_ALIMONY, formatCurrency } from "@/lib/calculators/alimony";
import { ArrowRight, Scale, MapPin, AlertTriangle, FileText, Calculator } from "lucide-react";

export default function Home() {
  const topStates = Object.entries(STATE_ALIMONY).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-rose-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Data
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-slate-900 to-pink-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-rose-400" />
            <span className="text-sm text-rose-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alimony
            <span className="text-rose-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your spousal support payment or entitlement.
            State-specific formulas for California, Texas, New York, Florida, and all 50 states.
          </p>

          <Link
            href="/alimony/calculator"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Alimony
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Tax Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span><strong>Tax Change:</strong> Since 2019, alimony is NOT tax-deductible for payers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-400">
                {formatCurrency(ALIMONY_CONSTANTS_2026.statistics.avgMonthlyPayment)}/mo
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Monthly Payment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-400">
                {ALIMONY_CONSTANTS_2026.statistics.avgDurationYears} yrs
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Duration</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">10%</p>
              <p className="text-sm text-slate-400 mt-1">Divorces with Alimony</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">25%</p>
              <p className="text-sm text-slate-400 mt-1">Orders Modified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Alimony Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-rose-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-500/10 rounded-lg group-hover:bg-rose-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-rose-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* State Laws Preview */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Alimony by State
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topStates.map(([key, state]) => (
              <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <h3 className="font-semibold text-white">{state.name}</h3>
                </div>
                <p className="text-xs text-slate-400 mb-2 line-clamp-2">{state.formula}</p>
                <p className="text-sm font-medium text-rose-400">
                  Avg: {formatCurrency(state.avgMonthly)}/mo
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/alimony/state-laws"
              className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300"
            >
              View All State Laws <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Factors That Affect Alimony
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-5 h-5 text-rose-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Income Disparity</h3>
            <p className="text-sm text-slate-400">
              The difference between each spouse&apos;s earning capacity is the primary factor in most calculations.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-pink-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Marriage Length</h3>
            <p className="text-sm text-slate-400">
              Longer marriages typically result in longer alimony duration. 20+ year marriages may qualify for permanent support.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Standard of Living</h3>
            <p className="text-sm text-slate-400">
              Courts aim to maintain the marital standard of living for the lower-earning spouse, when possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Get Your Free Alimony Estimate
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate your potential spousal support in under 2 minutes.
        </p>
        <Link
          href="/alimony/calculator"
          className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
              <Scale className="w-5 h-5 text-rose-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Not legal advice. Consult a family law attorney.
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
