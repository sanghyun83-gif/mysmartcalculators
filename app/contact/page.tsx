import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | MySmartCalculators",
  description: "Contact MySmartCalculators for questions, feedback, or support. We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Contact Us</h1>
          <p className="text-slate-400">Have questions? We&apos;re here to help.</p>
          <p className="text-slate-500 text-sm mt-2">Last updated: February 27, 2026</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Email Us</h2>
                <p className="text-sm text-slate-400">For general inquiries</p>
              </div>
            </div>
            <a href="mailto:contact@mysmartcalculators.com" className="text-amber-400 hover:underline text-lg">
              contact@mysmartcalculators.com
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <MessageSquare className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Feedback</h2>
                <p className="text-sm text-slate-400">Help us improve</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              We welcome suggestions for new calculators, feature improvements, or corrections to existing tools.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-medium">Are the calculators free to use?</h3>
              <p className="text-slate-400 text-sm mt-1">Yes, all our calculators are completely free to use.</p>
            </div>
            <div>
              <h3 className="text-white font-medium">Is my data stored?</h3>
              <p className="text-slate-400 text-sm mt-1">No, all calculations are processed locally in your browser. We do not store your calculator inputs.</p>
            </div>
            <div>
              <h3 className="text-white font-medium">Can I rely on these calculations for legal decisions?</h3>
              <p className="text-slate-400 text-sm mt-1">Our calculators provide estimates for informational purposes only. Always consult with qualified professionals (attorneys, doctors, financial advisors) before making important decisions.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-amber-900/20 border border-amber-500/30 rounded-xl">
          <h3 className="text-lg font-semibold text-amber-300 mb-3">Legal Disclaimer</h3>
          <p className="text-sm text-amber-200/80">
            MySmartCalculators provides tools for informational purposes only. The calculations and information provided do not constitute legal, medical, or financial advice. Consult qualified professionals before taking action based on any information from this website.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Service Owner & Response</h3>
          <p className="text-sm text-slate-300 mb-2">
            This site is operated under the MySmartCalculators service brand.
          </p>
          <p className="text-sm text-slate-300">
            Primary contact channel: <a href="mailto:contact@mysmartcalculators.com" className="text-amber-400 hover:underline">contact@mysmartcalculators.com</a>. Target response window is within 5 business days.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="text-amber-400 hover:underline">About Us</Link>
          <span className="text-slate-600">|</span>
          <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>
          <span className="text-slate-600">|</span>
          <Link href="/" className="text-amber-400 hover:underline">All Calculators</Link>
        </div>
      </main>
    </div>
  );
}
