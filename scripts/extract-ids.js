const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/categories.ts');
const txt = fs.readFileSync(filePath, 'utf8');
const lines = txt.split('\n');
const ids = [];

lines.forEach(l => {
    // Looking for lines like 'car-accident': 'legal',
    const match = l.match(/^\s*['"]([^'"]+)['"]\s*:/);
    if (match) {
        const id = match[1];
        if (id !== 'legal' && id !== 'finance' && id !== 'insurance' && id !== 'family' && id !== 'medical' && id !== 'health') {
            ids.push(id);
        }
    }
});

console.log(JSON.stringify([...new Set(ids)]));
