'use client'

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

export default function StickyCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [stickyCenter, setStickyCenter] = useState({ x: 0, y: 0 });
    const [bigCursorHovered, setBigCursorHovered] = useState(false); // New State
    const cursorSize = isHovered ? 100 : bigCursorHovered ? 400 : 15; // Update cursor size based on bigCursorHovered
    const cursor = useRef(null);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    const rotate = (distance: { x: any; y: any; }) => {
        const angle = Math.atan2(distance.y, distance.x);
        if (cursor.current) {
            animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
        }
    };

    const manageMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;

        // Correction for the normal state. Subtract cursorSize / 2 to center.
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);

        if (isHovered) {
            const distance = { x: clientX - stickyCenter.x, y: clientY - stickyCenter.y };
            rotate(distance);

            // Correction for the hover state. Subtract cursorSize / 2 to center.
            mouse.x.set(stickyCenter.x + distance.x * 0.1 - cursorSize / 2);
            mouse.y.set(stickyCenter.y + distance.y * 0.1 - cursorSize / 2);
        }
    };

    const manageMouseOver = (e: { target: any; }) => {
        const stickyElement = e.target;
        const { left, top, width, height } = stickyElement.getBoundingClientRect();
        setStickyCenter({ x: left + width / 2, y: top + height / 2 });
        setIsHovered(true);
    };

    const manageMouseLeave = () => {
        setIsHovered(false);
    };

    const manageBigCursorMouseOver = () => {  //New mouseover function for the big cursor
        setBigCursorHovered(true);
    };

    const manageBigCursorMouseLeave = () => {  //New mouseleave function for the big cursor
        setBigCursorHovered(false);
    };

    useEffect(() => {
        const stickyElements = document.querySelectorAll('.sticky-ref');
        const makeBigCursor = document.querySelectorAll('.big-cursor');

        stickyElements.forEach((element) => {
            element.addEventListener('mouseenter', manageMouseOver);
            element.addEventListener('mouseleave', manageMouseLeave);
        });

        makeBigCursor.forEach((element) => {
            element.addEventListener('mouseenter', manageBigCursorMouseOver);  // add events listener for the big cursor
            element.addEventListener('mouseleave', manageBigCursorMouseLeave);
        });

        window.addEventListener('mousemove', manageMouseMove);

        return () => {
            stickyElements.forEach((element) => {
                element.removeEventListener('mouseenter', manageMouseOver);
                element.removeEventListener('mouseleave', manageMouseLeave);
            });

            makeBigCursor.forEach((element) => {
                element.removeEventListener('mouseenter', manageBigCursorMouseOver); // remove events listener for the big cursor
                element.removeEventListener('mouseleave', manageBigCursorMouseLeave);
            });

            window.removeEventListener('mousemove', manageMouseMove);
        };
    }, [isHovered, bigCursorHovered]); // Add bigCursorHovered to the dependency array

    return (
        <div className="relative hidden pointer-events-none md:flex">
            <motion.div
                ref={cursor}
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    width: cursorSize,
                    height: cursorSize,
                    backgroundColor: '#FFFFFF',
                    mixBlendMode: 'difference',
                    pointerEvents: 'none',
                    zIndex: 999,
                }}
                transformTemplate={({ rotate, scaleX, scaleY }) => {
                    return `rotate(${rotate}rad) scaleX(${scaleX}) scaleY(${scaleY})`;
                }}
                className="fixed rounded-full pointer-events-none"
            ></motion.div>
        </div>
    );
}