'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Section1() {

    return (
        <motion.div className=' sticky top-0 h-screen w-full bg-white p-8 md:p-28 md:my-16 flex md:grid gap-8 md:gap-4 flex-col-reverse md:grid-cols-[1.61fr_1fr]'>
            <div className='md:p-16'>
                <h3 className=' text-3xl md:text-5xl font-bold text-primary mb-8'>Crafting Excellence in Leather Goods for Global Brands</h3>
                <p className=' font-sans mb-4'>We are a premier manufacturer and exporter of world class leather goods, based in Kolkata and trusted by iconic international brands. With a professionally managed operation, we specialize in crafting high quality handbags and small leather goods that meet global standards.</p>
                <p className=' font-sans mb-4'>Our commitment to exceptional quality and customer satisfaction drives every step of our business. Powered by the expertise of our skilled artisans and cutting-edge Italian and German machinery, we ensure precision and excellence in every piece.</p>
                <p className=' font-sans mb-8 md:mb-16'>From manufacturing to packaging and dispatch, our entire production process is conducted under strict quality control, prioritizing health and employee safety while upholding our commitment to environmental sustainability.</p>

                <motion.a whileHover={{ y: -5 }} className='p-4 px-16 mb-4 rounded-full bg-primary text-white font-sans font-bold flex items-center justify-center gap-2 w-fit' href='#contact' >
                    <span>Inquire Now</span> <MoveRight />
                </motion.a>
            </div>
            <div className='overflow-hidden rounded grid grid-cols-1'>
                <div className=' w-full h-full overflow-hidden'>
                    <Image width={500} height={500} src="/images/hero/about1.jpeg" alt='' className=' grayscale-100 w-full h-full object-cover' />
                </div>
                <div className='hidden md:flex w-full h-full overflow-hidden'>
                    <Image width={500} height={500} src="/images/hero/about2.jpeg" alt='' className=' grayscale-100 w-full h-full object-cover' />
                </div>
            </div>
        </motion.div>
    )
}

export default Section1