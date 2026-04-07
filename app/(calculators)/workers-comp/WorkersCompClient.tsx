"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck } from "lucide-react";
import {
  STATE_WC_DATA,
  calculateWorkersComp,
  formatCurrency,
  getBodyPartsList,
  getStatesList,
  parseFormattedNumber,
  type WorkersCompResult,
} from "@/lib/calculators/workers-comp";
import {
  WORKERS_COMP_STATE_EVIDENCE,
  getWorkersCompEvidenceByCode,
  getWorkersCompStateSlug,
} from "@/lib/workers-comp/evidence";
import { sendGaEvent } from "@/lib/analytics/ga";

type WeeklyPayoutRow = {
  week: number;
  status: "Waiting" | "Payable";
  grossBenefit: number;
  netBenefit: number;
  cumulativeNet: number;
};

type SettlementSummary = {
  grossLow: number;
  grossHigh: number;
  netLow: number;
  netHigh: number;
  discountImpact: number;
};

type TimelineRow = {
  stage: string;
  dateIso: string;
  action: string;
  status: "milestone" | "warning" | "review";
};

type SensitivityRow = {
  label: string;
  impairmentPercent: number;
  attorneyFeePercent: number;
  futureMedicalReserve: number;
  discountRate: number;
  netLow: number;
  netHigh: number;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const DISABILITY_TYPES = [
  { id: "ttd", label: "TTD (Temporary Total Disability)", factor: 1 },
  { id: "tpd", label: "TPD (Temporary Partial Disability)", factor: 0.65 },
  { id: "ppd", label: "PPD (Permanent Partial Disability)", factor: 0.9 },
  { id: "ptd", label: "PTD (Permanent Total Disability)", factor: 1.2 },
] as const;

const FAQS = [
  {
    question: "How is workers comp benefit calculated in this model?",
    answer:
      "Weekly benefit starts from average weekly wage times state replacement rate, then applies state maximum and minimum caps.",
  },
  {
    question: "How does the lifecycle simulator help decision-making?",
    answer:
      "It converts your claim into a dated timeline: injury, waiting period, retroactive trigger, MMI, and valuation checkpoints.",
  },
  {
    question: "What does the sensitivity lab show?",
    answer:
      "It stress-tests attorney fee, impairment, medical reserve, and discount rate so you can see range drift before negotiations.",
  },
  {
    question: "Is the state evidence matrix official?",
    answer:
      "Each row links to a state agency portal and includes last-verified date plus internal change memo for model governance.",
  },
  {
    question: "Can I export and share results?",
    answer:
      "Yes. You can export weekly schedule CSV, generate a print-ready PDF, and share a permalink with your current inputs.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. This is an educational planning model. Final claim value depends on state statute, evidence quality, and legal review.",
  },
] as const;

const RETROACTIVE_TRIGGER_DAYS = 21;

function cleanDigits(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function addDays(baseDate: Date, days: number): Date {
  const copy = new Date(baseDate);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function toHumanDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function buildWeeklySchedule(args: {
  weeklyBenefit: number;
  waitingDays: number;
  projectedWeeks: number;
  attorneyFeePercent: number;
}): WeeklyPayoutRow[] {
  const { weeklyBenefit, waitingDays, projectedWeeks, attorneyFeePercent } = args;
  const waitingWeeks = Math.ceil(waitingDays / 7);
  const retroactiveEligible = projectedWeeks * 7 >= RETROACTIVE_TRIGGER_DAYS;
  const rows: WeeklyPayoutRow[] = [];
  let cumulativeNet = 0;

  for (let week = 1; week <= projectedWeeks; week += 1) {
    const waitingBlocked = week <= waitingWeeks && !retroactiveEligible;
    const gross = waitingBlocked ? 0 : weeklyBenefit;
    const net = Math.round(gross * (1 - attorneyFeePercent / 100));
    cumulativeNet += net;
    rows.push({ week, status: waitingBlocked ? "Waiting" : "Payable", grossBenefit: gross, netBenefit: net, cumulativeNet });
  }
  return rows;
}

function buildSettlementSummary(args: {
  result: WorkersCompResult;
  disabilityFactor: number;
  impairmentPercent: number;
  futureMedicalReserve: number;
  attorneyFeePercent: number;
  discountRate: number;
  projectedWeeks: number;
}): SettlementSummary {
  const { result, disabilityFactor, impairmentPercent, futureMedicalReserve, attorneyFeePercent, discountRate, projectedWeeks } =
    args;
  const severityFactor = 0.75 + impairmentPercent / 100;
  const grossLowRaw = Math.round(result.settlementLow * disabilityFactor * severityFactor + futureMedicalReserve);
  const grossHighRaw = Math.round(result.settlementHigh * disabilityFactor * severityFactor + futureMedicalReserve);
  const horizonYears = Math.max(projectedWeeks / 52, 0.1);
  const discountFactor = Math.pow(1 + discountRate / 100, horizonYears);
  const grossLow = Math.round(grossLowRaw / discountFactor);
  const grossHigh = Math.round(grossHighRaw / discountFactor);
  return {
    grossLow,
    grossHigh,
    netLow: Math.round(grossLow * (1 - attorneyFeePercent / 100)),
    netHigh: Math.round(grossHigh * (1 - attorneyFeePercent / 100)),
    discountImpact: Math.max(0, grossHighRaw - grossHigh),
  };
}

function buildClaimLifecycle(args: {
  injuryDateIso: string;
  waitingDays: number;
  projectedWeeks: number;
  mmiWeeks: number;
  filingLagDays: number;
}): TimelineRow[] {
  const { injuryDateIso, waitingDays, projectedWeeks, mmiWeeks, filingLagDays } = args;
  const injuryDate = new Date(`${injuryDateIso}T00:00:00`);
  const mmiDate = addDays(injuryDate, Math.max(mmiWeeks, 1) * 7);
  return [
    { stage: "Accident Date", dateIso: toIsoDate(injuryDate), action: "Capture incident details and first medical assessment.", status: "milestone" },
    { stage: "Employer Notice Target", dateIso: toIsoDate(addDays(injuryDate, 1)), action: "Submit employer notice and open carrier claim file.", status: "warning" },
    { stage: "Waiting Period Ends", dateIso: toIsoDate(addDays(injuryDate, waitingDays)), action: "Check first payable replacement week.", status: "review" },
    { stage: "Retroactive Trigger", dateIso: toIsoDate(addDays(injuryDate, RETROACTIVE_TRIGGER_DAYS)), action: "Check if waiting weeks become payable.", status: "milestone" },
    { stage: "State Filing Package Due (Model)", dateIso: toIsoDate(addDays(injuryDate, Math.max(filingLagDays, 1))), action: "Finalize agency packet, wage records, and treating notes.", status: "warning" },
    { stage: "MMI Estimate", dateIso: toIsoDate(mmiDate), action: "Shift from temporary benefits to impairment valuation.", status: "review" },
    { stage: "PPD/PTD Review", dateIso: toIsoDate(addDays(mmiDate, 7)), action: "Recalculate settlement scenarios with updated assumptions.", status: "milestone" },
    { stage: "Projection Horizon End", dateIso: toIsoDate(addDays(injuryDate, projectedWeeks * 7)), action: "Compare payout horizon against negotiation plan.", status: "review" },
  ];
}

function buildSensitivityRows(args: {
  result: WorkersCompResult;
  disabilityFactor: number;
  baseImpairmentPercent: number;
  baseAttorneyFeePercent: number;
  baseFutureMedicalReserve: number;
  baseDiscountRate: number;
  projectedWeeks: number;
}): SensitivityRow[] {
  const { result, disabilityFactor, baseImpairmentPercent, baseAttorneyFeePercent, baseFutureMedicalReserve, baseDiscountRate, projectedWeeks } = args;
  const variants = [
    { label: "Conservative", impairmentPercent: clamp(baseImpairmentPercent - 8, 1, 100), attorneyFeePercent: clamp(baseAttorneyFeePercent + 5, 0, 50), futureMedicalReserve: Math.round(baseFutureMedicalReserve * 1.25), discountRate: clamp(baseDiscountRate + 1.5, 0, 20) },
    { label: "Base", impairmentPercent: baseImpairmentPercent, attorneyFeePercent: baseAttorneyFeePercent, futureMedicalReserve: baseFutureMedicalReserve, discountRate: baseDiscountRate },
    { label: "Upside", impairmentPercent: clamp(baseImpairmentPercent + 8, 1, 100), attorneyFeePercent: clamp(baseAttorneyFeePercent - 4, 0, 50), futureMedicalReserve: Math.round(baseFutureMedicalReserve * 0.85), discountRate: clamp(baseDiscountRate - 1, 0, 20) },
  ];
  return variants.map((variant) => {
    const summary = buildSettlementSummary({
      result,
      disabilityFactor,
      impairmentPercent: variant.impairmentPercent,
      futureMedicalReserve: variant.futureMedicalReserve,
      attorneyFeePercent: variant.attorneyFeePercent,
      discountRate: variant.discountRate,
      projectedWeeks,
    });
    return { ...variant, netLow: summary.netLow, netHigh: summary.netHigh };
  });
}

function downloadCsv(filename: string, header: string[], rows: Array<Array<string | number>>) {
  const csv = [header.join(","), ...rows.map((line) => line.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {FAQS.map((faq) => (
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

type QueryDefaults = {
  stateCode: string;
  weeklyWage: string;
  bodyPart: string;
  disabilityType: (typeof DISABILITY_TYPES)[number]["id"];
  projectedWeeks: string;
  impairmentPercent: string;
  futureMedicalReserve: string;
  attorneyFeePercent: string;
  discountRate: string;
  injuryDate: string;
  mmiWeeks: string;
  filingLagDays: string;
  showResults: boolean;
};

function readInitialQueryDefaults(bodyPartIds: string[]): QueryDefaults {
  const defaults: QueryDefaults = {
    stateCode: "CA",
    weeklyWage: "1200",
    bodyPart: "back",
    disabilityType: "ttd",
    projectedWeeks: "52",
    impairmentPercent: "20",
    futureMedicalReserve: "15000",
    attorneyFeePercent: "15",
    discountRate: "4",
    injuryDate: "2026-01-15",
    mmiWeeks: "26",
    filingLagDays: "30",
    showResults: false,
  };

  if (typeof window === "undefined") return defaults;

  const params = new URLSearchParams(window.location.search);
  const queryState = params.get("s")?.toUpperCase();
  if (queryState && STATE_WC_DATA[queryState]) defaults.stateCode = queryState;

  const queryBody = params.get("body");
  if (queryBody && bodyPartIds.includes(queryBody)) defaults.bodyPart = queryBody;

  const queryDisability = params.get("dtype");
  if (queryDisability && DISABILITY_TYPES.some((type) => type.id === queryDisability)) {
    defaults.disabilityType = queryDisability as (typeof DISABILITY_TYPES)[number]["id"];
  }

  const simpleIntegerFields: Array<{ key: string; apply: (value: string) => void }> = [
    { key: "aww", apply: (value) => { defaults.weeklyWage = value; } },
    { key: "weeks", apply: (value) => { defaults.projectedWeeks = value; } },
    { key: "imp", apply: (value) => { defaults.impairmentPercent = value; } },
    { key: "med", apply: (value) => { defaults.futureMedicalReserve = value; } },
    { key: "fee", apply: (value) => { defaults.attorneyFeePercent = value; } },
    { key: "mmi", apply: (value) => { defaults.mmiWeeks = value; } },
    { key: "lag", apply: (value) => { defaults.filingLagDays = value; } },
  ];
  simpleIntegerFields.forEach(({ key, apply }) => {
    const value = params.get(key);
    if (value && /^\d+$/.test(value)) apply(value);
  });

  const queryDiscount = params.get("dr");
  if (queryDiscount && /^\d+(\.\d+)?$/.test(queryDiscount)) defaults.discountRate = queryDiscount;
  const queryInjuryDate = params.get("id");
  if (queryInjuryDate && /^\d{4}-\d{2}-\d{2}$/.test(queryInjuryDate)) defaults.injuryDate = queryInjuryDate;
  defaults.showResults = params.get("run") === "1";
  return defaults;
}

export default function WorkersCompClient() {
  const startedRef = useRef(false);
  const adRequestedRef = useRef(false);
  const bodyParts = getBodyPartsList();
  const states = getStatesList();
  const queryDefaults = readInitialQueryDefaults(bodyParts.map((part) => part.id));

  const [stateCode, setStateCode] = useState(queryDefaults.stateCode);
  const [weeklyWage, setWeeklyWage] = useState(queryDefaults.weeklyWage);
  const [bodyPart, setBodyPart] = useState(queryDefaults.bodyPart);
  const [disabilityType, setDisabilityType] = useState<(typeof DISABILITY_TYPES)[number]["id"]>(queryDefaults.disabilityType);
  const [projectedWeeks, setProjectedWeeks] = useState(queryDefaults.projectedWeeks);
  const [impairmentPercent, setImpairmentPercent] = useState(queryDefaults.impairmentPercent);
  const [futureMedicalReserve, setFutureMedicalReserve] = useState(queryDefaults.futureMedicalReserve);
  const [attorneyFeePercent, setAttorneyFeePercent] = useState(queryDefaults.attorneyFeePercent);
  const [discountRate, setDiscountRate] = useState(queryDefaults.discountRate);
  const [injuryDate, setInjuryDate] = useState(queryDefaults.injuryDate);
  const [mmiWeeks, setMmiWeeks] = useState(queryDefaults.mmiWeeks);
  const [filingLagDays, setFilingLagDays] = useState(queryDefaults.filingLagDays);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showResults, setShowResults] = useState(queryDefaults.showResults);
  const [showAllEvidence, setShowAllEvidence] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [linkCopyState, setLinkCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const selectedEvidence = getWorkersCompEvidenceByCode(stateCode);
  const disabilityConfig = DISABILITY_TYPES.find((type) => type.id === disabilityType) ?? DISABILITY_TYPES[0];

  const parsedWeeklyWage = parseFormattedNumber(weeklyWage) || 0;
  const parsedProjectedWeeks = Math.max(1, Number(cleanDigits(projectedWeeks)) || 1);
  const parsedImpairmentPercent = clamp(Number(cleanDigits(impairmentPercent)) || 1, 1, 100);
  const parsedFutureMedicalReserve = Math.max(0, parseFormattedNumber(futureMedicalReserve) || 0);
  const parsedAttorneyFeePercent = clamp(Number(cleanDigits(attorneyFeePercent)) || 0, 0, 50);
  const parsedDiscountRate = clamp(Number(discountRate) || 0, 0, 20);
  const parsedMmiWeeks = Math.max(1, Number(cleanDigits(mmiWeeks)) || 1);
  const parsedFilingLagDays = Math.max(1, Number(cleanDigits(filingLagDays)) || 1);

  const baseResult = useMemo(() => {
    if (!showResults) return null;
    return calculateWorkersComp(stateCode, Math.max(parsedWeeklyWage, 1), bodyPart);
  }, [showResults, stateCode, parsedWeeklyWage, bodyPart]);

  const settlementSummary = useMemo(() => {
    if (!baseResult) return null;
    return buildSettlementSummary({
      result: baseResult,
      disabilityFactor: disabilityConfig.factor,
      impairmentPercent: parsedImpairmentPercent,
      futureMedicalReserve: parsedFutureMedicalReserve,
      attorneyFeePercent: parsedAttorneyFeePercent,
      discountRate: parsedDiscountRate,
      projectedWeeks: parsedProjectedWeeks,
    });
  }, [
    baseResult,
    disabilityConfig.factor,
    parsedImpairmentPercent,
    parsedFutureMedicalReserve,
    parsedAttorneyFeePercent,
    parsedDiscountRate,
    parsedProjectedWeeks,
  ]);

  const payoutSchedule = useMemo(() => {
    if (!baseResult) return [];
    return buildWeeklySchedule({
      weeklyBenefit: baseResult.weeklyBenefit,
      waitingDays: baseResult.waitingPeriod,
      projectedWeeks: parsedProjectedWeeks,
      attorneyFeePercent: parsedAttorneyFeePercent,
    });
  }, [baseResult, parsedProjectedWeeks, parsedAttorneyFeePercent]);

  const timelineRows = useMemo(() => {
    if (!baseResult) return [];
    return buildClaimLifecycle({
      injuryDateIso: injuryDate,
      waitingDays: baseResult.waitingPeriod,
      projectedWeeks: parsedProjectedWeeks,
      mmiWeeks: parsedMmiWeeks,
      filingLagDays: parsedFilingLagDays,
    });
  }, [baseResult, injuryDate, parsedProjectedWeeks, parsedMmiWeeks, parsedFilingLagDays]);

  const sensitivityRows = useMemo(() => {
    if (!baseResult) return [];
    return buildSensitivityRows({
      result: baseResult,
      disabilityFactor: disabilityConfig.factor,
      baseImpairmentPercent: parsedImpairmentPercent,
      baseAttorneyFeePercent: parsedAttorneyFeePercent,
      baseFutureMedicalReserve: parsedFutureMedicalReserve,
      baseDiscountRate: parsedDiscountRate,
      projectedWeeks: parsedProjectedWeeks,
    });
  }, [
    baseResult,
    disabilityConfig.factor,
    parsedImpairmentPercent,
    parsedAttorneyFeePercent,
    parsedFutureMedicalReserve,
    parsedDiscountRate,
    parsedProjectedWeeks,
  ]);

  const capRanking = useMemo(
    () =>
      Object.entries(STATE_WC_DATA)
        .map(([code, data]) => ({
          code,
          name: data.name,
          max: data.maxWeeklyBenefit,
          rate: data.ttdRate,
          waiting: data.waitingPeriod,
        }))
        .sort((a, b) => b.max - a.max),
    [],
  );

  function buildPermalink() {
    const params = new URLSearchParams({
      s: stateCode,
      aww: String(Math.max(parsedWeeklyWage, 0)),
      body: bodyPart,
      dtype: disabilityType,
      weeks: String(parsedProjectedWeeks),
      imp: String(parsedImpairmentPercent),
      med: String(parsedFutureMedicalReserve),
      fee: String(parsedAttorneyFeePercent),
      dr: String(parsedDiscountRate),
      id: injuryDate,
      mmi: String(parsedMmiWeeks),
      lag: String(parsedFilingLagDays),
      run: "1",
    });
    return `${window.location.origin}/workers-comp?${params.toString()}`;
  }

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendGaEvent("calculator_start", { calculator_id: "workers-comp", route: "/workers-comp" });
  }

  function handleCalculate() {
    trackStart();
    setShowResults(true);
    setHasCalculated(true);
    window.history.replaceState(null, "", buildPermalink());
    sendGaEvent("calculator_complete", {
      calculator_id: "workers-comp",
      route: "/workers-comp",
      state: stateCode,
      aww: Math.max(parsedWeeklyWage, 0),
      disability_type: disabilityType,
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
    setStateCode("CA");
    setWeeklyWage("1200");
    setBodyPart("back");
    setDisabilityType("ttd");
    setProjectedWeeks("52");
    setImpairmentPercent("20");
    setFutureMedicalReserve("15000");
    setAttorneyFeePercent("15");
    setDiscountRate("4");
    setInjuryDate("2026-01-15");
    setMmiWeeks("26");
    setFilingLagDays("30");
    setShowAdvanced(false);
    setShowResults(false);
    setHasCalculated(false);
    adRequestedRef.current = false;
    setCopyState("idle");
    setLinkCopyState("idle");
    window.history.replaceState(null, "", "/workers-comp");
  }

  async function copySummary() {
    if (!baseResult || !settlementSummary) return;
    const text = [
      `State: ${baseResult.stateName}`,
      `Weekly benefit: ${formatCurrency(baseResult.weeklyBenefit)}`,
      `Gross settlement range: ${formatCurrency(settlementSummary.grossLow)} - ${formatCurrency(settlementSummary.grossHigh)}`,
      `Net settlement range: ${formatCurrency(settlementSummary.netLow)} - ${formatCurrency(settlementSummary.netHigh)}`,
      `MMI estimate: ${parsedMmiWeeks} weeks`,
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
      setLinkCopyState("copied");
      setTimeout(() => setLinkCopyState("idle"), 1500);
      sendGaEvent("cta_click", { calculator_id: "workers-comp", route: "/workers-comp", cta: "copy_permalink" });
    } catch {
      setLinkCopyState("failed");
    }
  }

  async function sharePermalink() {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: "Workers Comp Estimate",
          text: "Workers compensation scenario and timeline estimate",
          url: buildPermalink(),
        });
        sendGaEvent("cta_click", { calculator_id: "workers-comp", route: "/workers-comp", cta: "native_share" });
      } catch {
        await copyPermalink();
      }
      return;
    }
    await copyPermalink();
  }

  function exportScheduleCsv() {
    if (payoutSchedule.length === 0) return;
    downloadCsv(
      `workers-comp-${stateCode.toLowerCase()}-weekly-schedule.csv`,
      ["Week", "Status", "Gross Benefit", "Net Benefit", "Cumulative Net"],
      payoutSchedule.map((row) => [row.week, row.status, row.grossBenefit, row.netBenefit, row.cumulativeNet]),
    );
    sendGaEvent("cta_click", { calculator_id: "workers-comp", route: "/workers-comp", cta: "export_csv" });
  }

  function exportPdf() {
    if (!baseResult || !settlementSummary) return;
    const rowsHtml = timelineRows
      .map((row) => `<tr><td>${row.stage}</td><td>${toHumanDate(row.dateIso)}</td><td>${row.action}</td></tr>`)
      .join("");
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;
    const html = `
      <html><head><title>Workers Comp Estimate Report</title><style>
      body{font-family:Arial,sans-serif;margin:24px;color:#0f172a;} table{width:100%;border-collapse:collapse;margin-top:16px;}
      th,td{border:1px solid #cbd5e1;padding:8px;text-align:left;font-size:12px;} th{background:#f1f5f9;}
      </style></head><body>
      <h1>Workers Comp Estimate Report</h1>
      <p><strong>State:</strong> ${baseResult.stateName}</p>
      <p><strong>Weekly Benefit:</strong> ${formatCurrency(baseResult.weeklyBenefit)}</p>
      <p><strong>Gross Settlement:</strong> ${formatCurrency(settlementSummary.grossLow)} - ${formatCurrency(settlementSummary.grossHigh)}</p>
      <p><strong>Net Settlement:</strong> ${formatCurrency(settlementSummary.netLow)} - ${formatCurrency(settlementSummary.netHigh)}</p>
      <table><thead><tr><th>Lifecycle Stage</th><th>Date</th><th>Action</th></tr></thead><tbody>${rowsHtml}</tbody></table>
      </body></html>`;
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    sendGaEvent("cta_click", { calculator_id: "workers-comp", route: "/workers-comp", cta: "export_pdf" });
  }

  const visibleEvidenceRows = showAllEvidence ? WORKERS_COMP_STATE_EVIDENCE : WORKERS_COMP_STATE_EVIDENCE.slice(0, 12);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1"><Calculator className="w-4 h-4 text-blue-600" /><h1 className="text-2xl font-bold">Workers Comp Calculator</h1></div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider"><ShieldCheck size={14} className="text-blue-600" />Verified by state agencies + lifecycle assumptions + evidence matrix</div>
      </header>
      <section className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Claim Inputs</h2>
              <div className="space-y-3">
                <select value={stateCode} onFocus={trackStart} onChange={(event) => setStateCode(event.target.value)} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm">{states.map((state) => (<option key={state.code} value={state.code}>{state.name} (Max {formatCurrency(state.maxBenefit)}/wk)</option>))}</select>
                <input type="text" inputMode="decimal" value={weeklyWage} onFocus={trackStart} onChange={(event) => setWeeklyWage(String(parseFormattedNumber(event.target.value)))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm" />
                <div className="grid grid-cols-2 gap-2">
                  <select value={bodyPart} onChange={(event) => setBodyPart(event.target.value)} className="h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm">{bodyParts.map((part) => (<option key={part.id} value={part.id}>{part.name}</option>))}</select>
                  <select value={disabilityType} onChange={(event) => setDisabilityType(event.target.value as (typeof DISABILITY_TYPES)[number]["id"])} className="h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm">{DISABILITY_TYPES.map((type) => (<option key={type.id} value={type.id}>{type.label}</option>))}</select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" value={injuryDate} onChange={(event) => setInjuryDate(event.target.value)} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm" />
                  <input type="text" value={projectedWeeks} onChange={(event) => setProjectedWeeks(cleanDigits(event.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm" placeholder="Projected weeks" />
                </div>
                <button type="button" onClick={() => setShowAdvanced((prev) => !prev)} className="text-xs px-2 py-1 rounded border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700">{showAdvanced ? "Hide Advanced Inputs" : "Show Advanced Inputs (overdrive)"}</button>
                {showAdvanced ? <div className="space-y-2 rounded-md border border-slate-200 bg-slate-50 p-3"><div className="grid grid-cols-2 gap-2"><input value={impairmentPercent} onChange={(event) => setImpairmentPercent(cleanDigits(event.target.value))} className="h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Impairment %" /><input value={attorneyFeePercent} onChange={(event) => setAttorneyFeePercent(cleanDigits(event.target.value))} className="h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Attorney fee %" /><input value={futureMedicalReserve} onChange={(event) => setFutureMedicalReserve(cleanDigits(event.target.value))} className="h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Future medical reserve" /><input value={discountRate} onChange={(event) => setDiscountRate(event.target.value.replace(/[^0-9.]/g, ""))} className="h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Discount rate %" /><input value={mmiWeeks} onChange={(event) => setMmiWeeks(cleanDigits(event.target.value))} className="h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="MMI weeks" /><input value={filingLagDays} onChange={(event) => setFilingLagDays(cleanDigits(event.target.value))} className="h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Filing lag days" /></div><input type="range" min={0} max={50} step={1} value={parsedAttorneyFeePercent} onChange={(event) => setAttorneyFeePercent(event.target.value)} className="w-full" /><input type="range" min={1} max={100} step={1} value={parsedImpairmentPercent} onChange={(event) => setImpairmentPercent(event.target.value)} className="w-full" /></div> : null}
                <button onClick={handleCalculate} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm">Calculate Workers Comp</button>
                <div className="grid grid-cols-2 gap-2"><button onClick={resetInputs} className="h-9 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50">Reset Inputs</button><button onClick={() => { void copySummary(); }} className="h-9 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100">{copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy Failed" : "Copy Result"}</button></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Result</h2>{!baseResult || !settlementSummary ? <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">Enter values and click Calculate Workers Comp.</div> : <><div className="grid grid-cols-1 md:grid-cols-4 gap-2"><div className="p-3 rounded-md border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase text-emerald-700">Weekly Benefit</div><div className="text-2xl font-black text-emerald-900">{formatCurrency(baseResult.weeklyBenefit)}</div></div><div className="p-3 rounded-md border border-slate-200 bg-slate-100"><div className="text-[10px] uppercase text-slate-600">Gross Settlement</div><div className="text-lg font-black text-slate-900">{formatCurrency(settlementSummary.grossLow)} - {formatCurrency(settlementSummary.grossHigh)}</div></div><div className="p-3 rounded-md border border-blue-200 bg-blue-50"><div className="text-[10px] uppercase text-blue-700">Net Settlement</div><div className="text-lg font-black text-blue-900">{formatCurrency(settlementSummary.netLow)} - {formatCurrency(settlementSummary.netHigh)}</div></div><div className="p-3 rounded-md border border-slate-200 bg-white"><div className="text-[10px] uppercase text-slate-600">Discount Impact</div><div className="text-lg font-black text-slate-900">{formatCurrency(settlementSummary.discountImpact)}</div></div></div><div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3"><button onClick={() => { void copyPermalink(); }} className="h-9 rounded-md border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50">{linkCopyState === "copied" ? "Link Copied" : linkCopyState === "failed" ? "Link Failed" : "Copy Permalink"}</button><button onClick={() => { void sharePermalink(); }} className="h-9 rounded-md border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50">Share Result</button><button onClick={exportScheduleCsv} className="h-9 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100">Export CSV</button><button onClick={exportPdf} className="h-9 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100">Export PDF</button></div></>}</div>{hasCalculated ? <section className="rounded-md border border-slate-200 bg-white p-3" aria-label="Sponsored"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Sponsored</p><ins className="adsbygoogle block min-h-[90px] w-full" style={{ display: "block" }} data-ad-client="ca-pub-6678501910155801" data-ad-slot="3103400321" data-ad-format="auto" data-full-width-responsive="true" /></section> : null}
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Claim Lifecycle Simulator</h3><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead className="bg-slate-100 border-b border-slate-300"><tr><th className="text-left py-1.5 px-2 text-xs text-slate-700">Stage</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Date</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Action</th></tr></thead><tbody className="divide-y divide-slate-200">{timelineRows.map((row) => (<tr key={`${row.stage}-${row.dateIso}`} className="even:bg-slate-50"><td className="py-1.5 px-2 font-semibold text-slate-700">{row.stage}</td><td className="py-1.5 px-2 text-slate-700">{toHumanDate(row.dateIso)}</td><td className="py-1.5 px-2 text-slate-700">{row.action}</td></tr>))}</tbody></table></div></div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Settlement Sensitivity Lab</h3><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead className="bg-slate-100 border-b border-slate-300"><tr><th className="text-left py-1.5 px-2 text-xs text-slate-700">Profile</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Impairment</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Fee</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Medical Reserve</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Discount</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Net Range</th></tr></thead><tbody className="divide-y divide-slate-200">{sensitivityRows.map((row) => (<tr key={row.label} className="even:bg-slate-50"><td className="py-1.5 px-2 font-semibold text-slate-700">{row.label}</td><td className="py-1.5 px-2 text-slate-700">{row.impairmentPercent}%</td><td className="py-1.5 px-2 text-slate-700">{row.attorneyFeePercent}%</td><td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.futureMedicalReserve)}</td><td className="py-1.5 px-2 text-slate-700">{row.discountRate}%</td><td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.netLow)} - {formatCurrency(row.netHigh)}</td></tr>))}</tbody></table></div></div>
          </div>
        </div>
      </section>
      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h2 className="text-base font-bold text-slate-900 mb-2">State Evidence Matrix (50 states + DC)</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead className="bg-slate-100 border-b border-slate-300"><tr><th className="text-left py-1.5 px-2 text-xs text-slate-700">State</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Agency</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">Last Verified</th><th className="text-left py-1.5 px-2 text-xs text-slate-700">What Changed</th></tr></thead><tbody className="divide-y divide-slate-200">{visibleEvidenceRows.map((row) => (<tr key={row.code} className="even:bg-slate-50"><td className="py-1.5 px-2 font-semibold text-slate-700">{row.stateName}</td><td className="py-1.5 px-2 text-slate-700"><a className="underline" href={row.officialUrl} target="_blank" rel="noopener noreferrer">{row.agencyName}</a></td><td className="py-1.5 px-2 text-slate-700">{row.lastVerified}</td><td className="py-1.5 px-2 text-slate-700">{row.changeLog}</td></tr>))}</tbody></table></div><div className="pt-3"><button onClick={() => setShowAllEvidence((prev) => !prev)} className="h-8 px-3 rounded border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50">{showAllEvidence ? "Show Top 12" : "Show All 51 Jurisdictions"}</button></div></section>
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h2 className="text-base font-bold text-slate-900 mb-2">Legal Readiness Pack</h2>{selectedEvidence ? <><p className="text-sm text-slate-700">{selectedEvidence.noticeWindowModel}</p><p className="text-sm text-slate-700">{selectedEvidence.filingWindowModel}</p><ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">{selectedEvidence.requiredDocuments.map((doc) => (<li key={doc}>{doc}</li>))}</ul><ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1">{selectedEvidence.submissionOrder.map((step) => (<li key={step}>{step}</li>))}</ol></> : <p className="text-sm text-slate-600">Select a state to see legal readiness checklist.</p>}</section>
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h2 className="text-base font-bold text-slate-900 mb-2">Distribution Moat</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">{capRanking.slice(0, 9).map((state) => (<Link key={state.code} className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href={`/workers-comp/${getWorkersCompStateSlug(state.code)}`}>{state.name} workers comp page</Link>))}</div></section>
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h2 className="text-base font-bold text-slate-900 mb-2">Related Core20 Tools</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm"><Link className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href="/loan">Loan Calculator</Link><Link className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href="/tax">Tax Calculator</Link><Link className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href="/refinance">Refinance Calculator</Link><Link className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href="/mortgage">Mortgage Calculator</Link><Link className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href="/home-afford">Home Affordability</Link><Link className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50" href="/compound-interest">Compound Interest</Link></div></section>
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4"><h3 className="text-sm font-bold text-slate-900 mb-2">Sources and Review</h3><ul className="text-sm text-slate-700 space-y-1 list-disc pl-5"><li><a className="underline" href="https://www.dol.gov/general/topic/workcomp" target="_blank" rel="noopener noreferrer">U.S. Department of Labor workers compensation overview</a></li><li><a className="underline" href="https://www.ncci.com" target="_blank" rel="noopener noreferrer">NCCI reference data</a></li>{selectedEvidence ? <li><a className="underline" href={selectedEvidence.officialUrl} target="_blank" rel="noopener noreferrer">{selectedEvidence.stateName} official agency page</a></li> : null}</ul><p className="text-sm text-slate-700 mt-2">Reviewer: Sam Park. Last reviewed: 2026-03-21.</p></section>
      </article>
      <section className="bg-slate-50 pb-14 border-y border-slate-200"><div className="max-w-7xl mx-auto px-6"><h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Workers Comp FAQ</h3><FAQSection /></div></section>
    </main>
  );
}
