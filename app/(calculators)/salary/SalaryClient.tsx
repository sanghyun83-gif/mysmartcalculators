"use client";

import { useMemo, useState } from "react";
import { Banknote, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { SALARY_2026 } from "@/lib/calculators/salary";

type FAQItem = Readonly<{ question: string; answer: string }>;
type PayPeriod = "annual" | "monthly" | "semimonthly" | "biweekly" | "weekly" | "daily" | "hourly";

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

function cleanNumber(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

export default function SalaryClient() {
  const [amount, setAmount] = useState("50000");
  const [period, setPeriod] = useState<PayPeriod>("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [showResults, setShowResults] = useState(false);

  const faqs = (SALARY_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedAmount = Number(amount) || 0;
  const parsedHours = Number(hoursPerWeek) || 40;
  const parsedDays = Number(daysPerWeek) || 5;

  const result = useMemo(() => {
    if (!showResults || parsedAmount < 0 || parsedHours <= 0 || parsedDays <= 0) return null;

    let annual = 0;
    switch (period) {
      case "annual":
        annual = parsedAmount;
        break;
      case "monthly":
        annual = parsedAmount * 12;
        break;
      case "semimonthly":
        annual = parsedAmount * 24;
        break;
      case "biweekly":
        annual = parsedAmount * 26;
        break;
      case "weekly":
        annual = parsedAmount * 52;
        break;
      case "daily":
        annual = parsedAmount * parsedDays * 52;
        break;
      case "hourly":
        annual = parsedAmount * parsedHours * 52;
        break;
    }

    return {
      annual,
      monthly: annual / 12,
      semimonthly: annual / 24,
      biweekly: annual / 26,
      weekly: annual / 52,
      daily: annual / (52 * parsedDays),
      hourly: annual / (52 * parsedHours),
    };
  }, [showResults, parsedAmount, parsedHours, parsedDays, period]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <BriefcaseBusiness className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Salary Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by BLS Wage Data + DOL Payroll Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Pay Amount</label>
                  <div className="flex flex-row items-center gap-2">
                    <Banknote className="w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => setAmount(cleanNumber(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Pay Period</label>
                  <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value as PayPeriod)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    <option value="annual">Annual</option>
                    <option value="monthly">Monthly</option>
                    <option value="semimonthly">Semi-monthly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="hourly">Hourly</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Hours / Week</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(cleanNumber(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Days / Week</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(cleanNumber(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Salary
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Notes</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Annual conversion uses standard 52-week assumptions. For payroll planning, verify your employer's pay cycle and overtime treatment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Salary.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Annual</div>
                    <div className="text-2xl font-black">{formatCurrency(result.annual)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Monthly</div>
                    <div className="text-2xl font-black">{formatCurrency(result.monthly)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Hourly</div>
                    <div className="text-2xl font-black">{formatCurrency(result.hourly)}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Pay Frequency Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Period</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Annual</td><td className="py-1.5 px-2 text-slate-700">{result ? formatCurrency(result.annual) : "-"}</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Semi-monthly</td><td className="py-1.5 px-2 text-slate-700">{result ? formatCurrency(result.semimonthly) : "-"}</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Bi-weekly</td><td className="py-1.5 px-2 text-slate-700">{result ? formatCurrency(result.biweekly) : "-"}</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Weekly</td><td className="py-1.5 px-2 text-slate-700">{result ? formatCurrency(result.weekly) : "-"}</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Daily</td><td className="py-1.5 px-2 text-slate-700">{result ? formatCurrency(result.daily) : "-"}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Salary Planning Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Convert offers into comparable annual and hourly values before negotiating. Include working hours, pay frequency, and overtime eligibility for an apples-to-apples comparison.
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
                {SALARY_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Salary FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
