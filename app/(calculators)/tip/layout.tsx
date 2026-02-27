"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function TipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Tip Calculator"
      brandIcon="coins"
      hubPath="/tip"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by U.S. DOL + Emily Post 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
