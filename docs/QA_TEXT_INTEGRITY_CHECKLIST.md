# QA Text Integrity Checklist

## Scope
- `/binary`
- `/conversion`
- `/due-date`

## Common Checks (All Pages)
- [ ] Hard refresh completed (`Ctrl + F5`)
- [ ] No broken characters (`�`, `??`, `짹`, garbled symbols)
- [ ] No merged words/sentences (e.g., `Rulethe`, `Promptthe`)
- [ ] Symbols and notation render correctly (`±`, `10^-n`, `—`, `–`)

## `/binary` Checks
- [ ] Latency labels render correctly: `10^-3 s (ms)`, `10^-9 s (ns)`, `10^-12 s (ps)`
- [ ] `Float Parity` tolerance text is correct (`10^-15 Tolerance`)
- [ ] Paragraph text reads naturally (no broken words like `from`, `rotations`)
- [ ] No malformed characters in benchmark tables

## `/conversion` Checks
- [ ] Precision labels render correctly: `10^-6`, `10^-4`, `10^-2`, `10^-1`
- [ ] `Radix Synchronizer` text is correct (`10^-15 Double-Precision`)
- [ ] `Sèvres` displays correctly
- [ ] `Kibble Balance—a mechanism` sentence renders correctly
- [ ] Percent/deviation symbols display correctly (`±`)

## `/due-date` Checks
- [ ] `±3 days` displays correctly
- [ ] Em dash sentence structure is correct (e.g., `Naegele's Rule—the ...`)
- [ ] No merged trimester-related phrases
- [ ] No broken tokens/symbols in long-form paragraphs

## QA Log (Optional)
- Tester:
- Date:
- Environment:
- Browser:
- Notes:
