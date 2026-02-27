"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CompoundInterestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Compound Interest Calculator"
      brandIcon="trending-up"
      hubPath="/compound-interest"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by SEC + Federal Reserve 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}

