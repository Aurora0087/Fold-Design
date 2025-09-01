"use client"

import type React from "react"
import { useState } from "react"
import Wrapper from "../Wrapper" // adjust this path if your Wrapper is located elsewhere
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

function Contactus() {
    const TO_EMAIL = "fd.folddesign@gmail.com"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Basic guard
        if (!TO_EMAIL) return

        const safeSubject = encodeURIComponent(subject || "New message from contact form")
        const bodyLines = [`Name: ${name}`, `Email: ${email}`, "", message]
        const safeBody = encodeURIComponent(bodyLines.join("\n"))

        const mailto = `mailto:${TO_EMAIL}?subject=${safeSubject}&body=${safeBody}`

        setSending(true)
        try {
            // This will open the user's default email client
            window.location.href = mailto
        } finally {
            // Reset the loading state shortly after navigation attempt
            setTimeout(() => setSending(false), 500)
        }
    }

    return (
        <Wrapper>
            <div className="h-full rounded-xl w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-4 gap-x-8 p-4 md:p-8">
                <div className="border border-primary rounded-xl p-4">
                    <h2 className="text-5xl mb-16">Call Us or fill the form</h2>
                    <div className=" flex flex-col gap-8 font-sans">
                        <div className=" flex gap-4 items-center">
                            <Phone className=" w-8 h-8 text-green-400" />
                            <div className="flex flex-col">
                                <span className=" font-bold">Don't hesitate to contact us</span>
                                <div className=" flex flex-wrap gap-4">
                                    <a href="tel:+919163649163" className="hover:text-black/50">+919163649163</a>
                                    <a href="tel:+919331863123" className="hover:text-black/50">+919331863123</a>
                                </div>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center">
                            <Mail className=" w-8 h-8 text-red-400" />
                            <div className="flex flex-col">
                                <div className=" font-bold">Email:</div>
                                <a href='mailto:fd.folddesign@gmail.com' className=' hover:text-black/50'>fd.folddesign@gmail.com</a>
                                <a href='mailto:zayankaizer@fold-design.com' className=' hover:text-black/50'>zayankaizer@fold-design.com</a>
                            </div>
                        </div>
                        <div className=" flex gap-8 py-4 border-t border-primary items-center justify-center">
                            <a href="https://www.instagram.com/fd.folddesign?igsh=MXByZ3R5ZDhvN3hxdw%3D%3D" target="_blank" className=" text-red-400 hover:text-primary">
                                <Instagram className=" w-8 h-8" />
                            </a>
                            <a href="https://www.linkedin.com/company/fold-design/?viewAsMember=true" target="_blank" className=" text-blue-400 hover:text-primary">
                                <FaLinkedin width={40} height={40} className=" w-8 h-8" />
                            </a>
                            <a href="mailto:fd.folddesign@gmail.com" target="_blank" className=" text-red-400 hover:text-primary">
                                <Mail className=" w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-5xl md:text-[10vw] text-primary text-balance">Get In Touch</h2>
                    <p className=" font-sans text-black/50">
                        Please Send us an email, If You have a question or would like to start cooperation with us.</p>

                    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl grid grid-cols-1 gap-4 font-sans" aria-label="Contact form">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-2 w-full rounded-md border border-primary/40 bg-background px-3 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-2 w-full rounded-md border border-primary/40 bg-background px-3 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="text-sm font-medium">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                placeholder="What can we help with?"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="mt-2 w-full rounded-md border border-primary/40 bg-background px-3 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                placeholder="Tell us a bit more..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-2 w-full rounded-md border border-primary/40 bg-background px-3 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                aria-label="Send message via your email app"
                                disabled={sending || !name || !email || !subject || !message}
                                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary py-2 text-white disabled:opacity-60 px-8"
                            >
                                {sending ? "Opening…" : "Send"}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </Wrapper>
    )
}

export default Contactus
