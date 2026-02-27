"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function TimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Time Calculator"
      brandIcon="clock"
      hubPath="/time-calculator"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by NIST + ISO 8601 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}

