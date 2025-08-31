"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PerspectiveText({ label, url = "/" }: { label: string, url?: string }) {
    return (
        <motion.a
            href={url}
            className="relative uppercase w-fit rounded-full px-6 py-2 bg-primary text-white text-[2vw] overflow-hidden"
            whileHover="hover"
        >
            <span className="sr-only">{label}</span>
            <span className=" relative h-8 overflow-hidden flex justify-center items-center z-10" aria-hidden>
                {label.split('').map((letter, i) => (
                    <motion.span
                        key={i}
                        data-letter={letter === ' ' ? '\u00A0' : letter}
                        className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
                        initial={{ y: 0 }}
                        variants={{
                            hover: { y: -32, transition: { duration: 0.4, delay: i * 0.05, ease: "easeInOut" } },
                        }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
                <motion.span
                    initial={{
                        x: 0,
                    }}
                    variants={{
                        hover: { x: 5 }
                    }}
                >
                    <ArrowUpRight />
                </motion.span>
            </span>
        </motion.a>
    );
}
