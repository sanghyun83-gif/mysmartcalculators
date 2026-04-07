"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Home, ShieldCheck } from "lucide-react";
import { calculateAffordability, formatCurrency, formatPercent, HOUSING_CONSTANTS } from "@/lib/calculators/home-afford";
import { calculateLoan } from "@/lib/calculators/loan";
import { sendGaEvent } from "@/lib/analytics/ga";

type FAQItem = { question: string; answer: string };

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

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

const FAQS: FAQItem[] = [
  {
    question: "How much house can I afford?",
    answer:
      "This model estimates affordable home price from income, debts, down payment, APR, and monthly ownership costs.",
  },
  {
    question: "What does 28/36 mean?",
    answer:
      "It is a planning benchmark where housing is near 28% of gross income and total debt near 36%.",
  },
  {
    question: "Why does APR change affordability quickly?",
    answer:
      "Payment sensitivity is high, so even modest rate shifts can materially alter maximum affordable price.",
  },
  {
    question: "Is this lender approval?",
    answer:
      "No. It is a planning estimate. Final underwriting depends on credit profile, reserves, and lender policy.",
  },
  {
    question: "Should I target the absolute max?",
    answer:
      "In most cases, a conservative target produces safer monthly cash flow and lower stress under market volatility.",
  },
];

const SOURCES = [
  { name: "FHFA conforming loan limits", url: "https://www.fhfa.gov/data/conforming-loan-limit" },
  { name: "CFPB homebuying guidance", url: "https://www.consumerfinance.gov/owning-a-home/" },
  { name: "HUD FHA loan limits", url: "https://www.hud.gov/program_offices/housing/sfh/lender/origination/mortgage_limits" },
] as const;

function clean(v: string) {
  return v.replace(/[^0-9.]/g, "");
}

function safeMonthYear(month: number, year: number) {
  return {
    month: Math.min(Math.max(Math.round(month), 1), 12),
    year: Math.max(Math.round(year), 2000),
  };
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

  const monthlyRate = annualRate / 100 / 12;
  const n = Math.max(1, Math.round(years * 12));
  const base = calculateLoan(amount, annualRate, years, startMonth, startYear);
  const baseMonthlyPayment = Math.round(base.monthlyPayment);
  const biweeklyEquivalentExtra = biweeklyMode ? baseMonthlyPayment / 12 : 0;

  let balance = amount;
  let month = 0;
  let totalPayment = 0;
  let totalInterest = 0;
  const rows: DetailedLoanRow[] = [];

  while (balance > 0.01 && month < n + 600) {
    month += 1;
    const interest = monthlyRate > 0 ? balance * monthlyRate : 0;
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

  const payoffLabel = rows.length > 0 ? rows[rows.length - 1].periodLabel : base.payoffDate;
  return {
    rows,
    monthsToPayoff: rows.length,
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    payoffLabel,
    baseMonthlyPayment,
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

function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {faqs.map((faq) => (
        <details key={faq.question} className="group bg-white border border-slate-200 rounded-md hover:border-slate-300">
          <summary className="list-none p-3 flex items-center justify-between cursor-pointer [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-slate-800">{faq.question}</h3>
            <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
          </summary>
          <div className="p-3 pt-1 border-t border-slate-100 text-sm leading-relaxed text-slate-600">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}

export default function HomeAffordClient() {
  const d = HOUSING_CONSTANTS.defaults;
  const startedRef = useRef(false);
  const adRequestedRef = useRef(false);

  const [income, setIncome] = useState(String(d.annualIncome));
  const [debts, setDebts] = useState(String(d.monthlyDebts));
  const [down, setDown] = useState(String(d.downPaymentPercent));
  const [rate, setRate] = useState(String(d.interestRate));
  const [term, setTerm] = useState(String(d.loanTerm));
  const [tax, setTax] = useState(String(d.propertyTax));
  const [ins, setIns] = useState(String(d.homeInsurance));
  const [hoa, setHoa] = useState(String(d.hoaFees));
  const [startMonth, setStartMonth] = useState(String(new Date().getMonth() + 1));
  const [startYear, setStartYear] = useState(String(new Date().getFullYear()));
  const [extraMonthly, setExtraMonthly] = useState("0");
  const [extraAnnual, setExtraAnnual] = useState("0");
  const [oneTimeExtra, setOneTimeExtra] = useState("0");
  const [oneTimeMonth, setOneTimeMonth] = useState("12");
  const [feeAmount, setFeeAmount] = useState("0");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [scheduleMode, setScheduleMode] = useState<"baseline" | "extra" | "biweekly">("extra");
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [show, setShow] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const nIncome = Math.max(0, Number(income) || 0);
  const nDebts = Math.max(0, Number(debts) || 0);
  const nDown = Number(down) || d.downPaymentPercent;
  const nRate = Number(rate) || d.interestRate;
  const nTerm = Math.max(5, Math.min(40, Math.round(Number(term) || d.loanTerm)));
  const nTax = Number(tax) || d.propertyTax;
  const nIns = Number(ins) || d.homeInsurance;
  const nHoa = Math.max(0, Number(hoa) || 0);
  const nExtraMonthly = Math.max(0, Number(extraMonthly) || 0);
  const nExtraAnnual = Math.max(0, Number(extraAnnual) || 0);
  const nOneTimeExtra = Math.max(0, Number(oneTimeExtra) || 0);
  const nOneTimeMonth = Math.max(1, Number(oneTimeMonth) || 1);
  const nFees = Math.max(0, Number(feeAmount) || 0);
  const safeDate = safeMonthYear(Number(startMonth) || new Date().getMonth() + 1, Number(startYear) || new Date().getFullYear());

  const baselineScenario = calculateAffordability(Math.max(1, nIncome), nDebts, nDown, nRate, nTerm, nTax, nIns, nHoa, 28);
  const conservativeScenario = calculateAffordability(Math.max(1, nIncome), nDebts + 300, Math.max(0, nDown - 3), nRate + 0.75, nTerm, nTax, nIns, nHoa, 28);
  const optimisticScenario = calculateAffordability(Math.max(1, nIncome), Math.max(0, nDebts - 250), Math.min(95, nDown + 5), Math.max(0, nRate - 0.75), nTerm, nTax, nIns, nHoa, 28);

  const result = useMemo(() => {
    if (!show || nIncome <= 0) return null;
    return calculateAffordability(nIncome, nDebts, nDown, nRate, nTerm, nTax, nIns, nHoa, 28);
  }, [show, nIncome, nDebts, nDown, nRate, nTerm, nTax, nIns, nHoa]);

  const debtEngineAmount = result?.maxLoanAmount ?? baselineScenario.maxLoanAmount;
  const baselineDetailed = buildDetailedLoanPlan({
    amount: Math.max(1, debtEngineAmount),
    annualRate: nRate,
    years: nTerm,
    startMonth: safeDate.month,
    startYear: safeDate.year,
    monthlyExtra: 0,
    annualExtra: 0,
    oneTimeExtra: 0,
    oneTimeMonth: 1,
    biweeklyMode: false,
  });
  const optimizedDetailed = buildDetailedLoanPlan({
    amount: Math.max(1, debtEngineAmount),
    annualRate: nRate,
    years: nTerm,
    startMonth: safeDate.month,
    startYear: safeDate.year,
    monthlyExtra: nExtraMonthly,
    annualExtra: nExtraAnnual,
    oneTimeExtra: nOneTimeExtra,
    oneTimeMonth: nOneTimeMonth,
    biweeklyMode: false,
  });
  const biweeklyDetailed = buildDetailedLoanPlan({
    amount: Math.max(1, debtEngineAmount),
    annualRate: nRate,
    years: nTerm,
    startMonth: safeDate.month,
    startYear: safeDate.year,
    monthlyExtra: nExtraMonthly,
    annualExtra: nExtraAnnual,
    oneTimeExtra: nOneTimeExtra,
    oneTimeMonth: nOneTimeMonth,
    biweeklyMode: true,
  });

  const interestSavedByExtras = Math.max(0, baselineDetailed.totalInterest - optimizedDetailed.totalInterest);
  const monthsSavedByExtras = Math.max(0, baselineDetailed.monthsToPayoff - optimizedDetailed.monthsToPayoff);
  const interestSavedByBiweekly = Math.max(0, baselineDetailed.totalInterest - biweeklyDetailed.totalInterest);
  const monthsSavedByBiweekly = Math.max(0, baselineDetailed.monthsToPayoff - biweeklyDetailed.monthsToPayoff);
  const feeAwareApr = calculateFeeAwareApr(Math.max(1, debtEngineAmount), nFees, baselineDetailed.baseMonthlyPayment, Math.max(1, nTerm * 12));

  const rateSensitivity = [5.5, 6, 6.5, 7, 7.5, 8].map((stressRate) => ({
    rate: stressRate,
    afford: calculateAffordability(Math.max(1, nIncome), nDebts, nDown, stressRate, nTerm, nTax, nIns, nHoa, 28).maxHomePrice,
  }));

  const schedules = { baseline: baselineDetailed, extra: optimizedDetailed, biweekly: biweeklyDetailed } as const;
  const activeSchedule = schedules[scheduleMode];
  const visibleRows = showFullSchedule ? activeSchedule.rows : activeSchedule.rows.slice(0, 24);

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendGaEvent("calculator_start", { calculator_id: "home-afford", route: "/home-afford" });
  }

  function handleCalculate() {
    trackStart();
    setShow(true);
    setHasCalculated(true);
    sendGaEvent("calculator_complete", {
      calculator_id: "home-afford",
      route: "/home-afford",
      affordable_home_price: baselineScenario.maxHomePrice,
    });
  }

  useEffect(() => {
    if (!hasCalculated || adRequestedRef.current) return;
    if (typeof window === "undefined") return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      adRequestedRef.current = true;
    } catch {
      // AdSense not ready or blocked.
    }
  }, [hasCalculated]);

  function resetInputs() {
    setIncome(String(d.annualIncome));
    setDebts(String(d.monthlyDebts));
    setDown(String(d.downPaymentPercent));
    setRate(String(d.interestRate));
    setTerm(String(d.loanTerm));
    setTax(String(d.propertyTax));
    setIns(String(d.homeInsurance));
    setHoa(String(d.hoaFees));
    setStartMonth(String(new Date().getMonth() + 1));
    setStartYear(String(new Date().getFullYear()));
    setExtraMonthly("0");
    setExtraAnnual("0");
    setOneTimeExtra("0");
    setOneTimeMonth("12");
    setFeeAmount("0");
    setShowAdvanced(false);
    setShowFullSchedule(false);
    setScheduleMode("extra");
    setShow(false);
    setHasCalculated(false);
    adRequestedRef.current = false;
    setCopyState("idle");
  }

  async function copySummary() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(
        `Affordable home price: ${formatCurrency(result.maxHomePrice)}\nMonthly housing payment: ${formatCurrency(result.monthlyPayment)}\nBack-end DTI: ${formatPercent(result.backEndDTI)}\nFee-aware APR: ${feeAwareApr.toFixed(3)}%\nSource: https://mysmartcalculators.com/home-afford`
      );
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("failed");
    }
  }

  function exportCsv() {
    const header = ["Month", "Period", "Payment", "Principal", "Interest", "Extra", "Balance", "Cumulative Interest"];
    const rows = activeSchedule.rows.map((r) => [r.month, r.periodLabel, r.payment, r.principal, r.interest, r.extraPayment, r.balance, r.cumulativeInterest].join(","));
    const csv = [header.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `home-afford-${scheduleMode}-amortization.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Home className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold">Home Affordability Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by FHFA + CFPB 2026 guidance
        </div>
      </header>

      <section className="py-2 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-md shadow-sm p-4 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-tight">Affordability Inputs</h2>
          <input onFocus={trackStart} value={income} onChange={(e) => setIncome(clean(e.target.value))} className="w-full h-9 px-2 border border-slate-300 rounded-md" placeholder="Annual income" />
          <input onFocus={trackStart} value={debts} onChange={(e) => setDebts(clean(e.target.value))} className="w-full h-9 px-2 border border-slate-300 rounded-md" placeholder="Monthly debts" />
          <div className="grid grid-cols-2 gap-2">
            <input onFocus={trackStart} value={down} onChange={(e) => setDown(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Down %" />
            <input onFocus={trackStart} value={rate} onChange={(e) => setRate(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="APR %" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input onFocus={trackStart} value={term} onChange={(e) => setTerm(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Years" />
            <input onFocus={trackStart} value={tax} onChange={(e) => setTax(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Tax %" />
            <input onFocus={trackStart} value={ins} onChange={(e) => setIns(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Ins %" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input onFocus={trackStart} value={hoa} onChange={(e) => setHoa(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="HOA/mo" />
            <select onFocus={trackStart} value={startMonth} onChange={(e) => setStartMonth(e.target.value)} className="h-9 px-2 border border-slate-300 rounded-md">
              {MONTH_NAMES.map((month, idx) => <option key={month} value={idx + 1}>{month}</option>)}
            </select>
            <input onFocus={trackStart} value={startYear} onChange={(e) => setStartYear(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Year" />
          </div>
          <button type="button" onClick={() => setShowAdvanced((p) => !p)} className="text-xs px-2 py-1 rounded border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700">
            {showAdvanced ? "Hide Debt Optimization Inputs" : "Show Debt Optimization Inputs (v2)"}
          </button>
          {showAdvanced && (
            <div className="grid grid-cols-2 gap-2">
              <input value={extraMonthly} onChange={(e) => setExtraMonthly(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Extra monthly" />
              <input value={extraAnnual} onChange={(e) => setExtraAnnual(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="Extra annual" />
              <input value={oneTimeExtra} onChange={(e) => setOneTimeExtra(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="One-time extra" />
              <input value={oneTimeMonth} onChange={(e) => setOneTimeMonth(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md" placeholder="One-time month #" />
              <input value={feeAmount} onChange={(e) => setFeeAmount(clean(e.target.value))} className="h-9 px-2 border border-slate-300 rounded-md col-span-2" placeholder="Fees for fee-aware APR" />
            </div>
          )}
          <button onClick={handleCalculate} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm">Calculate Affordability</button>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={resetInputs} className="h-9 rounded-md border border-slate-300 bg-white text-sm font-semibold">Reset Inputs</button>
            <button onClick={() => { void copySummary(); }} className="h-9 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold">
              {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy Failed" : "Copy Result"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
            <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Affordability Result</h3>
            {!result ? (
              <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">Enter values and click Calculate Affordability.</div>
            ) : (
              <div className="grid md:grid-cols-3 gap-2 text-sm">
                <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase">Affordable Home Price</div><div className="text-2xl font-black text-emerald-900">{formatCurrency(result.maxHomePrice)}</div></div>
                <div className="p-3 rounded-md border border-slate-200 bg-slate-50"><div className="text-[10px] uppercase">Monthly Payment</div><div className="text-2xl font-black">{formatCurrency(result.monthlyPayment)}</div></div>
                <div className={`p-3 rounded-md border ${result.backEndDTI <= 36 ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-amber-200 bg-amber-50 text-amber-900"}`}><div className="text-[10px] uppercase">Back-End DTI</div><div className="text-2xl font-black">{formatPercent(result.backEndDTI)}</div></div>
              </div>
            )}
          </div>

          {hasCalculated && (
            <section className="rounded-md border border-slate-200 bg-white p-3" aria-label="Sponsored">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Sponsored</p>
              <ins
                className="adsbygoogle block min-h-[90px] w-full"
                style={{ display: "block" }}
                data-ad-client="ca-pub-6678501910155801"
                data-ad-slot="3103400321"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </section>
          )}

          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
            <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Scenario Pack</h3>
            <div className="grid md:grid-cols-3 gap-2 text-sm">
              <div className="p-3 rounded-md border border-slate-200 bg-slate-50"><div className="text-[10px] uppercase text-slate-500">Baseline</div><div className="font-bold">{formatCurrency(baselineScenario.maxHomePrice)}</div></div>
              <div className="p-3 rounded-md border border-amber-200 bg-amber-50"><div className="text-[10px] uppercase text-amber-700">Conservative</div><div className="font-bold text-amber-900">{formatCurrency(conservativeScenario.maxHomePrice)}</div></div>
              <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase text-emerald-700">Optimistic</div><div className="font-bold text-emerald-900">{formatCurrency(optimisticScenario.maxHomePrice)}</div></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
            <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Rate Sensitivity Snapshot</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr>
                    <th className="text-left py-1.5 px-2 text-xs text-slate-700">APR</th>
                    <th className="text-left py-1.5 px-2 text-xs text-slate-700">Affordable Home Price</th>
                    <th className="text-left py-1.5 px-2 text-xs text-slate-700">Delta vs Baseline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rateSensitivity.map((row) => (
                    <tr key={row.rate} className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">{row.rate.toFixed(2)}%</td>
                      <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.afford)}</td>
                      <td className={`${row.afford >= baselineScenario.maxHomePrice ? "text-emerald-700" : "text-rose-700"} py-1.5 px-2`}>
                        {row.afford - baselineScenario.maxHomePrice >= 0 ? "+" : ""}
                        {formatCurrency(row.afford - baselineScenario.maxHomePrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
            <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Debt Optimization Engine (v2)</h3>
            <div className="grid md:grid-cols-3 gap-2 text-sm">
              <div className="p-3 rounded-md border border-slate-200 bg-slate-50"><div className="text-[10px] uppercase text-slate-500">Baseline</div><div className="font-bold">{baselineDetailed.payoffLabel}</div><div className="text-xs text-slate-700">Interest {formatCurrency(baselineDetailed.totalInterest)}</div></div>
              <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase text-emerald-700">Extra Plan</div><div className="font-bold text-emerald-900">{optimizedDetailed.payoffLabel}</div><div className="text-xs text-emerald-700">Interest saved {formatCurrency(interestSavedByExtras)}</div><div className="text-xs text-emerald-700">Months saved {monthsSavedByExtras}</div></div>
              <div className="p-3 rounded-md border border-blue-200 bg-blue-50"><div className="text-[10px] uppercase text-blue-700">Biweekly</div><div className="font-bold text-blue-900">{biweeklyDetailed.payoffLabel}</div><div className="text-xs text-blue-700">Interest saved {formatCurrency(interestSavedByBiweekly)}</div><div className="text-xs text-blue-700">Months saved {monthsSavedByBiweekly}</div></div>
            </div>
            <div className="mt-2 p-2 rounded-md border border-slate-200 bg-slate-50 text-sm">
              Fee-aware APR: <span className="font-bold">{feeAwareApr.toFixed(3)}%</span> (Nominal APR {nRate.toFixed(3)}%)
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-sm font-bold uppercase tracking-tight">Full Amortization Schedule (v2)</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => setScheduleMode("baseline")} className={`h-8 px-2 rounded border text-xs font-semibold ${scheduleMode === "baseline" ? "border-slate-800 bg-slate-800 text-white" : "border-slate-300 bg-white text-slate-700"}`}>Baseline</button>
                <button onClick={() => setScheduleMode("extra")} className={`h-8 px-2 rounded border text-xs font-semibold ${scheduleMode === "extra" ? "border-emerald-700 bg-emerald-700 text-white" : "border-slate-300 bg-white text-slate-700"}`}>Extra</button>
                <button onClick={() => setScheduleMode("biweekly")} className={`h-8 px-2 rounded border text-xs font-semibold ${scheduleMode === "biweekly" ? "border-blue-700 bg-blue-700 text-white" : "border-slate-300 bg-white text-slate-700"}`}>Biweekly</button>
                <button onClick={exportCsv} className="h-8 px-2 rounded border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold">Export CSV</button>
              </div>
            </div>
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
                  {visibleRows.map((row) => (
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
            {activeSchedule.rows.length > 24 && (
              <div className="pt-3">
                <button onClick={() => setShowFullSchedule((p) => !p)} className="h-8 px-3 rounded border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50">
                  {showFullSchedule ? "Show First 24 Months" : `Show Full Schedule (${activeSchedule.rows.length} months)`}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h2 className="text-base font-bold mb-2">Intent and Decision Guide</h2>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>Use conservative affordability for offer planning.</li>
            <li>Stress test APR before locking.</li>
            <li>Keep back-end DTI in a safe operating zone.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h3 className="text-sm font-bold mb-2">Edge and Stress Test Cases</h3>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left py-1.5 px-2 text-xs text-slate-700">Case</th>
                <th className="text-left py-1.5 px-2 text-xs text-slate-700">Input Pattern</th>
                <th className="text-left py-1.5 px-2 text-xs text-slate-700">Watchpoint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="even:bg-slate-50"><td className="py-1.5 px-2">Rate shock</td><td className="py-1.5 px-2">APR 6% to 8%</td><td className="py-1.5 px-2">Purchasing power drop</td></tr>
              <tr className="even:bg-slate-50"><td className="py-1.5 px-2">Debt increase</td><td className="py-1.5 px-2">Debts +$300/mo</td><td className="py-1.5 px-2">Back-end DTI pressure</td></tr>
              <tr className="even:bg-slate-50"><td className="py-1.5 px-2">Low down payment</td><td className="py-1.5 px-2">Down under 20%</td><td className="py-1.5 px-2">PMI drag and max price impact</td></tr>
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h3 className="text-sm font-bold mb-2">Assumptions and Limits</h3>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>Fixed-rate monthly amortization assumption.</li>
            <li>Tax and insurance are estimated percentages.</li>
            <li>PMI estimate is simplified and lender-specific.</li>
            <li>Approval depends on full underwriting factors.</li>
            <li>Rounding differences may occur.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h3 className="text-sm font-bold mb-2">Transparency Block (Who / How / Why + Update Log)</h3>
          <p className="text-sm text-slate-700">Who: Homebuyers planning budget discipline before pre-approval.</p>
          <p className="text-sm text-slate-700">How: Converts income and debt profile into affordability envelope under explicit assumptions.</p>
          <p className="text-sm text-slate-700">Why: Prevents over-borrowing by anchoring to sustainable monthly cash flow.</p>
          <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold mb-1">Update Log</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>2026-03-21: Added debt optimization v2 and full amortization schedule with CSV export.</li>
              <li>2026-03-21: Added explicit edge/stress cases and transparency block.</li>
              <li>2026-03-21: Added route-level GA events for calculator start/complete and CTA click.</li>
            </ul>
          </div>
          <div className="mt-3 text-sm text-slate-700">
            Disclaimer: Educational estimate only. Final terms and approvals depend on lender underwriting and signed disclosures.
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h3 className="text-sm font-bold mb-2">Sources and Review</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            {SOURCES.map((s) => (
              <li key={s.name}>
                <a className="underline underline-offset-2" href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-sm text-slate-700">
            <p>Reviewer: Sam Park (Calculator QA and Content Operations).</p>
            <p>Last reviewed: 2026-03-21 (Asia/Seoul).</p>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h3 className="text-sm font-bold mb-2">Related Tools</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage">Mortgage</Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/down-payment">Down Payment</Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/dti">DTI</Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/closing-cost">Closing Cost</Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/refinance">Refinance</Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/loan">Loan</Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
          <h3 className="text-sm font-bold mb-2">Need a tailored affordability scenario?</h3>
          <p className="text-sm text-slate-700 mb-3">If you need a custom scenario, contact us and we will include it in the next update cycle.</p>
          <Link
            href="/contact"
            onClick={() => sendGaEvent("cta_click", { calculator_id: "home-afford", route: "/home-afford", cta: "contact_team" })}
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Contact Team
          </Link>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Home Affordability FAQ</h3>
          <FAQSection faqs={FAQS} />
        </div>
      </section>
    </main>
  );
}
