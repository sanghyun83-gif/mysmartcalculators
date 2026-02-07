import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function JetSkiLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Jet Ski Accident"
            brandIcon="waves"
            hubPath="/jet-ski"
            accentColorRgb="217, 119, 6"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "Calculator", href: "/jet-ski/calculator" },
                { label: "Guide", href: "/jet-ski/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
