import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function MortgageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Mortgage Calculator"
            brandIcon="home"
            hubPath="/mortgage"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-100"
            navLinks={[]}
            trustScore="Verified by Freddie Mac PMMS + FHFA 2026"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
