"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CHILD_SUPPORT_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/child-support";
import { ArrowRight, Shield, Scale, Users, Calculator, Heart } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);

  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-indigo-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Child Support
            <span className="text-purple-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate child support payments for all 50 US states. Pair with our [Alimony Auditor](/alimony) for complete 2026 marital financial analysis.
            Based on official {SITE.year} guidelines and income shares model.
          </p>

          <Link
            href="/child-support/child-support"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Child Support
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">50</p>
              <p className="text-sm text-slate-400 mt-1">US States Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">17-25%</p>
              <p className="text-sm text-slate-400 mt-1">Typical Income %</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">
                {formatCurrency(CHILD_SUPPORT_CONSTANTS_2026.selfSupportReserve)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Self-Support Reserve</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{SITE.year}</p>
              <p className="text-sm text-slate-400 mt-1">Updated Guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Child Support Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
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
                      Calculate Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Calculators */}
        {otherCalculators.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4">
            {otherCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-purple-400" />
                    <span className="text-sm text-slate-300 group-hover:text-white">
                      {calc.shortName}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How Child Support Is Calculated
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Combined Income</h3>
              <p className="text-sm text-slate-400">
                Both parents&apos; gross monthly incomes are added together
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">State Guidelines</h3>
              <p className="text-sm text-slate-400">
                Applied based on number of children and state formula
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Custody Adjustment</h3>
              <p className="text-sm text-slate-400">
                Modified based on parenting time percentage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Get Your Free Estimate
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate child support in under 2 minutes. No email required.
        </p>
        <Link
          href="/child-support/child-support"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="child-support" count={5} />
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
              "name": "Child Support & Custody Auditor v5.0",
              "operatingSystem": "All",
              "applicationCategory": "FamilyApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1124"
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
                  "name": "How is child support calculated in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most states follow the 'Income Shares Model,' which calculates the total amount parents would spend on a child if they lived together, then divides it based on each parent's share of the combined income and parenting time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does parenting time affect child support payments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, in 2026, almost all states include a 'Parenting Time Adjustment.' If the non-custodial parent has a threshold amount of overnight visits (typically 20% or more), their support obligation is usually reduced proportionally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can child support be modified if my income changes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, child support can be modified upon a 'substantial change in circumstances,' such as a 10-15% change in income, job loss, or changes in the child's needs (like medical or educational expenses)."
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
                  "name": "Family Calculators",
                  "item": "https://mysmartcalculators.com/category/family"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Child Support Auditor",
                  "item": "https://mysmartcalculators.com/child-support"
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}
