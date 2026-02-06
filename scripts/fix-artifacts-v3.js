const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\Sam\\Downloads\\mysmartcalculators_0202_1\\mysmartcalculators';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(filePath));
            }
        } else {
            if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.json')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk(rootDir);

files.forEach(file => {
    try {
        const buffer = fs.readFileSync(file);
        // Force conversion to UTF-8 string, which replaces invalid sequences with U+FFFD ()
        let content = buffer.toString('utf8');
        let changed = false;

        // Pattern 1: Handle the specific corrupted property tax lines in mortgage.ts and similar
        // customTaxRate || stateData.avgPropertyTax -> customTaxRate || stateData.avgPropertyTax
        if (content.match(/customTaxRate\s+stateData\.avgPropertyTax/)) {
            content = content.replace(/customTaxRate\s+stateData\.avgPropertyTax/g, 'customTaxRate || stateData.avgPropertyTax');
            changed = true;
        }
        if (content.match(/customInsurance\s+stateData\.avgInsurance/)) {
            content = content.replace(/customInsurance\s+stateData\.avgInsurance/g, 'customInsurance || stateData.avgInsurance');
            changed = true;
        }

        // Pattern 2: Global cleanup of the REPLACEMENT CHARACTER () that toString('utf8') might have introduced
        // or common corrupted patterns that appear as '??' in Vercel logs.
        if (content.includes('\uFFFD') || content.includes('\u00ef\u00bf\u00bd')) {
            // Replace  with spaces or logical operators based on context if possible, 
            // but usually they were separators like | or || or →
            content = content.replace(/\uFFFD/g, ' ');
            changed = true;
        }

        // Pattern 3: Clean up common logic leaks
        // ??</Link> or ??span> etc.
        if (content.match(/\s+\/(Link|span|div|p|h[1-6]|section|header|footer|main|button|select|input|ul|li|a|script)>/gi)) {
            // Fix cases where ?? was removed and left a space before the tag
            content = content.replace(/\s+(\/(Link|span|div|p|h[1-6]|section|header|footer|main|button|select|input|ul|li|a|script)>)/gi, '$1');
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Universal fixed artifacts in: ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
