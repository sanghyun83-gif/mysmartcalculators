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
        let changed = false;

        // Fix closing tags: "</Link>" or "</Link>" or "</Link>" -> "</Link>"
        tags.forEach(tag => {
            const closingRegex = new RegExp(`\\s+/(${tag}>|${tag}\\s+[^>]*>)`, 'g');
            if (content.match(closingRegex)) {
                content = content.replace(closingRegex, '</$1');
                changed = true;
            }

            // Handle cases without leading space if they got mashed: "Cases</Link>" -> "Cases</Link>"
            // Be careful with paths though! Only if it's a known tag followed by > and looks like it should be a tag.
            const mashRegex = new RegExp(`([^<])\\/(${tag}>)`, 'g');
            if (content.match(mashRegex)) {
                content = content.replace(mashRegex, '$1</$2');
                changed = true;
            }
        });

        // Fix opening tags that might have lost their '<' 
        // e.g. "<Link href=" -> "<Link href="
        // We look for patterns like " Link " at the start of a tag-like structure
        tags.forEach(tag => {
            const openingRegex = new RegExp(`\\s+(${tag}\\s+[^>]*>)`, 'g');
            // This is risky, only apply if we are sure it's inside JSX. 
            // Simple approach: if it's followed by "href=" or "className=" or "key="
            const safeOpeningRegex = new RegExp(`\\s+(${tag}\\s+(href|className|key|type|id|style|onClick)=)`, 'g');
            if (content.match(safeOpeningRegex)) {
                content = content.replace(safeOpeningRegex, '<$1');
                changed = true;
            }
        });

        // Fix the specific "propertyTaxRate = customTaxRate || stateData.avgPropertyTax" issue
        if (content.match(/customTaxRate\s+stateData\.avgPropertyTax/)) {
            content = content.replace(/customTaxRate\s+stateData\.avgPropertyTax/g, 'customTaxRate || stateData.avgPropertyTax');
            changed = true;
        }
        if (content.match(/customInsurance\s+stateData\.avgInsurance/)) {
            content = content.replace(/customInsurance\s+stateData\.avgInsurance/g, 'customInsurance || stateData.avgInsurance');
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Repaired tags in: ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
