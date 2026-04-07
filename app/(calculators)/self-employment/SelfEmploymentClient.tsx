"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Calculator, ShieldCheck } from "lucide-react";
import { sendGaEvent } from "@/lib/analytics/ga";
import {
  SE_TAX_2026,
  calculateSETax,
  formatCurrency,
} from "@/lib/calculators/self-employment";
import {
  SELF_EMPLOYMENT_EVIDENCE_MATRIX,
  SELF_EMPLOYMENT_SCENARIO_CLUSTERS,
} from "@/lib/self-employment/evidence";

type TimelineStage = {
  stage: string;
  window: string;
  action: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type SelfEmploymentClientProps = {
  focusTitle?: string;
  focusSummary?: string;
  initialValues?: {
    grossIncome?: number;
    businessExpenses?: number;
    filingStatus?: "single" | "married";
    quarterBufferPercent?: number;
  };
};

function cleanNumber(value: string): number {
  return Number(value.replace(/[^0-9.]/g, "")) || 0;
}

function buildLifecycleStages(args: {
  totalTax: number;
  quarterBufferPercent: number;
}): TimelineStage[] {
  const quarterTarget = Math.round((args.totalTax * (args.quarterBufferPercent / 100)) / 4);
  return [
    {
      stage: "Income Logging",
      window: "Weekly",
      action: "Classify gross receipts and deductible expenses in one ledger.",
    },
    {
      stage: "Quarter Reserve",
      window: "Apr/Jun/Sep/Jan",
      action: `Reserve ${formatCurrency(quarterTarget)} per quarter for SE tax coverage.`,
    },
    {
      stage: "Pre-Filing Audit",
      window: "Jan-Feb",
      action: "Verify Schedule C totals, wage-cap exposure, and deduction support.",
    },
    {
      stage: "Return Filing",
      window: "By Apr 15",
      action: "File Schedule SE + Form 1040 and reconcile estimated payments.",
    },
    {
      stage: "Post-Filing Review",
      window: "After filing",
      action: "Tune next-year reserve ratio based on estimate-versus-actual variance.",
    },
  ];
}

function buildSensitivityProfiles(args: {
  grossIncome: number;
  businessExpenses: number;
  filingStatus: "single" | "married";
  quarterBufferPercent: number;
}) {
  const { grossIncome, businessExpenses, filingStatus, quarterBufferPercent } = args;
  const profiles = [
    {
      label: "Conservative",
      grossIncome: grossIncome * 0.9,
      businessExpenses: businessExpenses * 0.95,
      quarterBufferPercent: Math.max(90, quarterBufferPercent - 5),
    },
    {
      label: "Base",
      grossIncome,
      businessExpenses,
      quarterBufferPercent,
    },
    {
      label: "Upside",
      grossIncome: grossIncome * 1.1,
      businessExpenses: businessExpenses * 1.05,
      quarterBufferPercent: Math.min(125, quarterBufferPercent + 7),
    },
  ];

  return profiles.map((profile) => {
    const result = calculateSETax(
      Math.round(profile.grossIncome),
      Math.round(profile.businessExpenses),
      filingStatus,
    );
    const rangeLow = Math.round(result.totalSETax * 0.92);
    const rangeHigh = Math.round(result.totalSETax * 1.08);
    return {
      label: profile.label,
      totalSETax: result.totalSETax,
      effectiveRate: result.effectiveRate,
      quarterlyReserve: Math.round((result.totalSETax * (profile.quarterBufferPercent / 100)) / 4),
      rangeLow,
      rangeHigh,
      deltaFromBase: 0,
    };
  });
}

export default function SelfEmploymentClient({
  focusTitle,
  focusSummary,
  initialValues,
}: SelfEmploymentClientProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routePath = pathname || "/self-employment";
  const startedRef = useRef(false);
  const adRequestedCountRef = useRef(0);
  const queryIncome = cleanNumber(searchParams.get("income") ?? "");
  const queryExpenses = cleanNumber(searchParams.get("expenses") ?? "");
  const queryStatus = searchParams.get("status");
  const queryBuffer = cleanNumber(searchParams.get("qbuf") ?? "");
  const queryRun = searchParams.get("run") === "1";
  const initialStatus =
    queryStatus === "single" || queryStatus === "married"
      ? queryStatus
      : (initialValues?.filingStatus ?? "single");

  const [grossIncome, setGrossIncome] = useState(
    String(queryIncome || initialValues?.grossIncome || 85000),
  );
  const [businessExpenses, setBusinessExpenses] = useState(
    String(queryExpenses || initialValues?.businessExpenses || 18000),
  );
  const [filingStatus, setFilingStatus] = useState<"single" | "married">(initialStatus);
  const [quarterBufferPercent, setQuarterBufferPercent] = useState(
    String(queryBuffer || initialValues?.quarterBufferPercent || 100),
  );
  const [showResult, setShowResult] = useState(queryRun);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [linkState, setLinkState] = useState<"idle" | "copied" | "failed">("idle");

  const parsedIncome = Math.max(0, cleanNumber(grossIncome));
  const parsedExpenses = Math.max(0, cleanNumber(businessExpenses));
  const parsedQuarterBuffer = Math.max(85, Math.min(130, cleanNumber(quarterBufferPercent) || 100));

  const result = useMemo(() => {
    if (!showResult) return null;
    return calculateSETax(parsedIncome, parsedExpenses, filingStatus);
  }, [showResult, parsedIncome, parsedExpenses, filingStatus]);

  const timelineRows = useMemo(() => {
    if (!result) return [];
    return buildLifecycleStages({
      totalTax: result.totalSETax,
      quarterBufferPercent: parsedQuarterBuffer,
    });
  }, [result, parsedQuarterBuffer]);

  const sensitivityRows = useMemo(() => {
    if (!showResult || !result) return [];
    const rows = buildSensitivityProfiles({
      grossIncome: parsedIncome,
      businessExpenses: parsedExpenses,
      filingStatus,
      quarterBufferPercent: parsedQuarterBuffer,
    });
    const base = rows.find((row) => row.label === "Base")?.totalSETax || result.totalSETax;
    return rows.map((row) => ({
      ...row,
      deltaFromBase: row.totalSETax - base,
    }));
  }, [showResult, result, parsedIncome, parsedExpenses, filingStatus, parsedQuarterBuffer]);

  useEffect(() => {
    if (!showResult) return;
    if (typeof window === "undefined") return;
    if (adRequestedCountRef.current >= 2) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      while (adRequestedCountRef.current < 2) {
        window.adsbygoogle.push({});
        adRequestedCountRef.current += 1;
      }
    } catch {
      // AdSense not ready or blocked.
    }
  }, [showResult]);

  const readinessChecklist = [
    "1099 statements and income ledger by client",
    "Schedule C expense categories with receipts",
    "Mileage and home-office records if claimed",
    "Prior-year return + prior estimated tax confirmations",
    "Dedicated reserve account with quarterly transfer proof",
  ];

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendGaEvent("calculator_start", { calculator_id: "self-employment", route: routePath });
  }

  function buildPermalink() {
    const params = new URLSearchParams({
      income: String(Math.round(parsedIncome)),
      expenses: String(Math.round(parsedExpenses)),
      status: filingStatus,
      qbuf: String(Math.round(parsedQuarterBuffer)),
      run: "1",
    });
    return `${window.location.origin}${routePath}?${params.toString()}`;
  }

  function runCalculation() {
    trackStart();
    setShowResult(true);
    window.history.replaceState(null, "", buildPermalink());
    sendGaEvent("calculator_complete", {
      calculator_id: "self-employment",
      route: routePath,
      filing_status: filingStatus,
      income: Math.round(parsedIncome),
      expenses: Math.round(parsedExpenses),
    });
  }

  async function copySummary() {
    if (!result) return;
    const text = [
      `Net Profit: ${formatCurrency(result.netProfit)}`,
      `SE Tax: ${formatCurrency(result.totalSETax)}`,
      `Deductible Half: ${formatCurrency(result.seDeduction)}`,
      `Quarter Estimate: ${formatCurrency(Math.round((result.totalSETax * (parsedQuarterBuffer / 100)) / 4))}`,
      `Permalink: ${buildPermalink()}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
      sendGaEvent("cta_click", { calculator_id: "self-employment", route: routePath, cta: "copy_summary" });
    } catch {
      setCopyState("failed");
    }
  }

  async function copyPermalink() {
    try {
      await navigator.clipboard.writeText(buildPermalink());
      setLinkState("copied");
      setTimeout(() => setLinkState("idle"), 1500);
      sendGaEvent("cta_click", { calculator_id: "self-employment", route: routePath, cta: "copy_permalink" });
    } catch {
      setLinkState("failed");
    }
  }

  function exportCsv() {
    if (!result) return;
    const rows = [
      ["Metric", "Value"],
      ["Gross Income", Math.round(result.grossIncome)],
      ["Business Expenses", Math.round(result.businessExpenses)],
      ["Net Profit", Math.round(result.netProfit)],
      ["Net Earnings (92.35%)", Math.round(result.netEarnings)],
      ["Social Security Tax", Math.round(result.socialSecurityTax)],
      ["Medicare Tax", Math.round(result.medicareTax)],
      ["Additional Medicare Tax", Math.round(result.additionalMedicareTax)],
      ["Total SE Tax", Math.round(result.totalSETax)],
      ["Deductible Half", Math.round(result.seDeduction)],
      ["Quarterly Reserve", Math.round((result.totalSETax * (parsedQuarterBuffer / 100)) / 4)],
    ];
    const csv = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "self-employment-tax-audit.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    sendGaEvent("cta_click", { calculator_id: "self-employment", route: routePath, cta: "export_csv" });
  }

  function exportPdf() {
    if (!result) return;
    const popup = window.open("", "_blank", "width=900,height=700");
    if (!popup) return;
    popup.document.write(
      `<html><head><title>Self-Employment Tax Audit</title></head><body><h1>Self-Employment Tax Audit</h1><p>Total SE Tax: ${formatCurrency(result.totalSETax)}</p><p>Deductible Half: ${formatCurrency(result.seDeduction)}</p><p>Quarterly Reserve: ${formatCurrency(Math.round((result.totalSETax * (parsedQuarterBuffer / 100)) / 4))}</p></body></html>`,
    );
    popup.document.close();
    popup.focus();
    popup.print();
    sendGaEvent("cta_click", { calculator_id: "self-employment", route: routePath, cta: "export_pdf" });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Calculator className="w-4 h-4 text-emerald-600" />
          <h1 className="text-2xl font-bold">Self-Employment Tax Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-emerald-600" />
          Verified by IRS and SSA sources with v3 overdrive workflow
        </div>
        {focusTitle ? (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
            <p className="font-semibold">{focusTitle}</p>
            {focusSummary ? <p className="text-emerald-800">{focusSummary}</p> : null}
          </div>
        ) : null}
      </header>

      <section className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-tight">SE Inputs</h2>
              <input
                value={grossIncome}
                onFocus={trackStart}
                onChange={(e) => setGrossIncome(e.target.value)}
                className="w-full h-9 px-2 border border-slate-300 rounded-md text-sm"
                placeholder="Gross self-employment income"
              />
              <input
                value={businessExpenses}
                onChange={(e) => setBusinessExpenses(e.target.value)}
                className="w-full h-9 px-2 border border-slate-300 rounded-md text-sm"
                placeholder="Business expenses"
              />
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value as "single" | "married")}
                className="w-full h-9 px-2 border border-slate-300 rounded-md text-sm"
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
              <label className="text-xs font-semibold">Quarter reserve buffer ({Math.round(parsedQuarterBuffer)}%)</label>
              <input
                type="range"
                min={85}
                max={130}
                step={1}
                value={Math.round(parsedQuarterBuffer)}
                onChange={(e) => setQuarterBufferPercent(e.target.value)}
                className="w-full"
              />
              <button
                onClick={runCalculation}
                className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-bold"
              >
                Run SE Tax Audit
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    void copySummary();
                  }}
                  className="h-9 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-md text-sm font-semibold"
                >
                  {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy Failed" : "Copy Result"}
                </button>
                <button
                  onClick={() => {
                    void copyPermalink();
                  }}
                  className="h-9 border border-slate-300 bg-white text-slate-700 rounded-md text-sm font-semibold"
                >
                  {linkState === "copied" ? "Link Copied" : linkState === "failed" ? "Link Failed" : "Copy Link"}
                </button>
              </div>
              <div className="text-xs text-slate-500 border border-slate-200 bg-slate-50 rounded-md p-2">
                SE rates: {SE_TAX_2026.totalSERate}% combined. Net earnings multiplier: {(SE_TAX_2026.netEarningsMultiplier * 100).toFixed(2)}%.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold uppercase tracking-tight mb-3">SE Tax Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border border-amber-200 bg-amber-50 text-amber-800 font-bold">
                  Enter values and run calculation.
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-4 gap-2">
                    <div className="p-3 rounded-md border border-slate-200 bg-white">
                      <div className="text-[10px] uppercase text-slate-600">Total SE Tax</div>
                      <div className="text-xl font-black">{formatCurrency(result.totalSETax)}</div>
                    </div>
                    <div className="p-3 rounded-md border border-slate-200 bg-white">
                      <div className="text-[10px] uppercase text-slate-600">Effective Rate</div>
                      <div className="text-xl font-black">{result.effectiveRate}%</div>
                    </div>
                    <div className="p-3 rounded-md border border-slate-200 bg-white">
                      <div className="text-[10px] uppercase text-slate-600">Deductible Half</div>
                      <div className="text-xl font-black">{formatCurrency(result.seDeduction)}</div>
                    </div>
                    <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50">
                      <div className="text-[10px] uppercase text-emerald-700">Quarter Reserve</div>
                      <div className="text-xl font-black text-emerald-900">
                        {formatCurrency(Math.round((result.totalSETax * (parsedQuarterBuffer / 100)) / 4))}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <button
                      onClick={exportCsv}
                      className="h-9 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-md text-sm font-semibold"
                    >
                      Export CSV
                    </button>
                    <button
                      onClick={exportPdf}
                      className="h-9 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-md text-sm font-semibold"
                    >
                      Export PDF
                    </button>
                  </div>
                </>
              )}
            </div>

            {showResult && (
              <section className="bg-white border border-slate-200 shadow-sm rounded-md p-3" aria-label="Sponsored">
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

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Lifecycle Simulator</h3>
              <table className="w-full text-sm border-collapse">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr>
                    <th className="text-left py-1.5 px-2 text-xs">Stage</th>
                    <th className="text-left py-1.5 px-2 text-xs">Window</th>
                    <th className="text-left py-1.5 px-2 text-xs">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {timelineRows.map((row) => (
                    <tr key={row.stage} className="even:bg-slate-50">
                      <td className="py-1.5 px-2 font-semibold">{row.stage}</td>
                      <td className="py-1.5 px-2">{row.window}</td>
                      <td className="py-1.5 px-2">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Sensitivity Lab</h3>
              <table className="w-full text-sm border-collapse">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr>
                    <th className="text-left py-1.5 px-2 text-xs">Profile</th>
                    <th className="text-left py-1.5 px-2 text-xs">SE Tax</th>
                    <th className="text-left py-1.5 px-2 text-xs">Effective Rate</th>
                    <th className="text-left py-1.5 px-2 text-xs">Range</th>
                    <th className="text-left py-1.5 px-2 text-xs">Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sensitivityRows.map((row) => (
                    <tr key={row.label} className="even:bg-slate-50">
                      <td className="py-1.5 px-2 font-semibold">{row.label}</td>
                      <td className="py-1.5 px-2">{formatCurrency(row.totalSETax)}</td>
                      <td className="py-1.5 px-2">{row.effectiveRate}%</td>
                      <td className="py-1.5 px-2">
                        {formatCurrency(row.rangeLow)} - {formatCurrency(row.rangeHigh)}
                      </td>
                      <td className="py-1.5 px-2">{row.deltaFromBase >= 0 ? "+" : ""}{formatCurrency(row.deltaFromBase)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Authority Evidence Matrix</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left py-1.5 px-2 text-xs">Authority</th>
                <th className="text-left py-1.5 px-2 text-xs">Topic</th>
                <th className="text-left py-1.5 px-2 text-xs">Last Verified</th>
                <th className="text-left py-1.5 px-2 text-xs">What Changed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {SELF_EMPLOYMENT_EVIDENCE_MATRIX.map((row) => (
                <tr key={row.topic} className="even:bg-slate-50">
                  <td className="py-1.5 px-2 font-semibold">{row.authority}</td>
                  <td className="py-1.5 px-2">
                    <a href={row.officialUrl} target="_blank" rel="noopener noreferrer" className="underline">
                      {row.topic}
                    </a>
                  </td>
                  <td className="py-1.5 px-2">{row.lastVerified}</td>
                  <td className="py-1.5 px-2">{row.whatChanged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {showResult && (
          <section className="bg-white border border-slate-200 shadow-sm rounded-md p-3" aria-label="Sponsored">
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

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Readiness Pack</h2>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            {readinessChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1 mt-3">
            <li>Run baseline estimate with current year-to-date data.</li>
            <li>Review sensitivity profiles and choose reserve policy.</li>
            <li>Transfer quarterly reserve and schedule payment windows.</li>
            <li>Assemble filing packet before April deadline.</li>
          </ol>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Distribution Moat</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            {SELF_EMPLOYMENT_SCENARIO_CLUSTERS.map((cluster) => (
              <Link
                key={cluster.slug}
                href={`/self-employment/${cluster.slug}`}
                className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50"
              >
                {cluster.title}
              </Link>
            ))}
            <Link href="/self-employment/se-tax-calculator" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">
              SE Tax Calculator Focus
            </Link>
            <Link href="/self-employment/deductions-guide" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">
              Deductions Planning Focus
            </Link>
            <Link href="/tax/self-employed" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">
              Tax Hub: Self-Employed
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
