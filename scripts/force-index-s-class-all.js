/**
 * S-Class v2.1 Upgrade Indexing Script
 * -----------------------------------
 * Push all S-Class upgraded calculator URLs (Hub, Calc, Guide) to Google Indexing API
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

const sClassCalculators = [
    { slug: 'wrongful-death', paths: ['', '/settlement', '/death-case-types'] },
    { slug: 'tbi', paths: ['', '/calculator', '/guide'] },
    { slug: 'ozempic', paths: ['', '/settlement', '/guide'] },
    { slug: 'spinal-cord', paths: ['', '/calculator', '/guide'] },
    { slug: 'nursing-home', paths: ['', '/settlement', '/guide'] },
    { slug: 'dog-bite', paths: ['', '/calculator', '/guide'] },
    { slug: 'car-accident', paths: ['', '/settlement', '/guide'] },
    { slug: 'bus-accident', paths: ['', '/settlement', '/guide'] },
    { slug: 'talcum-powder', paths: ['', '/settlement', '/guide'] },
    { slug: 'social-media', paths: ['', '/settlement', '/guide'] },
    { slug: 'slip-and-fall', paths: ['', '/settlement', '/guide'] },
    { slug: 'malpractice', paths: ['', '/settlement', '/guide'] },
    { slug: 'roundup', paths: ['', '/settlement', '/guide'] },
    { slug: 'mesothelioma', paths: ['', '/injury-settlement', '/guide'] },
    { slug: 'camp-lejeune', paths: ['', '/lejeune-calculator', '/lejeune-guide'] },
];

const urlsToIndex = [];
sClassCalculators.forEach(calc => {
    calc.paths.forEach(p => {
        urlsToIndex.push(`${BASE_URL}/${calc.slug}${p}`);
    });
});

async function runIndexing() {
    console.log(`🚀 Starting S-Class Deep Indexing: ${urlsToIndex.length} Specialized URLs...`);

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

    console.log(`\n🏆 S-Class Batch Complete: ${success} succeeded, ${failed} failed.`);
}

runIndexing().catch(console.error);
