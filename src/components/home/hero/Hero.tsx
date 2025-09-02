'use client'

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Hero() {

    return (
        <div className=' w-full h-[98vh] fixed top-0'>
            <div className=' absolute top-0 w-full h-24 overflow-hidden grid grid-cols-2 md:grid-cols-3 p-2 md:px-24'>
                <div className='hidden md:flex'></div>
                <div className='md:flex justify-center items-center'>
                    <a href="/" className='flex font-sans text-white text-xl'>
                        <div className='w-16 h-16 overflow-hidden'>
                            <Image width={100} height={100} alt='logo' src="/FDLOGO.png" className='w-full h-full object-cover' />
                        </div>
                    </a>

                </div>

                <div className=' flex gap-8 justify-end items-center'>
                    <motion.a whileHover={{ y: -5 }} className='p-4 px-8 hidden rounded-full bg-white text-primary hover:bg-primary/50 hover:text-white font-sans md:flex items-center justify-center gap-2 w-fit' href='#contact' >
                        <span>Contact Now</span>
                    </motion.a>
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className=' w-fit h-fit rounded-full aspect-square p-2 bg-white hover:text-primary/50'>
                                <MapPin className=' w-8 h-8' />
                            </div>
                        </SheetTrigger>
                        <SheetContent side='left' className="md:max-w-[50vw] max-w-[100vw] sm:max-w-[100vw]">
                            <SheetHeader>
                                <SheetTitle className=' my-4 md:my-16 text-5xl font-bold'>Connect With Us</SheetTitle>
                                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full font-sans text-white'>
                                    <div className=' w-full h-full bg-primary/80 rounded-xl grid gap-2 overflow-hidden p-4'>
                                        <MapPin className=' w-8 h-8' />
                                        <h4 className=' font-bold'>Office</h4>
                                        <div>
                                            <p>22 Shamsul Huda Road,</p>
                                            <p> 4th Floor,</p>
                                            <p>Kolkata-700017</p>
                                        </div>
                                    </div>
                                    <div className=' w-full h-full bg-primary/80 rounded-xl grid gap-2 overflow-hidden p-4'>
                                        <MapPin className=' w-8 h-8' />
                                        <h4 className=' font-bold'>Workshop</h4>
                                        <div>
                                            <p>Kolkata Leather Complex,Plot-1585, Zone-9.</p>
                                            <p>Dist..- 24 PGS (S), Pin-743502,</p>
                                            <p>West Bengal, India</p>
                                        </div>
                                    </div>
                                    <div className=' w-full h-full bg-primary/80 rounded-xl grid gap-2 overflow-hidden p-4'>
                                        <Mail className=' w-8 h-8' />
                                        <h4 className=' font-bold'>Email Address</h4>
                                        <div className='grid'>
                                            <a href='mailto:zayankaizer@fold-design.com' className=' mt-2 hover:text-white'>zayankaizer@fold-design.com</a>
                                            <a href='mailto:fd.folddesign@gmail.com' className=' hover:text-white'>fd.folddesign@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className=' w-full h-full bg-primary/80 rounded-xl grid gap-2 overflow-hidden p-4'>
                                        <Phone className=' w-8 h-8' />
                                        <h4 className=' font-bold'>Email Address</h4>
                                        <div className='grid'>
                                            <a href='tel:+919163649163' className=' mt-2 hover:text-white'>+91 9163649163</a>
                                            <a href="tel:+919331863123" className="hover:text-white">+91 9331863123</a>
                                        </div>
                                    </div>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className=' absolute  z-10 left-2 md:left-28 h-full w-fit flex flex-col justify-center text-white'>
                <h4 className=' uppercase w-fit text-2xl md:text-[4vw]'>Premium Handcrafted</h4>
                <h1 className=' uppercase text-5xl md:text-[8vw] font-bold big-cursor'>Bags & Wallets</h1>
                <p className=' font-sans px-2 w-fit md:w-full md:px-8 py-2 rounded bg-primary text-white text-xs md:text-base'>Where Tradition, innovation and Quality Come Together.</p>
            </div>
            <Image
                className=' w-full h-full object-cover z-0'
                width={5000}
                height={5000}
                alt='heroimage'
                src="/images/hero/human1.jpeg"
            />
        </div>
    );
}

export default Hero;