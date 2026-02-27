import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CalculatorDirectoryPage from "@/components/directory/CalculatorDirectoryPage";
import { CATEGORY_NAMES, Category } from "@/lib/categories";

const BASE_URL = "https://mysmartcalculators.com";
const ALLOWED_CATEGORY_SLUGS: Category[] = ["finance", "insurance", "medical", "family", "health", "legal"];

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ q?: string; category?: string; sort?: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const categorySlug = slug as Category;
  const categoryLabel = CATEGORY_NAMES[categorySlug] || "Category";

  return {
    title: `${categoryLabel} Calculators | MySmartCalculators`,
    description: `Browse ${categoryLabel.toLowerCase()} calculators with search and sorting tools.`,
    alternates: { canonical: `${BASE_URL}/category/${slug}` },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const categorySlug = slug as Category;

  if (!ALLOWED_CATEGORY_SLUGS.includes(categorySlug)) {
    notFound();
  }

  return <CalculatorDirectoryPage searchParams={resolvedSearchParams} forcedCategory={categorySlug} />;
}
