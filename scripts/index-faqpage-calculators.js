/**
 * Phase 6: Index FAQPage Calculator Pages
 * ----------------------------------------
 * Push all calculator pages (with FAQPage schema) to Google Indexing API
 * Daily quota: 200 URLs
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// Get list of calculators from faqpage injection results
const RESULTS_FILE = path.join(__dirname, 'faqpage-injection-v3-results.json');
let calculators = [];

if (fs.existsSync(RESULTS_FILE)) {
    const results = require(RESULTS_FILE);
    calculators = results.success || [];
    console.log(`📋 Loaded ${calculators.length} calculators from injection results`);
} else {
    // Fallback: scan directories
    const CALC_DIR = path.join(__dirname, '../app/(calculators)');
    calculators = fs.readdirSync(CALC_DIR)
        .filter(f => fs.statSync(path.join(CALC_DIR, f)).isDirectory())
        .filter(f => fs.existsSync(path.join(CALC_DIR, f, 'calculator')));
    console.log(`📋 Scanned ${calculators.length} calculator directories`);
}

// Generate calculator page URLs
const urlsToIndex = calculators.slice(0, 200).map(calc => `${BASE_URL}/${calc}/calculator`);

async function runIndexing() {
    console.log(`\n🚀 Phase 6: Indexing ${urlsToIndex.length} Calculator Pages with FAQPage Schema\n`);

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account-2.json missing at:', KEY_FILE);
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const indexing = google.indexing({ version: 'v3', auth });

    let success = 0, failed = 0;
    const startTime = Date.now();

    for (let i = 0; i < urlsToIndex.length; i++) {
        const url = urlsToIndex[i];
        try {
            await indexing.urlNotifications.publish({
                requestBody: { url, type: 'URL_UPDATED' }
            });
            console.log(`[${i + 1}/${urlsToIndex.length}] ✅ ${url}`);
            success++;
        } catch (error) {
            console.error(`[${i + 1}/${urlsToIndex.length}] ❌ ${url} -> ${error.message}`);
            failed++;
            if (error.message.includes('Quota exceeded')) {
                console.log('\n🔴 QUOTA EXCEEDED for today. Stopping.');
                break;
            }
        }
        // Rate limit: 200ms between requests
        await new Promise(r => setTimeout(r, 200));
    }

    const elapsed = Math.round((Date.now() - startTime) / 1000);

    console.log('\n=== Phase 6 Indexing Complete ===');
    console.log(`✅ Success: ${success}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⏱️ Time: ${elapsed}s`);
    console.log(`\n📊 BEFORE: 0 calculator pages indexed with FAQPage`);
    console.log(`📊 AFTER: ${success} calculator pages submitted`);
    console.log(`📈 IMPROVEMENT: +${success} URLs`);
}

runIndexing().catch(console.error);
