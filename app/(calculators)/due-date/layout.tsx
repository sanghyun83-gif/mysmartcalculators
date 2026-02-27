"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DueDateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Due Date Calculator"
      brandIcon="baby"
      hubPath="/due-date"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by ACOG + WHO 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
