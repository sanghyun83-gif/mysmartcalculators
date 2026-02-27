"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Date Calculator"
      brandIcon="clock"
      hubPath="/date"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by ISO 8601 + NIST 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
