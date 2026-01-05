import Link from "next/link";
import { SITE, CALCULATORS, MORTGAGE_CONSTANTS, formatCurrency } from "@/lib/calculators/mortgage";
import { ArrowRight, Home, CheckCircle, TrendingDown, PiggyBank } from "lucide-react";

export default function HomePage() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);
  const { defaults } = MORTGAGE_CONSTANTS;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-slate-800">{SITE.name}</span>
          </div>
          <span className="text-xs text-white bg-blue-600 px-3 py-1 rounded-full font-bold">
            FREE {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-200">{SITE.year} Rates • No Sign-up Required</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE.year} Mortgage
            <span className="block text-blue-400">Calculator</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Calculate your monthly mortgage payment in seconds. Includes property tax,
            insurance, and PMI. Free and easy to use.
          </p>

          <Link
            href="/mortgage/calculator"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Calculate Payment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-blue-600">6</p>
              <p className="text-sm text-slate-500 mt-1">Free Calculators</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-slate-800">{defaults.interestRate}%</p>
              <p className="text-sm text-slate-500 mt-1">Avg Rate ({SITE.year})</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-slate-800">{formatCurrency(MORTGAGE_CONSTANTS.avgHomePriceUS)}</p>
              <p className="text-sm text-slate-500 mt-1">Avg Home Price (US)</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-green-600">28%</p>
              <p className="text-sm text-slate-500 mt-1">Max DTI Ratio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          Free {SITE.year} Mortgage Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-600 transition-colors mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 mb-3">
                    {calc.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all mt-auto">
                    Calculate <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Tools */}
        <div className="grid md:grid-cols-3 gap-4">
          {otherCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                  <span className="text-sm text-slate-600 group-hover:text-blue-600 font-medium">
                    {calc.shortName}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How Mortgage Works */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            What&apos;s Included in Your Payment
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
              <p className="text-2xl font-bold text-blue-600">P</p>
              <p className="text-sm font-medium text-slate-800">Principal</p>
              <p className="text-xs text-slate-500 mt-1">Loan paydown</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
              <p className="text-2xl font-bold text-blue-600">I</p>
              <p className="text-sm font-medium text-slate-800">Interest</p>
              <p className="text-xs text-slate-500 mt-1">Borrowing cost</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
              <p className="text-2xl font-bold text-blue-600">T</p>
              <p className="text-sm font-medium text-slate-800">Taxes</p>
              <p className="text-xs text-slate-500 mt-1">Property tax</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
              <p className="text-2xl font-bold text-blue-600">I</p>
              <p className="text-sm font-medium text-slate-800">Insurance</p>
              <p className="text-xs text-slate-500 mt-1">Home insurance</p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            + PMI if down payment is less than 20%
          </p>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          Mortgage Tips for {SITE.year}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <TrendingDown className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-slate-800">Lower Your Rate</h3>
            </div>
            <p className="text-sm text-slate-500">
              A 0.5% lower rate on a $400K loan saves ~$100/month or $36,000 over 30 years.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <PiggyBank className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-800">Avoid PMI</h3>
            </div>
            <p className="text-sm text-slate-500">
              Put 20% down to avoid PMI, which can add $100-300/month to your payment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Calculate Your Monthly Payment
          </h2>
          <p className="text-blue-100 mb-8">
            Get your personalized estimate in under 1 minute.
          </p>
          <Link
            href="/mortgage/calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl font-bold transition-colors"
          >
            <Home className="w-5 h-5" />
            Start Calculator
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              Estimates only. Consult a mortgage lender for exact rates and terms.
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
