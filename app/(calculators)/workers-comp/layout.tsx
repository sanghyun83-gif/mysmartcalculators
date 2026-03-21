import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function WorkersCompLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Workers Comp Calculator"
            brandIcon="gavel"
            hubPath="/workers-comp"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-100"
            navLinks={[]}
            trustScore="Verified by State WC Agencies + DOL 2026"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
