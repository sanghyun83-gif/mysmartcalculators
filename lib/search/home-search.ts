export interface HomeSearchItem {
  id: string;
  name: string;
}

export function getHomeSearchScore(calc: HomeSearchItem, rawQuery: string): number {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return 0;

  const id = calc.id.toLowerCase();
  const name = calc.name.toLowerCase();

  let score = 0;
  if (id === query) score += 200;
  if (name === query) score += 180;
  if (id.startsWith(query)) score += 120;
  if (name.startsWith(query)) score += 100;
  if (id.split("-").includes(query)) score += 90;
  if (name.split(" ").includes(query)) score += 70;
  if (id.includes(query)) score += 60;
  if (name.includes(query)) score += 50;

  // Keep the core tax hub on top when users search for tax.
  if (query === "tax" && id === "tax") score += 500;

  return score;
}
