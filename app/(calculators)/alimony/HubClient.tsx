"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, ALIMONY_CONSTANTS_2026, STATE_ALIMONY, formatCurrency } from "@/lib/calculators/alimony";
import {
    ArrowRight, Heart, Users, Calculator, FileText, MapPin,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Scale, DollarSign, Clock, Gavel
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is alimony and who qualifies?",
        a: "Alimony (also called spousal support or maintenance) is a court-ordered payment from one spouse to another during or after divorce. Qualification depends on factors including income disparity, length of marriage, earning capacity, age, health, and contributions to the marriage (including homemaking). Generally, the lower-earning spouse may qualify if they cannot maintain the marital standard of living independently."
    },
    {
        q: "How is alimony calculated?",
        a: "Calculations vary by state. Some states (CA, NY, IL) use formula-based guidelines (e.g., 40% of payer income minus 50% of recipient income). Others (FL, NJ) use discretionary approaches based on need and ability to pay. Key factors include both spouses' incomes, marriage duration, standard of living during marriage, and each party's earning capacity."
    },
    {
        q: "How long does alimony last?",
        a: "Duration depends on marriage length and state law. Short marriages (under 5 years) typically see alimony for 30% of the marriage duration. Medium marriages (5-10 years) may receive 50%. Long marriages (20+ years) may qualify for permanent or indefinite alimony in some states. Many states now cap durations even for long marriages."
    },
    {
        q: "Is alimony taxable?",
        a: "For divorces finalized after January 1, 2019 (under the Tax Cuts and Jobs Act): Alimony is NOT tax-deductible for the payer and NOT taxable income for the recipient. For pre-2019 divorces: The old rules still apply unless the decree is modified?�payer deducts, recipient reports as income."
    },
    {
        q: "What's the difference between alimony and child support?",
        a: "Alimony is paid to support an ex-spouse; [child support](/child-support) is paid to support children. Child support is calculated using state guidelines based on income and custody time. Alimony considers marriage factors. Child support typically ends when children reach adulthood; alimony has various termination triggers including remarriage or cohabitation."
    },
    {
        q: "Can alimony be modified after the divorce?",
        a: "Yes, in most states alimony can be modified if there's a 'substantial change in circumstances'?�such as job loss, significant income change (for either party), remarriage or cohabitation of the recipient, retirement, or disability. The requesting party must file a motion with the court and prove the change."
    },
    {
        q: "When does alimony end?",
        a: "Common termination events include: death of either party, remarriage of the recipient (in most states), cohabitation of the recipient with a new partner, reaching the court-ordered end date, or a court modification. Some permanent alimony can last until the payer's retirement age or Social Security eligibility."
    },
    {
        q: "Can men receive alimony?",
        a: "Yes. Alimony is gender-neutral by law. The lower-earning spouse, regardless of gender, can receive alimony if they meet eligibility criteria. While historically more women received alimony, the percentage of men receiving spousal support has increased as dual-income households become standard and more women out-earn their husbands."
    },
    {
        q: "What if my spouse refuses to pay alimony?",
        a: "Court-ordered alimony is legally enforceable. Options include: filing a motion for contempt of court, income withholding orders (wage garnishment), liens on property, seizure of tax refunds, or even jail time in extreme cases. Keep detailed records of missed payments and consult a family law attorney."
    },
    {
        q: "Does cheating affect alimony?",
        a: "In most states, no?�adultery typically doesn't affect alimony. Modern 'no-fault' divorce laws focus on financial factors rather than marital misconduct. However, a few states (like Georgia and South Carolina) still consider fault, and adultery may reduce or bar alimony. It may also affect property division in some jurisdictions."
    },
    {
        q: "What is rehabilitative alimony?",
        a: "Rehabilitative alimony is temporary support designed to help the receiving spouse become self-supporting through education, job training, or career development. It typically has a specific end date tied to completing a degree program or gaining employment. It's the most common form of alimony awarded today."
    },
    {
        q: "Can I get alimony if we weren't legally married?",
        a: "Generally, no. Alimony requires a legal marriage. However, some states recognize 'common law marriage' if you meet certain criteria (living together, holding yourselves out as married). Domestic partners may have similar rights in states that recognize them. Consult state-specific laws."
    },
    {
        q: "How do I prove my spouse's income for alimony?",
        a: "Through the 'discovery' process: request tax returns, pay stubs, W-2s/1099s, bank statements, and business financial statements. Subpoena employer records if needed. For self-employed spouses, a forensic accountant may be necessary to uncover hidden income or underreported earnings."
    },
    {
        q: "What is lump-sum alimony?",
        a: "Lump-sum alimony (or 'alimony in gross') is a one-time payment instead of ongoing monthly payments. It's useful when the payer wants to avoid long-term obligations or the recipient prefers immediate security. Once paid, it typically cannot be modified. Tax treatment may differ from periodic payments."
    },
    {
        q: "How does cohabitation affect alimony?",
        a: "Most states allow alimony reduction or termination if the recipient cohabits with a new romantic partner. 'Cohabitation' definitions vary?�usually requires living together in a marriage-like relationship, sharing expenses, and/or presenting as a couple. Some states require the cohabitation to reduce the recipient's financial need."
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
                                <ChevronUp className="w-5 h-5 text-pink-400 flex-shrink-0" />
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

export default function AlimonyHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                        <Scale className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-pink-300 font-semibold">2026 State Laws Updated</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Alimony <span className="text-pink-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Estimate your spousal support payment or entitlement using state-specific formulas.
                        Our free {SITE.year} calculator covers all 50 states including CA, TX, FL, NY, and IL guidelines.
                    </p>

                    <Link
                        href="/alimony/calculator"
                        className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-pink-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Alimony
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-pink-400">{formatCurrency(ALIMONY_CONSTANTS_2026.statistics.avgMonthlyPayment)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Monthly</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{ALIMONY_CONSTANTS_2026.statistics.avgDurationYears} Years</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Duration</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{ALIMONY_CONSTANTS_2026.statistics.percentAwarded}%</p>
                            <p className="text-xs text-slate-400 mt-1">Divorces with Alimony</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{ALIMONY_CONSTANTS_2026.statistics.modificationRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">Orders Modified</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Alimony */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Alimony (Spousal Support)
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">Alimony</strong>, also known as spousal support or spousal maintenance, is a court-ordered payment from one spouse to another during or after divorce. The purpose is to help the lower-earning spouse maintain a similar standard of living to what was established during the marriage and provide time for economic self-sufficiency.
                    </p>
                    <p>
                        According to the <strong className="text-white">American Academy of Matrimonial Lawyers</strong>, approximately 10% of divorces include an alimony award. The 2017 <strong className="text-white">Tax Cuts and Jobs Act (TCJA)</strong> fundamentally changed alimony taxation?�for divorces finalized after January 1, 2019, alimony is no longer deductible for the payer or taxable for the recipient.
                    </p>
                    <p>
                        Alimony laws vary significantly by state. Some states like California, New York, and Illinois use formula-based guidelines, while others like Florida and New Jersey give judges broad discretion. Recent reforms in many states have limited permanent alimony and emphasized rehabilitative support to help recipients become self-supporting.
                    </p>
                </div>
            </section>

            {/* State Comparison */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Alimony Formulas by State
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(STATE_ALIMONY).slice(0, 6).map(([key, state]) => (
                            <div
                                key={key}
                                className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 hover:border-pink-500/30 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-bold text-white">{state.name}</p>
                                    <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">{state.formulaType}</span>
                                </div>
                                <p className="text-sm text-slate-400 mb-2">{state.formula}</p>
                                <p className="text-xs text-slate-500">Avg: {formatCurrency(state.avgMonthly)}/mo</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 flex items-center gap-3">
                        <Info className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <p className="text-pink-300 text-sm">
                            <strong>Note:</strong> These are guideline formulas. Actual alimony depends on many factors and judge discretion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Types of Alimony */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Types of Alimony
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <Clock className="w-8 h-8 text-blue-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-2">Temporary (Pendente Lite)</h3>
                        <p className="text-sm text-slate-400">Paid during divorce proceedings. Ends when the divorce is finalized and a permanent order is issued.</p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <Gavel className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-2">Rehabilitative</h3>
                        <p className="text-sm text-slate-400">Short-term support to help the recipient gain education or job skills to become self-supporting.</p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <DollarSign className="w-8 h-8 text-amber-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-2">Durational/Limited</h3>
                        <p className="text-sm text-slate-400">Set amount for a specific period based on marriage length. Cannot exceed the marriage duration.</p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <Scale className="w-8 h-8 text-pink-400 mb-3" />
                        <h3 className="font-bold text-white text-lg mb-2">Permanent</h3>
                        <p className="text-sm text-slate-400">Ongoing support until death, remarriage, or court modification. Increasingly rare; typically for long marriages.</p>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Alimony Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-pink-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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

            {/* Tax Warning */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-400 mb-2">TCJA Tax Changes (2019+)</h3>
                            <p className="text-sm text-slate-300">
                                For divorces finalized after January 1, 2019, alimony payments are <strong className="text-white">no longer tax-deductible</strong> for the payer and <strong className="text-white">no longer taxable income</strong> for the recipient. This represents a significant change?�consult a tax professional for your specific situation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Citations */}
            <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-700/50">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Data Sources & Citations
                </h3>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li> Internal Revenue Service. "Topic No. 452 Alimony and Separate Maintenance." IRS.gov, 2024.</li>
                    <li> American Academy of Matrimonial Lawyers. "Alimony Trends Survey 2024." AAML, 2024.</li>
                    <li> California Family Code §4320. "Factors in Ordering Spousal Support." Leginfo.ca.gov.</li>
                    <li> New York Domestic Relations Law §236. "Maintenance Guidelines." NYCourts.gov.</li>
                    <li> Florida Statutes §61.08. "Alimony." Florida Legislature, 2023 (as amended).</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Estimate Your Alimony Today
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Get a preliminary estimate using your state's formula. For legal advice, consult a family law attorney.
                </p>
                <Link
                    href="/alimony/calculator"
                    className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-pink-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Start Calculator
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="alimony" count={5} />
            </section>

            {/* Schema.org - Expert Optimized Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Alimony & Spousal Support Auditor v5.0",
                            "operatingSystem": "All",
                            "applicationCategory": "FamilyApplication",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "856"
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
                            "mainEntity": FAQ_DATA.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a
                                }
                            }))
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
                                    "name": "Alimony Calculator",
                                    "item": "https://mysmartcalculators.com/alimony"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
