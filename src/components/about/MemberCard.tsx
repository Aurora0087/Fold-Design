"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function MemberCard({ title = "abcd",imgUrl="/images/works/3.jpg",vidUrl="/videos/meme/meme1.mp4",name="unknown human",scale=1, rotate }: { title?: string,imgUrl?:string,vidUrl?:string,name?:string,scale?:any,rotate?:any }) {

    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            style={{
                background: "linear-gradient(#C2FF3F, transparent )",
                scale: scale,
                rotate:rotate
            }}
            className='rounded-2xl p-[2px] overflow-hidden uppercase w-full h-full'
        >
            <div className='bg-slate-900 relative rounded-2xl overflow-hidden uppercase border-t-2 border-slate-900 w-full min-h-[500px] h-full z-10'>
                
                <motion.div
                    variants={{
                        initial: {
                            opacity: 1,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        },
                        hover: {
                            opacity: 0,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        }
                    }}
                    className='absolute top-0 left-0 w-full h-full bg-slate-500 z-0'
                >
                    <Image src={imgUrl} alt={imgUrl} width={500} height={500} className='object-cover w-full h-full' />
                </motion.div>

                <motion.div
                    variants={{
                        initial: {
                            opacity: 0,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        },
                        hover: {
                            opacity: 1,
                            transition: { duration: 0.8, ease: "easeInOut" }
                        }
                    }}
                    className='absolute top-0 left-0 w-full h-full bg-slate-500 z-0'
                >
                    <video 
                        src={vidUrl}
                        autoPlay
                        loop
                        muted
                        className='object-cover w-full h-full' 
                    />
                </motion.div>

                <div
                    style={{
                        background: "linear-gradient(transparent,#ffffff )",
                    }}
                    className='absolute bottom-0 h-[33%] w-full bg-slate-300'
                ></div>
                
                <div className='absolute grid p-3 text-sm bg-slate-800/80 py-4 w-fit h-fit border-r border-b-4 rounded-br-xl border-[#C2FF3F] font-semibold'>
                    {title.split("").map((t, i) => (
                        <span className=' text-center' key={i}>{t}</span>
                    ))}
                </div>

                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: "easeOut",
                        },
                    }}
                    className='absolute bottom-20 w-full pl-4 py-2 text-3xl font-bold text-[#C2FF3F] bg-slate-900 rounded-r-full line-clamp-2 grid'
                >
                    <span>{`@${name}`}</span>
                    <span className='flex gap-2'>
                        {/* Additional content here */}
                    </span>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default MemberCard;
