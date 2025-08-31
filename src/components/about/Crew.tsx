"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import MemberCard from './MemberCard';

function Crew() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div
                className=" sticky top-[5vh] flex h-screen items-center overflow-hidden -rotate-1 gap-6">
                <motion.div style={{ x }} className="flex gap-20">
                    {data.map((d, i) => {
                        const s = useTransform(scrollYProgress, [0, 0.5], [(i+1)*0.2, 1]);
                        const r = useTransform(scrollYProgress, [0, 0.6], [(i+1)*10, -5]);
                        return (
                            <motion.div key={i} style={{
                             }} className={`z-[${i*10}] w-[350px] max-w-full min-h-[500px]`}>
                                <MemberCard scale={s} rotate={r} title={d.title} imgUrl={d.imgUrl} vidUrl={d.vidUrl} name={d.name} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Crew

const data = [
    
    {
        title: "dev",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme1.mp4",
        name:"ABCD"
    },
    {
        title: "business-maager",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme4.mp4",
        name:"LKJH"
    },
    {
        title: "designer",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme6.mp4",
        name:"yuiiop"
    },
    {
        title: "co-founder",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme2.mp4",
        name:"retyD"
    },
    {
        title: "ceo",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme3.mp4",
        name:"xyzas"
    },
    {
        title: "dev",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme1.mp4",
        name:"ABCD"
    },
    {
        title: "business-maager",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme4.mp4",
        name:"LKJH"
    },
    {
        title: "designer",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme6.mp4",
        name:"yuiiop"
    },
    {
        title: "co-founder",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme2.mp4",
        name:"retyD"
    },
    {
        title: "ceo",
        imgUrl: "/images/works/3.jpg",
        vidUrl: "/videos/meme/meme3.mp4",
        name:"xyzas"
    },
];