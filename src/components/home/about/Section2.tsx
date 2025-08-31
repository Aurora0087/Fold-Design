'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

function Section2({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.div style={{ scale, rotate }} className=' sticky top-4 h-screen w-full border border-primary rounded-xl p-8 grid gap-4 grid-cols-1 md:grid-cols-[1.61fr_1fr] bg-white/50 backdrop-blur-sm'>
            <div>
                <h3 className=' text-xl md:text-5xl font-bold text-black md:mb-4'>Stronger together, better for you </h3>
                <p className=' mb-2 md:mt-[25vh] font-sans'>At S.P. International, we believe collaboration fuels innovation. With 25 years of industry expertise, our team of sourcing, product development and merchandising specialists is dedicated to bringing your vision alive.</p>

                <p className=' font-sans mb-2'>Our trend savvy design team in Spain stays ahead of the curve by attending global fashion fairs and exploring top style capitals. We offer exclusive private label designs and work hand in hand with client teams to create standout collections that inspire.</p>

                <p className=' font-sans mb-2'>From manufacturing to packaging and dispatch, our entire production process is conducted under strict quality control, prioritizing health and employee safety while upholding our commitment to environmental sustainability.</p>
            </div>
            <div className='rounded-xl overflow-hidden grid grid-rows-[1.61fr_1fr] border border-primary'>
                <div className=' w-full h-full overflow-hidden border-b border-primary'>
                    <Image width={500} height={500} src="/images/hero/about5.jpg" alt='' className=' w-full h-full object-cover' />
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
                        <Image width={500} height={500} src="/images/hero/about6.jpg" alt='' className=' w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Section2