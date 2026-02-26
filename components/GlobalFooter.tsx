"use client";

import Link from "next/link";
import { Calculator } from "lucide-react";

interface GlobalFooterProps {
  siteName?: string;
  citation?: string;
}

export function GlobalFooter({ siteName = "MySmartCalculators", citation }: GlobalFooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 p-4 bg-slate-950/40 border border-slate-800 rounded-2xl text-center text-xs text-slate-400">
          Informational use only. Not legal, medical, or financial advice.{" "}
          <Link href="/terms" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
            Read full legal notice
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest">
          <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-all">About</Link>
          <span className="text-slate-700">|</span>
          <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-all">Terms</Link>
          <span className="text-slate-700">|</span>
          <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-all">Privacy</Link>
          <span className="text-slate-700">|</span>
          <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-all">Contact</Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-70">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-black text-white uppercase tracking-tighter">{siteName}</span>
          </div>
          {citation && <p className="text-[10px] text-slate-500 font-medium">{citation}</p>}
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">
            &copy; 2026 MySmartCalculators | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
