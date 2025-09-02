'use client'


import dynamic from "next/dynamic";
import About from "@/components/home/about/About";
import Products from "@/components/home/products/Products";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";


const Hero = dynamic(() => import("@/components/home/hero/Hero"), { ssr: false })

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 1500)
      }
    )()
  }, [])

  return (
    <div className="h-full w-screen relative">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className=" fixed top-0 right-0 h-screen w-12 z-50 grid place-content-center gap-2 pointer-events-none">
        <a href="mailto:fd.folddesign@gmail.com" target="_blank" className="relative bg-white rounded p-1 pointer-events-auto">
          <Mail className=' text-red-400 hover:text-primary w-8 h-8' />
        </a>
        <a href="https://www.linkedin.com/company/fold-design/?viewAsMember=true" target='_blank' className=' relative bg-white rounded p-1 pointer-events-auto'>
          <FaLinkedin className=' text-blue-400 hover:text-primary w-8 h-8' />
        </a>
        <a href="https://www.instagram.com/fd.folddesign?igsh=MXByZ3R5ZDhvN3hxdw%3D%3D" target='_blank' className=' bg-white rounded p-1 pointer-events-auto'>
          <Instagram className=' text-red-400 hover:text-primary w-8 h-8' />
        </a>
      </div>
      <Hero />
      <About />
      <Products />
    </div>
  );
}
