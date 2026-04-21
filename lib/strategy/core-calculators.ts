export const CORE_CALCULATOR_IDS = [
  "mortgage",
  "loan",
  "refinance",
  "tax",
  "self-employment",
  "home-afford",
  "compound-interest",
  "tip",
  "percentage",
  "scientific",
  "time-calculator",
  "conversion",
  "date",
  "age",
  "bmi",
  "calorie",
  "body-fat",
  "pregnancy",
  "ovulation",
  "workers-comp",
] as const;

export type CoreCalculatorId = (typeof CORE_CALCULATOR_IDS)[number];

export const CORE_CALCULATOR_SET = new Set<string>(CORE_CALCULATOR_IDS);

export function isCoreCalculatorId(id: string): id is CoreCalculatorId {
  return CORE_CALCULATOR_SET.has(id);
}

export const NON_CALCULATOR_SEGMENTS = new Set<string>([
  "",
  "about",
  "privacy",
  "terms",
  "contact",
  "accessibility",
  "calculators",
  "category",
  "sandbox-seo",
  "v3-sandbox",
]);

export function normalizePath(pathname: string): string {
  const cleaned = pathname.split("?")[0].replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
}

export function getFirstSegment(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (normalized === "/") return "";
  return normalized.replace(/^\/+/, "").split("/")[0] ?? "";
}

export function isCoreCalculatorPath(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  const firstSegment = getFirstSegment(normalized);
  if (!firstSegment) return false;
  if (!isCoreCalculatorId(firstSegment)) return false;
  return normalized === `/${firstSegment}` || normalized.startsWith(`/${firstSegment}/`);
}

export function isLikelyCalculatorPath(pathname: string): boolean {
  const firstSegment = getFirstSegment(pathname);
  if (!firstSegment) return false;
  if (NON_CALCULATOR_SEGMENTS.has(firstSegment)) return false;
  return /^[a-z0-9-]+$/i.test(firstSegment);
}
