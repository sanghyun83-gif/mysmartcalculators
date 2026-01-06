import Link from "next/link";
import { Calculator } from "lucide-react";

interface GlobalFooterProps {
    siteName?: string;
    citation?: string;
}

export function GlobalFooter({ siteName = "MySmartCalculators", citation }: GlobalFooterProps) {
    return (
        <footer className="bg-slate-800 border-t border-slate-700">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Disclaimer */}
                <div className="mb-6 p-4 bg-amber-900/20 border border-amber-500/20 rounded-lg">
                    <p className="text-xs text-amber-200/70 text-center">
                        <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only and does not constitute legal, medical, or financial advice. Always consult with qualified professionals before making important decisions.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
                    <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">About</Link>
                    <span className="text-slate-600">•</span>
                    <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">Privacy Policy</Link>
                    <span className="text-slate-600">•</span>
                    <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</Link>
                    <span className="text-slate-600">•</span>
                    <Link href="/" className="text-slate-400 hover:text-amber-400 transition-colors">All Calculators</Link>
                </div>

                {/* Brand and Citation */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-amber-500" />
                        <span className="font-semibold text-white">{siteName}</span>
                    </div>
                    {citation && <p className="text-xs text-slate-500 text-center">{citation}</p>}
                    <p className="text-xs text-slate-500">© 2026 MySmartCalculators</p>
                </div>
            </div>
        </footer>
    );
}
