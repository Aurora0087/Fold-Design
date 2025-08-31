"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import PerspectiveLink from '@/components/PerspectiveLink';
import Magnetic from '@/components/Magnetic';
import Section1 from './Section1';
import Section2 from './Section2';
import Wrapper from '../Wrapper';
import Section3 from './Section3';

function About() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <Wrapper>
      <div ref={containerRef} className="relative h-[300vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
      </div>
      <div className="relative z-20 h-fit">

      </div>
    </Wrapper>
  );
}

export default About;
