"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DiceRollerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Dice Roller"
      brandIcon="calculator"
      hubPath="/dice-roller"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Independent roll per die"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
