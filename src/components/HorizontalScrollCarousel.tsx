"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HighlightCard from "./home/whyUs/HighlightCard";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1.2], ["15%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div
                className=" sticky top-[10vh] flex h-screen items-center overflow-hidden -rotate-1 gap-6">
                <motion.div style={{ x }} className="flex gap-2">
                    {data.map((d, i) => {
                        const x = useTransform(scrollYProgress, [0, 1], [0, (i + 1) * 70]);

                        return (
                            <motion.div key={i} style={{ x }} className={`z-[${i*10}]`}>
                                <HighlightCard title={d.title} details={d.details} botText={d.botTxt} index={(i%(data.length/2))} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel;

const data = [
    
    {
        title: "Quantum Stretch",
        details: "Beyond just wrapping, Quantum is a testament to advanced material science.",
        botTxt: "445+"
    },
    {
        title: "Smart City",
        details: "Take a virtual tour of the smart city we built for Combis.",
        botTxt: "20"
    },
    {
        title: "Sonia Country",
        details: "We got the privilege to design & develop Sonia's new site.",
        botTxt: "aaa"
    },
    {
        title: "Another Project",
        details: "Description of another project here.",
        botTxt: "7410"
    },
    {
        title: "Quantum Stretch",
        details: "Beyond just wrapping, Quantum is a testament to advanced material science.",
        botTxt: "445+"
    },
    {
        title: "Smart City",
        details: "Take a virtual tour of the smart city we built for Combis.",
        botTxt: "20"
    },
    {
        title: "Sonia Country",
        details: "We got the privilege to design & develop Sonia's new site.",
        botTxt: "aaa"
    },
    {
        title: "Another Project",
        details: "Description of another project here.",
        botTxt: "7410"
    },
];