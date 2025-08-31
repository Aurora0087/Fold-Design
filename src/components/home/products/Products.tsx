'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'

function Products() {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start start', 'end end']

    })



    const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const imgs = [
        {
            src: "/images/hero/about6.jpg",
            scale: scale1,
        },
        {
            src: "/images/hero/about1.jpg",
            scale: scale2
        },
        {
            src: "/images/hero/about2.jpg",
            scale: scale3
        },
        {
            src: "/images/hero/about3.jpg",
            scale: scale4
        },
        {
            src: "/images/hero/about4.jpg",
            scale: scale5
        },
        {
            src: "/images/hero/about5.jpg",
            scale: scale6
        },
    ]

    return (
        <div ref={container} className=" mt-[10vh]">
            <div className="h-[300vh] relative">
                <div className=" sticky overflow-hidden top-0 h-[100vh]">
                    {imgs.map((img, i) => (
                        <motion.div key={i} style={{ scale: img.scale }} className="w-full h-full top-0 absolute flex items-center justify-center product-el">
                            <div className={`relative rounded-lg overflow-hidden shadow-2xl imgCont${i + 1}`}>
                                <Image
                                    className='object-cover w-full h-full'
                                    src={img.src}
                                    alt="image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Products