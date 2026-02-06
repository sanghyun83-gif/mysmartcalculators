"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, DOWN_PAYMENT_2026, formatCurrency } from "@/lib/calculators/down-payment";
import {
    ArrowRight, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Home, DollarSign, PiggyBank, Percent
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "How much should I put down on a house?",
        a: "The traditional advice is 20% to avoid PMI, but this isn't required. Average down payments are: first-time buyers ~8%, repeat buyers ~19%. Conventional loans allow as little as 3%, FHA loans 3.5%, VA and USDA loans 0%. Choose based on your financial situation, not just the minimum required."
    },
    {
        q: "What is PMI and when is it required?",
        a: "Private Mortgage Insurance (PMI) protects the lender if you default. It's required on conventional loans when you put less than 20% down. PMI costs 0.5-1.5% of the loan annually ($83-$250/month on a $200,000 loan). Once you reach 20% equity, you can request PMI cancellation; it automatically drops at 22%."
    },
    {
        q: "Can I buy a house with no money down?",
        a: "Yes, through: VA loans (veterans/military), USDA loans (rural areas), or down payment assistance programs. Some state/local programs offer grants or forgivable loans for first-time buyers. However, zero-down means higher monthly payments, more interest over time, and underwater risk if home values drop."
    },
    {
        q: "Is 20% down payment the best option?",
        a: "Not necessarily. 20% avoids PMI but has opportunity costs. If home values appreciate 5%/year, a $400K home gains $20K/equity annually?�making a smaller down payment potentially advantageous. Consider: How long will you stay? Can you invest excess funds elsewhere? Current PMI rates? Do the math for your situation."
    },
    {
        q: "What are closing costs and how much should I budget?",
        a: "Closing costs are fees for processing the mortgage: appraisal, title insurance, attorney fees, taxes, prepaid items. Budget 2-5% of the home price (typically 3%). On a $400,000 home, expect $8,000-$20,000. These are separate from your down payment?�plan for both. Some can be negotiated or paid by seller."
    },
    {
        q: "How long does it take to save for a down payment?",
        a: "It depends on home price, target percentage, and savings rate. Example: $400K home at 10% = $40K needed. Saving $1,000/month = 40 months (3.3 years). At $2,000/month = 20 months. First-time buyer programs can reduce this. Automate savings, reduce expenses, and consider a side income to accelerate."
    },
    {
        q: "What counts as a down payment source?",
        a: "Acceptable sources: savings/checking accounts, investment accounts, retirement account withdrawals (with penalties usually), gift funds from family (with gift letter), proceeds from selling assets, employer assistance programs. NOT acceptable: undocumented cash, borrowed funds (usually), credit card advances."
    },
    {
        q: "Can I use gift money for a down payment?",
        a: "Yes, for most loan types. You'll need a gift letter stating it's not a loan. Conventional loans may require you to contribute some of your own funds (varies by LTV and property type). FHA allows 100% gift funds. VA allows gifts from family, employers, or certain organizations. Document everything."
    },
    {
        q: "What is the minimum down payment for an FHA loan?",
        a: "FHA loans require 3.5% down with a credit score of 580+, or 10% down with scores 500-579. On a $300,000 home, that's $10,500-$30,000. FHA loans also have mortgage insurance (MIP) that lasts the life of the loan (unlike PMI which drops at 20% equity). Consider FHA vs conventional based on your credit and timeline."
    },
    {
        q: "Should I wait to save a larger down payment?",
        a: "It depends on market conditions and your situation. Waiting means: more saved, better rates, lower payments. But also: higher home prices (potentially), continued rent payments, delayed equity building. In appreciating markets, buying sooner with less down may build wealth faster. Run the numbers both ways."
    },
    {
        q: "What is down payment assistance (DPA)?",
        a: "DPA programs help first-time and low-to-moderate income buyers with down payments through grants, forgivable loans, or low-interest second mortgages. Over 2,000 programs exist nationwide?�state housing agencies, city programs, employer programs. Many cover 3-5% of purchase price. Check your state's housing finance agency."
    },
    {
        q: "Can I use my 401(k) for a down payment?",
        a: "Options: 1) 401(k) loan: Borrow up to 50% or $50,000, repay with interest to yourself. Risk: job loss = immediate repayment. 2) Hardship withdrawal: Available for first-time buyers in some plans, but face 10% penalty + income taxes. Consider Roth IRA instead?�contributions can be withdrawn penalty-free anytime."
    },
    {
        q: "What's the difference between down payment for primary vs investment property?",
        a: "Primary residence: 3-20% typically acceptable. Second home: Usually 10-20% minimum. Investment property: 15-25% minimum required. Investor loans also have higher rates. Lenders view investment properties as higher risk since you're more likely to walk away if financially stressed."
    },
    {
        q: "How does down payment affect my monthly payment?",
        a: "Example on a $400,000 home at 7% interest: 5% down ($20K) = $2,529/month + $250 PMI = $2,779 total. 20% down ($80K) = $2,131/month + $0 PMI. The $60K extra down payment saves $648/month. Over 30 years: $173,000 less in payments. But that $60K invested at 8% could grow to $603,000."
    },
    {
        q: "When does PMI go away?",
        a: "For conventional loans: Request cancellation at 80% LTV (20% equity) with good payment history. Automatic cancellation at 78% LTV. For FHA loans: MIP lasts the life of the loan for down payments under 10%; for 10%+ down, MIP drops after 11 years. Refinancing is another way to eliminate PMI/MIP."
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
                                <ChevronUp className="w-5 h-5 text-orange-400 flex-shrink-0" />
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

export default function DownPaymentHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                        <Home className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-orange-300 font-semibold">Home Buying Calculator</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Down Payment <span className="text-orange-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate how much you need for a down payment and estimate your PMI costs.
                        See your total cash needed and savings timeline for {SITE.year}.
                    </p>

                    <Link
                        href="/down-payment/calculator"
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Down Payment
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-orange-400">{formatCurrency(DOWN_PAYMENT_2026.statistics.medianHomePrice)}</p>
                            <p className="text-xs text-slate-400 mt-1">Median Home Price</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{DOWN_PAYMENT_2026.statistics.avgFirstTimeBuyer}%</p>
                            <p className="text-xs text-slate-400 mt-1">Avg First-Time Buyer</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">20%</p>
                            <p className="text-xs text-slate-400 mt-1">Avoid PMI Target</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">3-5%</p>
                            <p className="text-xs text-slate-400 mt-1">Closing Costs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding Down Payments */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Down Payments
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        Your <strong className="text-white">down payment</strong> is the upfront cash you pay toward a home purchase, expressed as a percentage of the price. While 20% is traditional, the <strong className="text-white">National Association of Realtors (NAR)</strong> reports that the actual average is much lower?�around 8% for first-time buyers and 19% for repeat buyers.
                    </p>
                    <p>
                        The <strong className="text-white">Consumer Financial Protection Bureau (CFPB)</strong> notes that down payment requirements vary by loan type: conventional loans (3-20%), FHA loans (3.5%), VA loans (0%), and USDA loans (0%). Each option has tradeoffs in terms of PMI, interest rates, and eligibility requirements.
                    </p>
                    <p>
                        With median home prices around ${(DOWN_PAYMENT_2026.statistics.medianHomePrice / 1000).toFixed(0)}K, a 20% down payment means ${(DOWN_PAYMENT_2026.statistics.medianHomePrice * 0.2 / 1000).toFixed(0)}K cash. Adding 3% closing costs brings total cash needed to approximately ${(DOWN_PAYMENT_2026.statistics.medianHomePrice * 0.23 / 1000).toFixed(0)}K. Understanding these numbers helps you set realistic savings goals and timeline expectations.
                    </p>
                </div>
            </section>

            {/* Down Payment Options */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Down Payment Options
                    </h2>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {DOWN_PAYMENT_2026.percentages.map((option) => (
                            <div
                                key={option.percent}
                                className={`bg-slate-800/80 rounded-xl p-4 border text-center ${option.percent === 20 ? 'border-green-500/50' : 'border-slate-700/50'
                                    }`}
                            >
                                <p className="text-2xl font-black text-orange-400">{option.percent}%</p>
                                <p className="text-white font-bold mt-1 text-sm">{option.name}</p>
                                <p className={`text-xs mt-2 ${option.pmiRequired ? 'text-yellow-400' : 'text-green-400'}`}>
                                    {option.pmiRequired ? 'PMI Required' : 'No PMI'}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <p className="text-orange-300 text-sm">
                            <strong>Remember:</strong> Total cash needed = Down Payment + Closing Costs (2-5%) + Move-in reserves.
                        </p>
                    </div>
                </div>
            </section>

            {/* PMI Explanation */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding PMI
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <Percent className="w-8 h-8 text-yellow-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">PMI Rates by Down Payment</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-400">3% down (97% LTV)</span>
                                <span className="text-yellow-400 font-bold">~1.5%/year</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">5% down (95% LTV)</span>
                                <span className="text-yellow-400 font-bold">~1.2%/year</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">10% down (90% LTV)</span>
                                <span className="text-yellow-400 font-bold">~0.8%/year</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">15% down (85% LTV)</span>
                                <span className="text-yellow-400 font-bold">~0.5%/year</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-3">How to Remove PMI</h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>??Request removal at 80% LTV (20% equity)</li>
                            <li>??Auto-cancellation at 78% LTV</li>
                            <li>??Refinance to a new loan without PMI</li>
                            <li>??Home appreciation may reach 20% faster</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Down Payment Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-orange-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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
                    <li>??National Association of Realtors. "Profile of Home Buyers and Sellers." NAR, 2026.</li>
                    <li>??Consumer Financial Protection Bureau. "What Is Private Mortgage Insurance?" CFPB, 2024.</li>
                    <li>??Federal Housing Finance Agency. "House Price Index." FHFA, 2026.</li>
                    <li>??U.S. Department of Housing and Urban Development. "FHA Loan Requirements." HUD, 2026.</li>
                    <li>??Fannie Mae. "Selling Guide: Eligibility Requirements." Fannie Mae, 2026.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Start Planning Your Home Purchase
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    See exactly how much you need to save and estimate your timeline.
                </p>
                <Link
                    href="/down-payment/calculator"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Down Payment
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="down-payment" count={5} />
            </section>
        </div>
    );
}
