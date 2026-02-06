"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, TIP_2026, formatCurrency } from "@/lib/calculators/tip";
import {
    ArrowRight, DollarSign, Users, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, Info, Receipt,
    CreditCard, Utensils, Coffee, Car
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "How much should I tip at a restaurant?",
        a: "The standard tip for sit-down restaurant service in the US is 18-20% for good service, 15% for average service, and 20-25% for exceptional service. This percentage should be calculated on the pre-tax bill amount. In fine dining establishments, 20-25% is often expected."
    },
    {
        q: "Should I tip on pre-tax or post-tax amount?",
        a: "Traditionally, tips are calculated on the pre-tax bill amount. However, many people now tip on the post-tax total for simplicity. The difference is usually small (about $1-2 on a $50 bill), so either is acceptable. When in doubt, tipping on the post-tax amount is more generous."
    },
    {
        q: "How much should I tip for takeout and pickup orders?",
        a: "For takeout and pickup orders, 10-15% is customary but not mandatory. If you're picking up a simple order, 10% or rounding up is appropriate. For large, complex orders or curbside delivery service, 15-20% is appreciated. During the pandemic, tipping on takeout became more common."
    },
    {
        q: "What's the standard tip for food delivery drivers?",
        a: "Tip delivery drivers 15-20% of the order total, with a minimum of $3-5 for small orders. Consider increasing the tip for long distances, bad weather, carrying heavy items up stairs, or contactless delivery. Many apps suggest 15%, 20%, or 25% as standard options."
    },
    {
        q: "How much should I tip bartenders?",
        a: "Tip bartenders $1-2 per drink for simple drinks (beer, wine) and $2-3 for cocktails. Alternatively, tip 15-20% of your total tab. For excellent service or complex custom drinks, tip more generously. Opening a tab allows you to tip once at the end."
    },
    {
        q: "Is tipping mandatory in the United States?",
        a: "While not legally required, tipping is a deeply ingrained social expectation in the US. Many service workers rely on tips as a significant portion of their income, as federal minimum wage for tipped employees is only $2.13/hour. Not tipping is considered socially unacceptable for standard service."
    },
    {
        q: "How should I split the bill with a group?",
        a: "Common methods: 1) Split evenly among all diners, 2) Calculate each person's share based on what they ordered, 3) Use Venmo/payment apps for precise splitting. When splitting the tip, base it on the total bill, not individual shares. Our calculator can help split bills fairly."
    },
    {
        q: "Should I tip on alcohol?",
        a: "Yes, include alcohol in your tip calculation. The service for delivering and serving drinks is the same regardless of what's in the glass. Some people tip a bit extra for expensive wine service where the sommelier provides recommendations and tableside presentation."
    },
    {
        q: "How much should I tip hotel staff?",
        a: "Hotel tipping guide: Housekeeping $2-5/day (leave daily, not just at checkout), Bellhop $1-2/bag, Concierge $5-20 for special services, Valet $2-5 when car is returned, Room service 15-20% if not included. Check if service charges are already added."
    },
    {
        q: "What's appropriate to tip for hair and beauty services?",
        a: "Tip 15-20% for hair stylists, colorists, manicurists, and massage therapists. Tip the shampoo person $2-5 separately. For salon owners, tipping was traditionally not expected, but modern etiquette suggests tipping them like any stylist."
    },
    {
        q: "Should I tip Uber and Lyft drivers?",
        a: "Yes, 15-20% is standard for rideshare drivers, similar to taxi service. Tip more for help with luggage, long waits, or exceptional service. Most riders tip $2-5 for average rides. You can tip in the app after the ride or give cash."
    },
    {
        q: "How do I tip in countries outside the US?",
        a: "Tipping customs vary widely: UK/Australia (10% optional, often included), Japan (not expected, can be offensive), Europe (round up or 5-10%), Mexico/Caribbean (10-15%). Research destination customs before traveling. In many countries, service charges are included in the bill."
    },
    {
        q: "What if service was poor? Should I still tip?",
        a: "A reduced tip (10-15%) is acceptable for poor service, as zero tip may be seen as forgetting rather than a statement. Consider speaking with management about serious issues. Remember that server problems may not be the server's fault (kitchen delays, understaffing)."
    },
    {
        q: "How do tip-included pricing models work?",
        a: "Some restaurants now include gratuity in menu prices (tip-free model). Look for 'service included' or 'hospitality included' notices. In these establishments, additional tipping isn't expected but small amounts for exceptional service are welcomed. Always check your bill."
    },
    {
        q: "How much do tipped workers actually earn from tips?",
        a: "According to the Bureau of Labor Statistics, the median wage for food service workers including tips is about $15/hour, though this varies greatly by location and establishment. In major cities and fine dining, servers can earn $30-50+/hour. Tips often constitute 60-80% of total earnings."
    },
];

// FAQ Component
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                Frequently Asked Questions
            </h2>
            <div className="space-y-3">
                {FAQ_DATA.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/30 transition-colors"
                        >
                            <span className="font-semibold text-white pr-4">{faq.q}</span>
                            {openIndex === idx ? (
                                <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                        </button>
                        {openIndex === idx && (
                            <div className="px-4 pb-4 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function TipHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                        <Receipt className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300 font-semibold">2026 Tipping Standards</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Tip <span className="text-purple-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate the perfect tip amount and split bills effortlessly. Our free {SITE.year} calculator
                        helps you navigate tipping etiquette for restaurants, delivery, bars, and more?�with instant results.
                    </p>

                    <Link
                        href="/tip/calculator"
                        className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate My Tip
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{TIP_2026.statistics.avgTipPercent}%</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Tip Rate</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">${TIP_2026.statistics.avgAnnualTips.toLocaleString()}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Annual Tips</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{TIP_2026.statistics.tippedWorkers}M</p>
                            <p className="text-xs text-slate-400 mt-1">Tipped Workers</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{TIP_2026.statistics.tipFrequency}%</p>
                            <p className="text-xs text-slate-400 mt-1">Americans Who Tip</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Tipping Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Tipping in America
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">Tipping</strong> is a gratuity given to service workers as a reward for good service. In the United States, tipping is deeply embedded in the service industry culture and represents a significant portion of workers' income. According to the <strong className="text-white">U.S. Bureau of Labor Statistics</strong>, approximately 4.3 million Americans work in tipped occupations.
                    </p>
                    <p>
                        The <strong className="text-white">Fair Labor Standards Act (FLSA)</strong> allows employers to pay tipped employees as little as $2.13 per hour, with tips expected to bring total earnings to at least the federal minimum wage of $7.25. This legal framework makes tips essential?�not optional?�for service worker livelihoods. The <strong className="text-white">National Restaurant Association</strong> reports that tips typically account for 60-80% of a server's total earnings.
                    </p>
                    <p>
                        Tipping standards have evolved over time. What was once 15% for good service has shifted to 18-20% as the new baseline. Post-pandemic, many Americans tip more generously, with average tips rising to 19.5% according to recent surveys by Square and Toast payment processors.
                    </p>
                </div>
            </section>

            {/* Tipping Guide by Service */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Standard Tipping Rates by Service
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {TIP_2026.tipPercentages.map((item) => (
                            <div
                                key={item.service}
                                className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/50 text-center hover:border-purple-500/30 transition-colors"
                            >
                                <p className="font-bold text-white text-sm">{item.service}</p>
                                <p className="text-3xl font-black text-purple-400 mt-2">{item.percent}%</p>
                                <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <p className="text-purple-300 text-sm">
                            <strong>Quick Tip:</strong> When in doubt, 20% is always a safe and appreciated tip for most services.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Calculate Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    How to Calculate a Tip
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        Calculating a tip is simple: multiply the bill amount by your desired tip percentage. Our calculator does this instantly, but here are mental math shortcuts for common percentages:
                    </p>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-white mb-4">Quick Mental Math</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <p className="text-purple-400 font-bold mb-2">15% Tip</p>
                                <p className="font-mono text-white text-sm">10% + half of 10%</p>
                                <p className="text-xs text-slate-400 mt-2">$50 bill  $5 + $2.50 = $7.50</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <p className="text-purple-400 font-bold mb-2">20% Tip</p>
                                <p className="font-mono text-white text-sm">10% × 2</p>
                                <p className="text-xs text-slate-400 mt-2">$50 bill  $5 × 2 = $10</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <p className="text-purple-400 font-bold mb-2">25% Tip</p>
                                <p className="font-mono text-white text-sm">20% + 5%</p>
                                <p className="text-xs text-slate-400 mt-2">$50 bill  $10 + $2.50 = $12.50</p>
                            </div>
                        </div>
                    </div>

                    <p>
                        <strong className="text-white">Bill Splitting:</strong> When dividing a bill among a group, calculate the tip on the total bill first, then divide the combined amount (bill + tip) by the number of people. This ensures the server receives the full tip amount they deserve.
                    </p>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Tip Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
                                            Start Now <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Citations */}
            <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-700/50">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Data Sources & Citations
                </h3>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li> U.S. Department of Labor. "Fact Sheet #15: Tipped Employees Under the Fair Labor Standards Act." Wage and Hour Division, 2024.</li>
                    <li> Bureau of Labor Statistics. "Occupational Employment and Wages: Food and Beverage Serving Workers." BLS, May 2024.</li>
                    <li> National Restaurant Association. "State of the Restaurant Industry Report 2026." NRA, 2026.</li>
                    <li> Square Financial Services. "Annual Tipping Trends Report." Square, 2026.</li>
                    <li> Toast Inc. "Restaurant Trends Report: The State of Tipping." Toast, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Calculate Your Tip Now
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Split bills, calculate tips, and never guess again. Fast, free, and accurate.
                </p>
                <Link
                    href="/tip/calculator"
                    className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-purple-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Start Free Calculator
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="tip" count={5} />
            </section>
        </div>
    );
}
