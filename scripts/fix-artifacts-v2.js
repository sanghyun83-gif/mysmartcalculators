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
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // Pattern 1: Syntax-breaking corrupted tags
        if (content.match(/\?\?\/?(Link|span|div|p|h[1-6]|section|header|footer|main|button|select|input|ul|li|a|script)>/gi)) {
            content = content.replace(/\?\?(\/?(Link|span|div|p|h[1-6]|section|header|footer|main|button|select|input|ul|li|a|script)>)/gi, ' $1');
            changed = true;
        }

        // Pattern 2: Corrupted arrows/separators in text
        // View All</Link> or View All  Link>
        if (content.includes('</Link>')) {
            content = content.replace(/\?\?\</Link>/g, ' →</Link>');
            changed = true;
        }

        // Pattern 3: Corrupted characters between curly braces or variables
        //  { or  $ or } 
        if (content.match(/\?\?\{|\?\?\$|\}\?\?/g)) {
            content = content.replace(/\?\?\{/g, ' {');
            content = content.replace(/\?\?\$/g, ' $');
            content = content.replace(/\}\?\?/g, '} ');
            changed = true;
        }

        // Pattern 4: General   artifacts
        // Check if it's between alphanumeric characters or tags
        // This is more aggressive. Let's see if we can find them.
        if (content.includes(' ')) {
            // Replace any remaining   with a space or dash depending on context
            // If it's between words, maybe it was a dash or bullet.
            content = content.replace(/(\w)\?\?(\w)/g, '$1 - $2');
            content = content.replace(/\?\?/g, ' ');
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Deep fixed artifacts in: ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
