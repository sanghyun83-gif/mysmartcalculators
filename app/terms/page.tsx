import Link from "next/link";
import { Calculator, Scale } from "lucide-react";

export const metadata = {
    title: "Terms of Use | MySmartCalculators",
    description: "Terms of Use for MySmartCalculators. Please read these terms carefully before using our calculators.",
};

export default function TermsPage() {
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
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4">
                        <Scale className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-amber-300">Terms of Use</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
                    <p className="text-slate-400">Last updated: January 2026</p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                        <p className="text-slate-300">By accessing and using MySmartCalculators (&quot;the Service&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Nature of the Service</h2>
                        <p className="text-slate-300 mb-3">The calculators and tools provided on this website are for <strong>informational and educational purposes only</strong>. They do not constitute:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Legal advice or an attorney-client relationship</li>
                            <li>Medical advice or a doctor-patient relationship</li>
                            <li>Financial advice or an advisor-client relationship</li>
                            <li>Insurance advice or an agent-client relationship</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. No Professional Relationship</h2>
                        <p className="text-slate-300">Use of this website does NOT create any professional relationship including, but not limited to, attorney-client, doctor-patient, or advisor-client relationships. We are not licensed professionals. Always consult with qualified, licensed professionals before making important decisions.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Accuracy Disclaimer</h2>
                        <p className="text-slate-300 mb-3">While we strive to provide accurate calculations based on publicly available formulas and government data:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>All results are <strong>estimates only</strong></li>
                            <li>Data is based on projected 2026 information</li>
                            <li>We do NOT guarantee real-time accuracy or updates following legislative changes</li>
                            <li>Actual outcomes may vary significantly based on individual circumstances</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
                        <p className="text-slate-300">TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYSMARTCALCULATORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE OR RELIANCE ON ANY CALCULATION RESULTS.</p>
                    </section>

                    <section className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-red-300 mb-3">6. DISPUTE RESOLUTION</h2>
                        <p className="text-slate-300 mb-3">ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICE SHALL BE GOVERNED BY THE LAWS OF THE REPUBLIC OF KOREA.</p>
                        <p className="text-slate-300 mb-3">THE EXCLUSIVE JURISDICTION FOR ANY LEGAL PROCEEDING SHALL BE THE <strong>SEOUL CENTRAL DISTRICT COURT IN SEOUL, REPUBLIC OF KOREA</strong>.</p>
                        <p className="text-slate-300 font-bold">YOU HEREBY WAIVE ANY RIGHT TO A JURY TRIAL OR TO PARTICIPATE IN A CLASS ACTION LAWSUIT AGAINST MYSMARTCALCULATORS.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. Arbitration</h2>
                        <p className="text-slate-300">Before initiating any legal action, you agree to first attempt to resolve any dispute through good-faith negotiation and, if necessary, through binding arbitration in Seoul, Republic of Korea, rather than in court.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. Indemnification</h2>
                        <p className="text-slate-300">You agree to indemnify and hold harmless MySmartCalculators from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">9. Modifications</h2>
                        <p className="text-slate-300">We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">10. Severability</h2>
                        <p className="text-slate-300">If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">11. Contact</h2>
                        <p className="text-slate-300">Questions about these Terms should be directed to: <Link href="/contact" className="text-amber-400 hover:underline">Contact Page</Link></p>
                    </section>

                    <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-white mb-3">12. Trademark Notice</h2>
                        <p className="text-slate-300 mb-3">All product names, logos, brands, and trademarks mentioned on this website are property of their respective owners. This includes, but is not limited to: pharmaceutical products, medical devices, insurance companies, and any other branded products or services.</p>
                        <p className="text-slate-300 mb-3">Use of these names, logos, and brands does not imply endorsement, sponsorship, or affiliation with MySmartCalculators.</p>
                        <p className="text-slate-300 text-sm"><strong>THIS WEBSITE IS NOT AFFILIATED WITH, SPONSORED BY, OR ENDORSED BY ANY OF THE COMPANIES, PRODUCTS, OR SERVICES MENTIONED.</strong></p>
                    </section>
                </div>

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>
                    <span className="text-slate-600">??/span>
                    <Link href="/about" className="text-amber-400 hover:underline">About Us</Link>
                    <span className="text-slate-600">??/span>
                    <Link href="/accessibility" className="text-amber-400 hover:underline">Accessibility</Link>
                    <span className="text-slate-600">??/span>
                    <Link href="/" className="text-amber-400 hover:underline">All Calculators</Link>
                </div>
            </main>

            <footer className="bg-slate-800 border-t border-slate-700 mt-16">
                <div className="max-w-6xl mx-auto px-4 py-8 text-center">
                    <p className="text-sm text-slate-500">© 2026 MySmartCalculators. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
