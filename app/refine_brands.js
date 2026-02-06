
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '(calculators)');

function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => {
        return fs.statSync(path.join(srcPath, file)).isDirectory();
    });
}

function toTitleCase(str) {
    return str.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function extractName(calcPath, calcName) {
    // 1. Try HubClient SITE or h1
    const hubPath = path.join(calcPath, 'HubClient.tsx');
    if (fs.existsSync(hubPath)) {
        const content = fs.readFileSync(hubPath, 'utf8');

        // Match SITE object name
        // const SITE = { name: "Alimony Calculator" ... }
        const siteNameMatch = /name:\s*["']([^"']+)["']/;
        if (siteNameMatch.test(content)) return siteNameMatch.exec(content)[1];

        // Match h1
        const h1Match = /<h1[^>]*>([^<]+)<\</h1>/;
        if (h1Match.test(content)) {
            let title = h1Match.exec(content)[1];
            // Remove spans if any inside h1, simplified
            title = title.replace(/<[^>]+>/g, '');
            return title.trim();
        }
    }

    // 2. Fallback to directory name
    return toTitleCase(calcName) + " Calculator";
}

function main() {
    const calcs = getDirectories(ROOT_DIR);
    let fixedCount = 0;

    console.log(`Scanning ${calcs.length} calculators for generic brand names...`);

    calcs.forEach(calcName => {
        const calcPath = path.join(ROOT_DIR, calcName);
        const layoutPath = path.join(calcPath, 'layout.tsx');

        if (fs.existsSync(layoutPath)) {
            let content = fs.readFileSync(layoutPath, 'utf8');

            if (content.includes('brandName="MySmartCalculators"')) {
                const realName = extractName(calcPath, calcName);

                // If the name is SITE.name, we probably can't use it directly in layout (layout is server component?).
                // Wait, if extractName returned "Alimony Calculator", we use that.
                // If it returned "{SITE.name}", that's bad.

                if (realName && !realName.includes('{') && realName.length < 50) {
                    content = content.replace('brandName="MySmartCalculators"', `brandName="${realName}"`);
                    fs.writeFileSync(layoutPath, content, 'utf8');
                    console.log(`[FIXED] ${calcName}: "MySmartCalculators" -> "${realName}"`);
                    fixedCount++;
                } else {
                    // Fallback
                    const fallback = toTitleCase(calcName);
                    content = content.replace('brandName="MySmartCalculators"', `brandName="${fallback}"`);
                    fs.writeFileSync(layoutPath, content, 'utf8');
                    console.log(`[FIXED] ${calcName}: "MySmartCalculators" -> "${fallback}" (Fallback)`);
                    fixedCount++;
                }
            }
        }
    });

    console.log(`\nTotal Layouts Refined: ${fixedCount}`);
}

main();
