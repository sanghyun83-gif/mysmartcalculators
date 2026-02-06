"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, FAFSA_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/fafsa";
import {
    ArrowRight, GraduationCap, Users, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    DollarSign, BookOpen, Calendar, Award
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is FAFSA and why is it important?",
        a: "FAFSA (Free Application for Federal Student Aid) is a form used to determine eligibility for federal student aid, including Pell Grants, federal loans, and work-study. It's also used by most states and many colleges for their own aid programs. Filing FAFSA is the first step to receiving any federal financial aid for college."
    },
    {
        q: "What is the Student Aid Index (SAI)?",
        a: "The Student Aid Index (SAI) replaced the Expected Family Contribution (EFC) starting in 2024-25. It's a number calculated from FAFSA information that determines your federal aid eligibility. Unlike EFC, SAI can be negative (as low as -$1,500), which indicates maximum Pell Grant eligibility."
    },
    {
        q: "When should I file the FAFSA?",
        a: "The FAFSA for the 2026-27 school year opens December 31, 2026. File as early as possible? many aid programs are first-come, first-served. Each state and college has different deadlines, some as early as February. Check specific deadlines for your state and target schools."
    },
    {
        q: "What documents do I need to file FAFSA?",
        a: "You'll need: Social Security number, driver's license (if any), federal tax returns (2024 taxes for 2026-27 FAFSA), W-2s and other income records, bank statements showing current balances, investment records, and records of untaxed income. The IRS Data Retrieval Tool can import tax data automatically."
    },
    {
        q: "What is the Pell Grant and how much can I receive?",
        a: "The Pell Grant is federal money for low-income undergraduate students that doesn't need to be repaid. For 2026-27, the maximum Pell Grant is $7,895. The amount you receive depends on your SAI, cost of attendance, enrollment status, and whether you attend full-time or part-time."
    },
    {
        q: "What's the difference between subsidized and unsubsidized loans?",
        a: "Subsidized loans are based on financial need? the government pays interest while you're in school and during grace/deferment periods. Unsubsidized loans accrue interest immediately. Both types have the same interest rate, but subsidized loans save you money on interest over time."
    },
    {
        q: "How is income counted on the FAFSA?",
        a: "FAFSA uses your 'prior-prior year' income? for 2026-27, that's 2024 tax information. Parent income (for dependent students) and student income are both considered.. Approximately 22-47% of parent income above protection allowances, and 50% of student income above $7,600, is factored into SAI."
    },
    {
        q: "Do assets affect my financial aid?",
        a: "Yes, but less than income. Parent assets (excluding home equity and retirement accounts) are assessed at ~5.64% annually. Student assets are assessed at 20%. Savings, investments, and real estate (not primary residence) count as assets. There are age-based asset protection allowances for parents."
    },
    {
        q: "Am I considered dependent or independent for FAFSA?",
        a: "You're automatically independent if you're 24+, married, a veteran, an orphan/ward of court, have legal dependents, or meet other specific criteria. Most traditional students under 24 are dependent and must report parent information, regardless of whether parents actually help pay."
    },
    {
        q: "What if my parents refuse to provide their information?",
        a: "If you're dependent but parents refuse to provide information, you can indicate this on FAFSA and may receive only unsubsidized loans initially. Contact your school's financial aid office for a 'dependency override' if there are special circumstances like abuse or abandonment."
    },
    {
        q: "How do multiple children in college affect aid?",
        a: "Under the simplified FAFSA formula (starting 2024-25), having multiple children in college no longer directly reduces SAI as it did under the old EFC formula. However, individual colleges may still consider this factor when awarding institutional aid."
    },
    {
        q: "What is the FAFSA Simplification Act?",
        a: "The FAFSA Simplification Act (2020) overhauled the FAFSA starting 2024-25: reduced questions from 108 to ~36, replaced EFC with SAI (which can be negative), eliminated the 'sibling discount,' and made more students Pell-eligible. The new formula uses federal tax data more directly."
    },
    {
        q: "Can I appeal my financial aid offer?",
        a: "Yes. If your family's financial situation has changed (job loss, divorce, medical expenses) or the offer doesn't meet need, submit a 'professional judgment' or SAR (Special Circumstances) request to the financial aid office with documentation. Many schools will reconsider awards."
    },
    {
        q: "What is verification and why was I selected?",
        a: "Verification is when a college asks you to prove FAFSA information is accurate. About 30% of FAFSAs are selected? randomly or due to incomplete/inconsistent data. You'll need to submit tax transcripts and other documents. Don't ignore it? you won't receive aid until verified."
    },
    {
        q: "Does FAFSA cover graduate school?",
        a: "Yes, but options differ. Graduate students aren't eligible for Pell Grants or subsidized loans. They can receive unsubsidized Direct Loans (up to $20,500/year) and Grad PLUS Loans (up to full cost of attendance). Many graduate programs also offer assistantships and fellowships."
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
                                <ChevronUp className="w-5 h-5 text-sky-400 flex-shrink-0" />
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

export default function FAFSAHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-sky-400" />
                        <span className="text-sm text-sky-300 font-semibold">Federal Student Aid {SITE.year}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        FAFSA <span className="text-sky-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Estimate your Student Aid Index (SAI) and potential federal financial aid before filing FAFSA.
                        Our free {SITE.year} calculator helps you understand your Pell Grant eligibility and loan options.
                    </p>

                    <Link
                        href="/fafsa/calculator"
                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Estimate My Aid
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-sky-400">{formatCurrency(FAFSA_CONSTANTS_2026.pellGrant.maximum)}</p>
                            <p className="text-xs text-slate-400 mt-1">Max Pell Grant</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{formatCurrency(FAFSA_CONSTANTS_2026.statistics.avgTotalAid)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg Total Aid</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-amber-400">{FAFSA_CONSTANTS_2026.statistics.studentsReceivingAid}%</p>
                            <p className="text-xs text-slate-400 mt-1">Students Get Aid</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-purple-400">{formatCurrency(FAFSA_CONSTANTS_2026.statistics.avgSAI)}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg SAI</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is FAFSA */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding FAFSA and Federal Student Aid
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        The <strong className="text-white">Free Application for Federal Student Aid (FAFSA)</strong> is your gateway to federal student aid, including Pell Grants, Direct Loans, and work-study programs. Administered by the <strong className="text-white">U.S. Department of Education</strong>, FAFSA determines your eligibility based on family income, assets, and household size.
                    </p>
                    <p>
                        The 2024-25 academic year marked a major overhaul under the <strong className="text-white">FAFSA Simplification Act</strong>. The old Expected Family Contribution (EFC) was replaced by the <strong className="text-white">Student Aid Index (SAI)</strong>? a number that can now be negative (as low as -$1,500), indicating maximum Pell Grant eligibility. The form itself was reduced from 108 questions to approximately 36.
                    </p>
                    <p>
                        Over 85% of college students receive some form of financial aid. Total federal student aid in the 2023-24 academic year exceeded $113 billion, including $28 billion in Pell Grants and $80 billion in federal student loans. Understanding your SAI helps you plan for college costs and identify additional aid opportunities.
                    </p>
                </div>
            </section>

            {/* Aid Types */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Types of Federal Student Aid
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
                                <Award className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="font-bold text-white text-lg">Pell Grants</h3>
                            <p className="text-3xl font-black text-green-400 my-2">Up to {formatCurrency(FAFSA_CONSTANTS_2026.pellGrant.maximum)}</p>
                            <p className="text-xs text-slate-400">Free money based on need. Doesn't need to be repaid.</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                                <DollarSign className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="font-bold text-white text-lg">Subsidized Loans</h3>
                            <p className="text-3xl font-black text-blue-400 my-2">Up to {formatCurrency(FAFSA_CONSTANTS_2026.loanLimits.juniorSeniorDependent)}</p>
                            <p className="text-xs text-slate-400">Need-based. Government pays interest while in school.</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-full mb-4">
                                <BookOpen className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="font-bold text-white text-lg">Work-Study</h3>
                            <p className="text-3xl font-black text-amber-400 my-2">Varies</p>
                            <p className="text-xs text-slate-400">Part-time jobs for students with financial need.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-sky-500/10 border border-sky-500/30 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                        <p className="text-sky-300 text-sm">
                            <strong>Pro Tip:</strong> File FAFSA early? many state and institutional aid programs are first-come, first-served.
                        </p>
                    </div>
                </div>
            </section>

            {/* How SAI Works */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    How Your SAI Is Calculated
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        The Student Aid Index considers multiple factors to determine your expected family contribution to education costs:
                    </p>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-white mb-4">SAI Formula Components</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-sky-400 font-semibold mb-2">Parent Contribution (Dependent Students)</p>
                                <ul className="text-slate-300 space-y-1">
                                    <li> ~22-47% of available income</li>
                                    <li> ~5.64% of available assets</li>
                                    <li> Income protection allowances apply</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sky-400 font-semibold mb-2">Student Contribution</p>
                                <ul className="text-slate-300 space-y-1">
                                    <li> 50% of income above $7,600</li>
                                    <li> 20% of all assets</li>
                                    <li> No asset protection for students</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p>
                        <strong className="text-white">Key Change:</strong> Under the new formula, the SAI can be negative (as low as -$1,500), automatically qualifying students for maximum Pell Grant. Previously, EFC could only go to zero.
                    </p>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free FAFSA Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-sky-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-sky-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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

            {/* Important Deadlines */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <Calendar className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-400 mb-2">Important FAFSA Deadlines</h3>
                            <p className="text-sm text-slate-300">
                                <strong className="text-white">Federal Deadline:</strong> June 30, 2027 for 2026-27 aid year<br />
                                <strong className="text-white">State Deadlines:</strong> Vary widely? some as early as February 2026<br />
                                <strong className="text-white">College Deadlines:</strong> Check each school's priority deadline<br />
                                <span className="text-amber-400">File FAFSA as early as possible to maximize aid opportunities!</span>
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
                    <li> U.S. Department of Education. "Federal Student Aid Handbook 2026-27." FSA, 2026.</li>
                    <li> Federal Student Aid. "FAFSA Simplification Act Changes." StudentAid.gov, 2024.</li>
                    <li> College Board. "Trends in Student Aid 2024." CollegeBoard.org, 2024.</li>
                    <li> National Association of Student Financial Aid Administrators (NASFAA). "2024-25 Federal Student Aid Handbook." NASFAA, 2024.</li>
                    <li> Congressional Research Service. "The Pell Grant Program: Recent Developments." CRS Report R46975, 2024.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Plan Your College Finances Today
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Estimate your SAI and potential federal aid before filing FAFSA. Make informed decisions about college affordability.
                </p>
                <Link
                    href="/fafsa/calculator"
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-sky-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Estimate My Aid
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="fafsa" count={5} />
            </section>
        </div>
    );
}
