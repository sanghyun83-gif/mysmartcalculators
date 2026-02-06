/**
 * Phase 6: FAQPage Schema Injection Script v2
 * 
 * Injects FAQPage JSON-LD schema into calculator pages that are missing it.
 * Fixed pattern matching to handle </div> endings.
 * 
 * Run: node scripts/inject-faqpage.js
 */

const fs = require('fs');
const path = require('path');

const CALCULATORS_DIR = path.join(__dirname, '../app/(calculators)');
const CALCULATORS_LIB = path.join(__dirname, '../lib/calculators');
const MISSING_LIST = require('./faqpage-missing.json');

let injectedCount = 0;
let skippedCount = 0;
let errorCount = 0;

/**
 * Generate FAQPage JSON-LD script element
 */
function generateFAQPageScript(calcName, faqs) {
    const defaultFaqs = [
        {
            question: `How accurate is the ${calcName.replace(/-/g, ' ')} calculator?`,
            answer: `This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances.`
        },
        {
            question: `Is this ${calcName.replace(/-/g, ' ')} calculator free to use?`,
            answer: `Yes, this calculator is completely free. No registration or personal information required.`
        },
        {
            question: `How often is the ${calcName.replace(/-/g, ' ')} data updated?`,
            answer: `We update our data regularly to reflect 2026 rates and regulations.`
        },
        {
            question: `Can I rely on these ${calcName.replace(/-/g, ' ')} results for financial decisions?`,
            answer: `This calculator provides estimates for educational purposes. For important financial decisions, consult with a qualified professional.`
        }
    ];

    const faqData = faqs && faqs.length > 0 ? faqs : defaultFaqs;

    const mainEntityJson = faqData.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
        }
    }));

    return `

            {/* FAQPage Schema - Auto-injected by Phase 6 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: ${JSON.stringify(mainEntityJson, null, 24).split('\n').join('\n                        ')}
                    })
                }}
            />`;
}

/**
 * Try to load FAQs from lib/calculators/[calcName].ts
 */
function loadFaqsFromLib(calcName) {
    const libPath = path.join(CALCULATORS_LIB, `${calcName}.ts`);
    if (!fs.existsSync(libPath)) return null;

    try {
        const content = fs.readFileSync(libPath, 'utf-8');

        // Match FAQS array - looking for question/answer pairs
        const faqsMatch = content.match(/export\s+const\s+FAQS?\s*=\s*\[([\s\S]*?)\];/i);
        if (!faqsMatch) return null;

        const faqBlock = faqsMatch[1];
        const faqs = [];

        // Extract each question/answer pair using regex
        const itemMatches = faqBlock.match(/\{[^{}]*question[^{}]*answer[^{}]*\}/gi);
        if (!itemMatches) return null;

        for (const item of itemMatches.slice(0, 4)) {
            const qMatch = item.match(/question:\s*["'`]([^"'`]+)["'`]/i);
            const aMatch = item.match(/answer:\s*["'`]([^"'`]+)["'`]/i);

            if (qMatch && aMatch) {
                faqs.push({
                    question: qMatch[1],
                    answer: aMatch[1]
                });
            }
        }

        return faqs.length >= 2 ? faqs : null;
    } catch (e) {
        return null;
    }
}

/**
 * Find the main component file (page.tsx or CalculatorClient.tsx)
 */
function findComponentFile(calcDir) {
    const pagePath = path.join(calcDir, 'calculator', 'page.tsx');
    const clientPath = path.join(calcDir, 'calculator', 'CalculatorClient.tsx');

    // Check if page.tsx has "use client" - if so, it's the main component
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
    if (content.includes('FAQPage') || content.includes('"@type": "FAQPage"') || content.includes("'@type': 'FAQPage'")) {
        return 'already_has';
    }

    // Load FAQs from lib if available
    const faqs = loadFaqsFromLib(calcName);
    const faqScript = generateFAQPageScript(calcName, faqs);

    // Pattern 1: Fragment ending </> 
    // return ( ... </> ); }
    const fragmentPattern = /(\s*)<\/>\s*\);\s*\}\s*$/;

    // Pattern 2: Div ending </div>
    // return ( ... </div> ); }
    const divPattern = /(\s*)(<\</div>)\s*\);\s*\}\s*$/;

    // Pattern 3: Main</section ending </main> or </section>
    const mainPattern = /(\s*)(<\/(?:main|section)>)\s*\);\s*\}\s*$/;

    if (fragmentPattern.test(content)) {
        content = content.replace(fragmentPattern, faqScript + '\n$1</>\n    );\n}\n');
        fs.writeFileSync(filePath, content);
        return 'success-fragment';
    }

    if (divPattern.test(content)) {
        content = content.replace(divPattern, faqScript + '\n$1$2\n    );\n}\n');
        fs.writeFileSync(filePath, content);
        return 'success-div';
    }

    if (mainPattern.test(content)) {
        content = content.replace(mainPattern, faqScript + '\n$1$2\n    );\n}\n');
        fs.writeFileSync(filePath, content);
        return 'success-main';
    }

    // If no pattern matches, try to find return statement end
    // More flexible pattern: find the last ); } in the file
    const flexPattern = /(\n\s*)(\);\s*\}\s*)$/;
    if (flexPattern.test(content)) {
        // Find the position of last closing tag before );
        const lastDivMatch = content.lastIndexOf('</div>');
        const lastFragMatch = content.lastIndexOf('</>');
        const lastMainMatch = content.lastIndexOf('</main>');
        const lastSecMatch = content.lastIndexOf('</section>');

        const insertPos = Math.max(lastDivMatch, lastFragMatch, lastMainMatch, lastSecMatch);

        if (insertPos > 0) {
            // Determine what tag it is and find the actual position after it
            let tagEnd = insertPos;
            if (lastDivMatch === insertPos) tagEnd += '</div>'.length;
            else if (lastFragMatch === insertPos) tagEnd += '</>'.length;
            else if (lastMainMatch === insertPos) tagEnd += '</main>'.length;
            else if (lastSecMatch === insertPos) tagEnd += '</section>'.length;

            content = content.slice(0, tagEnd) + faqScript + content.slice(tagEnd);
            fs.writeFileSync(filePath, content);
            return 'success-flex';
        }
    }

    return 'no_pattern';
}

// Main execution
console.log('\n=== Phase 6: FAQPage Schema Injection v2 ===\n');
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

    if (result.startsWith('success')) {
        console.log(`✅ [${index + 1}] Injected: ${calcName} (${result})`);
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

console.log('\n=== FAQPage Injection Complete ===');
console.log(`✅ Injected: ${injectedCount}`);
console.log(`⏭️ Skipped (already has): ${skippedCount}`);
console.log(`⚠️ Errors: ${errorCount}`);

const beforeCoverage = 35;
const afterCoverage = beforeCoverage + injectedCount;
const totalCalcs = 248;

console.log(`\n📊 BEFORE: ${beforeCoverage}/${totalCalcs} (${(beforeCoverage / totalCalcs * 100).toFixed(1)}%)`);
console.log(`📊 AFTER: ${afterCoverage}/${totalCalcs} (${(afterCoverage / totalCalcs * 100).toFixed(1)}%)`);
console.log(`📈 IMPROVEMENT: +${(injectedCount / totalCalcs * 100).toFixed(1)}%`);

// Save results
fs.writeFileSync(
    path.join(__dirname, 'faqpage-injection-results.json'),
    JSON.stringify(results, null, 2)
);
console.log('\n✅ Results saved to scripts/faqpage-injection-results.json');
