import { FlagshipLayout } from "@/components/layout/FlagshipLayout";

export default function AgeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AgeMaster AI"
            brandIcon="hourglass"
            hubPath="/age"
            accentColorRgb="239, 68, 68" // red-500
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "CHRONO ENGINE", href: "/age/calculator" },
                { label: "AGE ACADEMY", href: "/age" },
            ]}
            trustScore="4.9/5 Chronological Precision"
        >
            {children}
        </FlagshipLayout>
    );
}
