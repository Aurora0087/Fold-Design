'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './body/Body';
import Footer from './footer/Footer';
import Images from './images/Images';

const links = [
    {
        title: "Home",
        href: "/#",
        src: "home.jpg"
    }, {
        title: "About Us",
        href: "/about#",
        src: "about.jpg"
    },
    {
        title: "Contact",
        href: "/contact#",
        src: "contact.jpg"
    },
]

export default function Nav({ isActiveToggle }: { isActiveToggle: () => void }) {

    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    return (
        <motion.div
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            className="overflow-hidden"
        >
            <div className="flex flex-col gap-[50px] mb-[80px] lg:flex-row lg:justify-between">
                <div className="flex flex-row justify-between">
                    <Body links={links} selectedLink={selectedLink} isActiveToggle={isActiveToggle} setSelectedLink={setSelectedLink} />
                    {/*<Footer isActiveToggle={isActiveToggle} />*/}
                </div>
            </div>
        </motion.div>
    )
}