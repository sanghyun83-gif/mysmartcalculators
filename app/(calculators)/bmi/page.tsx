import Link from "next/link";
import { SITE, CALCULATORS, BMI_2026 } from "@/lib/calculators/bmi";
import { ArrowRight, Scale, Activity, Heart } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-fuchsia-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Know Your Health</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BMI
            <span className="text-purple-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your Body Mass Index instantly.
            Free {SITE.year} calculator based on WHO and CDC guidelines.
          </p>

          <Link
            href="/bmi/calculator"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate My BMI
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-purple-300 text-sm">
              <Activity className="w-4 h-4" />
              <span>Healthy BMI Range: <strong>18.5 - 24.9</strong></span>
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
                {BMI_2026.statistics.avgBmiUS}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg US BMI</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-fuchsia-400">
                {BMI_2026.statistics.obesityRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">US Obesity Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-400">
                {BMI_2026.statistics.overweightRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Overweight</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {BMI_2026.statistics.normalWeightRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Healthy Weight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free BMI Tools
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

      {/* BMI Categories */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            BMI Categories (WHO)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BMI_2026.categories.map((cat) => (
              <div key={cat.name} className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
                <p className={`font-bold text-lg ${cat.color}`}>{cat.name}</p>
                <p className="text-slate-300 text-sm mt-1">{cat.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Check Your BMI Now
        </h2>
        <p className="text-slate-400 mb-8">
          Takes less than 30 seconds. No signup required.
        </p>
        <Link
          href="/bmi/calculator"
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
            <RelatedCalculators currentCalc="bmi" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              {BMI_2026.citation}. For informational purposes only.
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
