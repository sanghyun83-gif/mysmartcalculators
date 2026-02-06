"use client";

const Link = require("next/link").default;
import { Calculator } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface GlobalFooterProps {
    siteName?: string;
    citation?: string;
}

export function GlobalFooter({ siteName = "MySmartCalculators", citation }: GlobalFooterProps) {
    return (
        <footer className="bg-slate-800 border-t border-slate-700">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Disclaimer */}
                <div className="mb-6 p-6 bg-slate-900/50 border border-slate-700/50 rounded-2xl">
                    <p className="text-[10px] text-slate-500 leading-relaxed text-center uppercase tracking-wider">
                        <strong>Legal Notice & Jurisdiction:</strong> {SITE_CONFIG.jurisdiction.fullDisclaimer}
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest">
                    <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-all">About Our Team</Link>
                    <span className="text-slate-700">??/span>
                    <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-all">Terms of Use</Link>
                    <span className="text-slate-700">??/span>
                    <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-all">Privacy Policy</Link>
                    <span className="text-slate-700">??/span>
                    <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-all">Compliance Inquiry</Link>
                </div>

                {/* Brand and Citation */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
                    <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-amber-500" />
                        <span className="text-xs font-black text-white uppercase tracking-tighter">{siteName}</span>
                    </div>
                    {citation && <p className="text-[10px] text-slate-500 font-medium">{citation}</p>}
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">© 2026 MySmartCalculators ??Global Entity</p>
                </div>
            </div>
        </footer>
    );
}
