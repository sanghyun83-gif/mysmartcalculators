"use client";

import { useMemo, useState } from "react";
import { Dice5, ShieldCheck } from "lucide-react";
import {
  DICE_ROLLER_2026,
  rollDice,
  DiceRollResult,
} from "@/lib/calculators/dice-roller";

type FAQItem = Readonly<{ question: string; answer: string }>;

function sanitizeInt(input: string): string {
  return input.replace(/[^0-9-]/g, "");
}

function toNumber(input: string): number {
  const n = Number(input);
  return Number.isFinite(n) ? n : 0;
}

function formatModifier(mod: number): string {
  if (mod === 0) return "";
  return mod > 0 ? `+${mod}` : `${mod}`;
}

function FAQSection({ faqs }: { faqs: readonly FAQItem[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-white border border-slate-200 rounded-md hover:border-slate-300"
        >
          <summary className="list-none p-3 flex items-center justify-between cursor-pointer [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-slate-800">
              {faq.question}
            </h3>
            <span className="text-slate-400 group-open:rotate-180 transition-transform">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>
          <div className="p-3 pt-1 border-t border-slate-100 text-sm leading-relaxed text-slate-600">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function DiceRollerClient() {
  const defaults = DICE_ROLLER_2026.defaults;
  const [dice, setDice] = useState(String(defaults.dice));
  const [sides, setSides] = useState(String(defaults.sides));
  const [modifier, setModifier] = useState(String(defaults.modifier));

  const [current, setCurrent] = useState<DiceRollResult | null>(null);
  const [history, setHistory] = useState<DiceRollResult[]>([]);

  const faqs = (DICE_ROLLER_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsed = useMemo(() => {
    return {
      dice: toNumber(dice),
      sides: toNumber(sides),
      modifier: toNumber(modifier),
    };
  }, [dice, sides, modifier]);

  const notation = useMemo(() => {
    const base = `${parsed.dice || 0}d${parsed.sides || 0}`;
    return `${base}${formatModifier(parsed.modifier)}`;
  }, [parsed]);

  const onRoll = () => {
    const result = rollDice(parsed.dice, parsed.sides, parsed.modifier);
    setCurrent(result);
    setHistory((prev) => [result, ...prev].slice(0, 8));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Dice5 className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Dice Roller</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Independent roll per die
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">
                Input Parameters
              </h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">
                    Dice Count
                  </label>
                  <input
                    value={dice}
                    onChange={(e) => setDice(sanitizeInt(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">
                    Sides per Die
                  </label>
                  <input
                    value={sides}
                    onChange={(e) => setSides(sanitizeInt(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">
                    Modifier
                  </label>
                  <input
                    value={modifier}
                    onChange={(e) => setModifier(sanitizeInt(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={onRoll}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Roll Dice
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">
                Result
              </h2>

              {!current ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">
                    Status
                  </div>
                  <div className="text-base font-black">
                    Enter values and click Roll Dice.
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                      <div className="text-[10px] uppercase tracking-wide">
                        Total
                      </div>
                      <div className="text-2xl font-black">{current.total}</div>
                    </div>
                    <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                      <div className="text-[10px] uppercase tracking-wide">
                        Sum
                      </div>
                      <div className="text-2xl font-black">{current.sum}</div>
                    </div>
                    <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                      <div className="text-[10px] uppercase tracking-wide">
                        Average
                      </div>
                      <div className="text-2xl font-black">
                        {current.average.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-md border border-slate-200 bg-slate-50 text-sm text-slate-700">
                    <div className="text-[10px] uppercase tracking-wide mb-1">
                      Rolls ({notation})
                    </div>
                    <div className="font-mono">{current.rolls.join(", ")}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded border border-slate-200 bg-white text-xs">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Min
                      </div>
                      <div className="font-bold text-slate-800">{current.min}</div>
                    </div>
                    <div className="p-2 rounded border border-slate-200 bg-white text-xs">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Max
                      </div>
                      <div className="font-bold text-slate-800">{current.max}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">
                Recent Rolls
              </h3>
              {history.length === 0 ? (
                <div className="text-sm text-slate-500">No history yet.</div>
              ) : (
                <div className="space-y-2">
                  {history.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 border border-slate-200 rounded p-2 bg-slate-50"
                    >
                      <div className="font-mono">
                        {item.dice}d{item.sides}
                        {formatModifier(item.modifier)}
                      </div>
                      <div>
                        Total: <strong>{item.total}</strong> | Rolls:{" "}
                        {item.rolls.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">
            Decision Guide
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Use the total when a game or rule calls for a single outcome. Use the
            sum to compare against difficulty checks, and use the average to
            estimate long-run expectations before committing to a strategy.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Scenario Pack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-700">
            <div className="border border-slate-200 rounded-md p-3 bg-slate-50">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                RPG Attack Check
              </div>
              <div className="font-mono mt-1">1d20 + 5</div>
              <p className="mt-2">
                Range 6–25. Beat the target number to succeed.
              </p>
            </div>
            <div className="border border-slate-200 rounded-md p-3 bg-slate-50">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Board Game Movement
              </div>
              <div className="font-mono mt-1">2d6</div>
              <p className="mt-2">
                Average 7, range 2–12. Use average to plan safe routes.
              </p>
            </div>
            <div className="border border-slate-200 rounded-md p-3 bg-slate-50">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Percentile Roll
              </div>
              <div className="font-mono mt-1">1d100</div>
              <p className="mt-2">
                Treat the result as a percentage check (success if &le;
                threshold).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Assumptions and Limits
          </h3>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>
              Fair roll distribution: each die is independent and uniformly
              distributed.
            </li>
            <li>
              Each roll is an independent trial with no memory of prior outcomes.
            </li>
            <li>Randomness uses Math.random and is not cryptographic-grade.</li>
            <li>Dice count is capped at 100 per roll.</li>
            <li>Sides are capped at 1000 per die.</li>
            <li>Modifier range is limited to +/- 1000.</li>
            <li>Average is the expected value, not a guaranteed outcome.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Edge and Stress Tests
          </h3>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>1d2 with modifier 0 should only output 1 or 2.</li>
            <li>100d1000 verifies upper-bound performance and range.</li>
            <li>Negative modifiers can push totals below zero.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Sources and Review
          </h3>
          <div className="text-sm text-slate-700 space-y-1">
            {DICE_ROLLER_2026.sources.map((source) => (
              <div key={source.name}>
                {source.name} — {source.type}
              </div>
            ))}
          </div>
          <div className="text-xs text-slate-500 mt-2">
            Last reviewed: {DICE_ROLLER_2026.review.lastReviewed}
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Who / How / Why
          </h3>
          <div className="text-sm text-slate-700 space-y-1">
            <div>Who: {DICE_ROLLER_2026.review.reviewer}</div>
            <div>How: Independent uniform rolls with a modifier applied last.</div>
            <div>Why: Fast, reliable tabletop probability checks.</div>
          </div>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">
            Dice FAQ
          </h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
