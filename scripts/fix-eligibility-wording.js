/**
 * fix-eligibility-wording.js
 * Changes "Eligibility" to "Potential Eligibility" or "Pre-qualification"
 * in eligibility pages to reduce legal risk
 * Run: node scripts/fix-eligibility-wording.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all eligibility page files
function findEligibilityPages() {
    const pages = [];

    function walkDir(dir) {
        if (!fs.existsSync(dir)) return;

        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);

            if (item.isDirectory()) {
                if (item.name.includes('eligibility')) {
                    const pagePath = path.join(fullPath, 'page.tsx');
                    if (fs.existsSync(pagePath)) {
                        pages.push({
                            path: pagePath,
                            folder: path.relative(APP_DIR, fullPath)
                        });
                    }
                }
                walkDir(fullPath);
            }
        }
    }

    walkDir(APP_DIR);
    return pages;
}

// Fix wording in file
function fixWording(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changes = 0;

    // Patterns to replace
    const replacements = [
        // H1 title fixes
        { from: />Eligibility Check</g, to: '>Pre-qualification Screening<', desc: 'H1 title' },
        { from: />Eligibility Calculator</g, to: '>Pre-qualification Screening<', desc: 'H1 title' },
        { from: />\s*Check Your Eligibility</g, to: '>Check Your Potential Eligibility<', desc: 'H1/button' },
        { from: />\s*Check Eligibility</g, to: '>Check Potential Eligibility<', desc: 'button' },

        // Description text fixes
        { from: /"Check if you(?:'re| are) eligible/gi, to: '"Check if you may be potentially eligible', desc: 'description' },
        { from: /you are eligible/gi, to: 'you may be potentially eligible', desc: 'result text' },
        { from: /you're eligible/gi, to: 'you may be potentially eligible', desc: 'result text' },
        { from: /You are eligible/g, to: 'You may be potentially eligible', desc: 'result text' },
        { from: /You're eligible/g, to: 'You may be potentially eligible', desc: 'result text' },

        // Metadata fixes
        { from: /Eligibility Check \|/g, to: 'Pre-qualification Screening |', desc: 'metadata' },
        { from: /Eligibility Calculator \|/g, to: 'Pre-qualification Screening |', desc: 'metadata' },
    ];

    for (const rep of replacements) {
        const matches = content.match(rep.from);
        if (matches) {
            content = content.replace(rep.from, rep.to);
            changes += matches.length;
        }
    }

    // Add pre-qualification disclaimer if not present
    if (!content.includes('pre-qualification') && !content.includes('Pre-qualification')) {
        // Add a note after result display
        const disclaimerNote = `\n                <p className="text-sm text-amber-300 mt-4">*This is a preliminary pre-qualification screening only. An attorney will determine actual eligibility.</p>`;

        // Find result section and add note
        if (content.includes('result &&')) {
            // Find the closing of result block and add before it
            const resultEndPattern = /(<\/div>\s*\)\})/;
            if (resultEndPattern.test(content)) {
                content = content.replace(resultEndPattern, disclaimerNote + '\n              $1');
                changes++;
            }
        }
    }

    if (changes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
    }

    return changes;
}

// Main
function main() {
    console.log('🔍 Finding eligibility pages...\n');

    const pages = findEligibilityPages();
    console.log(`Found ${pages.length} eligibility pages\n`);

    let totalChanges = 0;

    for (const page of pages) {
        const changes = fixWording(page.path);
        if (changes > 0) {
            console.log(`✅ Modified: ${page.folder}/page.tsx (${changes} changes)`);
            totalChanges += changes;
        } else {
            console.log(`⏭️  No changes: ${page.folder}/page.tsx`);
        }
    }

    console.log('\n📊 Summary:');
    console.log(`   Pages processed: ${pages.length}`);
    console.log(`   Total changes: ${totalChanges}`);
}

main();
