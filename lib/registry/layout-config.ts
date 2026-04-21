/**
 * Layout Ownership Registry (Core20-only)
 * Determines which shell owns a specific route.
 */

export type LayoutShellType = 'LEGACY' | 'S_CLASS' | 'MINIMAL';

export const LAYOUT_CONFIG: Record<string, LayoutShellType> = {
  '/mortgage': 'S_CLASS',
  '/loan': 'S_CLASS',
  '/refinance': 'S_CLASS',
  '/tax': 'S_CLASS',
  '/self-employment': 'S_CLASS',
  '/home-afford': 'S_CLASS',
  '/compound-interest': 'S_CLASS',
  '/tip': 'S_CLASS',
  '/percentage': 'S_CLASS',
  '/scientific': 'S_CLASS',
  '/time-calculator': 'S_CLASS',
  '/conversion': 'S_CLASS',
  '/date': 'S_CLASS',
  '/age': 'S_CLASS',
  '/bmi': 'S_CLASS',
  '/calorie': 'S_CLASS',
  '/body-fat': 'S_CLASS',
  '/pregnancy': 'S_CLASS',
  '/ovulation': 'S_CLASS',
  '/workers-comp': 'S_CLASS',
};

/**
 * Global Shell Resolver
 * Exact or sub-path match (e.g. /mortgage or /mortgage/calculator)
 */
export function getLayoutShellType(pathname: string | null): LayoutShellType {
  if (!pathname) return 'LEGACY';

  const cleanPath = pathname.toLowerCase().split('?')[0].replace(/\/$/, '');
  const normalizedPath = cleanPath === '' ? '/' : cleanPath;

  for (const [route, type] of Object.entries(LAYOUT_CONFIG)) {
    const normalizedRoute = route.toLowerCase().replace(/\/$/, '');
    if (normalizedPath === normalizedRoute || normalizedPath.startsWith(`${normalizedRoute}/`)) {
      return type;
    }
  }

  return 'LEGACY';
}
