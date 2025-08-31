'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav/Nav';
import Magnetic from '../Magnetic';

export default function Header() {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed w-screen overflow-x-hidden bg-primary box-border p-2 sm:py-4 sm:px-8 z-50 opacity-90 no-scrollbar">
      <div className="relative flex justify-end text-xs font-normal uppercase sm:text-sm">
        <Link href="/" className="absolute left-0 text-white no-underline" onClick={() => setIsActive(false)}>
          Fold Design
        </Link>
        <Magnetic>
          <div onClick={() => setIsActive(!isActive)} className="sticky-ref flex items-center justify-center gap-2 cursor-pointer">
            <div className={`
            relative w-[22.5px] 
              pointer-events-none
              before:absolute before:block
              before:h-[1px] before:w-full
              before:bg-white before:transition-transform 
              before:duration-1000
              before:ease-[cubic-bezier(0.76,0,0.24,1)] before:top-[4px]
              after:absolute after:block after:h-[1px] after:w-full
              after:bg-white after:transition-transform
              after:duration-1000 after:ease-[cubic-bezier(0.76,0,0.24,1)] after:top-[-4px]
              ${isActive ? 'before:rotate-[45deg] before:top-[1px] after:rotate-[-45deg] after:top-[-1px]' : ''}`}></div>
            <div className="relative flex items-center uppercase text-white">
              <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? 'open' : 'closed'}
                className="absolute opacity-0"
              >
                Close
              </motion.p>
            </div>
          </div>
        </Magnetic>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className="absolute left-0 top-full w-full h-full bg-black/50"
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav isActiveToggle={() => setIsActive(!isActive)} />}</AnimatePresence>
    </div>
  )
}