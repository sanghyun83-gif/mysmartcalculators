"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function OvulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Ovulation Calculator"
      brandIcon="heart"
      hubPath="/ovulation"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by ACOG + WHO 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}