"use client";

import { useState } from "react";
import { Home, ShieldCheck } from "lucide-react";
import {
  CALCULATORS,
  MORTGAGE_CONSTANTS,
  calculateMortgage,
  formatCurrency,
  generateAmortizationSchedule,
} from "@/lib/calculators/mortgage";

type FAQItem = {
  question: string;
  answer: string;
};

function getLtvStyles(downPaymentPercent: number) {
  if (downPaymentPercent >= 20) {
    return "text-emerald-800 bg-emerald-50 border-emerald-200";
  }
  if (downPaymentPercent >= 10) {
    return "text-amber-800 bg-amber-50 border-amber-200";
  }
  return "text-rose-800 bg-rose-50 border-rose-200";
}

function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-white border border-slate-200 rounded-md hover:border-slate-300"
        >
          <summary className="list-none p-3 flex items-center justify-between cursor-pointer [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-slate-800">{faq.question}</h3>
            <span className="text-slate-400 group-open:rotate-180 transition-transform">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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

export default function MortgageClient() {
  const [homePrice, setHomePrice] = useState(String(MORTGAGE_CONSTANTS.defaults.homePrice));
  const [downPaymentPercent, setDownPaymentPercent] = useState(
    String(MORTGAGE_CONSTANTS.defaults.downPaymentPercent)
  );
  const [interestRate, setInterestRate] = useState(String(MORTGAGE_CONSTANTS.defaults.interestRate));
  const [loanTermYears, setLoanTermYears] = useState(String(MORTGAGE_CONSTANTS.defaults.loanTermYears));
  const [propertyTaxRate, setPropertyTaxRate] = useState(String(MORTGAGE_CONSTANTS.defaults.propertyTaxRate));
  const [homeInsuranceYear, setHomeInsuranceYear] = useState(String(MORTGAGE_CONSTANTS.defaults.homeInsuranceYear));

  const calculatorFaqs =
    (CALCULATORS.find((c) => c.id === "mortgage/calculator")?.faqs as FAQItem[] | undefined) ?? [];

  const result = (() => {
    const price = Math.max(0, Number(homePrice) || MORTGAGE_CONSTANTS.defaults.homePrice);
    const dpPercent = Math.max(0, Math.min(100, Number(downPaymentPercent) || MORTGAGE_CONSTANTS.defaults.downPaymentPercent));
    const rate = Math.max(0, Number(interestRate) || MORTGAGE_CONSTANTS.defaults.interestRate);
    const years = Math.max(1, Number(loanTermYears) || MORTGAGE_CONSTANTS.defaults.loanTermYears);
    const taxRate = Math.max(0, Number(propertyTaxRate) || MORTGAGE_CONSTANTS.defaults.propertyTaxRate);
    const insurance = Math.max(0, Number(homeInsuranceYear) || MORTGAGE_CONSTANTS.defaults.homeInsuranceYear);
    const downPayment = price * (dpPercent / 100);

    return calculateMortgage(price, downPayment, rate, years, taxRate, insurance);
  })();

  const amortizationRows = (() => {
    const summary = generateAmortizationSchedule(result.loanAmount, result.interestRate, result.loanTermYears);
    return summary.yearlyData.slice(0, 6);
  })();

  const principalShare = result.totalMonthlyPayment > 0 ? (result.monthlyPI / result.totalMonthlyPayment) * 100 : 0;
  const taxShare = result.totalMonthlyPayment > 0 ? (result.monthlyTax / result.totalMonthlyPayment) * 100 : 0;
  const insuranceShare =
    result.totalMonthlyPayment > 0 ? (result.monthlyInsurance / result.totalMonthlyPayment) * 100 : 0;
  const pmiShare = result.totalMonthlyPayment > 0 ? (result.monthlyPMI / result.totalMonthlyPayment) * 100 : 0;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Home className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Mortgage Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by Freddie Mac PMMS + FHFA 2026 Data
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div id="amortization" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Mortgage Inputs</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Home Price</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={homePrice}
                    onChange={(e) => setHomePrice(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="w-full h-9 px-3 bg-white border border-slate-300 text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Down Payment and Interest Rate</label>
                  <div className="flex flex-row items-center gap-2">
                    <div className="relative w-full">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(e.target.value.replace(/[^0-9.]/g, ""))}
                        className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">%</span>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ""))}
                        className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">APR%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Loan Term</label>
                  <select
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    {MORTGAGE_CONSTANTS.loanTerms.map((term) => (
                      <option key={term.years} value={term.years}>
                        {term.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Property Tax and Insurance</label>
                  <div className="flex flex-row items-center gap-2">
                    <div className="relative w-full">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={propertyTaxRate}
                        onChange={(e) => setPropertyTaxRate(e.target.value.replace(/[^0-9.]/g, ""))}
                        className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">Tax%</span>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={homeInsuranceYear}
                        onChange={(e) => setHomeInsuranceYear(e.target.value.replace(/[^0-9.]/g, ""))}
                        className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">Yearly $</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Mortgage
                </button>
              </div>
            </div>

            <div className={`p-3 rounded-md border font-bold ${getLtvStyles(result.downPaymentPercent)}`}>
              <div className="text-xs uppercase tracking-wide mb-1">Loan-to-Value Status</div>
              <div className="text-sm">
                Down Payment {result.downPaymentPercent}% / LTV {(100 - result.downPaymentPercent).toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Monthly Payment Result</h2>
              <div className="text-4xl font-black text-slate-900 mb-2">{formatCurrency(result.totalMonthlyPayment)}</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">Principal + Interest</div>
                  <div className="font-bold text-slate-900">{formatCurrency(result.monthlyPI)}</div>
                </div>
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">Property Tax</div>
                  <div className="font-bold text-slate-900">{formatCurrency(result.monthlyTax)}</div>
                </div>
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">Insurance</div>
                  <div className="font-bold text-slate-900">{formatCurrency(result.monthlyInsurance)}</div>
                </div>
                <div className={`p-2 rounded-md border ${result.hasPMI ? "text-amber-800 bg-amber-50 border-amber-200 font-bold" : "text-emerald-800 bg-emerald-50 border-emerald-200 font-bold"}`}>
                  <div className="text-[10px] uppercase">PMI</div>
                  <div>{formatCurrency(result.monthlyPMI)}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Payment Composition</h3>
              <div className="space-y-2">
                <div className="text-xs text-slate-600">Principal + Interest ({principalShare.toFixed(1)}%)</div>
                <div className="h-2 bg-slate-100 rounded border border-slate-200 overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${principalShare}%` }} />
                </div>
                <div className="text-xs text-slate-600">Tax ({taxShare.toFixed(1)}%)</div>
                <div className="h-2 bg-slate-100 rounded border border-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-400" style={{ width: `${taxShare}%` }} />
                </div>
                <div className="text-xs text-slate-600">Insurance ({insuranceShare.toFixed(1)}%)</div>
                <div className="h-2 bg-slate-100 rounded border border-slate-200 overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${insuranceShare}%` }} />
                </div>
                {result.hasPMI && (
                  <>
                    <div className="text-xs text-slate-600">PMI ({pmiShare.toFixed(1)}%)</div>
                    <div className="h-2 bg-slate-100 rounded border border-slate-200 overflow-hidden">
                      <div className="h-full bg-rose-500" style={{ width: `${pmiShare}%` }} />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Amortization Snapshot</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Year</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Principal</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Interest</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {amortizationRows.map((row) => (
                      <tr key={row.year} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700">{row.year}</td>
                        <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.totalPrincipal)}</td>
                        <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.totalInterest)}</td>
                        <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.endingBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Mortgage Reference Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Mortgage qualification and payment planning center on PITI: Principal, Interest, Taxes, and Insurance.
            In most US markets, PMI applies when down payment is below 20%. This calculator uses standard fixed-rate
            amortization and adds tax and insurance as monthly estimates for a practical payment preview.
          </p>
        </section>

        <section id="affordability" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">2026 Lending Benchmarks</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Metric</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Typical Range</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Use in Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">30-year fixed rate</td>
                  <td className="py-1.5 px-2 text-slate-700">~6.0% to 7.0%</td>
                  <td className="py-1.5 px-2 text-slate-700">APR input</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Property tax</td>
                  <td className="py-1.5 px-2 text-slate-700">~0.6% to 2.0%</td>
                  <td className="py-1.5 px-2 text-slate-700">Annual tax rate</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">PMI factor</td>
                  <td className="py-1.5 px-2 text-slate-700">~0.3% to 1.5%</td>
                  <td className="py-1.5 px-2 text-slate-700">Applied below 20% down</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="refinance" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Refinance Baseline Check</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Refinance decisions usually depend on rate delta, remaining loan term, and closing cost break-even.
            A common first-pass benchmark is whether a lower APR can offset closing costs within your expected hold period.
          </p>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">
            Mortgage FAQ
          </h3>
          <FAQSection faqs={calculatorFaqs} />
        </div>
      </section>
    </main>
  );
}
