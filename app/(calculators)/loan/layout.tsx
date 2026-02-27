"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function LoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlagshipLayout
      brandName="Loan Calculator"
      brandIcon="banknote"
      hubPath="/loan"
      accentColorRgb="59, 130, 246"
      accentSelectionClass="selection:bg-blue-100"
      navLinks={[]}
      trustScore="Verified by CFPB + Federal Reserve 2026"
      lightMode={true}
    >
      {children}
    </FlagshipLayout>
  );
}
