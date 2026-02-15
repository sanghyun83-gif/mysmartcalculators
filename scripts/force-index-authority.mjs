import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Service Account Path (adjusting for script location)
const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

/**
 * 🚀 Authority & Indexing Acceleration Protocol
 * Batch submission for Tier 1 and Tier 2 priority URLs.
 */

const tier1 = [
    '/bmi', '/calorie', '/body-fat', '/pregnancy', '/ovulation', '/due-date',
    '/mortgage', '/loan', '/salary', '/compound-interest', '/pmi', '/dti',
    '/down-payment', '/alimony', '/roth-ira', '/fafsa', '/loan-payoff',
    '/scientific', '/percentage', '/gpa', '/age', '/grade', '/tip',
    '/binary', '/date', '/conversion', '/square-footage',
    '/ssdi', '/va-disability', '/unemployment',
    '/car-accident', '/truck-accident', '/wrongful-death', '/malpractice',
    '/slip-and-fall', '/construction-accident', '/bus-accident', '/dog-bite',
    '/nursing-home', '/mesothelioma', '/camp-lejeune', '/3m-earplug',
    '/tbi', '/ozempic', '/spinal-cord', '/talcum-powder', '/social-media', '/roundup'
];

const tier2 = [
    '/workers-comp', '/child-support', '/disability', '/social-security',
    '/1099-tax', '/auto-insurance', '/business-insurance', '/capital-gains',
    '/commercial-auto', '/crypto-tax', '/health-insurance', '/life-insurance',
    '/commercial-insurance', '/contractor-insurance', '/cyber-insurance',
    '/eo-insurance', '/general-liability', '/professional-liability',
    '/renters-insurance', '/home-afford', '/closing-cost', '/refinance',
    '/401k-growth', '/annuity', '/estate-tax', '/estimated-tax',
    '/freelance-tax', '/gift-tax', '/heloc', '/hsa', '/pension', '/student-loan',
    '/afff', '/atrazine', '/benzone', '/depo-provera', '/firefighting-foam',
    '/hernia-mesh', '/nec', '/suboxone', '/trazadone', '/weight-loss-drugs',
    '/auto-loan', '/boat-loan', '/business-loan', '/cd', '/credit-card',
    '/interest', '/personal-loan', '/mortgage-payoff', '/savings', '/salary-hourly',
    '/category/legal', '/category/finance', '/category/insurance',
    '/category/medical', '/category/family', '/category/health'
];

const corePages = ['/', '/about', '/contact', '/privacy', '/terms'];

// Combine for the daily quota (max 200)
const priorityBatch = [
    ...corePages,
    ...tier1,
    ...tier2
];

const DRY_RUN = process.env.DRY_RUN === 'true';

const urlsToIndex = [...new Set(priorityBatch)].slice(0, 200).map(p => `${BASE_URL}${p}`);

async function forceIndex() {
    console.log(`🚀 Starting Force-Push: ${urlsToIndex.length} Institutional URLs...`);
    if (DRY_RUN) console.log('🧪 [DRY RUN MODE] No actual API calls will be made.');

    if (!fs.existsSync(KEY_FILE)) {
        console.error(`❌ Error: Service account file not found at ${KEY_FILE}`);
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({ version: 'v3', auth });

    let success = 0;
    let failed = 0;

    for (let i = 0; i < urlsToIndex.length; i++) {
        const url = urlsToIndex[i];
        try {
            if (!DRY_RUN) {
                await indexing.urlNotifications.publish({
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED',
                    },
                });
            }
            console.log(`[${i + 1}/${urlsToIndex.length}] ✅ ${DRY_RUN ? 'Matched' : 'Pushed'}: ${url}`);
            success++;
        } catch (error) {
            console.error(`[${i + 1}/${urlsToIndex.length}] ❌ Failed: ${url} -> ${error.message}`);
            failed++;
            if (error.message.includes('Quota exceeded')) {
                console.warn('⚠️  Quota exceeded. Stopping for today.');
                break;
            }
        }
        // Small delay to avoid hitting rate limits
        await new Promise(resolve => setTimeout(resolve, 150));
    }

    console.log(`\n🏆 Acceleration Batch Complete: ${success} succeeded, ${failed} failed.`);
}

forceIndex().catch(console.error);
