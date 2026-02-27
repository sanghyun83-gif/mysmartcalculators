"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function SalaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Salary Calculator"
      brandIcon="banknote"
      hubPath="/salary"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by BLS + DOL 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
