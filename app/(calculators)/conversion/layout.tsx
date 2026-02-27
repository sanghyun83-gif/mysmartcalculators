"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ConversionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Unit Conversion Calculator"
      brandIcon="ruler"
      hubPath="/conversion"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by NIST + ISO 80000"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
