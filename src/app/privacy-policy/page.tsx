'use client'

import Wrapper from "@/components/home/Wrapper"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



const infoCollact = [
    {
        title: "Personal Information",
        detaills: "This includes your name, email address, phone number, postal address, payment details, and any other information you provide when making a purchase, registering an account, or contacting us."
    },
    {
        title: "Usage Data",
        detaills: "Information about how you use our Site, such as IP address, browser type, device information, pages visited, and time spent browsing."
    },
    {
        title: "Cookies & Tracking Technologies ",
        detaills: "We use cookies and similar tools to enhance your shopping experience, personalize product recommendations, and analyze site performance. You can manage your cookie preferences through your browser settings."
    },
]

const infoUse = [
    {
        title: "Order Processing",
        details: "To process and fulfill your orders, including payment processing, packaging, shipping, and after-sales support."
    },
    {
        title: "Account Management",
        details: "To create and manage your customer account, track orders, and provide personalized recommendations for our handcrafted leather bags, wallets, belts, and accessories."
    },
    {
        title: "Payments",
        details: "We use Razorpay for secure prepaid transactions."
    },
    {
        title: "Marketing & Promotions ",
        details: "To send you newsletters, exclusive offers, and updates about our premium leather goods collections (you can opt out anytime)."
    },
    {
        title: "Service Improvements",
        details: "To analyze feedback and browsing behavior to improve our website, product quality, and customer service."
    },
    {
        title: "Legal Compliance ",
        details: "To meet legal obligations, resolve disputes, and enforce our agreements."
    },
]

const userRight = [
    {
        title: "Access & Correct",
        details: "Update your personal information anytime by logging into your account or contacting us."
    },
    {
        title: "Opt-Out",
        details: "Unsubscribe from promotional emails using the link in our messages or by contacting us."
    },
    {
        title: "Data Requests",
        details: "Request deletion or restriction of your personal information under certain conditions."
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
                                Privacy policy.
                            </motion.h4> </div>
                        <div className=" font-sans flex flex-col gap-4">
                            <p className="">
                                Welcome to Fold Design. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.folddesign.in], purchase our products, or interact with us in any way. By using our Site, you agree to the collection and use of information in accordance with this policy.
                            </p>
                            <p>
                                As a manufacturer, exporter, and brand of premium leather goods, we ensure that our privacy practices align with both customer trust and international data protection standards.
                            </p>
                        </div>


                    </div>
                    <div className=" w-full h-full border border-primary rounded-xl overflow-hidden">
                        <Image
                            className=' w-full h-full object-cover z-0'
                            width={500}
                            height={500}
                            alt='heroimage'
                            src="/images/policy/policy1.jpg"
                        />
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
                            Information We Collect
                        </motion.h4>
                    </div>
                    <p className=" font-sans mt-8">We may collect and process the following types of information:</p>
                    <div className=" font-sans mt-16 border-t border-primary">
                        {
                            infoCollact.map((o, i) =>
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
                            className="whitespace-nowrap w-fit text-5xl md:text-[8vw]"
                        >
                            How We Use Your Information
                        </motion.h4>
                    </div>
                    <p className=" font-sans mt-8">We use your personal information for the following purposes:</p>
                    <div className=" font-sans mt-16 border-t border-primary">
                        {
                            infoUse.map((c, i) =>
                                <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_2fr_4fr] gap-y-8 gap-x-4 border-b border-primary min-h-[25vh] py-8">
                                    <span className="text-primary/50">{`0${i + 1}`}</span>
                                    <span className=" text-3xl">{c.title}</span>
                                    <span>{c.details}</span>
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
                            Your Rights & Choices
                        </motion.h4>
                    </div>
                    <p className=" font-sans mt-8">You have the right to:</p>
                    <div className=" font-sans mt-16 border-t border-primary">
                        {
                            userRight.map((c, i) =>
                                <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_2fr_4fr] gap-y-8 gap-x-4 border-b border-primary min-h-[25vh] py-8">
                                    <span className="text-primary/50">{`0${i + 1}`}</span>
                                    <span className=" text-3xl">{c.title}</span>
                                    <span>{c.details}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_1.61fr] border-b border-primary">
                    <div className="overflow-hidden">
                        <motion.h4
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl"
                        >
                            Data Security
                        </motion.h4> </div>
                    <div className=" font-sans flex flex-col gap-4">
                        <p className="">
                            We take reasonable security measures, including encryption and secure servers, to protect your personal information. However, no method of online data transfer is 100% secure.
                        </p>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_1.61fr] border-b border-primary">
                    <div className="overflow-hidden">
                        <motion.h4
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl"
                        >
                            Third-Party Links
                        </motion.h4> </div>
                    <div className=" font-sans flex flex-col gap-4">
                        <p className="">
                            Our website may contain links to third-party websites or services. We are not responsible for their privacy policies or practices. We encourage you to review their policies before sharing personal data.
                        </p>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_1.61fr] border-b border-primary">
                    <div className="overflow-hidden">
                        <motion.h4
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl"
                        >
                            Children’s Privacy
                        </motion.h4> </div>
                    <div className=" font-sans flex flex-col gap-4">
                        <p className="">
                            Our products and services are not intended for children under 12 years of age. We do not knowingly collect data from children under 12. If we learn that we have inadvertently collected such information, we will delete it immediately.
                        </p>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_1.61fr] border-b border-primary">
                    <div className="overflow-hidden">
                        <motion.h4
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl"
                        >
                            Changes to This Privacy Policy
                        </motion.h4> </div>
                    <div className=" font-sans flex flex-col gap-4">
                        <p className="">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our Site after changes indicates your acceptance of the updated policy.
                        </p>
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