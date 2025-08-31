"use client"

import React, { useEffect, useRef, useState } from 'react'

function ScrollCurve({ top = "url(#paint0_linear)", bottom = "bg-slate-900" }: { top?: string, bottom?: string }) {
    const path = useRef<any>(null);
    const initialCurve = 120;
    const [screenWidth, setSereenWidth] = useState(1080)
    const [screenHight,setSereenHight] =useState(700)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const curveValue = initialCurve - (scrollY * 2 / maxScroll) * initialCurve;
            setPath(curveValue >= 50 ? curveValue : 50);
        };

        const setPath = (curve: any) => {
            const width = window.innerWidth;
            const height = window.innerHeight * 0.1;
            path.current.setAttributeNS(
                null,
                'd',
                `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height - curve
                } 0 ${height} L0 0`
            );
        };

        setSereenWidth(window.innerWidth)
        setSereenHight(window.innerHeight)
        window.addEventListener('scroll', handleScroll);
        setPath(initialCurve);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${bottom}  relative w-full h-[20vh] overflow-hidden`}>
            <div className="absolute top-0 left-0 w-full">
                <svg width="100vw" height="100%" viewBox={`0 0 ${(screenWidth) - 4} ${screenHight * 0.1}`} fill="none">
                    <defs>
                        <linearGradient id="paint0_linear" x1="0%" y1="50%" x2="100%" y2="50%" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#C2FF3F" />
                            <stop offset="100%" stopColor="#2095EA" />
                        </linearGradient>
                    </defs>
                    <path ref={path} fill={top} strokeLinecap="round" />
                </svg>
            </div>
        </div>

    );
}

export default ScrollCurve