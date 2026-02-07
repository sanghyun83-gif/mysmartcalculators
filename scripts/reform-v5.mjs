import fs from 'fs';
import path from 'path';

const CALC_DIR = 'app/(calculators)';
const REGISTRY_FILE = 'lib/registry/calculators.ts';

const HUB_CLIENT_TEMPLATE = (id, originalCode) => {
    // 1. Remove recursive imports/exports if script is re-run (Safety Net)
    let cleanedCode = originalCode
        .replace(/import { getCalculatorMeta } from "@\/lib\/registry\/calculators";/g, '')
        .replace(/import dynamic from "next\/dynamic";/g, '')
        .replace(/const id = ".*?";/g, '')
        .replace(/const meta = getCalculatorMeta\(id\);/g, '')
        .replace(/export const metadata = {[\s\S]*?};/g, '')
        .replace(/const HubClient = dynamic\([\s\S]*?\);/g, '');

    // 2. Normalize component name to HubClient
    cleanedCode = cleanedCode
        .replace(/export default function .*?\(\)/, 'export default function HubClient()')
        .replace(/export function .*?\(\)/, 'export default function HubClient()');

    return cleanedCode;
};

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
    console.log("🚀 Starting Perfected V5.0 Reform on Clean Baseline...");

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

        const originalContent = fs.readFileSync(pagePath, 'utf8');

        // Skip if it's already a dynamic page.tsx (Safety Check)
        if (originalContent.includes('dynamic(') && originalContent.includes('import("./HubClient")')) {
            console.log(`[SKIP] ${id} already reformed.`);
            continue;
        }

        console.log(`[PROCESS] Reforming ${id}...`);

        // 1. Create HubClient.tsx with the original logic (cleaned)
        const hubCode = HUB_CLIENT_TEMPLATE(id, originalContent);
        fs.writeFileSync(hubPath, hubCode);

        // 2. Replace page.tsx with the dynamic entry point
        const newPageContent = PAGE_TEMPLATE(id);
        fs.writeFileSync(pagePath, newPageContent);

        count++;
    }

    console.log(`\n✅ Success. ${count} calculators migrated to V5.0 S-Class architecture.`);
}

reform();
