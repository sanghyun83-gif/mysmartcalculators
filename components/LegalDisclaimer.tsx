// ============================================
// LEGAL DISCLAIMER COMPONENT
// Displays at bottom of calculator results
// ============================================

import { AlertTriangle } from 'lucide-react';

interface LegalDisclaimerProps {
    category?: 'legal' | 'medical' | 'insurance' | 'financial' | 'general';
}

const disclaimerText = {
    legal: "This estimate is for informational purposes only and does not constitute legal advice. Actual settlement amounts vary significantly based on jurisdiction, evidence, and circumstances. Consult a licensed attorney before making any legal decisions.",
    medical: "This is NOT medical advice. Results are estimates only. Do not delay seeking professional medical treatment based on this information. Consult a licensed healthcare provider for medical decisions.",
    insurance: "This estimate is based on projected 2026 data and industry averages. Actual premiums vary by insurer, location, and individual factors. Consult a licensed insurance agent for accurate quotes.",
    financial: "Results are estimates based on projected formulas and may not reflect current tax laws or regulations. Past performance does not guarantee future results. Consult a licensed financial advisor or CPA.",
    general: "This calculator provides estimates for informational purposes only. Results should not be relied upon for making important decisions. Always consult qualified professionals."
};

export function LegalDisclaimer({ category = 'general' }: LegalDisclaimerProps) {
    return (
        <div className="mt-6 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="text-sm font-semibold text-amber-300 mb-1">Legal Disclaimer</p>
                    <p className="text-sm text-amber-200/80">{disclaimerText[category]}</p>
                    <p className="text-xs text-amber-200/60 mt-2">*Based on estimated 2026 projections. Data may not reflect real-time legislative changes.</p>
                </div>
            </div>
        </div>
    );
}
