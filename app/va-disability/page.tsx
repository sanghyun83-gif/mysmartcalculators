import Link from "next/link";
import { SITE, CALCULATORS, VA_RATES_2026, formatCurrency } from "@/lib/calculators/va-disability";
import { ArrowRight, Award, Shield, DollarSign, Users, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Rates
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-indigo-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VA Disability
            <span className="text-purple-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your VA disability compensation. Estimate monthly payments
            based on your rating, dependents, and {SITE.year} VA rates.
          </p>

          <Link
            href="/va-disability/va-calculator"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Benefits
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Veterans Stat */}
          <div className="mt-8 bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-purple-300 text-sm">
              <Users className="w-4 h-4" />
              <span><strong>{(VA_RATES_2026.statistics.totalVeteransWithDisability / 1000000).toFixed(1)}M</strong> veterans receive VA disability compensation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Rates Preview */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            {SITE.year} VA Disability Rates (Veteran Only)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[10, 30, 50, 70, 100].map((rating) => (
              <div key={rating} className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
                <p className="text-2xl font-bold text-purple-400">{rating}%</p>
                <p className="text-lg font-semibold text-white mt-1">
                  {formatCurrency(VA_RATES_2026.veteranOnly[rating])}
                </p>
                <p className="text-xs text-slate-500 mt-1">per month</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free VA Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            VA Disability Key Facts
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Ratings range from 0% to 100% in 10% increments",
              "Multiple ratings use VA combined math, not addition",
              "Dependent benefits start at 30% rating",
              "100% rating = Special Monthly Compensation eligibility",
              "Benefits are tax-free at federal level",
              "Annual COLA increase every December",
            ].map((fact, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                <span className="text-slate-300">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">
              {VA_RATES_2026.statistics.avgRating}%
            </p>
            <p className="text-sm text-slate-400 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-400">
              {formatCurrency(VA_RATES_2026.statistics.avgMonthlyPayment)}
            </p>
            <p className="text-sm text-slate-400 mt-1">Avg Monthly Payment</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-400">
              {VA_RATES_2026.statistics.claimsProcessingDays}
            </p>
            <p className="text-sm text-slate-400 mt-1">Days to Process Claim</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-fuchsia-400">
              {formatCurrency(VA_RATES_2026.veteranOnly[100])}
            </p>
            <p className="text-sm text-slate-400 mt-1">100% Rating Payment</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your VA Compensation
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} VA rates.
        </p>
        <Link
          href="/va-disability/va-calculator"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="va-disability" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              Not affiliated with the VA. For informational purposes only.
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
