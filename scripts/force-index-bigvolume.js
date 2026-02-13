/**
 * MySmartCalculators Force Indexing Script - Big Volume S-Class
 * -----------------------------------------------------------
 * Push 11 high-priority calculators to Google Indexing API.
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// ===== 20 AUTHORITY S-CLASS CALCULATORS (PHASE 2) =====
const bigVolumeCalcs = [
    'bmi', 'scientific', 'mortgage', 'percentage', 'gpa',
    'age', 'loan', 'pregnancy', 'calorie', 'grade',
    'tip', 'compound-interest', 'due-date', 'salary', 'body-fat',
    'binary', 'date', 'conversion', 'square-footage', 'ovulation'
];

const subpages = ['calculator']; // Core subpage for all

// Specialized subpages
const extraSubpages = {
    'bmi': ['health-guide'],
    'tip': ['tipping-guide']
};

const urlsToIndex = [];

// Generate full URL list
bigVolumeCalcs.forEach(calc => {
    // Hub page
    urlsToIndex.push(`${BASE_URL}/${calc}`);

    // Standard subpages
    subpages.forEach(sub => {
        urlsToIndex.push(`${BASE_URL}/${calc}/${sub}`);
    });

    // Extra subpages if any
    if (extraSubpages[calc]) {
        extraSubpages[calc].forEach(sub => {
            urlsToIndex.push(`${BASE_URL}/${calc}/${sub}`);
        });
    }
});

async function runIndexing() {
    console.log(`🚀 MySmartCalculators: Starting Force-Push of ${urlsToIndex.length} Big Volume S-Class URLs...`);

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account.json missing.');
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
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
                console.log('\n🔴 QUOTA EXCEEDED for today. Stopping.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }

    console.log(`\n🏆 Big Volume Batch Complete: ${success} succeeded, ${failed} failed.`);
}

runIndexing().catch(console.error);
