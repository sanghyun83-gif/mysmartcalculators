/**
 * Phase 6: FAQPage Schema Injection Script v3 (SAFE)
 * 
 * Injects FAQPage JSON-LD schema using ONLY default generic FAQs.
 * No lib parsing - avoids special character issues.
 * 
 * Run: node scripts/inject-faqpage-v3.js
 */

const fs = require('fs');
const path = require('path');

const CALCULATORS_DIR = path.join(__dirname, '../app/(calculators)');
const MISSING_LIST = require('./faqpage-missing.json');

let injectedCount = 0;
let skippedCount = 0;
let errorCount = 0;

/**
 * Generate clean FAQPage JSON-LD script element
 * Uses only default FAQs with safe strings
 */
function generateFAQPageScript(calcName) {
    const displayName = calcName.replace(/-/g, ' ');

    // Simple, safe FAQ strings - no special chars
    const faqScript = `
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the ${displayName} calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this ${displayName} calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the ${displayName} data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these ${displayName} results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />`;

    return faqScript;
}

/**
 * Find the main component file
 */
function findComponentFile(calcDir) {
    const pagePath = path.join(calcDir, 'calculator', 'page.tsx');
    const clientPath = path.join(calcDir, 'calculator', 'CalculatorClient.tsx');

    if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf-8');
        if (content.includes('"use client"') || content.includes("'use client'")) {
            return { path: pagePath, type: 'page-client' };
        }
    }

    if (fs.existsSync(clientPath)) {
        return { path: clientPath, type: 'client' };
    }

    if (fs.existsSync(pagePath)) {
        return { path: pagePath, type: 'page' };
    }

    return null;
}

/**
 * Inject FAQPage into a component file
 */
function injectFAQPage(filePath, calcName) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Skip if already has FAQPage
    if (content.includes('FAQPage') || content.includes('"@type": "FAQPage"')) {
        return 'already_has';
    }

    const faqScript = generateFAQPageScript(calcName);

    // Find the position to insert (before final closing tag)
    // Pattern: Look for the last </> or </div> or </main> or </section> before );
    const lastFragment = content.lastIndexOf('</>');
    const lastDiv = content.lastIndexOf('</div>');
    const lastMain = content.lastIndexOf('</main>');
    const lastSection = content.lastIndexOf('</section>');

    const positions = [
        { pos: lastFragment, len: '</>'.length },
        { pos: lastDiv, len: '</div>'.length },
        { pos: lastMain, len: '</main>'.length },
        { pos: lastSection, len: '</section>'.length }
    ].filter(p => p.pos > 0);

    if (positions.length === 0) {
        return 'no_pattern';
    }

    // Find the last valid closing tag
    const best = positions.reduce((a, b) => a.pos > b.pos ? a : b);

    // Insert before the closing tag
    content = content.slice(0, best.pos) + faqScript + '\n        ' + content.slice(best.pos);

    fs.writeFileSync(filePath, content);
    return 'success';
}

// Main execution
console.log('\n=== Phase 6: FAQPage Schema Injection v3 (SAFE) ===\n');
console.log(`Target: ${MISSING_LIST.length} calculators\n`);

const results = { success: [], skip: [], error: [] };

MISSING_LIST.forEach((calcName, index) => {
    const calcDir = path.join(CALCULATORS_DIR, calcName);

    if (!fs.existsSync(calcDir)) {
        console.log(`⚠️ [${index + 1}] Directory not found: ${calcName}`);
        results.error.push({ calc: calcName, reason: 'no_dir' });
        errorCount++;
        return;
    }

    const componentFile = findComponentFile(calcDir);

    if (!componentFile) {
        console.log(`⚠️ [${index + 1}] No component file: ${calcName}`);
        results.error.push({ calc: calcName, reason: 'no_file' });
        errorCount++;
        return;
    }

    const result = injectFAQPage(componentFile.path, calcName);

    if (result === 'success') {
        console.log(`✅ [${index + 1}] Injected: ${calcName}`);
        results.success.push(calcName);
        injectedCount++;
    } else if (result === 'already_has') {
        console.log(`⏭️ [${index + 1}] Already has FAQPage: ${calcName}`);
        results.skip.push(calcName);
        skippedCount++;
    } else {
        console.log(`⚠️ [${index + 1}] ${result}: ${calcName}`);
        results.error.push({ calc: calcName, reason: result });
        errorCount++;
    }
});

console.log('\n=== FAQPage Injection v3 Complete ===');
console.log(`✅ Injected: ${injectedCount}`);
console.log(`⏭️ Skipped: ${skippedCount}`);
console.log(`⚠️ Errors: ${errorCount}`);

const beforeCoverage = 35;
const afterCoverage = beforeCoverage + injectedCount;
const totalCalcs = 248;

console.log(`\n📊 BEFORE: ${beforeCoverage}/${totalCalcs} (${(beforeCoverage / totalCalcs * 100).toFixed(1)}%)`);
console.log(`📊 AFTER: ${afterCoverage}/${totalCalcs} (${(afterCoverage / totalCalcs * 100).toFixed(1)}%)`);
console.log(`📈 IMPROVEMENT: +${(injectedCount / totalCalcs * 100).toFixed(1)}%`);

fs.writeFileSync(
    path.join(__dirname, 'faqpage-injection-v3-results.json'),
    JSON.stringify(results, null, 2)
);
console.log('\n✅ Results saved to scripts/faqpage-injection-v3-results.json');
