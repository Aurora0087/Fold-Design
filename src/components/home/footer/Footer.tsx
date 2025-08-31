"use client"

import Magnetic from '@/components/Magnetic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram } from 'lucide-react';
import React, { useRef } from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0.2, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0.2, 1], [0, -100]);
    return (
        <div className=' w-full flex flex-col bg-primary relative'>
            <div ref={containerRef} className=' pb-8 px-8 w-full grid md:grid-cols-2 min-h-[25vh] h-full gap-4'>
                <div className='flex  gap-4'>
                    <div className=' text-2xl w-full md:w-fit md:text-[4vw] uppercase font-semibold text-white flex justify-center items-center'>addr1<span className='text-white'>.</span></div>
                    <div className=' text-slate-400 grid place-content-center font-sans'>
                        <p>Kolkata Leather Complex, K.L.C,</p>
                        <p> South 24 Pargana-743502,</p>
                        <p> West Bengal, India</p>
                        <a href='tel:+919163649163' className=' mt-4 hover:text-white'>phone: +91 9163649163</a>
                        <a href='mailto:fd.folddesign@gmail.com' className=' mt-4 hover:text-white'>fd.folddesign@gmail.com</a>
                    </div>
                </div>
                <div className='flex flex-row-reverse md:flex-row gap-4'>
                    <div className=' text-xl w-full md:w-fit md:text-[4vw] uppercase font-semibold text-white flex justify-center items-center'>addr2<span className='text-white'>.</span></div>
                    <div className=' text-slate-400 grid place-content-center'>
                        <p></p>
                    </div>
                </div>
            </div>
            <motion.div
                style={{
                    y: y2
                }}
                className=' w-full flex justify-center items-center gap-4 md:gap-8 h-[5vh] md:h-[10vh]'>
                <Magnetic>
                    <a href="" target='_blank' className=' relative h-[10vh]'>
                        <FaLinkedin className=' text-blue-400 hover:text-secondary w-full h-full' />
                    </a>
                </Magnetic>

                <Magnetic>
                    <a href="https://twitter.com/slayer_sensei" target='_blank' className=' h-[10vh]'>
                        <BsTwitterX className=' text-black hover:text-secondary w-full h-full' />
                    </a>
                </Magnetic>
                <Magnetic>
                    <a href="https://www.instagram.com/draj_aurora/" target='_blank' className=' h-[10vh]'>
                        <Instagram className=' text-red-400 hover:text-secondary w-full h-full' />
                    </a>
                </Magnetic>

            </motion.div>
            <div
                style={{
                    lineHeight: "25vw"
                }}
                className=' h-[15vh] md:h-[40vh] overflow-hidden uppercase text-[15vw] font-bold text-center indent-0 text-black border-b border-primary'>
                <motion.div
                    style={{
                        y: y1,
                    }}
                >
                    <span
                        className='text-white'>F</span>
                    ol
                    <span className='text-stroke-2 text-transparent'>d</span>
                    <span
                        className='text-white'>D</span>
                    esig
                    <span className='text-stroke-2 text-transparent'>n</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer