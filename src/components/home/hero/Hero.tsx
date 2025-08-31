'use client'

import React, { useState, useEffect, useRef } from 'react';
import Wrapper from '../Wrapper';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const moveAmount = 10; // Adjust for sensitivity

    const imageX = (mousePosition.x - window.innerWidth / 2) / (window.innerWidth / 2) * moveAmount;
    const imageY = (mousePosition.y - window.innerHeight / 2) / (window.innerHeight / 2) * moveAmount;

    const textVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Wrapper>
            <motion.div
                className='p-4 text-black w-full flex flex-col items-center justify-center gap-4 mb-16'
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 className=' text-2xl md:text-[2.5vw] text-center' variants={letterVariants}>
                    Crafting Legacy
                </motion.h2>
                <motion.p className=' text-center text-5xl md:text-[8vw] font-light' variants={letterVariants}>
                    Premium Leather Goods
                </motion.p>
                <Link className='p-4 px-16 rounded-full bg-primary text-white font-sans big-cursor font-bold w-fit hover:bg-primary/50' href='/contact'>Get In Touch</Link>
            </motion.div>
            <div className=' w-full h-[80vh] mb-4  relative'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    ref={imageRef} className='rounded-xl overflow-hidden w-full h-full'
                    style={{
                        transform: `translate(${imageX}px, ${imageY}px)`,
                        transition: 'transform 0.1s ease-out' // Add smooth transition
                    }}>
                    <Image
                        className=' w-full h-full object-cover z-0'
                        width={500}
                        height={500}
                        alt='heroimage'
                        src="/images/hero/hero.jpg"
                    />
                </motion.div>
            </div>
        </Wrapper>
    );
}

export default Hero;