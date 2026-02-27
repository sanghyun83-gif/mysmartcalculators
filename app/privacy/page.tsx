import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | MySmartCalculators",
  description: "Privacy Policy for MySmartCalculators. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: February 27, 2026</p>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p className="text-slate-300">MySmartCalculators (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="text-slate-300 mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you use our calculators and website</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Cookies:</strong> Small data files stored on your device for analytics and advertising</li>
              <li><strong>Calculator Inputs:</strong> Data you enter into our calculators (processed locally, not stored)</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>To provide and improve our calculator services</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">4. Cookies and Advertising</h2>
            <p className="text-slate-300 mb-3">We use cookies and similar technologies for:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Analytics:</strong> Google Analytics to understand website traffic</li>
              <li><strong>Advertising:</strong> Google AdSense to display personalized ads</li>
            </ul>
            <p className="text-slate-300 mt-3">You can manage cookie preferences through your browser settings. For more information about how Google uses data, visit: <a href="https://policies.google.com/privacy" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
            <p className="text-slate-300">We implement appropriate security measures to protect your information. Calculator inputs are processed locally in your browser and are not transmitted to or stored on our servers.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
            <p className="text-slate-300">Our website may contain links to third-party websites and uses third-party services (Google Analytics, Google AdSense). We are not responsible for the privacy practices of these third parties.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
            <p className="text-slate-300">Depending on your location, you may have rights regarding your personal data, including access, correction, deletion, and data portability. Contact us to exercise these rights.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p className="text-slate-300">We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p className="text-slate-300">If you have questions about this privacy policy, please contact us at: <Link href="/contact" className="text-amber-400 hover:underline">Contact Page</Link> or <a href="mailto:contact@mysmartcalculators.com" className="text-amber-400 hover:underline">contact@mysmartcalculators.com</a>.</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <h2 className="text-xl font-bold text-white mb-3">10. Data Responsibility</h2>
            <p className="text-slate-300 mb-3">
              MySmartCalculators acts as the service operator for this website and handles privacy inquiries through the contact channel above.
            </p>
            <p className="text-slate-300">
              If you are submitting a data-related request, include the relevant page URL, approximate timestamp, and browser/device context to help verification.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="text-amber-400 hover:underline">About Us</Link>
          <span className="text-slate-600">|</span>
          <Link href="/contact" className="text-amber-400 hover:underline">Contact Us</Link>
          <span className="text-slate-600">|</span>
          <Link href="/" className="text-amber-400 hover:underline">All Calculators</Link>
        </div>
      </main>
    </div>
  );
}
