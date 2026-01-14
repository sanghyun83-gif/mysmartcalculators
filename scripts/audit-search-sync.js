const fs = require('fs');
const path = require('path');

const libDir = 'lib/calculators';
const appDir = 'app/(calculators)';

const libCalcs = fs.readdirSync(libDir)
    .filter(f => f.endsWith('.ts'))
    .map(f => f.replace('.ts', ''))
    .sort();

const appCalcs = fs.readdirSync(appDir)
    .filter(f => {
        const fullPath = path.join(appDir, f);
        return fs.statSync(fullPath).isDirectory();
    })
    .sort();

const missingInApp = libCalcs.filter(x => !appCalcs.includes(x));
const missingInLib = appCalcs.filter(x => !libCalcs.includes(x));

console.log('=== SEARCH SYNC AUDIT ===');
console.log(`lib/calculators count: ${libCalcs.length}`);
console.log(`app/(calculators) count: ${appCalcs.length}`);
console.log('');
console.log(`--- In lib BUT NOT in app (BROKEN SEARCH LINKS): ${missingInApp.length}`);
missingInApp.forEach(x => console.log(`  - ${x}`));
console.log('');
console.log(`--- In app BUT NOT in lib (orphan routes, not in search): ${missingInLib.length}`);
missingInLib.forEach(x => console.log(`  - ${x}`));

// Fail the build if there are broken search links (excluding known orphans)
const knownOrphans = ['category']; // Dynamic routes that are intentionally not in lib
const actualBroken = missingInApp.length;
const actualUnknownOrphans = missingInLib.filter(x => !knownOrphans.includes(x));

if (actualBroken > 0) {
    console.error('');
    console.error('❌ BUILD HALTED: Broken search links detected! Fix before deploying.');
    process.exit(1);
}

if (actualUnknownOrphans.length > 0) {
    console.warn('');
    console.warn('⚠️  WARNING: Unknown orphan routes detected. Consider adding to lib or deleting.');
}

console.log('');
console.log('✅ Search sync check passed.');
