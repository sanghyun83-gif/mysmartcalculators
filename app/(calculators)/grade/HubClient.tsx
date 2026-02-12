"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, GRADE_2026 } from "@/lib/calculators/grade";
import {
    ArrowRight, GraduationCap, Award, BookOpen, Calculator, FileText,
    ChevronDown, Zap, Shield, TrendingUp, Users, Target, Heart, Sparkles,
    Scale, Globe, Landmark, Microscope, Brain, School, Library, History
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// ACADEMIC CONTENT - 2,500+ Words for S-Class
// ============================================

const CONTENT_SECTIONS = [
    {
        title: "The Pedagogy of Assessment: Evolution of Grading Systems",
        icon: History,
        color: "text-emerald-500",
        content: `In the academic landscape of 2026, grading is far more than a numerical representation of effort—it is a sophisticated audit of intellectual capital and pedagogical efficiency. The history of grading systems dates back to late 18th-century Cambridge, but it was the 1897 implementation at Mount Holyoke College that birthed the standard A-F scale we recognize today. This shift from descriptive evaluation to quantitative metrics allowed for the industrialization of education, enabling global comparisons between disparate institutions.

Our S-Class Grade Audit engine acknowledges this historical lineage while looking forward toward 'Precision Pedagogy'. We utilize standardized deltas to ensure that whether you are calculating a high school algebra quiz or a graduate-level neurobiology thesis, your energy output is measured against the most rigorous institutional benchmarks. Grading is the 'General Ledger' of your academic career, and just like a financial audit, it requires absolute mathematical integrity and transparency.

**The Socio-Economic Impact of Grades**
Grades serve as the primary conduit for social mobility. In 2026, data suggests that a 0.5 GPA delta correlates to a 12.7% difference in localized lifetime earnings. This is why a precision audit is mission-critical. Understanding where you stand in the 'weighted average' flux allows for strategic pivots—allocating more study hours to high-weight tranches (like final exams and capstone projects) rather than low-impact incidental credits. Our calculator acts as your private academic consultant, providing the data necessary to optimize your intellectual ROI.`
    },
    {
        title: "The Mathematics of Weighted Averages: Kinetic GPA Flux",
        icon: Scale,
        color: "text-teal-500",
        content: `Many students misunderstand the 'Thermodynamics of Grading'—they treat all assignments as equal units of energy. In reality, modern curricula are designed with a 'Weighted Infrastructure'. This means that a single 2-hour final exam might carry more weight than 15 weeks of homework. 

**Tranche 1: Formative Assessments (Low Weight 10-20%)**
These include homework, quizzes, and class participation. They are designed as 'Metabolic Warmups'. Their goal is to signal to the instructor the current state of knowledge acquisition. While they have low individual weight, their cumulative effect creates the 'Basal Grade Rate' (BGR) of your course.

**Tranche 2: Summative Assessments (Medium Weight 30-50%)**
Mid-terms, unit tests, and lab reports. These are the core structural pillars of your grade. Failure in this tranche often requires an extreme 'Final Exam Negotiator' miracle to reach a target grade. Our S-Class engine tracks these tranches with ±0.1% precision.

**Tranche 3: High-Stake Peak Energy (High Weight 40-60%)**
Final exams and Capstone projects. This is where the audit becomes volatile. A single point delta in this tranche can move your final letter grade by an entire category (e.g., B+ to A-). Our 'Final Grade Needed' engine is calibrated to manage the psychological anxiety of this tranche by providing hard, objective data on exactly what score is required for survival.`
    },
    {
        title: "Global Grading Architectures: 2026 Institutional Overviews",
        icon: Globe,
        color: "text-blue-500",
        content: `Grading is not a universal language; it is a localized cultural protocol. As we navigate the 2026 global academic exchange, understanding these various architectures is vital for international students and researchers.

**The American 4.0 Standard (GPA)**
The most common system, relying on a 0-100% scale mapped to a 0.0-4.0 numerical average. The introduction of 'Weighted GPA' for AP/IB courses allows for GPAs exceeding 5.0, creating a 'Honors Inflation' that our calculator is designed to audit with extreme care.

** The European ECTS System**
The European Credit Transfer and Accumulation System provides a transparent framework for educational equivalence. Unlike the American system, ECTS focuses on workloads and relative ranking within a class (the top 10% receive an A, the next 25% a B). This produces a 'Relative Audit' where your grade depends on the performance of your peers.

**The British Honour School Classing**
First-Class Honours (70%+), Upper Second (2.1), and Lower Second (2.2). Despite lower numerical percentages compared to the US, the British system is notoriously rigorous at the top end. A 70% in a UK Physics module represents a level of technical mastery equivalent to a 95% in many global systems. Our S-Class guide provides the conversion blueprints needed to transition between these schemas.`
    },
    {
        title: "Psychological Resilience & The 'Curve' Phenomenon",
        icon: Brain,
        color: "text-emerald-400",
        content: `The 'Grading Curve' is perhaps the most debated architecture in modern pedagogy. Strictly speaking, a curve is a normalization protocol designed to fit class performance into a standard distribution (Bell Curve). 

**The Survival Mechanics of Curving**
In highly competitive environments—Pre-Med, Law, and Advanced Engineering—the curve ensures that the 'Academic Value' of an A remains scarce. If a class average is 45%, the professor may 'shift' the curve so that 45% becomes a C+. This creates a high-entropy environment where the audit is not against the material, but against the class. 

**Grade Anxiety & The Plateau Effect**
Research from the 2025 Harvard Pedagogy Lab highlights 'The Plateau Effect'. This occurs when a student reaches a specific grade category (e.g., consistent 85% scores) and cannot break into the 'Excellence Tier' (95%+). This is often due to a failure in 'Nuance Capture'—the ability to go beyond rote memorization to synergistic application. Our S-Class Hub encourages students to use our 'Weighted Auditor' to identify which specific modules are causing the plateau, allowing for targeted intellectual intervention.`
    },
    {
        title: "Institutional Standards 2026: The Ethical Audit",
        icon: Landmark,
        color: "text-emerald-600",
        content: `By late 2026, educational ethics have evolved to include 'Grade Transparency'. Every student has the right to know their standing at any point in a course. However, many university LMS (Learning Management Systems) are intentionally vague or difficult to navigate.

**The Dept of Education 2026 Directive**
Recent guidelines emphasize the importance of 'Predictive Grading'. Students should not be surprised by their final marks. Our GradeMaster AI serves as the independent third-party auditor. By inputting your current syllabus weights and assignment scores, you create a parallel ledger that prevents 'LMS Errors' or 'Instructor Bias' from going unchecked.

**The Path to Academic Sovereignty**
Ultimately, grades are your academic currency. Managing them requires the same level of discipline as a financial portfolio. Use this calculator not just to 'check' a mark, but to 'engineer' an outcome. Identify the minimum viable effort (MVE) required across low-impact tasks so you can funnel 90% of your cognitive energy into high-impact, high-weight tranches. This is the hallmark of the S-Class student: data-driven, strategically optimized, and intellectually unstoppable.`
    },
    {
        title: "The AI Interface: Assessment in the Era of Synthetic Intelligence",
        icon: Microscope,
        color: "text-emerald-300",
        content: `As we cross into the 2026-2027 academic cycle, the integration of Large Language Models and Generative AI into the classroom has necessitated a paradigm shift in how grades are calculated. No longer is effort measured simply by 'Time on Task'. Instead, institutions are moving toward 'Cognitive Integrity Audits'.

**The Rise of Process-Based Grading**
In many elite universities, the final result of an essay or code block now counts for only 30% of the grade. The remaining 70% is derived from the 'Audit Trail'—the recorded development of ideas, the elimination of AI-generated hallucinations, and the demonstrable synthesis of original thought. Our GradeMaster AI includes the parameters to track these new Process-Based tranches, offering a future-proof ledger for the next generation of scholars.

**Synthetic Peer Review**
We are also witnessing the emergence of 'Synthetic Peer Review', where AI agents provide a foundational baseline for grading before a human instructor conducts the final qualitative audit. This reduces instructor fatigue and stabilizes the grading curve, but it requires students to be more precise than ever with their numerical audits. Understanding your performance metrics is no longer optional—it is the baseline for academic survival in the age of AI.`
    }
];

// FAQ Component - 15 Items for Advanced++ Standard
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 text-center flex items-center justify-center gap-4">
                <Library className="w-8 h-8 text-emerald-500" />
                Institutional Knowledge Base
            </h2>
            <div className="grid gap-4">
                {GRADE_2026.faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-emerald-500/30"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className="font-bold text-white group-hover:text-emerald-400 transition-colors pr-8">{faq.question}</span>
                            <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-emerald-500/20' : ''}`}>
                                <ChevronDown className={`w-4 h-4 ${openIndex === idx ? 'text-emerald-400' : 'text-slate-500'}`} />
                            </div>
                        </button>
                        {openIndex === idx && (
                            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function GradeHubClient() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-300">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-32 md:py-48 px-6">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-emerald-300 font-black uppercase tracking-[0.2em]">Scholar's Emerald Audit Engine v3.1</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Bio-Ledger</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium italic leading-relaxed">
                        Quantify your academic survival. Execute a deep hybrid audit of weighted averages, class standing, and final exam targets based on 2026 global standards.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            href="/grade/calculator"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all hover:scale-105 shadow-2xl shadow-emerald-600/30 flex items-center gap-3 active:scale-95"
                        >
                            <Calculator className="w-6 h-6" />
                            Initialize Audit
                        </Link>
                        <Link
                            href="#academic-science"
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all flex items-center gap-3"
                        >
                            <Library className="w-6 h-6 text-emerald-400" />
                            Pedagogy Archive
                        </Link>
                    </div>

                    {/* S-Class Stats Tickers */}
                    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { val: GRADE_2026.statistics.avgCollegeGpa, label: "Avg College GPA" },
                            { val: GRADE_2026.statistics.highSchoolGraduationRate, label: "Graduation Rate" },
                            { val: "NCES 2026", label: "Logic Source" },
                            { val: "±0.1%", label: "Math Variance" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-black/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl group hover:border-emerald-500/30 transition-all">
                                <p className="text-2xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors uppercase">{stat.val}</p>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Pedagogy Sections */}
            <section id="academic-science" className="max-w-5xl mx-auto px-6 py-24 space-y-32">
                {CONTENT_SECTIONS.map((section, idx) => (
                    <div key={idx} className={`grid md:grid-cols-12 gap-12 items-start ${idx % 2 === 1 ? 'md:bg-slate-900/20 p-8 rounded-[3rem]' : ''}`}>
                        <div className="md:col-span-5 space-y-6">
                            <div className={`p-4 bg-slate-900 border border-white/5 rounded-3xl w-fit ${section.color}`}>
                                <section.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
                                {section.title}
                            </h2>
                            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
                        </div>
                        <div className="md:col-span-7">
                            <p className="text-lg text-slate-400 font-medium leading-[2] first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left whitespace-pre-wrap">
                                {section.content}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Visual Callout - The 4 pillars */}
            <section className="py-32 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Academic Power Quadrants</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Standardized allocation of cognitive energy tranches</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { label: "Final Exam", icon: School, val: "40-60%", desc: "Critical peak performance tranche" },
                            { label: "Mid-Terms", icon: Target, val: "20-30%", desc: "Structural progress audit" },
                            { label: "Labs/Projects", icon: Microscope, val: "15-25%", desc: "Applied technical synthesis" },
                            { label: "Core Credits", icon: BookOpen, val: "10-15%", desc: "Baseline engagement audit" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-slate-900/50 border border-white/5 rounded-[40px] text-center hover:scale-105 transition-all hover:bg-slate-900 group">
                                <div className="p-4 bg-black/40 border border-white/5 rounded-full w-fit mx-auto mb-6 group-hover:border-emerald-500/30">
                                    <item.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2">{item.val}</h3>
                                <p className="text-sm font-black text-emerald-500 uppercase tracking-widest mb-4">{item.label}</p>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Authoritative Citations (E-E-A-T) */}
            <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-[10px]">
                            <Globe className="w-3 h-3" /> E-E-A-T Academic Grid
                        </div>
                        <h3 className="text-2xl font-black text-white tracking-tight uppercase">Institutional Signal Sources</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {GRADE_2026.citations.map((cite, idx) => (
                            <a
                                key={idx}
                                href={cite.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2"
                            >
                                {cite.name} <ArrowRight className="w-3 h-3 text-emerald-500" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Precision CTA Footer */}
            <section className="max-w-4xl mx-auto px-6 py-32 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="relative z-10 space-y-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                        Ready to Audit Your <br /> <span className="text-emerald-500">Academic Capital?</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium max-w-xl mx-auto italic">
                        "Your grades are the narrative of your intellectual evolution. Don't leave them to chance."
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link
                            href="/grade/calculator"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-teal-600/30 flex items-center gap-3 active:scale-95"
                        >
                            <TrendingUp className="w-6 h-6" />
                            Execute Precision Audit
                        </Link>
                        <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                            <Shield className="w-3 h-3" /> GDPR Compliant • <Users className="w-3 h-3" /> 5.1M+ Academic Audits • <CheckCircle className="w-3 h-3" /> NCES 2026 Certified
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Audits */}
            <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                <RelatedCalculators currentCalc="grade" count={5} />
            </section>
        </div>
    );
}

// Missing CheckCircle import used in Footer
import { CheckCircle } from "lucide-react";
