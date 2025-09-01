'use client'

import Wrapper from "@/components/home/Wrapper"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



const offers = [
    {
        imgsrc: "/images/about/craft.jpg",
        title: "Generational Craftsmanship",
        detaills: "Hand-selected hides and hand‑stitched panels by master artisans."
    },
    {
        imgsrc: "/images/about/prim.jpg",
        title: "Premium Materials",
        detaills: "Only full‑grain, responsibly tanned leather for lasting character."
    },
    {
        imgsrc: "/images/about/sustain.jpg",
        title: "Sustainable Vision",
        detaills: "Small‑batch production and waste‑reducing cutting patterns."
    },
    {
        imgsrc: "/images/about/custom.jpg",
        title: "Customization at Scale",
        detaills: "From monograms to private‑label, we make your ideas tangible."
    },
    {
        imgsrc: "/images/about/genu.webp",
        title: "Lifetime Promise",
        detaills: "Complimentary repairs and re‑conditioning so it ages beautifully."
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
        <div className="my-16 flex flex-col gap-16 max-w-screen">
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1.61fr_1fr]">
                    <div className=" flex flex-col">
                        <div className="overflow-hidden">
                            <motion.h4
                                custom={[0.3, 0]}
                                variants={translate}
                                initial="initial"
                                whileInView="enter"
                                exit="exit"
                                className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                            >
                                About us.
                            </motion.h4> </div>
                        <div className=" font-sans flex flex-col gap-4">
                            <p className="">FOLD DESIGN is an export house of international repute based in Kolkata, engaged in the manufacture and export of high fashion leather bags and accessories, both for men and women. Since our establishment in 1990, we have deeply embedded the principles of excellence and kaizen to provide high quality products at a reasonable cost to our customers.</p>
                            <p>Given our focus on quality, we are proudly affiliated as a technical associate of BLC Leather Technology Centre, U.K. The partnership has helped us to keep a strict vigil on our quality parameters and has kept them at par with international standards. As a result of our work on quality and on-time delivery, we have been able to serve the world's leading retailers for over 20 years.</p>
                        </div>
                    </div>
                    <div className=" w-full h-full text-black p-4 md:border-l border-primary md:mt-16">
                        <div className=" pb-8 border-b border-primary">
                            <h4 className=" text-3xl font-bold mb-8">Our Vision</h4>
                            <p className=" font-sans"> Even today, the tag "Made in India" is looked down upon on a global level. Over the years, through our craftsmanship and strict attention to detail, we aim to change this narrative.</p>
                        </div>
                        <div className=" my-8">
                            <h4 className=" text-3xl font-bold mb-8">Our Mission</h4>
                            <p className=" font-sans"> To help uphold the trust and relationship that brands have built with their customers over the years, and overdeliver every step of the way.</p>
                        </div>
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
                            Why choice us.
                        </motion.h4>
                    </div>
                    <p className=" font-sans mt-8">We hand‑make premium leather goods using full‑grain hides and time‑tested techniques—delivering durability, comfort, and character that only improves with age.</p>
                    <div className=" font-sans mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {
                            offers.map((o, i) =>
                                <div key={i} className=" overflow-hidden relative py-8 gap-8 p-4 grid grid-rows-[2fr_1fr] bg-white shadow hover:scale-105 transition-all">
                                    <div className=" overflow-hidden border rounded-xl h-full w-full">
                                        <Image width={500} height={500} alt="" className=" w-full h-full object-cover" src={o.imgsrc} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h2 className=" text-3xl">{o.title}</h2>
                                        <p className=" text-primary/80">{o.detaills}</p>
                                    </div>
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
                            Certifications.
                        </motion.h4>
                    </div>
                    <div className=" font-sans mt-16 border-t border-primary flex justify-center items-center">
                        <Image width={1000} height={500} alt="" src="/images/about/scrti.jpeg" />
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