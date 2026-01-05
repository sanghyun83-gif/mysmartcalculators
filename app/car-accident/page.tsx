import Link from "next/link";
import { SITE, CALCULATORS, SETTLEMENT_CONSTANTS, formatCurrency } from "@/lib/calculators/car-accident";
import { ArrowRight, Shield, CheckCircle, Car, Scale, AlertTriangle, Gavel } from "lucide-react";

export default function Home() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);
  const avgSettlement = SETTLEMENT_CONSTANTS.averageSettlements;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-red-600" />
            <span className="text-lg font-bold text-slate-800">{SITE.name}</span>
          </div>
          <span className="text-xs text-white bg-red-600 px-3 py-1 rounded-full font-bold">
            FREE {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/50 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-200">Injured in a Car Accident?</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Car Accident Settlement
            <span className="block text-red-500">Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Find out how much your car accident claim is worth. Calculate medical bills,
            lost wages, and pain & suffering damages.
          </p>

          <Link
            href="/car-accident/settlement-calculator"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Scale className="w-5 h-5" />
            Calculate My Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-red-600">50</p>
              <p className="text-sm text-slate-500 mt-1">States Covered</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-slate-800">{formatCurrency(avgSettlement.moderate.low)}-{formatCurrency(avgSettlement.moderate.high)}</p>
              <p className="text-sm text-slate-500 mt-1">Avg. Moderate Injury</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-slate-800">1.5x-5x</p>
              <p className="text-sm text-slate-500 mt-1">Pain Multiplier Range</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-green-600">+30%</p>
              <p className="text-sm text-slate-500 mt-1">With Attorney</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          Free {SITE.year} Settlement Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-600 transition-colors">
                    <IconComponent className="w-6 h-6 text-red-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-red-600 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-red-600 text-sm mt-3 font-semibold group-hover:gap-2 transition-all">
                      Calculate Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Tools */}
        {otherCalculators.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4">
            {otherCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-red-500 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-red-600" />
                    <span className="text-sm text-slate-600 group-hover:text-red-600 font-medium">
                      {calc.shortName}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Settlement Ranges */}
      <section className="bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">
            Average Car Accident Settlements
          </h2>
          <p className="text-slate-500 text-center mb-8">
            Settlement values vary based on injury severity
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Minor Injury</p>
              <p className="text-lg font-bold text-slate-700">{formatCurrency(avgSettlement.minor.low)}</p>
              <p className="text-xs text-slate-400">to {formatCurrency(avgSettlement.minor.high)}</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Moderate Injury</p>
              <p className="text-lg font-bold text-slate-700">{formatCurrency(avgSettlement.moderate.low)}</p>
              <p className="text-xs text-slate-400">to {formatCurrency(avgSettlement.moderate.high)}</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-amber-200 bg-amber-50">
              <p className="text-xs text-amber-600 mb-1">Severe Injury</p>
              <p className="text-lg font-bold text-amber-700">{formatCurrency(avgSettlement.severe.low)}</p>
              <p className="text-xs text-amber-500">to {formatCurrency(avgSettlement.severe.high)}</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-red-200 bg-red-50">
              <p className="text-xs text-red-600 mb-1">Permanent Injury</p>
              <p className="text-lg font-bold text-red-700">{formatCurrency(avgSettlement.permanent.low)}</p>
              <p className="text-xs text-red-500">to {formatCurrency(avgSettlement.permanent.high)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Settlement Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          How Settlement Is Calculated
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Economic Damages</h3>
            <p className="text-sm text-slate-500">
              Medical bills + lost wages + property damage = your actual financial losses.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Pain & Suffering</h3>
            <p className="text-sm text-slate-500">
              Medical bills × multiplier (1.5x-5x) based on injury severity.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-red-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Fault Reduction</h3>
            <p className="text-sm text-slate-500">
              Total reduced by your fault percentage (based on state law).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Calculate Your Settlement Now
          </h2>
          <p className="text-red-100 mb-8">
            Get your free estimate in under 2 minutes. No email required.
          </p>
          <Link
            href="/car-accident/settlement-calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-red-600 px-8 py-4 rounded-xl font-bold transition-colors"
          >
            <Scale className="w-5 h-5" />
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
              <Car className="w-5 h-5 text-red-500" />
              <span className="font-semibold">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              Estimates only. Not legal advice. Consult a personal injury attorney for your specific case.
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
