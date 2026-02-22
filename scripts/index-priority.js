const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// PRIORITY TARGETS: One-Page Supreme Units
const priorityURLs = [
    `${BASE_URL}/bmi`,
    `${BASE_URL}/calorie`
];

async function run() {
    console.log(`🚀 S-Class Priority Indexing: Starting Push of ${priorityURLs.length} URLs...`);

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account-2.json missing at ' + KEY_FILE);
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const indexing = google.indexing({ version: 'v3', auth });

    let success = 0, failed = 0;

    for (let i = 0; i < priorityURLs.length; i++) {
        const url = priorityURLs[i];
        try {
            await indexing.urlNotifications.publish({
                requestBody: { url, type: 'URL_UPDATED' }
            });
            console.log(`[${i + 1}/${priorityURLs.length}] ✅ ${url}`);
            success++;
        } catch (error) {
            console.error(`[${i + 1}/${priorityURLs.length}] ❌ ${url} -> ${error.message}`);
            failed++;
        }
    }
    console.log(`\n🏆 Priority Push Complete: ${success} succeeded, ${failed} failed.`);
}

run().catch(console.error);
