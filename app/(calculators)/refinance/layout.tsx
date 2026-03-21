import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function RefinanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Refinance Calculator"
            brandIcon="landmark"
            hubPath="/refinance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-100"
            navLinks={[]}
            trustScore="Verified by Freddie Mac PMMS + CFPB 2026"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
