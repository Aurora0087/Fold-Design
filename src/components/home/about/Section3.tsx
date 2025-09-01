'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import React from 'react'

function Section3({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    const scale = useTransform(scrollYProgress, [0.6, 1], [0.8, 1]);

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div style={{ scale, rotate }} className=' sticky top-4 h-screen w-full border border-primary rounded-xl p-8 grid place-content-center bg-white/50 backdrop-blur-sm'>
            <h1 className=' text-5xl md:text-[10vw] text-center uppercase big-cursor w-fit'>20+ years EXPERIENCE</h1>
        </motion.div>
    )
}

export default Section3