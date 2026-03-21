import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATE_WC_DATA, formatCurrency } from "@/lib/calculators/workers-comp";
import {
  WORKERS_COMP_STATE_EVIDENCE,
  parseWorkersCompStateCodeFromSlug,
} from "@/lib/workers-comp/evidence";

type PageProps = {
  params: Promise<{ state: string }>;
};

function getStateDataFromSlug(slug: string) {
  const code = parseWorkersCompStateCodeFromSlug(slug);
  if (!code) return null;
  const state = STATE_WC_DATA[code];
  const evidence = WORKERS_COMP_STATE_EVIDENCE.find((row) => row.code === code);
  if (!state || !evidence) return null;
  return { code, state, evidence };
}

export async function generateStaticParams() {
  return Object.keys(STATE_WC_DATA).map((code) => ({ state: code.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateData = getStateDataFromSlug(stateSlug);
  if (!stateData) {
    return { title: "Workers Comp State Page" };
  }

  const canonical = `https://mysmartcalculators.com/workers-comp/${stateSlug.toLowerCase()}`;
  const title = `${stateData.state.name} Workers Comp Rates 2026 | Claim Planning Guide`;
  const description = `Official-link state guide for ${stateData.state.name} workers compensation. Includes max weekly benefit ${formatCurrency(stateData.state.maxWeeklyBenefit)} and readiness checklist.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function WorkersCompStatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const stateData = getStateDataFromSlug(stateSlug);
  if (!stateData) notFound();

  const topStates = Object.entries(STATE_WC_DATA)
    .map(([code, data]) => ({ code, ...data }))
    .sort((a, b) => b.maxWeeklyBenefit - a.maxWeeklyBenefit)
    .slice(0, 8);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-8 space-y-4">
        <h1 className="text-3xl font-black">{stateData.state.name} Workers Comp 2026</h1>
        <p className="text-sm text-slate-700">
          Max weekly benefit: <strong>{formatCurrency(stateData.state.maxWeeklyBenefit)}</strong>, waiting period{" "}
          <strong>{stateData.state.waitingPeriod} days</strong>, replacement rate{" "}
          <strong>{Math.round(stateData.state.ttdRate * 100)}%</strong>.
        </p>

        <div className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-bold uppercase tracking-tight text-slate-800 mb-2">Official Source</h2>
          <p className="text-sm text-slate-700 mb-1">{stateData.evidence.agencyName}</p>
          <a className="text-sm underline text-blue-700" href={stateData.evidence.officialUrl} target="_blank" rel="noopener noreferrer">
            {stateData.evidence.officialUrl}
          </a>
          <p className="text-xs text-slate-500 mt-2">Last verified: {stateData.evidence.lastVerified}</p>
          <p className="text-xs text-slate-600 mt-1">{stateData.evidence.changeLog}</p>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-bold uppercase tracking-tight text-slate-800 mb-2">Legal Readiness Snapshot</h2>
          <p className="text-sm text-slate-700 mb-2">{stateData.evidence.noticeWindowModel}</p>
          <p className="text-sm text-slate-700 mb-2">{stateData.evidence.filingWindowModel}</p>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            {stateData.evidence.requiredDocuments.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={`/workers-comp?s=${stateData.code}&run=1`}
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Open Calculator With {stateData.code}
          </Link>
          <Link href="/workers-comp/state-rates" className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Compare All State Rates
          </Link>
        </div>

        <section className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-bold uppercase tracking-tight text-slate-800 mb-3">Top State Clusters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
            {topStates.map((row) => (
              <Link key={row.code} href={`/workers-comp/${row.code.toLowerCase()}`} className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">
                {row.name}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
