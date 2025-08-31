import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { opacity } from '../../anim';

interface IndexProps {
  src: string;
  isActive: boolean;
}

const Images: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={`hidden lg:block w-[500px] h-[450px] relative overflow-hidden rounded-xl`}
    >
      <Image
        src={`/images/${src}`}
        fill={true}
        alt="image"
        className="object-cover opacity-100"
      />
    </motion.div>
  );
};

export default Images;
