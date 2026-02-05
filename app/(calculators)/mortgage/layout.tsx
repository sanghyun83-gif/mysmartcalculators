import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { SITE } from "@/lib/calculators/mortgage";

export default function MortgageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Detect if we are on the hub page to disable the 'Back' button correctly
    // However, since this is a root layout, it will wrap everything.
    // FlagshipLayout internally handles path detection if we pass the right props.

    return (
        <FlagshipLayout
            brandName="MortgageMaster AI"
            brandIcon="home"
            hubPath="/mortgage"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/mortgage/calculator" },
                { label: "Amortization", href: "/mortgage/amortization" },
                { label: "Affordability", href: "/mortgage/affordability" },
                { label: "Refinance", href: "/mortgage/refinance" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
