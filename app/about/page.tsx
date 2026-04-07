import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Shield, Users, Cpu } from "lucide-react";

const BASE_URL = "https://mysmartcalculators.com";

export const metadata: Metadata = {
    title: "About Core 20 Policy | MySmartCalculators",
    description: "Learn how MySmartCalculators operates with a Core 20 focus: fully indexed priority calculators, methodology controls, and quality-first update governance.",
    alternates: {
        canonical: `${BASE_URL}/about`,
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200">
            <main className="max-w-5xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-6 uppercase tracking-widest">
                        <Cpu className="w-3 h-3" />
                        <span>About & Methodology</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">About MySmartCalculators Core 20</h1>
                    <p className="text-slate-400 text-lg">Quality-first calculator operations with a Core 20 focus.</p>
                </div>

                <div className="space-y-8">
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-amber-400" />
                            Our Mission
                        </h2>
                        <p className="text-slate-300">
                            MySmartCalculators currently follows a <strong className="text-white">Core 20 집중 운영 정책</strong>: we prioritize
                            twenty high-intent calculators, keep them fully indexed, and allocate maintenance to measurable user outcomes.
                            This policy improves quality control, clarity of guidance, and update reliability.
                        </p>
                    </section>

                    <section id="methodology" className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-amber-400" />
                            Methodology
                        </h2>
                        <p className="text-slate-300 mb-4">
                            We maintain Core 20 calculation logic with versioned formulas and source references. Assumptions are reviewed
                            against official public documentation (government/statutory sources where applicable), then validated using
                            deterministic test cases before release.
                        </p>
                        <p className="text-slate-300">
                            Model and benchmark figures shown on the site are informational indicators and should be interpreted alongside
                            the calculator inputs and the stated assumptions on each page.
                        </p>
                        <div className="mt-5 space-y-3 text-slate-300 text-sm">
                            <p>
                                <strong className="text-white">Data source types:</strong> federal/state agency publications, public court and
                                regulatory documents, insurer/public plan documentation, and standardized reference datasets where available.
                            </p>
                            <p>
                                <strong className="text-white">Validation cycle:</strong> Core 20 formulas are reviewed on a scheduled monthly pass,
                                with ad-hoc updates when major legal, policy, or rate changes are identified.
                            </p>
                            <p>
                                <strong className="text-white">Known limitations:</strong> outputs are modeled estimates, not professional advice
                                or guaranteed outcomes; real case facts, jurisdictional rules, provider terms, and filing timelines can materially
                                change results.
                            </p>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu className="w-6 h-6 text-amber-400" />
                            Core 20 Coverage
                        </h2>
                        <ul className="space-y-3 text-slate-300">
                            <li><strong>Finance Core:</strong> mortgage, loan, refinance, tax, self-employment, home affordability</li>
                            <li><strong>Math Utility Core:</strong> percentage, scientific, time, conversion, date, age, tip, compound interest</li>
                            <li><strong>Health Core:</strong> BMI, calorie, body-fat, pregnancy, ovulation</li>
                            <li><strong>Claims Core:</strong> workers-comp workflow for scenario-based estimate support</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-amber-400" />
                            Our Team
                        </h2>
                        <p className="text-slate-300">
                            MySmartCalculators is maintained by data analysts and developers using publicly available formulas, government
                            statistics, and official methodologies. Current governance prioritizes Core 20 quality, measurement integrity,
                            and evidence-backed iteration.
                        </p>
                    </section>

                    <section id="update-log" className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-white mb-4">Update Log</h2>
                        <ul className="space-y-2 text-slate-300">
                            <li><strong>2026-04-07:</strong> Core 20 policy adopted: sitemap focus, non-core noindex governance, and quality-first internal linking rollout.</li>
                            <li><strong>2026-04-07:</strong> Home and About messaging aligned to Core 20 operating model and measurement-first strategy.</li>
                            <li><strong>2026-02-27:</strong> Trust and policy pages refreshed for consistency across About, Terms, Privacy, Contact, and Accessibility.</li>
                            <li><strong>2026-02-27:</strong> Methodology section expanded with source categories, validation cadence, and limitation disclosures.</li>
                            <li><strong>2026-02-26:</strong> Home search accessibility, structured data, and metadata consistency updates.</li>
                            <li><strong>2026-02-26:</strong> Calculator taxonomy and schema alignment refresh.</li>
                            <li><strong>2026-02-25:</strong> Core calculator modernization batches (BMI, body-fat, related hubs).</li>
                            <li><strong>2026-02-24:</strong> Category routing standardization for legal, finance, insurance, medical, family, and health portals.</li>
                            <li><strong>2026-02-24:</strong> Directory search/sort/card rendering unified through shared components.</li>
                            <li><strong>2026-02-23:</strong> Registry and sitemap synchronization pass to align calculator slugs and category coverage.</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 p-6 bg-amber-900/20 border border-amber-500/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Important Disclaimer</h3>
                    <p className="text-sm text-amber-200/80">
                        The information and calculators provided on this website are for general informational purposes only.
                        They do not constitute legal, medical, financial, or professional advice.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
                    <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>
                    <span className="text-slate-600">|</span>
                    <Link href="/contact" className="text-amber-400 hover:underline">Contact Us</Link>
                    <span className="text-slate-600">|</span>
                    <Link href="/#core-20" className="text-amber-400 hover:underline">Core 20 Hub</Link>
                </div>
            </main>
        </div>
    );
}
