import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Malpractice Calculator"
            brandIcon="stethoscope"
            hubPath="/malpractice"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "Settlement", href: "/malpractice/settlement" },
                { label: "Types", href: "/malpractice/types" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
