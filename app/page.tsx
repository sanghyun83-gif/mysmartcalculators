import Link from "next/link";
import { Cpu, Zap } from "lucide-react";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CALCULATOR_REGISTRY } from "@/lib/registry/calculators";
import { HomeSearch } from "@/components/home/HomeSearch";

const BASE_URL = "https://mysmartcalculators.com";

function normalizeHomeLabel(id: string, name: string): string {
  const trimmed = name.trim();
  const withoutTagline = trimmed.split("|")[0].trim();

  if (/^[a-z0-9-]+$/.test(withoutTagline)) {
    return withoutTagline
      .split("-")
      .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
      .join(" ");
  }

  if (!withoutTagline.toLowerCase().includes("calculator")) {
    if (id === "compound-interest") return "Compound Interest Calculator";
    if (id === "tip") return "Tip Calculator";
  }

  return withoutTagline;
}

export default function HomePage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const initialQuery = typeof searchParams?.q === "string" ? searchParams.q : "";
  const sortedCalculators = [...ALL_CALCULATORS].sort((a, b) => a.name.localeCompare(b.name));
  const displayCalculators = sortedCalculators.map((calc) => ({
    id: calc.id,
    name: normalizeHomeLabel(calc.id, calc.name),
  }));
  const totalCalculators = displayCalculators.length;
  const displayNameById = new Map(displayCalculators.map((calc) => [calc.id, calc.name]));
  const featuredCalculators = Object.values(CALCULATOR_REGISTRY)
    .filter((calc) => calc.tier === 1 && displayNameById.has(calc.id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 20)
    .map((calc) => ({
      id: calc.id,
      name: displayNameById.get(calc.id) || normalizeHomeLabel(calc.id, calc.name),
    }));

  const query = initialQuery.trim().toLowerCase();
  const searchResults = query
    ? displayCalculators.filter(
        (calc) => calc.name.toLowerCase().includes(query) || calc.id.toLowerCase().includes(query)
      )
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "MySmartCalculators",
        url: BASE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "MySmartCalculators",
        url: BASE_URL,
        logo: `${BASE_URL}/og-main.png`,
      },
    ],
  };

  const stats = [
    {
      label: "Calculation Accuracy",
      value: "99.8%",
      detail: "Methodology and source references",
      link: "/about#methodology",
    },
    {
      label: "Active Calculators",
      value: `${totalCalculators}+`,
      detail: "Live calculator pages",
    },
    {
      label: "Coverage",
      value: "Categories",
      detail: "Legal, Finance, Insurance, Health",
    },
    {
      label: "Updated Data",
      value: "2026",
      detail: "Sources and methodology",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <Cpu className="w-3 h-3" />
            <span>Last Calculator Update: 2026-02-26</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            2026 Official <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Calculator Hub
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Practical calculators for legal, finance, insurance, and health decisions.
            {` ${totalCalculators}+ tools with clear estimates and result-focused workflows for 2026.`}
          </p>

          <HomeSearch initialQuery={initialQuery} calculators={displayCalculators} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-[0.3em] mb-6">
            <Zap className="w-4 h-4" />
            <span>Featured Calculators</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredCalculators.map((feat) => (
              <Link
                key={feat.id}
                href={`/${feat.id}`}
                className="group p-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
              >
                <div className="text-white font-bold text-sm mb-1 group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                  {feat.name}
                </div>
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Featured</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {query && (
        <section id="search-results" className="max-w-7xl mx-auto px-4 pb-16">
          <div className="mb-4 text-xs uppercase tracking-widest text-slate-400">
            Search Results ({searchResults.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {searchResults.map((calc) => (
              <Link
                key={`search-${calc.id}`}
                href={`/${calc.id}`}
                className="px-3 py-2 rounded-lg border border-slate-700 bg-slate-900/40 text-sm text-slate-200 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                {calc.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-slate-900/50 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="min-h-[132px] flex flex-col justify-start text-center md:text-left">
              <div className="min-h-[88px] mb-2 flex flex-col justify-start items-center md:items-start">
                <span className="text-4xl font-extrabold text-white leading-[0.95]">
                  {stat.value}
                </span>
                <div className="h-4 mt-1">
                  {stat.link ? (
                    <Link
                      href={stat.link}
                      className="text-[10px] font-bold text-amber-400 underline underline-offset-2 hover:text-amber-300"
                    >
                      source
                    </Link>
                  ) : (
                    <span className="invisible text-[10px]">source</span>
                  )}
                </div>
              </div>
              <div className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.detail}</div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-10 text-center text-xs text-slate-400">
          <span>Evidence & Transparency: </span>
          <Link href="/about#methodology" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
            Methodology
          </Link>
          <span> | </span>
          <Link href="/about#update-log" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
            Update Log
          </Link>
        </div>
      </section>
    </div>
  );
}
