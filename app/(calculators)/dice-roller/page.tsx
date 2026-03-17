import { getCalculatorMeta } from "@/lib/registry/calculators";
import { DICE_ROLLER_2026 } from "@/lib/calculators/dice-roller";
import DiceRollerClient from "./DiceRollerClient";

const id = "dice-roller";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || DICE_ROLLER_2026.metadata.title,
  description: meta?.description || DICE_ROLLER_2026.metadata.description,
  keywords: DICE_ROLLER_2026.metadata.keywords,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/dice-roller",
  },
};

export default function DiceRollerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Dice Roller",
        description: meta?.description || DICE_ROLLER_2026.metadata.description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Roll Dice",
        description: "Roll one or more dice with custom sides and modifiers.",
        step: [
          { "@type": "HowToStep", text: "Choose the number of dice." },
          { "@type": "HowToStep", text: "Set sides per die and optional modifier." },
          { "@type": "HowToStep", text: "Click Roll Dice to generate results." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mysmartcalculators.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "General",
            item: "https://mysmartcalculators.com/calculators",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dice Roller",
            item: meta?.canonical || "https://mysmartcalculators.com/dice-roller",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: DICE_ROLLER_2026.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <DiceRollerClient />
    </>
  );
}
