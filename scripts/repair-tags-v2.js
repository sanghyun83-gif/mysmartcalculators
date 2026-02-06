const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\Sam\\Downloads\\mysmartcalculators_0202_1\\mysmartcalculators';

const tags = ['Link', 'span', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'header', 'footer', 'main', 'button', 'select', 'input', 'ul', 'li', 'a', 'script', 'br', 'hr', 'img', 'Activity', 'CheckCircle2', 'Gavel', 'Scale', 'Shield', 'ArrowRight', 'AlertTriangle', 'FileText', 'Landmark', 'Users', 'Search', 'TrendingUp', 'ChevronRight', 'Activity', 'CheckCircle2', 'HardHat', 'Beaker', 'MapPin'];

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
            if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk(rootDir);

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let initialContent = content;

        tags.forEach(tag => {
            // Fix cases where a closing tag is missing the opening bracket: "something</p>" -> "something</p>"
            // This regex lookbehind is not supported in all Node versions, so we use a capturing group
            const closingRegex = new RegExp(`([^<])\\/(${tag}(>|\\s+[^>]*>))`, 'g');
            content = content.replace(closingRegex, '$1</$2');

            // Fix cases where there might be spaces: "something  </p>" -> "something</p>"
            const spaceClosingRegex = new RegExp(`\\s+/(${tag}(>|\\s+[^>]*>))`, 'g');
            content = content.replace(spaceClosingRegex, '</$1');
        });

        // Specific fix for mortgage.ts logic
        content = content.replace(/customTaxRate\s+stateData\.avgPropertyTax/g, 'customTaxRate || stateData.avgPropertyTax');
        content = content.replace(/customInsurance\s+stateData\.avgInsurance/g, 'customInsurance || stateData.avgInsurance');

        if (content !== initialContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Repaired tags in: ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
