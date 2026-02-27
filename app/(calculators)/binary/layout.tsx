"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BinaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Binary Calculator"
      brandIcon="binary"
      hubPath="/binary"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by IEEE + NIST 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
