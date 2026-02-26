import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CATEGORY_MAP } from "@/lib/categories";

const BASE_URL = "https://mysmartcalculators.com";

type SortMode = "a-z" | "z-a";

export const metadata: Metadata = {
  title: "Calculator Directory | MySmartCalculators",
  description: "Browse all calculators with search and category filters.",
  alternates: { canonical: `${BASE_URL}/calculators` },
};

function normalizeLabel(id: string, name: string): string {
  const trimmed = name.trim();
  const withoutTagline = trimmed.split("|")[0].trim();

  const fromSlug = /^[a-z0-9-]+$/.test(withoutTagline)
    ? withoutTagline
        .split("-")
        .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
        .join(" ")
    : withoutTagline;

  if (fromSlug.toLowerCase().includes("calculator")) return fromSlug;
  if (id === "compound-interest") return "Compound Interest Calculator";
  if (id === "tip") return "Tip Calculator";
  return `${fromSlug} Calculator`;
}

function normalizeSort(value?: string): SortMode {
  return value === "z-a" ? "z-a" : "a-z";
}

export default function CalculatorsPage({
  searchParams,
}: {
  searchParams?: { q?: string; category?: string; sort?: string };
}) {
  const q = (searchParams?.q || "").trim().toLowerCase();
  const category = (searchParams?.category || "").trim().toLowerCase();
  const sort = normalizeSort(searchParams?.sort);

  const all = ALL_CALCULATORS.map((item) => ({
    id: item.id,
    name: normalizeLabel(item.id, item.name),
    category: CATEGORY_MAP[item.id] || "general",
  }));

  const filtered = all.filter((item) => {
    const queryMatch = !q || item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q);
    const categoryMatch = !category || item.category === category;
    return queryMatch && categoryMatch;
  });

  const sorted = [...filtered].sort((a, b) =>
    sort === "z-a" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  );

  const categories = Array.from(new Set(all.map((item) => item.category))).sort((a, b) => a.localeCompare(b));

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Calculator Directory</h1>
        <p className="mt-2 text-sm text-slate-400">Showing {sorted.length} of {all.length} calculators</p>

        <form method="get" className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_auto_auto]">
          <input
            type="search"
            name="q"
            defaultValue={searchParams?.q || ""}
            placeholder="Search calculators"
            className="h-10 rounded-lg border border-slate-700 bg-slate-900/60 px-3 text-sm text-slate-100"
          />
          <select
            name="category"
            defaultValue={searchParams?.category || ""}
            className="h-10 rounded-lg border border-slate-700 bg-slate-900/60 px-3 text-sm text-slate-100"
          >
            <option value="">All categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            name="sort"
            defaultValue={sort}
            className="h-10 rounded-lg border border-slate-700 bg-slate-900/60 px-3 text-sm text-slate-100"
          >
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
          <button type="submit" className="h-10 rounded-lg bg-amber-500 px-4 text-sm font-bold text-black hover:bg-amber-400">
            Apply
          </button>
        </form>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {sorted.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className="rounded-xl border border-slate-700 bg-slate-900/50 px-3 py-3 hover:border-amber-500/40"
            >
              <div className="text-sm font-semibold text-slate-100">{item.name}</div>
              <div className="text-[11px] uppercase tracking-wide text-slate-500 mt-1">{item.category}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
