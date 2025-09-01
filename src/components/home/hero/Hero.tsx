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
            <div className=' w-full h-[80vh] mb-4  relative'>
                <div className=' absolute  z-10 md:left-16 h-full w-fit flex flex-col justify-center'>
                    <h4 className=' uppercase w-fit text-2xl md:text-[4vw]'>Premium Handcrafted</h4>
                    <h1 className=' uppercase text-5xl md:text-[8vw] font-bold big-cursor'>Bags & Wallets</h1>
                    <p className=' font-sans px-2 w-fit md:w-full md:px-8 py-2 rounded bg-primary text-white text-xs md:text-base'>Where Tradition.innovation and Qulity Come Together</p>
                    <h4 className=' text-white text-2xl font-bold md:text-[4vw]'>Run By Family,Driven By Passion</h4>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    ref={imageRef} className='rounded-xl overflow-hidden w-full h-full z-0'
                    style={{
                        transform: `translate(${imageX}px, ${imageY}px)`,
                        transition: 'transform 0.1s ease-out' // Add smooth transition
                    }}>
                    <Image
                        className=' w-full h-full object-cover z-0'
                        width={5000}
                        height={5000}
                        alt='heroimage'
                        src="/images/hero/hero.jpg"
                    />
                </motion.div>
            </div>
        </Wrapper>
    );
}

export default Hero;