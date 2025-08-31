'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Section1({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div style={{ scale, rotate }} className=' sticky top-4 h-screen w-full border border-primary rounded-xl p-4 md:p-8 grid gap-4 grid-cols-1 md:grid-cols-[1.61fr_1fr]'>
            <div className=''>
                <h3 className=' text-xl md:text-5xl font-bold text-black md:mb-8'>Crafting Excellence in Leather Goods for Global Brands</h3>
                <p className=' font-sans mb-8 md:mb-16 md:mt-[25vh]'>We are a premier manufacturer and exporter of world class leather goods, based in Kolkata and trusted by iconic international brands. With a professionally managed operation, we specialize in crafting high quality handbags and small leather goods that meet global standards.</p>
                <Link className='p-4 px-16 mb-4 rounded-full bg-primary text-white font-sans font-bold hover:bg-primary/50' href='/about'>Learn More</Link>
            </div>
            <div className='rounded-xl overflow-hidden grid grid-rows-[1.61fr_1fr] border border-primary'>
                <div className=' w-full h-full overflow-hidden border-b border-primary'>
                    <Image width={500} height={500} src="/images/hero/about1.jpg" alt='' className=' w-full h-full object-cover' />
                </div>
                <div className=' w-full h-full overflow-hidden grid grid-cols-[1fr_1.61fr]'>
                    <div className=' w-full h-full overflow-hidden grid grid-rows-[1fr_1.61fr]'>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/hero/about4.jpg" alt='' className=' w-full h-full object-cover' />
                        </div>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/hero/about3.jpg" alt='' className=' w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className=' w-full h-full overflow-hidden'>
                        <Image width={500} height={500} src="/images/hero/about2.jpg" alt='' className=' w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Section1