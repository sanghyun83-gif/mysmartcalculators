
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '(calculators)');
const COMPONENT_IMPORT = '@/components/v3/FlagshipLayout';

// Tailwind Color Map (500 shade to RGB)
const COLORS = {
    slate: '100, 116, 139',
    gray: '107, 114, 128',
    zinc: '113, 113, 122',
    neutral: '115, 115, 115',
    stone: '120, 113, 108',
    red: '239, 68, 68',
    orange: '249, 115, 22',
    amber: '245, 158, 11',
    yellow: '234, 179, 8',
    lime: '132, 204, 22',
    green: '34, 197, 94',
    emerald: '16, 185, 129',
    teal: '20, 184, 166',
    cyan: '6, 182, 212',
    sky: '14, 165, 233',
    blue: '59, 130, 246',
    indigo: '99, 102, 241',
    violet: '139, 92, 246',
    purple: '168, 85, 247',
    fuchsia: '217, 70, 239',
    pink: '236, 72, 153',
    rose: '244, 63, 94'
};

function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => {
        return fs.statSync(path.join(srcPath, file)).isDirectory() && file !== 'category';
    });
}

function detectColor(content) {
    // Look for text-{color}-400/500/600 or bg-{color}-...
    const colorRegex = /(?:text|bg)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:400|500|600)/g;
    const matches = content.match(colorRegex);

    if (matches) {
        const counts = {};
        matches.forEach(m => {
            const color = m.split('-')[1];
            counts[color] = (counts[color] || 0) + 1;
        });
        // Return most frequent color
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }
    return 'blue'; // Default
}

function generateLayout(calcName, color) {
    const rgb = COLORS[color] || COLORS.blue;
    const selectionClass = `selection:bg-${color}-500/30`;

    // Check for common subdirectories
    const calcPath = path.join(ROOT_DIR, calcName);
    const navLinks = [];

    if (fs.existsSync(path.join(calcPath, 'calculator'))) {
        navLinks.push(`{ label: "CALCULATOR", href: "/${calcName}/calculator" }`);
    }
    if (fs.existsSync(path.join(calcPath, 'guide'))) {
        navLinks.push(`{ label: "GUIDE", href: "/${calcName}/guide" }`);
    }
    if (fs.existsSync(path.join(calcPath, 'eligibility'))) {
        navLinks.push(`{ label: "ELIGIBILITY", href: "/${calcName}/eligibility" }`);
    }
    if (fs.existsSync(path.join(calcPath, 'timeline'))) {
        navLinks.push(`{ label: "TIMELINE", href: "/${calcName}/timeline" }`);
    }


    return `import { FlagshipLayout } from "${COMPONENT_IMPORT}";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="MySmartCalculators"
            brandIcon="calculator"
            hubPath="/${calcName}"
            accentColorRgb="${rgb}"
            accentSelectionClass="${selectionClass}"
            navLinks={[
                ${navLinks.join(',\n                ')}
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}`;
}

function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    files.forEach(function (file) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            if (file === 'HubClient.tsx' || file === 'page.tsx') {
                filelist.push(filepath);
            }
        }
    });
    return filelist;
}


function purgeFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Match strict wrapper: <div className="min-h-screen bg-slate-900...">
    // Also match simplified: <div className="min-h-screen">
    const wrapperRegex = /<div\s+className=["'](?:min-h-screen|min-h-screen bg-slate-900)(?:\s+[^"']*)?["']\s*>/;

    if (!wrapperRegex.test(content)) return false;

    // Replace opening
    content = content.replace(wrapperRegex, '<>');

    // Replace closing
    // We assume the closing tag is the last </div> before the end of the return statement.
    const lastDivRegex = /<\/div\s*>\s*(?=\)\s*;?\s*})/g; // Lookahead for ); }

    let match;
    let lastMatchIndex = -1;
    while ((match = lastDivRegex.exec(content)) !== null) {
        lastMatchIndex = match.index;
    }

    if (lastMatchIndex !== -1) {
        content = content.substring(0, lastMatchIndex) + '</>' + content.substring(lastMatchIndex + 6);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`[PURGED] ${path.relative(ROOT_DIR, filePath)}`);
        return true;
    }

    return false;
}

function main() {
    const calcs = getDirectories(ROOT_DIR);
    let injectedCount = 0;
    let purgedCount = 0;

    console.log(`Scanning ${calcs.length} directories for injection...`);

    calcs.forEach(calcName => {
        const calcPath = path.join(ROOT_DIR, calcName);
        const layoutFile = path.join(calcPath, 'layout.tsx');

        // Check if layout MISSING
        if (!fs.existsSync(layoutFile)) {
            // 1. Analyze HubClient
            const hubClientPath = path.join(calcPath, 'HubClient.tsx');
            let color = 'blue';
            if (fs.existsSync(hubClientPath)) {
                const hubContent = fs.readFileSync(hubClientPath, 'utf8');
                color = detectColor(hubContent);
            }

            // 2. Generate layout.tsx
            const layoutContent = generateLayout(calcName, color);
            fs.writeFileSync(layoutFile, layoutContent, 'utf8');
            console.log(`[INJECTED] layout.tsx for ${calcName} (Color: ${color})`);
            injectedCount++;

            // 3. Purge Wrappers (Only if we just injected layout)
            const files = walkSync(calcPath);
            files.forEach(filePath => {
                if (purgeFile(filePath)) {
                    purgedCount++;
                }
            });
        }
    });

    console.log(`\nStats:`);
    console.log(`Layouts Injected: ${injectedCount}`);
    console.log(`Files Purged: ${purgedCount}`);
}

main();
