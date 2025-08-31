"use client"

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../hooks/use-outside-click';
import { CgClose } from 'react-icons/cg';

function FAQs() {

    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );

    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    //useOutsideClick(ref, () => setActive(null));

    return (
        <div className=' w-full h-fit py-8'>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-content-center z-[80] w-screen p-8">
                        <motion.button
                            key={`button-${active.question}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 w-fit lg:hidden items-center justify-center text-white rounded-full h-6"
                            onClick={() => setActive(null)}
                        >
                            <CgClose />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.question}-${id}`}
                            ref={ref}
                            className="w-full max-w-[250px] md:max-w-[500px] mt-8 h-fit md:max-h-[90%] flex flex-col bg-neutral-900 rounded-md overflow-hidden border-t-4"
                        >
                            <div className=' w-fit'>
                                <div className="flex justify-between items-start p-4">
                                    <motion.h3
                                        layoutId={`index-${active.question}-${id}`}
                                        className="font-medium text-[#C2FF3F] px-4"
                                    >
                                        {`FAQ:`}
                                    </motion.h3>
                                    <div className="">
                                        <motion.h3
                                            layoutId={`question-${active.question}-${id}`}
                                            className="font-bold text-[#C2FF3F]"
                                        >
                                            {active.question}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`answer-${active.answer}-${id}`}
                                            className="text-neutral-400"
                                        >
                                            {active.answer}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-200 overflow-auto text-xs md:text-sm lg:text-base md:h-fit pb-10 flex flex-col items-start gap-4 [mask:linear-gradient(to_bottom,white,white,transparent)]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className=" px-8 mx-auto w-full gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.question}-${id}`}
                        key={`card-${card.question}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center border-b-2 border-[#C2FF3F] rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.h3
                                layoutId={`index-${card.question}-${id}`}
                                className="font-medium text-[#C2FF3F] px-4"
                            >
                                {`00${index + 1}`}
                            </motion.h3>
                            <div className="">
                                <motion.h3
                                    layoutId={`question-${card.question}-${id}`}
                                    className="font-medium text-white dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.question}
                                </motion.h3>
                                <motion.p
                                    layoutId={`answer-${card.answer}-${id}`}
                                    className="text-neutral-400 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.answer}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </div>
    )
}

const cards = [
    {
        question: "What is the return policy?",
        answer: "Our return policy allows you to return most items within 30 days of purchase.",
        content: () => {
            return (
                <p>
                    We want you to be completely satisfied with your purchase. If you're not, you can return most items within 30 days of receipt for a full refund or exchange, provided they are in their original condition.
                    <br /><br />
                    Please note that certain items, such as perishable goods, custom-made products, and digital downloads, are not eligible for return. To initiate a return, please contact our customer service team with your order details, and they will guide you through the process.
                </p>
            );
        },
    },
    {
        question: "How can I track my order?",
        answer: "You can track your order using the tracking link provided in your shipping confirmation email.",
        content: () => {
            return (
                <p>
                    Once your order has been shipped, you will receive a confirmation email with a tracking link. Simply click on the link to see the current status of your shipment.
                    <br /><br />
                    If you have not received the shipping confirmation email, please check your spam/junk folder, or contact our customer service team for assistance. Please note that it may take up to 24 hours for the tracking information to be updated by the carrier.
                </p>
            );
        },
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers.",
        content: () => {
            return (
                <p>
                    We aim to make your shopping experience as convenient as possible by offering a variety of payment methods. You can pay for your purchase using major credit and debit cards, including Visa, MasterCard, and American Express.
                    <br /><br />
                    Additionally, we accept payments through PayPal, which provides a secure and easy way to pay online. For larger orders or business transactions, we also accept bank transfers. Please ensure that your payment method is eligible and valid before completing your purchase.
                </p>
            );
        },
    },
    {
        question: "How do I reset my password?",
        answer: "To reset your password, click 'Forgot Password' on the login page and follow the instructions.",
        content: () => {
            return (
                <p>
                    If you've forgotten your password, don't worry! Simply click on the "Forgot Password" link on the login page, and you will be prompted to enter your registered email address.
                    <br /><br />
                    After submitting your email, you will receive a password reset link. Follow the instructions in the email to create a new password. If you don't receive the email within a few minutes, please check your spam/junk folder or contact our support team for further assistance.
                </p>
            );
        },
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries around the world.",
        content: () => {
            return (
                <p>
                    We are pleased to offer international shipping to our customers across the globe. Shipping rates and delivery times vary depending on your location and the shipping method selected.
                    <br /><br />
                    During checkout, you will be able to see the available shipping options and their associated costs. Please be aware that international shipments may be subject to customs fees, taxes, and duties, which are the responsibility of the recipient. For more details, please refer to our shipping policy or contact our customer service team.
                </p>
            );
        },
    },
];


export default FAQs