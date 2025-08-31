'use client'

import React, { useRef, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

function LogoAnimatedSVG() {
    const path1 = useRef(null);
    const path2 = useRef(null);
    const path3 = useRef(null);
    const path4 = useRef(null);
    const path5 = useRef(null);

    useEffect(() => {
        const animatePath = (element: any, duration: number, delay: number, props: any) => {
            if (element.current) {
                animate(element.current, props, { duration, delay, ease: [0.76, 0, 0.24, 1] });
            }
        };

        animatePath(path1, 1, 0, { strokeDashoffset: 0 }); // Example animation
        animatePath(path2, 1, 0.15, { strokeDashoffset: 0 }); // Example animation
        animatePath(path3, 0.5, 0.5, { strokeDashoffset: 0 }); // Example animation
        animatePath(path4, 0.5, 0.75, { strokeDashoffset: 0 }); // Example animation
        animatePath(path5, 1, 0.5, { strokeDashoffset: 0 }); // Example animation

    }, []);

    return (
        <svg width="126" height="131" viewBox="0 0 126 131" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                ref={path2}
                d="M0 10.5H65.0232"
                stroke="white"
                strokeWidth="20"
                initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
            />
            <motion.path
                ref={path3}
                d="M10.0036 60.5H50.0178"
                stroke="white"
                strokeWidth="20"
                initial={{ strokeDasharray: 80, strokeDashoffset: 80 }}
            />
            <motion.path
                ref={path1}
                d="M10.0036 0.5V130.5"
                stroke="white"
                strokeWidth="20"
                initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
            />
            <motion.path
                ref={path4}
                d="M35.0125 75.5V130.5"
                stroke="white"
                strokeWidth="20"
                initial={{ strokeDasharray: 70, strokeDashoffset: 70 }}
            />
            <motion.path
                ref={path5}
                d="M70.025 10.5C125.045 10.5001 145.052 120.5 40.0143 120.5"
                stroke="white"
                strokeWidth="20"
                initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
            />
        </svg>
    );
}

export default LogoAnimatedSVG;