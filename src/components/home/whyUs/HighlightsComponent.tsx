"use client"

import React, { useEffect } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { InfiniteText } from '@/components/infiniteContant/InfiniteText';
import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel';

const COLORS = ["#ff3f3f","#3fff5f", "#2095EA", "#bf3fff", "#ff3fac"]

function HighlightsComponent() {

    const color = useMotionValue(COLORS[0])

    const topBgColor = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, transparent 50%, ${color})`
    const botBgColor = useMotionTemplate`radial-gradient(100% 100% at 50% 100%, transparent 60%, ${color})`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 15,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [])

    return (
        <>
            <motion.div
                style={{
                    background: topBgColor
                }}
                className=" w-full min-h-screen h-[200vh] flex flex-col relative">
                <InfiniteText texts={["why us","why us","why us","why us","why us","why us"]} classes=' sticky top-0'/>
                <HorizontalScrollCarousel/>
            </motion.div>
            <motion.div
                style={{
                    background: botBgColor
                }}
                className=' h-[10vh] md:h-[20vh] w-full'
            >
            </motion.div>
        </>

    );
};

export default HighlightsComponent;
