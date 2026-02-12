"use client";

import Link from "next/link";
import {
    ArrowLeft, Cpu, Terminal, Code, ArrowRight, Zap, Target,
    ShieldCheck, Info, Activity, Layers, Database, Lock, Globe
} from "lucide-react";
import { BINARY_2026 } from "@/lib/calculators/binary";

export default function BinaryExpertGuide() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Technical Sidebar */}
                <aside className="lg:col-span-3 space-y-8 text-balance">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/binary" className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Digital Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Base Systems", id: "#bases" },
                                { n: "Two's Complement", id: "#signed" },
                                { n: "Bitwise Logic", id: "#logic" },
                                { n: "Floating Point", id: "#floating" },
                                { n: "CPU Architecture", id: "#cpu" },
                                { n: "Data Structures", id: "#data" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-black text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight uppercase">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-2">Audit Entropy</div>
                            <div className="text-xs font-bold text-white uppercase italic">Zero Latency Sync On</div>
                        </div>
                    </div>
                </aside>

                {/* Main Technical Content */}
                <main className="lg:col-span-9 space-y-24">

                    <header className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                            <Zap className="w-3 h-3" /> S-Class Architecture v3.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase">
                            Digital Logic <span className="text-emerald-600 italic">Guide</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold italic">
                            A deep technical audit of binary systems, computer architecture, and the fundamental mechanics of digital computation.
                        </p>
                    </header>

                    {/* Section 1: Bases */}
                    <section id="bases" className="space-y-8 text-justify">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm italic">1</div>
                            The Radix Foundation: Base 2 to 16
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-6">
                            <p>
                                At the foundation of modern computing lies the **Binary System (Base 2)**. Unlike our traditional decimal system (Base 10) which utilizes ten distinct digits (0-9), binary utilizes only two states: 0 and 1. This simplicity is not a limitation but a structural requirement for electronic hardware, where these states represent the "off" and "on" positions of millions of microscopic transistors. The mathematical elegance of binary was documented as early as the 17th century, yet its practical application didn't explode until the advent of vacuum tubes and later, the silicon transistor.
                            </p>
                            <p>
                                Every piece of data—from a high-resolution 8K video frame to a simple text character—is ultimately stored as a sequence of these two states. The challenge for modern auditors is managing the sheer scale of this data. A single second of audio data might require millions of bit transitions. To manage this complexity, we group bits into higher-level abstractions. A group of 8 bits forms a **Byte**, the standard unit of memory addressability. When we analyze bytes, we often look for patterns such as headers, payloads, and checksums.
                            </p>
                            <p>
                                However, binary strings can become unwieldy for human interpretation. Enter **Hexadecimal (Base 16)** and **Octal (Base 8)**. These systems act as shorthand for binary. One hexadecimal digit represents exactly four bits (a nibble), allowing a full 8-bit byte to be represented by just two characters (e.g., 11111111 becomes FF). This architectural sync between bases is what allows developers to audit memory addresses and data packets with high efficiency. Without hexadecimal, specialized tasks like reverse engineering firmware or analyzing network security protocols would be physically impossible for the human brain to process in real-time.
                            </p>
                            <p>
                                In 2026, the auditor's role has expanded to include Radix Parity verification. This ensures that during the transmission of data between different software layers (for example, from a Python front-end to a C++ real-time engine), the numeric values remain structurally identical despite changes in representation. A failure in radix parity can lead to rounding errors, or worse, catastrophic failures in financial calculations where partial cents (bits) are lost during base conversion.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Two's Complement */}
                    <section id="signed" className="space-y-8 text-justify">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4 uppercase italic">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm italic">2</div>
                            Two's Complement & Signed Integers
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-6">
                            <p>
                                Representing positive numbers in binary is straightforward through simple summation of powers of two. However, the architectural challenge arises when we need to represent negative numbers. Over the history of computing, three primary methods emerged: Sign-and-Magnitude, One's Complement, and the now-standard **Two's Complement**.
                            </p>
                            <p>
                                In Two's Complement architecture, the most significant bit (MSB) acts as a sign indicator. If the MSB is 0, the number is positive. If it is 1, the number is negative. To find the negative counterpart of a positive binary number, the processor performs a 'Flip and Increment' operation: first, it inverts all bits (NOT operation), then it adds 1 to the result. This mathematical maneuver is brilliant because it allows the hardware to perform subtraction using the exact same circuits used for addition.
                            </p>
                        </div>
                        <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-12 opacity-5"><Layers className="w-32 h-32 text-emerald-500" /></div>
                            <div className="space-y-8 relative z-10">
                                <h3 className="text-2xl font-black text-white italic">Handling Negative Logic: Technical Audit</h3>
                                <div className="grid md:grid-cols-2 gap-8 text-left">
                                    <div className="p-10 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                                        <div className="text-emerald-500 font-black text-xs uppercase tracking-widest">Sign and Magnitude (Legacy)</div>
                                        <p className="text-sm text-slate-500 font-bold italic leading-relaxed">The simplest approach: use the MSB as a sign bit. However, this creates the "Double Zero" paradox (+0 and -0), wasting computational resources and complicating logic for zero-equality checks in early mainframes.</p>
                                    </div>
                                    <div className="p-10 bg-white/5 border border-white/5 rounded-3xl space-y-4 shadow-2xl shadow-emerald-500/10 border-emerald-500/20">
                                        <div className="text-emerald-500 font-black text-xs uppercase tracking-widest">Two's Complement (2026 Standard)</div>
                                        <p className="text-sm text-white font-bold italic leading-relaxed">The institutional industry standard. By inverting and adding 1, the arithmetic logic unit (ALU) can treat negative values as extremely large positive values that naturally 'overflow' and wrap around to the correct result. This optimization saves millions of transistors per CPU core.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-6">
                            <p>
                                Beyond simple arithmetic, the auditor must also account for **Sign Extension**. When moving an 8-bit signed number into a 16-bit register, the machine must 'smear' the sign bit across the new upper bits to maintain the integrity of the negative value. In 2026, automated auditors verify these extensions to prevent 'Silent Truncation' bugs, which are a common vector for buffer overflow exploits in legacy systems. A deep understanding of Two's Complement is therefore not just a mathematical skill, but a security requirement.
                            </p>
                            <p>
                                Finally, we must consider the **Range Paradox**. An 8-bit signed integer can represent values from -128 to +127. Notice the asymmetry: there is one more negative value than positive. This is a direct consequence of having only one representation for zero. An auditor must be wary of 'Absolute Value Overflow'—trying to take the absolute value of the minimum negative number (-128) will result in -128 again if not handled with higher-precision logic, leading to critical runtime exceptions.
                            </p>
                        </div>
                    </section>

                    {/* Section 4: Floating Point */}
                    <section id="floating" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4 uppercase italic">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm italic">4</div>
                            IEEE 754: Floating Point Architecture
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-6 text-justify">
                            <p>
                                While integers represent the majority of computational tasks in auditing, the representation of fractional numbers requires a more sophisticated architectural approach. The **IEEE 754 Standard** is the institutional protocol for floating-point arithmetic, utilized by almost every modern processor. Unlike fixed-point binary, which designates a specific number of bits for fractional parts, floating-point math uses a scientific notation inspired by the binary radix.
                            </p>
                            <p>
                                A typical 32-bit float consists of three distinct segments: one **Sign Bit**, eight **Exponent Bits**, and twenty-three **Mantissa (Significand) Bits**. The exponent utilizes a 'Biased' representation (usually 127 for single precision), allowing the computer to represent positive and negative exponents without a dedicated sign bit for the exponent itself. This complexity introduces unique auditing challenges, such as 'Precision Loss' during large-scale summation and the 'Denormal Number' paradox where numbers approach zero with collapsing fidelity.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl not-prose">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="p-4 bg-rose-500/20 border border-rose-500/30 rounded-xl">
                                        <div className="text-[9px] text-rose-400 uppercase font-black tracking-widest mb-1">Sign (1b)</div>
                                        <div className="text-xl text-white font-black">0 / 1</div>
                                    </div>
                                    <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                                        <div className="text-[9px] text-emerald-400 uppercase font-black tracking-widest mb-1">Exponent (8b)</div>
                                        <div className="text-xl text-white font-black">E - 127</div>
                                    </div>
                                    <div className="p-4 bg-teal-500/20 border border-teal-500/30 rounded-xl">
                                        <div className="text-[9px] text-teal-400 uppercase font-black tracking-widest mb-1">Mantissa (23b)</div>
                                        <div className="text-xl text-white font-black">1.xxxx</div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Modern 64-bit systems (Double Precision) expand these fields to 11 bits for the exponent and 52 bits for the mantissa, offering roughly 15 to 17 significant decimal digits. In high-frequency trading and aerospace simulations, even this is sometimes insufficient, requiring QUAD or Extended precision auditors to maintain structural parity during iterative recursion.
                            </p>
                        </div>
                    </section>

                    {/* Section 5: Endianness */}
                    <section id="cpu" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4 uppercase italic">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm italic">5</div>
                            CPU Execution: Endianness & Memory Alignment
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-6 text-justify">
                            <p>
                                Binary data is rarely processed as single bits; it is organized into multi-byte clusters. The sequence in which these bytes are stored in memory is known as **Endianness**. This is a critical audit point for network engineers and cross-platform developers.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                <div className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4">
                                    <h4 className="text-white font-black uppercase text-sm tracking-tighter">Little-Endian (x86 / ARM)</h4>
                                    <p className="text-xs text-slate-500 font-bold leading-relaxed">Stores the least significant byte first. For the hex value 0x1234, the machine stores [0x34] then [0x12]. This architecture simplifies mathematical operations on variable-precision integers.</p>
                                </div>
                                <div className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4">
                                    <h4 className="text-white font-black uppercase text-sm tracking-tighter">Big-Endian (Network / IBM)</h4>
                                    <p className="text-xs text-slate-500 font-bold leading-relaxed">Stores bytes in the primary order we read them (Most Significant first). This protocol is the 'lingua franca' of the internet, ensuring consistent packet headers across heterogeneous devices.</p>
                                </div>
                            </div>
                            <p>
                                Furthermore, **Memory Alignment** dictates that data must be accessed at addresses that are multiples of the data size (e.g., a 4-byte integer must be at an address divisible by 4). Failure to align data results in 'Misaligned Access' penalties, where the CPU must perform extra cycles of bit-shifting and masking to piece together the fragmented data stream. A professional auditor designs data structures with internal padding to maintain this alignment parity, optimizing throughput at the cost of slight memory entropy.
                            </p>
                        </div>
                    </section>

                    {/* Section 6: Data Structures */}
                    <section id="data" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4 uppercase italic">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm italic">6</div>
                            Advanced Logic: ECC & Error Correction
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8 text-justify">
                            <p>
                                In the real world, binary states are susceptible to environmental interference—radiation, electrical noise, or quantum tunneling. To combat this, auditors implement **Error Detection and Correction (ECC)**. The most basic form is the **Parity Bit**, which adds a single bit to ensure the total number of 1s is either even or odd. While simple, parity can only detect an error; it cannot correct it.
                            </p>
                            <p>
                                More robust systems utilize **Hamming Codes** or **Reed-Solomon Algorithms**. These protocols create redundant data through polynomial division, allowing the system to reconstruct original data even if several bits are flipped. Modern RAM modules (ECC-RAM) utilize these logic kernels to provide higher stability for server-grade environments. In 2026, we apply these concepts to distributed ledger technology (Blockchain) where cryptographic hashing (SHA-256) turns variable binary streams into fixed-length auditors that are mathematically impossible to reverse-engineer without extreme computational energy.
                            </p>
                            <div className="p-12 bg-emerald-600/10 border-2 border-emerald-500/20 rounded-[4rem] space-y-6">
                                <h3 className="text-2xl font-black text-white uppercase italic text-center">The Law of Binary Entropy</h3>
                                <p className="text-sm text-slate-300 font-bold italic leading-relaxed text-center">
                                    As bit-widths increase, the complexity of auditing transitions from simple arithmetic to structural statistical analysis. A 64-bit space offers 18,446,744,073,709,551,615 distinct states—enough entropy to address every grain of sand on Earth multiple times over. Mastery of this space is the final frontier of the 2026 Digital Architect.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="pt-8 border-white/5 flex flex-col items-center gap-8 text-center max-w-2xl mx-auto pb-20">
                        <Link href="/binary/calculator" className="w-full p-8 bg-emerald-600 rounded-[3rem] text-center hover:bg-emerald-500 transition-all group overflow-hidden relative shadow-2xl shadow-emerald-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Run Logic Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
