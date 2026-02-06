import Link from "next/link";
import { Calculator, Eye } from "lucide-react";

export const metadata = {
    title: "Accessibility Statement | MySmartCalculators",
    description: "Accessibility commitment for MySmartCalculators. We strive to make our calculators accessible to all users.",
};

export default function AccessibilityPage() {
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
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Accessibility</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Accessibility Statement</h1>
                    <p className="text-slate-400">Last updated: January 2026</p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">Our Commitment</h2>
                        <p className="text-slate-300">MySmartCalculators is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">Measures We Take</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Semantic HTML structure for screen reader compatibility</li>
                            <li>High contrast color schemes in our dark mode interface</li>
                            <li>Keyboard navigation support for all interactive elements</li>
                            <li>Clear, readable fonts and text sizing</li>
                            <li>Descriptive labels for form inputs and buttons</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">Conformance Status</h2>
                        <p className="text-slate-300">We aim to conform to WCAG 2.1 Level AA guidelines. We recognize that not all accessibility standards may be fully met at all times, and we are actively working to identify and address any barriers.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">Feedback & Contact</h2>
                        <p className="text-slate-300 mb-3">We welcome your feedback on the accessibility of MySmartCalculators. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:</p>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <p className="text-slate-300">Email: <Link href="/contact" className="text-amber-400 hover:underline">Contact Page</Link></p>
                            <p className="text-slate-400 mt-2 text-sm">We will try to respond within 5 business days.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">Assistive Technology Compatibility</h2>
                        <p className="text-slate-300">Our website is designed to be compatible with the following assistive technologies:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                            <li>Screen magnification software</li>
                            <li>Voice recognition software</li>
                            <li>Keyboard-only navigation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">Limitations</h2>
                        <p className="text-slate-300">Despite our best efforts, there may be some limitations. We are committed to addressing accessibility issues as quickly as possible. If you need information in an alternative format, please contact us.</p>
                    </section>
                </div>

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <Link href="/terms" className="text-amber-400 hover:underline">Terms of Use</Link>
                    <span className="text-slate-600"></span>
                    <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>
                    <span className="text-slate-600"></span>
                    <Link href="/about" className="text-amber-400 hover:underline">About Us</Link>
                    <span className="text-slate-600"></span>
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
