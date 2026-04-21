/**
 * Category Mapping for Related Calculators (Core20-only)
 */

export type Category = 'legal' | 'finance' | 'insurance' | 'family' | 'medical' | 'health';

export const CATEGORY_MAP: Record<string, Category> = {
  // Finance core
  'mortgage': 'finance',
  'loan': 'finance',
  'refinance': 'finance',
  'tax': 'finance',
  'self-employment': 'finance',
  'home-afford': 'finance',
  'compound-interest': 'finance',
  'tip': 'finance',
  'percentage': 'finance',
  'scientific': 'finance',
  'time-calculator': 'finance',
  'conversion': 'finance',
  'date': 'finance',
  'age': 'finance',

  // Health / family core
  'bmi': 'health',
  'calorie': 'health',
  'body-fat': 'health',
  'pregnancy': 'family',
  'ovulation': 'family',

  // Legal core
  'workers-comp': 'legal',
};

export const CATEGORY_NAMES: Record<Category, string> = {
  legal: 'Legal & Injury',
  finance: 'Finance & Money',
  insurance: 'Insurance',
  family: 'Family & Life',
  medical: 'Medical',
  health: 'Health & Wellness',
};

export const CALCULATOR_NAMES: Record<string, string> = {
  'mortgage': 'Mortgage Calculator',
  'loan': 'Loan Calculator',
  'refinance': 'Refinance Calculator',
  'tax': 'Tax Calculator',
  'self-employment': 'Self Employment Tax Calculator',
  'home-afford': 'Home Affordability Calculator',
  'compound-interest': 'Compound Interest Calculator',
  'tip': 'Tip Calculator',
  'percentage': 'Percentage Calculator',
  'scientific': 'Scientific Calculator',
  'time-calculator': 'Time Calculator',
  'conversion': 'Unit Conversion Calculator',
  'date': 'Date Calculator',
  'age': 'Age Calculator',
  'bmi': 'BMI Calculator',
  'calorie': 'Calorie Calculator',
  'body-fat': 'Body Fat Calculator',
  'pregnancy': 'Pregnancy Calculator',
  'ovulation': 'Ovulation Calculator',
  'workers-comp': 'Workers Comp Calculator',
};

/**
 * Get related calculators for a given calculator
 * Returns up to `count` calculators from the same category (excluding current)
 */
export function getRelatedCalculators(currentCalc: string, count: number = 5): { id: string; name: string }[] {
  const category = CATEGORY_MAP[currentCalc];
  if (!category) return [];

  return Object.entries(CATEGORY_MAP)
    .filter(([id, cat]) => cat === category && id !== currentCalc)
    .map(([id]) => ({ id, name: CALCULATOR_NAMES[id] || id }))
    .slice(0, count);
}

/**
 * Get category info for a calculator
 */
export function getCategoryInfo(calcId: string): { category: Category; name: string } | null {
  const category = CATEGORY_MAP[calcId];
  if (!category) return null;
  return { category, name: CATEGORY_NAMES[category] };
}
