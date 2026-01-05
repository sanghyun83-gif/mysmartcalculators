import Link from "next/link";
import { SITE, CALCULATORS, SSDI_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/ssdi";
import { ArrowRight, DollarSign, Clock, AlertTriangle, FileText, Calculator } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Data
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-violet-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SSDI Back Pay
            <span className="text-purple-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your Social Security Disability back pay.
            Estimate your retroactive payment, attorney fees, and when you&apos;ll receive your lump sum.
          </p>

          <Link
            href="/ssdi/calculator"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Back Pay
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <Clock className="w-4 h-4" />
              <span>Average back pay: <strong>{formatCurrency(SSDI_CONSTANTS_2026.statistics.avgBackPayAmount)}</strong>
                ({SSDI_CONSTANTS_2026.statistics.avgBackPayMonths} months)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">
                {formatCurrency(SSDI_CONSTANTS_2026.avgMonthlyBenefit)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Monthly Benefit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-violet-400">
                {SSDI_CONSTANTS_2026.statistics.avgBackPayMonths} mo
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Back Pay Period</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-400">5 mo</p>
              <p className="text-sm text-slate-400 mt-1">Waiting Period</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">22 mo</p>
              <p className="text-sm text-slate-400 mt-1">Avg Approval Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free SSDI Tools
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

      {/* Back Pay Breakdown */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How SSDI Back Pay Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">5-Month Waiting Period</h3>
              <p className="text-sm text-slate-400">
                By law, SSDI benefits don&apos;t start until 5 full months after your disability onset date. This waiting period is not paid.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Back Pay Accumulates</h3>
              <p className="text-sm text-slate-400">
                From month 6 after onset until approval, you accrue back pay. The longer the wait, the larger your lump sum.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Retroactive Benefits</h3>
              <p className="text-sm text-slate-400">
                You may also receive up to 12 months of retroactive benefits for the period before you applied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Fees */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Attorney Fees for SSDI
        </h2>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-400 mb-1">Fee Percentage</p>
              <p className="text-3xl font-bold text-purple-400">25%</p>
              <p className="text-xs text-slate-500">of your back pay</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Maximum Fee ({SITE.year})</p>
              <p className="text-3xl font-bold text-violet-400">{formatCurrency(SSDI_CONSTANTS_2026.attorneyFees.maxFee)}</p>
              <p className="text-xs text-slate-500">whichever is less</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              <strong className="text-white">Note:</strong> Attorney fees are regulated by the SSA and paid directly from your back pay.
              The fee cannot exceed 25% of back pay or ${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()}, whichever is less.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out How Much Back Pay You&apos;re Owed
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate your SSDI back payment in under 2 minutes.
        </p>
        <Link
          href="/ssdi/calculator"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
              <DollarSign className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Contact SSA or a disability attorney for official information.
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
