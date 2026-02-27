"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function PregnancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Pregnancy Calculator"
      brandIcon="baby"
      hubPath="/pregnancy"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by ACOG + CDC 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
