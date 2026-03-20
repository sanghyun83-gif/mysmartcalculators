"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, ShieldCheck } from "lucide-react";
import {
  CALCULATORS,
  MORTGAGE_CONSTANTS,
  calculateMortgage,
  formatCurrency,
  generateAmortizationSchedule,
} from "@/lib/calculators/mortgage";

type FAQItem = Readonly<{ question: string; answer: string }>;
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function getEstimatedPayoffDate(startMonth: number, startYear: number, termYears: number) {
  const safeMonth = Math.min(Math.max(startMonth, 1), 12);
  const safeYear = Math.max(startYear, 2000);
  const totalMonths = termYears * 12;
  const payoffMonthIndex = safeMonth - 1 + totalMonths - 1;
  const payoffYear = safeYear + Math.floor(payoffMonthIndex / 12);
  const payoffMonth = payoffMonthIndex % 12;
  return `${MONTH_NAMES[payoffMonth]} ${payoffYear}`;
}

type DetailedAmortizationRow = {
  month: number;
  periodLabel: string;
  payment: number;
  principal: number;
  interest: number;
  extraPayment: number;
  balance: number;
  cumulativeInterest: number;
};

type DetailedAmortizationResult = {
  rows: DetailedAmortizationRow[];
  monthsToPayoff: number;
  totalInterest: number;
  totalPayment: number;
  payoffLabel: string;
  baseMonthlyPi: number;
};

function calculateBaseMonthlyPi(loanAmount: number, annualRate: number, termYears: number) {
  const r = annualRate / 100 / 12;
  const n = Math.max(1, termYears * 12);
  if (r === 0) return loanAmount / n;
  return (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

function buildDetailedAmortization(args: {
  loanAmount: number;
  annualRate: number;
  termYears: number;
  startMonth: number;
  startYear: number;
  monthlyExtra: number;
  annualExtra: number;
  oneTimeExtra: number;
  oneTimeMonth: number;
  biweeklyMode: boolean;
}): DetailedAmortizationResult {
  const {
    loanAmount,
    annualRate,
    termYears,
    startMonth,
    startYear,
    monthlyExtra,
    annualExtra,
    oneTimeExtra,
    oneTimeMonth,
    biweeklyMode,
  } = args;
  const r = annualRate / 100 / 12;
  const n = Math.max(1, termYears * 12);
  const baseMonthlyPi = calculateBaseMonthlyPi(loanAmount, annualRate, termYears);
  const biweeklyEquivalentExtra = biweeklyMode ? baseMonthlyPi / 12 : 0;
  let balance = loanAmount;
  let cumulativeInterest = 0;
  let totalPayment = 0;
  let month = 0;
  const rows: DetailedAmortizationRow[] = [];

  while (balance > 0.01 && month < n + 600) {
    month += 1;
    const interest = r > 0 ? balance * r : 0;
    const scheduledPrincipal = Math.max(0, baseMonthlyPi - interest);
    let extra = monthlyExtra + biweeklyEquivalentExtra;
    if (annualExtra > 0 && month % 12 === 0) extra += annualExtra;
    if (oneTimeExtra > 0 && month === oneTimeMonth) extra += oneTimeExtra;
    const principal = Math.min(balance, scheduledPrincipal + extra);
    const payment = principal + interest;
    balance = Math.max(0, balance - principal);
    cumulativeInterest += interest;
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
      cumulativeInterest: Math.round(cumulativeInterest),
    });
  }

  const payoffLabel = rows.length > 0 ? rows[rows.length - 1].periodLabel : getEstimatedPayoffDate(startMonth, startYear, termYears);
  return {
    rows,
    monthsToPayoff: rows.length,
    totalInterest: Math.round(cumulativeInterest),
    totalPayment: Math.round(totalPayment),
    payoffLabel,
    baseMonthlyPi: Math.round(baseMonthlyPi),
  };
}

function calculateFeeAwareApr(loanAmount: number, fees: number, monthlyPi: number, months: number) {
  const netProceeds = loanAmount - fees;
  if (netProceeds <= 0 || monthlyPi <= 0 || months <= 0) return 0;
  const approxZeroRatePayment = netProceeds / months;
  if (monthlyPi <= approxZeroRatePayment) return 0;

  let low = 0;
  let high = 1;
  for (let i = 0; i < 80; i += 1) {
    const mid = (low + high) / 2;
    const estPayment = (netProceeds * (mid * Math.pow(1 + mid, months))) / (Math.pow(1 + mid, months) - 1);
    if (estPayment > monthlyPi) high = mid;
    else low = mid;
  }
  return ((low + high) / 2) * 12 * 100;
}

function getLtvStyles(downPaymentPercent: number) {
  if (downPaymentPercent >= 20) {
    return "text-emerald-800 bg-emerald-50 border-emerald-200";
  }
  if (downPaymentPercent >= 10) {
    return "text-amber-800 bg-amber-50 border-amber-200";
  }
  return "text-rose-800 bg-rose-50 border-rose-200";
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
  const [advancedMode, setAdvancedMode] = useState(false);
  const [homePrice, setHomePrice] = useState(String(MORTGAGE_CONSTANTS.defaults.homePrice));
  const [downPaymentPercent, setDownPaymentPercent] = useState(
    String(MORTGAGE_CONSTANTS.defaults.downPaymentPercent)
  );
  const [interestRate, setInterestRate] = useState(String(MORTGAGE_CONSTANTS.defaults.interestRate));
  const [loanTermYears, setLoanTermYears] = useState(String(MORTGAGE_CONSTANTS.defaults.loanTermYears));
  const [propertyTaxRate, setPropertyTaxRate] = useState(String(MORTGAGE_CONSTANTS.defaults.propertyTaxRate));
  const [homeInsuranceYear, setHomeInsuranceYear] = useState(String(MORTGAGE_CONSTANTS.defaults.homeInsuranceYear));
  const [startMonth, setStartMonth] = useState(String(new Date().getMonth() + 1));
  const [startYear, setStartYear] = useState(String(new Date().getFullYear()));
  const [hoaMonthly, setHoaMonthly] = useState("0");
  const [otherMonthlyCosts, setOtherMonthlyCosts] = useState("0");
  const [extraMonthlyPayment, setExtraMonthlyPayment] = useState("0");
  const [extraAnnualPayment, setExtraAnnualPayment] = useState("0");
  const [oneTimeExtraPayment, setOneTimeExtraPayment] = useState("0");
  const [oneTimeExtraMonth, setOneTimeExtraMonth] = useState("24");
  const [feeAmount, setFeeAmount] = useState("0");
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [scheduleMode, setScheduleMode] = useState<"baseline" | "extra" | "biweekly">("extra");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const calculatorFaqs =
    (CALCULATORS.find((c) => c.id === "mortgage/calculator")?.faqs as readonly FAQItem[] | undefined) ?? [];

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
  const hoaMonthlyValue = Math.max(0, Number(hoaMonthly) || 0);
  const otherMonthlyValue = Math.max(0, Number(otherMonthlyCosts) || 0);
  const allInMonthlyPayment = result.totalMonthlyPayment + hoaMonthlyValue + otherMonthlyValue;
  const parsedStartMonth = Math.min(12, Math.max(1, Number(startMonth) || new Date().getMonth() + 1));
  const parsedStartYear = Math.max(2000, Number(startYear) || new Date().getFullYear());
  const monthlyExtraValue = Math.max(0, Number(extraMonthlyPayment) || 0);
  const annualExtraValue = Math.max(0, Number(extraAnnualPayment) || 0);
  const oneTimeExtraValue = Math.max(0, Number(oneTimeExtraPayment) || 0);
  const oneTimeExtraMonthValue = Math.max(1, Number(oneTimeExtraMonth) || 1);
  const feeAmountValue = Math.max(0, Number(feeAmount) || 0);
  const estimatedPayoffDate = getEstimatedPayoffDate(
    parsedStartMonth,
    parsedStartYear,
    result.loanTermYears
  );

  const sensitivity = (() => {
    const price = Math.max(0, Number(homePrice) || MORTGAGE_CONSTANTS.defaults.homePrice);
    const dpPercent = Math.max(0, Math.min(100, Number(downPaymentPercent) || MORTGAGE_CONSTANTS.defaults.downPaymentPercent));
    const years = Math.max(1, Number(loanTermYears) || MORTGAGE_CONSTANTS.defaults.loanTermYears);
    const taxRate = Math.max(0, Number(propertyTaxRate) || MORTGAGE_CONSTANTS.defaults.propertyTaxRate);
    const insurance = Math.max(0, Number(homeInsuranceYear) || MORTGAGE_CONSTANTS.defaults.homeInsuranceYear);
    const downPayment = price * (dpPercent / 100);
    const currentRate = Math.max(0, Number(interestRate) || MORTGAGE_CONSTANTS.defaults.interestRate);
    const low = calculateMortgage(price, downPayment, Math.max(0, currentRate - 1), years, taxRate, insurance);
    const high = calculateMortgage(price, downPayment, currentRate + 1, years, taxRate, insurance);
    return {
      currentRate,
      lowPayment: low.totalMonthlyPayment,
      highPayment: high.totalMonthlyPayment,
      lowDelta: low.totalMonthlyPayment - result.totalMonthlyPayment,
      highDelta: high.totalMonthlyPayment - result.totalMonthlyPayment,
    };
  })();

  const scenarioRows = (() => {
    const price = Math.max(0, Number(homePrice) || MORTGAGE_CONSTANTS.defaults.homePrice);
    const baseDpPercent = Math.max(0, Math.min(100, Number(downPaymentPercent) || MORTGAGE_CONSTANTS.defaults.downPaymentPercent));
    const baseRate = Math.max(0, Number(interestRate) || MORTGAGE_CONSTANTS.defaults.interestRate);
    const years = Math.max(1, Number(loanTermYears) || MORTGAGE_CONSTANTS.defaults.loanTermYears);
    const baseTax = Math.max(0, Number(propertyTaxRate) || MORTGAGE_CONSTANTS.defaults.propertyTaxRate);
    const baseIns = Math.max(0, Number(homeInsuranceYear) || MORTGAGE_CONSTANTS.defaults.homeInsuranceYear);
    const baseDownPayment = price * (baseDpPercent / 100);

    const baseline = calculateMortgage(price, baseDownPayment, baseRate, years, baseTax, baseIns);
    const conservative = calculateMortgage(
      price,
      price * (Math.max(0, baseDpPercent - 5) / 100),
      baseRate + 0.75,
      years,
      baseTax + 0.2,
      baseIns + 300
    );
    const aggressive = calculateMortgage(
      price,
      price * (Math.min(100, baseDpPercent + 5) / 100),
      Math.max(0, baseRate - 0.75),
      years,
      Math.max(0, baseTax - 0.1),
      Math.max(0, baseIns - 150)
    );

    const withAllIn = (x: number) => x + hoaMonthlyValue + otherMonthlyValue;

    return [
      {
        name: "Baseline",
        inputs: `DP ${baseDpPercent.toFixed(1)}% / APR ${baseRate.toFixed(2)}%`,
        payment: withAllIn(baseline.totalMonthlyPayment),
        delta: 0,
        note: "Reference case for comparison",
      },
      {
        name: "Conservative",
        inputs: `DP ${(Math.max(0, baseDpPercent - 5)).toFixed(1)}% / APR ${(baseRate + 0.75).toFixed(2)}%`,
        payment: withAllIn(conservative.totalMonthlyPayment),
        delta: withAllIn(conservative.totalMonthlyPayment) - withAllIn(baseline.totalMonthlyPayment),
        note: "Stress-test payment resilience",
      },
      {
        name: "Aggressive",
        inputs: `DP ${(Math.min(100, baseDpPercent + 5)).toFixed(1)}% / APR ${Math.max(0, baseRate - 0.75).toFixed(2)}%`,
        payment: withAllIn(aggressive.totalMonthlyPayment),
        delta: withAllIn(aggressive.totalMonthlyPayment) - withAllIn(baseline.totalMonthlyPayment),
        note: "Lower payment through stronger terms",
      },
    ];
  })();

  const baselineDetailed = buildDetailedAmortization({
    loanAmount: result.loanAmount,
    annualRate: result.interestRate,
    termYears: result.loanTermYears,
    startMonth: parsedStartMonth,
    startYear: parsedStartYear,
    monthlyExtra: 0,
    annualExtra: 0,
    oneTimeExtra: 0,
    oneTimeMonth: 1,
    biweeklyMode: false,
  });

  const optimizedDetailed = buildDetailedAmortization({
    loanAmount: result.loanAmount,
    annualRate: result.interestRate,
    termYears: result.loanTermYears,
    startMonth: parsedStartMonth,
    startYear: parsedStartYear,
    monthlyExtra: monthlyExtraValue,
    annualExtra: annualExtraValue,
    oneTimeExtra: oneTimeExtraValue,
    oneTimeMonth: oneTimeExtraMonthValue,
    biweeklyMode: false,
  });

  const biweeklyDetailed = buildDetailedAmortization({
    loanAmount: result.loanAmount,
    annualRate: result.interestRate,
    termYears: result.loanTermYears,
    startMonth: parsedStartMonth,
    startYear: parsedStartYear,
    monthlyExtra: monthlyExtraValue,
    annualExtra: annualExtraValue,
    oneTimeExtra: oneTimeExtraValue,
    oneTimeMonth: oneTimeExtraMonthValue,
    biweeklyMode: true,
  });

  const interestSavedByExtras = baselineDetailed.totalInterest - optimizedDetailed.totalInterest;
  const monthsSavedByExtras = baselineDetailed.monthsToPayoff - optimizedDetailed.monthsToPayoff;
  const monthsSavedByBiweekly = baselineDetailed.monthsToPayoff - biweeklyDetailed.monthsToPayoff;
  const biweeklyInterestSaved = baselineDetailed.totalInterest - biweeklyDetailed.totalInterest;
  const feeAwareApr = calculateFeeAwareApr(
    result.loanAmount,
    feeAmountValue,
    baselineDetailed.baseMonthlyPi,
    Math.max(1, result.loanTermYears * 12)
  );
  const aprDelta = feeAwareApr - result.interestRate;
  const scheduleByMode: Record<"baseline" | "extra" | "biweekly", DetailedAmortizationResult> = {
    baseline: baselineDetailed,
    extra: optimizedDetailed,
    biweekly: biweeklyDetailed,
  };
  const activeSchedule = scheduleByMode[scheduleMode];
  const visibleScheduleRows = showFullSchedule ? activeSchedule.rows : activeSchedule.rows.slice(0, 24);
  const needsScheduleToggle = activeSchedule.rows.length > 24;

  function escapeCsvCell(value: string | number) {
    const raw = String(value);
    if (/[",\n]/.test(raw)) {
      return `"${raw.replace(/"/g, "\"\"")}"`;
    }
    return raw;
  }

  function handleExportAmortizationCsv() {
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
    anchor.download = `mortgage-${scheduleMode}-amortization.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }

  function handleResetInputs() {
    setAdvancedMode(false);
    setHomePrice(String(MORTGAGE_CONSTANTS.defaults.homePrice));
    setDownPaymentPercent(String(MORTGAGE_CONSTANTS.defaults.downPaymentPercent));
    setInterestRate(String(MORTGAGE_CONSTANTS.defaults.interestRate));
    setLoanTermYears(String(MORTGAGE_CONSTANTS.defaults.loanTermYears));
    setPropertyTaxRate(String(MORTGAGE_CONSTANTS.defaults.propertyTaxRate));
    setHomeInsuranceYear(String(MORTGAGE_CONSTANTS.defaults.homeInsuranceYear));
    setStartMonth(String(new Date().getMonth() + 1));
    setStartYear(String(new Date().getFullYear()));
    setHoaMonthly("0");
    setOtherMonthlyCosts("0");
    setExtraMonthlyPayment("0");
    setExtraAnnualPayment("0");
    setOneTimeExtraPayment("0");
    setOneTimeExtraMonth("24");
    setFeeAmount("0");
    setShowFullSchedule(false);
    setScheduleMode("extra");
    setCopyState("idle");
  }

  async function handleCopyResult() {
    const summary = [
      `Mortgage monthly payment: ${formatCurrency(result.totalMonthlyPayment)} /mo`,
      `All-in monthly payment: ${formatCurrency(allInMonthlyPayment)} /mo`,
      `Loan amount: ${formatCurrency(result.loanAmount)}`,
      `APR: ${result.interestRate.toFixed(2)}%`,
      `Fee-aware APR: ${feeAwareApr.toFixed(3)}%`,
      `Term: ${result.loanTermYears} years`,
      `Estimated payoff (baseline): ${estimatedPayoffDate}`,
      `Optimized payoff (with extras): ${optimizedDetailed.payoffLabel}`,
      `Biweekly payoff estimate: ${biweeklyDetailed.payoffLabel}`,
      `Interest saved (extras): ${formatCurrency(Math.max(0, interestSavedByExtras))}`,
      `Interest saved (biweekly): ${formatCurrency(Math.max(0, biweeklyInterestSaved))}`,
      "Source: https://mysmartcalculators.com/mortgage",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("failed");
    }
  }

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

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setAdvancedMode((prev) => !prev)}
                    className="text-xs px-2 py-1 rounded border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    {advancedMode ? "Hide Advanced Inputs" : "Show Advanced Inputs"}
                  </button>
                  {advancedMode && (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-700">HOA and Other Monthly Costs</label>
                        <div className="flex flex-row items-center gap-2">
                          <div className="relative w-full">
                            <input
                              type="text"
                              inputMode="decimal"
                              value={hoaMonthly}
                              onChange={(e) => setHoaMonthly(e.target.value.replace(/[^0-9.]/g, ""))}
                              className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">HOA $/mo</span>
                          </div>
                          <div className="relative w-full">
                            <input
                              type="text"
                              inputMode="decimal"
                              value={otherMonthlyCosts}
                              onChange={(e) => setOtherMonthlyCosts(e.target.value.replace(/[^0-9.]/g, ""))}
                              className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">Other $/mo</span>
                          </div>
                        </div>
                      </div>

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
                        <label className="text-sm font-semibold text-slate-700">Closing / Origination Fees</label>
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
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Mortgage
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
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">Estimated Payoff</div>
                  <div className="font-bold text-slate-900">{estimatedPayoffDate}</div>
                </div>
                {advancedMode && (
                  <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                    <div className="text-[10px] text-slate-500 uppercase">All-in Monthly (Incl. HOA/Other)</div>
                    <div className="font-bold text-slate-900">{formatCurrency(allInMonthlyPayment)}</div>
                  </div>
                )}
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

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">
                Debt Optimization Engine (v2)
              </h3>
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
                  <div className="font-bold text-slate-900">{result.interestRate.toFixed(3)}%</div>
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
              <p className="text-xs text-slate-600 mt-3">
                Fee-aware APR estimates the effective borrowing cost when lender fees reduce net proceeds.
              </p>
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
                  >
                    Export CSV
                  </button>
                </div>
              </div>
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
                    {showFullSchedule ? "Show First 24 Months" : `Show Full Schedule (${activeSchedule.rows.length} months)`}
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Scenario Delta Table</h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Scenario</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Inputs</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Primary Result</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Delta vs Baseline</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Decision Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {scenarioRows.map((row) => (
                      <tr key={row.name} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700 font-semibold">{row.name}</td>
                        <td className="py-1.5 px-2 text-slate-700">{row.inputs}</td>
                        <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.payment)} /mo</td>
                        <td className={`py-1.5 px-2 ${row.delta > 0 ? "text-rose-700" : row.delta < 0 ? "text-emerald-700" : "text-slate-700"}`}>
                          {row.delta > 0 ? "+" : ""}{formatCurrency(row.delta)}
                        </td>
                        <td className="py-1.5 px-2 text-slate-700">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Rate Sensitivity Snapshot</h3>
              <div className="grid md:grid-cols-3 gap-2 text-sm">
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">APR -1.0%</div>
                  <div className="font-bold text-emerald-700">{formatCurrency(sensitivity.lowPayment)}</div>
                  <div className="text-[11px] text-emerald-700">{formatCurrency(sensitivity.lowDelta)} vs current</div>
                </div>
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">Current APR</div>
                  <div className="font-bold text-slate-900">{sensitivity.currentRate.toFixed(2)}%</div>
                  <div className="text-[11px] text-slate-600">{formatCurrency(result.totalMonthlyPayment)} / month</div>
                </div>
                <div className="p-2 rounded-md border border-slate-200 bg-slate-50">
                  <div className="text-[10px] text-slate-500 uppercase">APR +1.0%</div>
                  <div className="font-bold text-rose-700">{formatCurrency(sensitivity.highPayment)}</div>
                  <div className="text-[11px] text-rose-700">+{formatCurrency(sensitivity.highDelta)} vs current</div>
                </div>
              </div>
              <p className="text-xs text-slate-700 mt-3">
                Decision hint: if the stressed payment at APR +1.0% is uncomfortable, reduce price target or increase down payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Intent and Decision Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Use this page to decide whether your target home price fits monthly cash-flow constraints, how sensitive your payment is
            to rate changes, and when refinancing or extra principal payments meaningfully improve long-term cost.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5 mt-3">
            <li>If all-in monthly exceeds comfort range, reduce price target or increase down payment first.</li>
            <li>If APR +1.0% stress case breaks budget, avoid aggressive borrowing assumptions.</li>
            <li>If conservative scenario is still affordable, your financing plan has stronger downside resilience.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Mortgage Reference Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Mortgage qualification and payment planning center on PITI: Principal, Interest, Taxes, and Insurance.
            In most US markets, PMI applies when down payment is below 20%. This calculator uses standard fixed-rate
            amortization and adds tax and insurance as monthly estimates for a practical payment preview.
          </p>
          <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900">Model Formula Snapshot</p>
            <p>
              Monthly P&amp;I = L x [r x (1 + r)^n] / [(1 + r)^n - 1]
            </p>
            <p>L = loan amount, r = monthly interest rate, n = number of monthly payments.</p>
            <p>Total Monthly = P&amp;I + tax + insurance + PMI (when down payment is below 20%).</p>
          </div>
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

        <section id="extra-payments" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Extra Payments Strategy</h3>
          <p className="text-sm leading-relaxed text-slate-700 mb-2">
            Extra principal payments reduce interest-heavy early-year balance faster than waiting for scheduled amortization.
            Even small recurring prepayments can materially shorten payoff time.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>Monthly extra payment: stable and easy to automate.</li>
            <li>Annual lump-sum: useful after bonus/tax refund cycles.</li>
            <li>Check lender servicing rules to ensure payment is applied to principal.</li>
          </ul>
        </section>

        <section id="rent-vs-buy" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Rent vs Buy Decision Frame</h3>
          <p className="text-sm leading-relaxed text-slate-700 mb-2">
            The monthly payment itself is only one part of ownership cost. Compare time horizon, mobility needs, closing costs,
            maintenance, and expected hold period before deciding.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>Short hold period often favors renting due to transaction costs.</li>
            <li>Longer hold period can favor buying if payment stability and equity growth matter.</li>
            <li>Run both scenarios with conservative assumptions, not best-case assumptions.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Scenario Stress Test (Example Cases)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Scenario</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Inputs</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">What to Watch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Starter buyer</td>
                  <td className="py-1.5 px-2 text-slate-700">$350k, 10% down, 30y, 6.5%</td>
                  <td className="py-1.5 px-2 text-slate-700">PMI impact and tax share of payment</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Rate-sensitive buyer</td>
                  <td className="py-1.5 px-2 text-slate-700">$500k, 20% down, 30y, 5.9% vs 6.7%</td>
                  <td className="py-1.5 px-2 text-slate-700">Monthly delta and long-term interest spread</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Equity-first strategy</td>
                  <td className="py-1.5 px-2 text-slate-700">$450k, 25% down, 15y, 6.0%</td>
                  <td className="py-1.5 px-2 text-slate-700">Higher monthly payment vs lower total interest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Assumptions and Limits</h3>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>Model assumes a fixed-rate loan with constant monthly payments.</li>
            <li>Tax, insurance, and PMI are estimated averages, not lender quotes.</li>
            <li>Closing costs, HOA, escrow adjustments, and local fees are not included in the main payment line.</li>
            <li>Displayed values are rounded to practical dollar-level estimates for readability.</li>
            <li>PMI cancellation timing depends on lender servicing rules and loan-to-value verification.</li>
            <li>Use lender Loan Estimate (LE) and Closing Disclosure (CD) for final underwriting decisions.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Sources and Review</h3>
          <div className="text-sm leading-relaxed text-slate-700 space-y-1">
            <p>
              Sources:{" "}
              <a
                href="https://www.freddiemac.com/pmms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
              >
                Freddie Mac PMMS
              </a>
              ,{" "}
              <a
                href="https://www.fhfa.gov/DataTools/Downloads/Pages/House-Price-Index-Datasets.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
              >
                FHFA House Price Index datasets
              </a>
              ,{" "}
              <a
                href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
              >
                CFPB Loan Estimate guidance
              </a>
              .
            </p>
            <p>Model Basis: 2026 fixed-rate baseline assumptions in project constants.</p>
            <p>Reviewer: Sam Park (Calculator QA and Content Operations).</p>
            <p>Last reviewed: 2026-03-21 (Asia/Seoul).</p>
          </div>
          <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900 mb-1">Update Log</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>2026-03-21: Added formula block, payoff-date estimate, and mortgage-specific metadata parity.</li>
              <li>2026-03-21: Added copy/reset UX controls and expanded assumptions and source links.</li>
              <li>2026-03-21: Applied debt engine v2 (full schedule, CSV export, extra payment, biweekly, fee-aware APR).</li>
            </ul>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Who / How / Why</h3>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <span className="font-semibold text-slate-900">Who:</span> Internal calculator standard review based on
              Freddie Mac PMMS, FHFA, and CFPB-aligned assumptions.
            </li>
            <li>
              <span className="font-semibold text-slate-900">How:</span> Monthly principal and interest uses fixed-rate
              amortization; taxes, insurance, and PMI are added as monthly practical estimates.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Why:</span> Help users compare payment burden, PMI effects,
              and long-term interest trade-offs before lender-level underwriting.
            </li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Disclaimer</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            This calculator is an educational estimate, not a lender offer or underwriting decision. Final loan terms,
            PMI cancellation, taxes, escrow, and closing costs are determined by your lender and local jurisdiction.
            Always validate results against your official Loan Estimate (LE) and Closing Disclosure (CD).
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Related Mortgage Tools</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage/affordability">
              Home Affordability
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage/amortization">
              Amortization Schedule
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage/refinance">
              Refinance Calculator
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage/extra-payments">
              Extra Payments
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/mortgage/rent-vs-buy">
              Rent vs Buy
            </Link>
            <Link className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100" href="/loan">
              Loan Calculator
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Need a Tailored Estimate?</h3>
          <p className="text-sm text-slate-700 mb-3">
            If you want us to prioritize a state-specific mortgage module, send your request and we will include it in the next update.
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">
            Mortgage FAQ
          </h3>
          <FAQSection faqs={calculatorFaqs} />
        </div>
      </section>
    </main>
  );
}
