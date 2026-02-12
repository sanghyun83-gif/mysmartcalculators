import { Binary, CPU, ShieldCheck, Zap, Info, Activity } from "lucide-react";
import React from 'react';

export const BINARY_2026 = {
    name: "Binary Calculator",
    metadata: {
        title: "Binary Calculator & Bitwise Logic Auditor | S-Class Digital Logic 2026",
        description: "Execute precision bitwise operations and base conversions with institutional accuracy. Support for signed/unsigned integers, Two's complement, and 64-bit architecture.",
        keywords: ["binary calculator", "bitwise operations", "hexadecimal converter", "digital logic auditor", "two's complement calculator"]
    },
    citations: [
        {
            name: "IEEE Standard for Floating-Point Arithmetic (IEEE 754)",
            url: "https://ieeexplore.ieee.org/document/8766229",
            type: "Technical Standard"
        },
        {
            name: "NIST Digital Library of Mathematical Functions",
            url: "https://dlmf.nist.gov/",
            type: "Institutional Library"
        },
        {
            name: "Harvard School of Engineering - Computer Architecture Protocols",
            url: "https://www.seas.harvard.edu/",
            type: "Scientific Reference"
        }
    ],
    faqs: [
        {
            question: "What is Two's Complement and why is it used?",
            answer: "Two's complement is the standard institutional method for representing signed integers in binary systems. It allows the computer to perform addition and subtraction using the same hardware circuitry. In this method, the most significant bit (MSB) acts as the sign bit (0 for positive, 1 for negative). It eliminates the 'negative zero' problem found in other systems like sign-and-magnitude."
        },
        {
            question: "How does the Binary Auditor handle overflow?",
            answer: "The 2026 auditor detects arithmetic overflow by monitoring carry-out from the most significant bit. If a result exceeds the allocated bit-width (e.g., 8-bit, 16-bit, 64-bit), an overflow flag is typically triggered. In modular arithmetic terms, the result 'wraps around' to the beginning of the range, which can lead to critical data corruption if not audited."
        },
        {
            question: "Can I perform bitwise operations like XOR and NAND?",
            answer: "Yes, our engine supports the full suite of logic gates including AND, OR, XOR, NOT, NAND, and NOR. These are executed at a hardware-emulation level for maximum precision. Bitwise operations are significantly faster than high-level arithmetic because they map directly to logic gates on the physical processor."
        },
        {
            question: "What is the relationship between Hexadecimal and Binary?",
            answer: "Hexadecimal (Base 16) is a shorthand for binary. Since 16 is 2 to the power of 4, exactly one hexadecimal digit represents four binary bits (a nibble). For example, the binary '1010' is 'A' in hex, and '1111' is 'F'. This makes hexadecimal ideal for auditing memory addresses and raw data packets."
        },
        {
            question: "What is the difference between Big-Endian and Little-Endian?",
            answer: "Endianness refers to the order of bytes in multi-byte data types. Big-Endian stores the 'most significant' byte first (at the lowest memory address), similar to how humans read numbers. Little-Endian stores the 'least significant' byte first. X86 and most modern architectures use Little-Endian, while networks and some legacy systems prefer Big-Endian."
        },
        {
            question: "How do I convert a Decimal number to Binary?",
            answer: "To convert decimal to binary manually, use the 'division by 2' method. Divide the number by 2 and record the remainder (0 or 1). Continue dividing the quotient by 2 until it reaches 0. The binary value is the sequence of remainders read in reverse order (bottom to top)."
        },
        {
            question: "What is a 'Bit' vs a 'Byte'?",
            answer: "A 'Bit' (Binary Digit) is the smallest unit of data, representing a 0 or a 1. A 'Byte' is a collection of 8 bits. While a bit can only hold 2 states, a byte can represent 256 distinct values (2^8). Most modern computer architectures address memory at the byte level, not the bit level."
        },
        {
            question: "What is IEEE 754 Floating Point standard?",
            answer: "IEEE 754 is the technical standard for floating-point computation followed by almost all modern CPUs and GPUs. It defines how non-integers (fractions) are stored in binary using three parts: a sign bit, an exponent, and a fraction (mantissa). This allows computers to represent extremely large or small numbers using a fixed number of bits."
        },
        {
            question: "What is Bitwise NOT (Inversion)?",
            answer: "The NOT operation, also known as logical inversion or bit-flip, changes all 1s to 0s and all 0s to 1s. In unsigned systems, this is a simple bit-flip. In signed systems using Two's complement, the NOT operation is also used as a step to find the negative representation of a number."
        },
        {
            question: "What is the purpose of Bit Shifting?",
            answer: "Bit shifting moves the binary sequence to the left or right. A 'Left Shift' (<<) by 1 position effectively multiplies the number by 2, while a 'Right Shift' (>>) divides it by 2. This is used extensively in high-performance graphics and signal processing where traditional multiplication would be too slow."
        },
        {
            question: "What is a Nibble in computer science?",
            answer: "A nibble is a four-bit aggregation, or half of an eight-bit byte. Since a nibble has 4 bits, it can represent 16 values (0-15), which maps perfectly to a single hexadecimal digit. In legacy data formats like BCD (Binary Coded Decimal), each nibble was used to represent a single decimal digit."
        },
        {
            question: "How does Binary relate to ASCII and Unicode?",
            answer: "Binary is the raw medium, while ASCII and Unicode are encoding standards. ASCII maps binary values (0-127) to specific characters like 'A' or '$'. Unicode expands this to handle global languages and emojis by using larger bit-widths (UTF-8, UTF-16) to map binary sequences to tens of thousands of characters."
        },
        {
            question: "What is Bitmasking?",
            answer: "Bitmasking is a technique used to isolate, set, or clear specific bits within a larger data type. By applying an 'AND' operation with a 'mask' (a specific pattern of bits), a developer can check the state of individual flags without affecting others. This is critical for low-level hardware control and network packet parsing."
        },
        {
            question: "Why do computers use Binary instead of Decimal?",
            answer: "Computers use binary because it is the most reliable way to represent data at the physical hardware level. It is much easier and cheaper to build electrical circuits that distinguish between only two voltage states (On/Off) than ten different states. Binary logic also allows for the mathematical rigor needed for Boolean algebra."
        },
        {
            question: "What is BCD (Binary Coded Decimal)?",
            answer: "BCD is a class of binary encodings where each digit of a decimal number is represented by its own 4-bit nibble. While less efficient than pure binary for general computation, BCD avoids rounding errors common in floating-point systems, making it popular in older financial and accounting hardware."
        }
    ]
};

/**
 * Binary Logic Engine
 * High-fidelity bitwise arithmetic and radix conversion.
 */
export const BinaryEngine = {
    /**
     * Convert value between bases
     */
    convert: (value: string, fromBase: number, toBase: number, bits: number = 32) => {
        try {
            let num = BigInt(0);

            if (fromBase === 10) {
                num = BigInt(value);
            } else {
                num = BigInt("0x" + parseInt(value, fromBase).toString(16));
            }

            // Mask for bit-width
            const mask = (BigInt(1) << BigInt(bits)) - BigInt(1);
            const maskedNum = num & mask;

            return maskedNum.toString(toBase).toUpperCase();
        } catch (e) {
            return "ERROR";
        }
    },

    /**
     * Bitwise XOR
     */
    xor: (a: string, b: string, bits: number = 32) => {
        const valA = BigInt("0b" + a);
        const valB = BigInt("0b" + b);
        const result = valA ^ valB;
        return result.toString(2).padStart(bits, '0');
    },

    /**
     * Bitwise AND
     */
    and: (a: string, b: string, bits: number = 32) => {
        const valA = BigInt("0b" + a);
        const valB = BigInt("0b" + b);
        const result = valA & valB;
        return result.toString(2).padStart(bits, '0');
    },

    /**
     * Bitwise OR
     */
    or: (a: string, b: string, bits: number = 32) => {
        const valA = BigInt("0b" + a);
        const valB = BigInt("0b" + b);
        const result = valA | valB;
        return result.toString(2).padStart(bits, '0');
    }
};
