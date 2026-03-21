import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function HomeAffordLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Home Affordability"
            brandIcon="home"
            hubPath="/home-afford"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-100"
            navLinks={[]}
            trustScore="Verified by FHFA + CFPB 2026"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
