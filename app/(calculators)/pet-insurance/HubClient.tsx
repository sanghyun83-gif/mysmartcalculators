"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, PET_2026, formatCurrency } from "@/lib/calculators/pet-insurance";
import {
    ArrowRight, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    Heart, DollarSign, Shield, Dog
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What does pet insurance cover?",
        a: "Comprehensive plans cover accidents (broken bones, ingestion of foreign objects) AND illnesses (cancer, infections, diabetes). Accident-only plans cover injuries but not illness. Most plans exclude pre-existing conditions, preventive care (unless with wellness add-on), breeding costs, and elective procedures."
    },
    {
        q: "How much does pet insurance cost?",
        a: "Average monthly premiums: Dogs $25-70/month, Cats $15-40/month. Actual cost depends on: pet species, age, breed, location, coverage type, deductible, and reimbursement rate. Large/giant breed dogs and senior pets cost more. Comprehensive coverage costs about 2x accident-only."
    },
    {
        q: "Is pet insurance worth it?",
        a: "It depends on your risk tolerance and finances. A torn ACL costs $4,000+; cancer treatment $8,000+. Without insurance, you pay 100%. With insurance (80% reimbursement, $500 deductible), you'd pay ~$1,200. Over a pet's lifetime, premiums may exceed claims?�but insurance provides financial protection against catastrophic costs."
    },
    {
        q: "What are pre-existing conditions for pets?",
        a: "Any condition showing symptoms BEFORE coverage starts or during the waiting period. Insurers review vet records. Some conditions are 'curable' (ear infection once treated) and may be covered later. 'Chronic' conditions (allergies, hip dysplasia) are typically excluded permanently. Get insurance while your pet is young and healthy."
    },
    {
        q: "What is a deductible for pet insurance?",
        a: "The amount you pay before insurance kicks in. Options typically range $100-$1,000. Lower deductibles = higher premiums but less out-of-pocket per claim. Higher deductibles = lower premiums but more per claim. Most deductibles are annual (reset yearly), though some are per-condition (lifetime)."
    },
    {
        q: "What is the reimbursement percentage?",
        a: "The percentage of covered costs the insurer pays after your deductible. Common options: 70%, 80%, 90%. Example: $2,000 vet bill, $500 deductible, 80% reimbursement = You pay $500 + ($1,500 × 20%) = $800 total. Insurer pays $1,200. Higher reimbursement = higher premiums."
    },
    {
        q: "What's the best age to get pet insurance?",
        a: "As young as possible?�ideally when you first adopt. Reasons: 1) Lower premiums for young pets, 2) No pre-existing conditions yet, 3) Coverage for congenital issues if enrolled before symptoms appear. Most insurers cover pets 8+ weeks old. Some decline pets over 10-14 years."
    },
    {
        q: "Are wellness visits covered?",
        a: "Not in standard plans. Wellness coverage (vaccines, annual exams, dental cleaning, flea/tick prevention) is available as an add-on for $15-30/month extra. Calculate: If wellness add-on costs $25/month ($300/year) and your wellness expenses are $250/year, it's not worth it financially."
    },
    {
        q: "How does the claims process work?",
        a: "Most pet insurers use reimbursement: 1) You pay the vet bill in full. 2) Submit claim (app, website, or mail). 3) Insurer reviews (3-14 days typically). 4) Receive reimbursement via check or direct deposit. Some newer insurers offer direct vet payment, but it's not industry standard."
    },
    {
        q: "What's not covered by pet insurance?",
        a: "Common exclusions: Pre-existing conditions, routine/preventive care (without add-on), cosmetic procedures (tail docking, ear cropping), breeding-related costs, behavioral training, experimental treatments, elective procedures. Read the policy carefully?�exclusions vary by insurer."
    },
    {
        q: "Do pet insurance premiums increase with age?",
        a: "Usually yes. Most insurers increase premiums as pets age?�typically a few dollars per year in early years, accelerating after age 8-10. Some insurers lock in rates or have smaller increases. Compare how insurers handle aging when shopping. Lifetime cost matters more than initial premium."
    },
    {
        q: "Can I use any vet with pet insurance?",
        a: "Almost all pet insurers let you use ANY licensed veterinarian, specialist, or emergency hospital. This is different from human health insurance networks. Even specialists, emergency vets, and university veterinary hospitals are covered. Check if your plan covers alternative therapies (acupuncture, rehab)."
    },
    {
        q: "What is a waiting period?",
        a: "The time between enrollment and when coverage begins. Typical waiting periods: Accidents: 0-14 days, Illnesses: 14-30 days, Orthopedic conditions (ACL, hip): 6-12 months. Conditions showing symptoms during waiting periods become pre-existing and are excluded. Don't wait until your pet is sick to enroll."
    },
    {
        q: "Can I get insurance for an older pet?",
        a: "Yes, but with limitations. Many insurers accept pets up to 10-14 years old. Premiums are significantly higher for seniors. Coverage may exclude age-related conditions or have lower benefit limits. Some insurers specialize in senior pets. Accident-only coverage may be more cost-effective for older pets."
    },
    {
        q: "Does breed affect pet insurance cost?",
        a: "Yes, especially for dogs. Large/giant breeds (Great Danes, Mastiffs) and breeds prone to genetic conditions (Bulldogs, Cavalier King Charles) cost 20-50% more. Mixed breeds typically cost less than purebreds. Cats show less breed variation, though some breeds (Persians, Maine Coons) may cost more."
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
                                <ChevronUp className="w-5 h-5 text-rose-400 flex-shrink-0" />
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

export default function PetInsuranceHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-6">
                        <Heart className="w-4 h-4 text-rose-400" />
                        <span className="text-sm text-rose-300 font-semibold">Protect Your Fur Family</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Pet Insurance <span className="text-rose-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate pet insurance costs for your dog or cat. See monthly premiums based on age, breed,
                        and coverage type for {SITE.year}.
                    </p>

                    <Link
                        href="/pet-insurance/pet-calculator"
                        className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-rose-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-rose-400">{formatCurrency(PET_2026.statistics.avgAnnualVetCost)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Annual Vet Cost</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">${PET_2026.avgPremiums.dogComprehensive}/mo</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Dog Premium</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{formatCurrency(PET_2026.statistics.avgClaimAmount)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Claim Amount</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{PET_2026.statistics.petOwnersWithInsurance}M</p>
                            <p className="text-xs text-slate-400 mt-1">Pets Insured</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Pet Insurance */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Why Consider Pet Insurance?
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        Veterinary costs have increased 70% over the past decade. According to the <strong className="text-white">North American Pet Health Insurance Association (NAPHIA)</strong>, the pet insurance market is growing {PET_2026.statistics.marketGrowth}% annually as pet owners recognize the value of financial protection against unexpected vet bills.
                    </p>
                    <p>
                        Without insurance, a torn ACL costs ${PET_2026.commonClaims[0].avgCost.toLocaleString()}, and cancer treatment can exceed ${PET_2026.commonClaims[1].avgCost.toLocaleString()}. The <strong className="text-white">American Pet Products Association</strong> reports average annual veterinary costs of ${PET_2026.statistics.avgAnnualVetCost.toLocaleString()}, with emergency visits adding thousands more.
                    </p>
                    <p>
                        Pet insurance works on a reimbursement model?�you pay the vet, submit a claim, and receive a percentage back (typically 70-90%). While premiums add up over a pet's lifetime, insurance prevents the heartbreaking choice between finances and your pet's health during emergencies.
                    </p>
                </div>
            </section>

            {/* Common Claims */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Common Pet Insurance Claims
                    </h2>

                    <div className="grid md:grid-cols-5 gap-4">
                        {PET_2026.commonClaims.map((claim) => (
                            <div key={claim.condition} className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 text-center hover:border-rose-500/30 transition-colors">
                                <p className="text-lg font-black text-rose-400">{formatCurrency(claim.avgCost)}</p>
                                <p className="text-white text-sm font-medium mt-2">{claim.condition}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                        <p className="text-rose-300 text-sm">
                            <strong>Critical:</strong> Get insurance while your pet is young and healthy. Pre-existing conditions are never covered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Coverage Types */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Coverage Types Compared
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {PET_2026.coverageTypes.map((type, idx) => (
                        <div key={type.name} className={`bg-slate-800/50 border rounded-xl p-6 ${idx === 1 ? 'border-rose-500/50' : 'border-slate-700/50'}`}>
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className={`w-8 h-8 ${idx === 1 ? 'text-rose-400' : 'text-slate-400'}`} />
                                {idx === 1 && <span className="text-xs bg-rose-500/20 text-rose-300 px-2 py-1 rounded">Most Popular</span>}
                            </div>
                            <h3 className="font-bold text-white text-lg">{type.name}</h3>
                            <p className="text-sm text-slate-400 mt-2">{type.description}</p>
                            <p className="text-xl font-black text-rose-400 mt-4">~${type.avgCost}/mo</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Pet Insurance Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-rose-500/10 rounded-lg group-hover:bg-rose-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-rose-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-rose-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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
                    <li>??North American Pet Health Insurance Association. "State of the Industry Report." NAPHIA, 2026.</li>
                    <li>??American Pet Products Association. "Pet Industry Market Size & Ownership Statistics." APPA, 2026.</li>
                    <li>??Insurance Information Institute. "Pet Insurance Facts + Statistics." III, 2024.</li>
                    <li>??American Veterinary Medical Association. "AVMA Pet Ownership and Demographics Sourcebook." AVMA, 2024.</li>
                    <li>??Consumer Reports. "Pet Insurance Buying Guide and Ratings." Consumer Reports, 2024.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Protect Your Pet Today
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Calculate your estimated monthly premium and coverage options.
                </p>
                <Link
                    href="/pet-insurance/pet-calculator"
                    className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-rose-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Premium
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="pet-insurance" count={5} />
            </section>
        </div>
    );
}
