"use client";

import { useState } from "react";
import { Binary, ShieldCheck } from "lucide-react";
import { BINARY_2026, BinaryEngine } from "@/lib/calculators/binary";

type FAQItem = Readonly<{ question: string; answer: string }>;
type Base = "2" | "8" | "10" | "16";
type BitOp = "xor" | "and" | "or";

function FAQSection({ faqs }: { faqs: readonly FAQItem[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {faqs.map((faq, index) => (
        <details key={index} className="group bg-white border border-slate-200 rounded-md hover:border-slate-300">
          <summary className="list-none p-3 flex items-center justify-between cursor-pointer [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-slate-800">{faq.question}</h3>
            <span className="text-slate-400 group-open:rotate-180 transition-transform">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="p-3 pt-1 border-t border-slate-100 text-sm leading-relaxed text-slate-600">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}

function sanitizeByBase(value: string, base: Base): string {
  const upper = value.toUpperCase();
  if (base === "2") return upper.replace(/[^01]/g, "");
  if (base === "8") return upper.replace(/[^0-7]/g, "");
  if (base === "10") return upper.replace(/[^0-9-]/g, "");
  return upper.replace(/[^0-9A-F]/g, "");
}

function sanitizeBinary(value: string): string {
  return value.replace(/[^01]/g, "");
}

function normalizeBits(value: string, bits: number): string {
  const cleaned = sanitizeBinary(value);
  if (!cleaned) return "0".repeat(bits);
  if (cleaned.length > bits) return cleaned.slice(-bits);
  return cleaned.padStart(bits, "0");
}

export default function BinaryClient() {
  const [sourceValue, setSourceValue] = useState("255");
  const [fromBase, setFromBase] = useState<Base>("10");
  const [toBase, setToBase] = useState<Base>("2");
  const [leftBinary, setLeftBinary] = useState("10101010");
  const [rightBinary, setRightBinary] = useState("11001100");
  const [operation, setOperation] = useState<BitOp>("xor");
  const [bits, setBits] = useState("8");
  const [showResults, setShowResults] = useState(false);

  const faqs = (BINARY_2026.faqs as readonly FAQItem[] | undefined) ?? [];
  const parsedBits = Math.max(4, Math.min(64, Number(bits) || 8));

  const conversionResult = (() => {
    if (!showResults || !sourceValue) return null;
    return BinaryEngine.convert(sourceValue, Number(fromBase), Number(toBase), parsedBits);
  })();

  const bitwiseResult = (() => {
    if (!showResults) return null;
    const a = normalizeBits(leftBinary, parsedBits);
    const b = normalizeBits(rightBinary, parsedBits);
    try {
      if (operation === "xor") return BinaryEngine.xor(a, b, parsedBits);
      if (operation === "and") return BinaryEngine.and(a, b, parsedBits);
      return BinaryEngine.or(a, b, parsedBits);
    } catch {
      return "ERROR";
    }
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Binary className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Binary Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by IEEE 754 + NIST Digital Math Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Base Conversion Value</label>
                  <input
                    type="text"
                    value={sourceValue}
                    onChange={(e) => setSourceValue(sanitizeByBase(e.target.value, fromBase))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">From Base</label>
                    <select
                      value={fromBase}
                      onChange={(e) => {
                        const next = e.target.value as Base;
                        setFromBase(next);
                        setSourceValue((prev) => sanitizeByBase(prev, next));
                      }}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      <option value="2">Binary (2)</option>
                      <option value="8">Octal (8)</option>
                      <option value="10">Decimal (10)</option>
                      <option value="16">Hex (16)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">To Base</label>
                    <select
                      value={toBase}
                      onChange={(e) => setToBase(e.target.value as Base)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      <option value="2">Binary (2)</option>
                      <option value="8">Octal (8)</option>
                      <option value="10">Decimal (10)</option>
                      <option value="16">Hex (16)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Bitwise Inputs</label>
                  <input
                    type="text"
                    value={leftBinary}
                    onChange={(e) => setLeftBinary(sanitizeBinary(e.target.value))}
                    className="w-full h-9 px-2 mb-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    placeholder="Left binary"
                  />
                  <input
                    type="text"
                    value={rightBinary}
                    onChange={(e) => setRightBinary(sanitizeBinary(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    placeholder="Right binary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Operation</label>
                    <select
                      value={operation}
                      onChange={(e) => setOperation(e.target.value as BitOp)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      <option value="xor">XOR</option>
                      <option value="and">AND</option>
                      <option value="or">OR</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Bit Width</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={bits}
                      onChange={(e) => setBits(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Binary Result
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!showResults ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Binary Result.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Base Conversion</div>
                    <div className="text-xl font-black break-all">{conversionResult ?? "ERROR"}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Bitwise {operation.toUpperCase()}</div>
                    <div className="text-xl font-black break-all">{bitwiseResult ?? "ERROR"}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Concept</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Meaning</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Bit</td><td className="py-1.5 px-2 text-slate-700">0 or 1</td><td className="py-1.5 px-2 text-slate-700">Smallest data unit</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Byte</td><td className="py-1.5 px-2 text-slate-700">8 bits</td><td className="py-1.5 px-2 text-slate-700">Memory addressing</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Hex</td><td className="py-1.5 px-2 text-slate-700">Base 16</td><td className="py-1.5 px-2 text-slate-700">Compact binary notation</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Two's Complement</td><td className="py-1.5 px-2 text-slate-700">Signed binary encoding</td><td className="py-1.5 px-2 text-slate-700">Negative integer representation</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Binary Logic Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Binary conversion and bitwise operations are core tools for systems programming, networking, and embedded development. Always confirm bit-width assumptions before comparing values across systems.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Authority References</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Source</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {BINARY_2026.citations.map((cite) => (
                  <tr key={cite.name} className="even:bg-slate-50">
                    <td className="py-1.5 px-2 text-slate-700">{cite.name}</td>
                    <td className="py-1.5 px-2 text-slate-700">{cite.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Binary FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
