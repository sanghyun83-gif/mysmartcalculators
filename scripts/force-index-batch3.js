
/**
 * MySmartCalculators Force Indexing - Batch 3 (Final Top-Off)
 * Filling the gap to reach 200/day limit.
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Adjusted path to match where the key file is located (project root)
const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// 20 High-Value Hubs to Maximize Quota
const batch3 = [
    '/18-wheeler',
    '/1099-tax',
    '/abilify',
    '/accutane',
    '/afff',
    '/airbnb-income',
    '/alimony',
    '/asbestos',
    '/birth-injury',
    '/breast-implant',
    '/child-support',
    '/divorce',
    '/dog-bite',
    '/drunk-driving',
    '/elmiron',
    '/hernia-mesh',
    '/talcum-powder',
    '/tylenol',
    '/fentanyl-exposure',
    '/paraquat'
];

const urlsToIndex = batch3.map(p => `${BASE_URL}${p}`);

async function runIndexing() {
    console.log(`🚀 Batch 3: Final Top-Off with ${urlsToIndex.length} High-Propensity URLs...`);

    if (!fs.existsSync(KEY_FILE)) {
        // Fallback check for relative path if running from scripts dir
        const altPath = path.join(__dirname, '../../service-account-2.json');
        if (fs.existsSync(altPath)) {
            // Re-assign is tricky with const, but we just need the right path for auth
            console.log('Found key in alternate path.');
        } else {
            console.error(`❌ Error: service-account-2.json missing at ${KEY_FILE}`);
            // Try one more common location just in case
            if (fs.existsSync('service-account-2.json')) {
                console.log('Found key in CWD.');
            } else {
                process.exit(1);
            }
        }
    }

    // Auth setup
    const auth = new google.auth.GoogleAuth({
        keyFile: fs.existsSync(KEY_FILE) ? KEY_FILE : 'service-account-2.json',
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const indexing = google.indexing({ version: 'v3', auth });

    let success = 0, failed = 0;

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
                console.log('\n🔴 QUOTA EXCEEDED for today. Limit reached.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }

    console.log(`\n🏆 Batch 3 Complete: ${success} succeeded, ${failed} failed.`);
    console.log(`📊 Total Optimized: Now hitting daily limits.`);
}

runIndexing().catch(console.error);
