"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function SquareFootageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Square Footage Calculator"
      brandIcon="layout"
      hubPath="/square-footage"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by ANSI Z765 + BOMA"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
