export type ScientificAngleMode = "deg" | "rad";
export type ScientificUnaryFunction =
  | "sin"
  | "cos"
  | "tan"
  | "log"
  | "ln"
  | "sqrt"
  | "square"
  | "inverse"
  | "none";

export type ScientificBinaryOperator = "+" | "-" | "*" | "/" | "^";

export type ScientificFaq = {
  question: string;
  answer: string;
};

const SCIENTIFIC_FAQS: ScientificFaq[] = [
  {
    question: "What makes a calculator scientific?",
    answer:
      "A scientific calculator supports trigonometric, logarithmic, power, and root operations in addition to basic arithmetic.",
  },
  {
    question: "When should I use degree mode?",
    answer:
      "Use degree mode for most classroom geometry and everyday angle problems where a full circle is 360 degrees.",
  },
  {
    question: "When should I use radian mode?",
    answer:
      "Use radian mode for calculus, higher physics, and any formulas that assume angle input in radians.",
  },
  {
    question: "What is the difference between log and ln?",
    answer:
      "log is base-10 logarithm, while ln is natural logarithm with base e.",
  },
  {
    question: "Why does tan(90 degrees) look unstable?",
    answer:
      "Tangent approaches infinity near odd multiples of 90 degrees, so floating-point output can appear very large or unstable.",
  },
  {
    question: "What happens if I divide by zero?",
    answer:
      "Division by zero is undefined. This calculator returns an error state instead of a misleading numeric result.",
  },
  {
    question: "Can I calculate powers and roots?",
    answer:
      "Yes. Use the power operator for exponents and the square root function for principal root calculations.",
  },
  {
    question: "How many decimal places should I trust?",
    answer:
      "For most practical use, 6 to 10 decimal places are enough. Extra digits may reflect floating-point representation noise.",
  },
  {
    question: "Is this calculator suitable for SAT or ACT practice?",
    answer:
      "The math operations are compatible with common exam workflows, but always confirm your test's official calculator policy.",
  },
  {
    question: "What is IEEE 754 in simple terms?",
    answer:
      "IEEE 754 is the standard most devices use for floating-point number storage and arithmetic behavior.",
  },
  {
    question: "Why can repeated operations create tiny errors?",
    answer:
      "Many decimals cannot be represented exactly in binary, so repeated operations can accumulate rounding differences.",
  },
  {
    question: "Can I use negative numbers in scientific functions?",
    answer:
      "Yes for many functions, but domain limits still apply. For example, square root of a negative real number is not a real output.",
  },
  {
    question: "What does reciprocal mean?",
    answer:
      "Reciprocal is 1 divided by the number. For example, the reciprocal of 4 is 0.25.",
  },
  {
    question: "How should I validate critical results?",
    answer:
      "Cross-check by changing mode, rewriting the expression, or using a second method when accuracy is critical.",
  },
  {
    question: "Does this replace engineering software?",
    answer:
      "No. It is excellent for fast computation and verification, but regulated workflows may require dedicated software and audit trails.",
  },
];

export const SCIENTIFIC_REFERENCE_TABLE = [
  {
    operation: "Sine",
    formula: "sin(theta)",
    note: "Angle mode aware (deg or rad)",
  },
  {
    operation: "Cosine",
    formula: "cos(theta)",
    note: "Angle mode aware (deg or rad)",
  },
  {
    operation: "Tangent",
    formula: "tan(theta)",
    note: "Unstable near 90 deg + k*180",
  },
  {
    operation: "Base-10 Log",
    formula: "log10(x)",
    note: "Requires x > 0",
  },
  {
    operation: "Natural Log",
    formula: "ln(x)",
    note: "Requires x > 0",
  },
  {
    operation: "Power",
    formula: "a^b",
    note: "Binary operation",
  },
];

export const SCIENTIFIC_ENGINE_2026 = {
  id: "scientific",
  name: "Scientific Calculator",
  badge: "Math Engine 2026",
  faqs: SCIENTIFIC_FAQS,
} as const;

// Backward compatibility for legacy imports in older scientific hub files.
export const SCIENTIFIC_2026 = SCIENTIFIC_ENGINE_2026;

export const CALCULATORS = [
  {
    id: "scientific/calculator",
    title: "Scientific Calculator",
    faqs: SCIENTIFIC_FAQS,
  },
] as const;

export const SCIENTIFIC_META = {
  title: "Scientific Calculator 2026 | Precision Math Engine",
  description:
    "Free scientific calculator for trigonometry, logarithms, powers, and roots with degree/radian support and IEEE 754-aware numeric handling.",
  canonical: "https://mysmartcalculators.com/scientific",
} as const;

export function parseNumericInput(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatScientificValue(value: number, decimals: number): string {
  if (!Number.isFinite(value)) return "Undefined";
  return value.toFixed(Math.min(Math.max(decimals, 0), 12));
}

function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}

export function applyUnaryScientificFunction(
  value: number,
  fn: ScientificUnaryFunction,
  angleMode: ScientificAngleMode
): number {
  if (fn === "none") return value;

  const trigInput = angleMode === "deg" ? toRadians(value) : value;

  switch (fn) {
    case "sin":
      return Math.sin(trigInput);
    case "cos":
      return Math.cos(trigInput);
    case "tan":
      return Math.tan(trigInput);
    case "log":
      return value > 0 ? Math.log10(value) : Number.NaN;
    case "ln":
      return value > 0 ? Math.log(value) : Number.NaN;
    case "sqrt":
      return value >= 0 ? Math.sqrt(value) : Number.NaN;
    case "square":
      return Math.pow(value, 2);
    case "inverse":
      return value !== 0 ? 1 / value : Number.NaN;
    default:
      return Number.NaN;
  }
}

export function calculateBinaryOperation(
  a: number,
  b: number,
  operator: ScientificBinaryOperator
): number {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : Number.NaN;
    case "^":
      return Math.pow(a, b);
    default:
      return Number.NaN;
  }
}
