import Link from "next/link";
import { SITE, CALCULATORS, DOWN_PAYMENT_2026, formatCurrency } from "@/lib/calculators/down-payment";
import { ArrowRight, Home, DollarSign, Percent } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-emerald-500" />
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
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Start Your Home Journey</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Down Payment
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate how much you need for a down payment.
            Free {SITE.year} calculator with PMI estimates.
          </p>

          <Link
            href="/down-payment/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Down Payment
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <Percent className="w-4 h-4" />
              <span>Average Down Payment: <strong>{DOWN_PAYMENT_2026.statistics.avgDownPayment}%</strong></span>
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
                {formatCurrency(DOWN_PAYMENT_2026.statistics.medianHomePrice)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Median Home Price</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {DOWN_PAYMENT_2026.statistics.avgDownPayment}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Average Down Payment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {DOWN_PAYMENT_2026.statistics.avgFirstTimeBuyer}%
              </p>
              <p className="text-sm text-slate-400 mt-1">First-Time Buyers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {DOWN_PAYMENT_2026.statistics.avgRepeatBuyer}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Repeat Buyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Home Buying Tools
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

      {/* Down Payment Options */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Down Payment Options
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {DOWN_PAYMENT_2026.percentages.map((opt) => (
              <div key={opt.percent} className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
                <p className="text-emerald-400 font-bold text-2xl">{opt.percent}%</p>
                <p className="text-white font-medium text-sm mt-1">{opt.name}</p>
                <p className={`text-xs mt-1 ${opt.pmiRequired ? 'text-yellow-400' : 'text-green-400'}`}>
                  {opt.pmiRequired ? 'PMI Required' : 'No PMI'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Plan Your Home Purchase
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate your down payment and start saving today.
        </p>
        <Link
          href="/down-payment/calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Calculate Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      
      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="down-payment" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              {DOWN_PAYMENT_2026.citation}. For informational purposes only.
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
