import fs from 'fs';
import path from 'path';

const CALC_DIR = 'app/(calculators)';

const PAGE_TEMPLATE = (id) => `import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "${id}";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function Calc${id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, '')}Page() {
  return <HubClient />;
}
`;

function reform() {
    console.log("🚀 Starting ULTRA-SMART V5.0 Architectural Reform...");

    if (!fs.existsSync(CALC_DIR)) {
        console.error(`Error: ${CALC_DIR} not found.`);
        return;
    }

    const folders = fs.readdirSync(CALC_DIR).filter(f =>
        fs.lstatSync(path.join(CALC_DIR, f)).isDirectory()
    );

    let count = 0;
    for (const id of folders) {
        const pagePath = path.join(CALC_DIR, id, 'page.tsx');
        const hubPath = path.join(CALC_DIR, id, 'HubClient.tsx');

        if (!fs.existsSync(pagePath)) continue;

        let hubCode = "";
        const pageContent = fs.readFileSync(pagePath, 'utf8');

        if (fs.existsSync(hubPath)) {
            // Already has HubClient, let's fix its export if needed
            hubCode = fs.readFileSync(hubPath, 'utf8');

            // Fix: Change named export to default export
            hubCode = hubCode.replace(/export function HubClient\(\)/, 'export default function HubClient()');

            // Fix: Remove any accidental metadata exports that should be in page.tsx
            hubCode = hubCode.replace(/export const metadata[\s\S]*?};/g, '');

            // Fix: Remove recursive imports if they exist (safety)
            hubCode = hubCode.replace(/import { HubClient } from ".\/HubClient";/g, '');
        } else {
            // Legacy mono-file, split it
            hubCode = pageContent
                .replace(/export default function .*?\(\)/, 'export default function HubClient()')
                .replace(/export function .*?\(\)/, 'export default function HubClient()');
        }

        // Add "use client" if missing
        if (!hubCode.trim().startsWith('"use client"')) {
            hubCode = '"use client";\n\n' + hubCode;
        }

        fs.writeFileSync(hubPath, hubCode);
        fs.writeFileSync(pagePath, PAGE_TEMPLATE(id));
        count++;
    }

    console.log(`\n✅ Mission Accomplished. ${count} calculators fully standardized to S-Class V5.0.`);
}

reform();
