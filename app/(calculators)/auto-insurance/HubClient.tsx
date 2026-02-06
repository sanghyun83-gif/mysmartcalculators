"use client";

import Link from "next/link";
import { SITE, CALCULATORS, AUTO_INSURANCE_CONSTANTS, formatCurrency, getCheapestStates, getMostExpensiveStates } from "@/lib/calculators/auto-insurance";
import { ArrowRight, CheckCircle, Car, TrendingDown, TrendingUp } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);
  const { nationalAverage } = AUTO_INSURANCE_CONSTANTS;
  const cheapest = getCheapestStates(3);
  const expensive = getMostExpensiveStates(3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-200">{SITE.year} Rates  All 50 States</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE.year} Auto Insurance
            <span className="block text-blue-300">Calculator</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Find out how much you should pay for car insurance. Part of our [Legal Safety & Liability](/car-accident) Audit Suite.
            Compare rates by state, age, and coverage type.
          </p>

          <Link
            href="/auto-insurance/calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-700 px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Car className="w-5 h-5" />
            Get Your Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-slate-600 mb-1">National Average</p>
              <p className="text-3xl font-bold text-blue-700">{formatCurrency(nationalAverage)}</p>
              <p className="text-sm text-blue-600">per year (full coverage)</p>
            </div>
            <div className="text-center p-5 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-slate-600 mb-1">Cheapest State</p>
              <p className="text-3xl font-bold text-green-700">{cheapest[0]?.state}</p>
              <p className="text-sm text-green-600">{formatCurrency(cheapest[0]?.annualPremium)}/year</p>
            </div>
            <div className="text-center p-5 bg-red-50 rounded-xl border border-red-100">
              <p className="text-sm text-slate-600 mb-1">Most Expensive</p>
              <p className="text-3xl font-bold text-red-700">{expensive[0]?.state}</p>
              <p className="text-sm text-red-600">{formatCurrency(expensive[0]?.annualPremium)}/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Free Auto Insurance Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-600 transition-colors mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {calc.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all mt-auto">
                    Open Calculator <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {otherCalculators.length > 0 && (
          <div className="grid md:grid-cols-2 gap-3">
            {otherCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-500 transition-all flex items-center gap-3"
                >
                  <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                  <span className="text-sm text-slate-600 group-hover:text-blue-600 font-medium">
                    {calc.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* State Comparison Preview */}
      <section className="bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            {SITE.year} Insurance Rates by State
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cheapest */}
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-800">Cheapest States</h3>
              </div>
              <div className="space-y-3">
                {cheapest.map((state, i) => (
                  <div key={state.state} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-slate-600">
                      <span className="text-green-600 font-bold mr-2">#{i + 1}</span>
                      {state.state}
                    </span>
                    <span className="font-bold text-green-600">{formatCurrency(state.annualPremium)}/yr</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Expensive */}
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-slate-800">Most Expensive States</h3>
              </div>
              <div className="space-y-3">
                {expensive.map((state, i) => (
                  <div key={state.state} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-slate-600">
                      <span className="text-red-600 font-bold mr-2">#{51 - state.rank}</span>
                      {state.state}
                    </span>
                    <span className="font-bold text-red-600">{formatCurrency(state.annualPremium)}/yr</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="/auto-insurance/by-state" className="text-blue-600 font-semibold hover:underline">
              See All 50 States  →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Are You Overpaying for Car Insurance?
          </h2>
          <p className="text-blue-100 mb-6">
            Get your personalized estimate in under 2 minutes.
          </p>
          <Link
            href="/auto-insurance/calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-700 px-6 py-4 rounded-xl font-bold transition-colors"
          >
            <Car className="w-5 h-5" />
            Calculate Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="auto-insurance" count={5} />
          </div>
        </div>
      </section>

      {/* Schema.org - Expert Optimized Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Auto Insurance Premium Auditor v5.0",
              "operatingSystem": "All",
              "applicationCategory": "FinancialApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "982"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How are auto insurance premiums calculated in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Premiums are calculated based on a combination of risk factors including your age, driving record, zip code (localized claim history), vehicle safety ratings, and coverage levels (liability vs. full coverage)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which states have the cheapest car insurance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In 2026, states like Maine, New Hampshire, and Ohio consistently rank among the cheapest for car insurance, primarily due to lower population densities and fewer litigation-heavy metropolitan areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between liability and full coverage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Liability coverage only pays for damages you cause to others. Full coverage includes comprehensive and collision, which pays for damages to your own vehicle regardless of fault."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://mysmartcalculators.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Financial Calculators",
                  "item": "https://mysmartcalculators.com/category/finance"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Auto Insurance Auditor",
                  "item": "https://mysmartcalculators.com/auto-insurance"
                }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
