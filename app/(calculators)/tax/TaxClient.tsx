"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, ShieldCheck } from "lucide-react";
import { sendGaEvent } from "@/lib/analytics/ga";
import {
  TAX_CONSTANTS,
  calculateRefund,
  calculateSelfEmploymentTax,
  calculateTax,
  formatCurrency,
} from "@/lib/calculators/tax";
import { TAX_EVIDENCE_MATRIX, TAX_SCENARIO_CLUSTERS } from "@/lib/tax/evidence";

type TimelineStage = {
  stage: string;
  month: string;
  action: string;
};

type TaxClientProps = {
  focusTitle?: string;
  focusSummary?: string;
  initialValues?: {
    income?: number;
    filingStatus?: string;
    children?: number;
    withholding?: number;
    customDeduction?: number;
    selfEmployedIncome?: number;
    quarterBufferPercent?: number;
  };
};

function cleanNumber(value: string): number {
  return Number(value.replace(/[^0-9.]/g, "")) || 0;
}

function buildTaxTimeline(taxLiability: number, withholding: number, quarterFactor: number): TimelineStage[] {
  const owed = Math.max(0, taxLiability - withholding);
  return [
    { stage: "Income Capture", month: "Jan-Dec", action: "Collect W-2/1099 income, deductible expenses, and withholding totals." },
    { stage: "Quarter Planning", month: "Apr/Jun/Sep/Jan", action: `Quarter estimate target: ${formatCurrency(Math.round((taxLiability * quarterFactor) / 4))} each.` },
    { stage: "Pre-Filing Audit", month: "Jan-Feb", action: "Validate filing status, standard deduction, and credit eligibility." },
    { stage: "Return Filing", month: "By Apr 15", action: owed > 0 ? `Projected payment due: ${formatCurrency(owed)}.` : "Projected refund path detected." },
    { stage: "Post-Filing Review", month: "After filing", action: "Store return package, compare estimate variance, and tune next-year withholding." },
  ];
}

function buildSensitivityProfiles(args: {
  income: number;
  filingStatus: string;
  withholding: number;
  children: number;
  deduction: number;
}) {
  const { income, filingStatus, withholding, children, deduction } = args;
  const profiles = [
    { label: "Conservative", income: income * 0.92, deduction: deduction * 0.9, withholding: withholding * 0.95, children },
    { label: "Base", income, deduction, withholding, children },
    { label: "Upside", income: income * 1.08, deduction: deduction * 1.1, withholding: withholding * 1.05, children: children + 1 },
  ];

  return profiles.map((profile) => {
    const tax = calculateTax(Math.round(profile.income), filingStatus, profile.children, Math.round(profile.deduction));
    const refund = calculateRefund(Math.round(profile.income), filingStatus, Math.round(profile.withholding), profile.children);
    return {
      label: profile.label,
      tax: tax.finalTax,
      effectiveRate: tax.effectiveRate,
      refundOrOwed: refund.refundOrOwed,
      isRefund: refund.isRefund,
    };
  });
}

export default function TaxClient({ focusTitle, focusSummary, initialValues }: TaxClientProps) {
  const pathname = usePathname();
  const routePath = pathname || "/tax";
  const startedRef = useRef(false);
  const [income, setIncome] = useState(String(initialValues?.income ?? 95000));
  const [filingStatus, setFilingStatus] = useState(initialValues?.filingStatus ?? "single");
  const [children, setChildren] = useState(String(initialValues?.children ?? 1));
  const [withholding, setWithholding] = useState(String(initialValues?.withholding ?? 12000));
  const [customDeduction, setCustomDeduction] = useState(String(initialValues?.customDeduction ?? 16100));
  const [selfEmployedIncome, setSelfEmployedIncome] = useState(String(initialValues?.selfEmployedIncome ?? 30000));
  const [quarterBufferPercent, setQuarterBufferPercent] = useState(String(initialValues?.quarterBufferPercent ?? 100));
  const [showResult, setShowResult] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [linkState, setLinkState] = useState<"idle" | "copied" | "failed">("idle");

  const parsedIncome = Math.max(0, cleanNumber(income));
  const parsedChildren = Math.max(0, Math.floor(cleanNumber(children)));
  const parsedWithholding = Math.max(0, cleanNumber(withholding));
  const parsedDeduction = Math.max(0, cleanNumber(customDeduction));
  const parsedSEIncome = Math.max(0, cleanNumber(selfEmployedIncome));
  const quarterFactor = Math.max(0.8, Math.min(1.3, cleanNumber(quarterBufferPercent) / 100));

  const taxResult = useMemo(() => {
    if (!showResult) return null;
    return calculateTax(parsedIncome, filingStatus, parsedChildren, parsedDeduction);
  }, [showResult, parsedIncome, filingStatus, parsedChildren, parsedDeduction]);

  const refundResult = useMemo(() => {
    if (!showResult) return null;
    return calculateRefund(parsedIncome, filingStatus, parsedWithholding, parsedChildren);
  }, [showResult, parsedIncome, filingStatus, parsedWithholding, parsedChildren]);

  const seResult = useMemo(() => calculateSelfEmploymentTax(parsedSEIncome, filingStatus), [parsedSEIncome, filingStatus]);

  const timelineRows = useMemo(() => {
    if (!taxResult) return [];
    return buildTaxTimeline(taxResult.finalTax, parsedWithholding, quarterFactor);
  }, [taxResult, parsedWithholding, quarterFactor]);

  const sensitivityRows = useMemo(() => {
    if (!showResult) return [];
    return buildSensitivityProfiles({
      income: parsedIncome,
      filingStatus,
      withholding: parsedWithholding,
      children: parsedChildren,
      deduction: parsedDeduction,
    });
  }, [showResult, parsedIncome, filingStatus, parsedWithholding, parsedChildren, parsedDeduction]);

  const readinessChecklist = [
    "W-2, 1099-NEC/INT/DIV and prior-year return",
    "Dependents SSN and eligibility records",
    "Deduction support (mortgage interest, SALT, charitable receipts)",
    "Withholding proof (paystubs or payroll records)",
    "Estimated payment confirmations (if applicable)",
  ];

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendGaEvent("calculator_start", { calculator_id: "tax", route: routePath });
  }

  function buildPermalink() {
    const params = new URLSearchParams({
      income: String(Math.round(parsedIncome)),
      status: filingStatus,
      children: String(parsedChildren),
      withholding: String(Math.round(parsedWithholding)),
      deduction: String(Math.round(parsedDeduction)),
      sei: String(Math.round(parsedSEIncome)),
      qbuf: String(Math.round(quarterFactor * 100)),
      run: "1",
    });
    return `${window.location.origin}${routePath}?${params.toString()}`;
  }

  function runCalculation() {
    trackStart();
    setShowResult(true);
    window.history.replaceState(null, "", buildPermalink());
    sendGaEvent("calculator_complete", {
      calculator_id: "tax",
      route: routePath,
      filing_status: filingStatus,
      income: Math.round(parsedIncome),
    });
  }

  async function copySummary() {
    if (!taxResult || !refundResult) return;
    const text = [
      `Federal tax: ${formatCurrency(taxResult.finalTax)}`,
      `Effective rate: ${taxResult.effectiveRate}%`,
      `${refundResult.isRefund ? "Refund" : "Amount owed"}: ${formatCurrency(refundResult.refundOrOwed)}`,
      `Marginal rate: ${taxResult.marginalRate}%`,
      `Permalink: ${buildPermalink()}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("failed");
    }
  }

  async function copyPermalink() {
    try {
      await navigator.clipboard.writeText(buildPermalink());
      setLinkState("copied");
      setTimeout(() => setLinkState("idle"), 1500);
      sendGaEvent("cta_click", { calculator_id: "tax", route: routePath, cta: "copy_permalink" });
    } catch {
      setLinkState("failed");
    }
  }

  function exportCsv() {
    if (!taxResult) return;
    const header = ["Rate", "Taxable Amount", "Tax"];
    const rows = taxResult.bracketBreakdown.map((row) => [`${row.rate * 100}%`, row.taxableAmount, Math.round(row.tax)]);
    const csv = [header.join(","), ...rows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tax-bracket-breakdown.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    sendGaEvent("cta_click", { calculator_id: "tax", route: routePath, cta: "export_csv" });
  }

  function exportPdf() {
    if (!taxResult || !refundResult) return;
    const lineItems = taxResult.bracketBreakdown
      .map((row) => `<tr><td>${(row.rate * 100).toFixed(0)}%</td><td>${formatCurrency(row.taxableAmount)}</td><td>${formatCurrency(Math.round(row.tax))}</td></tr>`)
      .join("");
    const popup = window.open("", "_blank", "width=900,height=700");
    if (!popup) return;
    popup.document.write(`<html><head><title>Tax Estimate</title></head><body><h1>Tax Estimate</h1><p>Final tax: ${formatCurrency(taxResult.finalTax)}</p><p>${refundResult.isRefund ? "Refund" : "Amount owed"}: ${formatCurrency(refundResult.refundOrOwed)}</p><table border="1" cellpadding="6" cellspacing="0"><tr><th>Rate</th><th>Taxable</th><th>Tax</th></tr>${lineItems}</table></body></html>`);
    popup.document.close();
    popup.focus();
    popup.print();
    sendGaEvent("cta_click", { calculator_id: "tax", route: routePath, cta: "export_pdf" });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Calculator className="w-4 h-4 text-emerald-600" />
          <h1 className="text-2xl font-bold">Tax Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-emerald-600" />
          Verified by IRS sources + bracket audit workflow
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
              <h2 className="text-sm font-bold uppercase tracking-tight">Tax Inputs</h2>
              <input value={income} onFocus={trackStart} onChange={(e) => setIncome(e.target.value)} className="w-full h-9 px-2 border border-slate-300 rounded-md text-sm" placeholder="Gross income" />
              <select value={filingStatus} onChange={(e) => setFilingStatus(e.target.value)} className="w-full h-9 px-2 border border-slate-300 rounded-md text-sm">
                {TAX_CONSTANTS.filingStatuses.map((status) => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>
              <div className="grid grid-cols-2 gap-2">
                <input value={children} onChange={(e) => setChildren(e.target.value)} className="h-9 px-2 border border-slate-300 rounded-md text-sm" placeholder="Children" />
                <input value={withholding} onChange={(e) => setWithholding(e.target.value)} className="h-9 px-2 border border-slate-300 rounded-md text-sm" placeholder="Withholding" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input value={customDeduction} onChange={(e) => setCustomDeduction(e.target.value)} className="h-9 px-2 border border-slate-300 rounded-md text-sm" placeholder="Deduction" />
                <input value={selfEmployedIncome} onChange={(e) => setSelfEmployedIncome(e.target.value)} className="h-9 px-2 border border-slate-300 rounded-md text-sm" placeholder="SE income" />
              </div>
              <label className="text-xs font-semibold">Quarter planning buffer ({Math.round(quarterFactor * 100)}%)</label>
              <input type="range" min={80} max={130} step={1} value={Math.round(quarterFactor * 100)} onChange={(e) => setQuarterBufferPercent(e.target.value)} className="w-full" />
              <button onClick={runCalculation} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-bold">Calculate Tax</button>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { void copySummary(); }} className="h-9 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-md text-sm font-semibold">{copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy Failed" : "Copy Result"}</button>
                <button onClick={() => { void copyPermalink(); }} className="h-9 border border-slate-300 bg-white text-slate-700 rounded-md text-sm font-semibold">{linkState === "copied" ? "Link Copied" : linkState === "failed" ? "Link Failed" : "Copy Link"}</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold uppercase tracking-tight mb-3">Tax Result</h2>
              {!taxResult || !refundResult ? (
                <div className="p-3 rounded-md border border-amber-200 bg-amber-50 text-amber-800 font-bold">Enter values and run calculation.</div>
              ) : (
                <>
                  <div className="grid md:grid-cols-4 gap-2">
                    <div className="p-3 rounded-md border border-slate-200 bg-white"><div className="text-[10px] uppercase text-slate-600">Final Tax</div><div className="text-xl font-black">{formatCurrency(taxResult.finalTax)}</div></div>
                    <div className="p-3 rounded-md border border-slate-200 bg-white"><div className="text-[10px] uppercase text-slate-600">Effective Rate</div><div className="text-xl font-black">{taxResult.effectiveRate}%</div></div>
                    <div className="p-3 rounded-md border border-slate-200 bg-white"><div className="text-[10px] uppercase text-slate-600">Marginal Rate</div><div className="text-xl font-black">{taxResult.marginalRate}%</div></div>
                    <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase text-emerald-700">{refundResult.isRefund ? "Refund" : "Amount Owed"}</div><div className="text-xl font-black text-emerald-900">{formatCurrency(refundResult.refundOrOwed)}</div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <button onClick={exportCsv} className="h-9 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-md text-sm font-semibold">Export CSV</button>
                    <button onClick={exportPdf} className="h-9 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-md text-sm font-semibold">Export PDF</button>
                  </div>
                </>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Claim Lifecycle Simulator (Tax Filing Lifecycle)</h3>
              <table className="w-full text-sm border-collapse">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr><th className="text-left py-1.5 px-2 text-xs">Stage</th><th className="text-left py-1.5 px-2 text-xs">Window</th><th className="text-left py-1.5 px-2 text-xs">Action</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {timelineRows.map((row) => (
                    <tr key={row.stage} className="even:bg-slate-50"><td className="py-1.5 px-2 font-semibold">{row.stage}</td><td className="py-1.5 px-2">{row.month}</td><td className="py-1.5 px-2">{row.action}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Settlement Sensitivity Lab (Tax Outcome Range)</h3>
              <table className="w-full text-sm border-collapse">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr><th className="text-left py-1.5 px-2 text-xs">Profile</th><th className="text-left py-1.5 px-2 text-xs">Final Tax</th><th className="text-left py-1.5 px-2 text-xs">Effective Rate</th><th className="text-left py-1.5 px-2 text-xs">Outcome</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sensitivityRows.map((row) => (
                    <tr key={row.label} className="even:bg-slate-50">
                      <td className="py-1.5 px-2 font-semibold">{row.label}</td>
                      <td className="py-1.5 px-2">{formatCurrency(row.tax)}</td>
                      <td className="py-1.5 px-2">{row.effectiveRate}%</td>
                      <td className="py-1.5 px-2">{row.isRefund ? `Refund ${formatCurrency(row.refundOrOwed)}` : `Owed ${formatCurrency(row.refundOrOwed)}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold uppercase tracking-tight mb-3">Self-Employment Tax Snapshot</h3>
              <div className="grid md:grid-cols-3 gap-2 text-sm">
                <div className="p-3 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] uppercase text-slate-600">SE Taxable Earnings</div>
                  <div className="font-black text-slate-900">{formatCurrency(seResult.seTaxableEarnings)}</div>
                </div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] uppercase text-slate-600">Total SE Tax</div>
                  <div className="font-black text-slate-900">{formatCurrency(seResult.totalSETax)}</div>
                </div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">
                  <div className="text-[10px] uppercase text-slate-600">Deductible Half</div>
                  <div className="font-black text-slate-900">{formatCurrency(seResult.deductibleHalf)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Authority Evidence Matrix</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr><th className="text-left py-1.5 px-2 text-xs">Authority</th><th className="text-left py-1.5 px-2 text-xs">Topic</th><th className="text-left py-1.5 px-2 text-xs">Last Verified</th><th className="text-left py-1.5 px-2 text-xs">What Changed</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {TAX_EVIDENCE_MATRIX.map((row) => (
                <tr key={row.topic} className="even:bg-slate-50">
                  <td className="py-1.5 px-2 font-semibold">{row.authority}</td>
                  <td className="py-1.5 px-2"><a href={row.officialUrl} target="_blank" rel="noopener noreferrer" className="underline">{row.topic}</a></td>
                  <td className="py-1.5 px-2">{row.lastVerified}</td>
                  <td className="py-1.5 px-2">{row.whatChanged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Legal Readiness Pack (Tax Filing)</h2>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            {readinessChecklist.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1 mt-3">
            <li>Collect documents and classify by income/credit/deduction.</li>
            <li>Run baseline estimate and compare to withholding.</li>
            <li>Perform sensitivity test before filing decision.</li>
            <li>Prepare quarterly plan if under-withheld.</li>
          </ol>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Distribution Moat</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            {TAX_SCENARIO_CLUSTERS.map((cluster) => (
              <Link key={cluster.slug} href={`/tax/${cluster.slug}`} className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">
                {cluster.title}
              </Link>
            ))}
            <Link href="/tax/brackets" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Tax Brackets Hub</Link>
            <Link href="/tax/refund" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Refund Estimator</Link>
            <Link href="/self-employment" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Self Employment Tax</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
