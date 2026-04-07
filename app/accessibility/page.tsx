import type { Metadata } from "next";
import Link from "next/link";
import { Eye } from "lucide-react";

const BASE_URL = "https://mysmartcalculators.com";

export const metadata: Metadata = {
  title: "Accessibility Statement | MySmartCalculators Core 20",
  description: "Accessibility commitment under MySmartCalculators Core 20 policy. We prioritize accessible high-intent workflows and continuous barrier reduction.",
  alternates: {
    canonical: `${BASE_URL}/accessibility`,
  },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Accessibility</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Accessibility Statement</h1>
          <p className="text-slate-400">Last updated: February 27, 2026</p>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Our Commitment</h2>
            <p className="text-slate-300">MySmartCalculators is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
            <p className="text-slate-300 mt-4">
              Under our <strong className="text-white">Core 20 policy</strong>, accessibility testing and remediation are prioritized on twenty high-intent calculator workflows.
              This improves consistency for critical tasks such as mortgage, tax, BMI, calorie, and pregnancy-related calculations.
            </p>
            <p className="text-slate-300 mt-3">
              Non-core routes remain available, but accessibility enhancements may be scheduled after Core 20 updates depending on severity, user impact, and maintenance capacity.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Measures We Take</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Semantic HTML structure for screen reader compatibility</li>
              <li>High contrast color schemes in our dark mode interface</li>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>Clear, readable fonts and text sizing</li>
              <li>Descriptive labels for form inputs and buttons</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Conformance Status</h2>
            <p className="text-slate-300">We aim to conform to WCAG 2.1 Level AA guidelines. We recognize that not all accessibility standards may be fully met at all times, and we are actively working to identify and address any barriers.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Feedback & Contact</h2>
            <p className="text-slate-300 mb-3">We welcome your feedback on the accessibility of MySmartCalculators. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-300">Email: <Link href="/contact" className="text-amber-400 hover:underline">Contact Page</Link> or <a href="mailto:contact@mysmartcalculators.com" className="text-amber-400 hover:underline">contact@mysmartcalculators.com</a></p>
              <p className="text-slate-400 mt-2 text-sm">We will try to respond within 5 business days.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Assistive Technology Compatibility</h2>
            <p className="text-slate-300">Our website is designed to be compatible with the following assistive technologies:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Voice recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Limitations</h2>
            <p className="text-slate-300">Despite our best efforts, there may be some limitations. We are committed to addressing accessibility issues as quickly as possible. If you need information in an alternative format, please contact us.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">Accessibility Responsibility</h2>
            <p className="text-slate-300">
              Accessibility improvements are managed by the MySmartCalculators team. Reported barriers are triaged by severity and reviewed in scheduled update cycles.
            </p>
            <p className="text-slate-300 mt-3">
              Triage order follows our Core 20 governance model: high-impact blockers on Core 20 pages are handled first, then broader non-core improvements are queued.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/terms" className="text-amber-400 hover:underline">Terms of Use</Link>
          <span className="text-slate-600">|</span>
          <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>
          <span className="text-slate-600">|</span>
          <Link href="/about" className="text-amber-400 hover:underline">About Us</Link>
          <span className="text-slate-600">|</span>
          <Link href="/#core-20" className="text-amber-400 hover:underline">Core 20 Hub</Link>
        </div>
      </main>
    </div>
  );
}
