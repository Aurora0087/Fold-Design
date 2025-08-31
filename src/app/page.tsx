'use client'


import dynamic from "next/dynamic";
import About from "@/components/home/about/About";
import Products from "@/components/home/products/Products";
import Wrapper from "@/components/home/Wrapper";
import Preloader from "@/components/Preloader/Preloader";
import StickyCursor from "@/components/stickyCursor/StickyCursor";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


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
    <div className="h-full my-16 w-screen relative flex flex-col gap-16">
      <StickyCursor />
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <About />
      <Products />
      <Wrapper>
        <div className="p-4 md:p-8 border-x border-primary">
          <h2 className=" font-bold text-5xl">
            We are dedicated to sourcing ethical leather and primarily collaborate with LWG-gold certified tanneries. </h2>
          <p className="font-sans mb-4  mt-16">
            With our strong, dedicated team, we actively source a diverse range of materials from Europe and Asia to meet the evolving preferences of our clients. Our hardware and components are primarily sourced from China, as well as India and Hong- Kong, and all hardware used is REACH-compliant, ensuring superior quality and safety.
          </p>
          <p className=" font-sans mt-4">In line with our sustainability goals, we also integrate eco-friendly alternatives such as Apple Skin, Cactus Leather, PU, and other innovative materials—continually advancing toward more responsible and forward-thinking leather craftsmanship.</p>
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
  );
}
