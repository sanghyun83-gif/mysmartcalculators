"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Age Calculator"
      brandIcon="clock"
      hubPath="/age"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by WHO + ISO 8601"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
