/**
 * add-subpage-disclaimer.js
 * Adds LegalDisclaimer to all subpages with calculator functionality
 * Targets pages that have useState and weren't hit by the first script
 * Run: node scripts/add-subpage-disclaimer.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Excluded directories
const EXCLUDED = ['api', 'contact', 'privacy', 'about', 'terms', 'accessibility', 'fonts', 'not-found'];

// Category keywords
const categoryKeywords = {
    legal: ['injury', 'accident', 'lawsuit', 'settlement', 'death', 'malpractice', 'tort', 'abuse', 'asbestos', 'mesothelioma', 'wrongful', 'whiplash'],
    medical: ['cancer', 'hip', 'hernia', 'drug', 'fda', 'implant', 'xarelto', 'zantac', 'ozempic', 'disease', 'lung', 'blood'],
    insurance: ['insurance', 'premium', 'workers-comp', 'commercial', 'fleet', 'cyber', 'epli', 'business'],
    financial: ['alimony', 'child-support', 'retirement', 'tax', 'estate', 'loan', 'mortgage', 'savings']
};

function getDisclaimerCategory(calcName) {
    if (!calcName) return 'general';
    const name = calcName.toLowerCase();

    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some(kw => name.includes(kw))) {
            return cat;
        }
    }
    return 'legal';
}

// Check if file has calculator functionality
function hasCalculatorFunctionality(content) {
    return content.includes('useState') &&
        (content.includes('result') || content.includes('Result') ||
            content.includes('calculate') || content.includes('Calculate'));
}

// Check if already has LegalDisclaimer
function hasDisclaimer(content) {
    return content.includes('LegalDisclaimer') ||
        content.includes('Legal Disclaimer');
}

// Add import if not present
function addImport(content) {
    if (content.includes("from '@/components/LegalDisclaimer'") ||
        content.includes('from "@/components/LegalDisclaimer"')) {
        return content;
    }

    const importMatch = content.match(/^(import.*['"].*['"];?\r?\n)+/m);
    if (importMatch) {
        const insertPos = importMatch.index + importMatch[0].length;
        return content.slice(0, insertPos) +
            `import { LegalDisclaimer } from "@/components/LegalDisclaimer";\n` +
            content.slice(insertPos);
    }

    return content;
}

// Add disclaimer before footer
function addDisclaimerComponent(content, category) {
    const footerMatch = content.match(/<footer className/);
    if (footerMatch && footerMatch.index) {
        const insertPos = content.lastIndexOf('</section>', footerMatch.index);
        if (insertPos > -1) {
            const nearbyContent = content.slice(Math.max(0, insertPos - 500), insertPos);
            if (nearbyContent.includes('LegalDisclaimer') || nearbyContent.includes('Legal Disclaimer')) {
                return content;
            }

            return content.slice(0, insertPos) +
                `\n      <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="${category}" /></section>\n` +
                content.slice(insertPos);
        }
    }

    return content;
}

// Find all pages with calculator functionality (excluding already processed /calculator pages)
function findCalculatorSubpages() {
    const pages = [];

    function walkDir(dir, parentName) {
        if (!fs.existsSync(dir)) return;

        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);

            if (item.isDirectory()) {
                if (EXCLUDED.includes(item.name)) continue;

                // Recursively search subdirectories
                const newParent = parentName || item.name;
                walkDir(fullPath, newParent);
            } else if (item.name === 'page.tsx') {
                // Check if this is a /calculator page (already processed)
                if (dir.endsWith('calculator')) continue;

                const content = fs.readFileSync(fullPath, 'utf8');

                if (hasCalculatorFunctionality(content) && !hasDisclaimer(content)) {
                    const relativePath = path.relative(APP_DIR, dir);
                    pages.push({
                        path: fullPath,
                        calcName: parentName || path.basename(dir),
                        relativePath,
                        category: getDisclaimerCategory(parentName || path.basename(dir))
                    });
                }
            }
        }
    }

    walkDir(APP_DIR, null);
    return pages;
}

// Process a single file
function processFile(pageInfo) {
    const { path: filePath, relativePath, category } = pageInfo;

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        if (hasDisclaimer(content)) {
            return { status: 'skipped', reason: 'already has disclaimer', path: filePath };
        }

        content = addImport(content);
        content = addDisclaimerComponent(content, category);

        fs.writeFileSync(filePath, content, 'utf8');

        return { status: 'modified', path: filePath, category, relativePath };
    } catch (err) {
        return { status: 'error', error: err.message, path: filePath };
    }
}

// Main
function main() {
    console.log('🔍 Finding subpages with calculator functionality...\n');

    const pages = findCalculatorSubpages();
    console.log(`Found ${pages.length} pages with calculator functionality\n`);

    const results = { modified: [], skipped: [], errors: [] };

    for (const page of pages) {
        const result = processFile(page);

        if (result.status === 'modified') {
            results.modified.push(result);
            console.log(`✅ Modified: ${page.relativePath}/page.tsx (${result.category})`);
        } else if (result.status === 'skipped') {
            results.skipped.push(result);
            console.log(`⏭️  Skipped: ${page.relativePath}/page.tsx`);
        } else {
            results.errors.push(result);
            console.log(`❌ Error: ${page.relativePath}/page.tsx - ${result.error}`);
        }
    }

    console.log('\n📊 Summary:');
    console.log(`   Modified: ${results.modified.length}`);
    console.log(`   Skipped:  ${results.skipped.length}`);
    console.log(`   Errors:   ${results.errors.length}`);
}

main();
