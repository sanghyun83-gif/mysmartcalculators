import Link from "next/link";
import { Calculator, Scale, Shield, Users } from "lucide-react";

export const metadata = {
    title: "About Us | MySmartCalculators",
    description: "Learn about MySmartCalculators - free legal, medical, insurance, and financial calculators. Our mission is to provide accurate, accessible tools for everyone.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-amber-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">About MySmartCalculators</h1>
                    <p className="text-xl text-slate-400">Empowering informed decisions with free calculators</p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-amber-400" />
                            Our Mission
                        </h2>
                        <p className="text-slate-300">
                            MySmartCalculators provides free, accurate, and easy-to-use calculators for legal settlements, medical claims,
                            insurance estimates, and financial planning. We believe everyone deserves access to tools that help them
                            understand their options and make informed decisions.
                        </p>
                    </section>

                    <section id="methodology" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-amber-400" />
                            Methodology
                        </h2>
                        <p className="text-slate-300 mb-4">
                            We maintain calculation logic with versioned formulas and source references. Core assumptions are reviewed
                            against official public documentation (government/statutory sources where applicable), then validated using
                            deterministic test cases before release.
                        </p>
                        <p className="text-slate-300">
                            Model and benchmark figures shown on the site are informational indicators and should be interpreted alongside
                            the calculator inputs and the stated assumptions on each page.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-amber-400" />
                            What We Offer
                        </h2>
                        <ul className="space-y-3 text-slate-300">
                            <li><strong>Legal Calculators:</strong> Personal injury, workers compensation, wrongful death, and settlement estimators</li>
                            <li><strong>Medical Calculators:</strong> Medical malpractice, pharmaceutical litigation, and injury claim tools</li>
                            <li><strong>Insurance Calculators:</strong> Life, health, disability, and liability insurance estimators</li>
                            <li><strong>Financial Calculators:</strong> Child support, alimony, tax, and estate planning tools</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-amber-400" />
                            Our Team
                        </h2>
                        <p className="text-slate-300">
                            MySmartCalculators is developed by data analysts and developers using publicly available formulas, government
                            statistics, and official calculation methodologies.
                        </p>
                    </section>

                    <section id="update-log" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-white mb-4">Update Log</h2>
                        <ul className="space-y-2 text-slate-300">
                            <li><strong>2026-02-26:</strong> Home search accessibility, structured data, and metadata consistency updates.</li>
                            <li><strong>2026-02-26:</strong> Calculator taxonomy and schema alignment refresh.</li>
                            <li><strong>2026-02-25:</strong> Core calculator modernization batches (BMI, body-fat, related hubs).</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12 p-6 bg-amber-900/20 border border-amber-500/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Important Disclaimer</h3>
                    <p className="text-sm text-amber-200/80">
                        The information and calculators provided on this website are for general informational purposes only.
                        They do not constitute legal, medical, financial, or professional advice.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>
                    <span className="text-slate-600">|</span>
                    <Link href="/contact" className="text-amber-400 hover:underline">Contact Us</Link>
                    <span className="text-slate-600">|</span>
                    <Link href="/" className="text-amber-400 hover:underline">All Calculators</Link>
                </div>
            </main>

            <footer className="bg-slate-800 border-t border-slate-700 mt-16">
                <div className="max-w-6xl mx-auto px-4 py-8 text-center">
                    <p className="text-sm text-slate-500">&copy; 2026 MySmartCalculators. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
