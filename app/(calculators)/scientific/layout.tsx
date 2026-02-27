"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ScientificLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Scientific Calculator"
      brandIcon="binary"
      hubPath="/scientific"
      accentColorRgb="37, 99, 235"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by IEEE + NIST 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
