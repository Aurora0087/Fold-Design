'use client'

import Wrapper from "@/components/home/Wrapper"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



const offers = [
    {
        title: "Custom goods",
        detaills: "Custom leather goods manufacturing for private labels."
    },
    {
        title: "Bulk production",
        detaills: "Bulk production for wholesalers and retailers."
    },
    {
        title: "OEM & ODM",
        detaills: "OEM & ODM services tailored to client specifications."
    },
    {
        title: "Worldwide shipping",
        detaills: "Worldwide export and shipping to over [X] countries"
    },
]

const certifications = [
    {
        title: "certifications1"
    },
    {
        title: "certifications2"
    },
    {
        title: "certifications3"
    },
    {
        title: "certifications4"
    },
]

function page() {
    const translate: any = {
        initial: {
            y: "100%",
            opacity: 0
        },
        enter: (i: any) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        }),
        exit: (i: any) => ({
            y: "100%",
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        })
    }
    return (
        <div className="my-16 flex flex-col gap-16">
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1.61fr_1fr] min-h-[80vh]">
                    <div className=" flex flex-col justify-between">
                        <div className="overflow-hidden">
                            <motion.h4
                                custom={[0.3, 0]}
                                variants={translate}
                                initial="initial"
                                whileInView="enter"
                                exit="exit"
                                className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                            >
                                About us
                            </motion.h4> </div>
                        <div className=" font-sans flex flex-col gap-4">
                            <p className="">Welcome to FOLD DESIGN, your trusted partner in premium leather goods manufacturing and exporting. Based in India, we are a globally recognized leather goods manufacturer, wholesale supplier, and private label producer serving brands, retailers, and wholesalers across the world.</p>
                            <p>We specialize in handcrafted leather bags, wallets, belts, accessories, and custom-made leather products. Our team of skilled artisans combines traditional craftsmanship with modern design techniques to produce export-quality leather goods that meet international standards.</p>
                        </div>


                    </div>
                    <div className=" w-full h-full border border-primary rounded-xl overflow-hidden">
                        <Image
                            className=' w-full h-full object-cover z-0'
                            width={500}
                            height={500}
                            alt='heroimage'
                            src="/images/hero/hero.jpg"
                        />
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.61fr] gap-8">
                    <div className=" w-full h-full border border-primary rounded-xl overflow-hidden">
                        <Image
                            className=' w-full h-full object-cover z-0'
                            width={500}
                            height={500}
                            alt='heroimage'
                            src="/images/hero/about2.jpg"
                        />
                    </div>
                    <div className=" flex flex-col justify-between">
                        <div className="overflow-hidden">
                            <motion.h4
                                custom={[0.3, 0]}
                                variants={translate}
                                initial="initial"
                                whileInView="enter"
                                exit="exit"
                                className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                            >
                                Our Mission
                            </motion.h4>
                        </div>
                        <p className=" font-sans mt-8">To preserve the art of authentic leather craftsmanship while offering modern, functional designs that last for years. We aim to be the go-to leather goods supplier for businesses and a trusted brand for customers who value quality over quantity.</p>
                    </div>

                </div>
            </Wrapper>
            <Wrapper>
                <div className="">
                    <div className="overflow-hidden">
                        <motion.h4
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                        >
                            What We Offer
                        </motion.h4>
                    </div>
                    <p className=" font-sans mt-8">As both a manufacturer and brand, we understand the needs of businesses and individual customers alike. We offer:</p>
                    <div className=" font-sans mt-16 border-t border-primary">
                        {
                            offers.map((o, i) =>
                                <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_2fr_4fr] gap-y-8 gap-x-4 border-b border-primary min-h-[25vh] py-8">
                                    <span className="text-primary/50">{`0${i + 1}`}</span>
                                    <span className=" text-3xl">{o.title}</span>
                                    <span>{o.detaills}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div id="certifications" className="">
                    <div className="overflow-hidden">
                        <motion.h4
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                        >
                            Certifications
                        </motion.h4>
                    </div>
                    <div className=" font-sans mt-16 border-t border-primary">
                        {
                            certifications.map((c, i) =>
                                <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_2fr_4fr] gap-y-8 gap-x-4 border-b border-primary min-h-[25vh] py-8">
                                    <span className="text-primary/50">{`0${i + 1}`}</span>
                                    <span className=" text-3xl">{c.title}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className=" rounded-xl border border-primary w-full h-[50vh] flex justify-center items-center gap-8 flex-col p-4">
                    <div className="bg-primary w-24 h-1 rounded-full"></div>
                    <h2 className=" font-bold text-5xl uppercase text-center md:text-left">
                        ready to make something amazing?
                    </h2>
                    <Link className='p-4 px-16 rounded-full bg-primary text-white font-sans font-bold w-fit hover:bg-primary/50' href='/contact'>Get In Touch</Link>
                </div>
            </Wrapper>
        </div>
    )
}

export default page