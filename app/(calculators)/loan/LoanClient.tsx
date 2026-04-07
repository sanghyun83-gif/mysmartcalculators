"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Banknote, ShieldCheck } from "lucide-react";
import { LOAN_2026, calculateLoan } from "@/lib/calculators/loan";
import { sendGaEvent } from "@/lib/analytics/ga";

type FAQItem = Readonly<{ question: string; answer: string }>;
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function getEstimatedPayoffDate(startMonth: number, startYear: number, years: number) {
  const safeMonth = Math.min(Math.max(startMonth, 1), 12);
  const safeYear = Math.max(startYear, 2000);
  const totalMonths = years * 12;
  const payoffMonthIndex = safeMonth - 1 + totalMonths - 1;
  const payoffYear = safeYear + Math.floor(payoffMonthIndex / 12);
  const payoffMonth = payoffMonthIndex % 12;
  return `${MONTH_NAMES[payoffMonth]} ${payoffYear}`;
}

type DetailedLoanRow = {
  month: number;
  periodLabel: string;
  payment: number;
  principal: number;
  interest: number;
  extraPayment: number;
  balance: number;
  cumulativeInterest: number;
};

type DetailedLoanResult = {
  rows: DetailedLoanRow[];
  monthsToPayoff: number;
  totalPayment: number;
  totalInterest: number;
  payoffLabel: string;
  baseMonthlyPayment: number;
};

function calculateBaseMonthlyPayment(amount: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = Math.max(1, Math.round(years * 12));
  if (r === 0) return amount / n;
  return (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

function buildDetailedLoanPlan(args: {
  amount: number;
  annualRate: number;
  years: number;
  startMonth: number;
  startYear: number;
  monthlyExtra: number;
  annualExtra: number;
  oneTimeExtra: number;
  oneTimeMonth: number;
  biweeklyMode: boolean;
}): DetailedLoanResult {
  const {
    amount,
    annualRate,
    years,
    startMonth,
    startYear,
    monthlyExtra,
    annualExtra,
    oneTimeExtra,
    oneTimeMonth,
    biweeklyMode,
  } = args;
  const r = annualRate / 100 / 12;
  const n = Math.max(1, Math.round(years * 12));
  const baseMonthlyPayment = calculateBaseMonthlyPayment(amount, annualRate, years);
  const biweeklyEquivalentExtra = biweeklyMode ? baseMonthlyPayment / 12 : 0;

  let balance = amount;
  let month = 0;
  let totalPayment = 0;
  let totalInterest = 0;
  const rows: DetailedLoanRow[] = [];

  while (balance > 0.01 && month < n + 600) {
    month += 1;
    const interest = r > 0 ? balance * r : 0;
    const scheduledPrincipal = Math.max(0, baseMonthlyPayment - interest);
    let extra = monthlyExtra + biweeklyEquivalentExtra;
    if (annualExtra > 0 && month % 12 === 0) extra += annualExtra;
    if (oneTimeExtra > 0 && month === oneTimeMonth) extra += oneTimeExtra;
    const principal = Math.min(balance, scheduledPrincipal + extra);
    const payment = principal + interest;

    balance = Math.max(0, balance - principal);
    totalInterest += interest;
    totalPayment += payment;

    const labelMonthIndex = (startMonth - 1 + (month - 1)) % 12;
    const labelYear = startYear + Math.floor((startMonth - 1 + (month - 1)) / 12);
    rows.push({
      month,
      periodLabel: `${MONTH_NAMES[labelMonthIndex]} ${labelYear}`,
      payment: Math.round(payment),
      principal: Math.round(principal),
      interest: Math.round(interest),
      extraPayment: Math.round(extra),
      balance: Math.round(balance),
      cumulativeInterest: Math.round(totalInterest),
    });
  }

  return {
    rows,
    monthsToPayoff: rows.length,
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    payoffLabel: rows.length > 0 ? rows[rows.length - 1].periodLabel : getEstimatedPayoffDate(startMonth, startYear, years),
    baseMonthlyPayment: Math.round(baseMonthlyPayment),
  };
}

function calculateFeeAwareApr(amount: number, fees: number, monthlyPayment: number, months: number) {
  const netProceeds = amount - fees;
  if (netProceeds <= 0 || monthlyPayment <= 0 || months <= 0) return 0;
  const zeroRatePayment = netProceeds / months;
  if (monthlyPayment <= zeroRatePayment) return 0;

  let low = 0;
  let high = 1;
  for (let i = 0; i < 80; i += 1) {
    const mid = (low + high) / 2;
    const estPayment =
      (netProceeds * (mid * Math.pow(1 + mid, months))) / (Math.pow(1 + mid, months) - 1);
    if (estPayment > monthlyPayment) high = mid;
    else low = mid;
  }
  return ((low + high) / 2) * 12 * 100;
}

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

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export default function LoanClient() {
  const pathname = usePathname();
  const routePath = pathname || "/loan";
  const startedRef = useRef(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [amount, setAmount] = useState("50000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("5");
  const [startMonth, setStartMonth] = useState(String(new Date().getMonth() + 1));
  const [startYear, setStartYear] = useState(String(new Date().getFullYear()));
  const [extraMonthlyPayment, setExtraMonthlyPayment] = useState("0");
  const [extraAnnualPayment, setExtraAnnualPayment] = useState("0");
  const [oneTimeExtraPayment, setOneTimeExtraPayment] = useState("0");
  const [oneTimeExtraMonth, setOneTimeExtraMonth] = useState("12");
  const [feeAmount, setFeeAmount] = useState("0");
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [scheduleMode, setScheduleMode] = useState<"baseline" | "extra" | "biweekly">("extra");
  const [showResults, setShowResults] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const faqs = (LOAN_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedAmount = Number(amount) || 0;
  const parsedRate = Number(rate) || 0;
  const parsedYears = Number(years) || 0;
  const parsedStartMonth = Number(startMonth) || new Date().getMonth() + 1;
  const parsedStartYear = Number(startYear) || new Date().getFullYear();

  const result = (() => {
    if (!showResults || parsedAmount <= 0 || parsedYears <= 0 || parsedRate < 0) return null;
    return calculateLoan(parsedAmount, parsedRate, parsedYears, parsedStartMonth, parsedStartYear);
  })();

  const interestRatio = result && result.totalPayment > 0 ? (result.totalInterest / result.totalPayment) * 100 : 0;
  const fallbackPayoffDate = getEstimatedPayoffDate(parsedStartMonth, parsedStartYear, Math.max(parsedYears, 1));
  const payoffDate = result ? result.payoffDate : fallbackPayoffDate;
  const monthlyExtraValue = Math.max(0, Number(extraMonthlyPayment) || 0);
  const annualExtraValue = Math.max(0, Number(extraAnnualPayment) || 0);
  const oneTimeExtraValue = Math.max(0, Number(oneTimeExtraPayment) || 0);
  const oneTimeExtraMonthValue = Math.max(1, Number(oneTimeExtraMonth) || 1);
  const feeAmountValue = Math.max(0, Number(feeAmount) || 0);

  const amortizationPreview = result ? result.amortization.slice(0, 12) : [];

  const baselineDetailed =
    result && parsedAmount > 0 && parsedYears > 0
      ? buildDetailedLoanPlan({
          amount: parsedAmount,
          annualRate: parsedRate,
          years: parsedYears,
          startMonth: Math.min(12, Math.max(1, parsedStartMonth)),
          startYear: Math.max(2000, parsedStartYear),
          monthlyExtra: 0,
          annualExtra: 0,
          oneTimeExtra: 0,
          oneTimeMonth: 1,
          biweeklyMode: false,
        })
      : null;
  const optimizedDetailed =
    result && parsedAmount > 0 && parsedYears > 0
      ? buildDetailedLoanPlan({
          amount: parsedAmount,
          annualRate: parsedRate,
          years: parsedYears,
          startMonth: Math.min(12, Math.max(1, parsedStartMonth)),
          startYear: Math.max(2000, parsedStartYear),
          monthlyExtra: monthlyExtraValue,
          annualExtra: annualExtraValue,
          oneTimeExtra: oneTimeExtraValue,
          oneTimeMonth: oneTimeExtraMonthValue,
          biweeklyMode: false,
        })
      : null;
  const biweeklyDetailed =
    result && parsedAmount > 0 && parsedYears > 0
      ? buildDetailedLoanPlan({
          amount: parsedAmount,
          annualRate: parsedRate,
          years: parsedYears,
          startMonth: Math.min(12, Math.max(1, parsedStartMonth)),
          startYear: Math.max(2000, parsedStartYear),
          monthlyExtra: monthlyExtraValue,
          annualExtra: annualExtraValue,
          oneTimeExtra: oneTimeExtraValue,
          oneTimeMonth: oneTimeExtraMonthValue,
          biweeklyMode: true,
        })
      : null;

  const interestSavedByExtras =
    baselineDetailed && optimizedDetailed ? baselineDetailed.totalInterest - optimizedDetailed.totalInterest : 0;
  const monthsSavedByExtras =
    baselineDetailed && optimizedDetailed ? baselineDetailed.monthsToPayoff - optimizedDetailed.monthsToPayoff : 0;
  const monthsSavedByBiweekly =
    baselineDetailed && biweeklyDetailed ? baselineDetailed.monthsToPayoff - biweeklyDetailed.monthsToPayoff : 0;
  const biweeklyInterestSaved =
    baselineDetailed && biweeklyDetailed ? baselineDetailed.totalInterest - biweeklyDetailed.totalInterest : 0;
  const feeAwareApr =
    baselineDetailed && result
      ? calculateFeeAwareApr(
          parsedAmount,
          feeAmountValue,
          baselineDetailed.baseMonthlyPayment,
          Math.max(1, Math.round(parsedYears * 12))
        )
      : 0;
  const aprDelta = feeAwareApr - parsedRate;

  const scheduleByMode = {
    baseline: baselineDetailed,
    extra: optimizedDetailed,
    biweekly: biweeklyDetailed,
  } as const;
  const activeSchedule = scheduleByMode[scheduleMode];
  const visibleScheduleRows = activeSchedule
    ? showFullSchedule
      ? activeSchedule.rows
      : activeSchedule.rows.slice(0, 24)
    : [];
  const needsScheduleToggle = Boolean(activeSchedule && activeSchedule.rows.length > 24);

  function escapeCsvCell(value: string | number) {
    const raw = String(value);
    if (/[",\n]/.test(raw)) {
      return `"${raw.replace(/"/g, "\"\"")}"`;
    }
    return raw;
  }

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendGaEvent("calculator_start", { calculator_id: "loan", route: routePath });
  }

  function runCalculation() {
    trackStart();
    setShowResults(true);
    sendGaEvent("calculator_complete", {
      calculator_id: "loan",
      route: routePath,
      amount: Math.round(parsedAmount),
      apr: parsedRate,
      years: parsedYears,
    });
  }

  function handleExportAmortizationCsv() {
    if (!activeSchedule) return;
    const header = [
      "Month",
      "Period",
      "Payment",
      "Principal",
      "Interest",
      "Extra Payment",
      "Ending Balance",
      "Cumulative Interest",
    ];
    const lines = activeSchedule.rows.map((row) =>
      [
        row.month,
        row.periodLabel,
        row.payment,
        row.principal,
        row.interest,
        row.extraPayment,
        row.balance,
        row.cumulativeInterest,
      ]
        .map(escapeCsvCell)
        .join(",")
    );
    const csv = [header.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `loan-${scheduleMode}-amortization.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    sendGaEvent("cta_click", { calculator_id: "loan", route: routePath, cta: "export_csv" });
  }

  const scenarioRows = (() => {
    const baseAmount = Math.max(parsedAmount, 1);
    const baseRate = Math.max(parsedRate, 0);
    const baseYears = Math.max(parsedYears, 1);
    const baseline = calculateLoan(baseAmount, baseRate, baseYears, parsedStartMonth, parsedStartYear);
    const conservative = calculateLoan(baseAmount, baseRate + 1.0, baseYears, parsedStartMonth, parsedStartYear);
    const aggressive = calculateLoan(baseAmount, Math.max(0, baseRate - 1.0), Math.max(1, baseYears - 1), parsedStartMonth, parsedStartYear);
    return [
      {
        name: "Baseline",
        inputs: `${formatCurrency(baseAmount)} / ${baseRate.toFixed(2)}% / ${baseYears}y`,
        monthly: baseline.monthlyPayment,
        totalInterest: baseline.totalInterest,
        delta: 0,
        note: "Reference case",
      },
      {
        name: "Conservative",
        inputs: `${formatCurrency(baseAmount)} / ${(baseRate + 1.0).toFixed(2)}% / ${baseYears}y`,
        monthly: conservative.monthlyPayment,
        totalInterest: conservative.totalInterest,
        delta: conservative.monthlyPayment - baseline.monthlyPayment,
        note: "Higher-rate stress case",
      },
      {
        name: "Aggressive",
        inputs: `${formatCurrency(baseAmount)} / ${Math.max(0, baseRate - 1.0).toFixed(2)}% / ${Math.max(1, baseYears - 1)}y`,
        monthly: aggressive.monthlyPayment,
        totalInterest: aggressive.totalInterest,
        delta: aggressive.monthlyPayment - baseline.monthlyPayment,
        note: "Lower-rate + faster payoff",
      },
    ];
  })();

  function handleResetInputs() {
    setAdvancedMode(false);
    setAmount("50000");
    setRate("6.5");
    setYears("5");
    setStartMonth(String(new Date().getMonth() + 1));
    setStartYear(String(new Date().getFullYear()));
    setExtraMonthlyPayment("0");
    setExtraAnnualPayment("0");
    setOneTimeExtraPayment("0");
    setOneTimeExtraMonth("12");
    setFeeAmount("0");
    setShowFullSchedule(false);
    setScheduleMode("extra");
    setShowResults(false);
    setCopyState("idle");
  }

  async function handleCopyResult() {
    if (!result) return;
    const summary = [
      `Loan monthly payment: ${formatCurrency(result.monthlyPayment)} /mo`,
      `Total interest: ${formatCurrency(result.totalInterest)}`,
      `Total payment: ${formatCurrency(result.totalPayment)}`,
      `APR: ${parsedRate.toFixed(2)}%`,
      `Fee-aware APR: ${feeAwareApr.toFixed(3)}%`,
      `Term: ${parsedYears} years`,
      `Estimated payoff (baseline): ${payoffDate}`,
      `Optimized payoff (with extras): ${optimizedDetailed?.payoffLabel ?? payoffDate}`,
      `Biweekly payoff estimate: ${biweeklyDetailed?.payoffLabel ?? payoffDate}`,
      `Interest saved (extras): ${formatCurrency(Math.max(0, interestSavedByExtras))}`,
      `Interest saved (biweekly): ${formatCurrency(Math.max(0, biweeklyInterestSaved))}`,
      "Source: https://mysmartcalculators.com/loan",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
      sendGaEvent("cta_click", { calculator_id: "loan", route: routePath, cta: "copy_result" });
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Banknote className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Loan Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by CFPB Lending Rules + Federal Reserve Credit Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Loan Amount</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">APR (%)</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={rate}
                    onChange={(e) => setRate(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Loan Term (Years)</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={years}
                      onChange={(e) => setYears(e.target.value.replace(/[^0-9.]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setYears("3")}
                      className="h-9 px-3 border border-slate-300 rounded-md bg-slate-50 text-xs font-semibold"
                    >
                      3Y
                    </button>
                    <button
                      type="button"
                      onClick={() => setYears("5")}
                      className="h-9 px-3 border border-slate-300 rounded-md bg-slate-50 text-xs font-semibold"
                    >
                      5Y
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Loan Start Date</label>
                  <div className="flex flex-row items-center gap-2">
                    <select
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      {MONTH_NAMES.map((month, idx) => (
                        <option key={month} value={idx + 1}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      placeholder="2026"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setAdvancedMode((prev) => !prev)}
                    className="text-xs px-2 py-1 rounded border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    {advancedMode ? "Hide Debt Optimization Inputs" : "Show Debt Optimization Inputs (v2)"}
                  </button>
                  {advancedMode && (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-700">Extra Principal (Monthly / Annual)</label>
                        <div className="flex flex-row items-center gap-2">
                          <div className="relative w-full">
                            <input
                              type="text"
                              inputMode="decimal"
                              value={extraMonthlyPayment}
                              onChange={(e) => setExtraMonthlyPayment(e.target.value.replace(/[^0-9.]/g, ""))}
                              className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">$ /mo</span>
                          </div>
                          <div className="relative w-full">
                            <input
                              type="text"
                              inputMode="decimal"
                              value={extraAnnualPayment}
                              onChange={(e) => setExtraAnnualPayment(e.target.value.replace(/[^0-9.]/g, ""))}
                              className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">$ /yr</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-700">One-Time Extra Principal</label>
                        <div className="flex flex-row items-center gap-2">
                          <div className="relative w-full">
                            <input
                              type="text"
                              inputMode="decimal"
                              value={oneTimeExtraPayment}
                              onChange={(e) => setOneTimeExtraPayment(e.target.value.replace(/[^0-9.]/g, ""))}
                              className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">$ once</span>
                          </div>
                          <div className="relative w-full">
                            <input
                              type="text"
                              inputMode="numeric"
                              value={oneTimeExtraMonth}
                              onChange={(e) => setOneTimeExtraMonth(e.target.value.replace(/[^0-9]/g, ""))}
                              className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">Month #</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-700">Origination / Processing Fees</label>
                        <div className="relative w-full">
                          <input
                            type="text"
                            inputMode="decimal"
                            value={feeAmount}
                            onChange={(e) => setFeeAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                            className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                          />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">$ total fees</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={runCalculation}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Loan
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleResetInputs}
                    className="h-9 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50"
                  >
                    Reset Inputs
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      void handleCopyResult();
                    }}
                    className="h-9 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100"
                  >
                    {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy Failed" : "Copy Result"}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Formula</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Payment uses the standard amortization equation with monthly compounding. Total interest rises with higher APR and longer term.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Loan.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Monthly Payment</div>
                    <div className="text-2xl font-black">{formatCurrency(result.monthlyPayment)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Total Interest</div>
                    <div className="text-2xl font-black">{formatCurrency(result.totalInterest)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Total Payment</div>
                    <div className="text-2xl font-black">{formatCurrency(result.totalPayment)}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Loan Snapshot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">APR</div>
                  <div className="font-bold text-slate-800">{parsedRate.toFixed(2)}%</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Term</div>
                  <div className="font-bold text-slate-800">{parsedYears} years</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Interest Share</div>
                  <div className="font-bold text-slate-800">{interestRatio.toFixed(1)}%</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Payoff</div>
                  <div className="font-bold text-slate-800">{payoffDate}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">
                Debt Optimization Engine (v2)
              </h3>
              {!result || !baselineDetailed || !optimizedDetailed || !biweeklyDetailed ? (
                <p className="text-sm text-slate-500">Calculate first to run debt optimization comparisons.</p>
              ) : (
                <>
                  <div className="grid md:grid-cols-3 gap-2 text-sm">
                    <div className="p-3 rounded-md border border-slate-200 bg-slate-50">
                      <div className="text-[10px] text-slate-500 uppercase">Baseline</div>
                      <div className="font-bold text-slate-900">{baselineDetailed.payoffLabel}</div>
                      <div className="text-xs text-slate-700">
                        Interest: {formatCurrency(baselineDetailed.totalInterest)}
                      </div>
                      <div className="text-xs text-slate-700">
                        Total paid: {formatCurrency(baselineDetailed.totalPayment)}
                      </div>
                    </div>
                    <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50">
                      <div className="text-[10px] text-emerald-700 uppercase">With Extra Payments</div>
                      <div className="font-bold text-emerald-800">{optimizedDetailed.payoffLabel}</div>
                      <div className="text-xs text-emerald-700">
                        Interest saved: {formatCurrency(Math.max(0, interestSavedByExtras))}
                      </div>
                      <div className="text-xs text-emerald-700">
                        Months saved: {Math.max(0, monthsSavedByExtras)}
                      </div>
                    </div>
                    <div className="p-3 rounded-md border border-blue-200 bg-blue-50">
                      <div className="text-[10px] text-blue-700 uppercase">Biweekly Equivalent</div>
                      <div className="font-bold text-blue-900">{biweeklyDetailed.payoffLabel}</div>
                      <div className="text-xs text-blue-700">
                        Interest saved: {formatCurrency(Math.max(0, biweeklyInterestSaved))}
                      </div>
                      <div className="text-xs text-blue-700">
                        Months saved: {Math.max(0, monthsSavedByBiweekly)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 grid md:grid-cols-3 gap-2 text-sm">
                    <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                      <div className="text-[10px] text-slate-500 uppercase">Nominal APR</div>
                      <div className="font-bold text-slate-900">{parsedRate.toFixed(3)}%</div>
                    </div>
                    <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                      <div className="text-[10px] text-slate-500 uppercase">Fee-Aware APR</div>
                      <div className="font-bold text-slate-900">{feeAwareApr.toFixed(3)}%</div>
                    </div>
                    <div
                      className={`p-2 rounded-md border ${
                        aprDelta > 0.01
                          ? "border-amber-200 bg-amber-50 text-amber-800"
                          : "border-emerald-200 bg-emerald-50 text-emerald-800"
                      }`}
                    >
                      <div className="text-[10px] uppercase">APR Delta from Fees</div>
                      <div className="font-bold">{aprDelta >= 0 ? "+" : ""}{aprDelta.toFixed(3)}%</div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Metric</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Meaning</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Monthly payment</td>
                      <td className="py-1.5 px-2 text-slate-700">Required installment</td>
                      <td className="py-1.5 px-2 text-slate-700">Match to budget</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Total interest</td>
                      <td className="py-1.5 px-2 text-slate-700">Cost of borrowing</td>
                      <td className="py-1.5 px-2 text-slate-700">Compare lenders</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Payoff date</td>
                      <td className="py-1.5 px-2 text-slate-700">Debt-free month</td>
                      <td className="py-1.5 px-2 text-slate-700">Plan cash flow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Scenario Delta Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Scenario</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Inputs</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Monthly</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Delta vs Baseline</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Decision Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {scenarioRows.map((row) => (
                      <tr key={row.name} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700 font-semibold">{row.name}</td>
                        <td className="py-1.5 px-2 text-slate-700">{row.inputs}</td>
                        <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.monthly)}</td>
                        <td className={`py-1.5 px-2 ${row.delta > 0 ? "text-rose-700" : row.delta < 0 ? "text-emerald-700" : "text-slate-700"}`}>
                          {row.delta > 0 ? "+" : ""}{formatCurrency(row.delta)}
                        </td>
                        <td className="py-1.5 px-2 text-slate-700">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Amortization Preview (First 12 Months)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Month</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Principal</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Interest</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {amortizationPreview.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-3 px-2 text-slate-500">
                          Calculate first to load the amortization preview.
                        </td>
                      </tr>
                    ) : (
                      amortizationPreview.map((row) => (
                        <tr key={row.period} className="even:bg-slate-50">
                          <td className="py-1.5 px-2 text-slate-700">{row.period}</td>
                          <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.principal)}</td>
                          <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.interest)}</td>
                          <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.remainingBalance)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                  Full Amortization Schedule (v2)
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setScheduleMode("baseline")}
                    className={`h-8 px-2 rounded border text-xs font-semibold ${
                      scheduleMode === "baseline"
                        ? "border-slate-800 bg-slate-800 text-white"
                        : "border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    Baseline
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleMode("extra")}
                    className={`h-8 px-2 rounded border text-xs font-semibold ${
                      scheduleMode === "extra"
                        ? "border-emerald-700 bg-emerald-700 text-white"
                        : "border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    Extra Plan
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleMode("biweekly")}
                    className={`h-8 px-2 rounded border text-xs font-semibold ${
                      scheduleMode === "biweekly"
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    Biweekly
                  </button>
                  <button
                    type="button"
                    onClick={handleExportAmortizationCsv}
                    className="h-8 px-2 rounded border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100"
                    disabled={!activeSchedule}
                  >
                    Export CSV
                  </button>
                </div>
              </div>
              {!activeSchedule ? (
                <p className="text-sm text-slate-500">Calculate first to load the full amortization schedule.</p>
              ) : (
                <>
                  <p className="text-xs text-slate-600 mb-3">
                    Current view: {scheduleMode} plan, payoff {activeSchedule.payoffLabel}, total interest{" "}
                    {formatCurrency(activeSchedule.totalInterest)}.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead className="bg-slate-100 border-b border-slate-300">
                        <tr>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Month</th>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Period</th>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Payment</th>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Principal</th>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Interest</th>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Extra</th>
                          <th className="text-left py-1.5 px-2 text-xs text-slate-700">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {visibleScheduleRows.map((row) => (
                          <tr key={`${scheduleMode}-${row.month}`} className="even:bg-slate-50">
                            <td className="py-1.5 px-2 text-slate-700">{row.month}</td>
                            <td className="py-1.5 px-2 text-slate-700">{row.periodLabel}</td>
                            <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.payment)}</td>
                            <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.principal)}</td>
                            <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.interest)}</td>
                            <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.extraPayment)}</td>
                            <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {needsScheduleToggle && (
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => setShowFullSchedule((prev) => !prev)}
                        className="h-8 px-3 rounded border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50"
                      >
                        {showFullSchedule
                          ? "Show First 24 Months"
                          : `Show Full Schedule (${activeSchedule.rows.length} months)`}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Intent and Decision Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Use this calculator to compare lender offers before you sign. Even a small APR difference can materially
            change monthly burden and long-run borrowing cost.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5 mt-3">
            <li>Prioritize monthly payment fit first, then optimize total interest.</li>
            <li>Stress test with APR +1.0% to avoid over-borrowing under optimistic assumptions.</li>
            <li>If the payoff month is too far out, shorten term or increase principal reduction plan.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Edge and Stress Test Cases</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Case</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Input Pattern</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Watchpoint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Low-rate base</td>
                  <td className="py-1.5 px-2 text-slate-700">$30,000 / 3.5% / 3y</td>
                  <td className="py-1.5 px-2 text-slate-700">Fast principal decline, low interest share</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">High-rate stress</td>
                  <td className="py-1.5 px-2 text-slate-700">$50,000 / 12.0% / 7y</td>
                  <td className="py-1.5 px-2 text-slate-700">Interest-heavy structure and payoff delay risk</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Zero-rate edge</td>
                  <td className="py-1.5 px-2 text-slate-700">$20,000 / 0.0% / 5y</td>
                  <td className="py-1.5 px-2 text-slate-700">Monthly = principal only; validate fee assumptions separately</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Assumptions and Limits</h3>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>Model uses fixed-rate amortization with monthly compounding.</li>
            <li>APR is treated as nominal annual rate converted to monthly rate.</li>
            <li>Fees, penalties, and taxes are not embedded unless reflected in APR input.</li>
            <li>Rounding may create small differences vs lender statement-level ledgers.</li>
            <li>Variable-rate and balloon structures require dedicated loan documents for final validation.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Sources and Review</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Source</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {LOAN_2026.citations.map((cite) => (
                  <tr key={cite.name} className="even:bg-slate-50">
                    <td className="py-1.5 px-2 text-slate-700">{cite.name}</td>
                    <td className="py-1.5 px-2 text-slate-700 break-all">
                      <a
                        href={cite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
                      >
                        {cite.url}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-sm text-slate-700 space-y-1">
            <p>Reviewer: Sam Park (Calculator QA and Content Operations).</p>
            <p>Last reviewed: 2026-03-21 (Asia/Seoul).</p>
          </div>
          <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900 mb-1">Update Log</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>2026-03-21: Added loan-specific metadata parity and WebPage dateModified alignment.</li>
              <li>2026-03-21: Added start-date payoff model, scenario table, amortization preview, and related tools network.</li>
              <li>2026-03-21: Applied debt engine v2 (full schedule, CSV export, extra payment, biweekly, fee-aware APR).</li>
            </ul>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Who / How / Why</h3>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <span className="font-semibold text-slate-900">Who:</span> Internal calculator standard review based on
              CFPB and Federal Reserve consumer lending guidance.
            </li>
            <li>
              <span className="font-semibold text-slate-900">How:</span> Monthly payment is computed via amortization,
              then decomposed into principal and interest across the schedule.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Why:</span> Help users compare offers, avoid overpaying
              interest, and choose a term that matches cash-flow constraints.
            </li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Disclaimer</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            This is an educational estimate, not a binding lender quote. Final payment obligations depend on your signed
            loan agreement, fee schedule, and servicing rules. Confirm final numbers against official Truth in Lending
            disclosures before committing.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Related Loan Tools</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage">
              Mortgage Calculator
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/dti">
              DTI Calculator
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/student-loan">
              Student Loan
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/self-employment">
              Self-Employment Tax
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/salary">
              Salary Calculator
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/tax">
              Tax Calculator
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Need a Tailored Loan Scenario?</h3>
          <p className="text-sm text-slate-700 mb-3">
            If you want a dedicated module for a specific loan type, send your case and we will include it in the next update cycle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Contact Team
          </Link>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Loan FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
