const { ALL_CALCULATORS } = require('./lib/all-calculators');
const query = "pregnancy";
const filtered = ALL_CALCULATORS.filter(calc => calc.name.toLowerCase().includes(query.toLowerCase()));
console.log(`Searching for: ${query}`);
console.log(`Matches found: ${filtered.length}`);
filtered.forEach(f => console.log(` - ID: ${f.id}, Name: ${f.name}`));
