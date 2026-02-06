/**
 * add-legal-disclaimer.js
 * Adds LegalDisclaimer component to all calculator result pages
 * Run: node scripts/add-legal-disclaimer.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Hardcoded category map for script (categories.ts is TypeScript)
const categoryKeywords = {
    legal: ['injury', 'accident', 'lawsuit', 'settlement', 'death', 'malpractice', 'liability', 'tort', 'abuse', 'asbestos', 'mesothelioma'],
    medical: ['cancer', 'hip', 'hernia', 'drug', 'fda', 'implant', 'xarelto', 'zantac', 'ozempic', 'disease', 'lung', 'blood'],
    insurance: ['insurance', 'premium', 'workers-comp', 'commercial', 'fleet', 'cyber', 'epli', 'liability', 'business'],
    financial: ['alimony', 'child-support', 'retirement', 'tax', 'estate', 'loan', 'mortgage', 'savings']
};

// Map calculator name to disclaimer type
function getDisclaimerCategory(calcName) {
    if (!calcName) return 'general';
    const name = calcName.toLowerCase();

    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some(kw => name.includes(kw))) {
            return cat;
        }
    }
    return 'legal'; // Default to legal for settlement calculators
}

// Find all calculator page files
function findCalculatorPages() {
    const pages = [];

    function walkDir(dir, calcName = null) {
        if (!fs.existsSync(dir)) return;

        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);

            if (item.isDirectory()) {
                // Check for calculator subdirectory
                if (item.name === 'calculator') {
                    const pagePath = path.join(fullPath, 'page.tsx');
                    if (fs.existsSync(pagePath)) {
                        pages.push({
                            path: pagePath,
                            calcName: calcName,
                            category: getDisclaimerCategory(calcName)
                        });
                    }
                } else if (!['api', 'contact', 'privacy', 'about', 'terms', 'accessibility'].includes(item.name)) {
                    // Recurse into calculator directories
                    walkDir(fullPath, item.name);
                }
            }
        }
    }

    walkDir(APP_DIR);
    return pages;
}

// Check if file already has LegalDisclaimer
function hasDisclaimer(content) {
    return content.includes('LegalDisclaimer') || content.includes('Legal Disclaimer');
}

// Add import statement if not present
function addImport(content) {
    if (content.includes("from '@/components/LegalDisclaimer'") ||
        content.includes('from "@/components/LegalDisclaimer"')) {
        return content;
    }

    // Add import after the first import block
    const importMatch = content.match(/^(import.*['"].*['"];?\r?\n)+/m);
    if (importMatch) {
        const insertPos = importMatch.index + importMatch[0].length;
        return content.slice(0, insertPos) +
            `import { LegalDisclaimer } from "@/components/LegalDisclaimer";\n` +
            content.slice(insertPos);
    }

    return content;
}

// Find the result display section and add disclaimer
function addDisclaimerToResult(content, category) {
    // Look for result && patterns (conditional rendering of result)
    // We want to add the disclaimer inside the result block

    // Pattern 1: Look for closing div of result section before footer
    const patterns = [
        // After result breakdown/summary sections
        /(<\</div>\s*<\</div>\s*\)\})/g,
        // Before FAQ sections  
        /(<\</div>\s*\)\}\s*<\</section>\s*<section.*?FAQ)/gs,
    ];

    // Simple approach: Add before the footer section
    const footerMatch = content.match(/<footer className/);
    if (footerMatch && footerMatch.index) {
        // Find the section before footer that contains result
        const insertPos = content.lastIndexOf('</section>', footerMatch.index);
        if (insertPos > -1) {
            // Check if there's already a disclaimer nearby
            const nearbyContent = content.slice(Math.max(0, insertPos - 500), insertPos);
            if (nearbyContent.includes('LegalDisclaimer') || nearbyContent.includes('Legal Disclaimer')) {
                return content;
            }

            // Insert before the closing section
            return content.slice(0, insertPos) +
                `\n      <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="${category}" /></section>\n` +
                content.slice(insertPos);
        }
    }

    return content;
}

// Process a single file
function processFile(pageInfo) {
    const { path: filePath, calcName, category } = pageInfo;

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Skip if already has disclaimer
        if (hasDisclaimer(content)) {
            return { status: 'skipped', reason: 'already has disclaimer', path: filePath };
        }

        // Add import
        content = addImport(content);

        // Add disclaimer component
        content = addDisclaimerToResult(content, category);

        // Write back
        fs.writeFileSync(filePath, content, 'utf8');

        return { status: 'modified', path: filePath, category };
    } catch (err) {
        return { status: 'error', error: err.message, path: filePath };
    }
}

// Main execution
function main() {
    console.log('🔍 Finding calculator pages...\n');

    const pages = findCalculatorPages();
    console.log(`Found ${pages.length} calculator pages\n`);

    const results = {
        modified: [],
        skipped: [],
        errors: []
    };

    for (const page of pages) {
        const result = processFile(page);

        if (result.status === 'modified') {
            results.modified.push(result);
            console.log(`✅ Modified: ${page.calcName}/calculator (${result.category})`);
        } else if (result.status === 'skipped') {
            results.skipped.push(result);
            console.log(`⏭️  Skipped: ${page.calcName}/calculator`);
        } else {
            results.errors.push(result);
            console.log(`❌ Error: ${page.calcName}/calculator - ${result.error}`);
        }
    }

    console.log('\n📊 Summary:');
    console.log(`   Modified: ${results.modified.length}`);
    console.log(`   Skipped:  ${results.skipped.length}`);
    console.log(`   Errors:   ${results.errors.length}`);
}

main();
