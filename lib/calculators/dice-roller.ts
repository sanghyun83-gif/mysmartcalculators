export const DICE_ROLLER_2026 = {
  name: "Dice Roller",
  metadata: {
    title: "Dice Roller | 2026 Random Dice Generator",
    description:
      "Roll any number of dice with any number of sides. Supports modifiers, totals, and roll breakdowns.",
    keywords: [
      "dice roller",
      "roll dice",
      "d6",
      "d20",
      "random dice",
      "dice generator",
      "tabletop dice",
    ],
  },
  defaults: {
    dice: 2,
    sides: 6,
    modifier: 0,
  },
  faqs: [
    {
      question: "How do I roll multiple dice at once?",
      answer:
        "Set the dice count, choose the number of sides, and click Roll. The tool returns each die plus the total.",
    },
    {
      question: "What does a modifier do?",
      answer:
        "A modifier adds or subtracts a fixed value from the sum of the dice. For example, 2d6+3 adds 3 to the total.",
    },
    {
      question: "Can I roll a d20 or d100?",
      answer: "Yes. Set sides to 20 for a d20 or 100 for a d100.",
    },
    {
      question: "Is the roller fair?",
      answer:
        "Each die is generated independently with equal probability for every face.",
    },
    {
      question: "What is the average of NdM?",
      answer:
        "The expected average is N * (M + 1) / 2. Add the modifier after that.",
    },
  ],
  sources: [
    { name: "ECMAScript Math.random()", type: "Pseudorandom uniform source" },
    { name: "Discrete uniform distribution", type: "Probability model" },
    { name: "Fair die (uniform distribution)", type: "Model assumption" },
  ],
  review: {
    lastReviewed: "2026-03-17",
    reviewer: "Data Analyst Expert Team",
  },
};

export type DiceRollResult = {
  dice: number;
  sides: number;
  modifier: number;
  rolls: number[];
  sum: number;
  total: number;
  average: number;
  min: number;
  max: number;
};

function clampInt(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(Math.trunc(value), min), max);
}

function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollDice(
  dice: number,
  sides: number,
  modifier: number
): DiceRollResult {
  const safeDice = clampInt(dice, 1, 100);
  const safeSides = clampInt(sides, 2, 1000);
  const safeModifier = clampInt(modifier, -1000, 1000);

  const rolls: number[] = [];
  for (let i = 0; i < safeDice; i += 1) {
    rolls.push(rollDie(safeSides));
  }

  const sum = rolls.reduce((acc, v) => acc + v, 0);
  const total = sum + safeModifier;
  const average = (safeDice * (safeSides + 1)) / 2 + safeModifier;
  const min = safeDice * 1 + safeModifier;
  const max = safeDice * safeSides + safeModifier;

  return {
    dice: safeDice,
    sides: safeSides,
    modifier: safeModifier,
    rolls,
    sum,
    total,
    average,
    min,
    max,
  };
}
